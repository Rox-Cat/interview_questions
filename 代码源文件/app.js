// 声明拦截器管理构造函数
function InterceptorManager(){
    // 用于存放Axios拦截行为及数据请求的Promise链条
    this.handlers = [];
}
// 增加拦截器
InterceptorManager.prototype.use = function (fulfilled,rejected) {
    this.handlers.push({
        fulfilled,
        rejected
    })
}

function Axios(instanceConfig){
    // defaults 属性为配置对象
    this.defaults = instanceConfig;
    // interceptors 属性用来设置请求和响应拦截器
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager(),
    }
}
Axios.prototype.request = function (config) {
    function dispatchRequest(){
        // 将请求方式全部转为大写
        const method = (config.method || "get").toUpperCase();
        // 返回Promise
        return new Promise((resolve,reject)=>{
            // 声明xhr
            const xhr = new XMLHttpRequest();
            // 定义一个onreadystatechange监听事件
            xhr.onreadystatechange = function () {
                // 数据全部加载完成
                if(xhr.readyState === 4){
                    // 判断状态码是否正确
                    if(xhr.status >= 200 && xhr.status < 300){
                        // 得到响应体的内容
                        const data = JSON.parse(xhr.responseText);
                        // 得到响应头
                        const headers = xhr.getAllResponseHeaders();
                        // request 即是 xhr
                        const request = xhr;
                        // 状态码
                        const status = xhr.status;
                        // 状态码的说明
                        const statusText = xhr.statusText
                        resolve({
                            config,
                            data,
                            headers,
                            request,
                            status,
                            statusText
                        });
                    }else{
                        reject("请求失败"+xhr.status+xhr.statusText);
                    }
                }
            }
            // http://127.0.0.1/two?a=1&b=2
            // 判断是否拥有params,且类型为object
            if(typeof config.params === "object"){
                // 将object 转为 urlencoded {a:1,b:2} a=1&b=2
                // ["a","b"]
                const arr = Object.keys(config.params);
                // ["a=1","b=2"]
                const arr2 = arr.map(v=>v+"="+config.params[v]);
                // a=1&b=2
                const url = arr2.join("&");
                // config.url = config.url + "?" + url;
                config.url +=  "?" + url;
            }
            xhr.open(method,config.url);
            // post put patch
            if(method === "POST" || method === "PUT" || method === "PATCH"){
                if(typeof config.data === "object")
                    xhr.setRequestHeader("content-type","application/json");
                else if(typeof config.data === "string")
                    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
                xhr.send(JSON.stringify(config.data));
            }else{
                xhr.send();
            }

        })
    }
    // dispatchRequest 发送请求，undefined 用来补位
    var chain = [dispatchRequest, undefined];
    // 遍历实例对象的请求拦截器
    this.interceptors.request.handlers.forEach(interceptor=>{
        // 将请求拦截器压入数组的最前面
        chain.unshift(interceptor.fulfilled,interceptor.rejected)
    })
    // 遍历实例对象的响应拦截器
    this.interceptors.response.handlers.forEach(interceptor=>{
        // 将请求拦截器压入数组的最后面
        chain.push(interceptor.fulfilled,interceptor.rejected);
    })
    // 创建一个成功的 promise 且成功的值为合并后的请求配置
    let promise = Promise.resolve(config);

    // 如果链条长度不为 0
    while (chain.length){
        // 依次取出 chain 的回调函数, 并执行
        promise = promise.then(chain.shift(),chain.shift())
    }
    return promise;
}

// axios 本质不是Axios构造函数的实例，而是一个函数对象。函数是request
function createInstance(defaultConfig){
    const context = new Axios(defaultConfig);
    Axios.prototype.request.bind(context);
    // instance 是一个函数。该函数是request,并且内部this指向context.
    var instance = Axios.prototype.request.bind(context);// 等同于上面那行代码
    // 将Axios的原型方法放置到instance函数属性中
    Object.keys(Axios.prototype).forEach(method=>{
        instance[method] = Axios.prototype[method].bind(context)
    })
    Object.keys(context).forEach(attr=>{
        instance[attr] = context[attr];
    })
    return instance;
}

export default createInstance;