/* 
    1. 基本数据类型为false
    2. null -> false
    2. 对象的话，循环判断
*/

function _instanceOf(obj, constructor) {
    if (obj === null) return false
    if (typeof obj !== 'function' && typeof obj !== 'object'){
        return false
    } 
    let __proto__ = Object.getPrototypeOf(obj) 
    let prototype = constructor.prototype

    while(__proto__){
        if (__proto__ === prototype){
            return true
        } else {
            __proto__ = Object.getPrototypeOf(__proto__)
        }
    }
    return false
}

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