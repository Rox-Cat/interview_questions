/* 
    1. 参数
        - context: 无所谓
        - args: 无所谓
    2. this -> 必须是个函数
    3. context为null的时候，要转为window
    4. 给context添加属性 -> symbol类型
*/


Function.prototype._call = function (context, ...args) {

    /*     
        这段话似乎没用
        if (typeof this !== 'function') {
            throw new Error('调用者必须是函数')
        } 
    */
    // context可能是非对象，例如字符串等
    context = (context === undefined || context === null)
        ? global : Object(context)

    let fn = Symbol('fn')
    context[fn] = this
    let res = context[fn](...args)
    delete context[fn]
    return res
}
Function.prototype.myCall = function (thisArg, ...args) {
    // 函数本身是个对象，因此this指的是函数本身
    if (typeof this !== 'function') throw new Error('not a function')

    thisArg = thisArg || window // 2. 
    // 3. 将调用对象作为thisArg的一个属性添加到thisArg对象上，并生成一个唯一的属性名
    const fn = Symbol('fn')   // 使用Symbol类型来避免命名冲突
    thisArg[fn] = this
    console.log(thisArg[fn])
    //4. 
    let result = thisArg[fn](...args)
    // 5. 
    delete thisArg[fn]
    return result
}

// 定义一个对象
let obj1 = {
    name: 'Bob',
    sayName: function () {
        console.log(this.name);
    },
};

// 定义另一个对象
let anotherObj = {
    name: 'Alice',
};

// 使用你的call函数，改变obj.sayName函数的this指向为anotherObj，并执行它
obj1.sayName._call(anotherObj);
