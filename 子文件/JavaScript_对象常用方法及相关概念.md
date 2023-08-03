### 对象的常用方法的使用

> 直接参考官方网站即可：
>
> - [Object - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)

Object 是 JavaScript 中的基础对象，它提供了一些常用的方法，用于操作对象的属性、原型、状态等。Object 的常用方法有：

##### Object.assign(target, …sources)

- 官方语法：`Object.assign(target, ...sources)`

- 含义：将一个或多个源对象的**可枚举属性**复制到目标对象，返回目标对象。

- 应用场景：可以用来合并多个对象，或者克隆一个对象，或者给一个对象添加新的属性和方法。

- 例子1：为对象添加属性和方法

  ```javascript
  const target = { a: 1, b: 2 };
  const source1 = { b: 3, c: 4 };
  const source2 = { c: 5, d: 6 };
  
  // 将source1和source2的属性复制到target上
  Object.assign(target, source1, source2);
  
  // target的值变为 { a: 1, b: 3, c: 5, d: 6 }
  console.log(target);
  ```

- 例子2：创建一个新的对象

  ```js
  var obj1 = {a: 1, b: 2};
  var obj2 = {c: 3, d: 4};
  var obj3 = Object.assign({}, obj1, obj2); // 创建一个新对象，包含 obj1 和 obj2 的属性
  console.log(obj3); // {a: 1, b: 2, c: 3, d: 4}
  ```

