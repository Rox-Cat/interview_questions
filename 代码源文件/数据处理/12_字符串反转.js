/**
 * 字符串反转方法1
 * @returns 反转之后的字符串
 */

String.prototype.reverse = function () {
    return this.split("").reverse().join("");
}

String.prototype.reverse = function () {
    let res = ''
    for (let i = this.length - 1; i >= 0; i--){
        res += this[i]
    }
    return res
}


function testStringReverse() {
    const testCases = [
        { input: 'hello', expected: 'olleh' },
        { input: 'OpenAI', expected: 'IAnepO' },
        { input: '12345', expected: '54321' },
        { input: 'racecar', expected: 'racecar' },
        { input: '', expected: '' }
    ];

    for (const testCase of testCases) {
        const { input, expected } = testCase;
        const result = input.reverse();
        if (result === expected) {
            console.log(`PASS - input: '${input}', expected: '${expected}', result: '${result}'`);
        } else {
            console.log(`FAIL - input: '${input}', expected: '${expected}', result: '${result}'`);
        }
    }
}

// 测试字符串反转函数
testStringReverse();



