# 一、CSS基础

#### 1. CSS选择器及其优先级

- 选择器的种类
  - id选择器，
  - 类选择器，属性选择器，伪类选择器
  - 元素选择器，伪元素选择器
  - 通配选择器
- 选择器优先级的简单描述
  - ！important
  - 行内样式 > id选择器
  - 剩下的安照上述顺序
  - 继承得到的最低
- 选择器优先级的详细描述
  - 三元组表示
  - 第一个值：id选择器的个数
  - 第二个值：类选择器，属性选择器，伪类选择器的个数
  - 第三个值：元素选择器，伪元素选择器

#### 4. display的block，inline，inline-block的区别

- block：参考文档。
- inline：元素不会独占一行，不能设置宽高，以及上下方向的内外边距，（因为元素的高度由内容撑开）可以设置左右的内外边距。
- inline-block:元素不会独占一样，但是可以正确的盒子模型的属性。



#### 6. link和@import的区别

- ##### 使用方法

  link 标签的使用方法是，在 head 标签中，添加一个 link 元素，设置 rel 属性为 "stylesheet"，设置 href 属性为外部 CSS 文件的路径，例如：

  ```html
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
  ```
  


  这样就可以引入 style.css 文件中的样式。

  @import 的使用方法是，在 style 标签或者 CSS 文件中，添加一个 @import 规则，后面跟上外部 CSS 文件的路径，用 url() 包裹，用分号结束，例如：

  ```html	
  <style>
    @import url("style.css");
  </style>
  ```


  或者 `@import url("style.css");`这样也可以引入 style.css 文件中的样式。

- ##### 区别

  link 和 @import 都是用来引入外部 CSS 文件的方法，但是它们有以下几点区别：

  - link 是 HTML 标签，可以在 head 标签中使用，不仅可以引入 CSS 文件，还可以定义 RSS、rel 连接属性等；@import 是 CSS 语法规则，只能在 style 标签或者 CSS 文件中使用，只有引入样式表的作用。
  - link 引入的 CSS 文件会在页面加载的同时被加载，不会影响页面的渲染；@import 引入的 CSS 文件会在页面加载完毕后才被加载，可能会导致页面闪烁。
  - link 标签不存在兼容性问题，可以被所有浏览器识别；@import 只能被 IE5+ 以上的浏览器识别，低版本的浏览器会忽略它。
  - link 标签可以通过 JS 操作 DOM 来动态改变样式；@import 不能通过 JS 来操作，因为它不属于DOM。

  因此，一般建议使用 link 标签来引入外部 CSS 文件，避免使用 @import。


#### 9. 伪类和伪元素的区别

伪类和伪元素都是 CSS 选择器的一种。

- 伪类是用来匹配元素的一些特定的状态(用来匹配某种状态的元素)，比如鼠标悬停、链接访问、表单输入等，也可以匹配一组元素中的某些元素，比如最后一个元素、第一个子元素、第 n 个子元素等。伪类的语法是在选择器后面加一个冒号和伪类名称，例如：

  ```css
  a:hover { /* 匹配鼠标悬停在 a 元素上的状态 */
    color: red;
  }
  
  ul li:last-child { /* 匹配 ul 元素中的最后一个 li 元素 */
    color: blue;
  }
  ```

- 伪元素是用来匹配元素的一些特定的部分，比如第一行、第一个字母、生成的内容等。伪元素的语法是在选择器后面加两个冒号和伪元素名称，例如：

  ```css
  p::first-line { /* 匹配 p 元素的第一行 */
    font-weight: bold;
  }
  
  div::before { /* 在 div 元素之前生成内容 */
    content: "Hello";
  }
  ```

#### 14. CSS3的新增内容

CSS3 是 CSS 的最新版本，它增加了很多新的特性，让网页设计更加灵活和美观。根据网上的资料，我为你整理了一些 CSS3 的新特性，如下：

