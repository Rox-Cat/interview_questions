import {delayResolve, delayReject} from './testPromise.js'

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


// 用来测试promise.all的函数，可以传入一个数组作为参数
async function testAll(promises) {
    try {
        // 如果Promise的结果为fulfilled，直接打印
        // 反之打印错误
        let results = await Promise._all(promises)
        console.log(results)
    } catch (error) {
        console.error(error)
    }
}


// 测试1,
testAll([])

// 测试2：传入一个包含多个成功的Promise对象的数组，应该返回一个包含所有结果的数组
testAll([delayResolve(1000, 'a'), delayResolve(2000, 'b'), delayResolve(3000, 'c')])

// 测试3：传入一个包含至少一个失败的Promise对象的数组，应该抛出一个错误
testAll([delayResolve(1000, 'a'), delayResolve(2000, 'b'), delayReject(500, new Error('c'))])

// 测试4：传入一个包含非Promise对象的数组，应该返回一个包含所有值的数组
testAll([1, 2, 3])