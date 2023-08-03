> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [blog.csdn.net](https://blog.csdn.net/weixin_48560590/article/details/127133833?ops_request_misc=&request_id=&biz_id=102&utm_term=javascript%20%E5%85%AB%E8%82%A1%E6%96%87&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-1-127133833.142^v73^insert_down3,201^v4^add_ask,239^v1^insert_chatgpt&spm=1018.2226.3001.4187)

一、JavaScript 基础
===============

1、基本数据类型介绍
----------

所有的编程语言都有数据类型的概念。

在`JavaScript`中，数据类型可以分为基本数据类型和[引用数据类型](https://so.csdn.net/so/search?q=%E5%BC%95%E7%94%A8%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B&spm=1001.2101.3001.7020)。其中基本数据类型包括`Undefined`,`Null`,`Boolean`,`Number`,`String`, `Symbol(es6)`,`bigInt(es10)`7 种类型。

引用类型有`Object`,`Function`,`Array`,`Date`,`正则（RegExp）`等。

**问题：两种类型有什么区别？**

存储位置不同

<table><thead><tr><th><strong>区别</strong></th><th>基本数据类型</th><th>引用数据类型</th></tr></thead><tbody><tr><td>存储位置</td><td>栈 (stack)</td><td>堆 (heap)</td></tr><tr><td>占据空间</td><td>小，大小固定</td><td>大，大小不固定</td></tr></tbody></table>

- 基本数据类型的值是简单的数据段，它们存储在栈中，通过复制的方式来赋值。
- 引用数据类型的值是保存在堆内存中的对象，变量实际上是一个指向堆内存地址的指针。当我们对一个引用类型的变量进行赋值时，实际上是将堆内存中的地址赋值给变量，因此两个变量可能指向同一个对象。
- 基本数据类型的比较是按值比较的，而引用数据类型的比较是按引用比较的。

下面我们先来回顾基本数据类型的内容，后面再复习引用类型的内容，以及看一下对应的常见的面试题。

### 1.1 Undefined 类型

`Undefined`类型只有一个唯一的字面值`undefined`, 表示的含义是一个变量不存在。

问题：哪些场景中会出现`undefined`?

第一：使用只声明而未初始化的变量时，会返回`undefined`

```
var a
console.log(a) //undefined

```

第二：获取一个对象的某个不存在的属性时，会返回`undefined`

```
var obj={
    userName:'zhangsan'
}
console.log(obj.age)//undefined

```

第三：函数没有明确的返回值，却对函数的调用结果进行打印

```
function fn(){}
console.log(fn()) //undefined

```

第四：函数定义的时候，使用了多个形参，但是在调用的时候传递的参数的数量少于形参数量，那么没有匹配上的参数就为`undefined`

```
function fn(p1,p2,p3){
    console.log(p3) //undefined
}
fn(1,2)

```

### 1.2 Null 类型

 `Null`类型只有一个唯一的字面值`null`, 表示一个[空指针](https://so.csdn.net/so/search?q=%E7%A9%BA%E6%8C%87%E9%92%88&spm=1001.2101.3001.7020)的对象，这也是在使用`typeof`运行符检测`null`值时会返回`object`的原因。

问题：哪些场景中会出现`null`？

第一：一般情况下，如果声明的变量是为了以后保存某个值，则应该在声明时就将其赋值为`null`

```
var obj=null
function foo(){
    return {
        userName:'zhangsan'
    }
}
obj=foo();

```

第二：`JavaScript`在获取`DOM`元素时，如果没有获取到指定的元素对象，就会返回`null`

```
document.querySelector('#id') //null

```

第三：在使用正则表达式进行匹配的时候，如果没有匹配的结果，就会返回`null`

```
'test'.match(/a/);// null

```

### 1.3 Undefined 与 null 比较

`Undefined`和`Null`虽然是两种不同的基本数据类型，但是在某些情况也存在相同之处，下面看一下它们两者相同点和不同点。

**（1）相同点**

第一：`Undefined`和`Null`两种数据类型都只有一个字面值，分别是`undefined`和`null`.

第二：`Undefined`和`Null`类型在转换为`Boolean`类型的值时，都会转换为`false`.

第三：在需要将两者转换成对象的时候，都会抛出一个`TypeError`的异常。

```
var a;
var b=null;
cosnole.log(a.name);//Cannot read property 'name' of undefined
cosnole.log(b.name);//Cannot read property 'name' of undefined

```

第四：`Undefined`类型派生自`Null`类型，所以在非严格相等的比较下，两者是相等的。如下面代码所示：

```
null==undefined //true
```

**(2) 不同点**

第一：`null`是`JavaScript`的关键字，而`undefined`是`JavaScript`的一个全局变量，也就是挂载在`window`对象上的一个变量，并不是关键字。

第二：在使用`typeof`运算符进行检测时，`Undefined`类型的值会返回`undefined`. 而`Null`类型的值返回为`object`

```
typeof undefined ;//undefined
typeof null ;//object

```

第三：在需要进行字符串类型的转换时，`null`会转换成字符串`null`, 而`undefined`会转换字符串`undefined`.

```
undefined+" abc" //"undefined abc"
null+" abc" //"null abc"
```

第四：在进行数值类型的转换时，`undefined`会转换为`NaN`, 无法参与计算，而`null`会转换为`0`, 可以参与计算。

```
undefined +0;// NaN
null+0 ;// 0
```

第五：建议：无论在什么情况下都没有必要将一个变量显示的赋值为`undefined`。如果需要定义某个变量来保存将来要使用的对象，应该将其初始化为`null`.

### 1.4 Boolean 类型

`Boolean`类型 (布尔类型) 的字面量只有两个，分别是`true`和`false`, 它们是区分大小写的。

`Boolean`类型使用最多的场景就是用于`if`语句的判断。在`JavaScript`中，`if`语句可以接受任何类型的表达式，即`if(a)`语句中的`a`, 可以是`Boolean`,`Number`,`String`,`Object`，`Null`,`Undefined`等类型。

如果`a`不是`Boolean`类型的值，那么`JavaScript`解析器会自动调用`Boolean( )`函数对`a`进行类型的转换，返回最终符合`if`语句判断的`true`或者是`false`值。

不同类型与`Boolean`类型的值的转换是`Boolean`类型的重点。

第一：`String`类型转换为`Boolean`类型

空字符都会转换成`false`, 而任何非空字符串都会转换为`true`

第二：`Number`类型转换为`Boolean`类型

`0`和`NaN`都会转换为`false`. 而除了`0`和`NaN`以外都会转换`true`.

第三：`Object`类型转换`Boolean`类型

如果`object`为`null`时，会转换为`false`, 如果`object`不为`null`，则都会转换成`true`.

```
var obj={}
Boolean(obj) //true

var obj=null
Boolean(obj)//false

```

第四：`Function`类型转换`Boolean`类型

任何`Function`类型都会转换为`true`

```
var fn=function(){
}
Boolean(fn)//true

```

第五：`Null`类型转换为`Boolean`类型，我们知道`Null`类型只有一个`null`值，会转换为`false`.

第六：`Undefined`类型转换`Boolean`类型，我们知道`Undefined`类型只有一个`undefined`值，会转换为`false`.

### 1.5 Number 类型

在`JavaScript`中，`Number`类型的数据包括了整型数据，也包括了浮点型数据。

我们先来看一下整型的处理。整型可以是十进制，也可以通过八进制或者是十六进制来表示。

第一：八进制：如果想要用八进制来表示一个数值，那么首位必须是 0，其它位必须是 0–7 的数字，如果后面的数字大于 7，则破坏了八进制的规则，这时会被当作十进制数来处理。

```
var num1=024
console.log(num1) //20

```

```
var num2=079
console.log(num2) //79

```

`num1`第一位是`0`表示八进制，后面每位数字都是在`0--7`之间的，所以符合八进制规则，最终转换为十进制为`20`

`num2`的第一位也是 0，但是最后一位已经超过了 7，所以不属于八进制，这里直接作为十进制来处理，最终输出的结果为 79.

第二：十六进制：

如果想用十六进制表示一个数值，那么前面两位必须是`0x`, 其它的位必须是 (0–9,`a--f`或者`A--F`). 如果超出了这个范围，则会抛出异常。

```
var num1=0x5f //95
var num2=Ox5h //Uncaught SyntaxError: Invalid or unexpected token

```

与`Boolean`类型一样，当其它类型在与`Number`类型进行数据转换时，也会遵守一定的规则。

#### 1.5.1 Number 类型转换

在实际开发中，我们经常会遇到将其他类型的值转换为`Number`类型的情况。在`JavaScript`中，一共有 3 个函数可以完成这种转换，分别是`Number()`函数，`parseInt( )`函数,`parseFloat( )`函数。下面我们看一下这些函数需要注意的事项。

**Number( ) 函数**

`Number( )`函数可以用于将任何类型转换为`Number`类型，它在转换时遵循如下规则：

第一：如果是数字，会按照对应的进制数据格式，统一转换为十进制返回。

```
Number(10) //10
Number(010) // 8, 010是八进制的数据，转换成十进制是8
Number(0x10) // 16,0x10是十六进制的数据，转换成十进制是16

```

第二：如果是`Boolean`类型的值，`true`返回 1,`false`返回是的 0

```
Number(true) //1
Number(false) //0

```

第三：如果值为`null`, 则返回 0

```
Number(null) //0

```

第四：如果值为`undefined`, 则返回`NaN`

```
Number(undefined) //NaN

```

第五：如果值为字符串类型，需要遵循如下规则

（1）如果该字符串只包含了数字，则会直接转换成十进制数；如果数字前面有 0，则会直接忽略掉这个 0。

```
Number('21') //21
Number('012') //12

```

(2) 如果字符串是有效的浮点数形式，则会直接转成对应的浮点数，前置的多个重复的 0 会被删除，只保留一个。

```
Number('0.12') //0.12
Number('00.12') //0.12

```

(3) 如果字符串是有效的十六进制形式，则会转换为对应的十进制数值

```
Number('0x12') //18

```

(4) 如果字符串是有效的八进制，则不会按照八进制转换，而是直接按照十进制转换并输出，因为前置的 0 会被直接忽略掉。

```
Number('010') //10
Number('0020') //20

```

(5) 如果字符串为空，即字符串不包含任何字符，或为连续多个空格，则会转换为 0.

```
Number('') //0
Number('     ')//0

```

(6) 如果字符串中包含了任何不适以上 5 种情况的其它格式内容，则会返回`NaN`

```
Number('123a') //NaN
Number('abc') //NaN

```

第六：如果是对象类型，则会调用对象的`valueOf( )`函数获取返回值，并且判断返回值能否转换为`Number`类型，如果不能，会调用对象的`toString( )`函数获取返回值，并且判断是否能够转换为`Number`类型。如果也不满足，则返回`NaN`.

以下是通过`valueOf( )`函数将对象转换成`Number`类型。

```
var obj={
    age:'12',
    valueOf:function(){
        return this.age
    },
   
  }
Number(obj) //12

```

以下是通过`toString( )`函数将对象转换成`Number`类型。

```
var obj={
    age:'21',
    toString:function(){
        return this.age
    }
    
}
Number(obj)

```

**parseInt( ) 函数**

`parseInt()`函数用于解析一个字符串，并返回指定的基数对应的整数值。

语法格式：

```
parseInt(string,radix)
```

其中`string`参数表示要被解析的值，如果该参数不是一个字符串，那么会使用`toString( )`函数将其转换成字符串。并且字符串前面的空白符会被忽略。

`radix`表示的是进制转换的基数，可以是二进制，十进制，八进制和十六进制。默认值为 10.

因为对相同的数采用不同进制进行处理时可能会得到不同的结果，所以在任何情况下使用`parseInt`函数时，建议都手动补充第二个参数。

`parseInt( )`函数会返回字符串解析后的整数值，如果该字符串无法转换成`Number`类型，则会返回`NaN`.

```
parseInt('aaa')//NaN
```

在使用`parseInt`函数将字符串转换成整数时，需要注意的问题：

第一：如果遇到传入的参数是非字符串类型的情况，则需要将其优先转换成字符串类型。即使传入的是整型数据。

第二：`parseInt( )`函数在做转换时，对于传入的字符串会采用前置匹配的原则。

```
parseInt("fg123",16)

```

对于字符串`fg123`, 首先从第一个字符开始，`f`是满足十六进制的数据的，因为十六进制数据的范围是`0--9`,`a--f`, 所以保留`f`，然后是第二个字符`g`，它不满足十六进制数据范围，因此从第二个字符都最后一个字符全部舍弃，最终字符串只保留了字符`f`，然后将字符`f`转换成十六进制的数据，为 15，因此最终返回的结果为`15`.

还要注意的一点就是，如果传入的字符串中涉及到了算术运算，则不会执行，算术符号会被当作字符处理。

```
parseInt('16*2')// 16,这里直接当作字符串处理，并不会进行乘法的运算
parseInt(16*2) // 32 

```

第三：对浮点数的处理

如果传入的值是浮点数，则会忽略小数点以及后面的数，直接取整。

```
parseInt(12.98) //12

```

第四：`map( )`函数与`parseInt( )`函数的问题

我们这里假设有一个场景，存在一个数组，数组中的每个元素都是数字字符串，[‘1’,‘2’,‘3’,‘4’]，如果将这个数组中的元素全部转换成整数，应该怎样处理呢？

这里我们可能会想到使用`map( )`函数，然后在该函数中调用`parseInt( )`函数来完成转换。所以代码如下：

```
 <script>
      var arr = ["1", "2", "3", "4"];
      var result = arr.map(parseInt);
      console.log(result);
    </script>

```

执行上面程序得到的结果是：`[1,NaN,NaN,NaN]`

为什么会出现这样的问题呢？

上面的代码等效如下的代码

```
 var arr = ["1", "2", "3", "4"];
      //   var result = arr.map(parseInt);
      var result = arr.map(function (val, index) {
        return parseInt(val, index);
      });
      console.log(result);

```

通过以上的代码，可以发现，`parseInt`函数第二个参数实际上就是数组的索引值。所以，整体的形式如下所示：

```js
parseInt('1',0) // 任何整数以0为基数取整时，都会返回本身，所以这里返回的是1
parseInt('2',1) //注意parseInt第二个参数的取值范围为2--36，所以不满足条件，这里只能返回NaN
parseInt('3',2) // 表示将3作为二进制来进行处理，但是二进制只有0和1，所以3超出了范围，无法转换，返回`NaN`
parseInt('4',3) //将4作为三进制来处理，但是4无法用三进制的数据表示，返回NaN

```

所以当我们在`map( )`函数中使用`parseInt( )`函数时，不能直接将`parseInt( )`函数作为`map( )`函数的参数，而是需要在`map( )`函数的回调函数中使用, 并尽量指定基数。代码如下所示：

```
      var arr = ["1", "2", "3", "4"];
      var result = arr.map(function (val) {
        return parseInt(val, 10);
      });
      console.log(result);


```

**parseFloat( ) 函数**

`parseFloat`函数用于解析一个字符串，返回对应的浮点数，如果给定值不能转换为数值，则返回`NaN`

与`parseInt( )`函数相比，`parseFloat( )`函数没有进制的概念。

注意:

第一：如果字符串前面有空白符，则会直接忽略掉，如果第一个字符就无法解析，则会直接返回`NaN`

```
parseFloat('  2.6')// 2.6
parseFloat('f2.6') //NaN

```

第二：对于小数点，只能正确匹配第一个，第二个小数点是无效的，它后面的字符也都将被忽略。

```
parseFloat('12.23')// 12.23
parseFloat('12.23.39')//12.23

```

**总结:**

虽然`Number( )`,`parseInt( )`,`parseFloat( )`函数都能用于`Number`类型的转换，但是他们之间还是有一定的差异

第一：`Number( )` 函数转换的是传入的整个值，并不是像`parseInt( )`函数和`parseFloat( )`函数一样会从首位开始匹配符合条件的值。如果整个值不能被完整转换，则会返回`NaN`

第二：`parseFloat( )`返回对应的浮点数，`parseInt( )`返回整数，并且`parseFloat( )`函数在解析时没有进制的概念，而`parseInt()`函数在解析时会依赖于出入的第二个参数来做值的转换。

#### 1.5.2 isNaN() 函数与 Number.isNaN() 函数对比

`Number`类型数据中存在一个比较特殊的值`NaN`（`Not a Number`）, 它表示应该返回数值却并未返回数值的情况。

`NaN`存在的目的是在某些异常情况下保证程序的正常执行。例如`0/0`，在其他的语言中，程序会直接抛出异常，而在`JavaScript`中会返回`NaN`, 程序可以正常运行。

`NaN`有两个很明显的特点，第一个是任何涉及`NaN`的操作都会返回`NaN`, 第二个是`NaN`与任何值都不相等，即使是与`NaN`本身相比。

```
NaN==NaN //false
```

在判断`NaN`时，`ES5`提供了`isNaN`函数，`ES6`为`Number`类型增加了静态函数`isNaN( ).`

问题：既然在`ES5`中提供了`isNaN`函数，为什么要在`ES6`中专门增加`Number.isNaN( )`函数呢？两者在使用上有什么区别？  
我们先来看一下`isNaN( )`函数

`isNaN( )`函数的作用是用来确定一个变量是不是`NaN`,`NaN`是一个`Number`类型的数值，只不过这个值无法用真实的数字表示。

`isNaN`检测的机制：它在处理的时候会去判断传入的变量值能否转为数字，如果能转换成数字则会返回`false`, 如果无法转换则会返回`true`.

```
isNaN(NaN)//true
isNaN(undefined) //true
isNaN({})//true

isNaN(true)// false ,Number(true)会转换成数字1
isNaN(false)// false,Number(false)会转换成数字0
isNaN(null) // false,Number(null)会转换成数字0

isNaN(1) //false
isNaN('aaa') //true 字符串aaa无法转换成数字
isNaN('1') //false 字符串“1”可以转换成数字1.

```

**`Number.isNaN( )`** 函数

既然在全局的环境中有了`isNaN( )`函数，为什么在`ES6`中会专门针对`Number`类型增加一个`isNaN`函数呢？

这是因为全局的`isNaN`函数本身存在误导性，而`ES6`中的`Number.isNaN( )`函数会在真正意义上去判断变量是否为`NaN`, 不会做数据类型转换。只有在传入的值为`NaN`, 才会返回`true`, 传入其它类型的值时会返回`false`.

```
Number.isNaN(NaN)// true
Number.isNaN(1) //false
Number.isNaN(null) //false
Number.isNaN(undefined) //false

```

如果在非`ES6`环境中想用`ES6`中的`isNaN( )`函数，怎样处理呢？

```
if(!Number.isNaN){
    Number.isNaN=function(n){
        return n!==n
    }
}

```

在所有类型的数据中，如果一个变量和自身进行比较，只有在变量为`NaN`时才会返回`false`, 其它情况都是返回的`true`.

所以`n!==n`返回`true`, 也只有在`n`的值为`NaN`的时候才会成立。

**总结：**

`isNaN( )`函数与`Number.isNaN( )`函数的区别如下：

第一：`isNaN( )`函数在判断是否为`NaN`时，需要进行数据类型转换，只有在无法转换为数字时才会返回`true`

第二：`Number.isNaN( )`函数在判断是否为`NaN`时，只需要判断传入的值是否为`NaN`, 并不会进行数据类型转换。

### 1.6 String 类型

在`JavaScript`中的`String`类型可以通过双引号表示，也可以通过单引号表示，并且这两种方式是完全等效的。

#### 1.6.1 String 类型定义

在`JavaScript`中有 3 种方式来创建字符串，分别是字符串字面量，直接调用`String( )`函数，还有就是通过`new String( )`构造函数的方式。

**字面量**

字符串字面量就是直接通过单引号或者是双引号定义字符串的方式。

注意：单引号和双引号是等价的。

```
var str='hello'
var str2="JavaScript"

```

**直接调用`String( )`函数**

直接调用`String( )`函数，会将传入的任何类型的值转换成字符串类型。在转换的时候，需要遵循如下的规则：

第一：如果是`Number`类型的值，则直接转换成对应的字符串。

```
String(123) // '123'
String(123.56) // "123.56"

```

第二：如果是`Boolean`类型的值，则直接转换成字符串的`"true"`或者是`"false"`

```
String(true)// "true"
String(false) // "false"

```

第三：如果值为`null`, 直接转换成字符串的`"null"`

```
String(null) // "null"

```

第四：如果值为`undefined`, 则转换成字符串的`undefined`

```
String(undefined) //"undefined"

```

**new String( ) 构造函数**

这种方式是使用`new`运算符来创建一个`String`的实例。转换的规则和`String( )`函数是一样的，最后返回的是一个`String`类型的对象实例。

```
new String(678) //返回的对象中有length属性，并且可以通过下标获取对应的值。

```

**三种创建方式的区别**

使用字符串字面量方式和直接调用`String( )`函数的方式得到的字符串都是基本字符串，而通过`new String( )`方式生成的字符串是字符串对象。

基本字符串在比较的时候，只需要比较字符串的值即可，而在比较字符串对象时，比较的是对象所在的地址。

```
var str='hello'
var str2=String('hello')
str===str2 //true

var str3=new String('hello')
var str4=new String('hello')
str3===str4 //false

```

对于`str`与`str2`都是基本字符串，只是比较字符串的值就可以了，所以两者是相等的。

而对于`str3`与`str4`都是通过`String`类型的实例，所以在比较的时候需要判断变量是否指向了同一个对象，也就是内存地址是否相同，很明显，`str3`与`str4`都是在内存中新生成的地址，彼此各不相同。

**函数调用**

在`String`对象的原型链有一系列的函数，例如`indexOf( )`,`substring()`等等。

通过`String`对象的实例可以调用这些函数做字符串的处理。

但是，我们发现了一个问题，就是采用字面量方式定义的字符串也能够直接调用原型链上的这些函数。

```
'hello'.indexOf('o') //4

```

这是为什么呢？

实际上基本字符串本身是没有字符串对象上的这些函数的，而在基本字符串调用字符串对象才有的函数时，`JavaScript`会自动将基本字符串转换为字符串对象，形成一种包装的类型，这样基本字符串就可以正常调用字符串对象的方法了。

#### 1.6.2 字符串常见算法

我们来看一下常见的`String`类型中的算法，这些在面试的时候也是经常被问到的。

**第一：字符串逆序输出**

字符串逆序输出就是将一个字符串以相反的顺序进行输出。

例如`abcdef`输出的结果是`fedcba`

第一种算法

这里我们是借助与数组的`reverse()`函数来实现。

```
function reverseString(str) {
        return str.split("").reverse().join("");
      }
      console.log(reverseString("abcdef"));

```

第二种算法：

```
var arr=Array.from('abcdef') //转换成数组,这里比第一种方式简单
console.log(arr.reverse().join(""))

```

第三种算法：

这里可以通过字符串本身提供的`chartAt`函数来完成。

```
  function reverseString2(str) {
        var result = "";
        for (var i = str.length - 1; i >= 0; i--) {
          result += str.charAt(i);
        }
        return result;
      }
      console.log(reverseString2("abcdef"));
```

**统计字符串中出现次数最多的字符及出现的次数**

假如有一个字符串`javascriptjavaabc`, 其中出现最多的字符是`a`, 出现了 5 次。

**算法 1**

思想：通过`key-value`形式的对象存储字符串以及字符串出现的次数，然后逐个判断出现次数最大的值，同时获取对应的字符。

```
<script>
      function getMaxCount(str) {
        var json = {}; //表示key-value结构的对象
        //遍历str的每一个字符得到key-value形式的对象
        for (var i = 0; i < str.length; i++) {
          //判断json对象中是否有当前从str字符串中取出来的某个字符。
          if (!json[str.charAt(i)]) {
            //如果不存在，把当前字符作为key添加到json对象中，值为1
            json[str.charAt(i)] = 1;
          } else {
            //如果存在，则让value值加1
            json[str.charAt(i)]++;
          }
        }
        //存储出现次数最多的字符
        var maxCountChar = "";
        //存储出现最多的次数
        var maxCount = 0;
        //遍历json对象，找出出现次数最大的值
        for (var key in json) {
          if (json[key] > maxCount) {
            maxCount = json[key];
            maxCountChar = key;
          }
        }
        return (
          "出现最多的字符是" + maxCountChar + ",共出现了" + maxCount + "次"
        );
      }
      var str = "javascriptjavaabc";
      console.log(getMaxCount(str));
    </script>

```

**算法 2**

思路：这里主要是对字符串进行排序，然后通过`lastIndexOf()`函数获取索引值后，判断索引值的大小以获取出现的最大次数。

```
 function getMaxCount(str) {
        //定义两个变量,分别表示出现最大次数和对应的字符。
        var maxCount = 0,
          maxCountChar = "";
        //处理成数组，调用sort()函数排序，再处理成字符串
        str = str.split("").sort().join("");
        for (var i = 0, j = str.length; i < j; i++) {
          var char = str[i];
          //计算每个字符出现的次数
          var charCount = str.lastIndexOf(char) - i + 1;
          //与次数最大值进行比较
          if (charCount > maxCount) {
            //更新maxCount与maxCountChar的值
            maxCount = charCount;
            maxCountChar = char;
          }
          //变更索引为字符出现的最后位置
          i = str.lastIndexOf(char);
        }
        return "出现最多的字符是" + maxCountChar + ",出现次数为" + maxCount;
      }
      console.log(getMaxCount("caa"));

```

**去除字符串中重复的字符**

假如存在一个字符串`"javascriptjavaabc"`, 其中存有重复的字符，现在需要将这些重复的字符去掉，只保留一个。

```
 function removeStringChar(str) {
        //结果数组
        var result = [];
        //key-value形式的对象
        var json = {};
        for (var i = 0; i < str.length; i++) {
          //当前处理的字符
          var char = str[i];
          //判断是否在对象中
          if (!json[char]) {
            //将value值设置为true
            json[char] = true;
            //添加到结果数组中
            result.push(char);
          }
        }
        return result.join("");
      }
      var str = "javascriptjavaabc";
      console.log(removeStringChar(str));

```

**算法 2**

这里可以使用`ES6`中的`Set`数据结构，可以结构具有自动去重的特性，可以直接将数组元素去重。

下面先来看一下`Set`的基本使用方式

```
const set = new Set([1,2,3,4,4,]);
//console.log(set)  // Set(4) {1, 2, 3, 4}
[...set] // [1, 2, 3, 4] 通过扩展运算符将set中的内容转换成数组，同时可以看到已经去重。

```

基本思路：

（1）将字符串处理成数组，然后作为参数传递给`Set`的构造函数，通过`new`运算符生成一个`Set`实例。

(2) 将`Set`通过扩展运算符 (…) 转换成数组的形式，最终转换成字符串获得需要的结果。

```
 function removeStringChar(str) {
        let set = new Set(str.split(""));
        return [...set].join("");
      }
      var str = "javascriptjavaabc";
      console.log(removeStringChar(str));

```

**判断一个字符串是否为回文字符串**

回文字符串指的是一个字符串正序和倒序是相同的，例如字符串`abcdcba`是一个回文字符串，而字符串`abcedba`就不是一个回文字符串。

需要注意的是，这里不区分字符的大小写，即`a`和`A`在判断的时候是相等的。

**算法 1**

主要思想是将字符串按从前往后顺序的字符与按从后往前顺序的字符逐个进行比较，如果遇到不一样的值则直接返回`false`, 否则返回`true`.

```
 function isEequStr(str) {
        //空字符串则直接返回true
        if (!str.length) {
          return true;
        }
        //统一转换成小写，同时再将其转换成数组
        str = str.toLowerCase().split("");
        var start = 0,
          end = str.length - 1;
        //通过while循环，判断正序和倒序的字母
        while (start < end) {
          // 如果相等则更改比较的索引
          if (str[start] === str[end]) {
            start++;
            end--;
          } else {
            return false;
          }
        }
        return true;
      }
      var str = "abcdcba";

```

**算法 2**

思想：将字符串进行逆序的处理，然后与原来的字符串进行比较，如果相等则表示是回文字符串，否则不是回文字符串。

```
function isEequStr(str) {
        //字符串统一转换成小写的形式
        str = str.toLowerCase();
        //将字符串转换成数组
        var arr = str.split("");
        //将数组逆序并转换成字符串
        var reverseStr = arr.reverse().join("");
        return str === reverseStr;
      }
      console.log(isEequStr("abccba"));

```

2、运算符
-----

在`JavaScript`中的运算符包括：算术运算符，关系运算符，等于运算符，位运算符 (与、或、非) 等

### 2.1 等于运算符

在`JavaScript`中等于分为双等 () 比较，和三等于 (=) 比较。

#### 2.1.1 三等于运算符

(1) 如果比较的值类型不相同，则直接返回`false`

```
1==='1' //false
true==='true' //false

```

这里还需要注意的一点就是，基本数据类型存在包装类型，在没有使用`new`操作符时，简单类型的比较实际上就是值的比较，而使用了`new`操作符以后，实际得到的是引用类型的值，在判断时会因为类型不同而直接返回`false`

```
1===Number(1) //true
1===new Number(1) //false
'hello'===String('hello') //true
'hello'===new String('hello') //false

```

(2) 如果比较的值都是数值类型，则直接比较值的大小，相等则返回`true`, 否则返回`false`, 需要注意的是，如果参与比较的值中有任何一方为`NaN`, 则返回`false`

```
26===26 //true
34===NaN //false

```

（3）如果比较的值是字符串类型，则判断每个字符是否相等，如果全部相等，返回`true`, 否则返回`false`

```
'abc'==='abc' //true
'abc'==='abd' //false


```

（4）关于`null`与`undefined`比较

```
null===null //true
undefined===undefined //true
undefined===null //false

```

(5) 如果比较的值都是引用类型，则比较的是引用类型的地址，当两个引用指向同一个地址时，则返回`true`, 否则返回`false`

```
var a=[]
var b=a
var c=[]
console.log(a===b) //true
console.log(a===c) //false

new String('hello')===new String('hello')//false 两个不同对象，地址不相同
//创建构造函数


```

```
 function Person(userName) {
        this.userName = userName;
      }
      var p1 = new Person("wangwu");
      var p2 = new Person("wangwu");
      console.log(p1 === p2);//false  两个不同对象，地址不相同

```

#### 2.1.2 双等于运算符

相比于三等于运算符，双等于运算符在进行相等比较的时候，要复杂一点。因为它不区分数据类型，而且会做隐式类型的转换。

双等于在进行比较的时候要注意的点：

如果比较的值类型不相同，则会按照下面的规则进行转换后再进行比较

(1) 如果比较的一方是`null`或者是`undefined`, 只有在另一方是`null`或者是`undefined`的情况下才返回`true`, 否则返回`false`

```
null==undefined //true
null==1 //false
undefined==2 //false

```

（2）如果比较的是字符串和数值类型数据，则会将字符串转换为数值后再进行比较，如果转换后的数值是相等的则返回`true`, 否则返回`false`.

```
1=='1' //true
'222'==222 //true

```

（3）如果比较的时候，有一方的类型是`boolean`类型，会将`boolean`类型进行转换，`true`转换为 1,`false`转换 0，然后在进行比较。

```
'1'==true
'2'==true //false
'0'==false //true

```

### 2.2 typeof 运算符

`typeof`运算符用于返回对应的数据类型，

基本的使用方式

```
typeof operator
typeof (operator)

```

`operator`表示要返回类型的操作数，可以是引用类型，也可以是基本数据类型。

括号有时候是必须的，如果不加上括号将会因为优先级的问题，而得不到我们想要的结果。

下面我们看一下`typeof`的使用场景

（1）处理`Undefined`类型

我们知道`Undefined`类型的值只有一个`undefined`,`typeof`运算符在处理如下情况的时候，返回的结果都是`undefined`

```
处理undefined本身
未声明的变量
已经声明但是没有初始化的变量

```

```
typeof undefined //"undefined"
typeof abc //"undefined" ,未声明的变量abc，通过typeof返回的是undefined

var sum
typeof sum //undefined  已经声明但是没有初始化的变量

```

(2) 处理`Boolean`类型的值

`Boolean`类型的值有两个，分别是`true`和`false`,`typeof`运算符在处理这两个值的时候返回都是`boolean`

```
var b=true
typeof b //"boolean"

```

(3) 处理`Number`类型的值

对于`Number`类型的数，`typeof`运算符在处理时会返回`number`

```
typeof 666 //number
typeof 66.66 //number

```

（4）处理`String`类型的值

字符串类型，`typeof`返回的是`string`, 包括空字符串。

```
typeof 'aaa' //string
typeof '' //string

```

(5) 处理`Function`类型的值

函数的定义，包括函数的声明，`typeof`返回的值`function`

```
function fun(){}
typeof fun // "function"

var fun2=function(){}
typeof fun2 // "function"

```

关于通过`class`关键字定义的类，通过`typoef`计算返回的值也是`function`

```
class Obj{
}
typeof Obj // "function"

```

`class`是在`ES6`中新增的一个关键字，原理依旧是原型继承，也就是说本质上仍然是一个`Function`

(6) 处理`Object`类型的值

对象字面量的形式，返回的是`object`

```
var obj={userName:'zhangsan'}
typeof obj //"object"

```

数组，通过`typeof`计算返回的值是`object`

```
var arr=[1,2,3]
typeof arr // "object"

var arr2=new Array()
typeof arr2 //"object"

```

(7) `typeof`运算符对`null`的处理

`typeof`运算符对`null`的处理，返回的是`object`

```
typeof null //object

```

注意：在前面我们提到过，在使用`typeof`的时候，括号有时候是必须的，如果不加上括号会因为优先级问题，得不到我们想要的结果。

例如如下代码所示：

```
var num=123
typeof (num + 'hello')// string
typeof num + " hello"  //"number hello"

```

通过上面的代码，我们知道`typeof`运算符的优先级要高于字符串的拼接运算符`(+)`, 但是优先级低于小括号，所以在未使用括号时，会优先处理`typeof num`, 返回的是`number`, 然后与`hello`字符串进行拼接，得到的最终的结果就是`number hello`

下面，我们再来看一段代码

```
typeof 6/2 // NaN

```

在上面的代码中，会先执行`typeof 6` 得到的结果为`number`, 然后除以 2，一个字符串除以 2，得到的结果为`NaN`

```
typeof (6/2) //"number"

```

这里会先计算括号中的内容，然后在通过`typeof`进行计算。

3、常用的判空方法
---------

在`JavaScript`中判断一个变量是否为空，我们往往会想到对变量取反，然后判断是否为`true`

```
if(!x){ }

```

这是一个非常简单的判断变量是否为空的方法，但是其实涉及到的场景却很多，这里我们就分情况来看一下。

**（1）判断变量为空对象**

**判断变量为`null`或者为`undefined`**

判断一个变量是否为空时，可以直接将变量与`null`或者是`undefined`进行比较，需要注意的是双等号和三等好直接的区别。

```
if(obj==null) //可以判断null或者是undefined的情况
if(obj===undefined) //只能判断undefined的情况    

```

**判断变量为空对象`{ }`**

判断一个变量是否为空对象时，可以通过`for...in`语句遍历变量的属性，然后调用`hasOwnProperty( )`函数，判断是否有自身存在的属性，如果存在就不是空对象，如果不存在自身的属性（不包括继承的属性），那么变量为空对象。

```
function isEmpty(obj) {
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            return false;
          }
        }
        return true;
      }

 var obj = {
        username: "zhangsan",
      };
      console.log(isEmpty(obj));// false,表明obj这个对象是有自己的属性，所以不是空对象

```

```
 var obj = {};
      console.log(isEmpty(obj));//true,这里将obj对象的属性去掉了，返回的值为true,表明没有自己的属性，表示空对象

```

```
//这里通过构造函数的形式创建对象，并且指定了age属性
      function Person() {
        this.age = 20;
      }

      var p = new Person();
      console.log(isEmpty(p));//false

```

下面看一下另外一种情况

```
function Person() {}
      Person.prototype.userName = "zhangsan";
      var p = new Person();
      console.log(isEmpty(p)); //true

```

在上面的代码中，变量`p`是通过`new`操作符得到的`Person`对象的实例，所以`p`会继承`Person`原型链上的`userName`属性，但是因为不是自身的属性，所以会被判断为空，所以返回`true`.

**(2) 判断变量为空数组**

判断变量是否为空数组时，首先要判断变量是否为数组，然后通过数组的`length`属性确定。(**`instanceof` 用于判断一个变量是否某个对象的实例**)

```
var arr=new Array()
arr instanceof Array && arr.length===0

```

以上两个条件都满足时，变量就是一个空数组。

**(3) 判断变量为空字符串**

判断变量是否为空字符串时，可以直接将其与空字符串进行比较，或者调用`trim()`函数去掉前后的空格以后，在去判断字符串的长度。

```
str==''||str.trim().length==0

```

当满足以上两个条件中的任意一个时，变量就是一个空字符串。

**（4）判断变量为 0 或者`NaN`**

当一个变量为`Number`类型时，判断变量是否为 0 或者`NaN`, 因为`NaN`与任何值比较都是`false`, 所以这里我们通过取非来完成判断。

```
!(Number(num)&&num)==true

```

当上述代码返回的结果为`true`，表明变量为 0 或者是`NaN`

（5）

在最开始的时候，我们提到的

在`JavaScript`中判断一个变量是否为空，我们往往会想到对变量取反，然后判断是否为`true`

```
if(!x){
    
}

```

这种方式会包含多种情况，下面我们总结一下：

```
变量为null
变量为undefined
变量为空字符串''
变量为数字0
变量为NaN

```

4、流程控制
------

关于流程控制这块内容，这里我们重点看一下`Switch`结构

看一下如下代码执行的结果

```
  <script>
      function getStringValue(str) {
        switch (str) {
          case "1":
            console.log("a");
            break;
          case "2":
            console.log("b");
            break;
          case "3":
            console.log("c");
            break;
          default:
            console.log("d");
        }
      }
      getStringValue("2"); //b
      getStringValue("5"); //d
    </script>

```

以上的代码非常简单。分别输出的是`b`和`d`

但是，这里我们把对`getStringValue`函数的调用修改成如下的形式：

```
getStringValue(3) //d

```

这里将参数修改成数字 3，得到的结果是`d`. 原因是：在`JavaScript`中的关于`case`的比较是采用严格相等的方式 (===)。在上面的函数调用中，传递的是数字类型的 3，而在`case`中比较的是`String`字符串的’3’, 两者按照严格方式进行对比，是不相等的。所以只能执行`default`, 输出字母`d`.

下面，再来看如下的调用

```
 getStringValue(String("3")); //c

```

上面调用的结果是`c`.

在前面的课程中，我们讲解过：字符串的字面量和直接调用`String( )`函数生成的字符串都是基本的字符串，它们在本质上都是一样的。

所以在严格模式下进行比较是相等的。

```
String('3')==='3' //true

```

下面再来看另外一种调用方式

```
 getStringValue(new String("3")); //d

```

通过`new`关键字创建的是字符串对象，这里采用严格模式进行比较，比较的是字符串对象的内存地址是否相同。而当与字符串的字面量进行比较时，会返回`false`.

```
new String('3')==='3' //false

```

所以在运行整个`getStringValue`整个函数的时候，得到的结果为`d`.

二、引用数据类型
========

引用类型有`Object`,`Function`,`Array`,`Date`，`Math`等。

引用类型与基本数据类型的区别:

(1) 引用数据类型的实例需要通过`new`关键字创建。

(2) 将引用数据类型赋值给变量，实际上赋值的是内存地址

(3) 引用数据类型的比较是对内存地址的比较，而基本数据类型的比较是对值的比较。

1、Object 类型
-----------

`Object`类型是`JavaScript`中使用最多的一个类型。

大部分的引用数据类型都是`Object`类型。

由于引用数据类型的实例都是通过`new`关键字来创建的，所以我们先来探讨有关`new`操作相关的问题。

### 1.1 new 操作符的作用

`new`操作符在执行过程中会改变`this`的指向，所以下面我们先来看一下`this`的用法。

```
   <script>
      function Person(userName, age) {
        this.userName = userName;
        this.age = age;
      }
      console.log(new Person("zhangsan", 20));
    </script>

```

执行上面的代码，发现输出的是一个`Person`对象，包含了`userName`和`age`的数据。

但是，问题是，在构造函数`Person`中，我们没有添加`return`, 为什么会有返回值呢？

其实就是`this`这个关键字起作用。

```
  <script>
      function Person(userName, age) {
        console.log(this);//输出的是Person{ }对象
        this.userName = userName;
        this.age = age;
      }
      new Person("zhangsan", 20);
    </script>

```

执行上面的代码，我们可以看到`this` 这里就是一个`Person`的空对象，后面的两行代码就相当于给`Person`对象添加了`userName`和`age`这两个属性。

下面我们把代码修改成如下的形式：

```
 <script>
      function Person(userName, age) {
        var Person = {};
        Person.userName = userName;
        Person.age = age;
      }
      console.log(new Person("zhangsan", 20));
    </script>

```

以上打印的结果中，输出的是`Person{}`，并没有包含`userName`和`age`, 原因是什么呢？

因为在 构造函数中如果没有添加`return`, 则默认返回的是`return this`.

修改后的代码如下：

```
  <script>
      function Person(userName, age) {
        var Person = {};
        Person.userName = userName;
        Person.age = age;
        return Person;
      }
      console.log(new Person("zhangsan", 20));
    </script>

```

对`this`有了一个简单的了解以后，下面重点看如下代码

```
var person= new Person("zhangsan", 20)

```

从上面的代码中，主要的作用就是创建一个`Person`对象，然后赋值给了`person`这个变量，该变量中包含了`Person`对象中的属性和函数。

其实，在`new`操作符做了如下 3 件事情。

```
var person={};
person.__proto__=Person.prototype;
Person.call(person)

```

### 1.2 原型对象理解

#### 函数对象的 prototype 属性

我们创建的每一个函数都有一个 `prototype` 属性，这个属性是一个指针，指向一个对象。这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法，简单来说，该函数实例化的所有对象的`__proto__`的属性指向这个对象，它是该函数所有实例化对象的原型。

```
function Person(){

}

// 为原型对象添加方法
Person.prototype.sayName = function(){
    alert(this.name);
}

```

下面我们来看一下它们之间的关系。

[外链图片转存失败, 源站可能有防盗链机制, 建议将图片保存下来直接上传 (img-vcqpGHXZ-1664603491529)(images/prototype.png)]

**简易图**

[外链图片转存失败, 源站可能有防盗链机制, 建议将图片保存下来直接上传 (img-pU3lVZal-1664603491530)(images \ 简易 prototype.png)]

#### constructor 属性

当函数创建，`prototype` 属性指向一个原型对象时，在默认情况下，这个原型对象将会获得一个 constructor 属性，这个属性是一个指针，指向 `prototype` 所在的函数对象。

拿前面的一个例子来说 `Person.prototype.constructor` 就指向 `Person` 函数对象。

```
console.log(Person.prototype.constructor == Person) 

```

下面我们来更新一下它们之间的关系图。

[外链图片转存失败, 源站可能有防盗链机制, 建议将图片保存下来直接上传 (img-8YCjmx7g-1664603491530)(images\constructor.png)]

```
**简易图**

```

[外链图片转存失败, 源站可能有防盗链机制, 建议将图片保存下来直接上传 (img-JXlT5uGA-1664603491530)(images\constructor.jpg)]

#### 对象的 `__proto__` 属性

当我们调用构造函数创建一个新实例后，在这个实例的内部将包含一个指针，指向构造函数的原型对象.

根据前面的 `Person` 构造函数我们新建一个实例

```
var student = new Person();

console.log(student.__proto__ === Person.prototype); // true


```

从上面我们可以看出，这个连接是存在与实例与构造函数的原型对象之间的，而不是存在于实例和构造函数之间的。

下面我们来看一下现在这几个对象之间的关系

[外链图片转存失败, 源站可能有防盗链机制, 建议将图片保存下来直接上传 (img-aOpCMoGd-1664603491530)(images/proto.png)]

`isPrototypeOf()` 方法用于测试一个对象是否存在于另一个对象的原型链上。

```
console.log(Person.prototype.isPrototypeOf(student)); // true

```

**简易图**

[外链图片转存失败, 源站可能有防盗链机制, 建议将图片保存下来直接上传 (img-reBR8vDE-1664603491531)(images\proto.jpg)]

### 1.3 原型属性

##### 属性访问

每当代码读取对象的某个属性时，首先会在对象本身搜索这个属性，如果找到该属性就返回该属性的值，如果没有找到，则继续搜索该对象对应的原型对象，以此类推下去。

因为这样的搜索过程，因此我们如果在实例中添加一个属性时，这个属性就会屏蔽原型对象中保存的同名属性，因为在实例中搜索到该属性后就不会再向后搜索了。

##### 属性判断

既然一个属性既可能是实例本身的，也有可能是其原型对象的，那么我们该如何来判断呢？

在属性确认存在的情况下，我们可以使用 `hasOwnProperty()` 方法来判断一个属性是存在与实例中，还是存在于原型中

```
function Person() {};

Person.prototype.name = "laker" ;

var student = new Person();

console.log(student.name); // laker
console.log(student.hasOwnProperty("name")); // false


student.name = "xiaoming";
console.log(student.name); //xiaoming 屏蔽了原型对象中的 name 属性
console.log(student.hasOwnProperty("name")); // true

```

```
function hasPrototypeProperty(object, name){
    return !object.hasOwnProperty(name) && (name in object);
}

```

##### 所有属性获取

```
  function Person() {
        this.name = "KXY";
      }
      Person.prototype = {
        job: "student",
      };

      var kxy = new Person();
      Object.defineProperty(kxy, "sex", {
        value: "female",
        enumerable: false,
      });

      console.log(Object.keys(kxy)); //["name"] //无法获取不可枚举的属性与原型链上继承的属性
      console.log(Object.getOwnPropertyNames(kxy));//["name", "sex"]
//for...in能获取原型链上继承的属性，无法获取不可枚举的属性
 	for (var pro in kxy) {
        console.log("kxy." + pro + " = " + kxy[pro]);// kxy.name = KXY
        //kxy.job = student
      }

```

**怎样判断属性是否为实例属性并且是否可枚举**

如果想判断指定名称的属性是否为实例属性并且是否可枚举的，可以使用`propertyIsEnumerable`

```
 function Student(userName) {
        this.userName = userName;
      }
      Student.prototype.sayHello = function () {
        console.log("hello" + this.userName);
      };
      var stu = new Student();
      console.log(stu.propertyIsEnumerable("userName")); //true:userName为自身定义的实例属性
      console.log(stu.propertyIsEnumerable("age")); // false:age属性不存在，返回false
      console.log(stu.propertyIsEnumerable("sayHello")); // false :sayHello属于原型上的函数
      //将userName属性设置为不可枚举
      Object.defineProperty(stu, "userName", {
        enumerable: false,
      });
      console.log(stu.propertyIsEnumerable("userName")); // false: userName设置了不可枚举

```

### 1.4 `Object.create( )`方法

#### 基本使用

该函数的主要作用是创建并返回一个指定原型和指定属性的新对象，语法格式如下：

```
Object.create(prototype,propertyDescriptor)

```

`prototype`属性为对象的原型（必须），可以为`null`, 如果为`null`，则对象的原型为`undefined`.

`propertyDescriptor`表示的是属性描述符（可选），具体的格式如下：

```
propertyName:{
    value:'',
    writable:true,
    enumerable:true,
    configurable:true 
}

```

基本实现：

```
 <script type="text/javascript">
      const person = {
        userName: "zhangsan",
        sayHello: function () {
          console.log("hello " + this.userName);
        },
      };
      const stu = Object.create(person);
      stu.userName = "lisi";
      stu.sayHello(); //hello lisi  覆盖了person中的userName属性原有的值
    </script>

```

通过以上的代码，可以看到`stu`对象的原型是`person`. 也就是`stu.__proto__===person`

下面再来看一个案例：

```
var obj = Object.create(null, {
        userName: {
          value: "wangwu",
          writable: true,
          enumerable: true,
          configurable: true,
        },
        age: {
          value: 23,
        },
      });
      console.log(obj.userName);
      console.log(obj.age); 
      obj.age = 26;
      console.log(obj.age); 
      for (var o in obj) {
        console.log(o);
      }
      delete obj.userName;
      console.log(obj.userName); 
      delete obj.age;
      console.log(obj.age); 

```

#### 实现原理

通过如下的伪代码来查看对应的实现原理

```
Object.create=function(proto,propertiesObject){
    //省略了其它判断操作
    function F(){}
    F.prototype=proto;
    if(propertiesObject){ Object.defineProperties(F, propertiesObject)}
    return new F()
}

```

通过以上的代码，我们可以得出如下的结论：

```
var f=new F()
f.__proto__===F.prototype

```

下面我们可以通过一个例子来验证一下：

```
 var obj = { x: 12, y: 13 };
      var test = Object.create(obj);
      console.log(test); 
      console.log(test.x); 
      console.log(test.__proto__.x);

```

**最后，这里演示一下`Object.defineProperties`方法的基本使用**

该方法的主要作用就是添加或修改对象的属性。

如下代码所示：

```
var person = {};
     
      Object.defineProperties(person, {
        userName: {
          value: "张三",
          enumerable: true,
        },
        age: {
          value: 12,
          enumerable: true,
        },
      });
      for (var p in person) {
        console.log(p); 
      }
      person.age = 20;
      console.log(person.age); 

```

#### 应用场景

对于`Object.create`方法很重要的一个应用场景是用来实现继承

```
function Person(name, sex) {
        this.name = name;
        this.sex = sex;
      }
      Person.prototype.getInfo = function () {
        console.log("getInfo: [name:" + this.name + ", sex:" + this.sex + "]");
      };
      var a = new Person("jojo", "femal");
      var b = Object.create(Person.prototype);
console.log(a.name); 
      console.log(b.name); 
      console.log(b.getInfo); 

```

下面看一下怎样实现完整的继承操作。

```
function Person(name, sex) {
        this.name = name;
        this.sex = sex;
      }
      Person.prototype.getInfo = function () {
        console.log("getInfo: [name:" + this.name + ", sex:" + this.sex + "]");
      };
      function Student(name, sex, age) {
        Person.call(this, name, sex); 
        this.age = age;
      }
      Student.prototype = Object.create(Person.prototype); 
      var s = new Student("coco", "femal", 25);
      s.getInfo();

```

下面，我们简单的分析一下，上面的代码。

对象`s`的`__proto__`指向的是`s`的构造函数`Student`的`prototype`

```
s.__proto__===Student.prototype 

```

那么`Student.prototype`的`__proto__`指向什么呢？

```
Student.prototype.__proto__===Person.prototype 

```

```
s.__proto__.__proto__===Person.prototype 

```

而我们知道对象`s`是有`Student` 创建的，所以其构造函数为`Student`, 所以我们在修改了原型以后，这里应该重新修正构造函数。

```
function Person(name, sex) {
        this.name = name;
        this.sex = sex;
      }
      Person.prototype.getInfo = function () {
        console.log("getInfo: [name:" + this.name + ", sex:" + this.sex + "]");
      };
      function Student(name, sex, age) {
        Person.call(this, name, sex); 
        this.age = age;
      }
      Student.prototype = Object.create(Person.prototype);
      Student.prototype.constructor = Student;     
      var s = new Student("coco", "femal", 25);
      s.getInfo();

```

### 1.5 `Object.create( )`与`new Object()`的区别

### 1.6 模拟`new`操作符的实现

在前面我们介绍了`new`操作符所做的三件事情，下面我们来模拟实现一下。

```
 function Person(name, age) {
        this.name = name;
        this.age = age;
      }
      function New() {
        var obj = {};
            var res = Person.apply(obj, arguments);
             return typeof res === "object" ? res : obj;
      }
      console.log(New("zhangsan", 19));

```

### 1.7 原型链理解

下面我们通过一个案例来看一个简单的原型链过程。初步代码如下

```
var A=function(){ }
var a=new A( );

```

通过`a` 实例沿着原型链第一次的追溯，`__proto__`属性指向`A()`构造函数的原型对象。

```
a.__proto__===A.prototype 

```

`a`实例沿着原型链第二次的追溯，`A`原型对象的`__proto__`属性指向`Object`类型的原型对象.

```
a.__proto__.__proto__===A.prototype.__proto__ 
A.prototype.__proto__===Object.prototype

```

`a` 实例沿着原型链第三次追溯，`Object`类型的原型对象的`__proto__`属性为`null`

```
a.__proto__.__proto__.__proto__===Object.prototype.__proto__
Object.prototype.__proto__===null


```

具体的图如下所示：

[外链图片转存失败, 源站可能有防盗链机制, 建议将图片保存下来直接上传 (img-920I6ovj-1664603491531)(images / 原型链 1.png)]

下面，我们再来看一个案例：

```
function Super(){

};

function Middle(){

};
function Sub(){

};

Middle.prototype = new Super();
Sub.prototype = new Middle();
var suber = new Sub();

```

对应的原型链如下图所示：

[外链图片转存失败, 源站可能有防盗链机制, 建议将图片保存下来直接上传 (img-QmPlSwnu-1664603491532)(images / 原型链 2.png)]

上面的图其实并不完整，因为漏掉了`Object`. 所以完整的图如下

[外链图片转存失败, 源站可能有防盗链机制, 建议将图片保存下来直接上传 (img-1MBoCLNO-1664603491532)(images / 原型链 3.png)]

通过以上内容的讲解，我们对原型链有了更加深入的理解。

### 1.8 原型链特点

关于原型链的特点，主要有两个

第一个特点：由于原型链的存在，属性查找的过程不再只是查找自身的原型对象，而是会沿着整个原型链一直向上，直到追溯到`Object.prototype`. 也就是说，当`js`引擎在查找对象的属性时，先查找对象本身是否存在该属性，如果不存在，会在原型链上查找，直到`Object.prototype`. 如果`Object.prototype`上也找不到该属性，则返回`undefined`, 如果期间在对象本身找到了或者是某个原型对象上找到了该属性，则会返回对应的结果。

由于这个特点，我们在自定义的对象中，可以调用某些未在自定义构造函数中定义的函数，例如`toString( )`函数。

```
function Person(){ }
var p = new Person();
p.toString(); // 实际上调用的是Object.prototype.toString( )

```

第二个特点：由于属性查找会经历整个原型链，因此查找的链路越长，对性能的影响越大。

### 1.9 属性的区分

对象属性的查找往往会涉及到整个原型链，那么应该怎样区分属性是实例自身的还是从原型链中继承的呢？

关于这个问题，前面我们也已经讲解过，是通过`hasOwnProperty( )`函数来完成的，这里我们在简单的复习强调一下。

```
 function Person(name, age) {
        this.name = name;
      }
      //在对象的原型上添加age属性
      Person.prototype.age = 21;
      var p = new Person("zhangsan");
      console.log(p.hasOwnProperty("name")); //true
      console.log(p.hasOwnProperty("age")); //false

```

`name`属性为实例属性，在调用`hasOwnProperty`方法时，会返回`true`。`age`属性为原型对象上的属性，在调用`hasOwnProperty`函数时，会返回`false`.

在使用`for...in`运算符，遍历对象的属性时，一般可以配合`hasOwnProperty`方法一起使用，检测某个属性是否为对象自身的属性，如果是，可以做相应的处理。

```
for(var p in person){
    if(person.hasOwnProperty(p)){
        
    }
}

```

2、Array 类型
----------

`Array`类型中提供了丰富的函数用于对数组进行处理，例如，过滤，去重，遍历等等操作。

### 2.1 怎样 判断一个变量是数组还是对象

这里，我们可能会想到使用`typeof`运算符，因为`typeof`运算符是专门用于检测数据类型的，但是`typeof`运算符能够满足我们的需求吗？

```
      var a = [1, 2, 3];
      console.log(typeof a); 

```

#### 2.1.1 `instanceof`运算符

`instanceof`运算符用于通过查找原型链来检查某个变量是否为某个类型数据的实例，使用`instanceof`运算符可以判断一个变量是数组还是对象。

```
    var a = [1, 2, 3];
      console.log(a instanceof Array); // true
      console.log(a instanceof Object); // true

  var userInfo = { userName: "zhangsan" };
      console.log(userInfo instanceof Array); // false
      console.log(userInfo instanceof Object); // true

```

这里我们可以封装一个函数，用于判断变量是数组类型还是对象类型。

```
    var a = [1, 2, 3];
      function getType(o) {
        if (o instanceof Array) {
          return "Array";
        } else if (o instanceof Object) {
          return "Object";
        } else {
          return "参数类型不是Array也不是Object";
        }
      }
      console.log(getType(a));

```

#### 2.1.2 通过构造函数来判断

判断一个变量是否是数组还是对象，其实就是判断变量的构造函数是`Array`类型还是`Object`类型。

因为一个对象的实例都是通过构造函数创建的。

```
 var a = [1, 2, 3];
      console.log(a.__proto__.constructor === Array); 

```

```
 console.log(a.__proto__.constructor === Object); // false

```

同样这里，这里我们也可以封装一个函数，来判断变量是数组类型还是对象类型。

```
    function getType(o) {
        //获取构造函数
        var constructor = o.__proto__.constructor;
        if (constructor === Array) {
          return "Array";
        } else if (constructor === Object) {
          return "Object";
        } else {
          return "参数类型不是Array也不是Object";
        }
      }
      var a = [1, 2, 3];
      console.log(getType(a));

```

#### 2.1.3 通过`toString( )`函数来判断

我们知道，每种引用类型都会直接或间接继承`Object`类型，因此它们都包含`toString( )`函数。

不同数据类型的`toString( )`函数返回值也不一样，所以通过`toString( )`函数就可以判断一个变量是数组还是对象，当然，这里我们需要用到`call`方法来调用`Object`原型上的`toString( )`函数来完成类型的判断。

如下所示：

```
  var arr = [1, 2, 3];
      var obj = { userName: "zhangsan" };
      console.log(Object.prototype.toString.call(arr)); //[object Array]
      console.log(Object.prototype.toString.call(obj)); // [object Object]
 console.log(arr.toString()); // 1,2,3

```

#### 2.1.4 通过`Array.isArray( )`函数来判断

`Array.isArray` 方法用来判断变量是否为数组。

```
    var arr = [1, 2, 3];
      var obj = { name: "zhangsan" };
      console.log(Array.isArray(1)); //false
      console.log(Array.isArray(arr)); //true
      console.log(Array.isArray(obj)); //false

```

### 2.2 怎样过滤数组中满足条件的数据

对数组中的数据进行过滤，我们使用比较多的是`filter`方法。

```
<script>
      var fn = function (x) {
        return x % 2 !== 0;
      };
      var arr = [1, 2, 5, 6, 78, 9, 10];
      var result = arr.filter(fn);
      console.log(result);
    </script>

```

下面，我们再来看一下针对复杂类型数组的过滤。

下面案例是查找出年龄大于 16 的男生的信息。

```
 var arr = [
        { gender: "男", age: 15 },
        { gender: "男", age: 17 },
        { gender: "女", age: 15 },
      ];
      var fn = function (obj) {
        return obj.gender === "男" && obj.age > 16;
      };
      const result = arr.filter(fn);
      console.log(result);

```

### 2.3 怎样对数组元素做累加处理

对数组中的元素做累加的处理，可以通过`reduce`函数来完成。

`reduce`函数最主要的作用就是做累加的操作，该函数接收一个函数作为累加器，将数组中的每个元素从左到右依次执行累加器，返回最终的处理结果。

`reduce`函数的语法如下：

```
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

```

求出数组中所有元素累加的和

```
 var arr = [1, 2, 3, 4, 5, 6];
      var sum = arr.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
      console.log(sum);

```

### 2.4 怎样求数组中的最大值与最小值

关于查询出数组中的最大值与最小值的实现方式有很多种，下面我们来看一下具体的实现。

第一：通过`prototype`属性扩展`min`函数和`max`函数来实现求最小值与最大值

```
     //最小值
      Array.prototype.min = function () {
        var min = this[0];
        var len = this.length;
        for (var i = 1; i < len; i++) {
          if (this[i] < min) {
            min = this[i];
          }
        }
        return min;
      };
      //最大值
      Array.prototype.max = function () {
        var max = this[0];
        var len = this.length;
        for (var i = 1; i < len; i++) {
          if (this[i] > max) {
            max = this[i];
          }
        }
        return max;
      };
      var arr = [1, 3, 6, 90, 23];
      console.log(arr.min()); // 1
      console.log(arr.max()); // 90

```

第二：通过数组的`reduce`函数来完成。

```
     Array.prototype.max = function () {
        return this.reduce(function (preValue, currentValue) {
          return preValue > currentValue ? preValue : currentValue; //返回最大的值
        });
      };
      Array.prototype.min = function () {
        return this.reduce(function (preValue, currentValue) {
          return preValue < currentValue ? preValue : currentValue; // 返回最小的值
        });
      };
      var arr = [1, 3, 6, 90, 23];
      console.log(arr.min()); //
      console.log(arr.max()); //

```

第三：通过`ES6`中的扩展运算符来实现

这里我们可以通过`ES6`中的扩展运算符 (…) 来实现。

```
      var arr = [1, 3, 6, 90, 23];
      console.log(Math.min(...arr)); //
      console.log(Math.max(...arr));

```

### 2.5 数组遍历的方式有哪些

数组遍历是我们针对数组最频繁的操作。下面我们看一下常见的数组的遍历方式。

#### 通过 for 循环

这时最基本的实现方式

```
var arr=[1,2,3]
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

```

#### 使用`forEach( )`函数

`forEach`函数也是我们遍历数组用的比较多的方法，`forEach( )`函数接收一个回调函数，参数分别表示当前执行的元素的值，当前值的索引和数组本身。

```
 var arr = [1, 3, 6, 90, 23];
      arr.forEach(function (element, index, array) {
        console.log(index + ":" + element);
      });

```

#### 使用`map( )`函数

`m

```
    var arr = [1, 3, 6, 90, 23];
      var result = arr.map(function (element, index, array) {
        console.log(index);
        return element * element;
      });
      console.log("result: ===", result);

```

在使用`map`函数的时候一定要注意：在`map( )`函数的回调函数中需要通过`return`将处理后的值进行返回，否则会返回`undefined`.

如下所示：

```
  var arr = [1, 3, 6, 90, 23];
      var result = arr.map(function (element, index, array) {
        // console.log(index);
        element * element;
      });
      console.log("result: ===", result);

```

在上面的计算中，将`return`关键字省略了，最终返回的结果是：

```
[undefined, undefined, undefined, undefined, undefined]

```

#### 使用`some( )`函数与`every( )`函数

`some( )`函数与`every( )`函数的相似之处都是在对数组进行遍历的过程中，判断数组中是否有满足条件的元素，如果有满足条件的就返回`true`, 否则返回`false`.

`some()`与`every()`的区别在于:`some( )`函数只要数组中某个元素满足条件就返回`true`, 不会在对后面的元素进行判断。而`every( )`函数是数组中每个元素都要满足条件时才会返回`true`.

例如：要判断数组中是否有大于 6 的元素的时候，可以通过`some( )`函数来处理。

而要判断数组中是否所有的元素都大于 6，则需要通过`every( )`函数来处理。

```
   function fn(element, index, array) {
        return element > 6;
      }
      var result = [1, 2, 3, 4, 5].some(fn); //false
      console.log(result);

```

```
  var result = [1, 2, 3, 4, 5, 7].some(fn);
      console.log(result);

```

下面测试一下`every( )`函数

```
      function fn(element, index, array) {
        return element > 6;
      }
      var result = [1, 2, 3, 4, 5, 7].every(fn); //false
      console.log(result);

```

下面修改一下数组中的元素。

```
      function fn(element, index, array) {
        return element > 6;
      }
      var result = [7, 8].every(fn); //true
      console.log(result);

```

现在数组中的元素的值都是大于 6，所以返回的结果为`true`.

#### 使用`find( )`函数

`find( )` 函数用于数组的遍历，当找到第一个满足条件的元素值时，则直接返回该元素值，如果都找不到满足条件的，则返回`undefined`.

`find( )`方法的参数与`forEach`是一样的。

```
    var arr = [1, 3, 6, 90, 23];
      const result = arr.find(function (element, index, array) {
        return element > 6;
      });
      console.log(result); // 90                                                                   

```

```
    var arr = [1, 3, 6, 90, 23];
      const result = arr.find(function (element, index, array) {
        return element > 100; //undefined
      });
      console.log(result);

```

以上就是我们比较常用的数组遍历的方式。当然还有我们前面讲解过的`filter`，`reduce`函数。

### 2.6 手动实现`find`方法

```
 <script>
      Array.prototype.findTest = function (fn) {
        for (var i = 0; i < this.length; i++) {
          var f = fn(this[i]);//把数组元素传递到函数中
          if (f) { //如果函数的返回值为true
            return this[i]; //则返回对应的数组元素
          }
        }
      };
      var arr = [1, 3, 6, 90, 23];
      var result = arr.findTest(function (item) {
        return item > 6;
      });
      console.log(result);
</script>

```

### 2.7 手动实现 filter 方法

`filter`函数内部需要一个回调函数，数组中的每个元素都会执行该回调函数，在执行回调函数时会将数组中的每个元素传递给回调函数的参数，在回调函数的函数体内进行判断，如果返回的是`true`, 那么将该元素放到新数组`arr`中，如果判断的结果为`false`，则数据不会放到新数组`arr`中。

```
 //模拟实现filter函数
      Array.prototype.filterOne = function (fn) {
        var newArray = [];
        for (var i = 0; i < this.length; i++) {
          var f = fn(this[i]);
          if (f) {
            newArray.push(this[i]);
          }
        }
        return newArray;
      };
      var array = [65, 56, 89, 53];
      var arr = array.filterOne(function (item) {
        return item >= 60;
      });
      console.log("arr=", arr);

```

### 2.8 手动实现 some 函数

`some()` 方法让数组中的每一个元素执行一次回调函数，在该回调函数中执行一些操作，只要有一个操作结果为真，就会返回 true。不会在对后面的元素进行判断, 否则返回 false。

```
   //手动模式some方法
      Array.prototype.someTest = function (fn) {
        for (let i = 0; i < this.length; i++) {
          let f = fn(this[i]);
          if (f) {
            return f;
          }
        }
        return false;
      };
      let array = [1, 3, 5, 7, 90];
      let result = array.someTest(function (item) {
        return item > 10;
      });
      console.log("result=", result);

```

### 2.9 手动实现 every 函数

该方法与`some()`方法不同，`some()`方法只要有一个符合条件就返回 true, 而 `every()` 方法是数组中所有元素都要符合指定的条件，才会返回 true.

```
  //手动模拟实现`every`方法
      Array.prototype.everyTest = function (fn) {
        let f = true;
        for (let i = 0; i < this.length; i++) {
          let f = fn(this[i]);
          if (!f) {
            //只要有一个不符合，就立即返回false.
            return false;
          }
        }
        return f;
      };
      let array = [11, 31, 5, 71, 90];
      let result = array.everyTest(function (item) {
        return item > 10;
      });
      console.log("result=", result); //false

```

### 2.10 手动实现 map 方法

`map( )`函数在对数据进行遍历的时候，会将数组中的每个元素做相应的处理，然后得到新的元素，**并返回一个新的数组**。

```
//手动实现map方法
      Array.prototype.mapTest = function (fn) {
        let newArray = [];
        for (let i = 0; i < this.length; i++) {
          let f = fn(this[i], i, this);
          newArray.push(f);
        }
        return newArray;
      };
      var arr = [1, 3, 6, 90, 23];
      var result = arr.mapTest(function (element, index, array) {
        console.log(index);
        return element * element;
      });
      console.log("result: ===", result);

```

### 2.11 手动实现 reduce 方法

```
 Array.prototype.reduceTest = function (fn, initialValue) {
        //如果没有传递initialValue,我们将使用数组的第一项作为initialValue的值
        let hasInitialValue = initialValue !== undefined;
        let value = hasInitialValue ? initialValue : this[0];
        //如果没有传递initialValue,则索引从1开始，否则从0开始
        for (let i = hasInitialValue ? 0 : 1, len = this.length; i < len; i++) {
          value = fn(value, this[i], i, this);
        }
        return value;
      };
      var arr = [1, 2, 3, 4, 5, 6];
      var sum = arr.reduceTest(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
      console.log(sum);

```

### 2.12 怎样实现数组的去重

数组去重是指当数组中出现重复的元素的时候，通过一定的方式，将重复的元素去掉。

#### 利用数组遍历去重

```
 // 数组去重
      function fn(array) {
        var newArray = [];
        for (var i = 0; i < array.length; i++) {
          if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
          }
        }
        return newArray;
      }
      var arr = [1, 2, 3, 4, 5, 5, 6];
      console.log(fn(arr));

```

#### 利用键值对去重

```
   function fn(array) {
        var obj = {},
          result = [],
          val;
        for (var i = 0; i < array.length; i++) {
          val = array[i];
          if (!obj[val]) {//根据key获取obj对象中的值
            obj[val] = "ok"; //表示该元素已经出现了
            result.push(val);
          }
        }
        return result;
      }
      var arr = [1, 2, 3, 4, 5, 5, 6];
      console.log(fn(arr));

```

```
      function fn(array) {
        var obj = {},
          result = [],
          val,
          type;
        for (var i = 0; i < array.length; i++) {
          val = array[i];
          type = typeof val;
          if (!obj[val]) {
            obj[val] = [type];
            result.push(val);
          } else if (obj[val].indexOf(type) < 0) {
            obj[val].push(type);
            result.push(val);
          }
        }
        return result;
      }
      var arr = [1, 2, 3, 4, 5, 5, 6, "6"];
      console.log(fn(arr));

```

#### 使用`Set`数据结构去重

具体的代码如下所示：

```
   function fn(arr) {
        return Array.from(new Set(arr));
      }
      console.log(fn([1, 2, 3, 4, 5, 5, 6, "6"]));

```

### 2.13 怎样获取数组中最多的元素

#### 利用键值对实现

```
<script>
      function fn(arr) {
        //如果数组中没有值，直接返回
        if (!arr.length) return;
        //如果只有一个值，返回1，表示出现了1次
        if (arr.length === 1) return 1;
        var result = {};
        //对数组进行遍历
        for (var i = 0; i < arr.length; i++) {
          if (!result[arr[i]]) {
            result[arr[i]] = 1;
          } else {
            result[arr[i]]++;
          }
        }
        //遍历result对象
        var keys = Object.keys(result);
        var maxNum = 0,
          maxElement;
        for (var i = 0; i < keys.length; i++) {
          if (result[keys[i]] > maxNum) {
            maxNum = result[keys[i]];
            maxElement = keys[i];
          }
        }
        return (
          "在数组中出现最多的元素是" + maxElement + ",共出现了" + maxNum + "次"
        );
      }
      var array = [1, 2, 3, 3, 3, 6, 6, 6, 6, 6, 7, 8, 9];
      console.log(fn(array));
    </script>

```

#### 算法优化

```
  function fn(array) {
        var result = {};
        var maxNum = 0;
        var maxElement = null;
        for (var i = 0; i < array.length; i++) {
          var val = array[i];
          result[val] === undefined ? (result[val] = 1) : result[val]++;
          if (result[val] > maxNum) {
            maxNum = result[val];
            maxElement = val;
          }
        }
        return (
          "在数组中出现最多的元素是" + maxElement + ",共出现了" + maxNum + "次"
        );
      }
      var array = [1, 2, 3, 3, 3, 6, 6, 6, 6, 6, 7, 8, 9];
      console.log(fn(array));

```

三、函数
====

1、函数定义有哪几种实现方式
--------------

在使用函数前，先需要对函数进行定义。关于函数的定义总体上可以分为三类。

第一类是函数声明。

第二类是函数表达式

第三类是通过`Function`构造函数来完成函数的定义。

首先来看一下**函数的声明**。

函数声明是直接通过`function`关键字接一个函数名，同时可以接收参数。

```
function sum(num1, num2){
     return num1 + num2
}

```

**函数表达式**

函数表达式的形式类似于普通变量的初始化，只不过这个变量初始化的值是一个函数。如下代码所示：

```
var sum =  function (num1,num2){
    return num1 + num2
}

```

这个函数表达式没有名称，属于匿名函数表达式。

**`Function( )`构造函数**

使用`new`操作符，调用`Function('参数1'，'参数2'，'函数体（就是中括号里的内容）' )`构造函数，传入参数，也可以定义一个函数。【必须用引号引起来】

```
var sum = new Function('num1','num2', 'return a+b ')
```

其中的参数，除了最后一个参数是要执行的函数体，其它的参数都是函数的形参。

==所有的函数都是Function的实例（对象），函数也属于对象==

2、Function( ) 构造函数定义函数的问题
-------------------------

但是，我们在实际的应用中很少使用`Function( )`构造函数来实现对函数的定义。

原因是：

第一：`Function( )` 构造函数每次执行时，都会解析函数体，并创建一个新的函数对象，所以当在一个循环或者是一个频繁执行的函数中去使用`Function( )`构造函数的时候，相对来说性能是比较低的。

第二：通过`Function( )` 构造函数创建的函数，并不遵循典型的作用域。

如下代码所示：

```
    var a = "12";
      function fun() {
        var a = "11";
        return new Function("return a");
      }
      console.log(fun()());

```

3、函数表达式的应用场景
------------

关于函数表达式非常典型的应用就是实现了块级作用域

```js
  var person = (function () {
        var _name = "";
        return {
          getName: function () {
            return _name;
          },
          setName: function (userName) {
            _name = userName;
          },
        };
      })();
      person.setName("zhangsan");
      console.log(person.getName());

```

4、函数声明与函数表达式有什么区别
-----------------

函数声明与函数表达式虽然是两种定义函数的方式，但是两者之间还是有区别的。

第一点就是：函数名称

```
// 函数声明，函数名称sum是必须的
function sum (num1,num2){
	return num1 + num2 
}
// 没有函数名称的匿名函数表达式
var sum = function (num1,num2){
    return num1 + num2
}

```

第二点就是关于：函数提升

```
      console.log(add(1, 2)); // 3
      console.log(sum(3, 6)); // Uncaught TypeError: sum is not a function
      // 函数声明
      function add(num1, num2) {
        return num1 + num2;
      }
      // 函数表达式
      var sum = function (num1, num2) {
        return num1 + num2;
      };

```

5、函数常见的调用模式有哪些
--------------

**函数调用模式**

```
  function add(num1, num2) {
        return num1 + num2;
      }
      // 函数表达式
      var sum = function (num1, num2) {
        return num1 + num2;
      };

  console.log(add(1, 2)); 
 console.log(sum(3, 6));

```

**方法调用模式**

```
     var obj = {
        userName: "zhangsan",
        getUserName: function () {
          return this.userName;
        },
      };
      console.log(obj.getUserName());

```

```
 var obj = {
        userName: "zhangsan",
        getUserName: function () {
          return this.userName;
        },
      };
      // console.log(obj.getUserName());
      console.log(obj["getUserName"]());

```

```
   var obj = {
        userName: "zhangsan",
        getUserName: function () {
          return this.userName;
        },
        setUserName: function (name) {
          this.userName = name;
          return this;
        },
      };
      console.log(obj.setUserName("lisi").getUserName());// lisi

```

**构造器 (构造函数) 调用模式**

```
  //定义构造函数
      function Person(name) {
        this.userName = name; //定义属性
      }
      // 在原型上定义函数
      Person.prototype.getUserName = function () {
        return this.userName;
      };
      // 通过new来创建实例
      var p = new Person("zhangsan");
      // 调用原型上的方法
      console.log(p.getUserName());

```

```js
   function sum(num1, num2) {
        return num1 + num2;
      }
      //定义一个对象
      var obj = {};
      //通过call()和apply( )函数调用sum( )函数
      console.log(sum.call(obj, 2, 6));
      console.log(sum.apply(obj, [3, 6]));

```

**匿名函数调用模式**

所谓的匿名函数，就是没有函数名称的函数。匿名函数的调用有两种方式，一种是通过函数表达式定义函数，并赋值给变量，通过变量进行调用。如下所示：

```
//通过函数表达式定义匿名函数，并赋值给变量sum
var sum =funciton (num1,num2){
    return num1 + num2
}
// 通过sum来进行调用
sum(2,6)

```

另外一种是使用小括号`()`将匿名函数括起来，然后在后面使用小括号`( )`, 传递对应的参数从而完成对应的调用。

```
 (function (num1, num2) {
        console.log(num1 + num2);
      })(2, 6);

```

6、实参与形参有哪些区别
------------

第一：在函数的调用过程中，数据传递是单向的，也就是只能把实参的值传递给形参，而不能把形参的值反向传递给实参

第二：当实参是基本数据类型的值的时候，在向形参传递的时候，实际上是将实参的值复制一份传递给形参，在函数运行结束以后

形参释放，而实参中的值不会发生变化。当实参是引用类型的值的时候，实际是将实参的内存地址传递给形参，即实参与形参都指向了

相同的内存地址，此时形参可以修改实参的值。

```
 var person = { age: 21 };
      function fn(obj) {
        obj.age = 22;
      }
      fn(person);
      console.log(person.age);

```

第三：函数可以不用定义形参，在函数体中可以通过`arguments`对象获取传递过来的实参的值，并进行处理。

第四：在函数定义形参时，形参的个数并一定要和实参的个数相同，实参与形参会按照从前向后的顺序进行匹配，没有匹配到的形参被当作`undefined`来处理。

第五：实参并不需要与形参的数据类型一致，因为形参的数据类型只能在执行的时候才能够被确定，因为会通过隐式数据类型的转换。

7、介绍一下 arguments 对象
-------------------

`arguments`对象是所有函数都具有的一个内置的局部变量，表示的是函数实际接收到的参数，是一个类似数组的结构。

下面我们说一下`arguments`对象都具有哪些性质。

第一：`arguments`对象只能在函数内部使用，无法在函数的外部访问到`arguments`对象。同时`arguments`对象存在于函数级的作用域中。

```js
 console.log(arguments); //Uncaught ReferenceError: arguments is not defined
      function fn() {
        console.log(arguments.length);
      }
      fn(1, 2, 3);

```

第二：可以通过索引来访问`arguments`对象中的内容，因为`arguments`对象类似数组结构。

```
 function fn() {
        console.log(arguments[0]); // 1
        console.log(arguments[1]); // 2
        console.log(arguments[2]); // undefined
      }
      fn(1, 2);

```

第三：`arguments` 对象的值由实参决定，不是有形参决定。

```
  function fn(num1, num2, num3) {
        console.log(arguments.length); // 2
      }
      fn(1, 2);

```

因为`arguments`对象的`length`属性是由实际传递的实参的个数决定的，所以这里输出的是 2.

```js
    function fn(num1, num2, num3) {
        arguments[0] = 23;
        console.log("num1=", num1); //23
        num2 = 33;
        console.log(arguments[1]); // 33
      }
      fn(1, 2);

```

```js
      function fn(num1, num2, num3) {
        // arguments[0] = 23;
        // console.log("num1=", num1); //23
        // num2 = 33;
        // console.log(arguments[1]); // 33

        arguments[2] = 19;
        console.log(num3); //undefined
        num3 = 10;
        console.log(arguments[2]); // 19
      }
      fn(1, 2);

```

```js
 function fn(num1, num2, num3) {
        // arguments[0] = 23;
        // console.log("num1=", num1); //23
        // num2 = 33;
        // console.log(arguments[1]); // 33

        arguments[2] = 19;
        console.log(num3); //undefined
        num3 = 10;
        console.log(arguments[2]); // 19

        console.log(arguments.length); // 2 长度还是2
      }
      fn(1, 2);

```

8、arguments 对象有哪些应用场景
---------------------

第一：进行参数个数的判断。

```js
  function fn(num1, num2, num3) {
        // 判断传递的参数个数是否正确
        if (arguments.length !== 3) {
          throw new Error(
            "希望传递3个参数，实际传递的参数个数为:" + arguments.length
          );
        }
      }
      fn(1, 3);

```

第二：对任意个数参数的处理，也就是说只会对函数中前几个参数做特定处理，后面的参数不论传递多少个都会统一进行处理，这种情况我们可以使用`arguments`对象来完成。

```js
  function fn(sep) {
        
        var arr = Array.prototype.slice.call(arguments, 1);
        // console.log(arr); // ["a", "b", "c"]
        return arr.join(sep);
      }
      console.log(fn("-", "a", "b", "c"));

```

第三：模拟函数的重载

什么是函数的重载呢？

函数的重载指的是在函数名称相同的情况下，函数的形参的类型不同或者是个数不同。

但是在`JavaScript`中没有函数的重载。

```
      function fn(num1, num2) {
        return num1 + num2;
      }
      function fn(num1, num2, num3) {
        return num1 + num2 + num3;
      }
      console.log(fn(1, 2)); // NaN
      console.log(fn(1, 2, 3)); // 6

```

```
   function fn() {
        //将arguments对象转换成数组
        var arr = Array.prototype.slice.call(arguments);
        // console.log(arr);  // [1,2]
       //调用数组中的reduce方法完成数据的计算
        return arr.reduce(function (pre, currentValue) {
          return pre + currentValue;
        });
      }
      console.log(fn(1, 2));
      console.log(fn(1, 2, 3));
      console.log(fn(1, 2, 3, 4, 5));

```

9、说一下普通函数与构造函数的区别
-----------------

在`JavaScript`的函数中，有一类比较特殊的函数：‘构造函数’。当我们创建对象的时候，经常会使用构造函数。

构造函数与普通函数的区别：

第一：构造函数的函数名的第一字母通常会大写。

第二：在构造函数的函数体内可以使用`this`关键字，表示创生成的对象实例。

```
      function Person(userName) {
        this.userName = userName;
      }
      var person = new Person("zhangsan");
      console.log(person);

```

第三：在使用构造函数的时候，必须与`new`操作符配合使用。

第四：构造函数的执行过程与普通函数也是不一样的。

代码如下：

```
     function Person(userName) {
        this.userName = userName;
        this.sayHi = function () {
          console.log(this.username);
        };
      }
      var p1 = new Person("zhangsan");
      var p2 = new Person("lisi");
      console.log(p1.sayHi === p2.sayHi); // false

```

```
    function Person(userName) {
        this.userName = userName;
        // this.sayHi = function () {
        //   console.log(this.username);
        // };
      }
      Person.prototype.sayHi = function () {
        console.log(this.username);
      };
      var p1 = new Person("zhangsan");
      var p2 = new Person("lisi");
      console.log(p1.sayHi === p2.sayHi); // true

```

10、什么是变量提升，什么是函数提升
------------------

在`javascript`中存在一些比较奇怪的现象。在一个函数体内，变量在定义之前就可以被访问到，而不会抛出异常。

如下所示：

```
     function fn() {
        console.log(num); // undefined
        var num = 2;
      }
      fn();

```

同样函数在定义之前也可以被调用，而不会抛出异常。

如下代码所示：

```
  fn();
      function fn() {
        console.log("hello");
      }

```

导致出现以上情况的原因是，在`javascript`中存在变量提升与函数提升的机制。

在讲解变量提升之前，先来说以作用域的问题。

### 作用域

在`JavaScript`中，一个变量的定义与调用都是在一个固定的范围内的，这个范围我们称之为作用域。

作用域可以分为全局的作用域，局部作用域 (函数作用域) 和块级作用域。

如下程序：

```
 function fn() {
        var userName = "zhangsan";
        console.log(userName);
      }
      fn(); //zhangsan

```

下面，再看如下代码：

```
  var userName = "zhangsan";
      function fn() {
        console.log(userName);
      }
      fn(); //zhangsan

```

综上两个案例，我们可以总结出，**作用域本质就是一套规则，用于确定在何处以及如何查找变量的规则。**

下面，我们再来看一个比较复杂的结构图，来体验一下作用域

[外链图片转存失败, 源站可能有防盗链机制, 建议将图片保存下来直接上传 (img-BlG4CZX8-1664603491533)(images / 作用域. png)]

*   作用域链

下面，我们再来看一下前面的代码：

```
  var userName = "zhangsan";
      function fn() {
        console.log(userName);
      }
      fn(); //zhangsan

```

我们在查找`userName`这个变量的时候，现在函数的作用域中进行查找，没有找到，再去全局作用域中查找。你会注意到，这是一个往外层查找的过程，即顺着一条链条从下往上查找变量。这个链条，我们就称之为作用域链。

如下图所示：

[外链图片转存失败, 源站可能有防盗链机制, 建议将图片保存下来直接上传 (img-0Ss9A5Xa-1664603491533)(images / 作用域链. png)]

对应的代码如下：

[外链图片转存失败, 源站可能有防盗链机制, 建议将图片保存下来直接上传 (img-UnMHNG4X-1664603491533)(images / 作用域链 2.png)]

### 面试中关于作用域与作用域链的问题

第一题：以下代码的执行结果是：

```js
   var a = 1;
      function fn1() {
        function fn2() {
          console.log(a);
        }
        function fn3() {
          var a = 4;
          fn2();
        }
        var a = 2;
        return fn3;
      }
      var fn = fn1();
      fn(); // 2

```

第二题：以下代码的执行结果是：

```js
    var a = 1;
      function fn1() {
        function fn3() {
          var a = 4;
          fn2();
        }
        var a = 2;
        return fn3;
      }

      function fn2() {
        console.log(a);
      }
      var fn = fn1();
      fn(); // 1

```

第三题：以下代码的输出结果为

```js
  var a = 1;
      function fn1() {
        function fn3() {
          function fn2() {
            console.log(a);
          }
          var a;
          fn2();
          a = 4;
        }
        var a = 2;
        return fn3;
      }
      var fn = fn1();
      fn(); //undefined

```

第四题：以下代码的输出结果为：

```
 var x = 10;
      bar(); //10
      function foo() {
        console.log(x);
      }
      function bar() {
        var x = 30;
        foo();
      }

```

第五题： 以下代码的输出结果为：

```
  var x = 10;
      bar(); //30
      function bar() {
        var x = 30;
        function foo() {
          console.log(x);
        }
        foo();
      }

```

第六题：以下代码的输出结果为:

```
   var x = 10;
      bar(); //30
      function bar() {
        var x = 30;
        (function () {
          console.log(x);
        })();
      }

```

### 变量提升

所谓变量提升，是将变量的声明提升到函数顶部的位置，也就是将变量声明提升到变量所在的作用域的顶端，而变量的赋值并不会被提升。

```
  var str = "hello world";
      (function () {
        console.log(str);
        var str = "hello vue";
      })(); // undefined

```

```
      var str = "hello world";
      (function () {
        var str; //变量的声明得到提升
        console.log(str);
        str = "hello vue"; // 变量的赋值没有得到提升
      })();

```

如下代码所示：

```
    (function () {
        console.log(str);
        str = "hello vue";
      })(); // str is not defined

```

以下代码的执行结果是：

```
  function foo() {
        var a = 1;
        console.log(a); //1
        console.log(b); //undefined
        var b = 2;
      }
      foo();

```

上面的代码等价于

```
function foo() {
  var a;
  var b;
  a = 1;
  console.log(a); // 1
  console.log(b); // undefined
  b = 2;
}
foo();

```

### 函数提升

不仅通过`var`定义的变量会出现提升的情况，使用函数声明方式定义的函数也会出现提升。

如下代码：

```
   foo(); // 函数提升
      function foo() {
        console.log("hello");
      }

```

```
function foo(){
    console.log("hello");
}
foo() //'hello'

```

```
   foo(); // foo is not a function
      var foo = function () {
        console.log("hello");
      };

```

看一下如下程序的执行结果：

```
 function foo() {
        function bar() {
          return 3;
        }
        return bar();
        function bar() {
          return 9;
        }
      }
      console.log(foo()); // 9

```

如下程序的执行结果：

```
  var a = true;
      foo();
      function foo() {
        if (a) {
          var a = 20;
        }
        console.log(a); // undefined
      }

```

以上的代码的执行过程如下：

```
var a;
a = true;
function foo(){
    var a;
    if(a){
        a=20
    }
    console.log(a)
}
foo()

```

如下程序的执行结果：

```
   function v() {
        var a = 1;
        function a() {}
        console.log(a);
      }
      v(); // 1

```

下面我们再来看一段代码：

```
 function fn() {
        console.log(typeof foo); // function
        var foo = "hello";
        function foo() {
          return "abc";
        }
        console.log(typeof foo); // string
      }
      fn();

```

执行上面的代码，首先打印的是`function`, 然后是`string`.

上面的代码实际上可以修改成如下的代码段。

```
function fn1() {
        // 变量提升到函数的顶部
        var foo;
        // 函数提升，但是优先级低，所以出现在变量声明的后面。
        function foo() {
          return "abc";
        }
        console.log(typeof foo); //function
        foo = "hello";
        console.log(typeof foo); //string
      }

```

下面，我们再来看一段代码，看一下对应的输出结果是：

```
   function foo() {
          var a = 1;
          function b() {
            a = 10;
            return;
            function a() {}
          }
          b();
          console.log(a);
        }
        foo(); //1

```

上面的代码可以修改成如下的代码。

```
 function foo() {
     //变量a提升
        var a;
     //函数声明b的提升
        function b() {
            //内部的函数声明a的提升
          function a() {}
            //全局变量
          a = 10;
          return;
        }
        a = 1;
        b();
        console.log(a);//在当前的作用域中，可以找到变量a，不需要获取全局变量a,所以其值为1，所以打印结果为1，
      }
      foo();

```

11、闭包
-----

在正常的情况下，如果定义了一个函数，就会产生一个函数作用域，在函数体中的局部变量会在这个函数的作用域中使用。

一旦函数执行完毕后，函数所占用的空间就会被回收，存在于函数体中的局部变量同样也会被回收，回收后将不能被访问。

如果我们期望在函数执行完毕以后，函数中的局部变量仍然可以被访问到，应该怎样实现呢？

这里我们可以通过闭包来实现。

在讲解闭包的问题之前，我们先说一个概念，执行上下文环境。

### 执行上下文环境

`JavaScript`的每段代码的执行都会存在于一个执行上下文环境中。

执行上下文有且只有三类，全局执行上下文，函数上下文，与`eval`上下文；由于`eval`一般不会使用，这里不做讨论

```
function f1() {
    f2();
    console.log(1);
};

function f2() {
    f3();
    console.log(2);
};

function f3() {
    console.log(3);
};

f1();//3 2 1

```

为了方便理解，我们假设执行栈是一个数组，在代码执行初期一定会创建全局执行上下文并压入栈，因此过程大致如下：

```JavaScript
//代码执行前创建全局执行上下文
ECStack = [globalContext];
// f1调用
ECStack.push('f1 functionContext');
// f1又调用了f2，f2执行完毕之前无法console 1
ECStack.push('f2 functionContext');
// f2又调用了f3，f3执行完毕之前无法console 2
ECStack.push('f3 functionContext');
// f3执行完毕，输出3并出栈
ECStack.pop();
// f2执行完毕，输出2并出栈
ECStack.pop();
// f1执行完毕，输出1并出栈
ECStack.pop();
// 此时执行栈中只剩下一个全局执行上下文

```

### 什么是闭包

关于闭包的官方概念：一个拥有许多变量和绑定了这些变量执行上下文环境的表达式，通常是一个函数。

简单的理解就是：闭包就是能够读取其它函数内部变量的函数。由于在`JavaScript`语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成 “定义在一个函数内部的函数”。

```
function outer () {
    ...
    function inner () {
        ...
    }
}

```

所以，本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

闭包有两个比较显著的特点：

第一：函数拥有的外部变量的引用，在函数返回时，该变量仍然处于活跃状态。

第二：闭包作为一个函数返回时，其执行上下文环境不会销毁，仍然处于执行上下文环境中。

在`JavaScript`中存在一种内部函数，即函数声明和函数表达式可以位于另一个函数的函数体内，在内部函数中可以访问外部函数声明的变量，当这个内部函数在包含它们外部函数之外被调用时，就会形成闭包。

```
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

```

下面，我们再来看另外一段代码：

```
    function fn() {
        var max = 10;
        return function bar(x) {
          if (x > max) {
            console.log(x);
          }
        };
      }
      var f1 = fn();
      f1(11); // 11

```

### 闭包的应用场景

**应用缓存**

```
   var cacheApp = (function () {
        var cache = {};
        return {
          getResult: function (id) {
            // 如果在内存中，则直接返回
            if (id in cache) {
              return "得到的结果为:" + cache[id];
            }
            //经过耗时函数的处理
            var result = timeFn(id);
            //更新缓存
            cache[id] = result;
            //返回计算的结果
            return "得到的结果为:" + result;
          },
        };
      })();
      //耗时函数
      function timeFn(id) {
        console.log("这是一个非常耗时的任务");
        return id;
      }
      console.log(cacheApp.getResult(23));
      console.log(cacheApp.getResult(23));

```

**代码封装**

在编程的时候，我们提倡将一定特征的代码封装到一起，只需要对外暴露对应的方法就可以，从而不用关心内部逻辑的实现。

```
 <script>
      var stack = (function () {
        //使用数组模拟栈
        var arr = [];
        return {
          push: function (value) {
            arr.push(value);
          },
          pop: function () {
            return arr.pop();
          },
          size: function () {
            return arr.length;
          },
        };
      })();
      stack.push("abc");
      stack.push("def");
      console.log(stack.size()); // 2
      console.log(stack.pop()); // def
	  console.log(stack.size()); // 1
    </script>

```

### 闭包常见面试题

第一：如下程序执行的结果为：

获取所单击的`li`元素的索引值

```
  <ul>
      <li>a</li>
      <li>b</li>
      <li>c</li>
      <li>d</li>
      <li>e</li>
    </ul>

```

对应的`js`代码如下：【实际上不能实现该功能】

```javascript
  // 获取所单击的`li`元素的索引值
      var list = document.getElementsByTagName("ul")[0].children;
      for (var i = 0; i < list.length; i++) {
        list[i].onclick = function () {
          console.log(i);
        };
      }

```

可以采用闭包解决这个问题：

```
  var list = document.getElementsByTagName("ul")[0].children;
      for (var i = 0; i < list.length; i++) {
        (function (index) {
          list[index].onclick = function () {
            console.log(index);
          };
        })(i);
      }

```

第二：如下程序输出结果是：

```
  var arr = ["a", "b", "c"];
      for (var i = 0; i < arr.length; i++) {
        setTimeout(function () {
          console.log(arr[i]);
        }, 1000);
      }


```

代码修改后的内容为：

```
      var arr = ["a", "b", "c"];
      for (var i = 0; i < arr.length; i++) {
        (function (index) {
          setTimeout(function () {
            console.log(arr[index]);
          }, 1000);
        })(i);
      }

```

第三：以下程序打印结果是：

```
      var userName = "zhangsan";
      var person = {
        userName: "lisi",
        method: function () {
          return function () {
            return this.userName;
          };
        },
      };
      console.log(person.method()()); //zhangsan

```

```
  var userName = "zhangsan";
      var person = {
        userName: "lisi",
        method: function () {
          var that = this; //用that保存person的this
          return function () {
            return that.userName;
          };
        },
      };
      console.log(person.method()());

```

第四：以下程序的输出结果

```
    function create() {
        var a = 100;
        return function () {
          console.log(a);
        };
      }
      var fn = create();
      var a = 200;
      fn(); // 100

```

第五：以下程序的输出结果：

```
   function print(fn) {
        var a = 200;
        fn();
      }
      var a = 100;
      function fn() {
        console.log(a); // 100
      }
      print(fn);

```

### 闭包优缺点

闭包的优点：

第一：保护函数内变量的安全，实现封装，防止变量流入其它环境发生命名冲突，造成环境污染。

第二：在适当的时候，可以在内存中维护变量并缓存，提高执行效率

闭包的缺点：

消耗内存：通常来说，函数的活动对象会随着执行上下文环境一起被销毁，但是由于闭包引用的是外部函数的活动对象，因此这个活动对象无法被销毁，所以说，闭包比一般的函数需要消耗更多的内存。

12、this 指向
----------

### 常见面试题

我们知道，当我们创建一个构造函数的实例的时候，需要通过`new`操作符来完成创建，当创建完成后，函数体中的`this`指向了这个实例。

如下代码所示：

```
  function Person(userName) {
        this.userName = userName;
      }
      var person = new Person("zhangsan");
      console.log(person.userName);

```

如果，我们将上面的`Person`函数当作一个普通函数来调用执行，那么对应的`this`会指向谁呢？

```html
 function Person(userName) {
        this.userName = userName;
      }
      Person("lisi");
      console.log(window.userName);

```

通过上面的程序，我们可以总结出，`this`指向的永远是函数的调用者。

第一：如下程序的输出结果：

```javascript
    var a = 10;
      var obj = {
        a: 120,
        method: function () {
          var bar = function () {
            console.log(this.a); // 10
          };
          bar();//这里是通过window对象完成bar方法的调用
          return this.a;
        },
      };
      console.log(obj.method()); // 120

```

第二：如下程序的输出结果是：

```javascript
   var num = 10;
      function Person() {
        //给全局变量重新赋值
        num = 20;
        // 实例变量
        this.num = 30;
      }
      Person.prototype.getNum = function () {
        return this.num;
      };
      var person = new Person();
      console.log(person.getNum()); // 30

```

第三：如下程序的输出结果是：

```javascript
    function fn() {
        console.log(this);
      }
      let obj = {
        fn: fn,
      };
      fn(); //window
      obj.fn(); //obj

```

第四：如下程序的输出结果是：

```javascript
 var fullName = "language";
      var obj = {
        fullName: "javascript",
        prop: {
          getFullName: function () {
            return this.fullName;
          },
        },
      };
      console.log(obj.prop.getFullName()); // undefined
      var test = obj.prop.getFullName; // language
      console.log(test());

```

第五：如下程序的输出结果是：

```javascript
      var val = 1;
      var json = {
        val: 10,
        dbl: function () {
          val *= 2; //这里由于前面没有添加this,也就是没有写成this.val,所以这里的val指向了全局变量
        },
      };
      json.dbl();
      console.log(json.val + val); // 12

```

如果将上面的题目修改成如下的形式：

```javascript
var val = 1
var json = {
  val: 10,
  dbl: function () {
    this.val *= 2 //20
  }
}
json.dbl() 
console.log(json.val + val)//21  20+1=21

```

第六，如下程序的输出结果是：

```javascript
  var num = 10;
      var obj = { num: 20 };
      obj.fn = (function (num) {
        this.num = num * 3;
        num++;
        return function (n) {
          this.num += n;
          num++;
          console.log(num);
        };
      })(obj.num);
      var fn = obj.fn;
      fn(5);
      obj.fn(10);
      console.log(num, obj.num);

```

第七：`this` 指向`call()`函数，`apply()`函数，`bind()`函数调用后重新绑定的对象。

我们知道通过`call()`函数，`apply()`函数，`bind()`函数可以改变函数执行的主体，如果函数中存在`this`关键字，则`this`指向`call()`函数，`apply()`函数，`bind()`函数处理后的对象。

代码如下：

```javascript
 //全局变量
      var value = 10;
      var obj = {
        value: 20,
      };
      // 全局函数
      var method = function () {
        console.log(this.value);
      };
      method(); // 10
      method.call(obj); // 20
      method.apply(obj); // 20
      var newMethod = method.bind(obj);
      newMethod(); // 20

```

下面我们再来看一段代码，看一下对应的执行结果：

```html
<body>
    <button id="btn">获取用户信息</button>
    <script>
      var userInfo = {
        data: [
          { userName: "zhangsan", age: 20 },
          { userName: "lisi", age: 21 },
        ],
        getUserInfo: function () {
          var index = 1;
          console.log(this.data[index].userName + " " + this.data[index].age);
        },
      };
      var btn = document.getElementById("btn");
      btn.onclick = userInfo.getUserInfo;
    </script>
  </body>

```

修改后的代码：

```javascript
   var btn = document.getElementById("btn");
      //   btn.onclick = userInfo.getUserInfo;
      btn.onclick = userInfo.getUserInfo.bind(userInfo);

```

第八、如下程序的输出结果是：

```javascript
    <button id="btn">获取用户信息</button>
    <script>
      var userInfo = {
        data: [
          { userName: "zhangsan", age: 20 },
          { userName: "lisi", age: 21 },
        ],
        getUserInfo: function () {
          this.data.forEach(function (p) {
            console.log(this);
          });
        },
      };
      var btn = document.getElementById("btn");
      //   btn.onclick = userInfo.getUserInfo;
      btn.onclick = userInfo.getUserInfo.bind(userInfo);
    </script>

```

修改后的代码：

```javascript
<script>
      var userInfo = {
        data: [
          { userName: "zhangsan", age: 20 },
          { userName: "lisi", age: 21 },
        ],
        getUserInfo: function () {
          var that = this;//保存this
          this.data.forEach(function (p) {
            console.log(that);//这里的that 指的就是当前的userInfo对象。
          });
        },
      };
      var btn = document.getElementById("btn");
      //   btn.onclick = userInfo.getUserInfo;
      btn.onclick = userInfo.getUserInfo.bind(userInfo);
    </script>

```

或者是修改成箭头函数

```javascript
     var userInfo = {
        data: [
          { userName: "zhangsan", age: 20 },
          { userName: "lisi", age: 21 },
        ],
        getUserInfo: function () {
          //   var that = this;
          this.data.forEach((p) => {
            console.log(this);
          });
        },
      };
      var btn = document.getElementById("btn");
      //   btn.onclick = userInfo.getUserInfo;
      btn.onclick = userInfo.getUserInfo.bind(userInfo);

```

13、call() 函数，apply() 函数，bind( ) 函数的使用与区别
----------------------------------------

在前面我们简单的说过`call( )`函数，`apply( )`函数，`bind( )`函数，的作用。

`call( )`函数，`apply( )`函数，`bind( )`函数, 的作用都是改变`this`的指向，但是在使用方式上是有一定的区别的。

下面我们分别来看一下它们各自的使用方式：

### `call( )`函数的基本使用

基本语法如下：

```
function.call(thisObj,arg1,arg2,...)
```

`function`表示的是：需要调用的函数。

`thisObj`表示：`this`指向的对象，也就是`this`将指向`thisObj`这个参数，如果`thisObj`的值为`null`或者是`undefined`, 则`this`指向的是全局对象。

`arg1,arg2,..`表示：调用的函数需要的参数。

```
   function add(a, b) {
        console.log(this);
        console.log(a + b);
      }
      function sub(a, b) {
        console.log(a - b);
      }

      add.call(sub, 3, 1);// 调用add方法，但是add方法中的this指向的是sub,最终的输出结果是4

```

### `apply( )`函数的基本使用

`apply()`函数的作用与`call()`函数的作用是一样的，不同的是在传递参数的时候有一定的差别

语法格式如下：

```
function.apply(thisObj,[argsArray])

```

`function`表示的是：需要调用的函数。

`thisObj`:`this`指向的对象，也就是`this`将指向`thisObj`这个参数，如果`thisObj`的值为`null`或者是`undefined`, 则`this`指向的是全局对象。

`[argsArray]`: 表示的是函数需要的参数会通过数组的形式进行传递, 如果传递的不是数组或者是 arguments 对象，会抛出异常。

```
  function add(a, b) {
        console.log(this); // 这里指向的是sub
        console.log(a + b);
      }
      function sub(a, b) {
        console.log(a - b);
      }

      add.apply(sub, [3, 1]); 

```

### `bind`函数的基本使用

```
function.bind(thisObj,arg1,arg2,...)

```

通过上面语法格式，可以看出`bind`函数与`call`函数的参数是一样的。

不同 的是`bind`函数会返回一个新的函数，可以在任何时候进行调用。

```
      function add(a, b) {
        console.log(this); // 这里指向的是sub
        console.log(a + b);
      }
      function sub(a, b) {
        console.log(a - b);
      }

      var newFun = add.bind(sub, 3, 1); //bind 返回的是一个新的函数。
      newFun();//完成对add函数的调用，同时this指向了sub

```

### 三个函数的比较

通过前面对三个函数的基本使用，可以看出，它们共同点就是改变`this`的指向。

不同点：

`call()`函数与`apply()`函数，会立即执行函数的调用，而`bind`返回的是一个新的函数，可以在任何时候进行调用。

`call()`函数与`bind`函数的参数是一样的，而`apply`函数第二个参数是一个数组或者是`arguments`对象。

### 应用场景

这里，我们重点看一下，关于`call()`函数，`bind()`函数，`apply()`函数的应用场景。

**求数组中的最大值与最小值**

```
 var arr = [3, 6, 7, 1, 9];
console.log(Math.max.apply(null, arr));
console.log(Math.min.apply(null, arr));
```

**将`arguments`转换成数组**

```
   function fn() {
        var arr = Array.prototype.slice.call(arguments);
        arr.push(6);
        return arr;
      }
      console.log(fn(1, 2));

```

**继承的实现**

```
function Person(userName, userAge) {
        this.userName = userName;
        this.userAge = userAge;
      }
      function Student(name, age, gender) {
        Person.call(this, name, age);
        this.gender = gender;
      }
      var student = new Student("zhangsan", 20, "男");
      console.log(
        "userName=" +
          student.userName +
          ",userAge=" +
          student.userAge +
          ",gender=" +
          student.gender
      );

```

**改变匿名函数的`this`指向**

首先看一下如下程序的执行结果：

```
  var person = [
        { id: 1, userName: "zhangsan" },
        { id: 2, userName: "lisi" },
      ];
      for (var i = 0; i < person.length; i++) {
        (function (i) {
          this.print = function () {
            console.log(this.id);
          };
          this.print();
        })(i);
      }

```

具体的实现方式如下：

```
    var person = [
        { id: 1, userName: "zhangsan" },
        { id: 2, userName: "lisi" },
      ];
      for (var i = 0; i < person.length; i++) {
        (function (i) {
          this.print = function () {
            console.log(this.id);
          };
          this.print();
        }.call(person[i], i));
      }

```

### 手写 call、apply 及 bind 函数

**`call`方法的实现**

```
      Function.prototype.myCall = function (context) {
       
        var args = [...arguments].slice(1);
       
        context = context || window;
        
        context.fn = this;
     
        var result = context.fn(...args);
        return result;
      };
      function Add(num1, num2) {
        console.log(this);
        console.log(num1 + num2);
      }
      function Sub(num1, num2) {
        console.log(num1 - num2);
      }
      Add.myCall(Sub, 6, 3);

```

**`apply`函数的实现**

```
 Function.prototype.myApply = function (context) {
        var result = null;
        context = context || window;
        context.fn = this;
        if (arguments[1]) {
          // console.log("arguments=", arguments[1]);// arguments= (2) [6, 3]
          result = context.fn(...arguments[1]);
        } else {
          result = context.fn();
        }
        return result;
      };
      function Add(num1, num2) {
        console.log(this);
        console.log(num1 + num2);
      }
      function Sub(num1, num2) {
        console.log(num1 - num2);
      }
      Add.myApply(Sub, [6, 3]);

```

**`bind`函数的实现**

```
   Function.prototype.myBind = function (context) {
        // 获取参数
        var args = [...arguments].slice(1), // [1,5]
          fn = this;
        // console.log(this);//Add
        return function Fn() {
          // console.log(this); //Window
          return fn.apply(context, args);
        };
      };
      function Add(num1, num2) {
        console.log(this);
        console.log(num1 + num2);
      }
      function Sub(num1, num2) {
        console.log(num1 - num2);
      }
      var newFun = Add.myBind(Sub, 1, 5);
      newFun();

```

```
  <script>
      function add(a, b) {
        console.log(this); // 这里指向的是sub
        console.log(a + b);
      }
      function sub(a, b) {
        console.log(a - b);
      }

      var newFun = add.bind(sub, 3); //bind 返回的是一个新的函数。
      newFun(2); //完成对add函数的调用，同时this指向了sub
    </script>

```

下面，我们就实现一下关于`myBind`方法参数的模拟。

```
    Function.prototype.myBind = function (context) {
        // 获取参数
        var args = [...arguments].slice(1),
          fn = this;
        // console.log(this);//Add
        return function Fn() {
          // console.log(this); //Window
          //这里是调用bind函数的时候传递的参数，将其转换成数组
          var bindArgs = Array.prototype.slice.call(arguments);
          //下面完成参数的拼接
          return fn.apply(context, args.concat(bindArgs));
        };
      };
      function Add(num1, num2) {
        console.log(this);
        console.log(num1 + num2);
        return 10;
      }
      function Sub(num1, num2) {
        console.log(num1 - num2);
      }
      var newFun = Add.myBind(Sub, 1);
      console.log(newFun(8));

```

14、回调函数有什么缺点
------------

在`JavaScript`编程过程中，我们经常会写回调函数。

我们知道在`JavaScript`中函数也是一种对象，对象可以作为参数传递给函数，因此函数也可以作为参数传递给另外一个函数，这个作为参数的函数就是回调函数。

例如，如下的代码示例：

```
const btn=document.getElementById('btn');
btn.addEventListener('click',function(event){
    
})

```

回调函数有一个比较严重的问题，就是很容易出现回调地狱的问题。也就是实现了回调函数不断的嵌套。

```
setTimeout(() => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
        setTimeout(() => {
            console.log(3)
    
        },3000)
    
    },2000)
},1000)