- 动态伪类选择器、目标伪类等多种伪类选择器、否定选择器等。
- 边框与圆角，可以为元素添加圆角边框、盒阴影等。
- 背景与渐变，可以为元素添加多重背景、背景裁剪、背景原点、背景尺寸等。
- 文本，可以为元素添加文本换行、文本阴影、文本溢出等。
- 过渡，可以为元素添加平滑的状态变化效果，如颜色、大小、位置等¹。
- 动画，可以为元素添加复杂的动画效果，如关键帧、持续时间、延迟等。
- 布局，可以为元素添加灵活的布局方式，如弹性盒子（Flexbox）、多列布局（Multi-column Layout）等。
- 2D/3D 转换，可以为元素添加 2D 或 3D 的转换效果，如透视、旋转、缩放等²。

#### 25. 单行、多行文本溢出

- ##### 单行

  ```html
  overflow:hidden // 开启溢出设置
  white-space:nowarp // 保证文本不换行
  text-overflow:ellipsis // 设置溢出的显示为省略号
  ```

- ##### 多行（没太搞懂）

  > 多行文本溢出指的是，文本的行数太多了，导致盒子的高度装不下。
  >
  > [CSS单行／多行文本溢出隐藏 - 掘金 (juejin.cn)](https://juejin.cn/post/7177748696800362551)

  - 基于高度截断

    就是超出高度的部分，直接截掉

    这个方法不太好，因为开启绝对定位之后，会脱离文档流，使得"..."跑到了文本的上面

    ```html
    <style>
        .demo {
            position: relative;
            line-height: 20px;
            height: 40px;
            overflow: hidden;  // 设置溢出的显示模式
        }
        
        .demo::after {   // 伪元素显示器：在最后额外添加一个内容
            content: "..."; // 内容的文本
            position: absolute;   // 开启决定定位
            bottom: 0;				// 右下角的位置
            right: 0;
            padding: 0 20px 0 10px;  // 设置一下padding
        }
    </style>
    
    <body>
        <div class='demo'>这是一段很长的文本</div>
    </body>
    
    ```

  - 基于行数进行截断

    就是设置特定的行数

    ```html
    <style>
        p {
            /* 设置盒子 */
            width: 400px;
            border-radius: 1px solid red;
            
             /* 开启旧版伸缩盒模型 */
            display: -webkit-box;
             /* 只显示两行 */
            -webkit-line-clamp: 2;
             /* 类似于新版盒模型的主轴方向为垂直，这样文字就是垂直消失了 */
            -webkit-box-orient: vertical;
             /* 设置固定的配置 */
            overflow: hidden;
            text-overflow: ellipsis;
        }
    </style>
    <p>
        这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本
        这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本
    </p >
    
    ```

#### 27. 对于媒体查询的理解

媒体查询是一种 CSS3 的功能，它可以根据不同的媒体类型（如屏幕、打印机、语音等）和媒体特性（如宽度、高度、方向、分辨率等）来为不同的设备应用不同的样式规则。

媒体查询的作用是可以让网页适应不同的设备和环境，实现响应式的布局和设计。

媒体查询的使用方法是在 CSS 中使用 @media 规则，后面跟上一个或多个媒体类型和表达式，表达式可以用 and, not, or 和 only 等逻辑运算符连接，表示满足某些条件时应用相应的样式。例如：

@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}

这个例子表示当媒体类型是屏幕，并且视口的宽度至少为 480 像素时，将网页的背景颜色设置为浅绿色¹。

您还可以在 HTML 中使用 link 或 style 标签来引入不同的样式表，或者在 JavaScript 中使用 matchMedia() 方法来检测媒体查询是否匹配¹⁴。

# 二、页面布局

#### 0. 关于定位你必须知道的

##### 1.1 绝对定位(其实没搞懂。。。。)

- **绝对定位的元素有自己的宽和高**

  

- **绝对定位的元素没有自己的宽和高**（但是这个是对的，针对没有宽高的情况）

  如果你给一个绝对定位的元素同时设置了left和right，那么它的宽度就会根据这两个属性的值来计算。例如，如果你设置了left: 50px; right: 50px; 那么它的宽度就会是父元素的宽度减去100px，也就是从距离左侧50px的位置到距离右侧50px的位置。

  同理，如果你给一个绝对定位的元素同时设置了top和bottom，那么它的高度就会根据这两个属性的值来计算。 例如，如果你设置了top: 50px; bottom: 50px; 那么它的高度就会是父元素的高度减去100px，记录上侧50px到距离下侧50px的位置。

  但是，要注意的是，这种计算方式只有在父元素或者祖先元素有定位属性（position: relative, absolute, fixed 或者 sticky）的时候才有效。 如果没有这样的祖先元素，那么绝对定位的元素就会相对于文档体进行定位，而文档体的宽度和高度取决于视口（浏览器窗口）的大小。

  所以，如果你想让一个绝对定位的元素占满整个父元素或者祖先元素的空间，你需要给它设置left: 0; right: 0; top: 0; bottom: 0; 并且确保父元素或者祖先元素有定位属性。

