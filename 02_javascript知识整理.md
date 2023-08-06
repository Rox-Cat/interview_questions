# 数据类型篇

#### 字面量

在JavaScript中，字面量是指一种直接指定常量值的表示方法，它可以用来创建各种数据类型的值。常见的字面量包括：

- 数字字面量：用来表示数值的字面量，例如`42`、`3.14`等。
- 字符串字面量：用来表示字符串的字面量，可以用单引号或双引号括起来，例如`"hello"`、`'world'`等。
- 布尔字面量：用来表示布尔值的字面量，只有两个值：`true`和`false`。
- 对象字面量：用来表示对象的字面量，可以通过花括号`{}`来创建，例如`{name: 'Alice', age: 25}`。
- 数组字面量：用来表示数组的字面量，可以通过方括号`[]`来创建，例如`[1, 2, 3]`、`['apple', 'banana', 'orange']`等。

字面量的优点是简单、直观，可以直接在代码中指定常量值，而不需要使用变量或函数。

#### 动态类型

变量定义赋值后可以使用不同的数据类型进行再赋值

#### 数字类型的特例

1. 无穷大的表示

   Infinity/-Infinity

2. 数值上的无穷大，即js中最大数值

   `Number.MAX_VALUE`，是一个具体数，超过该数，就是Infinity

3. NaN

   - 表示不存在的数值，常用与表示一个错误的数字运算。
   - 与NaN运算，都是NaN，除了 NaN ** 0

4. 表示的范围

   理论上：[-NUMBER.MIN_VALUE, NUMBER.MAX_VALUE]

   实际上：[-(2^53-1), +(2^53-1)]

#### 判断null

a === null

- 错误方法：typeof a ==> Object类型
- 正确：使用 ===

#### undefined 和 null

null更加强调的是空对象