```

以上的代码就是典型的回调地狱的问题，这样的代码是非常不利于阅读和维护的。

所以在`ES6`中提供了`Promise`以及`async/await`来解决地狱回调的问题。关于这块内容

15、 为什么函数被称为一等公民？
-----------------

JavaScript 语言将函数看作一种值，与其它值（数值、字符串、布尔值等等）地位相同。凡是可以使用值的地方，就能使用函数。比如，可以把**函数赋值给变量和对象的属性**，也可以当作**参数传入其他函数**，或者**作为函数的结果返回**。

同时函数还可以作为类的构造函数，完成对象实例的创建。所以说，这种多重身份让`JavaScript`中的函数变得非常重要，所以说函数被称为一等公民。

```
  var person = [
        { id: 1, userName: "zhangsan" },
        { id: 2, userName: "lisi" },
      ];
      for (var i = 0; i < person.length; i++) {
        (function (i) {
          this.print = function () {
            console.log(this.id);
          };
          this.print();
        })(i);
      }

```

具体的实现方式如下：

```
    var person = [
        { id: 1, userName: "zhangsan" },
        { id: 2, userName: "lisi" },
      ];
      for (var i = 0; i < person.length; i++) {
        (function (i) {
          this.print = function () {
            console.log(this.id);
          };
          this.print();
        }.call(person[i], i));
      }

```

