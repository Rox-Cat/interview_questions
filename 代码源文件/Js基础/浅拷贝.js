/* 方法1 */
let obj = {
    name: 'wei',
    message: {
        title: 'li',
        context: 'asdf '

    }

}
let newObj = Object.assign({}, obj)
console.log(newObj)


/* 方法2 */

let newObj2 = {...obj}