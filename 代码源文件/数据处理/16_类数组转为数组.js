/* 
    类数组的概念？
        1. 索引属性
        2. length属性
        3. 不能使用数组的方法
    如何转化？
        1. Array.from()
        2. 扩展运算符[有局限性]
        3. call() + slice()
        4. splice.call()

*/

function arrayLikeToArray(arrayLike) {
    console.log('传递的参数为：', arrayLike)

    let arr1 = Array.from(arrayLike) // 方法1
    let arr2 = Array.prototype.slice.call(arrayLike) // 方法3
    let arr3 = Array.prototype.splice.call(arrayLike, 0)
    console.log(arr1 instanceof Array, arr1)
    console.log(arr2 instanceof Array, arr2)
    console.log(arr3 instanceof Array, arr3)
}
function test (){
    console.log(arguments)
    console.log(...arguments)
}

test(1, 2, 3, 5)

const arrayLike = {
    0: '第一项',
    1: '第二项',
    2: '第三项',
    length: 3
};

arrayLikeToArray(arrayLike)