// 用来模拟异步操作的函数，可以指定延迟时间和返回值
export function delayResolve(ms, value) {
    return new Promise(resolve => setTimeout(() => resolve(value), ms))
}

export function delayReject(ms, error) {
    return new Promise((_, reject) => setTimeout(() => reject(error), ms))
}

// 模拟http请求
export function httpRequest(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('完成一个任务', url, new Date());
            resolve(`完成一个任务${url}`)
        }, url * 1000)
    })
}