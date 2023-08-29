/* 
    手写深拷贝
    1. 判断类型
        不是对象，直接返回
    2. 判断是否存在循环引用
    3. 新建对象
    4. 依次遍历属性，并赋值
*/

/* function deepCopy(obj, cache = new Map()) {
    // 1. 判断类型
    if (!obj || typeof obj !== 'object') {
        return obj
    }
    // 2. 判断循环引用
    if (cache.has(obj)) {
        return cache.get(obj)
    }
    // 3. 新建对象
    let newObj = new obj.constructor()
    cache.set(obj, newObj)
    // 4. 遍历属性 -> 自身可枚举属性
    for (let key of Object.keys(obj)) {
        newObj[key] = deepCopy(obj[key], cache)
    }
    return newObj
} */


/* 
    JSON.parse()
    JSON.stringify()

*/


function deepCopy(obj){
    return JSON.parse(JSON.stringify(obj))
}


