/* 
    事件触发n秒后执行，如果n秒内再次触发，那么重新执行
    - 判断执行了多久？
*/


function fangdou(func, n) {
    let t1  = null 
    return function (...args) {
        let that = this
        if (t1) {
            clearTimeout(t1)
            t1 = null
        }
        t1 = setTimeout(() => {
            func.call(that,...args)
            clearTimeout(t1)
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

let func1 = fangdou(obj.print, 1000)
func1('这是啥')
setTimeout(() => {
    func1('第二次')
}, 3000)