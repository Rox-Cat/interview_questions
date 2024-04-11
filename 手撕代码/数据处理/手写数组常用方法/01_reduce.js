// 手写reduce
Array.prototype._reduce = function (callback, initialValue) {
    let res = initialValue === undefined ? this[0] : initialValue
    let i = initialValue === undefined ? 1 : 0
    for (i; i < this.length; i++){
        res += callback(res, this[i], i, this)
    }
    return res
}

/* 手写reduce求和的方法，并挂载到Array的原型上 */
Array.prototype.sum = function(){
    return this.reduce((pre, cur) => pre + cur, 0)
}

// 测试
const arrs = [1, 2, 3, 4, 5]
console.log(arrs.sum())
