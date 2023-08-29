/* 
    节流：事件触发之后，n秒内再次触发无效

*/

function throttle(func, delay) {
    let t1 = null
    return function (...args) {
        if (!t1) {
            t1 = setTimeout(() => {
                func.call(this, ...args)
                t1 = null
            }, delay)
        }
    }
}

// 定义一个事件处理函数，打印当前时间和参数
function handle() {
    console.log(new Date());
}

// 获取一个按钮元素
let button = document.getElementById('button');
// 给按钮添加点击事件，使用节流函数包装事件处理函数，设置延迟时间为1000毫秒
button.addEventListener('click', throttle(handle, 1000));