#### 1. 两栏布局

> 两栏布局：左侧固定，右侧宽度自适应

##### 1.1 利用浮动

- 固定左侧元素：宽度200px，高度给定100px，开启浮动
  - 首先确定了位置。
  - 开启浮动之后，脱离了文档流，这样就可以和div并排到一行中
- 右侧元素：设置高度，margin:left为200px
  - 宽度自适应
  - 设置margin表示距离父元素的左侧距离为200px，正好可以不被左侧遮盖。

- ##### 代码

  ```css
  <style>
  .outer {
      height: 100px;
  }
  .left {
      float: left;
      height: 100px;
      width: 200px;
      background-color: rgb(223, 131, 18);
  }
  .right {
      height: 100px;
      width: auto;
      margin-left: 200px;
      background-color: aquamarine;
  }
  
  </style>
  
  
  <body>
      <div class="outer">
          <div class="left"></div>
          <div class="right"></div>
      </div>
  </body>
  ```

##### 1.2 浮动+BFC

> BFC开启之后，不会被其他浮动的元素覆盖，因此可以实现并排+不被覆盖

- 左侧元素相同；
- 右侧元素设置overflow：hidden，即开启BFC
  - 设定高度100px，宽度为auto

- ##### 代码

  ```css
  .outer {
      height: 100px;
  }
  .left {
      float: left;
      height: 100px;
      width: 200px;
      background-color: rgb(223, 131, 18);
  }
  .right {
      overflow: hidden;
      height: 100px;
      background-color: aquamarine;
  }
  ```

##### 1.3 利用flex布局

> flex布局可以实现多个块元素的并排；
>
> 并可实现伸缩项目的拉伸和压缩，所以可以通过flex实现。

- 左侧元素设置：宽度即可

  - 因为flex默认是0 1 auto，也就是不拉伸，可压缩，宽高等于原来设置的。
  - ==高度不用设置的原因为：侧轴默认开启align-items:stretch，也就是如果伸缩项目没有设置高度，那么就会占满整个容器的高度。==

- 右侧元素设置：

  - flex:1，就等于flex：1 1 0，也就是可拉伸，可压缩，基线方向宽度为0，实际宽度等于拉伸压缩后的宽度。

- ##### 代码

  ```css
  .outer {
      height: 100px;
      display: flex;
  }
  .left {
      /* 默认flex为 0 1 auto，也就是不拉伸，可压缩，宽高等于你设定的值 */
      /* height: 100px; */
      width: 200px;
      background-color: rgb(223, 131, 18);
  }
  .right {
      /* height: 100px; */
      /* flex:1 ==> flex 1 1 0，根据拉伸系数拉伸，根据宽度进行压缩 
      0：表示基线方向宽度为0，实际宽度取决于拉伸压缩多少 */
      flex: 1;
      background-color: aquamarine;
  }
  ```

##### 1.4 使用定位（左元素定位）

> 使用相对定位可以脱离文档流，类似于float，然后右侧元素设置margin-left

- 左侧元素设置

  - 开启绝对定位，不设置top、left，元素就是在父元素左上角。

- 右侧元素设置

  - margin-left：200px
  - 宽度填满父元素

- ##### 代码

  ```css
  .outer {
      position: relative;
      height: 100px;
  }
  .left {
      position: absolute;
      width: 200px;
      height: 100px;
      background-color: aqua;
  }
  .right {
      height: 100px;
      margin-left: 200px;
      background-color: blueviolet;
  }
  ```

##### 1.5 使用定位元素(右元素定位)

> 如果你不给定height和width，那么绝对定位的元素的高度和宽度会根据其内容和内边距自动调整。
>
> 如果你同时设置了top和bottom或者left和right属性，那么绝对定位的元素的高度或宽度会根据两者之间的距离来确定]

