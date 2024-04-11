let source = [{
    id: 1,
    pid: 0,
    name: 'body'
}, {
    id: 2,
    pid: 1,
    name: "title"
}, {
    id: 3,
    pid: 2,
    name: 'div'
}]

/* 
    1. 建立一个映射的树形关系
    2. 利用树形结构，递归的填充数据

*/


/* function arrToTree(arrs) {
    let map = {} // key: id, value: [obj, [children]]
    let mapIdToObj = {}
    arrs.forEach(item => {
        if (map[item.pid]) {
            map[item.pid].push(item.id)
        } else {
            map[item.pid] = [item.id]
        }
        mapIdToObj[item.id] = item
    })
    function dfs(father) {
        let res = []
        if (map[father]) {
            map[father].forEach((id) => {
                let childerenList = dfs(id)
                if (childerenList.length){
                    mapIdToObj[id].children = childerenList
                }
                res.push(mapIdToObj[id])
            })
        }
        return res
    }
    dfs(0)
    return mapIdToObj[1]
}

console.log(arrToTree(source)) */





/* 
    方法1： 
        1. id -> 对象，从id映射到对象。
        2. 循环判断对象的父节点，并添加到父节点中去
        3. 没有父节点，添加到要返回的数组中
*/

function arrToTree(data) {
    if (!Array.isArray(data)){
        throw new Error('data必须是数组')
    }
    // 1. 初始化
    let res = [], map = {}
    data.forEach((item) => {
        map[item.id] = item
    })

    // 2. 建立联系
    data.forEach((item) => {
        let parent = map[item.pid]
        if (parent){
            if (parent.children){
                parent.children.push(item)
            } else {
                parent.children = [item]
            }
        } else {
            res.push(item)
        }
    })

    return res
}


let result = arrToTree(source)
for (let key in result){
    console.log(result[key])
}