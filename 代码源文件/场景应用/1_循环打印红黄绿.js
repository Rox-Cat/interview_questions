/* 
    1. 回调函数
*/

function task() {
    setTimeout(() => {
        console.log("红色")
        setTimeout(() => {
            console.log('绿色')
            setTimeout(() => {
                console.log('黄色')
                task()
            }, 1000)
        }, 2000)
    }, 3000)
}
task()

let callback = (color, delay) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(color)
            resolve()
        }, delay)
    })
}

function taskPromise() {
    callback('红色', 3000)
    .then(() => callback('绿色', 2000))
    .then(() => callback('黄色', 1000))
    .then(() => taskPromise())
}

taskPromise()




let callback_ = (color, delay) => {
    setTimeout(()=>{
        console.log(color)
    }, delay)
}
async function taskAsyncAwait(){
    await callback('红色', 3000)
    await callback('绿色', 2000)
    await callback('黄色', 1000)
    taskAsyncAwait()
}

taskAsyncAwait()