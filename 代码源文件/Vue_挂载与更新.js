function f(){}
const a = f.prototype
const b = Object.getPrototypeOf(f)
console.log(a, b)
console.log(a === b)
