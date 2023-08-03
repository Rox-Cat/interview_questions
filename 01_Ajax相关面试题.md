# 学习路径

## 参考链接：

[Ajax常见面试题---总结 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/98288927)

[AJAX原理及常见面试题 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/108686888)

[面试题：手写ajax - 掘金 (juejin.cn)](https://juejin.cn/post/6992604888165253156)

## 学习方面

1. 黑马程序员的教学视频

   除了讲Ajax还一些网络浏览器之间的通用知识，很不错

2. 千峰教育

   原生Ajax和Fetch还有axios,其实明白了Ajax和原理，具体学习的就是调用方法的学习

# 面试题/学习整理

## AJAX面试题

### 1. 什么是Ajax？它的作用是什么？

Ajax是"Asynchronous JavaScript and XML"（异步JavaScript和XML）的缩写，它是一种用于创建动态网页的技术。

Ajax能够在不刷新整个页面的情况下，通过JavaScript异步向服务器请求数据，<font color='red'>异步地加载</font>和更新部分页面内容。

可以提高用户体验，动态加载数据，表单验证和提交等。

Ajax通常使用XMLHttpRequest对象来实现异步通信，也可以使用fetch API、jQuery等库简化开发。

### 2. 传统的请求方式？与Ajax有什么不同？

- 传统的方式
  - 直接在浏览器地址栏上输入URL。
  - 点击超链接
  - 提交form表单
  - 使用JS代码发送请求
- 不同点
  - 页面全部刷新导致了用户的体验较差。
  - 传统的请求导致用户的体验有空白期。（用户的体验是不连贯的）
  - 而Ajax是异步请求，所以不需要重新加载整个界面，实现局部的更新。并在页面更新的时候，页面不会阻塞，可以执行后面的内容，等请求到数据之后，再更新页面的部分内容。使得用户体验好，并且减少了服务器的压力

### 3. Ajax常用于以下场景

- 提高用户体验：通过异步加载数据，可以在不刷新整个页面的情况下更新页面的部分内容，减少页面加载时间，提高用户体验。

- 动态加载数据：通过Ajax请求数据，可以动态地更新页面内容，实现一些交互效果，如搜索建议、下拉刷新等。

- 表单验证和提交：通过Ajax验证表单数据的合法性，并异步提交表单数据，避免页面重新加载。

### 4. 如何理解Ajax的异步？

Ajax的异步体现在它的请求方式上。在传统的方式中，当用户点击一个链接或提交一个表单时，浏览器会向服务器发送请求，并等待服务器返回响应后才更新页面。这种方式需要重新加载整个页面，用户需要等待一段时间才能看到更新后的页面。

而在Ajax中，通过JavaScript异步向服务器请求数据，并在==数据返回后更新页面的部分内容==，不需要重新加载整个页面，可以实现局部更新。这种异步请求方式可以使用户更快地看到更新后的内容，并提高用户体验。

具体来说，Ajax通过XMLHttpRequest对象来实现异步请求。当浏览器发送Ajax请求时，==页面不会被阻塞，可以继续执行后续代码==。当服务器返回数据后，浏览器会通过==回调函数来处理响应数据==，并==更新页面的部分内容==。这种方式可以==实现异步更新==，提高页面的响应速度和用户体验。

总之，Ajax的异步请求方式与传统的方式相比，可以实现更快的页面更新和更好的用户体验，是一种更加高效的前端开发方式。

### 5. Ajax优缺点

- Ajax的优点：
  1. 提高用户体验：Ajax能够在不刷新整个页面的情况下，异步加载和更新部分页面内容，用户无需等待整个页面的刷新，可以更快地获取到所需的数据，提高了用户体验。
  2. 减轻服务器负担：通过Ajax的异步请求方式，可以减轻服务器的负担，提高服务器的响应速度和并发处理能力。
  3. 提高页面响应速度：Ajax能够异步地获取和更新部分页面内容，避免了整个页面的重载，提高了页面响应速度。
  4. 减少网络流量：通过Ajax的异步请求方式，可以只获取和更新需要的部分数据，减少了网络流量和数据传输时间。
-  Ajax的缺点：
  1. 对搜索引擎不友好：Ajax的异步请求方式无法被搜索引擎爬取，会影响网站的SEO优化。
  2. 安全性问题：由于Ajax能够在不刷新整个页面的情况下，异步加载和更新部分页面内容，可能存在安全性问题，如跨站脚本攻击（XSS）和跨站请求伪造（CSRF）等。
  3. 对JavaScript支持不好的浏览器不友好：某些低版本或不支持JavaScript的浏览器无法使用Ajax技术。
  4. 开发复杂度高：相比于传统的页面请求方式，使用Ajax技术需要编写大量的JavaScript代码，开发复杂度相对较高。
  5. ajax不支持浏览器back按钮。
  6. 安全问题 AJAX暴露了与服务器交互的细节。
  7. 破坏了程序的异常机制。
  8. 不容易调试。

### 6. AJAX最大的特点是什么。

Ajax最大的特点是可以在不刷新整个页面的情况下，异步加载和更新部分页面内容。传统的页面请求方式需要整个页面刷新才能获取和更新页面内容，而Ajax能够通过异步请求的方式，在后台与服务器进行数据交互，从而使页面的更新变得更加灵活和快速，提高了用户体验和页面响应速度。

通过Ajax的异步请求方式，可以实现数据的实时更新和局部刷新，避免了页面整体刷新的过程，减少了不必要的网络流量和数据传输时间。这使得Ajax能够广泛应用于Web应用程序和移动应用程序的开发中，成为Web 2.0时代的重要技术之一。

### 7. 关于Ajax的真实应用

当涉及到与后台服务器进行数据交互的场景时，Ajax 可以是一个非常有用的工具。以下是一些可能需要使用 Ajax 的常见场景：

- **动态加载数据**：通过 Ajax，可以从后台服务器异步地获取数据，而不需要刷新整个页面。这使得应用程序更快，响应更迅速。
- **表单提交**：Ajax 可以在不刷新整个页面的情况下，异步地将表单数据发送到后台服务器。
- **实时搜索**：可以使用 Ajax 实现实时搜索功能，用户输入关键词时，可以向后台服务器发送请求，并根据响应结果异步更新搜索结果。
- **图片上传**：使用 Ajax，可以异步地将图像上传到后台服务器，并在上传完成后获取响应。
- **聊天应用程序**：聊天应用程序需要实时的数据交互和通信。Ajax 可以用于实现这些实时的数据交互，例如轮询服务器以获取新消息。
- **数据可视化**：通过 Ajax，可以异步地从后台服务器获取数据，并将其用于数据可视化，例如使用 D3.js 或 Highcharts.js 这样的库。
- **多语言支持**：可以使用 Ajax 请求获取不同语言版本的文本资源，并在应用程序中动态地加载这些文本资源。

总之，Ajax 可以用于任何需要在后台服务器和前端之间进行数据交换的场景。

## XHR进行原生AJAX请求的发送

相关文档：

- [XMLHttpRequest - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)
- [面试题：手写ajax - 掘金 (juejin.cn)](https://juejin.cn/post/6992604888165253156)

##### 介绍一下XMLHttprequest对象

> 是什么？做什么？怎么用？

- XMLHttpRequest对象是JavaScript中的一个内置对象，用于在客户端与服务器之间发送HTTP请求和接收响应，实现异步通信。通过XMLHttpRequest对象，可以向服务器发送请求，获取服务器返回的数据，并在不刷新整个页面的情况下更新页面内容。

**使用XHR发起GET请求的步骤**

- 创建 xhr 对象

- 调用 xhr.open() 函数

- 调用 xhr.send() 函数

- 监听 xhr.onreadystatechange 事件

**使用XHR发送GET请求**

```js
// 1. 创建 XHR 对象
var xhr = new XMLHttpRequest()
// 2. 调用 open 函数，指定 请求方式 与 URL地址
xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks')
// 3. 调用 send 函数，发起 Ajax 请求
xhr.send()
// 4. 监听 onreadystatechange 事件
xhr.onreadystatechange = function() {
    // 4.1 监听 xhr 对象的请求状态 readyState ；与服务器响应的状态 status
    if (xhr.readyState === 4 && xhr.status === 200) {
        // 4.2 打印服务器响应回来的数据
        console.log(xhr.responseText)
    }
}
```

一个较为完整的版本

```js
let xhr = new XMLHttpRequest()
xhr.open('GET', 'xxxx')
// 响应类型
xhr.responseType = 'json'
// 设置请求头
xhr.setRequestHeader('Content-Type', 'application/json')
xhr.onreadystatechange = function(){
    if (xhr.readyState !==4){
        return 
    }
    if (xhr.status === 200){
        handle(xhr.responseText)
    }else{
        console.error(xhr.statusText)
    }
}
// 错误判断
xhr.onerror = function(){
    // 错误文本
    console.error(xhr.statusText)
}
xhr.send()
```

1. ##### 使用xhr发起带参数的GET请求

   ```js
   // ...省略不必要的代码
   xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks?id=1')
   // ...省略不必要的代码
   ```

   这种在 URL 地址后面拼接的参数，叫做**查询字符串**。

   ==Get请求携带参数的本质就是在URL后面添加查询字符串==

2. ##### 使用xhr发起POST请求步骤

   - 创建 xhr 对象

   - 调用 xhr.open() 函数

   - ==**设置** **Content-Type** **属性**（固定写法）==

   - 调用 xhr.send() 函数，**同时指定要发送的数据**

   - 监听 xhr.onreadystatechange 事件

   > 区别：
   >
   > 1. 设置请求头类型，要指定好相应数据[传输格式](#asd)
   > 2. 要在send中指定发送的内容

3. ##### 使用XHR发起POST请求

   ```js
   // 1. 创建 xhr 对象
   var xhr = new XMLHttpRequest()
   // 2. 调用 open()
   xhr.open('POST', 'http://www.liulongbin.top:3006/api/addbook')
   // 3. 设置 Content-Type 属性（固定写法）
   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
   // 4. 调用 send()，同时将数据以查询字符串的形式，提交给服务器
   xhr.send('bookname=水浒传&author=施耐庵&publisher=天津图书出版社')
   // 5. 监听 onreadystatechange 事件
   xhr.onreadystatechange = function() {
       if (xhr.readyState === 4 && xhr.status === 200) {
           console.log(xhr.responseText)
       }
   }
   ```

4. ##### readyState属性介绍

   | **值** | **状态**         | **描述**                                             |
   | ------ | ---------------- | ---------------------------------------------------- |
   | 0      | UNSENT           | XMLHttpRequest  对象已被创建，但尚未调用  open方法。 |
   | 1      | OPENED           | open() 方法已经被调用。                              |
   | 2      | HEADERS_RECEIVED | send() 方法已经被调用，响应头也已经被接收。          |
   | 3      | LOADING          | 数据接收中，此时  response  属性中已经包含部分数据。 |
   | 4      | DONE             | Ajax  请求完成，这意味着数据传输已经彻底完成或失败。 |

​	所以上文中要使用xhr.readyState === 4 来判断相应结束

8. <a id="asd">请求头类型</a>

   不同的请求头类型有不同的数据编码方式和传输格式，下面将介绍常见的请求头类型及其区别以及使用场景和举例：

   - `application/x-www-form-urlencoded`: 这是表单默认的提交方式，将数据以键值对的形式发送给服务器。这种方式数据会被编码成URL格式，例如：`key1=value1&key2=value2`。使用场景包括提交表单数据，搜索请求等。例如：

   ```
   makefileCopy codePOST /search HTTP/1.1
   Host: example.com
   Content-Type: application/x-www-form-urlencoded
   
   q=apple
   ```

   - `multipart/form-data`: 用于上传二进制数据或大型数据，比如图片或者音视频文件。这种方式不会对数据进行编码，而是采用一定的分隔符分割多个部分。例如：

   ```
   cssCopy codePOST /upload HTTP/1.1
   Host: example.com
   Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
   
   ------WebKitFormBoundary7MA4YWxkTrZu0gW
   Content-Disposition: form-data; name="file"; filename="example.jpg"
   Content-Type: image/jpeg
   
   {binary data}
   ------WebKitFormBoundary7MA4YWxkTrZu0gW--
   ```

   - `application/json`: 用于发送JSON数据，这种方式的数据格式为JSON字符串。适合用于发送AJAX请求，实现前后端分离。例如：

   ```
   bashCopy codePOST /api/users HTTP/1.1
   Host: example.com
   Content-Type: application/json
   
   {"name": "John", "age": 30}
   ```

   - `text/plain`: 纯文本数据的提交方式。例如：

   ```
   bashCopy codePOST /message HTTP/1.1
   Host: example.com
   Content-Type: text/plain
   
   Hello, world!
   ```

   综上所述，不同的请求头类型适用于不同的场景，需要根据具体的需求选择合适的请求头类型。

9. ##### 自己封装一个Ajax函数【还没写，等重温Promise的时候再写】

   一个简单的封装：

   ```js
           function getJson(url){
               let promise = new Promise((resolve, reject)=>{
                   let xhr = new XMLHttpRequest()
                   xhr.open("GET", url)
                   xhr.responseType = "json"
                   xhr.setRequestHeader('Content-Type', 'application/json')
                   xhr.onreadystatechange = function (){
                       if (xhr.readyState !== 4){
                           return 
                       }
                       if (xhr.status === 200){
                           resolve(xhr.responseText)
                       }else{
                           reject(new Error(xhr.statusText))
                       }
                   }
   
                   xhr.onerror = function (){
                       reject(new Error(xhr.statusText))
                   }
                   xhr.send()
               })
               return promise
           }
   ```

   

   下面是一个简单的Ajax封装函数的例子：

   ```js
   javascriptCopy codefunction ajax(url, options) {
     return new Promise(function(resolve, reject) {
       let xhr = new XMLHttpRequest();
       xhr.open(options.method || 'get', url, true);
   
       xhr.onreadystatechange = function() {
         if (xhr.readyState === 4) {
           if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
             resolve(xhr.responseText);
           } else {
             reject(xhr.status);
           }
         }
       }
   
       xhr.onerror = function() {
         reject(xhr.status);
       }
   
       if (options.headers) {
         Object.keys(options.headers).forEach(function(key) {
           xhr.setRequestHeader(key, options.headers[key]);
         });
       }
   
       xhr.send(options.body || null);
     });
   }
   ```

   这个函数使用了Promise封装了Ajax请求，并提供了基本的配置项，如请求方法、请求头和请求体等。

   使用这个函数可以像下面这样发起一个Ajax请求：

   ```js
   javascriptCopy codeajax('/api/data', {
     method: 'post',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ name: 'John', age: 18 })
   })
     .then(function(response) {
       console.log(response);
     })
     .catch(function(error) {
       console.error(error);
     });
   ```

   步骤大致如下：

   1. 创建一个XMLHttpRequest对象
   2. 设置请求方法、URL和是否异步等基本参数
   3. 设置请求状态变化的回调函数，并在回调函数中处理响应结果
   4. 设置请求出错的回调函数
   5. 如果有请求头信息，设置请求头信息
   6. 发送请求，并传递请求体数据
   7. 返回Promise对象，以便在外部使用then和catch方法处理响应结果

   # 使用Fetch进行Ajax请求

   

10. ##### Fetch简介

   XMLHttpRequest 是一个设计粗糙的 API，配置和调用方式非常混乱， 而且基于事件的异步模型写起来不友好。

   Fetch 是用于网络请求的 JavaScript API，可以替代传统的 XMLHttpRequest (XHR) 对象。它可以发送各种类型的请求，并且支持 Promise，使得异步操作更加方便和可读性更好。

   需要注意的是，fetch 方法的兼容性不是很好，不支持 IE。在实际应用中，可能需要使用 [polyfill ]((https://github.com/camsong/fetch-ie8))库或者第三方库来处理这个问题。

​	实现Ajax的一种手段！Fetch的存在减少了原生Ajax的使用。

2. ##### Fetch基本用法方法

```js
fetch("http://localhost:3000/users")
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
            })


fetch("http://localhost:3000/users",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                username:"kerwin",
                password:"123"
            })
        })
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
            })

fetch("http://localhost:3000/users/5",{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                username:"kerwin",
                password:"456"
            })
        })
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
            })

fetch("http://localhost:3000/users/5",{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
            })
```

3. ##### Fetch请求的错误处理

```js
//
fetch("http://localhost:3000/users1")
            .then(res=>{
                if(res.ok){
                    return res.json()
                }else{
                    return Promise.reject({
                        status:res.status,
                        statusText:res.statusText
                    })
                }
            })
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
```

## Axios发起Ajax请求

### Axios简介

>Axios是一个基于promise 的 HTTP 库，可以用在浏览器和 node.js中。

**相关资源**

- https://www.npmjs.com/package/axios

- [axios中文文档|axios中文网 | axios (axios-js.com)](http://www.axios-js.com/zh-cn/docs/index.html#axios-API)

- [起步 | Axios 中文文档 | Axios 中文网 (axios-http.cn)](https://www.axios-http.cn/docs/intro)

- `<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>`
- [axios使用实例详解_axios实例使用_折海棠赠晩宁.的博客-CSDN博客](https://blog.csdn.net/zzDAYTOY/article/details/107098406)
- [axios的实例创建与应用_DanceDonkey的博客-CSDN博客](https://blog.csdn.net/qq_43750656/article/details/112526144)

### Axios发送请求

使用`axios(config)`发送请求，其中config包含以下内容：

```js
config = {
    method: "get/post/putch/delete....",
    url: '...',
    data: {
        key: value
    }
}
```

**实例**

```js
// 发起一个post请求
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

**别名**

`axios.get/post/patch/delete`等，见后文。

### Axios别名发送请求

#### Get请求

**基本使用**

`axios.get(url, config).then().catch()`

**配置项**

- config中可以配置参数`params: {ID = 12345}`等价于url中：`'...?ID=12345'`添加查询字符串。

```js
const axios = require('axios');

axios.get('http://localhost:3000/user?name=kerwin', {}).then(...).catch(...)

// 等价于
axios.get("http://localhost:3000/users",{
    params:{
        name:"kerwin"
    }
}).then(res=>{
    console.log(res.data)
})
```

#### Post请求

**基本使用**

`axios.post(url, data)`，其中`data = {xx:xxx}`为提交的信息。

```js
axios.post("http://localhost:3000/users",{
    name:"kerwin",
    age:100
}).then(res=>{
	console.log(res.data)
})
```

4. ##### put请求

```js
axios.put("http://localhost:3000/users/12",{
    name:"kerwin111",
    age:200
}).then(res=>{
    console.log(res.data)
})
```

5. ##### delete请求

```js
axios.delete("http://localhost:3000/users/11").then(res=>{
    console.log(res.data)
})
```

6. ##### axios(config)配置

```js
axios({
    method: 'post',
    url: 'http://localhost:3000/users',
    data: {
        name: 'kerwin',
        age: 100
    }
})
    .then(res => {
    console.log(res.data)
}).catch(err=>{
    console.log(err)
})
```

### Axios实例

> Axios实例用于配置Axios请求的基础信息，免去每次发送请求书写重复的内容。
>
> [axios.create 使用 - 简书 (jianshu.com)](https://www.jianshu.com/p/458e9012d314)

**创建实例**

`axios.create([config])`

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

**使用实例**

使用实例后，就可以不用重复写实例中已有的内容了。

```ts
//方式一 
//因为全局 instance 中的baseURL 已经配置 https://some-domain.com/api/'，我们需要在使用的时候，写接口名字就可以了，不需要写前面域名了
instance({
url: '/posts'
})


//方式二
instance.get('/posts')
```

### 请求配置的内容

> config：有哪些内容？
>
> [请求配置 | Axios 中文文档 | Axios 中文网 (axios-http.cn)](https://www.axios-http.cn/docs/req_config)

### 响应体结构

> 请求数据成功之后，在.then((response)=>{...response})中的响应体的内容。
>
> 主要应用在：
>
> - 直接读取响应数据
> - 响应拦截器中处理数据
>
> [响应结构 | Axios 中文文档 | Axios 中文网 (axios-http.cn)](https://www.axios-http.cn/docs/res_schema)

```json
{
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 是服务器响应头
  // 所有的 header 名称都是小写，而且可以使用方括号语法访问
  // 例如: `response.headers['content-type']`
  headers: {},

  // `config` 是 `axios` 请求的配置信息
  config: {},

  // `request` 是生成此响应的请求
  // 在node.js中它是最后一个ClientRequest实例 (in redirects)，
  // 在浏览器中则是 XMLHttpRequest 实例
  request: {}
}
```

### 默认配置

> [默认配置 | Axios 中文文档 | Axios 中文网 (axios-http.cn)](https://www.axios-http.cn/docs/config_defaults)

### Axios拦截器

- ###### 拦截器的作用

  Axios 的拦截器用于在发送请求或响应时，拦截并对其进行预处理或处理。通过设置请求拦截器和响应拦截器，可以在请求发起前和响应返回后进行相关处理，例如：

  1. 在请求发起前，可以通过请求拦截器设置请求头、设置请求参数等。
  2. 在响应返回后，可以通过响应拦截器对响应数据进行统一处理、进行错误处理、进行权限校验等。

- ##### 具体作用

  Axios的拦截器是用来在发送请求或响应返回前拦截并处理相关操作的功能。拦截器分为请求拦截器和响应拦截器。

  请求拦截器可以用来在发送请求前进行一些操作，如设置请求头、添加token等操作。响应拦截器可以用来在接收到响应后进行一些操作，如统一处理返回值、错误码等操作。

  Axios的拦截器主要有以下几个作用：

  1. 统一处理请求和响应：可以通过请求拦截器和响应拦截器统一处理请求和响应的数据，从而避免代码重复。
  2. 统一处理错误：可以通过响应拦截器统一处理错误，如网络错误、请求错误等。
  3. 请求重试：可以通过请求拦截器实现请求重试的功能，如网络异常时可以自动重试请求。
  4. 统一设置请求头：可以通过请求拦截器统一设置请求头，如添加 token 等操作。
  5. 统一处理响应数据：可以通过响应拦截器统一处理响应数据，如对响应数据进行加工、格式化等操作。

  总之，Axios的拦截器提供了非常强大的功能，使得开发者可以在发送请求前、请求返回后对请求和响应进行拦截和处理，从而可以在请求过程中进行一些统一、灵活的操作，提高了开发效率和代码的可维护性。

- **使用拦截器**

  Axios 提供了`axios.interceptors` 属性用于设置拦截器，`axios.interceptors.request` 属性用于设置请求拦截器，`axios.interceptors.response` 属性用于设置响应拦截器。可以通过 `use()` 方法添加拦截器函数，也可以通过 `eject()` 方法移除拦截器。

  ```js
  axios.interceptors.request.use(function (config) {
      // config配置对象，等同于我们在axios.get(config)中的配置对象，
      // 在此处我们可以给请求配置添加/修改内容
      // headers属性：请求头，给服务器端携带公共的参数
      console.log("loading-开始")
      return config;
  }, function (error) {
      // Do something with request error
      return Promise.reject(error);
  });
  
  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
  	// response表示响应体内容
  	
      console.log("loading-结束")
      return response;
  }, function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      console.log("loading---结束")
      return Promise.reject(error);
  });
  ```
  
  

7. ##### axios 中断器的作用及使用



```js
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// cancel the request
controller.abort()

```

#  同源策略(Same-origin policy)

一个 URL  有三部分组成：<font color='red'>协议、域名(指向主机)、端口，</font>只有这三个完全相同的 URL 才能称之为同源。如下，能和  `http://www.example.com/dir1/index.html`  同源的是？

| URL                                       | 结果   | 原因                               |
| ----------------------------------------- | ------ | ---------------------------------- |
| `http://www.example.com/dir2/api`         | 同源   | 只有路径不同                       |
| `https://www.example.com/api`             | 不同源 | 协议不同                           |
| `http://www.example.com:81/dir1/etc.html` | 不同源 | 端口不同 ( `http://` 默认端口是80) |
| `http://www.kerwin.com/dir1/other.html`   | 不同源 | 域名不同                           |

------



> （1） 无法读取非同源网页的 Cookie、LocalStorage 。
> （2） 无法接触非同源网页的 DOM。
> （3） 无法向非同源地址发送 AJAX 请求（可以发送，但浏览器会拒绝接受响应）。



**注意：**

同源策略是浏览器的行为，是为了保护本地数据不被JavaScript代码获取回来的数据污染，<font color='red'>因此拦截的是客户端发出的请求回来的数据接收，即请求发送了，服务器响应了，但是无法被浏览器接收。</font>

# 实现跨域的方法

#### 实现方法简介

- **JSONP（只能用于GET请求）**：利用script标签不受同源策略限制的特性，将需要获取的数据作为参数拼接在一个回调函数中，服务器端返回该函数的调用，并返回数据。
- **CORS**：CORS全称Cross-Origin Resource Sharing，是一种W3C标准，主要是通过设置响应头来实现跨域请求。
- **代理**：在同域下搭建一个代理服务器，让代理服务器去请求目标服务器的数据，然后再将数据返回给前端。
- **WebSocket**：WebSocket是一种协议，可以实现跨域通信，支持全双工通信，可以保持长连接。
- **postMessage**：postMessage是HTML5新增的API，可以实现跨窗口通信，适用于在同一页面或不同页面的iframe之间进行通信。

#### 详解JSONP(JSON with Padding)

##### 1. JSONP的原理

由于浏览器同源策略的限制，网页中无法通过 Ajax 请求非同源的接口数据。但是 <script> 标签不受浏览器同源策略的影响，可以通过 src 属性，请求非同源的 js 脚本。

因此，JSONP 的实现原理，就是通过 `<script>` 标签的 src 属性，请求跨域的数据接口，并通过**函数调用**的形式，接收跨域接口响应回来的数据。

##### 2. JSONP的实现

- 定义一个全局的回调函数，在JSONP响应返回时调用该函数

  ```js
   <script>
     function success(data) {
       console.log('获取到了data数据：')
       console.log(data)
     }
   </script>
  ```

- 动态创建script标签，设置其src属性为需要请求的URL，其中包括传递给后台的<font color='red'>参数</font>和<font color='red'>回调函数名称</font>。

  ```js
  <script src="http://ajax.frontend.itheima.net:3006/api/jsonp?callback=success&name=zs&age=20"></script>
  ```

- 后台接收到请求后，解析出请求参数和回调函数名称，将数据包装成一个函数调用的形式返回给前端。
- 前端接收到响应后，调用全局回调函数，将返回的数据传递给该函数，从而完成数据处理和展示。

##### 3. JSONP的缺点和注意

由于 JSONP 是通过 `<script>` 标签的 src 属性，来实现跨域数据获取的，所以，JSONP 只支持 GET 数据请求，不支持 POST 请求。

注意：**JSONP** **和** **Ajax** **之间没有任何关系**，不能把 JSONP 请求数据的方式叫做 Ajax，因为 JSONP 没有用到 XMLHttpRequest 这个对象。

#### 详解CORS

（Cross-Origin Resource Sharing）跨域资源共享

##### 1. CORS含义

CORS（Cross-Origin Resource Sharing）是一种机制，它允许在浏览器中运行的 Web 应用程序访问跨源服务器上的资源。CORS 是一个安全机制，用于限制通过浏览器发送的跨域请求对服务器资源的访问，以保护用户的隐私和安全。

##### 2. 工作原理

CORS 的工作原理是通过在服务器端设置一些特殊的 HTTP 头来允许跨域请求。

当浏览器发送跨域请求时，服务器会检查请求中的 Origin 头部，并决定是否允许该请求访问资源。

如果服务器允许该请求，那么它会在响应中包含一些特殊的头部，例如 Access-Control-Allow-Origin 和 Access-Control-Allow-Methods 等，以通知浏览器该请求已被授权。

##### 3. 请求过程

1. 浏览器向服务器发送跨域请求，并在请求头中包含 Origin 头部。
2. 服务器收到请求后检查 Origin 头部，并确定是否允许该请求访问资源。
3. 如果服务器允许该请求，那么它会在响应中包含 Access-Control-Allow-Origin 和 Access-Control-Allow-Methods 等头部，以授权该请求。
4. 浏览器收到响应后会检查 Access-Control-Allow-Origin 和 Access-Control-Allow-Methods 等头部，以确定该请求是否被授权。如果该请求被授权，那么浏览器就会将响应传递给 JavaScript 代码，并允许它访问资源。

#### 详解服务器代理

> [代理（proxy）跨域_代理跨域_奥特曼　的博客-CSDN博客](https://blog.csdn.net/m0_46846526/article/details/118151968)

##### 1. 本质

在服务器之间进行数据交互的过程中不存在跨域问题，因为服务器之间是通过 IP 地址和端口号来进行通信的，而不是通过域名。跨域问题主要是出现在客户端浏览器与服务器之间的交互中。

##### 2. 代理的介绍

服务器代理和反向代理都是代理服务器的一种形式，不同之处在于它们所处的位置和处理请求的方式。

服务器代理，也称为正向代理，是处于客户端和目标服务器之间的一台代理服务器，用于转发客户端请求并获取目标服务器的响应。客户端并不直接与目标服务器通信，而是通过服务器代理来实现。常见的应用场景包括突破网络访问限制、加速访问速度、隐藏真实IP等。

反向代理则是位于目标服务器和客户端之间的一台代理服务器，用于将客户端的请求转发到目标服务器，并将目标服务器的响应返回给客户端。客户端并不知道自己实际访问的是哪台服务器，而是通过反向代理来实现。常见的应用场景包括负载均衡、安全保护、Web加速等。

总的来说，正向代理和反向代理的区别在于代理的方向不同，正向代理是客户端找代理，反向代理是代理找服务器。同时，反向代理更多的是用于服务器端的负载均衡和安全等问题，而正向代理更多的是用于客户端的网络访问问题。