- 左侧元素设置宽和高

- 右侧元素利用绝对定位

  - 上下为0，也就是高度自上而下
  - 左：200px，右0px，也就是从左侧200px到右侧最顶端

- 代码

  ```css
          /* 使用定位 */
  .outer {
      position: relative;
      height: 100px;
  }
  .left {
      width: 200px;
      height: 100px;
      background-color: aquamarine;
  }
  .right {
      position: absolute;
      top:0;
      bottom: 0;
      left: 200px;
      right: 0px;
      background-color: tomato;
  }
  ```


#### 2. 三栏布局

> 三栏布局：左和右固定，中间随页面进行变化

- ##### 难点是什么？

  - 左中右在一行：浮动、flex、定位，浮动和定位是用来将元素脱离文档流的
  - 如果让左右固定在两侧
    - 绝对定位设置；
    - flex布局默认左右在两侧，只需要设置中间使得左右两侧紧靠两侧边缘即可
  - 如果让中间元素适应页面的宽度
    - 默认div宽度是是填满父元素，因此可以设置margin-left和margin-right，使得中间元素不与左右元素重合
    - flex布局中，伸缩项目可以实现拉伸，因此设置了左右宽度后，中间元素设置拉伸即可

##### 2.1 使用定位

- 父元素开启相对定位，变为包含块（也是定位元素）

- 左侧元素开启绝对定位，默认top：0，left：0，因此会在左侧带着

  - 设置高度和宽度即可

- 右侧元素开启绝对定位

  - 设置高度=父元素高度，宽度为200px
  - 右元素定在右侧，即为right:0（距离右侧为0），top:0

- 中间元素设置左右的margin为200px，并且设置高度，然后宽度填满父元素即可。

- ##### 代码

  ```css
      <style>
          /* 使用定位 */
          .outer {
              position: relative;
              height: 100px;
          }
          .left {
              position: absolute;
              width: 200px;
              height: 100px;
              background-color: skyblue;
          }
          .right {
              position: absolute;
              width: 200px;
              height: 100px;
              right: 0;
              top:0;
              background-color: black;
          }
          .mid {
              margin-left: 200px;
              margin-right: 200px;
              height: 100px;
              background-color: tomato;
          }
      </style>
  </head>
  
  <body>
      <div class="outer">
          <div class="left"></div>
          <div class="mid"></div>
          <div class="right"></div>
      </div>
  </body>
  ```

##### 2.2 使用flex布局

- 左右两侧正常设置盒子的宽和高；

- 中间的设置flex:1，也就是可伸缩，并且基线长度取决于伸缩长度。

- ##### 代码

  ```css
  .outer {
      display: flex;
      height: 100px;
  }
  .left {
      width: 200px;
      background-color: skyblue;
  }
  .right {
      width: 200px;
      background-color: black;
  }
  .mid {
      flex:1;
      background-color: tomato;
  }
  ```

#### 3. 水平垂直居中

> 该场景是子元素在父元素的水平垂直居中

##### 3.1 使用绝对定位（1）

- 对子元素使用绝对定位，调整元素的左上角到达父元素的中心点

- 使用transform(-50%, -50%)将元素沿着x轴和y轴移动距离自身50%的距离，也就是将子元素中心点移动到子元素原来左上角的地方

- ##### 代码

  ```css
  <style>
      .parent {
          width: 200px;
          height: 100px;
          position: relative;
          background-color: skyblue;
      }
  
      .child {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 50%;
          height: 50%;
          background-color: tomato;
      }
  </style>
  
  
  <body>
      <div class="parent">
          <div class="child"></div>
      </div>
  </body>
  ```

##### 3.2 使用绝对定位(2)

- 和上面同理，将子元素的左上角移动到父元素的中心点

- 设置margin-left: - 子元素宽度

- 设置margin-right: -子元素高度

- ##### 代码

  ```css
  .parent {
      width: 200px;
      height: 100px;
      position: relative;
      background-color: skyblue;
  }
  
  .child {
      width: 100px;
      height: 50px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -50px;
      margin-top: -25px;
      background-color: tomato;
  }
  ```

##### 3.3 绝对定位(3)

设置到达边缘的距离为0，然后开启margin，进行填充