- assign和扩展运算符的区别

  > [Object.assign和...（展开运算符/扩展运算符）的区别 - 掘金 (juejin.cn)](https://juejin.cn/post/7017445618649923598)

  Object.assign 和 扩展运算符（...）都可以用来拷贝对象，但是它们有一些区别：

  简单来说，扩展运算符只会拷贝原对象的可枚举属性的值，而 Object.assign 会拷贝原对象的可枚举属性的值和属性描述符（enumerable, writable, configurable, get, set）。

   - Object.assign 会触发 Proxy/Object.defineProperty 的 set 方法，而扩展运算符不会 。
   - Object.assign 可以拷贝对象的属性描述符（enumerable, writable, configurable, get, set），而扩展运算符只能拷贝属性的值。
   - 扩展运算符总是给你一个拷贝后的普通对象，而 Object.assign 可以保留原对象的构造函数，也就是目标对象是构造函数的实例。
   - 它们都是浅拷贝，也就是说，如果对象的属性是引用类型，那么拷贝后的对象和原对象会共享同一个内存地址 。

  如果你想要深拷贝一个对象，你可以使用 JSON.parse(JSON.stringify(obj)) 的方法，但是这种方法也有一些局限性，比如不能处理循环引用、函数、Symbol 等情况。你也可以使用一些第三方库，比如 lodash 的 _.cloneDeep 方法来实现深拷贝。

##### Object.create(proto, [propertiesObject])

- 官方语法：`Object.create(proto, [propertiesObject])`

- 含义：用于创建一个新对象，使用现有的对象作为新创建**对象的原型**。可选的第二个参数可以指定**新对象的属性**。

- 应用场景：可以用来实现原型继承，或者创建一些没有原型的特殊对象。

- 例子：

  - 创建新的对象

    ```js
    const person = {
      name: "John",
      age: 25,
      greet: function() {
        console.log("Hello, I'm " + this.name);
      }
    };
    
    // 使用person作为原型创建一个新对象
    const student = Object.create(person); // 也就是student.__proto__ == person
    
    // student继承了person的属性和方法
    student.name = "Mary"; // 修改name属性
    student.age = 18; // 修改age属性
    student.greet(); // 调用greet方法，输出 "Hello, I'm Mary"
    ```

  - 创建新对象并且指定属性

    ```js
    var person = {
      name: "Alice",
      sayHello: function() {
        console.log("Hello, I'm " + this.name);
      }
    };
    
    var student = Object.create(person, {
      grade: {value: 9, writable: true, enumerable: true}
    });
    
    console.log(student.name); // Alice
    student.sayHello(); // Hello, I'm Alice
    console.log(student.grade); // 9
    ```

##### Object.defineProperty(obj, prop, descriptor)

- 官方语法：`Object.defineProperty(obj, prop, descriptor)`
- 含义：用于在一个**对象**上定义<font color='red'>一个</font>**新属性**，或者修改一个已经存在的属性，返回该对象。可以指定**属性的值、可写性、可枚举性和可配置性**。
- 应用场景：可以用来创建一些只读、不可枚举、不可配置的属性，或者**自定义一些属性的行为和特性**。
- 例子：

```javascript
const obj = {};

// 定义一个新属性name，值为"Tom"，可写、可枚举、可配置
Object.defineProperty(obj, "name", {
  value: "Tom",
  writable: true,
  enumerable: true,
  configurable: true
});

// 修改已有属性name，值为"Jerry"，不可写、不可枚举、不可配置
Object.defineProperty(obj, "name", {
  value: "Jerry",
  writable: false,
  enumerable: false,
  configurable: false
});

// obj的值为 { name: "Jerry" }
console.log(obj);

// 尝试修改name属性，无效
obj.name = "Bob";

// obj的值仍然为 { name: "Jerry" }
console.log(obj);
```

##### Object.defineProperties(obj, props)

直接在一个对象上定义一个或多个新的属性或修改现有属性，并返回该对象。例如：

```js
var obj = {};
Object.defineProperties(obj, {
  name: {
    value: "Alice",
    writable: false,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 18,
    writable: true,
    enumerable: true,
    configurable: true
  }
}); // 同时定义两个属性 name 和 age

console.log(obj.name); // Alice
console.log(obj.age); // 18
```

##### Object.keys ()

- 语法：Object.keys (obj) 
- 含义：返回一个由给定对象的**自身可枚举属性**组成的数组，数组中属性名的排列顺序和使用 for…in 循环遍历该对象时返回的顺序一致。 
- 应用场景：可以用来获取对象的自身可枚举属性，或者遍历对象的键值对。 
- 例子：

```javascript
const obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.keys(obj)); // ["a", "b", "c"]

Object.keys(obj).forEach(key => {
  console.log(`key: ${key}, value: ${obj[key]}`);
});
// key: a, value: 1
// key: b, value: 2
// key: c, value: 3
```

##### Object.values ()

- 语法：Object.values (obj) 
- 含义：返回一个数组，包含给定对象自身的所有可枚举属性值。 
- 应用场景：可以用来获取对象的自身可枚举属性值，或者遍历对象的值。 
- 例子：

```javascript
const obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.values(obj)); // [1, 2, 3]

Object.values(obj).forEach(value => {
  console.log(`value: ${value}`);
});
// value: 1
// value: 2
// value: 3
```

##### Object.entries(obj)

- 官方语法：`Object.entries(obj)`
- 含义：用于返回一个给定**对象自身可枚举属性**的**键值对数组**。数组中的每个元素都是一个由属性名和属性值组成的数组。
- 应用场景：可以用来遍历对象的属性和值，或者将对象转换为Map结构，或者将对象转换为JSON字符串等。
- 例子：

```javascript
const obj = { foo: "bar", baz: 42 };

// 返回一个键值对数组
const entries = Object.entries(obj);

// entries 的值为 [ ["foo", "bar"], ["baz", 42] ]
console.log(entries);

// 使用 for...of 循环遍历键值对数组
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}

// 输出：
// foo: bar
// baz: 42
```

##### Object.getPrototypeOf ()

- 语法：Object.getPrototypeOf (obj) 

- 含义：返回指定**对象的原型**（即内部 [[Prototype]] 属性的值）。 等价于`__proto__`

- 应用场景：可以用来获取对象的原型，或者判断一个对象是否继承自另一个对象。

- 例子1：

  ```js
  const obj = {};
  const arr = [];
  
  console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
  console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
  console.log(Object.getPrototypeOf(arr) === Object.prototype); // false
  ```

- 例子2

  ```js
  var person = {
    name: "Alice",
    sayHello: function() {
      console.log("Hello, I'm " + this.name);
    }
  };
  
  var student = Object.create(person, {
    grade: {value: 9, writable: true, enumerable: true}
  });
  
  var proto = Object.getPrototypeOf(student); // 获取 student 的原型
  
  console.log(proto === person); // true
  ```

##### Object.is ()

- 语法：Object.is (value1, value2) 含义：判断两个值是否相同。如果下列任何一项成立，则两个值相同：

  - 两个值都是 undefined

  - 两个值都是 null

  - 两个值都是 true 或者都是 false

  - 两个值是由相同个数的字符按照相同的顺序组成的字符串

  - 两个值指向同一个对象

  - 两个值都是数字并且
    - 都是正零 +0
    - 都是负零 -0
    - 都是 NaN
    - 都是除零和 NaN 外的其它同一个数字

- 应用场景：可以用来比较两个值是否相同，特别是对于 NaN 和 +0/-0 的情况，它比 == 和 === 更准确。 例子：

  **只有下面两个的区别！**

```javascript
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false

console.log(NaN === NaN); // false
console.log(+0 === -0); // true
```

##### Object.getOwnPropertyNames

获取对象的所有属性，不包括继承

### 对象相关的概念

#### 可枚举属性

- 可枚举属性是指那些内部“可枚举”标志设置为 true 的属性。对于通过直接的赋值和属性初始化的属性，该标识值默认为即为 true。但是对于通过 **Object.defineProperty** 等定义的属性，该标识值默认为 false 。
- 可枚举属性可以通过 **for…in** 循环进行遍历（除非该属性名是一个 Symbol），或者通过 Object.keys() 方法返回一个**可枚举属性**的数组 。**注意**：Symbol 属性是可以被设置为可枚举的，只要在定义它们时，将 enumerable 属性设置为 true 即可，但是默认为不可枚举。
- 一般来说，**用户定义的属性**都是可枚举的，而内置对象的**原型属性是不可枚举**的，如 Object, Array, Number 等 。
- 可以使用 Object.propertyIsEnumerable() 方法来判断一个对象是否具有指定名称的可枚举属性，返回布尔值 。

