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

# AJAX

## Ajax概念相关

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

# XHR

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

# fetch

## 面试题

### xhr和fetch的区别



# Axios

## Axios基础

> - https://www.npmjs.com/package/axios
>
> - [axios中文文档|axios中文网 | axios (axios-js.com)](http://www.axios-js.com/zh-cn/docs/index.html#axios-API)
>
> - [起步 | Axios 中文文档 | Axios 中文网 (axios-http.cn)](https://www.axios-http.cn/docs/intro)
>
> - `<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>`
> - [axios使用实例详解_axios实例使用_折海棠赠晩宁.的博客-CSDN博客](https://blog.csdn.net/zzDAYTOY/article/details/107098406)
> - [axios的实例创建与应用_DanceDonkey的博客-CSDN博客](https://blog.csdn.net/qq_43750656/article/details/112526144)

### 1. Axios简介

>Axios是一个基于promise 的 HTTP 库，可以用在浏览器和node.js中。

### 2. Axios发送请求

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

### 3. Axios别名发送请求

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

#### put请求

```js
axios.put("http://localhost:3000/users/12",{
    name:"kerwin111",
    age:200
}).then(res=>{
    console.log(res.data)
})
```

#### delete请求

```js
axios.delete("http://localhost:3000/users/11").then(res=>{
    console.log(res.data)
})
```

#### axios(config)配置

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

### 4. Axios实例发送请求

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

### 5. 请求配置的内容

> config：有哪些内容？
>
> [请求配置 | Axios 中文文档 | Axios 中文网 (axios-http.cn)](https://www.axios-http.cn/docs/req_config)

### 6. 响应体结构

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

### 7. 默认配置

> [默认配置 | Axios 中文文档 | Axios 中文网 (axios-http.cn)](https://www.axios-http.cn/docs/config_defaults)

## Axios高级

### 1. Axios拦截器

- ###### 拦截器的作用

  Axios 的拦截器用于在发送请求或响应时，拦截并对其进行预处理或处理。通过设置请求拦截器和响应拦截器，可以在请求发起前和响应返回后进行相关处理，例如：

  1. 在请求发起前，可以通过请求拦截器设置请求头、设置请求参数等。
  2. 在响应返回后，可以通过响应拦截器对响应数据进行统一处理、进行错误处理、进行权限校验等。

- **请求拦截器**

  请求拦截器的作用是在请求发送前进行一些操作，例如设置请求头，添加token，修改请求参数等。请求拦截器可以提高代码的复用性，避免重复的代码，也可以增加请求的安全性和效率。

- ##### 响应拦截器

  响应拦截器的作用是在接收到响应后进行一些操作，例如处理响应数据，判断响应状态，处理错误信息等。响应拦截器可以提高代码的可维护性，方便后期的修改和扩展，也可以增强代码的健壮性，提高用户体验。举例来说，如果我们想要对不同的响应状态码进行不同的处理，我们可以在响应拦截器中根据状态码进行判断和跳转。代码如下：

  ```javascript
  // 导入axios
  import axios from 'axios'
  // 创建新的axios实例
  const instance = axios.create({
    // 设置基础URL
    baseURL: 'https://example.com/api',
    // 设置超时时间
    timeout: 5000
  })
  // 设置响应拦截器
  instance.interceptors.response.use(response => {
    // 对响应数据做点什么
    // 判断响应状态码是否为200，如果是则返回数据，否则抛出错误
    if (response.status === 200) {
      return response.data
    } else {
      throw new Error(response.statusText)
    }
  }, error => {
    // 对响应错误做点什么
    // 判断错误类型，如果是网络错误，则提示网络异常，如果是服务器错误，则根据状态码跳转到相应的页面或提示信息
    if (error.message.includes('Network Error')) {
      alert('网络异常，请检查网络连接')
    } else if (error.response) {
      switch (error.response.status) {
        case 401:
          // 如果是401，则跳转到登录页面，并清除本地存储的token
          window.sessionStorage.removeItem('token')
          window.location.href = '/login'
          break
        case 403:
          // 如果是403，则提示没有权限访问该资源
          alert('您没有权限访问该资源')
          break
        case 404:
          // 如果是404，则跳转到404页面，并提示资源不存在
          window.location.href = '/404'
          alert('资源不存在')
          break
        case 500:
          // 如果是500，则跳转到500页面，并提示服务器内部错误
          window.location.href = '/500'
          alert('服务器内部错误')
          break
        default:
          // 其他情况，直接返回错误信息
          return Promise.reject(error)
      }
    }
  })
  // 导出实例
  export default instance
  ```

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
  

### 2. Axios.all

> [使用axios.all来进行并发请求 - 掘金 (juejin.cn)](https://juejin.cn/post/7067827033908183053)

### 3. Axios.cancelToken

### 4. 

## Axios原理

> 1. [Axios 源码解析 · Issue #1 · kiki-zjq/Blog · GitHub](https://github.com/kiki-zjq/Blog/issues/1)[==非常全面==]
>
> 2. [解析Axios原理之二：如何实现请求与响应的拦截 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/358385078)
> 3. [最全、最详细Axios源码解读---看这一篇就足够了 - 掘金 (juejin.cn)](https://juejin.cn/post/7016255507392364557#heading-8)

### 1. Axios原理

> 相关面试问题：
>
> - 看你项目有用axios，axios底层原理
> - axios库的原理

#### 回答思路

1. 总体介绍Axios
2. 介绍Axios构造函数
3. 介绍Axios.prototype.request方法
   - 发起请求
4. 介绍Axios拦截器原理
5. 其他补充：Axios其他方法，Axios应用在Nodejs上。
   - 如果描述该部分，要熟悉各个方法的原理

#### 回答内容

Axios内部原理是这样的：

- Axios是一个基于Promise和XMLHttpRequest的HTTP客户端，它可以在浏览器和Node.js(使用HTTP模块发送请求)中使用，支持多种请求方式、数据格式、拦截器、取消请求、错误处理等特性。
- 当我们导入axios的时候，实际上导入是通过createInstance创建的实例，该实例首先是`Axios.prototype`上的request方法，同时该实例又继承了Axios类。所以在Axios配置的时候，我们既可以直接配置，此时axios作为一个函数使用，同时还能调用Axios的属性和方法来发送请求或者添加拦截器等。【==作为补充==】
- Axios的核心是Axios构造函数，它可以创建一个axios实例对象，该对象有一个defaults属性，用于存放配置对象；还有一个interceptors属性，用于设置请求和响应拦截器。
- Axios原型上的request方法，它是axios实例对象发送请求，以及对于请求和响应拦截的核心方法。
  - 该方法接收一个`config`参数，用于配置请求的相关信息。
  - 该方法使用dispatchRequest函数，用于发送XMLHttpRequest请求，并返回一个Promise对象。
  - 而对于拦截器的原理，是这样的
    - 当我们创建axios实例的时候，`interceptors`属性针对request和response两个方法，创建两个拦截管理器，分别管理请求拦截和响应拦截。
    - 当我们配置Axios拦截器之后，如果发送请求，代码处理的逻辑是，先执行请求拦截器的内容，然后发送请求，再对响应内容进行拦截，执行响应拦截器的内容。
    - 为了完成上述顺序，Axios内部会创建一个数组，数组中初始的时候，有发送请求的函数dispatchRequest和undefined。
    - 然后再遍历请求拦截器的handlers数组，将函数添加到新数组头部（先添加的拦截器，后执行），再遍历响应拦截器的handlers数组，将函数添加到新数组的尾部。
    - 然后Axios会创建一个成功的Promise，参数为Axios的配置参数。并且依次取出chain数组的中的回调函数，作为Promise链式调用的then方式的成功和失败的回调，并将结果赋值给一个新的promise。
    - 最后返回该promise。这样就实现了Axios拦截器中，先执行请求拦截器，再发送请求的，再执行响应拦截器的流程。
- Axios还提供了一些静态方法和属性，如axios.create（创建axios实例）， axios.all，axios.spread，axios.CancelToken等，用于创建自定义实例、并发请求、分割结果、取消请求等功能。
- Axios还支持多种适配器（adapter），用于在不同环境中发送请求。默认情况下，在浏览器中使用XMLHttpRequest适配器，在Node.js中使用http适配器。也可以自定义适配器，比如使用fetch API或者WebSocket等。

### 2. Axios发送请求的原理

- 在浏览器端，通过xhr发送请求
- 在Nodejs端，通过HTTP模块发送请求

### 3. Aixos拦截器

#### Axios拦截器原理

> 相关问法：axios的请求拦截和响应拦截底层实现原理是什么

> - [解析Axios原理之二：如何实现请求与响应的拦截 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/358385078)

1. axios的请求拦截和响应拦截的底层实现原理是基于Promise和拦截器管理器实现的。

2. 拦截器管理器是一个构造函数，它可以创建一个拦截器实例，该对象中存在一个属性handlers数组，并且原型上有个use方法，用于将用户配置的拦截器的成功和失败的回调，添加到handlers数组中。
3. 当我们配置拦截器的时候，会针对request和response两个方法，创建两个拦截管理器，分别管理请求拦截和响应拦截。
4. 当我们配置Axios拦截器之后，如果发送请求，代码处理的逻辑是，先执行请求拦截器的内容，然后发送请求，再对响应内容进行拦截，执行响应拦截器的内容。

5. 为了完成上述顺序，Axios内部会创建一个数组，数组中初始的时候，有发送请求的函数dispatchRequest和undefined。

6. 然后再遍历请求拦截器的handlers数组，将函数添加到新数组头部（先添加的拦截器，后执行），再遍历响应拦截器的handlers数组，将函数添加到新数组的尾部。

6. 然后Axios会创建一个成功的Promise，参数为Axios的配置参数。并且依次取出chain数组的中的回调函数，作为Promise链式调用的then方式的成功和失败的回调，并将结果赋值给一个新的promise。
7. 最后返回该promise。这样就实现了Axios拦截器中，先执行请求拦截器，再发送请求的，再执行响应拦截器的流程。

**注：对于异步请求拦截器的新增处理**

> - [Requests unexpectedly delayed due to an axios internal promise · Issue #2609 · axios/axios · GitHub](https://github.com/axios/axios/issues/2609)

在2020年版本中，将请求拦截器分为了同步和异步拦截器，在原来的版本中，无论是同步还是异步，都会将请求拦截器，包裹在promise.then()方法中，也就是说，请求是在微任务中，如果当前代码中存在着非常慢的同步任务，就会导致Axios请求延迟发送。所以针对没有异步请求拦截器的时候，对请求拦截器的执行以及请求的发送，当做同步来执行。

#### Axios拦截器用途（详细）

##### 我做了哪一部分？



### 4. 取消Axios请求

#### 取消步骤

Axios 可以通过使用 CancelToken 来实现取消请求的功能。具体步骤如下：

1. 创建一个 CancelToken 对象，用来存储取消请求的方法和标识：

```javascript
const source = axios.CancelToken.source();
```

1. 在发送请求时，将 CancelToken 对象的 signal 属性作为参数传递给 axios：

```javascript
axios.get('/foo/bar', {
  signal: source.signal
})
.then(function (response) {
  // 处理响应数据
})
.catch(function (error) {
  // 处理错误
});
```

1. 在需要取消请求的时候，调用 CancelToken 对象的 abort 方法：

```javascript
source.abort('Operation canceled by the user.');
```

这样，axios 就会中断请求，并抛出一个错误对象，其中包含了取消请求的原因。

一个实际的案例是，当用户点击一个按钮时，发送一个请求，然后在另一个按钮上显示一个取消按钮，让用户可以随时取消请求。HTML 和 js 文件内容如下：

```html
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>
  <button id="send">发送请求</button>
  <button id="cancel" disabled>取消请求</button>
  <div id="result"></div>
  <script src="app.js"></script>
</body>
</html>
```

```js

// app.js
// 创建一个 CancelToken 对象
let source = null;

// 获取元素
const sendBtn = document.getElementById('send');
const cancelBtn = document.getElementById('cancel');
const resultDiv = document.getElementById('result');

// 给发送按钮添加点击事件
sendBtn.addEventListener('click', function () {
  // 如果已经有一个请求在进行中，先取消它
  if (source) {
    source.abort('Operation canceled by the user.');
  }
  // 创建一个新的 CancelToken 对象
  source = axios.CancelToken.source();
  // 发送请求，并将 signal 属性传递给 axios
  axios.get('https://jsonplaceholder.typicode.com/todos/1', {
    signal: source.signal
  })
  .then(function (response) {
    // 请求成功，显示响应数据
    resultDiv.innerHTML = JSON.stringify(response.data);
    // 取消按钮不可用
    cancelBtn.disabled = true;
    // 清空 source 对象
    source = null;
  })
  .catch(function (error) {
    // 请求失败，显示错误信息
    resultDiv.innerHTML = error.message;
    // 取消按钮不可用
    cancelBtn.disabled = true;
    // 清空 source 对象
    source = null;
  });
  // 取消按钮可用
  cancelBtn.disabled = false;
});

// 给取消按钮添加点击事件
cancelBtn.addEventListener('click', function () {
  // 如果有一个请求在进行中，取消它
  if (source) {
    source.abort('Operation canceled by the user.');
  }
});
```

这样，用户就可以在发送请求后，随时点击取消按钮来中断请求。

#### 取消时机

需要注意的是，只有在请求还没有到达服务器的时候，才能取消请求。如果请求已经到达服务器，那么服务器会继续处理请求，并返回响应数据。这时候，即使客户端取消了请求，也无法阻止服务器的响应。所以，取消请求只能用来节省客户端的资源和带宽，并不能影响服务器的行为。

如果你想了解更多关于 axios 取消请求的信息，你可以参考[这篇文档](https://axios-http.com/zh/docs/cancellation)。

### 5. Axios二次封装

#### 为什么要进行二次封装

Axios二次封装是指根据项目的需求，对axios的请求和响应进行自定义配置，以提高代码的复用性和可维护性。例如，可以设置请求的基础URL，超时时间，这样我们在发送请求的时候就不需要每次都配置相同的内容。使用拦截器让我们对发送请求之前对于请求头统一的添加内容，使用响应拦截器可以实现预处理响应数据。

#### 如何进行得二次封装

> 能介绍一下对axios的再封装吗？

##### 创建axios实例

用来设置基础路径以及超时时间

```js
//第一步:利用axios对象的create方法,去创建axios实例(其他的配置:基础路径、超时的时间)
const request = axios.create({
  //基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API, //基础路径上会携带/api
  timeout: 5000, //超时的时间的设置
})
```

##### 添加请求拦截器

```js
//第二步:request实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
  //获取用户相关的小仓库:获取仓库内部token,登录成功以后携带给服务器
  const userStore = useUserStore()
  if (userStore.token) {
    config.headers.token = userStore.token
  }
  //config配置对象,headers属性请求头,经常给服务器端携带公共参数
  //返回配置对象
  return config
})
```

##### 添加响应拦截器

```js
//第三步:响应拦截器
request.interceptors.response.use(
  (response) => {
    console.log(response)
    //成功回调
    //简化数据
    return response.data
  },
  (error) => {
    //失败回调:处理http网络错误的
    //定义一个变量:存储网络错误信息
    let message = ''
    //http状态码
    const status = error.response.status
    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络出现问题'
        break
    }
    //提示错误信息
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  },
）
```



### 6. Axios的特点

> 等价于Axios的概念，可以做什么



## 其他相关面试题

### 1. 如果没有Axios，Ajax发送请求的过程

### 2. Axios，Ajax，fetch的关系区别

> - axios 的特点，和 AJAX 的区别
>
> - axios和原生区别

## Axios源码解读

### Axios类

### constructor

```js
  constructor(instanceConfig) {

    // 实例的默认配置
    this.defaults = instanceConfig;

    // axios 拦截器的本质
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
```

### request

#### configOrUrl的作用

configOrUrl 这个参数是一个可选的参数，它可以是一个字符串或者一个对象。如果它是一个字符串，那么它表示请求的 URL，如果它是一个对象，那么它表示请求的配置。如果你只传递一个参数，那么 axios 会认为你是传递了一个配置对象，而不是一个 URL。这个函数的第一部分就是用来判断和处理这个参数的。例如：

```js
// 如果你只传递了一个字符串，那么 axios 会自动创建一个空的配置对象，并将字符串作为配置对象的 url 属性
axios('https://example.com/api/users');

// 等价于
axios({
  url: 'https://example.com/api/users'
});

// 如果你只传递了一个对象，那么 axios 会直接使用这个对象作为配置对象
axios({
  method: 'POST',
  url: 'https://example.com/api/users',
  data: {
    name: 'Alice',
    age: 25
  }
});

// 如果你传递了两个参数，那么 axios 会认为第一个参数是 URL，第二个参数是配置对象，并将两者合并
axios('https://example.com/api/users', {
  method: 'POST',
  data: {
    name: 'Alice',
    age: 25
  }
});

// 等价于
axios({
  method: 'POST',
  url: 'https://example.com/api/users',
  data: {
    name: 'Alice',
    age: 25
  }
});
```

#### transitional, paramsSerializer

这段代码是用来处理配置对象中的 transitional、paramsSerializer 和 headers 三个属性的。我来逐一解释一下：

- transitional 这个属性是用来控制 axios 的一些过渡性的特性，比如 JSON 数据的解析、错误的提示等。它是一个对象，可以包含以下三个子属性：
  - silentJSONParsing：这个属性是用来控制是否在 JSON 数据解析失败时抛出错误。如果为 true，那么 axios 会默默地忽略解析错误，如果为 false，那么 axios 会抛出 SyntaxError 异常。默认值是 true。
  - forcedJSONParsing：这个属性是用来控制是否强制对响应数据进行 JSON 解析。如果为 true，那么 axios 会尝试对所有响应数据进行 JSON 解析，如果为 false，那么 axios 会根据响应头的 Content-Type 来判断是否需要解析。默认值是 true。
  - clarifyTimeoutError：这个属性是用来控制是否在超时错误时给出更清晰的提示。如果为 true，那么 axios 会在超时错误的 message 中添加 timeout 字样，如果为 false，那么 axios 会保持原样。默认值是 false。
- paramsSerializer 这个属性是用来自定义请求参数的序列化方式的。它可以是一个函数或者一个对象。如果它是一个函数，那么它会接收一个参数对象，并返回一个序列化后的字符串。如果它是一个对象，那么它可以包含以下两个子属性：
  - encode：这个属性是用来自定义请求参数的编码方式的。它是一个函数，它会接收一个参数值，并返回一个编码后的字符串。
  - serialize：这个属性是用来自定义请求参数的序列化方式的。它是一个函数，它会接收一个参数对象，并返回一个序列化后的字符串。
- headers 这个属性是用来设置请求头的。它是一个对象，可以包含以下几种类型的子属性：
  - common：这个属性是用来设置所有请求类型共享的请求头的。它是一个对象，可以包含任意的键值对。
  - delete、get、head、post、put、patch：这些属性是用来设置对应请求类型特有的请求头的。它们都是对象，可以包含任意的键值对。
  - 其他任意键值对：这些属性是用来设置其他自定义的请求头的。

你可以参考这篇文章，它详细地介绍了 axios 的配置对象和各个属性的含义。

#### 请求头的优化

这部分代码的作用是将请求头进行扁平化处理，即将 headers 对象中的 common 属性和对应请求方法的属性合并为一个新的对象，然后删除 headers 对象中的这些属性，只保留其他自定义的请求头属性。这样做的目的是为了方便设置和发送请求头，避免重复或冲突。例如：

```js
// 假设配置对象中的 headers 属性如下
headers: {
  common: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  get: {
    'Accept': 'application/json'
  },
  post: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  'X-Custom-Header': 'foo'
}

// 经过这部分代码的处理后，headers 对象变为
headers: {
  'X-Requested-With': 'XMLHttpRequest',
  'Accept': 'application/json',
  'X-Custom-Header': 'foo'
}

// 如果请求方法是 post，那么 headers 对象变为
headers: {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/x-www-form-urlencoded',
  'X-Custom-Header': 'foo'
}
```

你可以参考这篇文章，它详细地分析了 axios 的请求头处理逻辑。

#### runWhen方法



### InterceptorManager类



#  同源策略

一个 URL 有三部分组成：<font color='red'>协议、域名(指向主机)、端口，</font>只有这三个完全相同的 URL 才能称之为同源。如下，能和  `http://www.example.com/dir1/index.html`  同源的是？

| URL                                       | 结果   | 原因                               |
| ----------------------------------------- | ------ | ---------------------------------- |
| `http://www.example.com/dir2/api`         | 同源   | 只有路径不同                       |
| `https://www.example.com/api`             | 不同源 | 协议不同                           |
| `http://www.example.com:81/dir1/etc.html` | 不同源 | 端口不同 ( `http://` 默认端口是80) |
| `http://www.kerwin.com/dir1/other.html`   | 不同源 | 域名不同                           |

------



> （1） 无法读取非同源网页的 Cookie、LocalStorage。
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

由于浏览器同源策略的限制，网页中无法通过 Ajax 请求非同源的接口数据。但是 <script> 标签不受浏览器同源策略的影响，可以通过 src 属性（src属性可以设置url，表示请求地址），请求非同源的 js 脚本。通过Content-Type: text/javascript来设置返回文件的类型，<a href="#src返回">默认是JavaScript</a>。

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

  ```html
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

1. 浏览器向服务器发送跨域请求，并在请求头中包含 Origin 头部【协议+域名+端口】。
2. 服务器收到请求后检查 Origin 头部，并确定是否允许该请求访问资源。
3. 如果服务器允许该请求，那么它会在响应中包含 Access-Control-Allow-Origin 和 Access-Control-Allow-Methods 等头部，以授权该请求。
4. 浏览器收到响应后会检查 Access-Control-Allow-Origin 和 Access-Control-Allow-Methods 等头部，以确定该请求是否被授权。如果该请求被授权，那么浏览器就会将响应传递给 JavaScript 代码，并允许它访问资源。

#### 详解服务器代理

> [代理（proxy）跨域\_代理跨域\_奥特曼　的博客-CSDN博客](https://blog.csdn.net/m0_46846526/article/details/118151968)

##### 1. 本质

在服务器之间进行数据交互的过程中不存在跨域问题，因为服务器之间是通过 IP 地址和端口号来进行通信的，而不是通过域名。跨域问题主要是出现在**客户端浏览器**与**服务器**之间的交互中。

##### 2. 代理的介绍

服务器代理和反向代理都是代理服务器的一种形式，不同之处在于它们所处的位置和处理请求的方式。

服务器代理，也称为正向代理，是处于客户端和目标服务器之间的一台代理服务器，用于转发客户端请求并获取目标服务器的响应。客户端并不直接与目标服务器通信，而是通过服务器代理来实现。常见的应用场景包括突破网络访问限制、加速访问速度、隐藏真实IP等。

反向代理则是位于目标服务器和客户端之间的一台代理服务器，用于将客户端的请求转发到目标服务器，并将目标服务器的响应返回给客户端。客户端并不知道自己实际访问的是哪台服务器，而是通过反向代理来实现。常见的应用场景包括负载均衡、安全保护、Web加速等。

总的来说，正向代理和反向代理的区别在于代理的方向不同，正向代理是客户端找代理，反向代理是代理找服务器。同时，反向代理更多的是用于服务器端的负载均衡和安全等问题，而正向代理更多的是用于客户端的网络访问问题。



# 参考文件

1. <span id="src返回">src返回内容</span>

[您问的是当html中script请求src的内容之后，返回的内容是什么呢？是当做JavaScript来执行吗？这是一个很有意义的问题，因为script标签是用于在HTML文档中嵌入或引用可执行的代码或数据的](https://www.w3schools.com/TAGS/att_script_src.asp)[1](https://www.w3schools.com/TAGS/att_script_src.asp)[2](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)[3](https://www.runoob.com/tags/att-script-src.html)。

[script标签的src属性可以指定一个外部脚本文件的URL，例如``](https://www.w3schools.com/TAGS/att_script_src.asp)[1](https://www.w3schools.com/TAGS/att_script_src.asp)[2](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)[3](https://www.runoob.com/tags/att-script-src.html)[。当浏览器遇到这样的script标签时，它会向指定的URL发送一个HTTP请求，获取外部脚本文件的内容](http://www.example.com/example.js)[4](http://www.example.com/example.js) 。

[返回的内容是什么呢？这取决于外部脚本文件的类型和内容。一般来说，外部脚本文件的类型可以通过HTTP响应头中的Content-Type字段来指定，例如`Content-Type: text/javascript`表示该文件是JavaScript类型](http://www.example.com/example.js)[4](http://www.example.com/example.js)[ 。如果没有指定Content-Type字段，浏览器会根据文件扩展名或内容来推断文件类型](http://www.example.com/example.js)[4](http://www.example.com/example.js) 。

[如果外部脚本文件是JavaScript类型，那么返回的内容就是JavaScript代码，浏览器会将其当做JavaScript来执行](https://www.w3schools.com/TAGS/att_script_src.asp)[1](https://www.w3schools.com/TAGS/att_script_src.asp)[2](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)[3](https://www.runoob.com/tags/att-script-src.html)。例如：

```js
// myscripts.js
console.log("Hello, world!"); // 这是一行JavaScript代码
```

```html
<!-- index.html -->
<script src="myscripts.js"></script> <!-- 浏览器会请求myscripts.js，并执行其中的JavaScript代码 -->
```

[如果外部脚本文件不是JavaScript类型，那么返回的内容就可能是其他类型的代码或数据，浏览器会根据不同的情况来处理](https://www.w3schools.com/TAGS/att_script_src.asp)[1](https://www.w3schools.com/TAGS/att_script_src.asp)[2](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)[3](https://www.runoob.com/tags/att-script-src.html)。例如：

```glsl
// myshader.glsl
void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // 这是一行GLSL代码
}
```

```html
<!-- index.html -->
<script id="shader" src="myshader.glsl" type="x-shader/x-fragment"></script> <!-- 浏览器会请求myshader.glsl，并将其作为文本保存在script元素中 -->
<script>
  // 获取script元素
  let script = document.getElementById("shader");
  // 获取script元素中的文本内容
  let source = script.textContent;
  // 使用source作为WebGL着色器程序的源码
</script>
```

以上是我为您解答的关于html中script请求src的内容之后，返回的内容是什么呢？是当做JavaScript来执行吗？的问题。希望对您有所帮助。如果您想了解更多关于script标签和src属性的内容，您可以点击以下链接查看相关的文章：

- [HTML script src Attribute - W3Schools](https://www.w3schools.com/TAGS/att_script_src.asp)^)
- [: The Script element - HTML: HyperText Markup Language | MDN - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)^)
- [HTML script src 属性 | 菜鸟教程](https://www.runoob.com/tags/att-script-src.html)^)
- How does the browser know the type of a script if the Content-Type header is missing? - Stack Overflow^)
- How does the browser know the type of a script if the Content-Type header is missing? - Stack Overflow^)

如果您还有其他问题或想法，欢迎继续和我交流。😊