```css
.parent {
    width: 200px;
    height: 100px;
    position: relative;
    background-color: skyblue;
}

.child {
    position: absolute;
    width: 60%;
    height: 10%; 
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    margin: auto;
    background-color: tomato;
}
```

##### 3.4 使用margin + BFC

- 子元素使用margin: (父元素高度 - 子元素高度) / 2 auto
  - 这样设置了水平垂直居中，但是会有margin塌陷的问题
- 对父元素开启overflow:hidden，也就是开启BFC，防止margin塌陷

- ##### 代码

  ```css
  .parent {
      width: 200px;
      height: 100px;
      overflow: hidden;
      background-color: skyblue;
  }
  
  .child {
      margin: 25px auto;
      width: 50%;
      height: 50%;
      background-color: tomato;
  }
  ```

##### 3.5 使用flex布局（1）

- 开启父元素的flex布局
  - 设置主轴对齐方式:justify-content:center
  - 设置侧轴对齐方式:align-item:center

- 代码

  ```css
  .parent {
      width: 200px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: skyblue;
  }
  .child {
      width: 100px;
      height: 50px;
      background-color: tomato;
  }
  ```

##### 3.6 使用flex布局(2)

```css
.parent {
    width: 200px;
    height: 100px;
    display: flex;
    background-color: skyblue;
}
.child {
    width: 100px;
    height: 50px;
    /* 自动计算空白 */
    margin:auto; 
    background-color: tomato;
}

```

#### 7. 你对flex布局的理解与其应用场景

对flex布局的理解，我认为是一种更灵活、更简洁、更强大的CSS布局方式，它可以解决传统布局方式的一些问题和局限性，比如：

- 传统布局方式依赖于display、position和float属性，它们不够直观，不易维护，容易出现浮动清除、高度塌陷等问题。
- 传统布局方式难以实现一些常见的布局需求，比如水平或垂直居中、等高布局、多列布局等，需要使用额外的标签或者复杂的计算。
- 传统布局方式不适应不同的屏幕尺寸和设备，需要使用媒体查询或者其他技术来实现响应式布局。

而flex布局可以通过简单的属性设置，就可以实现各种复杂的布局效果，而且可以自动适应可用空间的变化，提高了开发效率和用户体验。

#### 8. flex:1表示什么？

flex:1表示的是一个简写属性，它相当于flex:1 1 0，也就是说，它包含了三个子属性：

- flex-grow:1，表示项目可以根据比例放大，占据多余的空间。
- flex-shrink:1，表示项目可以根据比例缩小，适应容器的大小。
- flex-basis:0，表示项目在分配多余空间之前的大小为0。

flex:1的作用是让项目能够自动地填充容器的可用空间，如果所有项目都设置了flex:1，那么它们将等分容器的空间。

# 三、定位与浮动

#### 1. 关于浮动

##### 1.1 浮动的特点

- 🤢脱离文档流。
- 😊不管浮动前是什么元素，浮动后：默认宽与高都是被内容撑开（尽可能小），而且可以设置宽高。
- 😊不会独占一行，可以与其他元素共用一行。
- 😊不会 margin 合并，也不会 margin 塌陷，能够完美的设置四个方向的 margin 和 padding 。
- 😊不会像行内块一样被当做文本处理（没有行内块的空白问题）。

**注意：什么是文档流呢？**

文档流是指网页中元素的排列方式，遵循从上到下，从左到右的顺序。文档流中的元素会自动占据页面的空间，并且不会重叠。

##### 1.2 浮动带来的问题

- **对兄弟元素的影响**： 后面的兄弟元素，会占据浮动元素之前的位置，在浮动元素的下面；对前面的兄弟无影响。

- **对父元素的影响**： 不能撑起父元素的高度，导致父元素高度塌陷；但父元素的宽度依然束缚浮动的元素。

##### 1.3 解决方案

- 方案一： 给父元素指定高度。（只能解决父元素）

- 方案二： 给父元素也设置浮动，带来其他影响。（能解决父元素的高度问题，但是父元素相关的问题会产生）

- 方案三： 给父元素设置 overflow:hidden 。（开启了BFC，消除浮动带来的高度塌陷的影响）

- 方案四： 在所有浮动元素的最后面，添加一个块级元素，并给该块级元素设置 clear:both 。（清除当前元素前面浮动元素的影响）