> [JS 中的 undefined 和 null 的区别_js undefined和null的区别_C澒的博客-CSDN博客](https://blog.csdn.net/weixin_45242865/article/details/119799980)

- null是js的关键字，表示空值；undefined不是js的关键字，它是一个全局变量。
- null是Object的一个特殊值，表示一个不存在的对象；undefined是Global的一个属性，表示未定义或未赋值。

1. 当表示一个变量的值暂时没有确定时，应该使用 undefined。【未定义】
   - 声明一个变量但没有给它赋值时，该变量的值就是 undefined。
   - 调用函数时，如果函数的参数没有被传递，那么该参数的值为 undefined。
   - 访问对象的不存在的属性时，该属性的值为 undefined。
   - 使用数组时，访问数组的不存在的元素时，该元素的值为 undefined。

2. 当表示一个变量的值为空或者不存在时，应该使用 null。【未知】

0 + null = 0?

null之间的==，或者隐式转换

#### 交互方法

`alert, prompt, comfirm`

`prompt`:返回输入值

`comfirm`:返回布尔值

#### 类型转换

##### Boolean类型转换

- 直观上为“空”的值（如 `0`、空字符串、`null`、`undefined` 和 `NaN`）将变为 `false`。
- 其他值变成 `true`。

##### 数字类型转换

1. 方法
   - Number()/ +-*/ 单目运算符
     - 四则运算 会自动将值转换成number类型。
     - 加号，可以作为四则运算的加法运算符，也可以作为“连字符”，加号会优先选择连字符。
   - parseInt(string,radix)
     - 对于字符串的转换，如果不是，则先转为字符串
     - 会保留有效数据，即如果字符串前面正常，后面不正常，则会保留正常数据
     - 去掉浮点数
   - parseFloat()
     - 无进制
     - 保留有效数据
   
2. 不同数据类型的转换结果

   | false | ture | ==undefined== | ==null== | 空字符串/('  ') | 对象                |
   | ----- | ---- | ------------- | -------- | --------------- | ------------------- |
   | 0     | 1    | NaN           | 0        | 0               | valueOf/tosString() |

3. 常见字符串

    去掉首尾空白字符（空格、换行符 `\n`、制表符 `\t` 等）后的纯数字字符串中含有的数字。

    如果剩余字符串为空，则转换结果为 `0`。否则，将会从剩余字符串中“读取”数字。

   [存在其他类型就是NaN]当类型转换出现 error 时返回 `NaN`。

##### 字符串转换

1. String()

   转换万物，全部保留，无论undefined还是null

2. .toSting()

   除了undefined和null都可以转换=》报错

3. 区别

   - String() 是一个全局函数，可以将任何类型的值转换为字符串类型。
   - toString() 是一个对象方法，可以将对象转换为字符串类型。该方法是从 Object 原型继承而来，所有的对象都可以调用该方法。

   在 JavaScript 中，基本数据类型的值（例如字符串、数字、布尔值等）是不是对象，它们只是简单的值。当我们使用 JavaScript 中的方法或操作符时，JavaScript 会将这些简单值转换为对象，这个过程被称为“装箱”。

#### 隐式/显示转换

显示转换是指通过调用内置函数或操作符，显式地将一个数据类型转换为另一个数据类型。在 JavaScript 中，常见的显示转换方式有：

- 调用 Number() 函数将值转换为数字类型
- 调用 String() 函数将值转换为字符串类型
- 调用 Boolean() 函数将值转换为布尔类型

隐式转换是指在表达式中，JavaScript 引擎自动将一种数据类型转换为另一种数据类型，而不需要显式调用转换函数或操作符。在 JavaScript 中，隐式转换发生的情况有很多，例如：

- 数字类型和字符串类型进行加法运算时，数字类型会隐式转换为字符串类型
- 布尔类型在逻辑运算中会隐式转换为数字类型（true 转换为 1，false 转换为 0）
- 对象在进行某些操作时会隐式调用其 valueOf() 或 toString() 方法，将其转换为相应的原始类型值

#### ==\=和\==

- `==` 比较时会进行类型转换，如果两个操作数的类型不同，会尝试将它们转换为相同的类型，然后再进行比较
  - 如果其中一个值是`null`，另一个值必须是`undefined`或者`null`才会相等。反之`undefined`相同
- `===` 比较时不会进行类型转换，只有当两个操作数的类型相同，且值相等时，才返回 true。

#### 值的比较

`<=, >=, >,<`会先把值转化为数字类型

注意，`==, ===`不会进行undefined和null的转换

#### 判断为空

1. 数组

   - 确定为数组：`arr.lenght === 0`
   - 不确定：`arr intanceof Array && arr.length ===0`，先确定为数组，再判断长度

2. 空字符串

   - `str === '' || str.tirm().length === 0`

3. 判断变量是否为undefined/null

   - val == null 

     利用 undefined == null 为true的性质

   - val === null / undefined 只能表示一种

4. 来判断对象为空

   - for of 遍历对象的属性，并且判断对象中是否存在该属性

#### 逻辑运算法

- 短路求值

  - ||，遇到真就停止，反之返回最后一个假
  - &&，遇到假就停止，反之返回最后一个真

- 与的优先级大于或

- 空值合并运算符

  `a ?? b`，只有在a为undefined和null的时候，执行b。

  `a || b`，a为假值的时候，执行b。相比之下，空值合并运算法更加严格

# 函数篇

#### 1.函数定义的方式

- 函数声明

  最完整的声明

  ```js
  // 1. 函数声明
  function func1(){
      return 
  }
  ```

- 函数表达式声明

  将函数赋值为一个变量，该变量就是函数名

  ```js
  // 2. 函数表达式
  let func2 = function(){return }
  ```

- 箭头函数

  - 完整版，其中**小括号为函数的参数**，**大括号表示函数体**，并且要有`return`关键字

    ```js
    let func3 = (args) => { 
        return 
    }
    ```

  - 只有一个**参数**，省略小括号:

    ```js
    let func4 = args => {
        return 
    }
    ```

  - 函数体只有**返回值**，省略**大括号**:

    ```js
    let func5 = args => args.length
    ```

#### 2.函数声明方式的差异

> [函数表达式 (javascript.info)](https://zh.javascript.info/function-expressions)

- **函数表达式声明**，程序运行到该语句的时候，才创建函数，然后才可以使用
- **函数式声明：**代码执行的时候，会现在脚本中寻找全局函数声明，并创建函数。因此，函数式声明可以先使用再声明

# 对象篇

#### 1. 对象的属性

- 使用[]可以访问不符合变量命名规范的属性
- 在对象中使用[valName]可以将变量的值设置为属性，如果直接写valName：xx不行
- in，可以判断属性是否在对象中
- 如果键和值可以由变量表示，可以简写这个变量即可

#### 2. 对象的复制

- 创建空对象，遍历属性并赋值

- 使用Object.assign()

- 深拷贝的写法，不知道对不对？

  ```js
      function deepCopy(dest, origin){
          if (typeof origin !== 'object' || origin === null) return origin
  
          const newObj = Array.isArray(origin) ? [] : {}
          for (let key in origin){
              dest[key] = deepCopy(newObj, origin[key])
          }
          return dest
      }
  ```

#### 3. 垃圾回收机制

> [垃圾回收 (javascript.info)](https://zh.javascript.info/garbage-collection)

简单来说，当前程序中，要使用的数据，他们对其他数据进行引用，同理，其他数据要对另一些数据进行引用，这样就形成了从根到叶子的引用关系图，如果不在图中，就可以称之为垃圾，不需要的数据，可以进行回收垃圾。

#### 4. this的指向

>this指向的核心要点：
>
>- 修改this指向的四种方式
>
>  - 函数默认执行：func()。也就是没有调用者，不管在什么环境下，函数默认执行，那他的this就是window。
>  - 对象调用函数:obj.func()。函数中的this指向调用者
>  - 显示绑定：通过call，apply，bind，绑定this指向，如果不输入默认是window
>  - 通过new操作符来绑定this。new function()中的this就是一个空对象，然后后续添加方法和属性
>
>- 四种方式的优先级
>
>  new > 显示绑定 > 隐式绑定 > 默认绑定
>
>- 箭头函数中的this，取决于箭头函数定义时的父级执行上下文。
>
>  - 箭头函数在对象中声明，取决于这个对象所在的父级执行上下文中的this
>    - 对象在全局：this -> window
>    - 对象在函数中：this -> 函数当前的this，也就是通过上面四种确定
>  - 箭头函数在函数中声明，则箭头函数中的this-> 函数中this，通过上面四种确定。



`this` 的值就是在点之前的这个对象，即调用该方法的对象。

在 JavaScript 中，`this` 是“自由”的，它的值是在调用时计算出来的，它的值并不取决于方法声明的位置，而是取决于在“点符号前”的是什么对象。

在方法中，存在这this，在普通函数中的this，考虑为window

- 谁调用，谁就是this
- 箭头函数没有this
- 严格模式下，全局的this是undefined，反之是window

##### 4.1 深入理解this的案例分析

1. 简单的this，对象调用方法，this为调用者

   ```js
   let user = {
     name: "John",
     age: 30,
   
     sayHi() {
       // "this" 指的是“当前的对象”
       alert(this.name);
     }
   
   };
   
   user.sayHi(); // John
   ```

   将对象剥离出来之后，调用者就是全局对象了

   ```python
   let worker = {
       name1:'aaa', 
       slow(){
           return this.name + '1'
       }
   }
   console.log(worker.slow()) // aaa1
   let func = worker.slow
   console.log(func())			// undefined1
   ```

   

2. 在对象字面量中使用this

   对象字面量可以视作一个调用的过程，意思是，使用对象字面量创建对象时，内部的this就是创建时的this，所以打印值是`window`

   ```js
   let user = {
       firstName: "Ilya",
       ref:this,
   };
   console.log(user.ref)
   ```

3. 进一步理解对象字面量创建

   调用ref()方法是，返回的是一个对象，这个对象在返回时就被确定了，因此，此处的this是上下文的this，所以是调用者`user`，最后返回就是user对象。这就是说明，this在对象字面量中，是已经被确定的

   ```js
   let user = {
       firstName: "Ilya",
       ref(){
           return {
               attr:this
           }
       }
   };
   
   console.log(user.ref().attr)
   ```

4. 理解this的表示

   ```js
   function makeUser(){
     return this; // 这次这里没有对象字面量
   }
   
   alert( makeUser().name );
   ```

   undefined。此处，作为函数调用，函数内容的this就是window，所以返回的时候，this就是window，进一步，name属性为空就是undefined。

5. 返回值未使用this

   函数返回对象的时候，并没有使用this，因此返回值的this取决于调用者

   ```js
   function makeUser() {
     return {
       name: "John",
       ref() {
         return this;
       }
     };
   }
   
   let user = makeUser();
   
   alert( user.ref().name ); // John
   
   ```


6. 理解arr存储函数中的this

   数组的第三项是函数，当访问arr[2]的时候，就是调用方法的过程，因为this的指向是调用者也就是arr。把arr理解为对象即可。

   ```js
   let arr = ["a", "b"];
   
   arr.push(function() {
     alert( this );
   })
   
   arr[2](); // a,b,function(){...}
   ```


综上，我们也可以理解为this，是在被使用的时候创建，对象的创建时，要需要this具体的值，所以this的值是确定了。而在对象的方法中，创建方法(函数)的本身不会运行函数，也就是this不会被使用，因此this的值不确定，等到调用也就是使用的时候，this才被确定。

##### 4.2 箭头函数

箭头函数没有自己的 `this`。如果我们在箭头函数中引用 `this`，`this` 值取决于外部“正常的”函数，即非箭头函数的调用者。

**Example 1**

下面代码显示的是`undefined`，因为user调用了sayHi(),他内部的this是user，但是arrow()没人调用，却执行了，所以arrow()中的this指的是window，因此this.firstName为undefined

```js
let user = {
    firstName: "Ilya",
    sayHi() {
        console.log(this)				// user对象
        let arrow = function(){			
            console.log(this)			// window,因为没人调用函数
            console.log(this.firstName) // window中没有firstName，所以是undefined
        }
        arrow()
    }
};
user.sayHi()
```

使用箭头函数，返回值为Ilya.他会使用就近的调用的作为this

```js
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya
```

**如果箭头函数外面的正常函数是自己执行的而不是被调用的。那箭头函数的this是谁？**

如果箭头函数外面的正常函数是自己执行的而不是被调用的，那箭头函数的this是指向全局对象window（或者global）。¹

因为自执行函数没有调用对象，所以它的this默认指向window（或者global）。²

而箭头函数会继承外层作用域链中的this，所以它也会指向window（或者global）。¹

例如，下面这段代码中，foo是一个自执行函数，它里面有一个箭头函数bar，它们的this都指向window：

```js
(function foo() {
  console.log(this); // window
  let bar = () => {
    console.log(this); // window
  };
  bar();
})();
```



**箭头函数中的this是在哪里确定的？执行这句话的时候？ let bar = () => { console.log(this);} // 还是这句话bar()**

箭头函数中的this是在定义箭头函数的时候就确定的，也就是在执行这句话的时候：let bar = () => { console.log(this); }。

因为箭头函数没有自己的this，它只会从外层作用域链中获取this，这个过程是在定义箭头函数的时候就完成了，不会随着调用方式的改变而改变。

所以无论你怎么调用bar()，它里面的this都不会变化。

#### 5. 构造函数

构造函数本身是一个函数！

##### 5.1 构造函数写法

构造函数在技术上是常规函数。不过有两个约定：

- 它们的命名以大写字母开头。

- 它们只能由 `"new"` 操作符来执行。

当一个函数被使用 `new` 操作符执行时，它按照以下步骤：

1. 一个新的空对象被创建并分配给 `this`。
2. 函数体执行。通常它会修改 `this`，为其添加新的属性。
3. 返回 `this` 的值。

##### 5.2 实际的内部结构

- 隐式创建`this`对象

- 隐式返回`this`对象

```js
function User(name) {
  // this = {};（隐式创建）

  // 添加属性到 this
  this.name = name;
  this.isAdmin = false;

  // return this;（隐式返回）
}
```

#### 6. Symbol【没怎么看】

> “symbol” 值表示唯一的标识符。
>
> [javascript中symbol类型的应用场景（意义）和使用方法 - 掘金 (juejin.cn)](https://juejin.cn/post/7028830157230047263)

1. 创建私有属性名：`Symbol` 可以作为对象属性的唯一标识符，从而避免属性名冲突。例如，如果你想要在一个对象中定义一个私有属性，你可以使用一个新的 `Symbol` 值作为属性名。

   ```
   javascriptCopy codeconst obj = {};
   const key = Symbol('私有属性');
   obj[key] = '这是私有属性的值';
   ```

2. 作为枚举类型：`Symbol` 可以用来定义一组常量，相当于枚举类型。由于每个 `Symbol` 值都是唯一的，这使得我们可以用它们来表示一组独立的常量。

   ```
   javascriptCopy codeconst Colors = {
     RED: Symbol('红色'),
     GREEN: Symbol('绿色'),
     BLUE: Symbol('蓝色')
   };
   ```

3. 作为函数属性名：`Symbol` 可以作为函数的属性名，从而隐藏函数的一些实现细节。例如，`Symbol.iterator` 属性被用于指定一个对象的默认迭代器。

##### 作用

- 如果我们想要向“属于”另一个脚本或者库的对象添加一个属性，我们可以创建一个 symbol 并使用它作为属性的键。

- 由于 `user` 对象属于另一个代码库，所以向它们添加字段是不安全的，因为我们可能会影响代码库中的其他预定义行为。但 symbol 属性不会被意外访问到。第三方代码不会知道新定义的 symbol，因此将 symbol 添加到 `user` 对象是安全的。

  另外，假设另一个脚本希望在 `user` 中有自己的标识符，以实现自己的目的。

#### 7. 对象类型转换【没怎么看】

#### 8. 对象的相关方法与概念

**[对象的相关方法与概念](E:\研究生\自我学习\前端学习\19_面试题\子文件\JavaScript_对象常用方法及相关概念.md)**



------



# 数据类型篇

#### 1 原始类型的方法

当原始类型访问方法/属性的时候，会发生如下的步骤：

```javascript
let str = "Hello";
alert( str.toUpperCase() ); // HELLO
```

很简单，对吧？以下是 `str.toUpperCase()` 中实际发生的情况：

1. 字符串 `str` 是一个原始值。因此，在访问其属性时，会创建一个包含字符串字面值的特殊对象，并且具有可用的方法，例如 `toUpperCase()`。（此过程称之为：`对象包装器`）
2. 该方法运行并返回一个新的字符串（由 `alert` 显示）。
3. 特殊对象被销毁，只留下原始值 `str`。重点，对象会被销毁！

#### 2 数字类型

1. num.toString(base)

2. 不精确的计算

   因为js中的Number类型使用64位双精度浮点数来表示小数，而0.1和0.2在转换为二进制时会出现无限循环小数，导致相加后的结果不等于0.3。为了解决这个问题，我们可以使用num.toFixed()方法来保留指定位数的小数，并用Number()方法将字符串转换为数字。

3. 判断是不是NaN，原理是NaN不等于自身。所以value !== value,

#### 3 字符串

1. 模板字符串：允许跨行
2. 改变大小写：str.toUpperCase()/str.toLowerCase()
3. 判断位置：str.indexOf(target, pos)/str.endIndexOf(target, pos)

**获取子串**

| 方法                    | 选择方式……                                | 负值参数                              |
| :---------------------- | :---------------------------------------- | :------------------------------------ |
| `slice(start, end)`     | 从 `start` 到 `end`（不含 `end`）         | 允许，start < end                     |
| `substring(start, end)` | 从 `start` 到 `end`（不含 `end`）         | 负值被视为 `0`,允许大于，同样是正向取 |
| `substr(start, length)` | 从 `start` 开始获取长为 `length` 的字符串 | 允许 `start` 为负数，但还是正向取     |

#### 4 数组类型

- 数组中可以存储任务数据类型
- 数组倒着访问元素：`arr.at(i)`,i>0的时候就等于arr[i]，i<0的时候，就是反着取。

##### 4.1 数组基本操作

- push/pop === python的方法
- shift/unshift => 弹出首元素/压入首元素

上述操作都可以添加多个元素，`arr.push(a, b)/ arr.unshift(a, b)`

##### 4.2 数组的内部

数组是个对象，属性是下标，值对应存储的数据。但是hs提供了特殊的方法来处理有序的数据集合以及 `length` 属性。

##### 4.3 遍历数组

1. 基本的for循环
2. for of，获取元素值
3. for in 获取的是属性，但是不建议用，主要适用的是普通对象。因为可能会读取一下非下标属性，特别是处理一些类数组的时候

##### 4.4 使用new Array()创建数组

1. new Array(number) 长度为number的空数组，如果访问的话是undefined
2. new Array(10).fill(num) 填充num值

##### 4.5 添加移除数组元素

- arr.splice()函数指定位置的元素，还可以添加元素
- arr.slice()数组切片，可以使用负索引
- arr.concat()拼接数组，只会解析到一层，如果数组中嵌套着数组不会继续拆分拼接，而是整个拼接

##### 4.6 数组中的查找

- arr.indexOf(item, from)，返回索引，找不到返回-1

- arr.includes(item, from)，只用来判断是否存在

- arr.lastIndexOf(item)

- arr.find(function(item, ind, arr){return true/false}) 如果返回值是true立马停止，返回的是itme，函数中的返回值用来判断是不是要返回的

- arr.findIndex(。。。)相同，但是返回的是索引

- arr.filter(function(item, index, array) {  // 如果 true item 被 push 到 results，迭代继续  // 如果什么都没找到，则返回空数组 })

  用来寻找多个满足条件的值

##### 4.7 数组的转换

- arr.map(function(item, index, arr){return xxx})对每个数值进行操作，并返回一个新数组
- arr.sort(function(a, b){return 正数/负数/零}) 正数表示a在后b在前，反之在前面
- arr.reverse()
- arr.split('x')，x表示分割符
- arr.join("x")，x表示拼接符

##### 4.8 判断数组Array.isArray(value)

##### 4.9 说一下类数组

[类数组是一种类似于数组的对象，它有以下特点](https://www.cnblogs.com/jiayeyuan/p/10886568.html)[1](https://bing.com/search?q=js中的类数组)[2](https://www.cnblogs.com/jiayeyuan/p/10886568.html)：

- 拥有length属性，表示元素的个数
- 其他属性（索引）为非负整数（或者数字的字符串形式）
- 不具有数组所具有的方法，如push，pop等

[JavaScript中常见的类数组有arguments对象和DOM方法的返回结果，比如document.getElementsByTagName()](https://www.cnblogs.com/jiayeyuan/p/10886568.html)[2](https://www.cnblogs.com/jiayeyuan/p/10886568.html)[3](https://juejin.cn/post/7050650329394151438)。

类数组可以通过一些方法转换为真正的数组，例如：

- [使用Array.prototype.slice.call(类数组)或者Array.from(类数组)创建一个新的数组](https://blog.csdn.net/LLLyyx/article/details/78141900)[4](https://blog.csdn.net/LLLyyx/article/details/78141900)
- [使用Array.prototype.forEach.call(类数组, 回调函数)遍历类数组并将元素添加到一个新的数组中](https://juejin.cn/post/7017997007352496136)[5](https://juejin.cn/post/7017997007352496136)
- [使用扩展运算符(…)将类数组展开并赋值给一个新的数组](https://juejin.cn/post/7017997007352496136)[5](https://juejin.cn/post/7017997007352496136)

##### 4.10 可迭代类型

**种类**：数组、字符串、map、set等，用于方便遍历

可以应用 `for..of` 的对象被称为 **可迭代的**。

- 技术上来说，可迭代对象必须实现Symbol.iterator方法。
  - `obj[Symbol.iterator]()` 的结果被称为 **迭代器（iterator）**。由它处理进一步的迭代过程。
  - 一个迭代器必须有 `next()` 方法，它返回一个 `{done: Boolean, value: any}` 对象，这里 `done:true` 表明迭代结束，否则 `value` 就是下一个值。
- `Symbol.iterator` 方法会被 `for..of` 自动调用，但我们也可以直接调用它。
- 内建的可迭代对象例如字符串和数组，都实现了 `Symbol.iterator`。
- 字符串迭代器能够识别代理对（surrogate pair）。（译注：代理对也就是 UTF-16 扩展字符。）

#### 5 Map数据类型

##### 5.1 Map的增删改查

- new Map()
- map.set(key, val)
- map.get(key)
- map.has(key)
- map.delete(key)
- map.size

##### 5.2 Map和Obj的区别

map和对象的区别主要有以下几点：

- map是有序的，可以保持元素插入的顺序，而对象是无序的。
- map的键可以是任何类型的值（包括函数、对象或原始类型），而对象的键只能是字符串或符号。
- map可以直接获取它的大小（size属性），而对象需要手动计算。
- map有内置的迭代方法，可以遍历它的键、值或键值对，而对象需要用Object.keys()等方法来转换为数组再遍历。

简单地说，map更像一个真正的哈希表，而对象更像一个结构化的数据存储。

##### 5.3 Map的迭代

- `map.keys()` —— 遍历并返回一个包含所有键的可迭代对象，

- `map.values()` —— 遍历并返回一个包含所有值的可迭代对象，

- `map.entries()` —— 遍历并返回一个包含所有实体 `[key, value]` 的可迭代对象，`for..of` 在默认情况下使用的就是这个。

  map.entries()每次遍历拿到的数据是个数组Array，使用item[0],item[1]，获取数组。亦或者在这样`for (let [key, val] of map.entries())`拿到key和val

#### 6 Set类型

##### 6.1 创建set()

`new Set(iterable)`

##### 6.2 常用方法

- `new Set(iterable)` —— 创建一个 `set`，如果提供了一个 `iterable` 对象（通常是数组），将会从数组里面复制值到 `set` 中。
- `set.add(value)` —— 添加一个值，返回 set 本身
- `set.delete(value)` —— 删除值，如果 `value` 在这个方法调用的时候存在则返回 `true` ，否则返回 `false`。
- `set.has(value)` —— 如果 `value` 在 set 中，返回 `true`，否则返回 `false`。
- `set.clear()` —— 清空 set。
- `set.size` —— 返回元素个数。

# 函数进阶篇

#### 1 var/let/const

- 在`JavaScript`中，一个变量的定义与调用都是在一个固定的范围内的，这个范围我们称之为作用域。作用域可以分为全局的作用域，局部作用域 (函数作用域) 和块级作用域。
- var没有块级作用域，因此，在循环、判断等块级作用域通过var定义的变量，也可以使用，当然他们要在同一个局部作用域/全局作用域。而let 和 const存在块级作用域。只能作用到当前作用域。
- var在同一个作用域中可以重复声明。
- `var` 声明的全局函数和变量会成为全局对象的属性
- var存在变量提升的现象。在代码执行之前，JavaScript 引擎会把所有用 var 声明的变量名提升到当前作用域的顶部，并赋值为 undefined ，所以可以在 var 声明之前访问该变量（但值为 undefined ）。
- let 和 const 只有在声明之后才能访问和使用该变量。
- 可修改性：var 和 let 声明的变量可以重新赋值。const 声明的常量不能重新赋值，也就是说，在声明并初始化之后，不能使用赋值运算符来改变该常量的值（否则会报错）。但是，如果 const 声明的常量是一个引用类型（如对象或数组），那么不能修改它的引用地址，但可以修改它的属性或元素 。

# 导入和导出

**为什么要有模块？**

> 模块的好处？模块存在的意义

1. **代码复用**：可以将一些通用的代码封装在模块中，然后在其他地方重复使用，避免了代码的重复编写和维护。
2. **命名空间**：模块可以为代码提供一个独立的命名空间，避免了全局变量和函数的命名冲突。
3. **可维护性**：模块可以更好地组织代码，使得代码更易于理解和维护。
4. **加载优化**：模块的加载可以根据需要进行延迟加载，从而减少了初始加载时间和网络传输量。
   - 页面加载过程中，通过异步加载模块的方式，按需加载。提高响应速度和用户体验。

**常见的模块实现方式**

CommonJS、AMD、ES6模块

## ES6的模块

本文内只记录常用功能，更加详细的内容请参考：**[导出和导入 (javascript.info)](https://zh.javascript.info/import-export)**

### 命名式

> 导出时，以<font color='red'>变量名、函数名、类名</font>的形式导出: export xxx
>
> 导入时必须按照导出的名字导入，使用花括号{} : import  { xxx(导出时的名字) } from "xxx.js"

#### 命名导出

**声明前导出**

在声明前加`export`关键字

```js
// 导出数组
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 导出 const 声明的变量
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// 导出类
export class User {
  constructor(name) {
    this.name = name;
  }
}
```

**声明与导出分开**

```js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export {sayHi, sayBye}; // 导出变量列表
```

#### 命名导入

```js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!
```

### 默认导入导出

- 默认导出要将 `export default` 放在要导出的实体前，

- 一个模块中，只允许默认导出一次;
- 在导入的时候不要使用花括号{}，可以自定义导入的名称

#### 可以导出什么？

1. **值或者是表达式的结果**，而不是一条js语句

   什么叫做表达式呢？可以计算到结果的js语法，比如字面量、变量、运算符、函数调用（也就是它的返回值）、对象属性的访问。

   像let a = 1, let b = {}，let c = function(){}等称之为声明而不是表达式，对于 = 后的为表达式，也就是1，{}，function(){}，因此我们常用函数表达式的方法来声明，指的是将函数表达式的结果（函数表达式的结果就是一个函数，或者称之为函数体？）赋值给一个变量。

   所以如果想导出上述声明的内容，要先声明再导出

2. **函数的声明和类的声明**

   无论函数的声明是**存在名还是匿名**，都可以导出，算是一个特殊用法？解释起来就是，对于匿名函数，可以看作是一个表达式，而对于命名函数，存在函数的提升，即程序首先给函数进行声明，再导出。

#### 默认导出案例

**表达式的导出**

```js
// 错误的写法
export default let a = 1; // let a = 1 是一个声明

// 正确的写法
let a = 1;
export default a; // a 是一个表达式

// 或者
export default 1; // 1 是一个表达式
```

**函数/类的导出**

```js
// 错误的写法,因为这是一个函数声明
export default let add = function(a, b) { return a + b };

// 先声明再导出
let add = function(a, b) { return a + b };
export default add;

// 或者直接导出->作为匿名函数，也就是函数的表达式。
export default function(a, b) { return a + b };


// 函数声明导出
export default class User { // 只需要添加 "default" 即可
  constructor(name) {
    this.name = name;
  }
}
```

```js
// 导出一个匿名类
export default class {
  constructor(name) {
    this.name = name;
  }
}

// 或者给类起个名字
export default class User {
  constructor(name) {
    this.name = name;
  }
}

```

#### 默认导出的导入

默认导入，不需要使用花括号，并且可以自定义导入名称。

```js
// 导出一个默认的函数
export default function(x, y) { return x + y; }

// 导入时可以自定义名称
import sum from "./module.js"; // 可以叫sum
import add from "./module.js"; // 也可以叫add

```

```js
// 导出一个默认的函数，有一个名字叫add
export default function add(x, y) { return x + y; }

// 导入时可以自定义名称
import sum from "./module.js"; // 可以叫sum
import plus from "./module.js"; // 也可以叫plus

```

**注意：**如果导出的是一个对象，那么也不能使用解构赋值的方式获取变量；

```ts
export default {
    name: 'qwe',
    title: 'sadf',    
}
```

```ts
improt { name, title } from '/xx.ts'
```



## CommonJS模块



##  两者异同

### 相同点

- 都可以实现模块的导入和导出，避免变量污染和文件依赖的问题。

### 不同点

- **导出导入方式不同**。ES6模块使用import和export语句来导入和导出值，而CommonJs模块使用require函数和module.exports对象来导入和导出值。

- CommonJs 是对模块的**浅拷贝**，ES6 Module 是对**模块的引用**【1】。这意味着 CommonJs 导出的是一个值的副本，而 ES6 Module 导出的是一个值的引用。因此，如果模块内部的值发生了变化，CommonJs 导入的值不会改变，而 ES6 Module 导入的值会跟随改变。ES6是只存只读的，不能修改导入变量的值【2】。

- CommonJs 可以动态导入，ES6 Module 只能静态导入。这意味着 CommonJs 可以在运行时根据条件语句或变量来导入模块，而 ES6 Module 只能在编译时确定导入的模块。

  

注：

1. #### **关于ES6和CommonJS的导入的修改**

   #### ES6

   导出对象之后，对对象进行修改，再在另一个文件中导出，第二个文件中导出的对象，是修改之后的对象。这是因为JS模块导出的值是**实时绑定**的，也就是说，导出的值是对内存地址的引用，而不是值的拷贝。这样，当对象的内容发生变化时，导出的引用也会反映这个变化。

   整个过程可以用一个例子来说明：

   - 假设我们有一个文件叫做obj.js，它定义了一个对象，并且导出它：

   ```js
   // obj.js
   let obj = { x: 1, y: 2 };
   export default obj;
   ```

   - 然后我们在另一个文件中导入这个对象，并且修改它：

   ```js
   // modify.js
   import obj from "./obj.js";
   obj.x = 3;
   obj.y = 4;
   ```

   - 最后我们在第三个文件中再次导入这个对象，并且打印它：

   ```js
   // print.js
   import obj from "./obj.js";
   console.log(obj); // { x: 3, y: 4 }
   ```

   - 我们可以看到，打印出来的对象是修改之后的对象，而不是原来的对象。这是因为obj.js导出的是对obj对象的引用，而不是它的拷贝。当modify.js修改了obj对象时，它实际上是修改了内存中存储obj对象的位置。所以当print.js再次导入obj时，它得到的也是这个内存位置的引用，而不是一个新的拷贝。所以打印出来的结果就是修改之后的结果。

   #### CommonJS

   CommonJs导出的值不是实时绑定的，而是值的拷贝。这意味着，当导出的对象被修改时，其他模块导入的对象不会受到影响，仍然是原来的对象。这是因为CommonJs模块导出的是一个exports对象，这个对象在模块加载时被创建，并且在模块执行完毕后被缓存。当其他模块导入这个模块时，它们得到的是exports对象的一个拷贝，而不是对原始对象的引用。¹

   整个过程可以用一个例子来说明：

   - 假设我们有一个文件叫做obj.js，它定义了一个对象，并且导出它：

   ```js
   // obj.js
   let obj = { x: 1, y: 2 };
   module.exports = obj;
   ```

   - 然后我们在另一个文件中导入这个对象，并且修改它：

   ```js
   // modify.js
   let obj = require("./obj.js");
   obj.x = 3;
   obj.y = 4;
   ```

   - 最后我们在第三个文件中再次导入这个对象，并且打印它：

   ```js
   // print.js
   let obj = require("./obj.js");
   console.log(obj); // { x: 1, y: 2 }
   ```

   - 我们可以看到，打印出来的对象是原来的对象，而不是修改之后的对象。这是因为obj.js导出的是exports对象的一个拷贝，而不是对obj对象的引用。当modify.js修改了obj对象时，它实际上是修改了自己导入的那个拷贝，而不影响原始的exports对象。所以当print.js再次导入obj时，它得到的也是exports对象的另一个拷贝，而不是modify.js修改过的那个拷贝。所以打印出来的结果就是原来的结果。


2. #### ES6只读只存而CommonJs可以任意修改

   这句话的意思是，ES6模块导入的值是**只读**的，不能被修改导入变量的值，但是可以改变变量的内部属性，类似于const的用法。这是因为ES6模块导入的值是**实时绑定**的，也就是说，它们是对内存地址的引用，而不是值的拷贝。如果要修改导入变量的值，必须在导出模块中修改，而不能在导入模块中修改。

   举个例子：

   - 假设我们有一个文件叫做counter.js，它定义了一个变量counter，并且导出它：

   ```js
   // counter.js
   export let counter = 1;
   ```

   - 然后我们在另一个文件中导入这个变量，并且试图修改它：

   ```js
   // main.js
   import { counter } from "./counter.js";
   console.log(counter); // 1
   counter++; // TypeError: Assignment to constant variable.
   ```

   - 我们可以看到，尝试修改counter变量会抛出一个类型错误，因为counter变量是只读的，不能被重新赋值。如果想要修改counter变量的值，必须在counter.js文件中修改，或者提供一个修改函数并且导出它，例如：

   ```js
   // counter.js
   export let counter = 1;
   
   export function increment() {
     counter++;
   }
   ```

   ```js
   // main.js
   import { counter, increment } from "./counter.js";
   console.log(counter); // 1
   increment(); // 调用修改函数
   console.log(counter); // 2
   ```

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







# Getter和Setter篇

> 非常清晰：[属性的 getter 和 setter (javascript.info)](https://zh.javascript.info/property-accessors)

# 原型篇

> 也是非常清晰：[原型，继承](https://zh.javascript.info/prototypes)
>
> 回顾的时候，先看完上面的链接，不懂的再看看补充

#### 关于this

this只指向.之前的对象，因此尽管我们在原型对象中使用的方式中有this：

- 如果是使用那么先从原对象开始，一直到原型链的顶端。
- 如果是赋值this，那么会直接赋值给原对象，尽管可能原型对象上会有this的某个属性

**两个案例**

```js
let user = {
    name: "John",
    surname: "Smith",
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};
let admin = {
    __proto__: user,
    isAdmin: true
};
console.log(admin.fullName); // John Smith (*)
// setter triggers!
admin.fullName = "Alice Cooper"; // 为admin设置了name和surname 
console.log(admin)
/* 
  isAdmin: true;
  name: "Alice";
  surname: "Cooper";
*/
console.log(admin.fullName); // Alice Cooper，admin 的内容被修改了
console.log(user.fullName);  // John Smith，user 的内容被保护了
```

```js
// animal 有一些方法
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};

// 修改 rabbit.isSleeping
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined（原型中没有此属性
```

#### 构造函数之间的原型链

思考一个问题：

1. 在构造函数(函数)查找属性的原型链是什么？

2. 在实例对象查找属性的原型链是什么？

我们首先要明确，构造函数是函数同时也是一个对象，它既有`prototype`属性，也有`__proto__([[prototype]])`属性。它的`prototype`用于继承给创建的实例。而`__proto__`表示谁创建的它（继承自谁）。

构造函数是一个函数对象，可以理解为由构造函数`Function`创造的实例对象，因此`Array.__proto`指向`Function.prototype`，此处我们以Array为例，其他构造函数同理，包括Object和Function，换句话说，`Function.__proto__`和`Object.__proto__`均指向`Function.prototype`。

而对于构造函数（Function/Object/Array...）的`prototype`属性，这个属性的值本身是一个对象，因此它是由Object创建，重写了一些方法，所以`Array.prototype.__proto__`指向的是`Object.prototype`，沿着原型链继续，`Object.prototype.__proto__ = null`。

回答一下问题：

首先我们明确一件事，原型链是沿着`__proto__`来查找，如何继续查找，就是查找谁创建了`xxx.__proto__`中的xxx，然后我们就可以跳转到创造xxx的构造函数的prototype属性上。

1. 以Array为例，展示它的原型链：`Array.x -> Array.__proto__.x === Function.prototype.x -> Function.prototype.__proto__.x === Object.prototype.x -> Object.prototype.__proto == null`
2. 以数组`let arr = []`为例，展示它的原型链：`arr.x - > arr.__proto__.x === Array.prototype.x -> Array.prototype.__proto__.x === Object.prototype.x -> Object.prototype.__proto == null `

#### 基础

- 在 JavaScript 中，所有的对象都有一个隐藏的 `[[Prototype]]` 属性，它要么是另一个对象，要么就是 `null`。
- 我们可以使用 `obj.__proto__` 访问它（历史遗留下来的 getter/setter，这儿还有其他方法，很快我们就会讲到）。
- 通过 `[[Prototype]]` 引用的对象被称为“原型”。
- 如果我们想要读取 `obj` 的一个属性或者调用一个方法，并且它不存在，那么 JavaScript 就会尝试在原型中查找它。
- 写/删除操作直接在对象上进行，它们不使用原型（假设它是数据属性，不是 setter）。
- 如果我们调用 `obj.method()`，而且 `method` 是从原型中获取的，`this` 仍然会引用 `obj`。因此，方法始终与当前对象一起使用，即使方法是继承的。
- `for..in` 循环在其自身和继承的属性上进行迭代。所有其他的键/值获取方法仅对对象本身起作用。

#### 通过构造函数获得原型

- `F.prototype` 属性（不要把它与 `[[Prototype]]` 弄混了）在 `new F` 被调用时为新对象的 `[[Prototype]]` 赋值。
- `F.prototype` 的值要么是一个对象，要么就是 `null`：其他值都不起作用。
- `"prototype"` 属性仅当设置在一个构造函数上，并通过 `new` 调用时，才具有这种特殊的影响。

在常规对象上，`prototype` 没什么特别的：

```javascript
let user = {
  name: "John",
  prototype: "Bla-bla" // 这里只是普通的属性
};
```

默认情况下，所有函数都有 `F.prototype = {constructor：F}`，所以我们可以通过访问它的 `"constructor"` 属性来获取一个对象的构造器。

#### 常用的原型方法

- 要使用给定的原型创建对象，使用：

  - 字面量语法：`{ __proto__: ... }`，允许指定多个属性
  - 或 [Object.create(proto, [descriptors\])](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/create)，允许指定属性描述符。

  `Object.create` 提供了一种简单的方式来浅拷贝对象及其所有属性描述符（descriptors）。

  ```javascript
  let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
  ```

- 设置和访问原型的现代方法有：

  - [Object.getPrototypeOf(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) —— 返回对象 `obj` 的 `[[Prototype]]`（与 `__proto__` 的 getter 相同）。
  - [Object.setPrototypeOf(obj, proto)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) —— 将对象 `obj` 的 `[[Prototype]]` 设置为 `proto`（与 `__proto__` 的 setter 相同）。

- 不推荐使用内建的的 `__proto__` getter/setter 获取/设置原型，它现在在 ECMA 规范的附录 B 中。

- 我们还介绍了使用 `Object.create(null)` 或 `{__proto__: null}` 创建的无原型的对象。

  这些对象被用作字典，以存储任意（可能是用户生成的）键。

  通常，对象会从 `Object.prototype` 继承内建的方法和 `__proto__` getter/setter，会占用相应的键，且可能会导致副作用。原型为 `null` 时，对象才真正是空的。

#### 面试题

1. 如何理解原型和原型链

   原型（prototype）是一个对象，它可以给其他对象提供共享的属性和方法。每个函数都有一个prototype属性，它指向一个原型对象。当我们用一个函数作为构造函数来创建对象时，这个对象会有一个proto属性指向构造函数的原型对象，以此来继承原型对象的属性和方法。

   原型链（prototype chain）是一种查找机制，当我们访问一个对象的某个属性或方法时，它会先在自身查找，如果这个对象本身没有这个属性，那么 JavaScript 引擎就会去对象的原型对象中寻找是否有这个属性。如果原型对象中也不存在这个属性，那么就会去该原型对象的原型对象中查找，直到找到或者到达null为止。这样形成了一条链式结构，叫做原型链。

   通过原型链，JavaScript 可以实现对象之间的继承关系，从而实现代码的重用。

   

   

   

### 





# 宏任务与微任务

> [事件循环：微任务和宏任务 (javascript.info)](https://zh.javascript.info/event-loop)
>
> 相关联系：[灵题库-前端题库 (lingtiku.com)](https://www.lingtiku.com/quiz/detail/6)

#### 1. 宏任务和微任务的分类

在 JavaScript 中，常见的宏任务包括：

- script（整体代码）
- setTimeout
- setInterval
- setImmediate（只在 Node.js 中可用）
- I/O 操作
- UI 渲染

而常见的微任务则包括：

- Promise.then/catch/finally
- Object.observe（已废弃）
- MutationObserver

#### 2. 宏任务和微任务的执行顺序

- ##### 两者的执行顺序 - > 微任务为空 -- > 再执行宏任务

  当代码中产生宏任务或微任务时，它们都会被放入相应的任务队列中等待执行。

  在任务队列中，微任务的执行优先级高于宏任务，也就是说，当微任务队列中有任务时，会先执行完所有微任务，再执行宏任务。

- ##### 常用的微任务逻辑

  - .then()只有在上一个promise状态转为fullfilled、rejected的时候才会将回调函数加入到微任务队列中

- ##### 添加任务的顺序

  程序会依次遍历，添加，而不是先添加微任务再宏任务。

  同时，如果执行同步的时候有微任务，同时同步后面的代码也有微任务，先加那个？

  **回答**：先按照代码上下顺序进行添加，也就是先加后面的，再加内部的。

  ```js
  console.log(1);
  
  setTimeout(() => console.log(2));
  
  Promise.resolve().then(() => console.log(3));
  
  Promise.resolve().then(() => setTimeout(() => console.log(4)));
  
  Promise.resolve().then(() => console.log(5));
  
  setTimeout(() => console.log(6));
  
  console.log(7);
  ```

  添加顺序：

  1. 同步
  2. 宏任务[放入的是]
  3. 微任务(放入的是回调函数)
  4. .....

#### 3.宏任务（计时器为例）的计时时间

- `setTimeout` 的计时是在任务被放入宏任务队列之后才开始的，也就是说，当 `setTimeout` 被放入宏任务队列时，其所设定的时间才开始计时。因此，它的回调函数也会在相应的时间后才被当做程序，分为同步、微任务、宏任务来执行。
- 如果存在两个定时器加入到宏任务队列
  - 如果两个定时器的延时时间不同，那么先到期的定时器的回调函数先执行。
  - 如果两个定时器的延时时间相同，那么先注册的定时器的回调函数先执行。
  - 如果一个定时器的回调函数中又注册了一个定时器，那么这个新的定时器的回调函数会在当前宏任务队列的末尾执行。（等到该回调函数执行的时候，才加入到宏任务队列）

#### 4. [async和await相关](#async 和 await相关的执行顺序)



#### 面试题

1. [灵题库-前端题库 (lingtiku.com)](https://www.lingtiku.com/quiz/detail/6)
2. [前端面试题之代码输出篇](https://www.yuque.com/cuggz/interview/wm7x19#UcJmF)



# 方法篇



# 一些小东西

1. for in 和 Object.keys()获取的属性

   在 JavaScript 中，`for...in` 循环会遍历对象自身以及继承链上的可枚举属性（enumerable properties, enumerable属性为True）。`Object.keys(obj)` 方法仅返回对象自身的可枚举属性组成的数组，而不包括继承链上的属性。

   ```js
           let parent = {
               key1 : '1'
           }
           let child = {
               key2 : '2', 
               __proto__: parent
           }
           for(let key in child){
               console.log(key)
           }
   
           console.log(Object.keys(child))
   ```

2. 对象的拷贝

   要一次获取所有属性描述符，我们可以使用 [Object.getOwnPropertyDescriptors(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors) 方法。

   它与 `Object.defineProperties` 一起可以用作克隆对象的“标志感知”方式：

   ```javascript
   let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
   ```

   优点：

   - 拷贝属性标志
   - 另一个区别是 `for..in` 会忽略 symbol 类型的和不可枚举的属性，但是 `Object.getOwnPropertyDescriptors` 返回包含 symbol 类型的和不可枚举的属性在内的 **所有** 属性描述符。

# 理解原型：从构造函数到类

## 通过构造函数创建对象

#### 使用构造函数

>https://zh.javascript.info/constructor-new

构造函数本身是一个函数！

##### 构造函数写法

构造函数在技术上是常规函数。不过有两个约定：

- 它们的命名以大写字母开头。

- 它们只能由 `"new"` 操作符来执行。

当一个函数被使用 `new` 操作符执行时，它按照以下步骤：

1. 一个新的空对象被创建并分配给 `this`。
2. 函数体执行。通常它会修改 `this`，为其添加新的属性。
3. 返回 `this` 的值。

##### 实际的内部结构

- 隐式创建`this`对象

- 隐式返回`this`对象

```js
function User(name) {
  // this = {};（隐式创建）

  // 添加属性到 this
  this.name = name;
  this.isAdmin = false;

  // return this;（隐式返回）
}
```

#### 构造函数与原型

构造函数有个常规属性`prototype`，当new 构造函数的时候，会将prototype属性赋值给生成的对象作为它的原型对象[[Prototype]]，这样对象就可以使用不在当前对象内的属性，这个过程叫做继承。

此处有两个属性：

- 函数的Prototype属性，是一个常规属性，属性值是要继承给实例的对象
- 而[[Prototype]]是作为对象的原型对象，是一个隐式的属性。

##### 默认的原型对象

每个函数都有 `"prototype"` 属性，即使我们没有提供它。

默认的 `"prototype"` 是一个只有属性 `constructor` 的对象，属性 `constructor` 指向**函数自身**。

```js
function Rabbit ( ) { } 
/* 默认的 prototype 
Rabbit.prototype = { constructor: Rabbit }; 
*/
```

##### 构造函数可修改

构造函数被修改后，new 的新对象就变了，当然变化的只是他的`__proto__`的构造函数。

### 原型的继承

> [原生的原型 (javascript.info)](https://zh.javascript.info/native-prototypes)
>
> - 以后看这个之前，我需要知道，对象的[[Prototype]]是什么？
> - 构造函数的Prototype是什么？
> - 如果通过构造函数创建对象

明确三个描述：

- prototype属性，是构造函数的属性（函数本身也是一个对象），他指向的是一个对象，这个对象用于赋值给构造函数的实例。
- [[prototype]]：是对象的原型，也就是来自构造函数的Prototype的属性。这个原型是个对象，他封装了很多的方法。并且该对象也有[[prototype]]属性，层层递归
- `__proto__`是获取对象原型的方式







































