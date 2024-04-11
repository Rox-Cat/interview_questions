/* 
    经典的执行异步
*/

/* 
    闭包 + let作用域
*/


for (var i = 1; i < 5; i++) {
    ((i) => {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    })(i)
}

// 块级作用域
for (let i = 1; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}