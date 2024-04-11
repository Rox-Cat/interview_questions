/* 
    参数：和call一致
    返回值：一个函数，其中的this为指定的
    使用call的方式，返回func.call()
*/


Function.prototype.myBind = function (that, ...args1) {
    if (typeof this !== 'function') {
        throw new Error('this必须是一个函数')
    }
    let func1 = this
    that = that || window
    return function func2(...args2) {
        /* 
            如果使用new操作符，那么this不变，反之变为that
        */
        return func1.call(this instanceof func2 ? this : that, args1.concat(args2))
    }
}