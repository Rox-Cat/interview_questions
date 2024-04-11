/* 
    手写：找出两个数组中重复的元素，比如[2,2,3,5]，[1,2,2,2,5]两个数组，
                                  输出[2,2,5]，使用JavaScript写
*/


let arr1 = [2, 2, 3, 5];
let arr2 = [1, 2, 2, 2, 5];

function sameArrs(arr1, arr2) {
    const map1 = {}, map2 = {}
    const res = []
    arr1.forEach((item) => {
        if (map1[item]){
            map1[item]++
        } else {
            map1[item] = 1
        }
    })

    arr2.forEach((item) => {
        if (map2[item]) {
            map2[item]++
        } else {
            map2[item] = 1
        }
     })

    for (let key in map1){
        if (map2[key]) {
            const n = Math.min(map1[key], map2[key])
            res.push(...Array(n).fill(Number(key)))
        }
    }
    return res
}

console.log(sameArrs(arr1, arr2))