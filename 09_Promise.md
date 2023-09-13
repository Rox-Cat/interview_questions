# Promise

> 相关链接
>
> [先锋教育笔记](E:\研究生\自我学习\前端学习\06_Promise\笔记\Promise笔记.md)
>
> [Promise，async/await (javascript.info)](https://zh.javascript.info/async)
>
> [灵题库-前端题库 (lingtiku.com)](https://www.lingtiku.com/quiz/detail/6)
>
> **全面**
>
> - [不积跬步之Promise输出题(共32道有详细解析版) - 简书 (jianshu.com)](https://www.jianshu.com/p/d9f1bd3bb16b)

## 常见面试题

### 1. Promise概念相关

#### 基本概念

Promise中回调函数是同步的还是异步的？then的链式调用是同步的还是异步的？

Promise中的回调函数有两种类型：同步回调和异步回调。同步回调是指在Promise构造函数中传入的executor函数，它会立即执行，不会放入回调队列中。异步回调是指在Promise的then或catch方法中传入的onFulfilled或onRejected函数，它们会在Promise状态改变后执行，会放入回调队列中等待执行。

then方法的链式调用是异步的，因为每个then方法都会返回一个新的Promise对象，这个对象的状态由then方法中的回调函数的返回值决定。如果返回值是一个Promise对象，那么新的Promise对象就会跟随这个对象的状态；如果返回值是一个非Promise值，那么新的Promise对象就会变为fulfilled状态，并将这个值作为成功的值；如果回调函数抛出异常，那么新的Promise对象就会变为rejected状态，并将异常作为失败的原因。这样就可以实现多个异步操作按照顺序执行，并且可以获取每个操作的结果。

#### 扩展Promise的话题



### 2. 手写Promise

#### 手写Promise

见后文

#### 手写Promise.all

见后文

## 基本概念

#### 1. 如何理解Promise？

> 回答的角度有哪些

- Promise 的概念和作用：介绍 Promise 是什么，以及它解决了什么样的问题，即异步编程中的回调地狱问题。
- Promise 的特点：Promise 有哪些特点，例如它是一个对象、有三种状态等。
- Promise 的基本用法：如何创建一个 Promise 对象，以及如何通过 Promise 处理异步操作。
- Promise 的链式调用：如何通过 Promise 的链式调用来避免回调地狱，以及如何在链式调用中处理异常情况。
- Promise 的原理：Promise 的实现原理，包括如何使用状态、值和队列等来管理异步操作。

#### 2. Promise的概念和作用

Promise 是一种用于异步编程的解决方案，它的本质是对回调函数的封装。它可以让异步操作更加清晰、简洁，避免了回调地狱的问题。

- 异步编程

  异步编程是一种编程模式，其中操作不会立即返回结果，而是在后续的某个时刻返回。异步编程通常用于处理一些需要等待的操作，例如读取文件、发送网络请求、执行定时器等。

- 回调地狱

  回调地狱是一种由于嵌套过多的回调函数而导致代码可读性和可维护性降低的现象。

  当有多个异步操作需要依次执行时，为了保证它们的执行顺序，往往需要将后续的操作嵌套在前面操作的回调函数中。

  这种嵌套的回调函数可能会变得非常深，难以维护和理解，从而形成回调地狱。

#### 3. Promise 的状态转移

由 `new Promise` 构造器返回的 `promise` 对象具有以下内部属性：

- `state` —— 最初是 `"pending"`，然后在 `resolve` 被调用时变为 `"fulfilled"`，或者在 `reject` 被调用时变为 `"rejected"`。
- `result` —— 最初是 `undefined`，然后在 `resolve(value)` 被调用时变为 `value`，或者在 `reject(error)` 被调用时变为 `error`。

当Promise实例化后处于pending状态，表示异步操作还未完成；

当异步操作完成后，如果操作成功，则状态转移为fulfilled，同时result会变为操作成功的结果；

如果操作失败，则状态转移为rejected，同时result会变为操作失败的原因。

在状态转移后，Promise的状态和result值都是不可变的。

#### 4. then()函数的执行与返回

##### 4.1 .then()的返回值

> .then(()=>return xxxx)函数中，一定会返回Promise对象，这样才会进行链式调用。
>
> - 返回一个非promise对象，都会被包裹为一个promise对象。return new Promise.resolve/rejected(xxx)
> - 只有在抛出错误的时候是rejected

then()方法的返回值是一个新的promise对象，并且这个对象的状态和then中的回调返回值相关。如果then中的回调函数：

- 返回了一个值value，那么then返回的promise将会成为接受状态，并且将返回的值作为接受状态的回调函数的参数值。==> `return new Promise.resolve(value)`

- 没有返回任何值，那么then返回的promise将会成为接受状态，并且该接受状态的回调函数的参数值为undefined。 `return new Promise.resolve(undefined)`

- 抛出一个错误:`throw error`，那么then返回的promise将会成为拒绝状态，并且将抛出的错误作为拒绝状态的回调函数的参数值。注意：如果是return new Error(xx) 并不会触发rejected，因为是返回数值，而不是抛出错误。【==会在控制台显示吗==】

- 返回一个已经是接受状态或拒绝状态的promise，那么then返回的promise也会成为相同的状态，并且将那个promise的回调函数的参数值作为该被返回的promise的回调函数的参数值。（返回的promise的返回值是.then()传递给下个的回调函数参数）

- 返回一个未定状态（pending）的promise，那么then返回的promise的状态也是未定的，并且它的终态与那个promise的终态相同；同时，它变为终态时调用的回调函数参数与那个promise变为终态时的回调函数的参数是相同的。

- .then()的透值，如果.then()中是非函数，那么他会返回传递来的参数

  ```js
  Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
  ```

  - js的.then(console.log)这段代码的意思是，当一个promise成功解决时，执行console.log函数，并隐式地将promise的结果传递给console.log函数。这是一种简写的方式，相当于.then(res => console.log(res))。如果你想给console.log函数传递其他参数，你可以使用Function.prototype.bind方法。

  - 这段代码中.then()里面写的对象和数据，并没有报错，是因为.then()方法会忽略所有非函数的参数¹，并且会用一个恒等函数（(x) => x）或者一个抛出函数（(x) => { throw x; }）来替代它们²。所以，这段代码相当于：

    ```js
        Promise.resolve(1)
        .then((x) => x)
        .then((x) => x)
        .then(console.log)
    ```

    最后输出的是1。


##### 4.2 then的回调执行顺序

> 直接看例子，非常透彻：
>
> [彻底理解Promise.then回调的执行顺序 - 掘金 (juejin.cn)](https://juejin.cn/post/6876686095954903048)

主要是一个点：如果在then中存在其他微任务或者宏任务会怎么办？

核心：

- 如果存在微任务就加入微任务队列，等到同步执行完，再执行微任务。
- then()函数中，默认存在一个return 的同步代码，因此要执行return，并将下一个then()加入到微任务队列中。

```js
new Promise((resolve, reject) => {    	[1]
 console.log(1);
  resolve();
})
.then((a) => {
     console.log(2);
      new Promise((resolve,reject) => {  [2]
       console.log(3);
        resolve();
      })
      .then((c) => {					[3]
       console.log(4);
      })
      .then((d) => {					[4]
       console.log(6);
      })
})
.then((b) => {							[5]
 console.log(5);
});
```

- 在a的回调函数中，首先打印2，存在一个promise对象。

- promise内部依次执行，打印3，状态变为fullfilled，将回调c加入微任务队列。
- 此时，回调c并未执行，因此回调d，并未加入微任务队列
- 继续执行回调a，返回一个promise对象，状态为fullfilled。
- 回调5加入微任务队列。
- 微任务队列中：回调c --- 回调b
- 执行回调c，打印4。将回调d加入微任务队列。
- 执行回调b，打印5，执行回调d，打印6

1-2-3-4-5-6



#### 5. Promise.reslove()的使用

> [Promise.resolve()详解 - 浅笑· - 博客园 (cnblogs.com)](https://www.cnblogs.com/qianxiaox/p/14124551.html)

Promise.resolve(xxx) = new Promise(resolve => resolve(xxx))

- 状态fullfilled
- 值：xxx

#### 6. Promise.finally()

> [Promise实例的finally方法 - zhishiyv - 博客园 (cnblogs.com)](https://www.cnblogs.com/zhishiyv/p/14303255.html)

Promise.finally()的返回值

> 如果没错，就返回上一个状态的promise
>
> 如果有错误/rejected，就抛出错误

`.finally()`返回值是一个`promise`对象，它等价于原来的`promise`对象。它取决于原来的`promise`对象的状态和值，以及`finally()`方法中的函数是否抛出错误或者返回一个拒绝的`promise`。例如：

    Promise.resolve(1)
    .finally(() => 2) // 返回一个等价于Promise.resolve(1)的promise
    
    Promise.reject(3)
    .finally(() => 4) // 返回一个等价于Promise.reject(3)的promise
    
    Promise.resolve(5)
    .finally(() => { throw 6; }) // 返回一个等价于Promise.reject(6)的promise
    
    Promise.reject(7)
    .finally(() => Promise.reject(8)) // 返回一个等价于Promise.reject(8)的promise



#### 7. ※Promise中的rejected

> 我们可以理解为Promise出现throw new Error，那么该promise对象就是rejected，而不是抛出到全局；
>
> 如果没有接收该Error，就会在全局展示

##### 7.1 rejected的来源

- 返回一个状态为rejected的promise对象

- **抛出错误（throw error）也会被当做是rejected**

  如果在 then 方法的回调函数中抛出错误，那么 then 返回的 promise 也会变成 rejected，并且将抛出的==错误作为拒绝状态的回调函数的参数值==。如果没有 catch 处理函数，错误会被抛到全局。

- **注意**：返回错误，并不会作为rejected，而是resolve

  ```js
  Promise.resolve()
      .then(()=>{
      return new Error('error')
  })
      .then(xxxx)
  ```

  这里会执行xxx的内容，因为存在返回值，所以状态是fullfilled。

##### 7.2 rejected的捕获

- promise中的rejected状态只有.then((),(rejected))、.catch()、.finally()能够捕获。如果遇到不能捕获的就一直传递。
- 对于能够捕获异常的回调函数，他们的返回值的promise等同于.then()返回值的promise
- 如果捕获到了异常，那么该异常不会继续向下传递。

##### 7.3 异常未捕获

如果在 Promise 的 then 方法中抛出异常，并且后面没有 catch 或 then 方法来处理，那么异常也会被抛出到全局，也就是说，它会被 window.onerror 或 process.on(‘unhandledRejection’, e => {…}) 捕获，这取决于运行环境是浏览器还是 Node.js。

then 方法后面的方法不会被执行，因为异常会中断 Promise 链的正常流程，除非有 catch 方法来捕获并恢复。3

例如，下面的代码中，我们在第一个 then 方法中抛出了一个异常，但是没有在后面添加 catch 或 then 方法来处理，所以这个异常就会被抛出到全局，并且第二个 then 方法不会被执行。

```js
new Promise((resolve, reject) => {
  resolve('ok');
}).then((data) => {
  console.log(data); // ok
  throw new Error('error'); // 抛出异常
}).then((data) => {
  console.log(data); // 不会执行
});

```

如果我们运行这段代码，我们只会看到以下的输出：

```js
ok
Uncaught Error: error
```

而不会看到第二个 then 方法的输出。

#### 8. 其他常见方法

- Promise.allSettled

  `Promise.allSettled()`方法，用来确定一组异步操作是否都结束了（不管成功或失败）。所以，它的名字叫做”Settled“，包含了”fulfilled“和”rejected“两种情况。

- Promise.any

  只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态。

#### 9. <a name="async 和 await相关的执行顺序">async 和 await相关的执行顺序</a>

##### 9.1 理解await和async的顺序

> await function
>
> Code....

=> 等价于 把他看做是promise 的链式调用，注意await不是new promise，而是then()的回调函数，因为我们通过返回值来确定promise的状态而不是要依据resolve和rejected来决定。

```js
.then(functon)
.then(Code)
```

1. 将function的内容作为第一个then的回调函数，执行到这一步，我就按照then()里面回调函数的步骤来执行

   - 执行同步代码

   - 将微任务/宏任务加入到相应的队列

   - **直接返回**（不需要等到宏任务和微任务执行完毕，就是按照同步的顺序执行）！！

     返回Promise与.then()的完全一致。

2. 根据返回的Promise的状态，将第二个then加入到微任务队列。

注意：如果返回的Promise一直是pending状态，那么就不会加入到后面的内容。

例如：下面的的代码段被包围在一个async函数中，但是2永远不会打印，因为await的状态一直是pending

```js
await new Promise(resovle=>{
    console.log(1)
})
console.log(2)
```

**改写async**

案例**1**：

```python
console.log(2); 
async function s1() { 
    console.log(7) 
    await s2(); 
    console.log(8); 
} 
asycn function s2() {
    console.log(9); 
} 
s1(); 
console.log(5); 这段函数的返回值
```

```python
console.log(2);
function s1() {
    console.log(7)
    return s2().then(() => {
        console.log(8);
    });
}
function s2() {
    console.log(9);
    return Promise.resolve();
}
s1().then(() => {
    console.log(5);
});
```

执行顺序比较明确：**2, 7, 9, 5, 8**。

- 首先，整体代码是一个宏任务，它开始执行。
- console.log(2) 打印出 2。
- s1() 函数被调用，它返回一个 promise，并且把 console.log(5) 作为回调函数放入微任务队列中。
- s1() 函数内部，console.log(7) 打印出 7。
- s2() 函数被调用，它返回一个 promise，并且把 console.log(8) 作为回调函数放入微任务队列中。
- s2() 函数内部，console.log(9) 打印出 9。
- 整体代码结束，开始清空微任务队列。
- console.log(8) 被执行，打印出 8。
- console.log(5) 被执行，打印出 5。
- 微任务队列清空完毕。

案例**2**

```js
console.log(2);
async function s1() {
    console.log(7)
    await s2();
    console.log(8);
    await s3();
    console.log(11);
}

async function s2() {
    console.log(9);
}

async function s3() {
    console.log(10);
    
}

console.log(5);
```

```javascript
console.log(2);
function s1() {
    console.log(7)
    return s2().then(() => {
        console.log(8);
        return s3().then(() => {
            console.log(11);
        });
    });
}

function s2() {
    console.log(9);
    return Promise.resolve();
}

function s3() {
    console.log(10);
    return Promise.resolve();
}

console.log(5);

s1();
```

打印顺序：**2, 5, 7, 9, 8, 10, 11**。

案例**3**

第六题：[灵题库-前端题库 (lingtiku.com)](https://www.lingtiku.com/quiz/detail/6)

#### 10. async和await中的捕获错误

> 如果await返回的是一个rejected的

要判断 await 返回的 Promise 的状态，有两种方法：

- 一种是使用 try/catch 语句，如果 await 的 Promise 被拒绝（rejected），那么 catch 块会捕获到拒绝的原因，并抛出异常。例如：

```javascript
try {
  // Do some asynchronous operation that may throw an exception
  await someAsyncOperation();
}
catch (error) {
  // Handle the error
}
```

- 另一种是使用 .then() 和 .catch() 方法，如果 await 的 Promise 被履行（resolved），那么 .then() 方法会接收到履行的值，并执行相应的回调函数。如果 await 的 Promise 被拒绝，那么 .catch() 方法会接收到拒绝的原因，并执行相应的回调函数。例如：

```javascript
await someAsyncOperation()
.then(value => {
  // Handle the resolved value
})
.catch(error => {
  // Handle the rejected reason
});
```

[这两种方法都可以用来判断 await 返回的 Promise 的状态，但是有一些区别](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await)[1](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await)：

- try/catch 可以捕获所有异常，包括语法错误或类型错误等。.catch 只能捕获异步方法中 reject 的错误。
- try/catch 可以在一个块中处理多个 await 表达式的异常，而 .catch 需要为每个 await 表达式单独处理。
- try/catch 更符合同步代码的风格，而 .catch 更符合异步代码的风格。

#### 11. 小问题

- 在promise的使用中，如果.then()里面只有一个函数，但是.then之前的promise的状态是rejected，他会怎么办？

  [根据我搜索到的信息，如果.then()里面只有一个函数，但是.then之前的promise的状态是rejected，那么这个函数不会被调用，而是会跳过这个.then()，直到找到下一个有onRejected参数的.then()或者.catch()](https://blog.csdn.net/u013967628/article/details/86569262)[1](https://blog.csdn.net/u013967628/article/details/86569262)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)[。如果没有找到任何处理rejected状态的回调函数，那么这个promise就会一直保持rejected状态，并且抛出错误](https://www.w3schools.com/Js/js_promise.asp)[3](https://www.w3schools.com/Js/js_promise.asp)[4](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject)[。你可以使用.catch()方法来捕获并处理错误](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)。

  意思是then并不会处理这个返回值，而是顺着promise链查找，直到找到catch或者then中存在执行错误的甘薯

- 如果.then(xx).then()如果第一个.then没有返回值，那第二个.then接受到的result是什么？

  [根据我搜索到的信息，如果.then()没有返回值，那么它会返回一个undefined的值，这个值会作为下一个.then()的参数](https://stackoverflow.com/questions/34094806/return-from-a-promise-then)[1](https://stackoverflow.com/questions/34094806/return-from-a-promise-then)[2](https://masteringjs.io/tutorials/fundamentals/then)[。也就是说，第二个.then()接收到的result是undefined。如果你想要传递一个有意义的值给下一个.then()，你需要在第一个.then()里面使用return语句](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)[3](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)。

- Promise链式调用和微任务的结合题

  **核心**：.then()中的回调函数会被放入微任务队列，遍历完所有.then()之后，再执行微任务队列中的回调函数

  **题目**：如果三个.then（）相连，他们执行的函数分别打印1,2，3，也就是一一对应。其中第二个.then（）中建立了一个promise，并有两个.then（），分别打印，4， 5。请你描述微任务队列的顺序，并且说一下打印的顺序，假设他们返回的状态都是fulfilled

  **解答**：如果三个.then()相连，他们执行的函数分别打印1,2，3，也就是一一对应。其中第二个.then()中建立了一个promise，并有两个.then()，分别打印，4， 5。那么微任务队列的顺序和打印的顺序是这样的：

  - 首先，执行第一个.then()里面的代码，并打印1，并返回一个新的promise对象。
  - 然后，将第二个.then()里面的回调函数加入到微任务队列中，等待第一个.then()返回的promise对象解决。
  - 接着，将第三个.then()里面的回调函数加入到微任务队列中，等待第二个.then()返回的promise对象解决。
  - 然后，在微任务队列中找到第二个.then()里面的回调函数，并执行它。这时候会创建并返回一个新的promise对象，并在这个promise对象里面定义了两个.then()。然后打印2。
  - 然后，将这两个.then()里面的回调函数加入到微任务队列中，等待第二个.then()返回的promise对象解决。
  - 然后，在微任务队列中找到第三个.then()里面的回调函数，并执行它。然后打印3。
  - 然后，在微任务队列中找到第二个.then()返回的promise对象里面定义的两个.then()里面的回调函数，并依次执行它们。然后分别打印4和5。

  所以最终打印出来是：1 2 3 4 5

​	await的返回值是result或者是error

## 面试题常见错误总结

### 1. promise.all()

- 无论是否是rejected还是fulfilled，都会被加入到微任务队列，因此，都会被执行

  ![image-20230826150553031](https://one-dinosaur.oss-cn-hangzhou.aliyuncs.com/typora/image-20230826150553031.png)

### 2. await/async

await xxx可以看做是await Promise.resolve(xxx)

- 如果xxx是promise对象正好
- 如果不是，直接执行即可

await后面的代码，始终是看做一个微任务来执行，并且该微任务取决于await xxx的promise结果

**注意点：**

1. await xxx，如果是函数，就看他的结果，因为await后面只与 结果有关，函数内部有其他异步程序不影响
2. await xxx，之后的语句取决于promise的状态，

## 手写Promise

### 0. 全部代码

```js
/* 
    手写promise
    1. executor 的实现
        - 异常处理：执行器中异常作为resolve来执行
        - 如何显示先同步再异步？
    2. resolve和reject的作用
    3. then方法 
        - 状态 -> 操作
        - 实现异步： 等待状态变化在执行操作
        - 链式的调用
*/


class MyPromise {
    static PENDING = 'pending'
    static FULFILLED = 'fulfilled'
    static REJECTED = 'rejected'

    constructor(executor) {
        this.value = null
        this.status = MyPromise.PENDING
        this.callbacks = []
        try {
            executor(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.resolve(error)
        }
    }

    resolve(value) {
        /* 修改状态 */
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.FULFILLED
            this.value = value
            /* 异步执行then方法的回调，状态改变之后，等executor中的同步执行完，再执行回调 */
            queueMicrotask(() => {
                this.callbacks.forEach((funcObj) => {
                    funcObj.onFulfilled(value)
                })
            })
        }
    }

    reject(error) {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.REJECTED
            this.value = error
            queueMicrotask(() => {
                this.callbacks.forEach((funcObj) => {
                    funcObj.onRejected(error)
                })
            })
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { return this }
        onRejected = typeof onRejected === 'function' ? onRejected : () => { return this }
        /* 该promise的状态和值取决于then的回调的返回值 */
        return new MyPromise((resolve, reject) => {
            // console.log(resolve)
            if (this.status === MyPromise.PENDING) {
                /* 将要执行的回调放入一个数组中，等resolve或者reject执行的时候再运行 */
                this.callbacks.push({
                    onFulfilled: () => {
                        this.parse(onFulfilled, resolve, reject)
                    },
                    onRejected: (() => {
                        this.parse(onRejected, resolve, reject)
                    })
                })
            }
            /* 状态为fulfilled，执行onFulfilled */
            if (this.status === MyPromise.FULFILLED) {
                queueMicrotask(() => {
                    this.parse(onFulfilled, resolve, reject)
                })

            }
            if (this.status === MyPromise.REJECTED) {
                queueMicrotask(() => {
                    this.parse(onRejected, resolve, reject)
                })
            }
        })

    }
    parse(callback, resolve, reject) {
        try {
            let res = callback(this.value)
            if (res instanceof MyPromise) {
                res.then(resolve, reject)
            } else {
                resolve(res)
            }
        } catch (error) {
            reject(error)
        }
    }
    static resolve(value) {
        return new MyPromise((resolve, reject) => {
            if (value instanceof MyPromise) {
                value.then(resolve, reject)
            } else {
                resolve(value)
            }
        })
    }
    static reject(error) {
        return new MyPromise((resolve, reject) => {
            if (value instanceof MyPromise) {
                value.then(resolve, reject)
            } else {
                reject(error)
            }
        })
    }

    static all(arrs) {
        return new MyPromise((resolve, reject) => {
            if (!Array.isArray(arrs)) {
                throw new Error('arrs 必须是一个函数')
            }
            let resolveCnt = 0
            let result = []
            for (let i = 0; i < arrs.length; i++) {
                arrs[i].then(value => {
                    result[i] = value
                    resolveCnt += 1
                    if (resolveCnt === arrs.length) {
                        resolve(result)
                    }
                }, error => {
                    reject(error)
                })
            }
        })
    }

    static race(arrs){
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i< arrs.length; i++){
                arrs[i].then(value => {
                    resolve(value)
                }, error => {
                    reject(error)
                })
            }
        })
    }

    catch(onRejected){
        return this.then(undefined, onRejected)
    }
}
```



### 1. 实现状态和值的变化

在Promise中，初始时状态为pending，当执行resolve的时候，状态变化fulfilled，执行reject的时候，状态变为rejected。

**几个关键点**

- 使用构造函数，初始化状态和值，以及执行executor函数
- 修改Promise中resolve和reject的this指向
- 只有在状态为pending的时候，才能修改状态和值，换句话说，执行完了resolve之后，就不能执行rejected

```js
class MyPromise {
    static FULFILLED = 'fulfilled'
    static REJECTED = 'rejected'
    static PENDING = 'pending'
    constructor(executor) {
        /* 
            new 一个Promise发生的事
                1. 初始化Promise的状态和值
                2. 执行传入到Promise的函数：executor
        */
        this.state = MyPromise.PENDING
        this.value = null
        /* promise需要两个参数：resolve函数和reject函数，这个是由promise本身来实现的 */
        /* 要修改两个函数的this指向 */
        executor(this.resolve.bind(this), this.reject.bind(this))
    }
    /* promise的两个方法 */
    resolve(value){
        /* 修改promise的状态(fulfilled)和值(value) */
        if (this.state === MyPromise.PENDING){
            this.state = MyPromise.FULFILLED
            this.value = value
        }
    }

    reject(error){
        if (this.state === MyPromise.PENDING){
            this.state = MyPromise.REJECTED
            this.value = error 
        }
    }


}
```

**测试**

```js
let p = new MyPromise((resolve, reject) => {
    // resolve('解决')
    reject('错误')
})
console.log(p)
```

### 2. 异常处理

在执行器函数中，如果出现错误，会作为resolve来执行，resolve值为错误信息.

我们可以使用try...catch来捕获错误。

```js
constructor(executor) {
    /* 
        new 一个Promise发生的事
            1. 初始化Promise的状态和值
            2. 执行传入到Promise的函数：executor
    */
    this.state = MyPromise.PENDING
    this.value = null
    /* promise需要两个参数：resolve函数和reject函数，这个是由promise本身来实现的 */
    /* 要修改两个函数的this指向 */
    try {
        executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
        this.reject(error)
    }

}
```

**测试**

```js
let p = new MyPromise((resolve, reject) => {
    throw new Error('出现错误')
})
console.log(p)
```

**显示结果**

一个promise对象，状态为statue，值为报错信息

```js
MyPromise {
  state: 'rejected',
  value: Error: 出现错误
      at c:\Users\Rox7\Desktop\常用脚本\JS测试\promise2.js:44:11
      at new MyPromise (c:\Users\Rox7\Desktop\常用脚本\JS测试\promise2.js:16:13)
      at Object.<anonymous> (c:\Users\Rox7\Desktop\常用脚本\JS测试\promise2.js:41:9)
      at Module._compile (node:internal/modules/cjs/loader:1256:14)
      at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
      at Module.load (node:internal/modules/cjs/loader:1119:32)
      at Module._load (node:internal/modules/cjs/loader:960:12)
      at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
      at node:internal/main/run_main_module:23:47
}
```

### 3. then方法

then方法是promise的一个方法，接收两个参数，onFuifilled和onRejected；

当状态为fulfilled的时候，执行onFulfilled，反之执行onRejected；

如果不传递参数，默认为一个空函数。

#### 基础的then方法

```js
    then(onFulfilled, onRejected){
        if (this.state === MyPromise.FULFILLED){
            onFulfilled(this.value)  // 此时的value等于执行完resolve的value
        }
        if (this.state === MyPromise.REJECTED){
            onRejected(this.value)
        }
    }
```

**测试1**

```js
let p = new MyPromise((resolve, reject) => {
    resolve(1)
})
p.then((res) => {console.log(res)}, (error) => {console.log(error)})
console.log(p)
```

**结果1**

顺利打印1

```js
1
MyPromise { state: 'fulfilled', value: 1 }
```

**测试2**

```js
let p = new MyPromise((resolve, reject) => {
    reject(1)
})
p.then((res) => {console.log(res)}, (error) => {console.log(error)})
console.log(p)
```

**结果2**

```js
1
MyPromise { state: 'rejected', value: 1 }
```

#### 非函数参数的处理

进行判断并转换

```js
    then(onFulfilled, onRejected){
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => {}
        onRejected = typeof onRejected === 'function' ? onRejected: () => {}
        if (this.state === MyPromise.FULFILLED){
            onFulfilled(this.value)  // 此时的value等于执行完resolve的value
        }
        if (this.state === MyPromise.REJECTED){
            onRejected(this.value)
        }
    }
```

### 4. 异步操作

#### 上述功能的问题

1. then不是异步的，而是同步执行

#### then是异步的微任务

执行完同步之后，再执行then内的函数

我们可以在执行onFulfilled或者onRejected的时候，将其添加到微任务队列。

```js
then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { }
        onRejected = typeof onRejected === 'function' ? onRejected : () => { }
        if (this.state === MyPromise.FULFILLED) {
            // 此时的value等于执行完resolve的value
            queueMicrotask(() => {
                onFulfilled(this.value)
            })
        }
        if (this.state === MyPromise.REJECTED) {
            queueMicrotask(() => {
                onRejected(this.value)
            })
        }
    }
```

**测试**

```js
console.log(1)
let p = new MyPromise((resolve, reject) => {
    console.log(2)
    resolve(4)
})
p.then((res) => { console.log(res) }, (error) => { console.log(error) })
console.log(3)
```

**结果**

```js
1
2
3
4
```

### 5. 回调的保存

#### 代码的问题1

##### pending状态的处理

在上述代码中，如果resolve中包裹了setTimeOut，例如：

```js
console.log(1)
let p = new MyPromise((resolve, reject) => {
    console.log(2)
    setTimeout(() => {
        resolve(4)
    })
})
p.then((res) => { console.log(res) }, (error) => { console.log(error) })
console.log(3)
```

 结果： 1 2 3

分析原因，4为什么没有被输入，因为我们首先要执行then，但此时状态为pending，then中没有处理的逻辑，并不会加入到微任务队列，导致及时状态变化，也不会打印。

#### 处理then中pending状态

当then中状态为pending的时候，说明还不能执行then传递的函数，我们可以保存到一个数组中，当promise中的resolve或者reject被执行的时候，再运行then中的函数。

**正常流程**：new promise -> 运行resolve -> 状态变化 -> 执行then中的函数

**异步的resolve**：new promise -> 状态未变化 -> 将then中的函数保存 -> 执行resolve --> 在函数体中执行保存的then中的函数。

只不过这里的为什么用数组的方式，我不太懂。

```js
/* 当状态为pending的时候，存储回调函数*/
if (this.state === MyPromise.PENDING) {
    this.callbacks.push({
        onFulfilled,
        onRejected
    })
}
/ --------------------------------- /
/* 执行resolve和reject的时候，执行相应的回调 */
    /* promise的两个方法 */
    resolve(value) {
        /* 修改promise的状态(fulfilled)和值(value) */
        if (this.state === MyPromise.PENDING) {
            this.state = MyPromise.FULFILLED
            this.value = value
                    /* 执行回调函数 */
        	this.callbacks.forEach((funcObj) => {
            funcObj.onFulfilled(this.value)
        })
        }

    }

    reject(error) {
        if (this.state === MyPromise.PENDING) {
            this.state = MyPromise.REJECTED
            this.value = error
            /* 执行回调函数 */
       		this.callbacks.forEach((funcObj) => {
            	funcObj.onRejected(this.value)
        })
        }

    }
```

**测试代码**

```js
console.log(1)
let p = new MyPromise((resolve, reject) => {
    console.log(2)
    setTimeout(() => {
        resolve(4)
    })
})
p.then((res) => { console.log(res) }, (error) => { console.log(error) })
console.log(3)
```

**结果**

```js
1 2 3 4
```

#### 代码问题2

##### resolve是异步的

```js
console.log(1)
let p = new MyPromise((resolve, reject) => {
    console.log(2)
    setTimeout(() => {
        resolve(4)
        console.log(5)
    })
})
p.then((res) => { console.log(res) }, (error) => { console.log(error) })
console.log(3)
```

##### 代码结果

```js
1 2 3 4 5
```

而实际的promise结果应该是

```js
1 2 3 5 4
```

因为resolve是异步的，先执行同步代码输出5

#### 将resolve设置为异步

这样当就会先执行执行器中的同步代码，再执行then中的微任务

```js
/* promise的两个方法 */
    resolve(value) {
        /* 修改promise的状态(fulfilled)和值(value) */
        if (this.state === MyPromise.PENDING) {
            this.state = MyPromise.FULFILLED
            this.value = value
            queueMicrotask(() => {
                /* 执行回调函数 */
                this.callbacks.forEach((funcObj) => {
                    funcObj.onFulfilled(this.value)
                })
            })
        }
    }

    reject(error) {
        if (this.state === MyPromise.PENDING) {
            this.state = MyPromise.REJECTED
            this.value = error
            queueMicrotask(() => {
                /* 执行回调函数 */
                this.callbacks.forEach((funcObj) => {
                    funcObj.onRejected(this.value)
                })
            })
        }
    }
```

### 6. then的链式调用

then方法的返回值应该是一个promise的对象，而promise对象的值和状态区取决于：

- 如果then中的回调(onFulfilled/onRejected)返回值是promise，那么then返回的promise的值和状态均为返回值的promise
- 如果返回的不是上述内容，那么值为then的回调的返回值，状态为resolve

**以onFulfilled为例：**

- 在then函数中返回这个对象，因为new的时候，executor会立即执行，并且使用的是箭头函数，所以此时其中的this指向第一个promise，可以使用它的状态和值。
- 获取onFulfilled的结果之后，判断是不是Mypromise的实例，如果是，那么执行`res.then(resolve, reject)`，这句话的含义是，如果res代表的promise的状态为fulfilled的，那么执行resolve，then返回的promise的状态为fulfilled的，同时res.then会传递res的值到对应的回调函数中。因此返回的promise的值也被传入到了resolve中。

```js
return new MyPromise((resolve, reject) => {
    /* 状态为fulfilled，执行onFulfilled */
    if (this.status === MyPromise.FULFILLED) {
        queueMicrotask(() => {
            let res = onFulfilled(this.value)
            if (res instanceof MyPromise){
                res.then(resolve, reject)
            } else {
                resolve(res)
            }
        })
    }
}
```

将上述代码进行封装为一个函数：`parse`

```js
    parse(res, resolve, reject) {
        // console.log(res)
        if (res instanceof MyPromise) {
            res.then(resolve, reject)
        } else {
            resolve(res)
        }
    }
```

**整体的代码**

其中再pending的状态中，要再封装为一个函数，将其执行

```js
then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { return this }
        onRejected = typeof onRejected === 'function' ? onRejected : () => { return this }
        /* 该promise的状态和值取决于then的回调的返回值 */
        return new MyPromise((resolve, reject) => {
            if (this.status === MyPromise.PENDING) {
                /* 将要执行的回调放入一个数组中，等resolve或者reject执行的时候再运行 */
                this.callbacks.push({
                    onFulfilled: () => {
                        this.parse(onFulfilled(this.value), resolve, reject)
                    },
                    onRejected: (() => {
                        this.parse(onRejected(this.value), resolve, reject)
                    })
                })
            }
            /* 状态为fulfilled，执行onFulfilled */
            if (this.status === MyPromise.FULFILLED) {
                queueMicrotask(() => {
                    this.parse(onFulfilled(this.value), resolve, reject)
                })

            }
            if (this.status === MyPromise.REJECTED) {
                queueMicrotask(() => {
                    this.parse(onRejected(this.value), resolve, reject)
                })
            }
        })

    }
```

**测试**

```js
console.log(1)
let p = new MyPromise((resolve, reject) => {
    console.log(2)
    resolve('成功')
})
p.then((res) => { console.log(res) 
    return new MyPromise((resolve, reject) => {
        reject('第一个then，失败')
        // resolve('第一个then，成功')
    })
}, (error) => {
    return new MyPromise((resolve, reject) => {
        resolve('ok')
    })
}).then((res) => {
    console.log('链式调用成功')
    console.log(res)
}, () => {
    console.log('失败的调用成功')
})
```

### 7. 异常处理

在promise中，如果执行器中出现错误会转到reject中，同理，在then中出现错误，返回的promise也是会rejected的状态。

我们可以在parse中添加异常处理操作：

修改了parse函数的逻辑，将res的获取过程添加到了try中，这样如果回调中出现问题，那么就可以成功捕获

```js
parse(callback, resolve, reject) {
    try {
        let res = callback(this.value)
        if (res instanceof MyPromise) {
            res.then(resolve, reject)
        } else {
            resolve(res)
        }
    } catch (error) {
        reject(error)
    }
}
```

测试：

```js
console.log(1)
let p = new MyPromise((resolve, reject) => {
    console.log(2)
    resolve('成功')
})
p.then((res) => {
    console.log(a)
}).then((res) => {
    console.log('链式调用成功')
    console.log(res)
}, (error) => {
    console.log(error + "捕获到异常")
    console.log('失败的调用成功')
})
```

### 8. then的透值

如果then的参数不会函数，那么会将上一个promise传递下去，而不会在then中更新为别的.

下列代码的结果为打印：'resolve传递的值'。其中then(1)无效

```js
let p = new Promise((resolve, reject) => {
    resolve('resolve传递的值')
})
p.then(1).then(res => {
    console.log(res)
})
```

实现:将上一个promise返回即可。

```js
onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { return this }
onRejected = typeof onRejected === 'function' ? onRejected : () => { return this }
```

### 9. catc方法

等价于then中onFulfilled为undefined

```js
catch(onRejected){
    return this.then(undefined, onRejected)
}
```

### 10. finally方法

不管状态为fulfilled还是rejected都执行

```js
finally(func){
    this.then(func, func)
}
```



## 手写promise常用方法

注意：静态方法的参数为可迭代对象，而不一定是数组，如果使用forEach的话，可以使用Array.from()转为数组

### Promise.reslove(value)

返回的一个promise，状态为fulfilled，值为value。对于参数为promise的处理与then基本类似

```js
static resolve(value) {
    return new MyPromise((resolve, reject) => {
        if (value instanceof MyPromise) {
            value.then(resolve, reject)
        } else {
            resolve(value)
        }
    })
}
```

测试：

```js
MyPromise.resolve(new MyPromise((resolve) => {
    resolve(1)
})).then(res => {
    console.log(res)
})
```

输出：

```js
1
```

测试：

```js
MyPromise.resolve(new MyPromise((resolve, reject) => {
    reject('error')
})).then(res => {
    console.log(res)
}, error => { console.log(error) })

```

输出: error

### Promise.reject(value)

```js
static reject(error){
    return new MyPromise((resolve, reject) => {
        if (value instanceof MyPromise){
            value.then(resolve, reject)
        } else {
            reject(error)
        }
    })
}
```

### Promise.all(array)方法

**接收参数**

- 由promise对象组成的组成

**返回值**

- 返回一个promise对象，返回值取决于

  - 全部由pending -> fulfilled，输出数组，值为promise的值

  - 其中一个由pending -> rejected，输出拒绝的结果


**注意点**

1. 对于非可迭代对象的的处理
2. 对于长度为0数组的处理
3. 对于数组中值为非Promise对象的处理

```js
Promise._all = function (iterable) {
    return new Promise((resolve, reject) => {

        // 处理不可迭代类型
        if (typeof iterable[Symbol.iterator] !== "function") {
            // 如果不是，就直接拒绝新的 Promise，并返回一个错误信息
            return reject(new TypeError("iterable must be an iterable object"));
        }

        // 可迭代类型的转化
        const promises = Array.from(iterable)
        const n = promises.length

        // 判断是否为空数组
        if (n === 0) return resolve([])

        let finish = 0
        const results = []
        for (let i = 0; i < n; i++) {
            Promise.resolve(promises[i]).then((res) => {
                results[i] = res
                finish += 1
                if (finish === n) {
                    resolve(results)
                }
            }, error => {
                reject(error)
            })
        }
    })
}
```

测试：

```js
let p1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
})
let p2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
})
let p3 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject(2)
    }, 500)
})
```

结果：

```js
2
```

测试：

```js
let p1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
})
let p2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
})
let p3 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 500)
})
```

结果：

```js
MyPromise.all([p1, p2, p3]).then((value) => {
    console.log(value)
}, error => {
    console.log(error)
})

```

### Promise.race(arrs)

要使用Promise.resolve 处理不是 Promise 的传参

返回一个promise对象，值和状态取决于第一个变化的promise

```js
static race(arrs){
    return new MyPromise((resolve, reject) => {
        for (let i = 0; i< arrs.length; i++){
            arrs[i].then(value => {
                resolve(value)
            }, error => {
                reject(error)
            })
        }
    })
}
```

测试:

```js
let p1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
})
let p2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
})
let p3 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 500)
})

MyPromise.race([p1, p2, p3]).then((value) => {
    console.log(value)
}, error => {
    console.log(error)
})
```

结果:2 

### Promise.allSettled(arrs)

所有异步状态完成，返回promise

```js
    static allSetted(arrs) {
        return new Promise(resolve => {
            let len = 0
            const result = []
            arrs = Array.from(arrs)
            arrs.forEach((arr, idx) => {
                Promise.resolve(arr).then((res) => {
                    result[idx] = { status: "fulfilled", value: res }
                }, (err) => {
                    result[idx] = { status: "rejected", value: err }
                }).finally(() => {
                    len++
                    if (len === arrs.length) {
                        resolve(result)
                    }
                })
            })
        })
    }
```



## 应用场景

> [前端 Promise 常见的应用场景 - 掘金 (juejin.cn)](https://juejin.cn/post/6844904131702833159)
>
> [Promise常使用的业务场景 - 掘金 (juejin.cn)](https://juejin.cn/post/7054083495303479327)
>
> [Promise应用场景总结 - 掘金 (juejin.cn)](https://juejin.cn/post/7090102572966477861)

Promise.all方法的常用场景是**处理多个并行的异步操作**，但是要全部成功才能下一步操作，例如同时发送多个网络请求，然后等待所有请求完成后再进行下一步操作。例如并行验证多条信息都成功。

Promise.allSettled方法同样是处理多个并行的异步操作，但是允许存在操作失败的情况，

Promise.race方法的常用场景是处理竞争或**超时**的情况，例如同时发送多个网络请求，然后只取最快返回的结果，或者设置一个超时时间(promise+定时器)，如果在规定时间内没有返回结果，则抛出错误。

Promise.any是处理第一个成功的。

# async/await

## async/await原理

async/await 是一种异步编程的语法糖，它可以让我们用同步的方式写出异步的代码，提高代码的可读性和可维护性。它的原理是基于 Promise 和 generator 函数的。

async 是一个关键字，用来声明一个函数是异步的。它会返回一个 Promise 对象，表示函数的执行结果。await 是一个运算符，用来等待一个 Promise 对象或者任意表达式的值。它只能出现在 async 函数中，否则会报错。

generator 函数是一种特殊的函数，它配合yield关键字可以暂停执行和恢复执行，返回一个迭代器对象。每次调用迭代器的 next 方法，就会执行 generator 函数内部的一段代码，直到遇到 yield 关键字，暂停并返回 yield 后面的表达式的值。再次调用 next 方法时，会从上次暂停的地方继续执行，直到遇到 return 关键字或者函数结束，返回 {value: undefined, done: true} 表示迭代完成。

async/await 的实现原理就是利用了 generator 函数和 Promise 对象。async 函数在执行时，会被编译器转换成一个 generator 函数，并自动执行。当遇到 await 表达式时，会暂停执行，并将 await 后面的表达式包装成一个 Promise 对象，当这个 Promise 对象被 resolve 时，会再次调用 next 方法，并将 resolve 的值作为next方法的参数，也就是作为上一次 await 表达式的返回值。这样就实现了异步操作的同步化表达。

如果想了解更多关于 async/await 的原理和实现，可以参考以下文章：

- [async、await 实现原理 - 知乎](https://zhuanlan.zhihu.com/p/115112361)
- [async/await 原理及简单实现 - 简书](https://www.jianshu.com/p/0f1b6ae1888c)
- [理解 JavaScript 的 async/await - 知乎](https://zhuanlan.zhihu.com/p/172378607)
