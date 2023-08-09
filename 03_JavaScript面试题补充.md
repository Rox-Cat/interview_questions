面试题来源

> [「2021」高频前端面试题汇总之JavaScript篇（上） - 掘金 (juejin.cn)](https://juejin.cn/post/6940945178899251230)
>
> * [工作台 · 语雀](https://www.yuque.com/dashboard/collections)

#### 面试题题目

> 主要作为原文的补充

# 数据类型

#### 1. JS的数据类型

数组、函数都属于对象，不是js的数据类型

#### 2. 检测数据类型的方法

##### 2.1 typeof

JavaScript 中的 typeof 运算符是用来判断一个值的类型的，它返回一个表示类型的字符串。

**typeof 检测的原理**

typeof 的原理是根据一个**值的二进制表示**来判断其类型。在 JavaScript 中，不同类型的值有不同的二进制格式，其中前三位或前四位是用来表示类型标签的。

- 例如，对象类型的标签是 000，数字类型的标签是 010，字符串类型的标签是 100，布尔类型的标签是 110，undefined 类型的标签是 001，符号类型的标签是 011，大整数类型的标签是 111。
- 当执行 typeof 时，就会根据这些类型标签来返回相应的字符串。
- 但是，有一个特例，就是 null 类型。由于历史原因，null 类型的二进制表示全为 0，所以它的类型标签也是 000，和对象类型一样。这就导致了 typeof null \=== 'object' 的结果    。这是一个已知的 bug，但由于兼容性问题，无法修复。所以，要判断一个值是否为 null，不能用 typeof，而要用严格相等运算符：value === null。希望这能帮助你理解 JavaScript 中 typeof 的原理。😊

**怎么检测函数类型呢？**

函数类型是 JavaScript 中的一种特殊的对象类型，它有一个内部属性 [[Call]]，表示它可以被调用。函数类型没有自己的类型标签，而是使用对象类型的标签 000。当执行 typeof 时，会检查对象是否具有 [[Call]] 属性，如果有，就返回 'function' 字符串，否则返回 'object' 字符串。所以，typeof 可以检测函数类型，但它并不是通过类型标签来检测的，而是通过内部属性来检测的。

##### 2.2 intanceof 

instanceof运算符会沿着**对象的原型链**向上查找，看是否能找到**构造函数的prototype属性所指向的对象**。换句话说，是否是该构造函数，间接的创造了该对象？

如果能找到，就说明，该对象继承的对象是来自要**检测的构造函数**，就返回true，否则返回false。

注意点：

- 基本数据类型没有原型对象，所以无法使用instanceof来检测，因此只能用来检测对象是属于哪一种对象的
- 如果构造函数的原型属性被修改了，那么检测会失败
- 你待检测的类型如果是Object，那么一定返回true，因为任何其他构造函数产生的对象原型对象最终都指向对象的原型属性

**手写intanceof**

- obj只能是对象或者是函数（函数也是对象），null和undefined都是返回false
- 构造函数只能是函数
- 循环判断是否在原型链上即可

```js
function _instanceOf(obj, constructor) {
    // 1. obj只能是对象/函数/null,其中为null直接返回false
    if ((typeof obj !== "object" && typeof obj !== 'function') || obj === null) {
        return false
    }
    // 2. 构造函数只能为函数
    if (typeof constructor !== 'function') {
        throw new Error('constructor must be function')
    }
    // 3. 判断是否在obj的原型链上
    let proto = Object.getPrototypeOf(obj), prototype = constructor.prototype

    while (true) {
        if (proto === null) {
            return false
        }
        if (proto === prototype) {
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }
}
```

测试用例

```js
/* 测试样例 */

// 定义一个构造函数
function Animal(name) {
    this.name = name;
}

// 定义一个原型方法
Animal.prototype.say = function () {
    console.log(this.name + " says hello");
};

// 创建一个实例
var cat = new Animal("Tom");

// 使用你的方法和原生的instanceof运算符进行比较
console.log(_instanceOf(cat, Animal)); // true
console.log(cat instanceof Animal); // true

// 定义一个继承自Animal的构造函数
function Cat(name, color) {
    Animal.call(this, name);
    this.color = color;
}

// 设置Cat的原型为Animal的实例
Cat.prototype = Object.create(Animal.prototype);

// 设置Cat的构造函数为自身
Cat.prototype.constructor = Cat;

// 创建一个Cat的实例
var kitty = new Cat("Kitty", "white");

// 使用你的方法和原生的instanceof运算符进行比较
console.log(_instanceOf(kitty, Cat)); // true
console.log(kitty instanceof Cat); // true

console.log(_instanceOf(kitty, Animal)); // true
console.log(kitty instanceof Animal); // true

console.log(_instanceOf(kitty, Object)); // true
console.log(kitty instanceof Object); // true

// 使用一个非对象或非函数进行测试
console.log(_instanceOf(123, Number)); // false
console.log(123 instanceof Number); // false

console.log(_instanceOf("abc", String)); // false
console.log("abc" instanceof String); // false

console.log(_instanceOf(true, Boolean)); // false
console.log(true instanceof Boolean); // false

console.log(_instanceOf(null, Object))
console.log(null instanceof Object)

console.log(_instanceOf(undefined, Object))
console.log(undefined instanceof Object)
// console.log(_instanceOf(cat, "Animal")); // 抛出TypeError异常，因为右侧不是一个对象或函数
// console.log(cat instanceof "Animal"); // 抛出TypeError异常，因为右侧不是一个对象或函数

/* 常见引用数据类型 */
// 定义一个数组
var arr = [1, 2, 3];

// 使用你的方法和原生的instanceof运算符进行比较
console.log(_instanceOf(arr, Array)); // true
console.log(arr instanceof Array); // true

// 定义一个函数
var fn = function () {
    console.log("Hello");
};

// 使用你的方法和原生的instanceof运算符进行比较
console.log(_instanceOf(fn, Function)); // true
console.log(fn instanceof Function); // true

// 定义一个日期对象
var date = new Date();

// 使用你的方法和原生的instanceof运算符进行比较
console.log(_instanceOf(date, Date)); // true
console.log(date instanceof Date); // true

// 定义一个正则表达式对象
var regex = /a+/;

// 使用你的方法和原生的instanceof运算符进行比较
console.log(_instanceOf(regex, RegExp)); // true
console.log(regex instanceof RegExp); // true
```



##### 2.2 Object.prototype.toString

Object.prototype.toString.call()是一个常用的方法，可以用来获取对象的类型。它的基本原理是：

- 每个对象都有一个内部的 [[Class]] 属性，用来表示对象的类型。
- Object.prototype.toString() 方法会返回一个表示该对象类型的字符串，格式为 “[object [[Class]]]”。
- 调用call()方法，可以改变toString()方法的this指向，从而检测任意对象的类型。
- 如果对象有Symbol.toStringTag属性，那么toString()方法会优先使用该属性作为Type。

例如：

```javascript
// 原始类型
Object.prototype.toString.call(123); // "[object Number]"
Object.prototype.toString.call("abc"); // "[object String]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(Symbol()); // "[object Symbol]"
// 内置对象
Object.prototype.toString.call([]); // "[object Array]"
Object.prototype.toString.call({}); // "[object Object]"
Object.prototype.toString.call(function(){}); // "[object Function]"
Object.prototype.toString.call(new Date()); // "[object Date]"
// 自定义对象
class Person {}
var p = new Person();
p[Symbol.toStringTag] = "Person";
Object.prototype.toString.call(p); // "[object Person]"
```

使用这个方法的好处是可以准确地判断不同类型的对象，包括null和undefined。它比typeof运算符和instanceof运算符更可靠，因为它不会受到原型链或者全局环境的影响。

#### 3. isPrototypeOf

> [isPrototypeOf、instanceof、hasOwnProperty函数介绍 - 简书 (jianshu.com)](https://www.jianshu.com/p/44ba37660b4a)

简单来说就是判断A是不是B的原型A.prototype.isPrototypeOf(B)

isPrototypeOf是一个方法，用于检测一个对象是否是另一个对象的原型，或者说一个对象是否被包含在另一个对象的原型链中。

例如：

```javascript
// 定义一个构造函数Foo
function Foo() {}
// 定义一个构造函数Bar，继承自Foo
function Bar() {}
Bar.prototype = Object.create(Foo.prototype);
// 创建一个Foo的实例foo
var foo = new Foo();
// 创建一个Bar的实例bar
var bar = new Bar();
// 检测foo是否是bar的原型
Foo.prototype.isPrototypeOf(bar); // true
// 检测bar是否是foo的原型
Bar.prototype.isPrototypeOf(foo); // false
```

使用这个方法的好处是可以准确地判断对象之间的原型关系。它比instanceof运算符更可靠，因为它不会受到Symbol.hasInstance属性的影响。

#### 5. typeof null的结果为什么是object

typeof 通过变量内部的标记位来判断，而 null 的标记位是 0，与对象的标记位相同，因此 typeof null 返回的结果是 "object"。

#### 8. 获得undefined值

void是一个一元运算符，它可以让任何表达式的结果变成undefined。它常用于获取undefined的原始值，或者在不需要返回值的情况下执行某个表达式。它也可以用于阻止链接跳转或创建立即执行函数表达式。

#### 11. 类型转换总结

##### 参考笔试题即可

对于转为Boolean，可以理解为只有基本数据类型的特例才会为false，例如：undefined，null，NaN，0，""，

##### 对象类型转换

> https://zh.javascript.info/object-toprimitive#tostringvalueof
>
> 注意一下，判断规则，即这个hint是什么？
>
> - 四则运算，number
> - 期望一个字符串时，二元相加，其中有一个字符串时
> - 不明确：对象相加，判断与字符串、数字是否相等时

1. JavaScript会根据不同的上下文，选择一个**提示**（hint），表示需要转换为哪种类型的原始值，有三种可能的提示："string"、"number"和"default"。
2. JavaScript会调用对象的**Symbol.toPrimitive**方法（如果存在的话），并传入提示作为参数，这个方法是一个特殊的内置方法，可以自定义对象的转换行为，它必须返回一个原始值 。
3. 如果对象没有Symbol.toPrimitive方法，或者该方法没有返回一个原始值，JavaScript会继续尝试调用对象的**toString**或**valueOf**方法（取决于提示），这两个方法也必须返回一个原始值 。
4. 如果提示是"string"，JavaScript会优先调用toString方法，如果该方法不存在或者没有返回一个原始值，就会调用valueOf方法 。
5. 如果提示是"number"或"default"，JavaScript会优先调用valueOf方法，如果该方法不存在或者没有返回一个原始值，就会调用toString方法 。
6. 如果以上步骤都没有得到一个原始值，JavaScript会抛出一个**TypeError**异常，表示无法将对象转换为原始值 。

#### 15. Object.is

Object.is() 方法是 ES6 新增的一个比较方法，用于判断两个值是否相等。与全等运算符（===）的区别在于，Object.is() 方法对于 NaN 和 +0/-0 的判断更为准确。

Object.is() 方法的语法如下：

```
Object.is(value1, value2)
```

其中，value1 和 value2 是要进行比较的两个值。如果两个值相等，该方法返回 true，否则返回 false。

与全等运算符（===）相比，Object.is() 的行为更加准确，具体表现如下：

1. 对于 +0 和 -0，Object.is() 方法会返回 false，而全等运算符会返回 true。

```
console.log(Object.is(+0, -0)); // 输出 "false"
console.log(+0 === -0); // 输出 "true"
```

2. 对于 NaN，Object.is() 方法会返回 true，而全等运算符会返回 false。

```
console.log(Object.is(NaN, NaN)); // 输出 "true"
console.log(NaN === NaN); // 输出 "false"
```

3. 对于其它情况，Object.is() 方法的行为与全等运算符相同。

```
console.log(Object.is(1, 1)); // 输出 "true"
console.log(1 === 1); // 输出 "true"
```

需要注意的是，Object.is() 方法与相等运算符（==）和不等运算符（!=）的行为是不同的。相等运算符和不等运算符会进行类型转换，因此可能会产生意外的结果。例如：

```
console.log(Object.is("1", 1)); // 输出 "false"
console.log("1" == 1); // 输出 "true"
```

在上面的代码中，使用 Object.is() 方法比较字符串 "1" 和数字 1 时，返回 false，而使用相等运算符比较时，会将字符串转换为数字，最终返回 true。因此，在进行比较时，需要根据具体的需求选择合适的比较方法。

#### 16. 包装器类型

**装箱：将基本数据类型转为对象**

原始数据类型本身没有属性和方法，那我们是怎么调用属性和方法的呢？

在访问原始数据类型时，JavaScrip会将其转为对象，然后再获取它的属性，随后再进行销毁。

转换方式如下：

```js
const a = 'abc'
a.length ===> new String(a).length
```

会将其包装为一个字符串的对象，该对象中包含了大量的语法，该字符串的原型指向String.prototype，进一步指向Object.prototype

**拆箱：将对象转为基本数据类型**

也就是上面提到的转为基本数据类型的方式

#### 20. Object.assign()和...扩展运算符

| Object.assign()                | ...扩展运算符                     |
| ------------------------------ | --------------------------------- |
| 浅拷贝                         | 浅拷贝                            |
| 添加到指定对象中               | Object.assign()添加到指定对象中， |
| 可以保留属性描述符（get和set） | 不能                              |

#### 21. 判断数组为空

不能使用obj === {}的原因，是因为对象的比较是引用是否相同

1. ##### 一些其他方法

   我可以帮你找到一些js中判断对象为空的方法。根据搜索结果¹²³⁴，有以下几种方法：

   - 直接使用 `object == null` 去判断，对象为null的时候返回true,不为null的时候返回false。
   - 使用 `Object.keys(object).length === 0` 去判断，对象没有自身可枚举属性的时候返回true，否则返回false。
   - 使用 `JSON.stringify(object) === "{}"` 去判断，对象对应的字符串为 "{}" 的时候返回true，否则返回false。
   - 使用 `Object.getOwnPropertyNames(object).length === 0` 去判断，对象没有自身属性（包括不可枚举属性）的时候返回true，否则返回false。这种方法不能遍历symbol属性。


2. ##### Object()常用方法

   Object.keys()是一个JavaScript的内置方法，它的作用是返回一个给定对象的自身==可枚举属性==组成的==数组==，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致。例如：

   ```js
   var obj = {name: "Tom", age: 20, hobby: "reading"};
   console.log(Object.keys(obj)); // ["name", "age", "hobby"]
   ```

   Object.keys()的语法是`Object.keys(obj)`，其中obj是要返回其枚举自身属性的对象。如果obj不是一个对象，那么在ES5中会抛出TypeError，而在ES2015+中会被强制转换为一个对象。

   除了Object.keys()之外，还有一些相关的方法可以用来获取对象的属性或者值，例如：

   - Object.values()：返回一个给定对象自身可枚举属性值组成的数组。
   - Object.entries()：返回一个给定对象自身可枚举属性键值对组成的数组。
   - Object.getOwnPropertyNames()：返回一个由指定对象所有自身属性（包括不可枚举属性）名称组成的数组。
   - Object.prototype.propertyIsEnumerable()：判断指定属性是否可枚举。



# ES6

#### 3. 箭头函数

1. 写法简洁
2. 没有自己的this
   - this来源，定义时的上下文中的this，调用时不会被修改
   - 他的this不会被三种方法修改
3. 没有prototype
4. 箭头函数不能当做构造函数来使用



#### 6. 扩展运算符

- 将参数对象的==可枚举属性==，拷贝出来。

- 扩展运算符只能对非嵌套数据进行深拷贝。对于嵌套数据，它只能对最顶层数据进行深拷贝，而对嵌套数据进行浅拷贝

- 可以将某些数据结构（比如类数组）转换为数组[...arguments]

- 解构 + 扩展运算符：生成数组

  ```python
  [first, ...second] = [1, 2, 4, 5]
  相当于：
  ...second = 2, 4, 5
  => second = [2, 4, 5]
  ```


#### 7. 解构

- 数组解构：一对一赋值即可
- 对象结构：指定属性名，进行解构。精确解构 

##### 7.1 多层数据的解构

：+{属性名}

#### 11. 数组的常用方法





# JavaScript基础

#### 1. new的实现原理

> [JavaScript实现new - 搜索 - 掘金 (juejin.cn)](https://juejin.cn/search?query=JavaScript实现new&fromSeo=1&fromHistory=0&enterFrom=detail_page&type=0)
>
> [手写源码系列（三）：new操作符的实现 - 掘金 (juejin.cn)](https://juejin.cn/post/6844904005223579655?searchId=20230718212329C8023B9D174858DF57F0)

##### 明确new的特性

1. 构造函数的内容一般是this.xxx = xxx，因此我们要创建一个对象
2. 构造函数创建的对象的原型对象来自于构造函数的prototype属性
3. 如果构造函数返回对象，那么new的对象就是该返回值，否则返回值为新建的对象

##### 实现功能步骤

1. 新建一个空的对象，并配置它的原型对象
2. 将this进行赋值，也就是修改构造函数的this执行，并传递参数
3. 检测返回值

##### 实现new

```js
function myNew(constructor, ...args) {
    // 0. 预处理，判断是不是一个函数
    if (typeof constructor !== "function") throw new Error

    // 1. 创建一个新的对象，对象的原型对象为constructor.prototype
    // create用于创建新对象并且为新对象设置原型对象
    let newObj = Object.create(constructor.prototype)

    // 2. 将参数传入到构造函数中，并且修改构造函数的this指向
    let res = constructor.call(newObj, ...args)

    // 判断返回值:如果是对象，则返回对象，反之返回新对象
    return Object.prototype.toString.call(res) === "[object Object]" ? res : newObj

}

```

##### 测试代码

```js
function Student(name, age) {
    this.class = '3.5';
    // return {
    //     name: name,
    //     age: age
    // }
}	
function myNew(constructor, ...args){....}

let newPerson = new Student('hanson', 18)
let newPerson1 = myNew(Student, 'hanson', 18)
console.log(newPerson)
console.log(newPerson1) 
```





#### 12. 类数组元素转为数组

- 类数组的定义
  - length属性
  - 索引属性
  - 不能调用数组的方法和属性
- 类数组转为数组
  - Array.prototype.forEach.call()
  - Array.prototype.splice.call(arguments)
  - Array.from(arguments)
  - [...arguments]

#### 13 DOM和BOM

DOM是文档对象模型（Document Object Model），它把网页看成一个由节点组成的树形结构，每个节点代表网页中的一个元素，比如标题、段落、图片等。通过DOM，我们可以用JavaScript来访问和修改网页中的任何内容、结构和样式。DOM是W3C（万维网联盟）的标准，它适用于HTML和XML文档。



BOM是浏览器对象模型（Browser Object Model），它提供了一些与浏览器窗口进行交互的对象，比如window、location、navigator、screen、history等。通过BOM，我们可以用JavaScript来控制浏览器的行为，比如跳转到另一个页面、改变状态栏的文本、弹出新的窗口等。BOM没有一个统一的标准，不同的浏览器可能实现了不同的BOM对象和方法。

DOM和BOM之间的关系是，DOM是BOM的window对象的一个子对象，也就是说，我们可以通过window.document来访问DOM。¹²

#### 19. CommonJS和ES6的异同

CommonJs 和 ES6 Module 都是 JavaScript 的模块化规范，它们有一些共同点和不同点。

共同点：

- 都可以实现模块的导入和导出，避免变量污染和文件依赖的问题。
- 都可以对导入的对象进行赋值，即修改对象内部属性的值。

不同点：

- CommonJs 是对模块的浅拷贝，ES6 Module 是对模块的引用。这意味着 CommonJs 导出的是一个值的副本，而 ES6 Module 导出的是一个值的引用。因此，如果模块内部的值发生了变化，CommonJs 导入的值不会改变，而 ES6 Module 导入的值会跟随改变。ES6是只存只读的，不能修改导入变量的值
- CommonJs 可以动态导入，ES6 Module 只能静态导入。这意味着 CommonJs 可以在运行时根据条件或变量来导入模块，而 ES6 Module 只能在编译时确定导入的模块。
- CommonJs 可以重复导入，ES6 Module 不可以重复导入。这意味着 CommonJs 如果多次导入同一个模块，会执行多次模块代码，而 ES6 Module 如果多次导入同一个模块，只会执行一次模块代码。

##### 对于浅拷贝的和值引用的解释：

假设我们有一个模块 module.js，它导出了一个变量 num 和一个函数 add：

```javascript
// module.js
let num = 1;
function add() {
  num++;
}
module.exports = {
  num,
  add
};
```

如果我们使用 CommonJs 来导入这个模块，我们可以这样写：

```javascript
// commonjs.js
const module = require('./module.js');
console.log(module.num); // 1
module.add();
console.log(module.num); // 1
module.num++;
console.log(module.num); // 2
```

可以看到，CommonJs 导入的是 module.js 的值的拷贝，所以当 module.js 内部的 num 变化时，导入的 num 不会变化。同时，我们也可以修改导入的 num 的值，因为它是一个副本。

如果我们使用 ES6 Module 来导入这个模块，我们可以这样写：

```javascript
// es6module.js
import { num, add } from './module.js';
console.log(num); // 1
add();
console.log(num); // 2
num++;
console.log(num); // 报错：Assignment to constant variable.
```

可以看到，ES6 Module 导入的是 module.js 的值的引用，所以当 module.js 内部的 num 变化时，导入的 num 也会跟随变化。同时，我们不能修改导入的 num 的值，因为它是一个只读的常量。

#### 20. for ... in ...

1. 遍历对象的可枚举属性（不是可迭代，要进行区分）。可枚举属性，是 Object.defineProperty 等定义的那个属性
2. 对象原型链上的可枚举属性也会进行遍历。

#### 21. for ... of ...

1. 遍历可迭代对象的值

2. 原生的可迭代对象有：Array, String, Map, Set, NodeList

3. 什么是可迭代对象：

   可迭代对象是指那些可以被 for...of... 循环遍历的对象，它们有一个内部的 [Symbol.iterator] 属性，用来返回一个迭代器对象。

   JavaScript 中的一些内置类型，如 Array, String, Map, Set, NodeList 等，都是可迭代对象，因为它们都实现了 [Symbol.iterator] 方法。

   自定义的对象也可以变成可迭代对象，只要它们定义了 [Symbol.iterator] 方法，并且返回一个遵循迭代器协议的对象。


#### 27. 简单回答一下ajax、axios、fetch之间的区别

- Ajax 是一种技术的统称，它使用 JavaScript 来实现异步的数据交互。它可以通过不同的方式来发送请求，如 XMLHttpRequest (XHR) 或者 fetch API。
- XMLHttpRequest 是一种原生的 JavaScript 对象，它提供了一种在浏览器和服务器之间交换数据的方法。它可以兼容老旧的浏览器，但是它的 API 不够友好，需要手动处理一些细节，如设置请求头，解析响应数据，处理错误等。
- fetch API 是一种原生的 JavaScript API，它提供了一种更简洁和现代化的方式来发送 HTTP 请求。它基于 Promise，可以使用 async/await 语法来避免回调地狱，也可以使用 Headers, Request, Response 等对象来操作请求和响应。它不支持老旧的浏览器，也不支持取消请求，也不会自动解析 JSON 数据等。
- Axios 是一个基于 Promise 的 HTTP 库，它可以在浏览器和 Node.js 中使用。它使用 XMLHttpRequest 对象来发送请求，并提供了一些高级的功能，如拦截请求和响应，取消请求，转换 JSON 数据，防御 CSRF 等。它也可以兼容老旧的浏览器，但是需要引入 polyfill 来支持 Promise。

总的来说，Ajax 是一种比较传统的技术，它的优点是兼容性好，缺点是 API 不够友好；fetch API 是一种比较新颖的 API，它的优点是简洁和现代化，缺点是兼容性差和功能不足；Axios 是一种比较流行的库，它的优点是功能强大，缺点是需要额外引入依赖。

#### 28. forEach和map方法的区别

forEach和map方法都是用来遍历数组的，但是有一些区别：

- forEach方法没有返回值，而map方法会返回一个新的数组，包含每个元素执行回调函数的结果。
- forEach方法不会改变原数组，除非在回调函数中修改原数组的元素，而map方法不会修改原数组，只会返回一个新的数组。
- map方法可以和其他方法（如reduce、sort、filter）链式调用，而forEach方法不能，因为它返回undefined。
- forEach方法和map方法都不能用break中断遍历，如果需要中断遍历，可以使用for循环或for-of/for-in循环。

总的来说，如果你想要转换数组的元素并返回一个新的数组，可以使用map方法；如果你只是想遍历数组并执行一些操作，不需要返回值，可以使用forEach方法；如果你想要根据条件中断遍历，可以使用for循环或for-of/for-in循环。

# 执行上下文/作用域链/闭包

## 闭包

[闭包知识整理]("E:\研究生\自我学习\前端学习\02_JavaScript\JS学习的必会概念.md")

## 词法环境

[变量作用域，闭包 (javascript.info)](https://zh.javascript.info/closure#ci-fa-huan-jing)

## 作用域

块级作用域：[变量作用域，闭包 (javascript.info)](https://zh.javascript.info/closure#dai-ma-kuai)

## 执行上下文

[彻底搞懂作用域、执行上下文、词法环境 - 掘金 (juejin.cn)](https://juejin.cn/post/7043408377661095967)

作用域是一个代码段所在的区域，它决定了这个代码段可以访问哪些变量和函数。JavaScript中有三种类型的作用域：全局作用域、函数作用域和块级作用域。作用域是静态的，在编写代码时就确定了，而不是在运行时动态改变的。作用域的作用是隔离变量，不同作用域下相同名称的变量不会冲突。

执行上下文是一个抽象概念，它表示当前正在执行的代码所处的环境。执行上下文包含了三个重要的信息：变量环境、词法环境和this绑定。变量环境和词法环境都是存储了当前执行上下文中相关变量和函数的词法环境，区别在于变量环境只包含使用var声明的变量和函数声明，而词法环境包含使用let、const声明的变量、参数、函数表达式等。this绑定表示当前执行上下文中this关键字所指向的对象，它取决于函数的调用方式。执行上下文是动态的，在运行时创建和销毁。JavaScript中有三种类型的执行上下文：全局执行上下文、函数执行上下文和eval执行上下文。执行上下文是按照栈的结构来管理的，也就是说后进先出。

# call()，apply()，bind()

> 优质网站：
>
> - https://zh.javascript.info/call-apply-decorators
>
>   介绍了call和apply的使用

### 简单描述

我们常说的函数有两种，一种是普通函数，可以直接调用，类似于是window的属性，一种是方法，需要被对象来调用。

```js
const obj = {
    name: 'tao',
    fullname(familyName){
        return familyName + this.name
    }
}
```

我们可以通过`obj.fullname(xx)`来使用这个函数，而其他的对象不能使用，我们如果将该方法作为一个函数，是无法正常使用的：

```js
let fullName = obg.fullname
fullName('Wei') // fullname中的this只有在被调用的时候确定，因此我们这样使用时，this是window/undefined
```

那我们该如何将this修改为我们想要的呢？使用`.call()`方法[Function.prototype.call() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)：

```js
obj2 = {
    name: 'chen'
}
funName.call(obj2, 'Wei') // Weichen
```

**.call()还能做什么**？

当我们想使用一些数组等个数据结构的方法时，我们不能直接使用。例如类数组对象arguments没有forEach等方法，我们该怎么使用呢？

1. 将类数组对象转为数组：

   - let args = [...arguments]
   - let args = Array.prototype.slice.call(arguments)，也就是说，我们将slice内部的this修改为了arguments，然后执行slice，获得了一个数组对象

2. call() + forEach

   ```js
   Array.prototype.forEach.call(arguments, function(item)=>{console.log(item)})
   ```

   注意这里第二个参数是，forEach的参数，接收一个回调函数；

除此之外，还可以使用[.apply()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)方法，区别只有apply的第二个参数是一个数组，表示要传入fn的参数。

#### .bind()

我们还可以永久修改方法中的this的指向，也就是说，将this永久替换为一个对象。同时还可以预设参数，详情见：[Function.prototype.bind() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

```js
let func2 = func1(this, arguments)
```

### 三种方法的实现

分别为函数Function添加.call,.apply,.bind方法

#### .call的实现

第一个参数是this的指向，后面是参数序列。

1. 判断当前是不是要给函数添加myCall方法

2. 判断传入的this是否存在，因为有的情况下可能传入null表示不传入新的this执行

   - 如果存在，则使用

   - 不存在更新为window

3. 给thisArg身上添加一个方法，就是Function这个函数。如果我们再次调用thisArg.Function，那么就将Function中的this指向修改为了thisArg，因为thisArg是调用者。
4. 将参数传入thisArg.fn()中
5. 销毁在thisArg中的fn()，因为是地址传递，所以添加函数会直接修改原对象，所以要销毁

```js
Function.prototype.myCall = function (thisArg, ...args){
    // 函数本身是个对象，因此this指的是函数本身
    if (typeof this !== 'function') throw new Error('not a function') 
    
    thisArg = thisArg || window // 2. 
    // 3. 将调用对象作为thisArg的一个属性添加到thisArg对象上，并生成一个唯一的属性名
    const fn = Symbol['fn']   // 使用Symbol类型来避免命名冲突
    thisArg[fn] = this
    //4. 
    let result = thisArg.fn(...args)
    // 5. 
    delete thisArg.fn
    return result  
}
```

#### .apply()的实现

第一个参数时this的指向的对象，第二个是参数序列组成的数组；

实现方法基本同理，注意一下数组的处理

```js
Function.prototype.myCall = function(thisArg, args){
    // 1. 判断是不是函数
    if (typeof this !== 'function') throw new Error('not a function')
    if (!Array.isArrsy(args)) throw new Error('args must be array')
    // 2. 判断thisArg是否为null
    thisArg = thisArg || window
    // 3. 将函数绑定给传递来的thisArg中
    const fn = Symbol['fn']
    thisArg[fn] = this
    let result = thisArg.fn(...args)
    delete thisArg[fn]
   	return result
}
```

#### .bind()的实现

1. 判断是不是一个函数
2. 获取到当前函数（原函数）
3. 返回另外一个函数，函数的结果是原函数传入参数并且修改this的结果
4. 其中this instanceof func2来判断是不是被new了，如果被new了说明this指向的是新函数创建的实例`（let func1 = func2.bind(...）)`，因此可以通过instanceof 来判断
   - 如果是new，那么this使用原来的
   - 如果是正常调用，那么使用新传递的，也就是被修改的。

```js
Function.prototype.mybind = function (context, ...args1) {
    if (typeof this !== 'function') throw new Error('not a function')
    let func = this
    return function func2() {
        return func.call(this instanceof func2 ? this : context,
                         args1.concat([...arguments]))
    }
}
```

# 八、面向对象

### 对象创建的方式有哪些？

##### 使用 **Object构造函数**

这种方式可以创建一个空的对象，然后再动态地添加属性和方法。例如：

```javascript
var obj = new Object();
obj.name = "Alice";
obj.age = 18;
obj.sayHello = function() {
  console.log("Hello, I'm " + this.name);
};
```

- 优点是简单直接，不需要定义额外的构造函数或原型。
- 缺点是每次创建对象都要重复添加属性和方法，没有实现复用，而且代码不够清晰。

- 这种方式适合创建一些简单且**不需要复用**的对象。

##### 使用 **对象字面量**

这种方式可以直接定义对象的属性和方法，更简洁和直观。例如：

```javascript
var obj = {
  name: "Alice",
  age: 18,
  sayHello: function() {
    console.log("Hello, I'm " + this.name);
  }
};
```

- 优点是方便快捷，不需要额外的构造函数或原型。
- 缺点是每次创建对象都要重复写出所有的属性和方法，没有实现复用，而且如果对象很复杂，代码可读性会下降。

- 这种方式适合创建一些简单且**不需要复用**的对象，或者作为配置参数传递给其他函数。

##### 使用 **Object.create()方法**

例如 `var person = {name: "Alice", age: 18}; var obj = Object.create(person)`，这种方式可以直接指定新对象的原型对象，不需要定义构造函数，但不适合创建多个相似的对象。

##### 使用 **工厂模式**

这种方式可以封装创建对象的细节，方便批量生产相似的对象。例如：

```javascript
function createPerson(name, age) {
  var obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.sayHello = function() {
    console.log("Hello, I'm " + this.name);
  };
  return obj;
}

var alice = createPerson("Alice", 18);
var bob = createPerson("Bob", 20);
```

- 优点是**简化了创建对象**的过程。本身没有复用属性和方法。
- 缺点是**无法识别对象的类型**，因为所有的对象都是Object类型。

- 这种方式适合创建一些结构相似且不需要类型区分的对象。

##### 使用 **自定义构造函数**

这种方式可以利用new运算符和this关键字来创建对象，并且可以让对象识别自己的类型。例如：

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log("Hello, I'm " + this.name);
  };
}

var alice = new Person("Alice", 18);
var bob = new Person("Bob", 20);
console.log(alice instanceof Person); // true
```

- 优点是可以**创建特定类型的对象**，方便进行类型检查。
- 缺点是每个实例都会**重新创建一遍方法**，没有实现复用。也就是说，每次都需要新建一个方法，然后绑定到实例上。

- 这种方式适合创建一些需要类型区分且方法较少的对象。

##### 使用 **原型模式**

> 留下一个小疑问？原型模式创建对象的应用场景

这种方式可以利用原型对象来共享属性和方法，节省内存空间。例如：

```javascript
function Person(name, age) {
  // 这里没有定义实例属性
}

Person.prototype.name = "Alice"; // 这里定义了共享属性
Person.prototype.age = 18; // 这里定义了共享属性
Person.prototype.sayHello = function() { // 这里定义了共享方法
  console.log("Hello, I'm " + this.name);
};

var alice = new Person("Alice", 18);
var bob = new Person("Bob", 20);  // 执行该语句之后，原型对象又被修改了
// 创建的实例本身没有属性和方法，全在原型上
```

- 优点是可以**实现属性和方法的复用**，减少内存开销。
- 缺点是所有**实例共享同一个原型**，如果修改原型会影响所有实例，而且不能初始化原型中的属性。

- 这种方式适合创建一些需要类型区分且方法较多且相同的对象。？

##### 使用 **构造函数加原型组合模式**

这种方式可以将实例属性放在构造函数中，将共享属性和方法放在原型中，是最常用的创建对象的方式。例如：

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.name);
};

var alice = new Person("Alice", 18);
var bob = new Person("Bob", 20);
```

- 优点是可以实现**方法的复用**，同时**保持实例的独立性**，也可以初始化原型中的属性。
- 缺点是代码量较多，需要分别定义构造函数和原型。

- 这种方式适合创建一些需要类型区分且属性和方法较多且不同的对象。

##### 其他

除了上述方法还是有动态原型模式，寄生构造函数模式等，我没细看，等有时间再看。

##### 总结

通过new Object()、对象字面量、Object.create来创建，优点是简单，缺点是复用性差，没法方便的创建多个。

工厂模式简单来说是对上述方法的封装，封装为函数，然后返回对象。优点是提高了创建对象的效率。缺点是创建的对象类型不明确，均是继承自Object。

自定义构造函数的方法是工厂模式的优化版本，明确创建对象的类型。

上面两种方法都有一个缺点，那就是重复的创建实例中的方法，没有实现方法的复用。

对于原型模式来说，原型模式将属性和方法均设置在prototype属性中，继承给实例对象，但是会导致所有实例的属性和方法都在原型对象上，导致修改一个，而其他对象的原型也被修改了。

构造函数加原型组合模式是一种比较优秀的方法，实现了方法的复用，并且实例本身是独立的。注意属性是没有复用的，因为在构造函数中每次都会被创建。

### 对象继承的方法有哪些？

> 换句话说，如果设定子类的原型，也就是说如何设定子类实例的原型对象。 
>
> ==> 子类实例的可以使用父类的属性和方法。

##### 原型链继承

- 这种继承方式是通过让**子类的原型**指向**父类的实例**，从而让子类可以继承父类原型链上的所有属性和方法。
- 优点：简单易用，可以实现多重继承。
- 缺点：无法向父类构造函数传递参数，所有子类实例共享父类实例的属性，修改一个子类实例的属性可能会影响其他子类实例。
- 应用场景：适用于不需要传递参数，且不关心原型属性是否被修改的情况。
- 案例1 -> 基本功能：

```javascript
/* 
    实现原型链的继承
        - 将子类的原型指向父类的实力，这样子类的实例就可以访问父类的属性和方法
*/
// 父类
function Animal(species){
    this.species = species 
    this.sayHello = function (){
        console.log(this.name + "hello")
    }
}
// 子类
function Dog(name){
    this.name = name
}

// 设置原型 -> dog的实例可以访问Animal上的属性和方法
Dog.prototype = new Animal()

// 实例测试
dog = new Dog('旺财')
dog.sayHello()
console.log(dog.species)
console.log(dog.name)
console.log(dog instanceof Dog)
console.log(dog instanceof Animal)
```

- 案例2：

```js
// 父类
function Animal(name) {
  this.name = name;
  this.colors = ['black', 'white'];
}
// 父类原型方法
Animal.prototype.getName = function() {
  return this.name;
};

// 子类
function Dog(name, age) {
  this.age = age;
}
// 原型链继承
Dog.prototype = new Animal('dog');
// 子类原型方法
Dog.prototype.getAge = function() {
  return this.age;
};

// 测试
var dog1 = new Dog('旺财', 3);
var dog2 = new Dog('来福', 2);
console.log(dog1.getName()); // dog
console.log(dog2.getName()); // dog
console.log(dog1.colors); // ['black', 'white']
dog1.colors.push('brown');
console.log(dog2.colors); // ['black', 'white', 'brown']
```

##### 构造函数继承

- 这种继承方式是通过在子类构造函数中调用父类构造函数，从而让子类可以继承父类的实例属性和方法。
- 优点：可以向父类构造函数传递参数，可以实现多个子类共享同一个父类实例，子类修改实例属性不会影响其他子类。
- 缺点：无法继承父类原型属性和方法，每个子类都要重新创建父类的实例属性和方法，造成资源浪费。
- 应用场景：适用于需要传递参数，且关心实例属性是否被修改的情况。
- 例子：

```javascript
// 父类
function Animal(name) {
  this.name = name;
  this.colors = ['black', 'white'];
}
// 父类原型方法
Animal.prototype.getName = function() {
  return this.name;
};
// 子类
function Dog(name, age) {
  // 构造函数继承
  Animal.call(this, name);
  this.age = age;
}
// 子类原型方法
Dog.prototype.getAge = function() {
  return this.age;
};
// 测试
var dog1 = new Dog('旺财', 3);
var dog2 = new Dog('来福', 2);
console.log(dog1.getName()); // undefined
console.log(dog2.getName()); // undefined
console.log(dog1.colors); // ['black', 'white']
dog1.colors.push('brown');
console.log(dog2.colors); // ['black', 'white']
```

##### 原型式继承

- 这种继承方式是通过一个函数来创建一个临时的构造函数，然后让这个临时的构造函数的原型指向一个目标对象，从而让这个临时的构造函数的实例可以继承目标对象的属性和方法。
- 优点：简单易用，可以实现对任意对象的浅拷贝。
- 缺点：无法向构造函数传递参数，无法实现多个子类共享同一个父类实例，子类修改原型属性会影响其他子类。
- 应用场景：适用于不需要传递参数，且不关心原型属性是否被修改的情况。
- 例子：

```javascript
// 目标对象
var person = {
  name: '小明',
  friends: ['小红', '小白']
};
// 原型式继承函数
function createObject(o) {
  // 创建一个临时的构造函数
  function F() {}
  // 让这个构造函数的原型指向目标对象
  F.prototype = o;
  // 返回这个构造函数的实例
  return new F();
}
// 测试
var person1 = createObject(person);
var person2 = createObject(person);
console.log(person1.name); // 小明
console.log(person2.name); // 小明
console.log(person1.friends); // ['小红', '小白']
person1.friends.push('小黑');
console.log(person2.friends); // ['小红', '小白', '小黑']
```

JavaScript中对象继承的方式有以下几种：

##### 1.原型链继承

- 通过将子类的原型设置为父类的实例，实现子类对父类属性和方法的继承。
- 优点：可以实现继承，简单易用。
- 缺点：引用类型的属性被所有实例共享，不能向父类传递参数，不能继承多个父类。
- 应用场景：适合单一父类的继承，不涉及引用类型属性的修改。
- 代码案例：

```javascript
function Parent () {
  this.name = 'kevin';
}

Parent.prototype.getName = function () {
  console.log (this.name);
}

function Child () {}

Child.prototype = new Parent ();

var child1 = new Child ();

console.log (child1.getName ()) // kevin
```

 复制

##### 2.借用构造函数 (经典继承)

- 通过在子类的构造函数中调用父类的构造函数，实现子类对父类属性的继承。
- 优点：可以向父类传递参数，可以继承多个父类属性，避免了引用类型属性共享的问题。
- 缺点：只能继承父类的属性，不能继承父类原型的方法，每次创建实例都要创建一遍方法，无法复用。
- 应用场景：适合需要传递参数或者多重继承的情况，不需要复用父类原型的方法。
- 代码案例：

```javascript
function Parent (name) {
  this.name = name;
}

function Child (name) {
  Parent.call (this, name);
}

var child1 = new Child ('kevin');
var child2 = new Child ('daisy');

console.log (child1.name); // kevin
console.log (child2.name); // daisy
```

 复制

##### 3.组合继承

- 通过结合原型链继承和构造函数继承，实现子类对父类属性和方法的完全继承。
- 优点：可以向父类传递参数，可以复用父类原型的方法，避免了引用类型属性共享的问题，是最常用的继承方式。
- 缺点：调用了两次父类构造函数，生成了两份父类属性，存在内存浪费的问题。
- 应用场景：适合大部分的继承需求，不需要考虑内存优化的情况。
- 代码案例：

```javascript
function Parent (name) {
  this.name = name;
}

Parent.prototype.getName = function () {
  console.log (this.name);
}

function Child (name) {
  Parent.call (this, name);
}

Child.prototype = new Parent ();

var child1 = new Child ('kevin');
var child2 = new Child ('daisy');

child1.getName (); // kevin
child2.getName (); // daisy
```

 复制

##### 4.原型式继承

- 通过创建一个函数，将参数作为一个对象的原型对象，返回一个新对象。
- 优点：不需要创建构造函数，简单方便。
- 缺点：跟原型链继承一样，引用类型的属性被所有实例共享，不能向父对象传递参数。
- 应用场景：适合对一个对象进行浅复制或者克隆，不涉及引用类型属性的修改。
- 代码案例：

```javascript
function fun (obj) {
  function Son () {};
  Son.prototype = obj;
  return new Son ();
}

var parent = {
  name: 'kevin'
}

var son1 = fun (parent);
var son2 = fun (parent);

console.log (son1.name); // kevin
console.log (son2.name); // kevin
```

 复制

##### 5.寄生式继承

- 在原型式继承的基础上，在函数内部丰富对象，返回一个新对象。
- 优点：可以对继承的对象进行扩展，增加新的属性或方法。
- 缺点：跟构造函数继承一样，每次创建实例都要创建一遍方法，无法复用，效率较低。
- 应用场景：适合对一个对象进行浅复制或者克隆，并且需要增加一些新的功能。
- 代码案例：

```javascript
function fun (obj) {
  function Son () {};
  Son.prototype = obj;
  return new Son ();
}

function JiSheng (obj) {
  var clone = fun (obj);
  clone.Say = function () {
    console.log ('我是新增的方法');
  }
  return clone;
}

var parent = {
  name: 'kevin'
}

var parent1 = JiSheng (parent);
var parent2 = JiSheng (parent);

console.log (parent2.Say == parent1.Say); // false
```

 复制

##### 6.寄生组合式继承

- 通过借用构造函数继承父类属性，通过寄生式继承父类原型，实现子类对父类属性和方法的完全继承，同时避免了调用两次父类构造函数的问题。
- 优点：集合了构造函数继承和寄生式继承的优点，是最完美的继承方式，也是ES6中class语法糖的实现原理。
- 缺点：实现较为复杂，需要理解原型链和构造函数的关系。
- 应用场景：适合任何继承需求，需要考虑内存优化的情况。
- 代码案例：

```javascript
function Parent (name) {
  this.name = name;
}

Parent.prototype.getName = function () {
  console.log (this.name);
}

function Child (name) {
  Parent.call (this, name);
}

function fun (obj) {
  function Son () {};
  Son.prototype = obj;
  return new Son ();
}

Child.prototype = fun (Parent.prototype);

Child.prototype.constructor = Child;

var child1 = new Child ('kevin');
var child2 = new Child ('daisy');

child1.getName (); // kevin
child2.getName (); // daisy
```

 复制

以上内容参考了以下网页：

[1](https://bing.com/search?q=JavaScript对象继承方式优缺点): [JavaScript深入之继承的多种方式和优缺点 - 知乎](https://bing.com/search?q=JavaScript对象继承方式优缺点) [2](https://zhuanlan.zhihu.com/p/105312152): [6种JavaScript继承方式及优缺点 - 知乎 - 知乎专栏](https://zhuanlan.zhihu.com/p/105312152) [3](https://juejin.cn/post/7017629776437313567): [JavaScript的六大继承方式及其优缺点 - 知乎 - 知乎专栏](https://zhuanlan.zhihu.com/p/395420375) [4](https://zhuanlan.zhihu.com/p/395420375): [js（javascript）实现继承的6种方式以及优缺点详解_借用构造函数继承的缺点_程序牛0314的博客-CSDN博客](https://blog.csdn.net/m0_53592673/article/details/111759078)

# 垃圾回收和内存泄露

#### 1. 垃圾回收的概念

js中的垃圾回收是指自动释放不再使用的变量或对象所占用的内存空间，以防止内存泄漏。

#### 2. 垃圾回收的方式

**js中的垃圾回收机制**主要有两种：标记清除和引用计数。

- 标记清除是最常用的垃圾回收算法，它的原理是通过一个叫做根的对象（比如全局对象window）作为起点，标记所有从根开始直接或间接可达的对象，然后清除所有没有被标记的对象。

- 引用计数是另一种垃圾回收算法，它的原理是给每个对象分配一个引用计数器，每当有一个变量引用这个对象时，计数器加一，每当有一个变量不再引用这个对象时，计数器减一，当计数器为零时，表示这个对象没有被任何变量引用，可以被回收。

  引用计数的缺点是无法处理循环引用的情况，比如两个对象相互引用，但没有被其他变量引用，这样它们的计数器永远不会为零，导致内存泄漏。

**全局变量会被垃圾回收机制清除吗**

全局变量不会被垃圾回收机制清除，除非显式地将其赋值为null或undefined。

全局变量的生命周期会持续到页面卸载，因为它们是从根对象（window）开始直接或间接可达的，所以不会被标记清除算法回收。

全局变量的引用计数也不会为零，因为它们至少被根对象引用一次，所以不会被引用计数算法回收。

所以，全局变量只有在手动将其赋值为null或undefined时，才会断开与原来值的引用关系，从而使原来值成为垃圾。

#### 3. 导致内存泄露的原因

js内存泄露的本质是一些不再需要的对象或变量仍然被其他对象引用，导致垃圾回收器无法回收它们，从而占用了内存空间。

- 意外的全局变量 ：把不使用的对象和数据赋值给全局变量
- 设置定时器，但是没有取消他，回调函数如果引用了外部变量，这个变量也会一直保存
- 不合理的闭包，闭包函数在引用外部函数中的变量，如果引用不被释放，那就会造成，外部函数的局部变量不能被收回，导致内存泄露。
- DOM元素的引用，DOM元素赋值给一个变量，虽然DOM元素不会再用了，如果没有解除引用，就会造成内存泄漏。

# 事件相关