function change (str) {
    const map = {
        "A": 10,
        "B": 11,
        "C": 12,
        "D": 13,
        "E": 14,
        "F": 15
    }
    let num = 0
    for (let i = str.length - 1; i >= 0; i--) {
        let cur = map[str[i]] ? map[str[i]] : +str[i]
        num += cur * (16 ** (str.length - 1 - i))
    }
    return num.toString()
}
// 这是一个包含十六进制字符串和十进制输出的数组
const array = [
    ["A1B2", "41394"],
    ["3F4E", "16206"],
    ["C5D6", "50646"],
    ["9E7F", "40575"],
    ["8D9C", "36252"]
]

for (let [x, y] of array) {
    console.log(x, change(x))
    console.log(change(x) === y)
}

