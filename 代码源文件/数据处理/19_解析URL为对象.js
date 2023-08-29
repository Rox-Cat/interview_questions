
/* 
    基本要求：
        - key: value
        - 相同的key，合并为数组
        - 



*/


function parseUrl(url) {
    // 1. 提取Params部分 --> 如果没有？和"$"
    let paramsString = url.split('?')[1]
    if (!paramsString) return {}
    let params = paramsString.split('&')
    let res = {}
    params.forEach(item => {
        let [key, value] = item.split('=')
        if (value === undefined) value = true // 表示如果没有参数那么为ture，可以进行修改
        if (res[key]) {
            res[key] = Array.isArray(res[key]) ? res[key] : [res[key]]
            res[key].push(value)
        } else {
            res[key] = value
        }
    });
    return res

}
// 定义一个测试函数，接收一个URL字符串和一个期望的对象作为参数
function testParseUrl(url, expected) {
    // 调用您的parseUrl函数，将URL字符串解析为对象
    var actual = parseUrl(url);
    // 使用JSON.stringify方法，将对象转换为字符串，方便比较
    var actualStr = JSON.stringify(actual);
    var expectedStr = JSON.stringify(expected);
    // 如果实际的对象字符串和期望的对象字符串相等，说明测试通过
    if (actualStr === expectedStr) {
        console.log("Test passed for " + url);
    } else {
        // 如果不相等，说明测试失败，打印出错误信息
        console.log("Test failed for " + url);
        console.log("Expected: " + expectedStr);
        console.log("Actual: " + actualStr);
    }
}

// 定义一些测试用例，使用不同的URL字符串和期望的对象
testParseUrl("https://coder.itclan.cn", {}); // URL参数为空或不存在，期望返回一个空对象
testParseUrl("https://coder.itclan.cn?name=itclanCoder", { name: "itclanCoder" }); // URL参数只有一个键值对，期望返回一个对象
testParseUrl("https://coder.itclan.cn?name=itclanCoder&study=css&age=18", { name: "itclanCoder", study: "css", age: "18" }); // URL参数有多个键值对，但没有重复的键名，期望返回一个对象
testParseUrl("https://coder.itclan.cn?name=itclanCoder&study=css&study=js&study=react", { name: "itclanCoder", study: ["css", "js", "react"] }); // URL参数有多个键值对，并且有重复的键名，期望返回一个对象，其中重复的键名对应的值是一个数组
testParseUrl("https://coder.itclan.cn?name=张三&city=北京&hobby=打篮球&hobby=看电影", { name: "张三", city: "北京", hobby: ["打篮球", "看电影"] }); // URL参数中的值包含中文或其他特殊字符，期望返回一个对象，其中中文或特殊字符被正确解码
// 定义一些更多的测试用例，使用不同的URL字符串和期望的对象
testParseUrl("https://coder.itclan.cn?", {}); // URL参数只有一个问号，期望返回一个空对象
testParseUrl("https://coder.itclan.cn?name=", { name: "" }); // URL参数只有一个键名，没有键值，期望返回一个对象，键值为空字符串
testParseUrl("https://coder.itclan.cn?=itclanCoder", { "": "itclanCoder" }); // URL参数只有一个键值，没有键名，期望返回一个对象，键名为空字符串
testParseUrl("https://coder.itclan.cn?name=itclanCoder&", { name: "itclanCoder" }); // URL参数最后有一个多余的&符号，期望返回一个对象，忽略多余的符号
testParseUrl("https://coder.itclan.cn?name=itclanCoder&study=css&study=js&study=react&study=", { name: "itclanCoder", study: ["css", "js", "react", ""] }); // URL参数中有重复的键名，并且最后一个键值为空字符串，期望返回一个对象，其中重复的键名对应的值是一个数组，包含空字符串
testParseUrl("https://coder.itclan.cn?name=%E5%BC%A0%E4%B8%89&city=%E5%8C%97%E4%BA%AC&hobby=%E6%89%93%E7%AF%AE%E7%90%83&hobby=%E7%9C%8B%E7%94%B5%E5%BD%B1&hobby=%E5%90%AC%E9%9F%B3%E4%B9%90", { name: "张三", city: "北京", hobby: ["打篮球", "看电影", "听音乐"] }); // URL参数中的值包含中文或其他特殊字符，并且有重复的键名，期望返回一个对象，其中中文或特殊字符被正确解码，并且重复的键名对应的值是一个数组