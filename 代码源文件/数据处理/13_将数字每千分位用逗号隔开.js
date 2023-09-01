/* 数字没有小数点的情况 */

function thousandsSplit(number) {
    /* 
        1. 从最右侧开始
        2. 转换策略
            2.1 转为字符串
            2.2 利用相除来转化
    */
    let tmpString = String(number)
    let n = tmpString.length
    let start = n % 3
    let res = tmpString.slice(0, start + 1)
    let cnt = Math.floor(n / 3)
    for (let i = 0; i < cnt; i++) {
        res += "," + tmpString.slice(start + i * 3, start + (i + 1) * 3)
    }
    return res
}

console.log(thousandsSplit(12345566))