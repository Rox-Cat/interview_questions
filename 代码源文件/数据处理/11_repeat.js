/**
 * 字符串实现repeat的方法1
 * @param {Number} n 重复次数
 * @returns 重复n次之后的字符串
 */

/* String.prototype._repeat = function (n) {
	if (typeof n !== 'number' || !Number.isInteger(n)) {
		throw new Error('n必须为整数')
	}
	let res = ''
	for (let i = 0; i < n; i++) {
		res += this
	}
	return res
} */
/**
 * 方法2
 * @param {Number} n 字符串重复的次数
 * @returns n次重复之后的字符串
 */
/* String.prototype._repeat = function (n) {
	if (typeof n !== 'number' || !Number.isInteger(n)) {
		throw new Error('n必须为整数')
	}
	return Array(n + 1).join(this)
}
 */

/**
 * 方法3
 * @param {*} n 
 * @returns 
 */
String.prototype._repeat = function(n){
	return n === 0 ? "": this + this._repeat(n - 1)
}
// 测试案例
const testCases = [
	{ str: 'Hello', count: 3, expected: 'HelloHelloHello' },
	{ str: 'abc', count: 0, expected: '' },
	{ str: 'xyz', count: 1, expected: 'xyz' },
	{ str: '123', count: 5, expected: '123123123123123' },
	{ str: '', count: 10, expected: '' },
];

function runTests() {
	testCases.forEach(({ str, count, expected }, index) => {
		try {
			const result = str._repeat(count);
			if (result === expected) {
				console.log(`Test case ${index + 1}: Passed`);
			} else {
				console.log(`Test case ${index + 1}: Failed`);
				console.log(`  Input: '${str}', ${count}`);
				console.log(`  Expected: '${expected}'`);
				console.log(`  Got: '${result}'`);
			}
		} catch (error) {
			console.log(`Test case ${index + 1}: Failed`);
			console.log(`  Input: '${str}', ${count}`);
			console.log(`  Error: ${error.message}`);
		}
	});
}

runTests();