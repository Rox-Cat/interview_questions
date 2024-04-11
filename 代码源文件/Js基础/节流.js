/* 
    节流：事件触发之后，n秒内再次触发无效

*/

// function throttle(func, delay) {
//     let t1 = null
//     return function (...args) {
//         if (!t1) {
//             t1 = setTimeout(() => {
//                 func.call(this, ...args)
//                 t1 = null
//             }, delay)
//         }
//     }
// }

// // 定义一个事件处理函数，打印当前时间和参数
// function handle() {
//     console.log(new Date());
// }

// // 获取一个按钮元素
// let button = document.getElementById('button');
// // 给按钮添加点击事件，使用节流函数包装事件处理函数，设置延迟时间为1000毫秒
// button.addEventListener('click', throttle(handle, 1000));


function throttle(fn, delay) {
    let timer;
    return function(...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args);
                timer = null;
            }, delay);
        }
    }
}

// 使用时的上下文
const obj = {
  value: 'object value',
  log: throttle(function(name) {
    console.log(this.value + name); // `this` 指向 `obj`
  }, 1000)
};

// 当 `log` 方法被调用时，`this` 指向 `obj`
// 1000ms后执行
obj.log("第一次");  

setTimeout(() => {
    // 500ms执行无效
    obj.log("第二次")
}, 500);

setTimeout(() => {
    // 1500ms后执行
    obj.log("第三次")
}, 1500);