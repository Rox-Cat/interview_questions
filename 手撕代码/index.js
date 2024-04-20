// const obj = {
// 	"a": 1,
// 	"b": 2,
// 	"c": "123",
// 	"d": [1, 2, 3]
// }

// function reverseObject(obj) {
// 	const newObj = {}
// 	for (let property in obj) {
// 		if (obj.hasOwnProperty(property)) {
// 			newObj[obj[property.toString()]] = property
// 		}
// 	}
// 	return newObj
// }

// const newObj = reverseObject(obj)
// console.log(newObj)

function invertObject(obj) {
	const inverted = {}
	Object.keys(obj).forEach((key) => {
		const value = obj[key]
		// 如果值是复杂类型（对象或数组），可以选择JSON.stringify(value)转换为字符串键，此处简化处理为直接转字符串
		const newKey =
			typeof (value === "object" && value !== null)
				? JSON.stringify(value)
				: String(value)
		// 处理原键为Symbol的情况，如果确实需要翻转Symbol，需要根据具体情况特殊处理
		inverted[newKey] = key
	})
	return inverted
}

// 示例
const obj = {
	a: "1",
	b: "2",
	c: "1", // 注意这会覆盖掉 a 的翻转结果
	d: undefined, // 这会被转换成 'undefined' 字符串
	e: null, // 这会被转换成 'null' 字符串
	f: { key: "value" }, // 对象会被转换成 '[object Object]' 或者使用 JSON.stringify
	g: [1, 2, 3], // 数组会被转换成 '1,2,3',
	h: function name(params) {
		console.log(params)
	}
}

console.log(invertObject(obj))


console.log(JSON.stringify(invertObject))