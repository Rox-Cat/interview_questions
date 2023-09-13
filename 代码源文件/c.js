const a = new String(1)
const b = String(1)

console.log(typeof a, typeof b)
console.log(a === b)
let obj = {
    [Symbol.toPrimitive]: function () {
        console.log(1)
        return
    }
}

console.log(!{})