- 方案五： 给浮动元素的父元素，设置伪元素，通过伪元素清除浮动，原理与方案四相同。===> 推荐使用

  ```css
  .father::after {
      content: '';
      display:block;
      clear:both;
  }
  ```

#### 3. BFC的理解

##### 3.1 BFC的含义

BFC是块级格式化上下文的缩写，它是CSS中的一个概念，指的是一种独立的布局环境，其中的元素按照一定的规则进行排列。BFC可以看作是一个隔离的容器，容器内部的元素不会影响到外部的元素，并且具有一些特殊的效果。

通俗地说，BFC就是一个独立的空间，里面的元素不会和外面的元素互相影响。

比如，如果一个元素触发了BFC，

- 那么它就可以包含浮动的子元素，它的高度不会塌陷；

  或者它可以阻止外边距塌陷（父元素开启BFC，子元素开不开启都行（实测）），避免相邻元素(都开启bfc)之间的margin合并；

- 它可以防止被浮动元素覆盖，实现自适应的布局。

##### 3.2 开启BFC

要触发BFC，有一些常用的CSS属性，比如：

- 根元素：body
- 开启浮动
- position为absolute或fixed
- overflow除了visible以外的值（hidden、auto、scroll）
- display为inline-block、table-cell等值；
- 伸缩项目（也就是父元素开启flex后，子元素是bfc）

##### 3.3 BFC的作用

- 解决margi塌陷问题

- 本身不会被浮动元素所覆盖

- 解决开启浮动的高度塌陷问题

  

#### 4.margin重叠问题

margin重叠问题是指两个或多个块级元素在垂直方向上的外边距（margin）合并为一个单一的外边距

margin重叠问题可以分为两种情况：margin合并问题和margin塌陷问题。

##### 4.1 margin塌陷问题

margin塌陷问题是指第一个子元素的上外边距与父元素的外边距发生重叠，最后一个子元素的下外边距与父元素的外边距发生重叠。

margin塌陷问题的解决方法有以下几种：
- 给父元素设置外边框（border）或者内边距（padding）。
- 触发BFC规则（overflow:hidden），改变父元素的渲染规则。
- 使用绝对定位（position:absolute）或者浮动（float）来脱离文档流。

  这是因为浮动的元素和绝对定位会让元素脱离文档流，脱离文档流的元素的外边距不会被重叠。
- 使用将子元素元素设置为行内块元素display:inline-block

##### 4.2 margin合并问题

margin合并问题是指两个或多个并列的块级元素在垂直方向上的外边距合并为一个单一的外边距。

margin合并问题的解决方法有以下几种：

- 只设置其中一个元素的外边距值，避免两个外边距相遇。
- 将底部的元素设置为浮动或者绝对定位脱离文档流。
- 使用将底部元素设置为行内块元素display:inline-block

使用行内块元素可以解决margin重叠问题的原因是，行内块元素不属于块级元素，而只有块级元素之间才会发生垂直方向上的margin合并。因此，如果将父元素或子元素设置为display:inline-block，就可以避免margin重叠的现象。

#### 6. position属性

| 属性值   | 相对定位元素                                                 |
| -------- | ------------------------------------------------------------ |
| relative | 相对于元素自身的位置                                         |
| absolute | 相对于第一个拥有定位属性(绝对定位，相对定位，固定定位)的祖先元素 |
| fixed    | 相对于整个屏幕视口                                           |
| sticky   | 相对于离他最近的具有滚动机制的祖先元素                       |
| static   | 默认定位，也就是postion的默认值，不开启定位功能              |

##### 滚动机制

您好，这是Bing。根据我的搜索结果，拥有滚动机制的元素是指当元素的内容溢出其区域时，可以使用滚动条来显示或隐藏多余的内容。在css中，可以使用overflow属性来设置元素是否拥有滚动机制，以及如何处理溢出的内容。overflow属性的常用值有：

- auto：如果内容溢出，浏览器会自动显示滚动条。
- hidden：如果内容溢出，浏览器会隐藏多余的内容。
- scroll：无论内容是否溢出，浏览器都会显示滚动条。
- visible：如果内容溢出，浏览器会显示多余的内容。

