> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [blog.csdn.net](https://blog.csdn.net/qq_59079803/article/details/124106843?ops_request_misc=&request_id=&biz_id=102&utm_term=javascript%20%E5%85%AB%E8%82%A1%E6%96%87&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-0-124106843.142^v73^insert_down3,201^v4^add_ask,239^v1^insert_chatgpt&spm=1018.2226.3001.4187#_496)

### 文章目录

- [一. JS 数据类型](#JS_2)

 *   [二、判断数据类型的方法](#_18)
 *   [三. new 操作符具体做了什么？](#new_82)
 *   [三、dom.onclick 和 dom.addEventListener 的区别？](#domonclick__domaddEventListener_94)
 *   [四、JS 内置属性和方法](#JS_112)
 *   [五、逻辑与 && 和 逻辑或 ||](#_____117)
 *   [六、作用域和作用域链](#_128)
 *   [七、预解析和变量提升](#_142)
 *   [八、改变 this 的指向的函数的三个方法（bind / call / apply）](#thisbind__call__apply_147)
 *   [九 ...args 剩余参数 (扩展运算符) 和 arguments 对象之间的区别？](#_args_arguments_158)
 *   [十、遍历方法](#_165)
 *   [十一、JavaScript NaN 属性](#JavaScript_NaN__258)
 *   [十二、null 和 undefined？](#null__undefined_268)
 *   [十三、 = = = 和 = = 的区别](#________284)
 *   [十四、0.1+0.2 为什么不等于 0.3？](#0102__03_303)
 *   [十五、JS 语言类型](#JS_313)
 *   [十六、JavaScript 中日期时间格式转换 && 封装一个倒计时函数](#JavaScript____317)
 *   [十七、函数的 length 是多少？](#_length__367)
 *   [十八、 DOM 事件流](#_DOM_401)
 *   [十九、构造函数](#_429)
 *   [二十、原型和原型链](#_453)
 *   [二十一、中文是多少长度？](#_496)
 *   [二十二、简述 cookie/session 记住登录状态机制原理](#cookiesession_511)
 *   [二十三、cookies,session，sessionStorage,localStorage 的区别？](#cookiessessionsessionStoragelocalStorage__520)
 *   [二十四、charCodeAt() 方法](#charCodeAt__553)
 *   [二十五、for-in 和 for-of 的区别](#forinforof_559)
 *   [二十六、事件流有三个阶段：](#_569)
 *   [二十七、常见的事件：](#_575)
 *   [二十八、JS 严格模式](#JS_612)
 *   [二十九、 ~~ 字符](#__635)
 *   [三十、Map 和 object 之间的区别](#Mapobject_666)
 *   [三十一、位运算符](#_675)
 *   [三十二、delete 删除的性能](#delete_680)
 *   [三十三、浏览器缓存各个文件的具体缓存配置](#_687)
 *   [三十四、Var 和 Let 以及 Const](#Var__Let__Const_690)
 *   [三十五、 Const 的进一步认识](#_Const__701)
 *   [三十六、** 将值不可修改即使是引用类型 **](#_705)
 *   [三十七、 箭头函数和普通函数](#__732)
 *   [三十七、 symbol 类型](#_symbol_757)
 *   [三十八、promise](#promise_810)
 *   [三十九、..args 剩余参数 (扩展运算符)](#args_821)
 *   [四十、 ArrayBuffer](#_ArrayBuffer_966)

以下是四十个常见的 JS 面试题，大家开始冲！

#### 一. JS 数据类型

undefined、symbol、string、number、null、boolean、bigInt、object

1. 种类

*   原始（基本）数据类型 7 种：number、string、boolean、null、undefined、symbol、bigInt（栈中存储，大小固定）
*   引用（复杂）数据类型：object、array、函数（堆中存储，大小不固定）  
    2. 概念
*   基本：简单的数据段，表示不能再细分下去的基本类型
*   复杂：有对个值构成的对象，是存储多个属性的容器，对象值得存储是引用地址，操作相应的值会改变值  
    3. 内存
*   基本：原始数据类型特点是占据空间小，大小固定，属于被频繁使用的数据，在内存中是存储在栈区
*   复杂：复杂数据类型特点是占据空间大，大小不固定。在内存中只在栈中存储是会影响程序的运行，因此在内存中使用的栈区 + 堆区，栈区存放指针，指针是指向实体的内存地址，实体则存放在堆中  
    **补充**  
    在操作系统中内存分为：
*   栈区：编译器自动分配存放参数变量（类似数据结构的栈）
*   堆区：开发者分配，如果不主动释放，则程序结束后收回

#### 二、判断数据类型的方法

**1.typeof**

*   一般用来 判断**基本数据类型**,
*   目前能返回 string，number，boolean，symbol，bigint，unfined，object，function 这八种判断类型，但是注意 null 和数组返回的是 Object 。而且对于引用类型返回的是 object 因为所有的对象的原型最终都是 Object。
*   面试题：为什么 typeof null 是 Object？
*   答：因为在 JavaScript 中，**不同的对象都是使用二进制存储**的，如果**二进制前三位都是 0** 的话，系统会判断为是 Object 类型，而 null 的二进制全是 0，自然也就判断为 Object  
    **补充**  
    这个 bug 是初版本的 JavaScript 中留下的，扩展一下其他五种标识位：
*   000 对象
*   1 整型
*   010 双精度类型
*   100 字符串
*   110 布尔类型

**2.instanceof（根据原型链判断）**

*   判断引用数据类型的，判断基本数据类型无效
*   instanceof 也可以判断一个实例是否是其父类型或者祖先类型
*   instanceof 原理实际上就是查找目标对象的原型链（判断构造函数的 prototype 属性是否出现在某个实例对象上的原型链上，且原型链的尽头是 null）

```
[] instanceof Array ; //true

```

手写实现 instanceof

```
function myInstance(L,R){
//获取判断对象隐式原型
var LP = L._proto_
//判断类型的显示原型
var RP = R.prototype
while(true){
if(LP == null) return false
if(LP == RP) return true
LP = LP._proto_
}
console.log(myIntance({},object))
}

```

**3. 对象的构造器：constructor**

*   与 instanceof 相似，但是对于 instanceof 只能再检测引用类型， 而 constructor 还可以检测基本类型，因为 constructor 是原型对象的属性指向构造函数。  
    **注意**
*   null 和 undefined 是无效的对象，因此是不会有 constructor 存在的，所以无法根据 constructor 来判断。
*   JS 对象的 constructor 是不稳定的，这个主要体现在自定义对象上，当开发者重写 prototype 后，原有的 constructor 会丢失，constructor 会默认为 Object
*   类继承的也会出错，因为 Object 被覆盖了，检测结果就不对了

**4. 对象原型链判断：Object.prototype.toString.call**

*   toString 是 Object 原型对象上的一个方法，该方法默认返回其调用者的具体类型，更严格的讲，是 toString 运行时 this 指向的对象类型, 返回的类型格式为 [object,xxx]，xxx 是具体的数据类型，其中包括：String，Number，Boolean，Undefined，Null，Function，Date，Array，RegExp，Error，HTMLDocument… 基本上所有对象的类型都可以通过这个方法获取到。
*   必须通过 Object.prototype.toString.call 来获取，而不能直接 new Date().toString()， 从原型链的角度讲，所有对象的原型链最终都指向了 Object，按照 JS 变量查找规则，其他对象应该也可以直接访问到 Object 的 toString 方法，而事实上，大部分的对象都实现了自身的 toString 方法，这样就可能会导致 Object 的 toString 被终止查找，因此要用 call 来强制执行 Object 的 toString 方法。
*   缺点：不能细分为谁谁的实例

```
1	Object.prototype.toString.call("a")
	"[object String]"
2	Object.prototype.toString.call(undefined)
	"[object Undefined]"
3	Object.prototype.toString.call(null)
	"[object Null]"
4	Object.prototype.toString.call(new Date())
	"[object Date]"

```

#### 三. new 操作符具体做了什么？

new 操作符通过构造函数创建的实例，可以通过访问构造函数的属性和方法，也将实例和构造函数通过[原型链](https://so.csdn.net/so/search?q=%E5%8E%9F%E5%9E%8B%E9%93%BE&spm=1001.2101.3001.7020)连接起来

```
1.创建一个新对象，并且在内存中创建一个新的地址
let obj = new Obect()
2.设置创建对象的原型链继承构造函数的原型
obj._proto_ = 构造函数的.prototype
3.绑定构造函数的this的指向，将构造函数的this指向创建的对象，并且执行函数体
 let result =Fn.call(创建的对象);
4.判断构造函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象
return result instanceof Object? result: obj;

```

#### 三、dom.onclick 和 dom.addEventListener 的区别？

1. 基本概念

*   dom.onclick：onclick 事件会在元素被点击时发生，可以在 HTML 和 JavaScript 中使用，所有的浏览器都支持 onclick 事件。
*   dom.addEventListener：document.addEventListener() 方法用于向元素添加事件。具有三个参数，分别是事件，触发执行的回调函数，以及是否在在捕获或冒泡阶段执行，IE8 以及 IE8 之前的老版本不支持，以前通过 attachEvent（）方法来监听绑定方法

2. 主要区别

**dom.onclick：**

*   可以内联标签上事件监听，但是只能添加一个事件，绑定多个后者会覆盖前者
*   潜在安全问题 XXS 跨站脚本攻击
*   不能选择 DOM 事件流
*   内联的时候不能分离文档结构和逻辑

**dom.addEventListener**

*   不考虑性能的情况下，可以添加多个事件绑定到钙元素上都会执行
*   不能再 HTML 标签中使用，只能在 script 中使用
*   可以通过 useCpature 参数，选择事件流
*   分离文档结构，大型项目中更加便于维护

#### 四、JS 内置属性和方法

JS 中常用的内置对象：Array 对象、Date 对象、正则表达式对象、string 对象、Global 对象  
方法：  
这些内置对象中的一些方法  
[各方法详情](https://www.cnblogs.com/aizz/p/9329543.html)

#### 五、逻辑与 && 和 逻辑或 ||

属于短路运算符（例如第一个操作数决定了结果，就不会对第二个操作数求值）

*   只要 “&&” 前面是 false，无论 “&&” 后面是 true 还是 false，结果都将返 “&&” 前面的值;
*   只要 “&&” 前面是 true，无论 “&&” 后面是 true 还是 false，结果都将返 “&&” 后面的值;
*   只要 “||” 前面为 false, 不管 “||” 后面是 true 还是 false，都返回 “||” 后面的值。
*   只要 “||” 前面为 true, 不管 “||” 后面是 true 还是 false，都返回 “||” 前面的值。

**补充**

*   真值：除了假值都是真值
*   假值 6 个：“ ”、false、undefined、null、NaN、0 在逻辑运算和隐式转换中会被转换为 false

#### 六、作用域和作用域链

**作用域**

*   变量和函数的可访问的范围，即作用域控制这变量的可见性和生命周期
*   全局作用域：变量，函数在整个全局中都能被访问到，它的生命周期和页面生命周期的等同
*   局部作用域：函数，{} 内部声明的变量和函数

**作用域链**

上下级之间的不同作用域构成作用域链

*   寻找一个变量的值和方法时现在当前作用域范围（自身内部）中找不到时，就会往他的上一级寻找有没有，直到全局都没有的，返回 undefined。
*   内部函数访问外部函数函数变量就是采取的是作用域链查找

#### 七、预解析和变量提升

JS 引擎在执行代码的时候 1. 预解析 2. 执行代码  
**预解析**：JS 引擎将 JS 所有以 Var 声明的变量和全局的 function 都提升到作用域的最前面  
**变量提升**：将所有的变量声明提升到当前作用域的最前面，**无赋值操作**

#### 八、改变 this 的指向的函数的三个方法（bind / call / apply）

作用都是用来重新定义 this 这个对象的！

*   相同：都能改变 this 的指向，都是挂载在 Function. prototype 上
*   不同：call 和 apply 是使用后马上执行，而 bind 是返回一个新的函数，调用回调函数才会执行目标函数。并且 call 和 bind 的参数格式是一样的，**第一个参数是 this 的指向对象**，其余**参数用逗号**，**apply 是参数需要放到数组中**。

```
//调用父级的同时将父级函数里面的this指向子函数里面的this，使子函数可使用父函数的里面的方法和属性
father.myFun.call(son,'成都','上海')；　　　　
father.myFun.apply(son,['成都','上海']);       
father.myFun.bind(son,'成都','上海')();  

```

#### 九 …args 剩余参数 (扩展运算符) 和 arguments 对象之间的区别？

> 1. 剩余参数（拓展运算符）只包含那些没有对应形参的实参，而 arguments （对应传递给函数参数的类数组对象）包含了传给函数的所有实参。  
> 2.arguments 对象不是一个真正的数组，而剩余参数是真正的 Array 实例，也就是说你能够在它上面直接使用所有的数组方法，比如 sort，map，forEach 或 pop。  
> 3.arguments 对象还有一些附加的属性 如 callee 属性）。

#### 十、遍历方法

[详情：http://t.csdn.cn/xe0dd](http://t.csdn.cn/xe0dd)  
一、遍历数组的方法

*   1.for 循环 -- 使用变量将数组长度缓存起来
*   2.forEach() -ES5 语法，对数组的每个元素执行一次提供的函数，不能使用 break、return

```
arr.forEach(function(item,index,arr){
	console.log("元素："+item+" 索引："+index+" 整个数组："+arr);

```

*   3.map() --ES5 语法，创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果

```
arr.map(function(val,index){
	console.log("元素："+val+" 索引："+index);
	return val*val;


```

*   4.for of (可迭代的对象都可遍历)

```
for(let item of arr){
	console.log("元素："+item);


```

二、[遍历对象](https://so.csdn.net/so/search?q=%E9%81%8D%E5%8E%86%E5%AF%B9%E8%B1%A1&spm=1001.2101.3001.7020)的方法

*   1.for…in 以任意顺序遍历一个对象自有的、继承的、可枚举的、非 Symbol 的属性名，对于每个不同的属性，语句都会被执行

```
let obj1 = {
            a:"A",
            b:"B",
            c:"C"
        }
        for(let ch in obj1){
           console.log(ch); a b c
       }

```

这个方法[遍历字符串](https://so.csdn.net/so/search?q=%E9%81%8D%E5%8E%86%E5%AD%97%E7%AC%A6%E4%B8%B2&spm=1001.2101.3001.7020)的话  
let str = “abcdefj”  
![](https://img-blog.csdnimg.cn/a3cce8f25adf41f79f35ae359a38972c.png)

*   2.Object.keys() -- 返回一个由一个给定对象的自身可枚举**属性名**组成的数组，数组中属性名的排列顺序和使用 for…in 循环遍历该对象时返 (区别在于 for-in 循环枚举原型链中的属性) 回的顺序一致

```
let obj1 = {
            a:"A",
            b:"B",
            c:"C"
        }
       console.log(Object.keys(obj1)); //(3) ['a', 'b', 'c']

```

这个方法遍历字符串的话  
let str = “abcdefj”  
![](https://img-blog.csdnimg.cn/91c1b7e5f9cc47839773dc35a276ee19.png)

*   3.Object.values() -- 返回一个给定对象自身的所有可枚举**属性值**的数组，值的顺序与使用 for…in 循环的顺序相同

```
 let obj1 = {
            a:"A",
            b:"B",
            c:"C"
        }
       console.log(Object.values(obj1)); //(3) ['A', 'B', 'C']

```

这个方法遍历字符串的话  
let str = “abcdefj”  
![](https://img-blog.csdnimg.cn/54a45ed54eb84451ac37b9585ddac80f.png)

*   4.Object.getOwnPropertyNames() -- 返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括 Symbol 值作为名称的属性）组成的数组

```
 let obj1 = {
            a:"A",
            b:"B",
            c:"C"
        }
       console.log(Object.getOwnPropertyNames(obj1)); //Array(3) ['a', 'b', 'c']

```

这个方法遍历字符串的话  
let str = “abcdefj”  
![](https://img-blog.csdnimg.cn/44f071935ab147c6af3fd67e0c233262.png)

三、遍历字符串的方法

*   for…of --ES6 语法，可以遍历 Array、Set、Map、String、TypedArray、arguments 等可迭代对象，可以使用 break、continue
*   for 循环

#### 十一、JavaScript NaN 属性

NaN 属性是代表非数字值的特殊值。该属性用于指示某个值不是数字。可以把 Number 对象设置为该值，来指示其不是数字值。

*   特点：不可配置，不可写的属性。但是在 ES3 中这个属性的值是可以被更改的
*   特性：NaN 是一个特殊值，它和自身不相等，是唯一一个非自反（自反，reflexive，即 x = = = x 不成立）的值。而 NaN != = NaN 为 true。
*   使用场景：1. 编码中很少直接使用到 NaN。通常都是在计算失败时，作为 Math 的某个方法的返回值出现的 2. 使用 isNaN() 函数来判断一个值是否是 NaN 值。

```
parseInt("blabla")）
typeof NaN; // "number"

```

#### 十二、null 和 undefined？

简单总结：undefined 代表了不存在的值（对一个值声明后，没有赋值，输出他就是 undefined ，是不存在的），null 代表了没有值（当我们赋值为 null， 那么输出他就是 null，也就是为空没有了值。）

```
1. 
undefined == null //true， “==” 进行了隐式转换，undefined的值 是 null 派生来的，所以他们表面上是相等的
undefined === null //false
2. 
let a;
typeof a;//undefined

let b= null;
typeof b;//object
这里为什么typeof b 输出为 Object 呢？
答：null 不是一个对象，尽管 typeof age输出的是 Object，逻辑上讲， null 值表示一个空对象指针 ，这是一个历史遗留问题，JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象，null表示为全零，所以将它错误的判断为 Object 。

```

#### 十三、 = = = 和 = = 的区别

主要区别：在于 **==** 对比时，若类型不相等，会先转换为相同类型，然后再来比较值。而 **===** 则不会，只能在**相同类型**下比较值，不会做类型转换。还有一个是 **=** ，这个是赋值，不是运算符。  
1、 = = =  
下面的规则用来判断两个值是否 === 相等：

*   如果类型不同，就不相等
*   如果两个都是数值，并且是同一个值，那么相等；例外的是，如果其中至少一个是 NaN，那么不相等。（判断一个值是否是 NaN，只能用 isNaN() 来判断）
*   如果两个都是字符串，每个位置的字符都一样，那么相等；否则不相等。
*   如果两个值都是 true，或者都是 false，那么相等。
*   如果两个值都引用同一个对象或函数，那么相等；否则不相等。
*   如果两个值都是 null，或者都是 undefined，那么相等。  
    2、==
*   如果两个值类型相同，进行 === 比较。
*   如果两个值类型不同，他们可能相等。根据下面规则进行类型转换再比较：
*   如果一个是 null、一个是 undefined，那么相等。
*   如果一个是字符串，一个是数值，把字符串转换成数值再进行比较。
*   如果任一值是 true ，把它转换成 1 再比较；如果任一值是 false，把它转换成 0 再比较。
*   如果一个是对象，另一 个是数值或字符串，把对象转换成基础类型的值再比较。对象转换成基础类型，-
*   利用它的 toString 或者 valueOf 方法。js 核心内置类，会尝试 valueOf 先于 toString；
*   任何其他组合，都不相等。

#### 十四、0.1+0.2 为什么不等于 0.3？

```
console.log(0.1 + 0.2)  // 结果是0.30000000000000004，而不是3

```

*   在 JavaScript 中，数字是采用的 IEEE 754 的双精度标准进行存储。比如其中小数使用 64 位固定长度来表示的，其中的 1 位表示符号位，11 位用来表示指数位，剩下的 52 位尾数位。
*   而其中，比如 0.1 转换为二进制是一个无限循环的数的，就会超过 52 位，就会导致精度缺少，所以在计算机中 0.1 只能存储成一个近似值
*   0.1+0.2 会先分别转换为二进制然后进行相加后存储，最后取出来的时候转化为十进制，而这个值不够近似于 0.3，所以就会出现不相等的结果。
*   解决办法：将浮点数转变为整数来进行计算

#### 十五、JS 语言类型

JavaScript 是一种弱类型的、动态的语言。

*   通常把会偷偷转换的操作称为隐式类型转换。而支持隐式类型转换的语言称为弱类型语言，不支持隐式类型转换的语言称为强类型语言。
*   在声明变量之前不需要先定义变量类型。我们把这种在使用之前不需要确认其变量数据类型的称为动态语言。

#### 十六、JavaScript 中日期时间格式转换 && 封装一个倒计时函数

日期时间格式转换

```
声明实例化构造函数
var date = new Date()
时间戳：
var nowDate = date.getTime()  //返回从1970年到现在的毫秒数
let timestamp =(new Date()).valueOf();//返回从1970年到现在的毫秒数
        var year = date.getFullYear() //获取年
        var month = date.getMonth() + 1 //获取月 (0 ~ 11)
        var day = date.getDate() //获取天(1-31)
        var hours = date.getHours() //获取小时 (0 ~ 23)
        var m = date.getMinutes()//获取分(0 ~ 59)
        var s = date.getSeconds()//获取秒(0 ~ 59)
        month < 10 ? month = "0" +month : month
        day < 10 ? day = "0"+day : day
        hours < 10 ? hours = "0" + hours : hours
        m < 10 ? m = "0" + m : m
        s < 10 ? s = "0" + s : s
        
        var nowDate = year + "年" + month + "月" + day + "日" +hours+"时"+ m + "分"+ s + "秒"
        console.log(nowDate)


```

倒计时函数

```
   function countDown(time) {
 			//前面添加+ 返回的格式就是毫秒数 否则Sun May 01 2022 21:40:47 格式
            let nowTime = +new Date(); //返回的是现在的总毫秒数
            let inputTime = +new Date(time);//返回的是用户输入的总毫秒数
            // 1000 将毫秒数转换为秒数
            let times = (inputTime - nowTime) / 1000;
            // 分- 时 - 天
            let d = parseInt(times / 60 / 60 / 24);  
            d = d < 10 ? '0' + d : d;
            //分-时 - 余数（一天24小时余下的那个数）
            let h = parseInt(times / 60 / 60 % 24); 
            h = h < 10 ? '0' + h : h;
            // 分 - 余数
            let m = parseInt(times / 60 % 60 ); 
            m = m < 10 ? '0' + m : m;
            //余数
            let s = parseInt(times % 60); 
            s = s < 10 ? '0' + s : s;
            return d + '天' + h + '时' + m + "分" + s + '秒';
        }
        //输入的时间一定比现在的时间大，因为是倒计时
        console.log(countDown('2022-6-1 18:00:00'));

```

#### 十七、函数的 length 是多少？

ength 是函数对象的一个属性值，指该函数有多少个必须要传入的参数，即形参的个数。形参的数量不包括剩余参数个数，仅包括第一个具有默认值之前的参数个数。  
一般 function 有多少个形参，length 就是多少

```
function fn1 () {}
function fn2 (name) {}
function fn3 (name, age) {}

console.log(fn1.length) // 0 
console.log(fn2.length) // 1 
console.log(fn3.length) // 2

```

如果有默认参数

```
function fn1 (name) {} 
function fn2 (name = '林三心') {} 
function fn3 (name, age = 22) {} 
function fn4 (name, aaa, age = 22, gender) {} 
function fn5(name = '林三心', age, gender, aaa) {} 

console.log(fn1.length) // 1 
console.log(fn2.length) // 0 
console.log(fn3.length) // 1 
console.log(fn4.length) // 2
console.log(fn5.length) // 0

```

剩余参数  
剩余参数是不算进 length 的计算之中的

```
function fn1(name, ...args) {} 
console.log(fn1.length) // 1

```

#### 十八、 DOM 事件流

**事件三要素**：事件源（处理对象），绑定事件，添加事件处理程序  
**事件流：**

*   捕获阶段：DOM 最顶层 window 开始，逐级向下寻找目标元素传播的过程，遇见绑定的捕获事件就会向下传递
*   目标阶段：到达目标阶段触发绑定事件
*   冒泡阶段：事件开始由具体元素接收，逐级向上传播到 DOM 到顶层 window 的过程  
    **补充**  
    哪些事件支持冒泡  
    鼠标事件，和键盘事件，以及点击事件是支持冒泡的  
    click、dbclick、keydown、keyup、mousedown、mousemove、mouseout、scroll  
    而聚焦和失焦事件，加载事件，ui 事件、鼠标移入移出事件是不支持的。mouseenter、mouseleave  
    **事件对象 event**

```
// 兼容性问题8后都不支持
         //系统自动创建，不需要传递参数
        var div = document.querySelector('div')
         //系统自动创建，不需要传递参数
        div.addEventListener('click',function(event){
            // 都是div 两者之间的区别
            console.log(event.target); //div 触发事件的元素（那个元素点击）
            console.log(this); //div 绑定事件的元素（哪个元素绑定）
            event.cancelBubble  // 阻止事件冒泡  标准写法 event.propagation()
            event.preventDefault()  //阻止默认行为
        })

```

#### 十九、构造函数

在 JavaScript 中，通过 new 来实例化对象的函数叫构造函数，也就是初始化一个实例对象，对象的 prototype 属性是继承一个实例对象。构造函数的命名一般会首字母大写~  
**构造函数的作用：**

*   创建对象：而在 JavaScript 中创建对象有两种，一种是 构建函数 + prototype，另一种是用 class。  
    **构造函数的执行过程**  
    构造函数的执行过程，new 操作符的基本过程

```
1.创建一个新对象，并且在内存中创建一个新的地址
let obj = new Obect()
2.设置创建对象的原型链继承构造函数的原型
obj._proto_ = 构造函数的.prototype
3.绑定构造函数的this的指向，将构造函数的this指向创建的对象，并且执行函数体
 let result =Fn.call(创建的对象);
4.判断构造函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象
return result instanceof Object? result: obj;

```

new 操作符通过构造函数创建的实例，可以访问构造函数的属性和方法，同时实例与构造函数通过原型链连接起来了。  
**构造函数的返回值**  
构造函数中，不要自定义显式返回任何值，构造函数会自动返回

*   构造函数尽量不要返回值。因为返回原始值不会生效，返回对象会导致 new 操作符没有作用。  
    **补充**
*   其实在 JavaScript 中，
*   let a = [] 也就是 let a = new Array []；
*   function a () {} 也就是 let a = new Function () {}

#### 二十、原型和原型链

** 作用：** 构造函数和原型原型链为了构造函数和原型都是为了创建对象（解决 JS 中继承以及内存消耗）

```
构造函数的最主要问题在于，其定义的方法会在每一个实例上都创建一遍。
function Person(name) {
  this.name = name;
  this.age = 18;
  this.say = function () {
  	 console.log("你好，我今年" + this.age);
	}
}

let person1 = new Person("a");
let person2 = new Person("b");

console.log(person1.say == person2.say)  //false

```

** 解决办法：** 将属性或者方法定义在构造函数的原型上，从而创建的实例可以通过原型的查找去找到方法，并且不同的实例所拥有的方法都是构造函数原型上的方法（原型模式定义的属性和方法是由所有的实例所共享的）

```
function Person(name) {
  Person.prototype.name = name;
  Person.prototype.age = 18;
  Person.prototype.say = function () {
  	 console.log("你好，我今年" + this.age);
	}
}

let person1 = new Person("a");
let person2 = new Person("b");

console.log(person1.say == person2.say)  //true

```

** 原因：** 构造函数只要创建后，就会有一个 prototype 属性指向它的原型对象，而这个原型对象也有一个 constructor 属性指向构造函数  
**关于原型和原型链的作用和特性**

*   prototype 属性  
    这个属性是构造函数独有的属性，用于指向构造函数的原型对象，因为这个指向，在构造函数做创建的实例都可以共享构造函数原型中的属性和方法
*   constructor 属性  
    constructor 属性是位于构造函数的原型对象上的，用来指向创建对象的函数。因为所有的实例都能访问 constructor，所以可以使用 constructor 属性来验证原型的类型
*   继承
*   我们访问实例的一个属性或者调用一个方法，但它不存在，那么 JavaScript 就会尝试在它原型中查找它。一层一层的查找，直到查找的到最终对象的的原型为 null 则返回。而如果两者都有一个同名的属性，那么实例上的这个属性会遮盖原型对象上的。

#### 二十一、中文是多少长度？

中文在数据库中存放是占两个字符的，但是在浏览器中，由于 javascript 是 unicode 编码的，所有的字符对于它来说一个就是一个，获取的是中文的长度而不是字符的长度

```
conlog.log("你好呀大笨蛋".length)  //6

```

这就会导致前后端的对于中文的验证长度不一样了，如何解决？

```
function getRealLength( str ) {
    return str.replace(/[^\x00-\xff]/g, '__').length; //这个把所有双字节的都给匹配进去了
}

```

#### 二十二、简述 cookie/session 记住登录状态机制原理

session 是服务端的状态保存机制  
cookie 是客户端的状态保存机制  
当第一次访问服务器的时候 服务器会开辟一块空间用来存放用户的信息  
每一个登录之后的用户信息 都会以 key value 格式记录在 session 中  
同时服务器会把 sessionId（用户信息） 存在 cookie 中 返回给访问的客户端  
客户端就会把 sessionID 保存在本地的 cookie 中对应的网站记录下  
下次访问的时候会携带这个 sessionId  
服务器会验证这个 cookie 的有效性 来判断用户是否登录

#### 二十三、cookies,session，sessionStorage,localStorage 的区别？

**数据缓存**

*   把数据存到用户的浏览器里面
*   设置方便，易于读取，甚至刷新页面也不会丢失数据
*   只能储存字符串，可以将对象 JSON.stringify() 编码后存储  
    **cookie**
*   位于用户的计算机上，用来维护用户计算机中的信息，直到用户删除。  
    **session**
*   称为会话信息，位于 web 服务器上，主要负责访问者与网站之间的交互，当访问浏览器请求 http 地址时，将传递到 web 服务器上并与访问信息进行匹配， 当关闭网站时就表示会话已经结束，网站无法访问该信息了，所以它无法保存永久数据，我们无法访问以及禁用网站  
    **sessionStorage 数据存储以及获取**
*   生命周期为关闭浏览器
*   同一个窗口下的数据可以共享
*   以键值对的形式存储使用
*   sessionStorage.setItem(key,value)
*   sessionStorage.getItem(key)
*   sessionStorage.removeItem(key)  
    **localStorage 数据存储以及获取**
*   生命周期为永久生效，除非手动删除，不然关闭页面也会存在
*   可以多个窗口共享（同一浏览器可以共享）
*   以键值对的形式存储使用
*   localsStorage.setItem.(key,value)
*   localStorage.getItem(key)
*   localStorage.removeItem(key)
*   localStorage.clear()  
    **cookie 与 sessionStorage，localStorage 的区别有**：
*   共同点：都是保存在浏览器端、且同源的
*   区别：
    *   1、cookie 数据始终在同源的 http 请求中携带（即使不需要），即 cookie 在浏览器和服务器间来回传递，而 sessionStorage 和 localStorage 不会自动把数据发送给服务器，仅在本地保存。cookie 数据还有路径（path）的概念，可以限制 cookie 只属于某个路径下
    *   2、存储大小限制也不同，cookie 数据不能超过 4K，同时因为每次 http 请求都会携带 cookie、所以 cookie 只适合保存很小的数据，如会话标识。sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5M 或更大
    *   3、数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭之前有效；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie：只在设置的 cookie 过期时间之前有效，即使窗口关闭或浏览器关闭
    *   4、作用域不同，sessionStorage 不在不同的浏览器窗口中共享，即使是同一个页面；localstorage 在所有同源窗口中都是共享的；cookie 也是在所有同源窗口中都是共享的
    *   5、web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者
    *   6、web Storage 的 api 接口使用更方便

#### 二十四、charCodeAt() 方法

*   返回字符串第一个字符的 Unicode 编码 (H 的 Unicode 值): charCodeAt() 方法可返回指定位置的字符的
    
*   Unicode 编码，返回值是 0 - 65535 之间的整数，表示给定索引处的 UTF-16 代码单元。 字符串中第一个字符的位置为 0， 第二个字符位置为 1，以此类推。
    

#### 二十五、for-in 和 for-of 的区别

两者区别：

*   1.for-in 只是获取数组的索引；而 for-of 会获取数组的值
    
*   2.for-in 会遍历对象的整个原型链，性能差；而 for-of 只遍历当前对象，不会遍历原型链
    
*   3. 对于数组的遍历，for-in 会返回数组中所有可枚举的属性 (包括原型链上可枚举的属性)；for-of 只返回数组的下标对应的属性值
    
*   4.for-of 适用遍历数组／字符串 / map/set 等有迭代器对象的集合，但是不能遍历普通对象（obj is not iterable）
    
*   5.for-of 只遍历当前有迭代器对象的集合，不会遍历原型链：
    

#### 二十六、事件流有三个阶段：

1.  事件捕获阶段：从 window 逐层向下传递到 目标元素（父级到子级），过程中遇到注册的捕获事件就会触发它
2.  处于目标阶段：事件到达目标元素，触发目标元素上注册的事件
3.  事件冒泡阶段：从目标元素向上传递到 window（子级到父级），过程中遇到注册的冒泡事件就会触发它

#### 二十七、常见的事件：

1.  点击事件：
    1.  onclick：单击事件
    2.  ondblclick：双击事件

```
2. 焦点事件
    1. onblur：失去焦点
    2. onfocus:元素获得焦点。

3. 加载事件：
    1. onload：一张页面或一幅图像完成加载。

4. 鼠标事件：
    1. onmousedown    鼠标按钮被按下。
    2. onmouseup    鼠标按键被松开。
    3. onmousemove    鼠标被移动。
    4. onmouseover    鼠标移到某元素之上。
    5. onmouseout    鼠标从某元素移开。
5. 键盘事件：
    1. onkeydown    某个键盘按键被按下。    
    2. onkeyup        某个键盘按键被松开。
    3. onkeypress    某个键盘按键被按下并松开。

6. 选择和改变
    1. onchange    域的内容被改变。
    2. onselect    文本被选中。

7. 表单事件：
    1. onsubmit    确认按钮被点击。
    2. onreset    重置按钮被点击。

```

JS 常见的方法和内置属性：

*   Object 是包含属性和方法的对象， 可以是创建的对象或现有文档对象模型 (DOM) 对象。
*   Object.keys(object) 的返回值是 一个数组，其中包含对象的可枚举属性和方法的名称。
*   Array.filter(function) 对数组进行过滤返回符合条件的数组。

#### 二十八、JS 严格模式

严格模式指的是 js 引擎以严格模式去执行，我们只要在代码前或者函数前添加 “use strict” 就可以开启严格模式了。在严格模式下对 js 代码的执行添加了一些限制，主要是为了保证代码在安全环境中执行，减少不必要的错误，为了消除 js 中的一些不严谨、不合理、不安全的地方，它代表了 js 一种更加合理、更加安全、更加规范的一个发展方向。  
严格模式下，变量必须声明再使用。  
严格模式下，预编译时 this 为 undefined；  
严格模式下，不支持 arguments、caller、callee、with；  
严格模式下，拒绝重复的属性和参数；  
严格模式下，局部的 this 必须被赋值、赋值什么就是什么。  
在全局执行上下文的 this 和全局执行上下文的函数内 this 不再指向 windon 对象  
不允许使用未声明的变量。对象也是一个变量。  
不允许对变量或函数使用 delete 操作符  
不允许变量重名  
不允许使用八进制  
禁止 this 关键字指向全局对象  
不可在 if 内部声明函数  
不允许不使用 var 关键字去创建全局变量，抛出 ReferenceError  
不允许对变量使用 delete 操作符，抛 ReferenceError  
不可对对象的只读属性赋值，不可对对象的不可配置属性使用 delete 操作符，不可为不可拓展的对象添加属性，均抛 TypeError  
对象属性名必须唯一  
函数中不可有重名参数  
在函数内部对修改参数不会反映到 arguments 中  
淘汰 arguments.callee 和 arguments.caller  
不可在 if 内部声明函数  
抛弃 with 语句

#### 二十九、 ~~ 字符

~~true == 1  
~~false == 0  
~~“” == 0  
~~[] == 0

~~undefined ==0  
~~!undefined == 1  
~~null == 0  
~~!null == 1  
具体转化哪些变量有用呢：

数字类型的字符串可以转化为纯数字  
var a=‘123’;  
console.log(~~a); // 输出 123  
字符串中带了其他字母，符号，或者其他除数字外的东西，一律输出 Number 类型的 0  
var a=‘asd’;

console.log(~~a); // 输出 0

任何 boolen 类型的，如果为 TRUE 则输出 1，FALSE 输出 0；  
var a=1==1;  
console.log(~~a);// 输出 1  
特殊类型，转化为 Boolean 是 true 的输出 1，转化为 boolean 是 false 的输出 0；  
var a=undefined;

console.log(~~a);// 输出 0

var b=！undefined;

console.log(~~b);// 输出 1

#### 三十、Map 和 object 之间的区别

[详情](http://t.csdn.cn/yioJL)

*   **内存占用**：批量添加或删除键 / 值对则取决于各浏览器对该类型内存分配的工程实现。不同浏览器的情况不同，但给定固定大小的内存，Map 大约可以比 Object 多存储 50% 的键 / 值对。
*   **插入性能**：向 Object 和 Map 中插入新键 / 值对的消耗大致相当，不过插入 Map 在所有浏览器中一般会稍微快一点儿。对这两个类型来说，插入速度并不会随着键 / 值对数量而线性增加。如果代码涉及大量插入操  
    作，那么显然 Map 的性能更好。
*   **查找速度**：与插入不同，从大型 Object 和 Map 中查找键 / 值对的性能差异极小，但如果只包含少量键 / 值对，则 Object 有时候速度更快。在把 Object 当成数组使用的情况下（比如使用连续整数作为属性），浏览器引擎可以进行优化，在内存中使用更高效的布局。查找速度不会随着键 / 值对数量增加而线性增加。如果代码涉及大量查找操作，那么某些情况下可能选  
    择 Object 更好一些。
*   **删除性能**：使用 delete 删除 Object 属性的性能一直以来饱受诟病，目前在很多浏览器中仍然如此。为此，出现了一些伪删除对象属性的操作，包括把属性值设置为 undefined 或 null。但很多时候，这都是一种讨厌的或不适宜的折中。而对大多数浏览器引擎来说，Map 的 delete() 操作都比插入和查找更快。如果代码涉及大量删除操作，那么毫无疑问应该选择 Map。

#### 三十一、位运算符

位运算符有 7 个，分为两类：  
逻辑位运算符：位与（&）、位或（|）、位异或（^）、非位（~）  
移位运算符：左移（<<）、右移（>>）、无符号右移（>>>）、无符号左移（>>>）

*   逻辑位运算符与逻辑运算符的运算方式是相同的，但是针对的对象不同。逻辑位运算符针对的是二进制的整数值，而逻辑运算符针对的是非二进制的值。

#### 三十二、delete 删除的性能

[详情](http://t.zoukankan.com/nostic-p-5883774.html)  
delete 是普通运算符，会返回 true 或 false。

*   对象属性不存在时也返回 true，所以返回值并非完全等同于删除成功与否。
*   当被 delete 的对象的属性存在并且拥有 DontDelete 时 返回 false，否则返回 true。
*   全局作用域 / 函数代码 > eval 。在全局作用域或者函数代码中通过 var 或者 function 声明的，无法用 delete 删除。

#### 三十三、浏览器缓存各个文件的具体缓存配置

（我回答内容是 Content-Length 加 Last-modified 的哈希时，面试官竟然肉眼可见的惊喜…）

#### 三十四、Var 和 Let 以及 Const

**var**

*   是最开始的 JavaScript 关键词之一，一个变量在 JavaScript 中，分为 声明 和 初始化。
*   var 具有变量提升**无论声明在哪里，变量提升会把都会提升到该作用域的最顶部，你在任何地方都会访问的到**
*   函数作用域，而且可以多次声明，就会造成你自己啥时候覆盖了都不知道  
    Let 和 Const
*   具有块级作用域
*   当遇到变量提升的情况，会有暂时性锁区。
*   不可重复声明，会报错
*   **Const 和 Let 的最大区别是 Const 具有不可重新赋值的特性**
*   当 Const 的值为引用类型时，是可以重新赋值的，因为引用类型在栈空间报存的其实是引用地址，真正的值保持在堆空间

#### 三十五、 Const 的进一步认识

*   Const 是一个必须声明的时候同时初始化且赋值的，并且这个值不能修改。
*   但是引用类型（比如对象，数组等）的话，这时候 Const 实际保持的是这个值在栈中的引用地址，实际的数据在堆里面保持存，所以这时候修改引用类型的值是不会违反 Const 的限制的。

#### 三十六、**将值不可修改即使是引用类型**

**第一种：Object.freeze**  
也就是该 对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。该属性常常用在我们从接口拿到的数据，为了避免发生了修改，会拿到后对级冻结  
该方法可以冻结对象，被冻结的对象有下面的特性：

*   一个被冻结的对象再也不能被修改；
*   一个被冻结的对象不能添加新的属性，不能删除已有属性
*   一个被冻结的对象原型也不能被修改。

freeze 做了什么 ？

*   设置 Object.preventExtension()，禁止添加新属性 ( 绝对存在)
*   设置 Writable 为 false，禁止修改 (绝对存在)
*   设置 Configurable 为 false，禁止配置 (绝对存在)
*   禁止更改访问器属性 (getter 和 setter)  
    **第二种： Object.seal**  
    该方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。与 Object.freeze 的不同在于对于 Object.seal 当前属性的值，只要原来是可写的就可以改

seal 做了什么？

● 设置 Object.preventExtension()，禁止添加新属性 ( 绝对存在)  
● 设置 Configurable 为 false，禁止配置 (绝对存在)  
● 禁止更改访问器属性 (getter 和 setter)

**第三种： Object. preventExtensions**

让一个对象变的不可扩展，也就是永远不能再添加新的属性。

#### 三十七、 箭头函数和普通函数

**一、函数**  
JavaScript 中这样一段代码。只被定义一次，但是可以在需要的场景执行或者调用任意次  
常见的定义方式有下面这几种

● 函数声明式 ： function functionName （）{}  
● 函数表达式：let name = function(){}  
● 箭头函数：（）=> {}  
● 构造函数式：let name = new Function (arg1 , arg2 ,arg3 ,…, argN , body)

ps：第一种和第二种函数的定义的方式其实是第四种构造函数的语法糖，当我们定义函数时候都会通过 new Function 来创建一个函数，只是前两种为我们进行了封装，我们看不见了而已，js 中任意函数都是 Function 的实例，比如下面：

1.  var arr = []; 为 var arr = new Array(); 的语法糖。
2.  var obj = {} 为 var obj = new Object(); 的语法糖

**箭头函数和普通函数的区别**  
![](https://img-blog.csdnimg.cn/d76767f576114a4f8ad475995d96510b.png)  
**函数声明和函数表达式的区别**

*   函数声明会出现函数提升，提升到该函数作用域的最开头，所以无论在该作用域任意方位都能使用
*   但是函数表达式并不会出现这种情况，所以函数表达式需要先赋值再使用（函数表达式也叫匿名函数），否则会由于变量声明提升，add === undefined。  
    ** 构造函数和普通函数又什么区别 **  
    主要是和普通函数在功能上的区别
*   相同都是为了能重复执行同一段的代码
*   不同是使用构造函数来进行初始化对象，而使用构造函数还往往会和 new 一起使用 ，并且一般会在定义的时候首字母大写。

#### 三十七、 symbol 类型

symbol 是 ES6 中新添加的基本数据类型。它的作用是定义一个唯一的对象属性名，也就是唯一的标签，且不可变。  
**作用：**

*   作为属性名，解决全局变量名冲突的问题
*   定义私有，为对象定义一些非私有的、但又希望只用于内部的方法
*   作为唯一值，在一些场景，我们是不在意值是什么的，那么我们可以使用 symbol 来表示  
    **特点**
*   不能使用 new 来构建，原始数据类型创建一个显式包装器对象从 ECMAScript 6 开始不再被支持。 除了如 new Boolean、new String 以及 new Number，因为遗留原因仍可被创建。
*   不能使用点操作符，作为对象属性 key 时，在获取其值的时候，只能使用 [] 形式获取，不能使用 . 操作符
*   不能被 for in 迭代， 也不能用 Object.getOwnPropertyNames() 返回对象的属性，只能使用 Object.getOwnPropertySymbols() 得到它们。

```
//可以传入参数，参数书对 symbol  的描述，可以调用，但是不能访问 symbol  本身
var sym1 = Symbol();
var sym2 = Symbol('foo');
var sym3 = Symbol('foo');


console.log(typeof sym1); // symbol

console.log(Symbol("foo") === Symbol("foo")); // false

console.log(sym2 == sym3 );//false


//Symbol 包装器对象作为属性的键
var name = Symbol("名字");
var obj = {};
obj[name] = "大黄";
// 作为对象属性 key 时，在获取其值的时候，只能使用 [] 形式获取，不能使用 . 操作符
console.log(obj);//{Symbol(name): "大黄"}
console.log(obj[name]);//大黄
console.log(obj.name);//undefined



//不能被 for in
var name = Symbol("名字");
var obj = {};
obj[name] = "大黄";
for(var key in obj){
    console.log(obj[key]);//无输出
}

// 用作唯一常量，标识符等
var animal= {
  rabbit: Symbol(),
  dog: Symbol(),
  snake: Symbol()
}

```

#### 三十八、promise

*   Promise.all  
    [详情](http://t.csdn.cn/A8Smf)  
    **作用**：可以保证，promises 数组中所有 promise 对象都达到 resolve 状态，才执行 then 回调。  
    **一个场景**：如果你的 promises 数组中每个对象都是 http 请求，或者说每个对象包含了复杂的调用处理。而这样的对象有几十万个。  
    那么会出现的情况是，你在瞬间发出几十万 http 请求（tcp 连接数不足可能造成等待），或者堆积了无数调用栈导致内存溢出。  
    **解决办法：** Promise.all 做并发限制。  
    Promise.all 并发限制指的是，每个时刻并发执行的 promise 数量是固定的，最终的执行结果还是保持与原来的 Promise.all 一致。

**解决方案：** tiny-async-pool、es6-promise-pool、p-limit

#### 三十九、…args 剩余参数 (扩展运算符)

**展开运算**：允许一个表达式在某处展开。展开运算符在多个参数（用于函数调用）或多个元素（用于数组字面量）或者多个变量（用于解构赋值）的地方可以使用。

*   1. 函数调用中使用展开运算符（传参）

在 ES6 之前将**整个数组里面的元素依次作为实参传递给函数形参的时候**使用 Function.prototype.apply 的特性

```
let arr = [1,2,3]
function test(a,b,c){}
test.apply(null,args)  //通过apply特性将数值的形式转换为数组对应传递进去

```

ES6 之后展开运算符

```
let arr = [1,2,3]
function test(a,b,c){}
test(..arr) //将数组展开进行传递参数

```

*   2. 数组中使用展开运算符 (合并数组，类数组对象变成数组)

```
a.合并数组
let arr = [1,2,3]
let arr1 = [...arr,4,5,6]  //1,2,3,4,5,6

```

```
b.展开运算符可以用于数组的一些方法中（push函数）
let arr = [1,2,3]
let arr1 = [4,5,6]
arr1.push(...arr) //4,5,6,1,2,3

```

```
c.类数组对象变成数组
let a=new Set([1,2,3,4,5,2,1])  // a : Set(5) {1, 2, 3, 4, 5}
let b=[...a]    //  (5) [1, 2, 3, 4, 5]

```

*   3. 解构赋值（解构赋值中展开运算符只能用在最后）

```
let [arg1,arg2,...arg3] = [1, 2, 3, 4] 
arg1 //1
arg2 //2
arg3 //['3','4']

```

*   4. 对象中的展开运算符（和数组类似）

```
let {x,y,...z}={x:1,y:2,a:3,b:4};
x; //1
y; //2
z; //{a:3,b:4}

```

```
let z={a:3,b:4};
let n={x:1,y:2,...z};
n; //{x:1,y:2,a:3,b:4}

```

```
let a={x:1,y:2};
let b={z:3};
let ab={...a,...b};
ab //{x:1,y:2,z:3}

```

**剩余参数**：剩余参数语法允许我们将一个不定数量的参数表示为一个数组。

*   1. 函数调用

```
function test(a,b,...args){} //...args == [4,5,6]
test(1,2,3,4,5,6)

```

*   2. 解构赋值（解构赋值中展开运算符只能用在最后）

```
let [arg1,arg2,...arg3] = [1, 2, 3, 4] 
arg1 //1
arg2 //2
arg3 //['3','4']

```

**二、arguments 对象**  
1. 定义：arguments 是一个对应传递给函数参数的类数组对象, arguments 对象是所有非箭头函数都有的一个局部变量。你可以使用 arguments 对象在函数中引用函数的参数。此对象包含传递给函数的每个参数，第一个参数在索引 0 处。  
2. 特性：

*   arguments 对象并不是一个数组，除了 length 和索引元素之外，任何数组的属性都没有。当然它可以被转换为数组

```
const args = Array.from(arguments); 
const args = [...arguments];

```

*   arguments 存在属性 callee：

```
属性callee相当于调用自身函数，可以用作匿名函数的递归：
var sum = function (n) { 
if (1 == n){ 
return 1; 
} else {
 return n + arguments.callee(n - 1); //6 5 4 3 2 1 } } alert(sum(6)); 输出结果：21
 }

```

3. 作用：

```
a.无需明确命名参数，就可以重写函数，在函数代码中，使用特殊对象 arguments，开发者无需明确指出参数名，就能访问它们
function sayHi(message) {
  alert(arguments[0]);   // 此处将打印message参数的值
}

```

```
b.检测参数个数（ arguments.length ）
function howManyArgs() {
  alert(arguments.length);
}
howManyArgs("string", 45);
howManyArgs();
howManyArgs(12);   //  上面这段代码将依次显示 "2"、"0" 和 "1"。

```

```
c.针对同一个方法被多处调用，但是参数数量不确定的情况下，可以更具arguments索引进行判断。
 function func1() {
            console.log(arguments[0]); // 1 
            console.log(arguments[1]); // 2 
            console.log(arguments[2]); // 3 
        }
        func1(1, 2, 3)

```

```
d.模拟函数重载
用 arguments 对象判断传递给函数的参数个数，即可模拟函数重载
当只有一个参数时，doAdd() 函数给参数加 5。如果有两个参数，则会把两个参数相加，返回它们的和。所以，doAdd(10) 输出的是 “15”，而 doAdd(40, 20) 输出的是 “60”。
function doAdd() {
  if(arguments.length == 1) {
    alert(arguments[0] + 5);
  } else if(arguments.length == 2) {
    alert(arguments[0] + arguments[1]);
  }
}
doAdd(10);	//输出 "15"
doAdd(40, 20);	//输出 "60"

```

#### 四十、 ArrayBuffer

ArrayBuffer 对象是 JavaScript 操作二进制数据的一个接口。属于独立的规格（2011 年 2 月发布），ES6 将它们纳入了 ECMAScript 规格。它以数组的语法处理二进制数据，所以称为二进制数组。  
二进制数组就是在这种背景下诞生的。它允许开发者以数组下标的形式，直接操作内存，大大增强了 JavaScript 处理二进制数据的能力。  
二进制数组由三类对象组成  
ArrayBuffer、TypedArray、DataView  
简单说，ArrayBuffer 对象代表原始的二进制数据，TypedArray 视图用来读写简单类型的二进制数据，DataView 视图用来读写复杂类型的二进制数据。

**能比以上常见的 JS 知识点掌握已经很厉害了！小编目前就整理了这些，后续会陆续更新啦~ 大家可以一起学习总结！**  
![](https://img-blog.csdnimg.cn/29f18bde72664bdaa963f0af8a42f649.jpeg)