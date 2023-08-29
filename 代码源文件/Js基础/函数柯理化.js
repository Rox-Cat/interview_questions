/* 将函数fn封装为一个柯理化函数 */

function carry(fn) {
    return function carry(...args) {
        /* 如何该函数传入的参数满足条件，那么执行 */
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            /* 不满足条件:
                返回一个新的函数，收集参数
            合并参数到传入后续的函数中 */
            return function carried(...newArgs) {
                return carry.apply(this, args.concat(newArgs))
            }
        }
    }
}


function add(a, b ,c){
    return a + b + c 
}

let newAdd = carry(add)
console.log(newAdd(1,3)(3))