/* 
    事件触发n秒后执行，如果n秒内再次触发，那么重新执行
    - 判断执行了多久？
*/


function debounce(func, n) {
    let t1  = null 
    return function (...args) {
        if (t1) {
            clearTimeout(t1)
        }
        t1 = setTimeout(() => {
            func.call(this, ...args)
            t1 = null
        }, n)
    }
}
let cons = function() {
    console.log('hello')
}
let obj = {
    name: 'li',
    print: function(name){
        console.log(this.name + name)
    }
}

obj.func1 = debounce(obj.print, 2000)

// 2000ms后执行
obj.func1('这是啥')

setTimeout(() => {
    obj.func1("第一次")
    // 更新为3000ms后执行
}, 1000);


setTimeout(() => {
    obj.func1('第二次')
    // 3500ms执行
}, 3500)