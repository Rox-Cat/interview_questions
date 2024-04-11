/* 
    需求：实现并发控制，用await/async来实现
*/

// 模拟http请求
function httpRequest(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('完成一个任务', time, new Date());
            resolve(time)
        }, time * 1000)
    })
}


// 并发控制
function limitedRequest(urls, maxLimit) {
    let finishedCount = 0, sendedCount = 0
    const n = urls.length
    let results = Array(n)
    return new Promise(resolve => {
        for (let i = 0; i < maxLimit && i < n; i++) {
            next()
        }
        async function next() {
            let curIndex = sendedCount++
            res = await httpRequest(urls[curIndex])
            results[curIndex] = res
            finishedCount++
            if (sendedCount < n) {
                next()
            }
            if (finishedCount === n) {
                resolve(results)
            }
        }
    })

}

urls = [1, 2, 3, 4, 3, 2, 1, 4]
limitedRequest(urls, 3).then(res => {
    console.log(res)
})