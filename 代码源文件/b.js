// 手写promise.all



// 用来模拟异步操作的函数，可以指定延迟时间和返回值
function delay(ms, value) {
    return new Promise(resolve => setTimeout(() => resolve(value), ms))
}



// 测试1：传入一个空数组，应该返回一个空数组
/* 
    参数：可迭代对象
    返回值：promise对象
    作用：  如果promise状态都变为fullfilled，返回数组内容
            如果存在一个rejected，那返回rejected的内容

*/
Promise._all = function (iterable) {
    return new Promise((resolve, reject) => {

        // 处理不可迭代类型
        if (typeof iterable[Symbol.iterator] !== "function") {
            // 如果不是，就直接拒绝新的 Promise，并返回一个错误信息
            return reject(new TypeError("iterable must be an iterable object"));
        }

        // 可迭代类型的转化
        const promises = Array.from(iterable)
        const n = promises.length

        // 判断是否为空数组
        if (n === 0) return resolve([])

        let finish = 0
        const results = []
        for (let i = 0; i < n; i++) {
            Promise.resolve(promises[i]).then((res) => {
                results[i] = res
                finish += 1
                if (finish === n) {
                    resolve(results)
                }
            }, error => {
                reject(error)
            })
        }
    })
}
// testAll([])

// 测试2：传入一个包含多个成功的Promise对象的数组，应该返回一个包含所有结果的数组
// testAll([delay(1000, 'a'), delay(2000, 'b'), delay(3000, 'c')])

// // 测试3：传入一个包含至少一个失败的Promise对象的数组，应该抛出一个错误
// testAll([delay(1000, 'a'), delay(2000, 'b'), delay(500, new Error('c'))])

// 测试4：传入一个包含非Promise对象的数组，应该返回一个包含所有值的数组
// testAll([1, 2, 3])

// // 测试5：传入一个非数组的参数，应该抛出一个类型错误
testAll('abc')


console.log(iterators)