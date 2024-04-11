/* 
    需求：
        实现一个场景的需求，假设需要一次性发送数千个promise请求，实现每次发送固定批次的量，
        并且实现并行处理，全部执行完之后返回一个数组，存放promise的返回值。
    参考：
        https://blog.csdn.net/weixin_44019523/article/details/116604475
*/


// 模拟http请求
function httpRequest(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('完成一个任务', url, new Date());
            resolve(`完成一个任务${url}`)
        }, time * 1000)
    })
}

// 并发控制
function limitedRequest(urls, maxLimit) {
    let finishedCount = 0, sendedCount = 0
    const n = urls.length
    let results = Array(n)
    return new Promise((resolve) => {
        // 1. 将请求队列填满
        for (let i = 0; i < maxLimit && i < n; i++) {
            next()
        }
        function next() {
            let curIndex = sendedCount++    // 这里是实现一个闭包，而不是使用sendedCount
            httpRequest(urls[curIndex]).then(res => {
                results[curIndex] = res
                finishedCount++
                // 已经发送的请求个数
                if (sendedCount < n) {
                    next()
                }
                // 已完成的请求个数
                if (finishedCount === n) {
                    resolve(results)
                }
            })
        }
    })
}

urls = [1, 2, 3, 4, 3, 2, 1, 4]
limitedRequest(urls, 3).then(res => {
    console.log(res)
})