/* 
    手写promise
    1. executor 的实现
        - 异常处理：执行器中异常作为resolve来执行
        - 如何显示先同步再异步？
    2. resolve和reject的作用
    3. then方法 
        - 状态 -> 操作
        - 实现异步： 等待状态变化在执行操作
        - 链式的调用
*/


class MyPromise {
    static PENDING = 'pending'
    static FULFILLED = 'fulfilled'
    static REJECTED = 'rejected'

    constructor(executor) {
        this.value = null
        this.status = MyPromise.PENDING
        this.callbacks = []
        try {
            executor(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.resolve(error)
        }
    }

    resolve(value) {
        /* 修改状态 */
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.FULFILLED
            this.value = value
            /* 异步执行then方法的回调，状态改变之后，等executor中的同步执行完，再执行回调 */
            queueMicrotask(() => {
                this.callbacks.forEach((funcObj) => {
                    funcObj.onFulfilled(value)
                })
            })
        }
    }

    reject(error) {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.REJECTED
            this.value = error
            queueMicrotask(() => {
                this.callbacks.forEach((funcObj) => {
                    funcObj.onRejected(error)
                })
            })
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { return this }
        onRejected = typeof onRejected === 'function' ? onRejected : () => { return this }
        /* 该promise的状态和值取决于then的回调的返回值 */
        return new MyPromise((resolve, reject) => {
            // console.log(resolve)
            if (this.status === MyPromise.PENDING) {
                /* 将要执行的回调放入一个数组中，等resolve或者reject执行的时候再运行 */
                this.callbacks.push({
                    onFulfilled: () => {
                        this.parse(onFulfilled, resolve, reject)
                    },
                    onRejected: (() => {
                        this.parse(onRejected, resolve, reject)
                    })
                })
            }
            /* 状态为fulfilled，执行onFulfilled */
            if (this.status === MyPromise.FULFILLED) {
                queueMicrotask(() => {
                    this.parse(onFulfilled, resolve, reject)
                })

            }
            if (this.status === MyPromise.REJECTED) {
                queueMicrotask(() => {
                    this.parse(onRejected, resolve, reject)
                })
            }
        })

    }
    parse(callback, resolve, reject) {
        try {
            let res = callback(this.value)
            if (res instanceof MyPromise) {
                res.then(resolve, reject)
            } else {
                resolve(res)
            }
        } catch (error) {
            reject(error)
        }
    }
    static resolve(value) {
        return new MyPromise((resolve, reject) => {
            if (value instanceof MyPromise) {
                value.then(resolve, reject)
            } else {
                resolve(value)
            }
        })
    }
    static reject(error) {
        return new MyPromise((resolve, reject) => {
            if (value instanceof MyPromise) {
                value.then(resolve, reject)
            } else {
                reject(error)
            }
        })
    }

    static all(arrs) {
        return new MyPromise((resolve, reject) => {
            if (!Array.isArray(arrs)) {
                throw new Error('arrs 必须是一个函数')
            }
            let resolveCnt = 0
            let result = []
            for (let i = 0; i < arrs.length; i++) {
                arrs[i].then(value => {
                    result[i] = value
                    resolveCnt += 1
                    if (resolveCnt === arrs.length) {
                        resolve(result)
                    }
                }, error => {
                    reject(error)
                })
            }
        })
    }

    static race(arrs) {
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < arrs.length; i++) {
                arrs[i].then(value => {
                    resolve(value)
                }, error => {
                    reject(error)
                })
            }
        })
    }

    static allSetted(arrs) {
        return new Promise(resolve => {
            let len = 0
            const result = []
            arrs = Array.from(arrs)
            arrs.forEach((arr, idx) => {
                Promise.resolve(arr).then((res) => {
                    result[idx] = { status: "fulfilled", value: res }
                }, (err) => {
                    result[idx] = { status: "rejected", value: err }
                }).finally(() => {
                    len++
                    if (len === arrs.length) {
                        resolve(result)
                    }
                })
            })
        })
    }
    catch(onRejected) {
        return this.then(undefined, onRejected)
    }
}


