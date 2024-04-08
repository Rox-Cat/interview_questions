- [104道 CSS 面试题，助你查漏补缺 - 知乎](https://zhuanlan.zhihu.com/p/114257330)：这篇文章收集了104道CSS的面试题，并给出了详细的解答和示例代码。这些题目涵盖了CSS的盒模型、选择器、伪类、伪元素、优先级、继承、居中、浮动、定位、响应式布局等方面的知识点。
- [【面试题】前端css经典面试题 50道 - 知乎](https://zhuanlan.zhihu.com/p/75132250)：这篇文章整理了50道前端CSS的经典面试题，并给出了简洁的回答。这些题目包括了CSS的盒子模型、选择器、伪类、伪元素、flexbox布局、三角形原理、品字布局、兼容性问题等方面的内容。
- [【前端CSS面试题】2023前端最新版css模块，高频15问_初映CY的前说的博客-CSDN博客](https://blog.csdn.net/m0_61118311/article/details/128951137)：这篇文章总结了2023年前端最新版的CSS模块，包括了15个高频的面试题。这些题目涉及了CSS3的新特性、动画效果、BFC原理、清除浮动方法、水平垂直居中方法等方面的内容。
- [CSS经典面试题（史上最全，持续更新中…） - 掘金](https://juejin.cn/post/6844903832552472583)：这篇文章收录了一些CSS经典的面试题，并持续更新中。这些题目包括了CSS的盒子模型、选择器、伪类、伪元素、优先级、继承、居中、浮动、定位、flexbox布局等方面的知识点。

- [2022高频前端面试题——CSS篇 - 掘金 (juejin.cn)](https://juejin.cn/post/7098689890933538853)

# CSS基础

## CSS选择器及其优先级

> **基本要求：**
>
> - 基本选择器及其优先级
> - 复合选择器的写法及其优先级判别
> - 伪类和伪元素选择器的用法

### 引入CSS的方式

- 行内样式 > 内部样式`<style>` == 外部样式

**注**：外部样式的引入，参见<a href="#link和@import的区别">link和@import的区别</a>

### 基本选择器

#### 基本选择器的种类

- id选择器，`#id`
- 类选择器，属性选择器，伪类选择器 `.class`
- 元素选择器，伪元素选择器 `div`
- 通配选择器 `*`

#### 基本选择器优先级

- !important

  在 CSS 中，`!important` 是一个声明的修饰符，用于强制覆盖其他样式规则。当应用 `!important` 修饰符到一个 CSS 属性时，它将具有更高的优先级，即使有更具体的选择器或者更后面的样式规则。

  以下是一个示例：

  ```css
  .my-element {
    color: red !important;
  }
  ```

  在上面的示例中，`.my-element` 类的元素将会以红色显示，无论其他样式规则如何。`!important` 修饰符将覆盖所有其他具有相同属性的规则。

- 行内样式 > id选择器

- 剩下的安照上述顺序

- 继承得到的最低

### 复合选择器

#### 复合选择器的种类

- 交集选择器:div.item.xx 表示一个元素既有div，又有item类，还有xx类
- 并集选择器:div, .item, .xx 表示选择div标签或者item类或者xx类
- 后代选择器：div p ，表示选择div标签里面的p标签(不一定是子代，是后代就行)
- 子代选择器：div>p>ul>li，必须是严格子代
- 兄弟选择器：div+p，必须是div紧挨着的下一个标签

#### CSS复合选择器优先级

选择器优先级的详细描述

- 三元组表示
- 第一个值：id选择器的个数
- 第二个值：类选择器，属性选择器，伪类选择器的个数
- 第三个值：元素选择器，伪元素选择器个数

### 伪类和伪元素选择器

#### 伪类选择器

##### 动态伪类

- :link 和 :visited 用来选择未访问过和已访问过的链接。
- :hover 用来选择鼠标悬停在上面的元素。
- :active 用来选择被用户激活的元素，比如点击或触摸。
- :focus 用来选择获得键盘焦点的元素，比如输入框或按钮。

##### 结构伪类

- :first-child/:last-child 用来选择作为父元素第一个子元素的元素。

- :nth-child(n) 

  其中，n可以是一个数字，表示固定的位置，如:nth-child(3)表示选择第三个子元素；也可以是一个公式，表示一个规律的位置，如:nth-child(2n)表示选择偶数位置的子元素；还可以是一个关键字，表示特殊的位置，如:nth-child(odd)表示选择奇数位置的子元素。

- :nth-last-child(n) 

  这个伪类选择器和:nth-child(n)类似，只是它是从后往前数的，而不是从前往后。例如，:nth-last-child(2)表示选择倒数第二个子元素，:nth-last-child(3n+1)表示选择倒数第3n+1个子元素，:nth-last-child(even)表示选择倒数偶数位置的子元素。

##### 否定伪类

- :not() 用来表示参数中未表示的任何元素

##### UI伪类

- :enabled 和 :disabled 用来选择可用和不可用的表单控件，比如按钮或输入框。
- :checked 用来选择被选中的表单控件，比如复选框或单选框。

#### 伪元素选择器

CSS常见的伪元素选择器是一种特殊的选择器，它可以用来修改元素的某个部分的样式，而不是整个元素。

伪元素选择器的语法是在选择器的末尾加上双冒号和伪元素的名称，例如：

```css
selector::pseudo-element {
  property: value;
}
```

##### 常见的伪元素选择器

- `::before` 和 `::after`：这两个伪元素可以用来在元素的前面或后面插入一些内容，通常配合 `content` 属性使用。这些内容可以是文本、图标、图片等，也可以是空字符串，然后用其他 CSS 属性来样式化它们。这种技术被称为“生成内容”，可以用来实现一些视觉效果，例如添加箭头、引号、装饰线等。
- `::first-line` 和 `::first-letter`：这两个伪元素可以用来修改元素的第一行或第一个字母的样式，例如改变颜色、大小、字体等。这些伪元素会根据元素的宽度和字体大小动态地调整，所以它们比直接用 HTML 标签包裹更灵活。
- `::selection`：这个伪元素可以用来修改用户选中的文本的样式，例如改变背景色、文字颜色等。这可以用来增强用户体验，让选中的文本更加突出或者与网站主题相协调。
- `::placeholder`：这个伪元素可以用来修改输入框中的提示文字(`playsholder="xxxx"`)的样式，例如改变颜色、大小、字体等。这可以用来提高输入框的可读性和美观性。

##### 参考效果

> [CSS伪元素选择器_super码力的博客-CSDN博客](https://blog.csdn.net/m0_61843874/article/details/125279592?ops_request_misc=%7B%22request%5Fid%22%3A%22169227136716800211575744%22%2C%22scm%22%3A%2220140713.130102334..%22%7D&request_id=169227136716800211575744&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-125279592-null-null.142^v93^koosearch_v1&utm_term=伪元素选择器&spm=1018.2226.3001.4187)
>
> [084_CSS\_伪元素选择器\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1p84y1P7Z5/?p=84&spm_id_from=pageDriver&vd_source=7ce3f834cb0c7108338f1996b4436d48)

## 伪类和伪元素的区别

伪类和伪元素都是 CSS 选择器的一种。

### 伪类

伪类是用来匹配元素的一些特定的状态(用来匹配某种状态的元素)，比如鼠标悬停、链接访问、表单输入等，也可以匹配一组元素中的某些元素，比如最后一个元素、第一个子元素、第 n 个子元素等。伪类的语法是在选择器后面加一个冒号和伪类名称，例如：

```css
a:hover { /* 匹配鼠标悬停在 a 元素上的状态 */
  color: red;
}

ul li:last-child { /* 匹配 ul 元素中的最后一个 li 元素 */
  color: blue;
}
```

### 伪元素

伪元素是用来匹配元素的一些特定的部分，比如第一行、第一个字母、生成的内容等。伪元素的语法是在选择器后面加两个冒号和伪元素名称，例如：

```css
p::first-line { /* 匹配 p 元素的第一行 */
  font-weight: bold;
}

div::before { /* 在 div 元素之前生成内容 */
  content: "Hello";
}
```

## 继承属性和不可继承属性

> 知道一些常用的经典属性的继承和不可继承性

### 可继承

字体系列属性

- `font-family`: 字体系列
- `font-size`: 字体大小
- `font-weight`: 字体粗细
- `font-style`: 字体样式（斜体、正常）

文本系列属性

- `color`: 文本颜色
- `line-height`: 行高
- `text-align`: 文本对齐方式
- `text-indent`: 文本缩进

其他

- `visibility`: 元素可见性

### 不可继承

- 盒子模型属性
  - `width`: 元素宽度	
  - `height`: 元素高度
  - `margin`: 外边距
  - `padding`: 内边距
  - `border`: 边框样式
- `background`: 背景样式（颜色、图片等）

- `position`: 定位方式（relative、absolute等）
- `display`: 显示方式（block、inline等）
- `float`: 浮动方式

## display的区别

> [块元素、行内块元素、行内元素小结 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/455597164)

### 区别

- block：默认宽度为父元素宽度，高度由内容撑开，参考文档。
- inline：元素不会独占一行，宽和高默认由内容撑开，**不能设置宽高**，以及上下方向的内外边距，（因为元素的高度由内容撑开）可以设置左右的内外边距。
- inline-block:元素不会独占一行，宽和高默认由内容撑开，但是可以正确的盒子模型的属性。

### 对应的元素

- block:
  - 排版标签：div, h1~h6, p,
  - 列表标签： ol(有序列表), ul(无序列表), li(列表)
  - **table**: 定义表格，可以用来显示表格数据或布局内容。
  - **form**: 定义表单，可以用来收集用户输入或提交数据。
- inline-block: img，button， input， textarea， select
- inline: 
  - 文本标签：a, em, strong, span, label, cite, code（只是用来包裹内容，设置样式）

## 隐藏属性的方法

> **回答要点：**
>
> - 隐藏属性的方式
>
> - 这些方式的区别
>
>   - 渲染树
>
>   - DOM
>
>   - 继承
>
>   - 回流和重绘
>
>   - 场景

### display: none

- 这个属性会让元素完全从渲染树中消失，不占据任何空间，也不影响其他元素的布局。
- 这个属性会导致元素无法进行 DOM 事件监听，不能点击，也不会被读屏器读取。
- 这个属性是非继承属性，子孙节点也会消失，即使修改子孙节点的属性也无法显示。
- 这个属性会引起文档的**重绘和重排**，性能消耗较大。
- 这个属性不支持 transition 动画效果。
- 这个属性适用于需要完全隐藏元素，并且不需要占据空间的场景，例如显示出原来不存在的结构。

### visibility: hidden

- 这个属性会让元素隐藏，但是不会让元素从渲染树消失，仍然占据空间，但是内容不可见。
- 这个属性会导致元素无法进行 DOM 事件监听，不能点击，但是会被读屏器读取。
- 这个属性是继承属性，子孙节点会继承隐藏状态，但是可以通过设置 visibility: visible 来取消隐藏。
- 这个属性只会引起本元素的**重绘**，性能消耗较少。
- 这个属性支持 transition 动画效果，但是隐藏时会立即生效，显示时会延时生效。
- 这个属性适用于需要隐藏元素，但是不影响页面结构的场景，例如显示不会导致页面结构发生变动，不会撑开。

### opacity: 0

- 这个属性会让元素透明度为 0%，隐藏，但是仍然占据空间，内容不可见。
- 这个属性不会影响元素的 DOM 事件监听，可以点击，也会被读屏器读取。
- 这个属性是继承属性，子孙节点也会继承透明度为 0%，且不能通过设置 opacity: 1 来取消隐藏。
- 这个属性可以提升为**合成层**，不会触发**重绘和重排**，性能消耗较少。如果不是合成层，那么会引起重绘
- 这个属性支持 transition 动画效果，可以延时显示和隐藏。
- 这个属性适用于需要隐藏元素，并且可以进行动画效果的场景，例如可以跟 transition 搭配。

## 盒子模型

在CSS中，盒子模型（Box Model）是用来描述元素排布和尺寸的基础概念。它确定了元素如何在页面上占据空间，以及它与其他元素的关系。主要有两种常见的盒子模型：W3C（标准）盒子模型 和 IE（传统）盒子模型。

### W3C 盒子模型（内容盒模型）

在W3C盒子模型中，元素的 `width` 和 `height` 只包括元素的内容（content），不包括边界（border）和内边距（padding）。这个模型的计算公式如下：

```
元素的总宽度/高度 = width/height（内容宽/高） + border + padding + margin
```

### IE 盒子模型（传统盒模型）

在IE盒子模型中，元素的 `width` 和 `height` 包含了内容、边界（border）和内边距（padding）。即这个模型的 `width` 和 `height` 属性定义的是包含内容、填充和边框的矩形的尺寸。这个模型的计算公式如下：

```
元素的总宽度/高度 = width/height（内容宽/高 + border + padding） + margin
```

### 区别

1. 地位：W3C盒模型被Accepted as a W3C Recommendation，IE盒模型则属于Quirks Mode（怪异模式）下的表现。
2. 尺寸计算方式：W3C盒模型的 width 和 height 只指内容部分，而IE盒模型的 width 和 height 却包含了内容、内边距、以及边框。
3. 控制方式：可以通过 CSS3 的 `box-sizing` 属性来控制浏览器使用何种盒模型，比如 `box-sizing: content-box;` 对应W3C盒模型，而 `box-sizing: border-box;` 则是应用IE盒模型。

### 应用场景

#### W3C标准盒子模型 (`content-box`) 应用场景：

- **图像画廊**：当你需要控制图像尺寸确保它们不会因为周围的边框或填充而变形时，这种模型非常适用。
- **广告插件**：如果你需要在页面中嵌入固定尺寸的广告插件，使用标准盒模型可以确保广告内容适应分配的空间，不受周边边框和内边距的影响。
- **按比例的布局元素**：例如，你可能需要几个宽度和高度按比例相等的元素，例如正方形的社交媒体图标；使用 `content-box` 可以确保它们的核心内容区保持相同尺寸，不受内边距或边框的影响。

#### IE盒子模型 (`border-box`) 应用场景：

- **响应式布局**：特别是当你希望元素的宽度根据屏幕尺寸百分比改变，同时元素内边距和边框保持不变时，`border-box` 能够让计算更加简单直接。
- **网页布局构建块**：在创建布局时，尤其是网格系统，`border-box` 模型允许你简单地设置列宽度为百分比，而无需担心内边距和边框会将列推出其容器的边界。
- **表单元素**：如输入框和按钮，当你希望这些控件匹配设计稿中固定的尺寸，且无论内边距如何变化都不会改变其整体尺寸时，可以使用 `border-box`。
- **UI组件**：如卡片、按钮和模态框等，如果你希望它们的尺寸包含所有的视觉部分（填充和边框），而不是内容本身，这种模型可确保组件大小不会因样式的变化而变化。

在实际项目中，很多开发者偏好在全局范围内设置 `border-box`，这样做可以简化盒模型的理解，同时减少在计算元素实际占用空间时的复杂度。例如：

```css
*, *:before, *:after {
  box-sizing: border-box;
}
```

这样，所有元素都将使用 `border-box` 盒模型，能够使CSS布局的制作更加直观和方便。

## CSS3的新增内容

CSS3 是 CSS 的最新版本，它增加了很多新的特性，让网页设计更加灵活和美观。根据网上的资料，我为你整理了一些 CSS3 的新特性，如下：

- 动态伪类选择器、目标伪类等多种伪类选择器、否定选择器（：no()）等。
- 盒子模型相关：边框与圆角，可以为元素添加圆角边框(**border-radius**)、盒阴影（**box-shadow**）等。
- 背景属性：背景与渐变，可以为元素添加多重背景、背景裁剪(**background-cilp**)、背景原点（**background-origin**）、背景尺寸(**background-size**)等。
- 文本属性：可以为元素添加文本换行（）、文本阴影（text-shadow）、文本溢出(text-overflow)等。
- 过渡，可以为元素添加平滑的状态变化效果，如颜色、大小、位置等。
- 动画，可以为元素添加复杂的动画效果，如关键帧、持续时间、延迟等。
- 布局，可以为元素添加灵活的布局方式，如弹性盒子（Flexbox）、多列布局（Multi-column Layout）等。
- 2D/3D 转换，可以为元素添加 2D 或 3D 的转换效果，如透视、旋转、缩放等²。

## 对于媒体查询的理解

媒体查询是一种 CSS3 的功能，它可以根据不同的媒体类型（如屏幕、打印机、语音等）和媒体特性（如宽度、高度、方向、分辨率等）来为不同的设备应用不同的样式规则。

媒体查询的作用是可以让网页适应不同的设备和环境，实现响应式的布局和设计。

媒体查询的使用方法是在 CSS 中使用 @media 规则，后面跟上一个或多个媒体类型和表达式，表达式可以用 and, not, or 和 only 等逻辑运算符连接，表示满足某些条件时应用相应的样式。例如：

```css
@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}
```

这个例子表示当媒体类型是屏幕，并且视口的宽度至少为 480 像素时，将网页的背景颜色设置为浅绿色¹。

您还可以在 HTML 中使用 link 或 style 标签来引入不同的样式表，或者在 JavaScript 中使用 matchMedia() 方法来检测媒体查询是否匹配¹⁴。

## 重绘与重排

> - 概念
> - 引起的方法有哪些？
> - 避免的方式

### 概念

- **重绘**：当一个元素的外观发生改变，但是没有改变布局（例如，改变颜色或背景图），浏览器会重新绘制该元素（只需要更新渲染树中的相关节点），这个过程叫做重绘。
- **重排（回流）**：当一个元素的几何属性（例如，宽度、高度、位置、边距等）发生变化，浏览器需要重新计算该元素及其周围元素的位置和大小，然后重新构建渲染树（可能是局部的渲染树被重建），并重新布局（layout）这些元素，这个过程叫做重排(回流)。
- 重排一定会引起重绘，但是重绘不一定会引起重排。

### 引起的原因

- **修改元素位置**
  - **添加或删除可见的DOM元素**：这会影响渲染树的结构，导致重排和重绘。

  - **隐藏元素**，display:none(回流+重绘)，visibility:hidden(只重绘，不回流)
  - 移动元素，如改变top、left或移动元素到另外1个父元素中(重绘+回流)

- **改变元素样式**

  - 改变元素的padding、border、margin(重排+重绘)
  - 改变浏览器的字体颜色（只重绘，不重排）
  - 改变元素的背景颜色（只重绘，不回流）

- **改变浏览器**

  - 改变浏览器大小(回流+重绘)

  - 改变浏览器的字体大小(回流+重绘)

### 减少重绘重排的方法

减少重绘和重排主要关注点在于最小化和集中布局的更改，并且尽可能减少与布局更改有关的操作。如果必须执行这些操作，则采用一些可以避免或减轻回流和重绘代价的技术。

1. **批量修改 DOM**:
   - 使用 `documentFragment` 对象在内存中构建新的DOM结构，然后一次性添加到文档中。
   - 使用 `innerHTML` 或 `textContent` 一次性写入大量的HTML内容，而不是逐个DOM元素地添加。
2. **避免不必要的DOM深度变更**:
   - 避免频繁地添加或删除DOM元素。如果需要，尽可能在离屏上进行，并最后一次性地将结果添加到DOM树中。
3. **最小化重排范围**:
   - 对于布局或几何属性的更改，尽可能作用于离屏或隐藏元素，之后再将其引入到布局中。
4. **合并多次样式更改**:
   - 尽量避免分散的样式操作，改为一次性更改 `class` 或使用 `cssText` 属性。
5. **优化CSS选择器**:
   - 避免使用复杂的CSS选择器，尤其是那些需要遍历多个DOM层次的选择器。
6. **利用现代布局技术**:
   - 使用Flexbox或Grid布局可以减少不必要的DOM操作和计算。
7. **避免触摸`triggers`属性**:
   - 避免频繁读取或修改引起回流的属性，如 `offsetTop`、`scrollTop`、`clientTop` 等。
8. **使用绝对定位**:
   - 将影响布局较少的元素设置为`position: absolute`或`position: fixed`，这样它们的变化不会影响到其他元素。
9. **利用CSS3硬件加速**:
   - 对于那些会引发视觉变化但不会影响布局的操作（例如动画），使用CSS3的`transform`和`opacity`属性来利用GPU加速。
10. **缓存Layout信息**:
    - 如果需要多次使用某些属性（例如元素的大小和位置等），在一次读取后将其缓存起来，避免后续引起回流。
11. **异步更新**:
    - 使用`requestAnimationFrame`进行视觉更改，确保它们发生在正确的时机，以减少回流和重绘。

## 单行、多行文本溢出

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

## <span id="link和@import的区别">link和@import的区别</span>

### 使用方法

#### link

link 标签的使用方法是，在 head 标签中，添加一个 link 元素，设置 rel 属性为 "stylesheet"，设置 href 属性为外部 CSS 文件的路径，例如：

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

这样就可以引入 style.css 文件中的样式。

#### @import

@import 的使用方法是，在 style 标签或者 CSS 文件中，添加一个 @import 规则，后面跟上外部 CSS 文件的路径，用 url() 包裹，用分号结束，例如：

  ```html	
<style>
  @import url("style.css");
</style>
  ```

或者 `@import url("style.css");`这样也可以引入 style.css 文件中的样式。

- 那比如说link请求一个css文件之后，里面有@import的内容，也有自己的样式内容，他的解析是怎么样的？先处理普通内容，当页面内容加载完毕再进行@import的加载吗？

  - 根据我搜索到的信息，link请求一个css文件之后，里面的@import的内容会在该css文件的其他样式内容之前被加载。¹²³

  - 也就是说，浏览器会先解析link标签引入的css文件，然后在该文件中遇到@import时，会暂停解析该文件的其他内容，去请求@import引入的css文件，并将其加载和应用。等到@import引入的css文件加载完毕后，浏览器才会继续解析link标签引入的css文件的剩余内容。¹²³

  - 这样做的好处是可以保证@import引入的css文件的样式优先级高于link标签引入的css文件的样式，避免样式被覆盖。¹²³

  - 但是这样做的缺点是会增加页面渲染的时间，因为浏览器需要等待两个css文件都加载完毕才能生成渲染树。¹²³

  - 因此，建议尽量避免在link标签引入的css文件中使用@import，或者将@import放在该文件的最后，以提高页面加载速度。¹²³

### 区别

link 和 @import 都是用来引入外部 CSS 文件的方法，但是它们有以下几点区别：

- link 是 HTML 标签，可以在 head 标签中使用，不仅可以引入 CSS 文件，还可以定义 RSS、rel 连接属性等；@import 是 CSS 语法规则，只能在 style 标签或者 CSS 文件中使用，只有引入样式表的作用。
- link 引入的 CSS 文件会在页面加载的同时被加载，不会影响页面的渲染；@import 引入的 CSS 文件会在页面加载完毕后才被加载，可能会导致页面闪烁【针对在style标签内使用import】。
- link 标签不存在兼容性问题，可以被所有浏览器识别；@import 只能被 IE5+ 以上的浏览器识别，低版本的浏览器会忽略它。
- link 标签可以通过 JS 操作 DOM 来动态改变样式；@import 不能通过 JS 来操作，因为它不属于DOM。

因此，一般建议使用 link 标签来引入外部 CSS 文件，避免使用 @import。

# 页面布局

## 布局单位 %

1. width, height的时候，参考的是父元素的宽和高
2. 对于padding和margin属性，百分比是相对于父元素的宽度计算的，无论是水平方向还是垂直方向。
3. font-size属性的时候，是相对于父元素的font-size
4. 对于定位元素（position不为static）的top、right、bottom和left属性，百分比是相对于最近的定位祖先元素（position不为static）的高度和宽度计算的。例如，如果最近的定位祖先元素的width为300px，height为200px，那么子元素的top: 10%就相当于top: 20px，left: 20%就相当于left: 60px。
5. 以上只是一些常见的情况，还有一些特殊的情况需要注意。例如，在transform属性中使用百分比时，是相对于自身元素的大小计算的；

## 关于定位你必须知道的

##### 1.1 绝对定位(其实没搞懂。。。。)

- **绝对定位的元素有自己的宽和高**

- **绝对定位的元素没有自己的宽和高**（但是这个是对的，针对没有宽高的情况）

  如果你给一个绝对定位的元素同时设置了left和right，那么它的宽度就会根据这两个属性的值来计算。例如，如果你设置了left: 50px; right: 50px; 那么它的宽度就会是父元素的宽度减去100px，也就是从距离左侧50px的位置到距离右侧50px的位置。

  同理，如果你给一个绝对定位的元素同时设置了top和bottom，那么它的高度就会根据这两个属性的值来计算。 例如，如果你设置了top: 50px; bottom: 50px; 那么它的高度就会是父元素的高度减去100px，记录上侧50px到距离下侧50px的位置。

  但是，要注意的是，这种计算方式只有在父元素或者祖先元素有定位属性（position: relative, absolute, fixed 或者 sticky）的时候才有效。 如果没有这样的祖先元素，那么绝对定位的元素就会相对于文档体进行定位，而文档体的宽度和高度取决于视口（浏览器窗口）的大小。

  所以，如果你想让一个绝对定位的元素占满整个父元素或者祖先元素的空间，你需要给它设置left: 0; right: 0; top: 0; bottom: 0; 并且确保父元素或者祖先元素有定位属性。

## flex布局

### 常见的flex缩写

- 如果写 flex:1 1 auto，则可简写为：flex:auto

- 如果写 flex:1 1 0，则可简写为：flex:1
- 如果写 flex:0 0 auto，则可简写为：flex:none
- 如果写 flex:0 1 auto，则可简写为：flex:0 auto —— 即 flex 初始值

### flex:1表示什么？

flex:1表示的是一个简写属性，它相当于flex:1 1 0，也就是说，它包含了三个子属性：

- flex-grow:1，表示项目可以根据比例放大，占据多余的空间。
- flex-shrink:1，表示项目可以根据比例缩小，适应容器的大小。
- flex-basis:0，表示项目在分配多余空间之前的大小为0。

flex:1的作用是让项目能够自动地填充容器的可用空间，如果所有项目都设置了flex:1，那么它们将等分容器的空间。

### flex布局的理解与其应用场景

对flex布局的理解，我认为是一种更灵活、更简洁、更强大的CSS布局方式，它可以解决传统布局方式的一些问题和局限性，比如：

- 传统布局方式依赖于display、position和float属性，它们不够直观，不易维护，容易出现浮动清除、高度塌陷等问题。
- 传统布局方式难以实现一些常见的布局需求，比如水平或垂直居中、等高布局、多列布局等，需要使用额外的标签或者复杂的计算。
- 传统布局方式不适应不同的屏幕尺寸和设备，需要使用媒体查询或者其他技术来实现响应式布局。

而flex布局可以通过简单的属性设置，就可以实现各种复杂的布局效果，而且可以自动适应可用空间的变化，提高了开发效率和用户体验。

## 两栏布局

> 两栏布局：左侧固定，右侧宽度自适应

### 利用浮动

#### 思路

- 固定左侧元素：宽度200px，高度给定100px，开启浮动
  - 首先确定了位置。
  - 开启浮动之后，脱离了文档流，这样就可以和div并排到一行中
- 右侧元素：设置高度，margin:left为200px
  - 宽度自适应
  - 设置margin表示距离父元素的左侧距离为200px，正好可以不被左侧遮盖。


#### 代码

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

### 浮动+BFC

#### 思路

BFC开启之后，不会被其他浮动的元素覆盖，因此可以实现并排+不被覆盖

- 左侧元素相同；
- 右侧元素设置overflow：hidden，即开启BFC
  - 设定高度100px，宽度为auto


#### 代码

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

### flex布局

flex布局可以实现多个块元素的并排；并可实现伸缩项目的拉伸和压缩，所以可以通过flex实现。

#### 思路

- 左侧元素设置：宽度即可
  - 因为flex默认是0 1 auto，也就是不拉伸，可压缩，宽高等于原来设置的。
  - ==高度不用设置的原因为：侧轴默认开启align-items:stretch，也就是如果伸缩项目没有设置高度，那么就会占满整个容器的高度。==

- 右侧元素设置：

  - flex:1，就等于flex：1 1 0，也就是可拉伸，可压缩，基线方向宽度为0，实际宽度等于拉伸压缩后的宽度。


#### 代码

```css
.outer {
    height: 100px;
    display: flex;
}
.left {
    /* 
    	默认flex为 0 1 auto，也就是不拉伸，可压缩，宽高等于你设定的值 
    	使用flex: none 也行，即不可压缩
    	*/
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

### 绝对定位（左元素定位）

> 使用相对定位可以脱离文档流，类似于float，然后右侧元素设置margin-left

#### 思路

- 左侧元素设置
  - 开启绝对定位，不设置top、left，元素就是在父元素左上角。

- 右侧元素设置

  - margin-left：200px
  - 宽度填满父元素


#### 代码

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

### 绝对定位（右元素定位）

#### 思路

1. 如果你不给定height和width，那么绝对定位的元素的高度和宽度会根据其内容和内边距自动调整。

2. 如果你同时设置了top和bottom或者left和right属性，那么绝对定位的元素的高度或宽度会根据两者之间的距离来确定

因为设置方式为：

- 左侧元素设置宽和高

- 右侧元素利用绝对定位

  - 上下为0，也就是高度自上而下
  - 左：200px（左侧元素的宽度），右0px，也就是从左侧200px到右侧最顶端


#### 代码

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


## 三栏布局

> 三栏布局：左和右固定，中间随页面进行变化

##### 难点是什么？

- 左中右在一行：浮动、flex、定位，浮动和定位是用来将元素脱离文档流的
- 如果让左右固定在两侧
  - 绝对定位设置；
  - flex布局默认左右在两侧，只需要设置中间使得左右两侧紧靠两侧边缘即可
- 如果让中间元素适应页面的宽度
  - 默认div宽度是是填满父元素，因此可以设置margin-left和margin-right，使得中间元素不与左右元素重合
  - flex布局中，伸缩项目可以实现拉伸，因此设置了左右宽度后，中间元素设置拉伸即可

### 使用定位

#### 思路

- 父元素开启相对定位，变为包含块（也是定位元素）

- 左侧元素开启绝对定位，默认top：0，left：0，因此会在左侧带着

  - 设置高度和宽度即可

- 右侧元素开启绝对定位

  - 设置高度=父元素高度，宽度为200px
  - 右元素定在右侧，即为right:0（距离右侧为0），top:0

- 中间元素设置左右的margin为200px，并且设置高度，然后宽度填满父元素即可。


#### 代码

```css
<style>
    /* 使用定位 */
    .outer {
        position: relative;
        height: 100px;
    }
    /* 左侧绝对定位，默认是left：0， top: 0*/
    .left {
        position: absolute;
        width: 200px;
        height: 100px;
        background-color: skyblue;
    }
    /* 右侧为0， 上侧为0*/
    .right {
        position: absolute;
        width: 200px;
        height: 100px;
        right: 0;
        top:0;
        background-color: black;
    }
    /* 设置margin*/
    .mid {
        margin-left: 200px;
        margin-right: 200px;
        height: 100px;
        background-color: tomato;
	}
</style>


<body>
    <div class="outer">
        <div class="left"></div>
        <div class="mid"></div>
        <div class="right"></div>
    </div>
</body>
```

### 使用flex布局

#### 思路

- 左右两侧正常设置盒子的宽和高；

- 中间的设置flex:1，也就是可伸缩，并且基线长度取决于伸缩长度。


#### 代码

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

### 使用浮动

#### 思路

- 左侧左浮动
- 中间设置margin
- 右侧右浮动 -> 中间也可以开启BFC

注意，调整右边和中间的位置

#### 代码

```html
    <style>
      .outer {
        height: 100px;
      }
      .left {
        width: 200px;
        height: 100px;
        float: left;
        background-color: rgb(201, 132, 42);
      }
      .mid {
        height: 100px;
        margin-left: 200px;
        margin-right: 200px;
        background-color: rgb(207, 202, 40);
      }
      .right {
        width: 200px;
        height: 100px;
        float: right;
        background-color: rgb(224, 84, 192);
      }
    </style>

  <body>
    <div class="outer">
      <div class="left"></div>
      <div class="right"></div>
      <!-- 
            要保证先写right，再写mid
            因为先写mid的话，会独占一行，
            right不会影响到上面的元素，
            所以right会跑到下一行中
      -->
      <div class="mid"></div>
    </div>
  </body>
```

## 水平垂直居中

> 该场景是子元素在父元素的水平垂直居中

### 绝对定位+transform

#### 场景

无需知道父元素和子元素的宽高

#### 思路

- 对子元素使用绝对定位，调整元素的左上角到达父元素的中心点

- 使用transform(-50%, -50%)将元素沿着x轴和y轴移动距离自身50%的距离，也就是将子元素中心点移动到子元素原来左上角的地方

#### 代码

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

### 绝对定位+margin

#### 场景

知道父元素和子元素的宽高

#### 思路

和上面同理，只是移动子元素的方式有变化，使用margin移动将子元素的左上角移动到父元素的中心点

- 设置margin-left: - 子元素宽度

- 设置margin-top: -子元素高度


#### 代码

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

### 绝对定位+margin:auto

#### 场景

无需知道父子元素的宽高

#### 思路

设置到达边缘的距离为0，然后开启margin，进行填充

#### 代码

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

### 使用margin + BFC

#### 场景

知道父子元素的高度

#### 思路

- 子元素使用margin: (父元素高度 - 子元素高度) / 2 auto
  
  这样设置了水平垂直居中，但是会有margin塌陷的问题。
- 对父元素开启overflow:hidden，也就是开启BFC，防止margin塌陷


#### 代码

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

### 使用flex布局（1）

#### 场景

无需知道父子元素宽高

#### 思路

- 开启父元素的flex布局
  - 设置主轴对齐方式:justify-content:center
  - 设置侧轴对齐方式:align-items:center


#### 代码

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

### 使用flex布局（2）

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

## 文字水平垂直居中

Html结构

```html
<div class="center">你好</div>
```

CSS基础设置

```css
.center {
    width: 200px;
    height: 200px;
    background-color: burlywood;
}
```

##### 方法1

- text-align 文本水平居中
- inline-height 设置文字所在行的高度 ≈ 文字高度 + 上下空隙
- 只适合单行文字

```css
.center {
    text-align: center;
    line-height: 200px;
}
```

## 媒体查询

> [【CSS】关于媒体查询media那些事儿 - 掘金 (juejin.cn)](https://juejin.cn/post/7180579457487339581?searchId=20230817222234577FF5253771C134F9B8)

### 24. 行内空白问题

> [131_CSS_元素之间的空白问题_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1p84y1P7Z5?p=131&spm_id_from=pageDriver&vd_source=7ce3f834cb0c7108338f1996b4436d48)

#### 相邻行内元素和行内块元素之间的空白问题

##### 原因

行内元素书写时，会受到中间空白（回车空格）等的影响，因为空格也属于字符，这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为0，就没有空格了。

##### 解决方法

1. 相邻元素代码代码全部写在一排；
2. 在父级元素中用font-size:0，子元素重新设置。

#### 行内块的幽灵空白问题

> [132_CSS_行内块的幽灵空白问题_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1p84y1P7Z5?p=132&spm_id_from=pageDriver&vd_source=7ce3f834cb0c7108338f1996b4436d48)

##### 描述

行内块放在div中，不会出现下边缘对齐，而是有空隙

### 25. 文本溢出?

#### 单行文本溢出

[如何实现单行／多行文本溢出的省略样式？ - 掘金 (juejin.cn)](https://juejin.cn/post/7121580541010411533)

#### 多行文本溢出

# 定位与浮动

## 关于浮动

### 浮动的特点

- 🤢脱离文档流。
- 😊不管浮动前是什么元素，浮动后：默认宽与高都是被内容撑开（尽可能小），而且可以设置宽高。
- 😊不会独占一行，可以与其他元素共用一行。
- 😊不会 margin 合并，也不会 margin 塌陷，能够完美的设置四个方向的 margin 和 padding 。
- 😊不会像行内块一样被当做文本处理（没有行内块的空白问题）。

**注意：什么是文档流呢？**

文档流是指网页中元素的排列方式，遵循从上到下，从左到右的顺序。文档流中的元素会自动占据页面的空间，并且不会重叠。

### 浮动带来的问题

- **对兄弟元素的影响**： 后面的兄弟元素，会占据浮动元素之前的位置，在浮动元素的下面；对前面的兄弟无影响。

- **对父元素的影响**： 不能撑起父元素的高度，导致父元素高度塌陷；但父元素的宽度依然束缚浮动的元素。

### 解决方案

- 方案一： 给父元素指定高度。（只能解决父元素）

- 方案二： 给父元素也设置浮动，带来其他影响。（能解决父元素的高度问题，但是父元素相关的问题会产生）

- 方案三： 给父元素设置 overflow:hidden 。（开启了BFC，消除浮动带来的高度塌陷的影响）

- 方案四： 在所有浮动元素的最后面，添加一个块级元素，并给该块级元素设置 clear:both 。（清除当前元素前面浮动元素的影响）

- 方案五： 给浮动元素的父元素，设置伪元素，通过伪元素清除浮动，原理与方案四相同。===> 推荐使用，但是如果存在不浮动的div，也会导致失效

  ```css
  .father::after {
      content: '';
      display:block;
      clear:both;
  }
  ```

### 浮动小练习

1. 初始的时候，都为块元素，独占一行，

   - 设置box1右浮动之后，因为box1前面没有块元素或者行内元素，所以直接浮动

   - 然后后面的内容顶上来
   - 如果设置box2的宽度100%，我们可以看到，box1压到了box2。

   ```html
       <style>
           .outer {
               width: 500px;
               background-color: burlywood;
               border: 2px solid rgb(221, 166, 166);
           }
           .box {
               width: 100px;
               height: 100px;
               margin: 10px;
               border: 1px solid black;
               background-color: rgb(20, 125, 159);
           }
           .box1 {
               float: right;
           }
   		/*
           .box2 {
               width: 100%;
           } */
       </style>
       <body>
           <div class="outer">
               <div class="box box1">1</div>
               <div class="box box2">2</div>
               <div class="box box3">3</div>
           </div>
       </body>
   ```

## BFC

> BFC的含义 -> BFC的作用 -> BFC的开启方式

### BFC的含义

BFC是块级格式化上下文的缩写，它是CSS中的一个概念，指的是一种独立的布局环境，其中的元素按照一定的规则进行排列。BFC可以看作是一个隔离的容器，容器内部的元素不会影响到外部的元素，并且具有一些特殊的效果。

通俗地说，BFC就是一个独立的空间，里面的元素不会和外面的元素互相影响。

比如，如果一个元素触发了BFC，

- 那么它就可以包含浮动的子元素，它的高度不会塌陷；


- 它可以阻止外边距塌陷（父元素开启BFC，子元素开不开启都行（实测）），避免相邻元素(都开启bfc)之间的margin合并；

- 它可以防止被浮动元素覆盖，实现自适应的布局。

注意是里面的元素不会影响外面的元素，所以只对子元素开启BFC无法解决margin塌陷的问题，对父元素开启之后，子元素的外边距就不会跑到父元素外面了，但是注意，父元素本身可能还会影响到外部元素。

### 开启BFC

要触发BFC，有一些常用的CSS属性，比如：

- 根元素：HTML
- 开启浮动
- position为absolute或fixed
- overflow除了visible以外的值（hidden、auto、scroll）
- display为inline-block、table-cell等值；
- 伸缩项目（也就是父元素开启flex后，子元素是bfc）

### BFC的作用

- 解决margin塌陷问题

- 本身不会被浮动元素所覆盖

- 解决开启浮动的高度塌陷问题

### 能够开启BFC的原理【第一次见】

它们都会改变元素的布局模式或者显示方式，从而使元素形成一个独立的空间，不受外部元素的影响，也不影响外部元素。

- 给元素设置 `float` 属性不为 `none`，使其浮动，会让元素脱离正常的文档流，不占据空间，而是沿着左边或右边的边缘排列。这样就会形成一个新的BFC，防止浮动元素和非浮动元素重叠。
- 给元素设置 `position` 属性为 `absolute` 或 `fixed`，使其绝对定位，也会让元素脱离正常的文档流，不占据空间，而是根据相对于最近的定位祖先元素或者视口的偏移量来定位。这样也会形成一个新的BFC，防止绝对定位元素和其他元素重叠。
- 给元素设置 `overflow` 属性不为 `visible`，使其溢出隐藏，会让元素的内容在超出边框时被裁剪或者显示滚动条。这样会形成一个新的BFC，防止溢出内容和其他元素重叠。
- 给元素设置 `display` 属性为 `inline-block`，`table-cell`，`flex` 等，使其变为非块级元素，会让元素按照不同的规则来排列和显示。这样也会形成一个新的BFC，防止外边距重叠。

## margin重叠问题

margin重叠问题是指两个或多个块级元素在垂直方向上的外边距（margin）合并为一个单一的外边距

margin重叠问题可以分为两种情况：margin合并问题和margin塌陷问题。

### margin塌陷问题

margin塌陷问题是属于margin重叠问题的一种，他们都是发生在多个块元素垂直方向上外边距的问题，margin塌陷指第一个子元素的上外边距与父元素的外边距发生重叠（合并为大的），最后一个子元素的下外边距与父元素的外边距发生重叠。

margin塌陷问题的解决方法有以下几种：
- 给父元素设置边框（border）或者内边距（padding）。

- 给父元素开启BFC规则（overflow:hidden，定位等都可以），改变父元素的渲染规则。

  ```css
  .outer {
      width: 100px;
      height: 100px;
      background-color: burlywood;
      /* overflow: hidden; */
      /* float: left; */
      /* display:inline-block */
      /* position: absolute; */
  }
  .inner {
      width: 50px;
      height: 50px;
      background-color: rgb(222, 135, 144);
  
      margin-top: 20px;
  
  }  
  ```

- 给子元素使用绝对定位（position:absolute）或者浮动（float）来脱离文档流。

  这是因为浮动的元素和绝对定位会让元素脱离文档流，脱离文档流的元素的外边距不会被重叠。

  ```css
  .inner {
      width: 50px;
      height: 50px;
      background-color: rgb(222, 135, 144);
      /* position: absolute; */
      /* float: left; */
      margin-top: 20px;
  }  
  ```

- 使用将子元素元素设置为行内块元素display:inline-block.

  因为只有块元素才会发生margin塌陷的问题。

### margin合并问题

margin合并问题是指两个或多个并列的块级元素在垂直方向上的外边距合并为一个单一的外边距。

margin合并问题的解决方法有以下几种：

- 只设置其中一个元素的外边距值，避免两个外边距相遇。
- 给两个元素分别添加父元素，并触发BFC（块级格式化上下文），比如设置overflow为hidden或auto，或者设置display为inline-block或table-cell等。
- 给元素添加边框、padding等

解决只有两个的：

- 将**底部的元素**设置为浮动或者绝对定位脱离文档流。

- 使用将底部元素设置为行内块元素display:inline-block

  

使用行内块元素可以解决margin重叠问题的原因是，行内块元素不属于块级元素，而只有块级元素之间才会发生垂直方向上的margin合并。因此，如果将父元素或子元素设置为display:inline-block，就可以避免margin重叠的现象。

## position属性

> [CSS布局技巧 （定位position） | 前端实践 | 青训营 - 掘金 (juejin.cn)](https://juejin.cn/post/7264921418810818575)
>
> 粘性定位：
>
> - [142_CSS\_粘性定位\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1p84y1P7Z5/?p=142&spm_id_from=pageDriver&vd_source=7ce3f834cb0c7108338f1996b4436d48)

| 属性值   | 相对定位元素                                                 |
| -------- | ------------------------------------------------------------ |
| relative | 相对于元素自身的位置                                         |
| absolute | 相对于第一个拥有定位属性(绝对定位，相对定位，固定定位)的祖先元素 |
| fixed    | 相对于整个屏幕视口                                           |
| sticky   | 相对于离他最近的具有滚动机制的祖先元素                       |
| static   | 默认定位，也就是postion的默认值，不开启定位功能              |

### 相对定位

**相对定位元素可以覆盖其他元素吗**？

相对定位的元素可以盖在其他元素上面，是因为它们的**层叠顺序（z-index）**比其他元素高。层叠顺序决定了哪些元素在视觉上位于其他元素之上。相对定位的元素的默认层叠顺序是 0，而未定位的元素的默认层叠顺序是 auto，相当于 -1。因此，相对定位的元素会覆盖未定位的元素。相对定位的元素并不会脱离文档流，因为它们仍然占据原来的位置，只是在**视觉上偏移**了一定的距离。

**如果都设置了相对定位，如果某个元素移动，和其他具有相对定位的元素重叠，谁在上面呢？**

如果都设置了相对定位，那么元素的层叠顺序（z-index）就会决定谁在上面。相对定位的元素的默认层叠顺序是 0，但是可以通过设置 z-index 属性来改变它。一般来说，**后出现在 HTML 文档中的元素会覆盖先出现的元素**，除非先出现的元素有更高的 z-index 值。你可以参考这个例子来理解相对定位元素之间的重叠关系。

### 粘性定位

概念：粘性定位可以让一个元素在滚动到一定位置时固定在屏幕上，而在其他位置时保持相对定位。粘性定位它的行为取决于具有滚动机制的祖先元素和指定的阈值。

```css
.first {
    postion: sticky; 
    top: 10px;
}
```

顶部距离**具有滚动机制祖先元素**为10px的时候粘住，当**父元素**消失在视口中的时候粘性定位的元素也会消失。

### 滚动机制

拥有滚动机制的元素是指当元素的内容溢出其区域时，可以使用滚动条来显示或隐藏多余的内容。在css中，可以使用overflow属性来设置元素是否拥有滚动机制，以及如何处理溢出的内容。overflow属性的常用值有：

- auto：如果内容溢出，浏览器会自动显示滚动条。
- hidden：如果内容溢出，浏览器会隐藏多余的内容。
- scroll：无论内容是否溢出，浏览器都会显示滚动条。
- visible：如果内容溢出，浏览器会显示多余的内容。

### 定位元素中脱离文档流

当元素的 position 属性值为 absolute, fixed 或 sticky 时，它就会脱离文档流，也就是说，它不再占据原来的空间，而是根据相对于它的定位上下文的偏移量来确定它的位置。这些元素可以使用 z-index 属性来调整它们在 z 轴上的堆叠顺序。

### 查漏补缺

#### 5. 常见的初始化CSS样式

#### 6. 媒体查询相关

#### 7. CSS预处理器 -> SASS为主

#### 8. margin为负

> [前端全栈基础之CSS中margin负值 (baidu.com)](https://baijiahao.baidu.com/s?id=1770638806593056118&wfr=spider&for=pc)

margin-left 和margin-top为负，会移动自身，

margin-right和margin-bottom为负，会影响到右侧和下侧内容

# CSS动画

## transform

**`transform`**：此属性允许您在不影响页面布局的前提下，对元素进行旋转、缩放、倾斜或偏移等变换。`transform` 主要由以下几个方法：

- `rotate(角度)`: 此函数以指定的角度值旋转元素。例如，`transform: rotate(45deg);` 会将元素顺时针旋转45度。
- `scale(x, y)`: 此函数可缩放元素的宽度（x）和高度（y）。例如，`transform: scale(1, 2);` 会将元素的高度缩放2倍，宽度保持不变。
- `translate(x, y)`: 此函数会平移元素，即改变元素的位置。例如，`transform: translate(50px, 100px);`会将元素沿x轴移动50px，沿y轴移动100px。
- `skew(x, y)`: 此函数用来倾斜元素，x是沿X轴的倾斜角度，y是沿Y轴的倾斜角度。例如，`transform: skew(30deg, 20deg);` 会分别沿X轴和Y轴倾斜元素。

## transition

### 基本使用

transition：这个属性是用来控制CSS属性改变时的过渡效果的，使得属性的变化不会立即发生，而是在一定的时间内逐渐过渡到最终状态。

transition 包括以下几个方面：

#### transition-property

##### 作用

指定过渡效果的CSS属性名称，如 `all` 或具体属性名（如`opacity`）。

##### 注意

不是所有的属性都能过渡，值为数字，或者值能转为数字的属性，都支持过渡，否则不支持过渡。

常见的支持过渡的属性有：颜色、长度值、百分比、 z-index 、 opacity 、 2D 变换属性、 3D 变换属性、阴影

#### transition-duration

指定过渡效果持续的时间，使用时间单位，如 `seconds` 或 `milliseconds`（例如`1s` 或 `200ms`）。

#### transition-timing-function

指定过渡效果的时间曲线。有多种预设的曲线，如 `linear`, `ease`, `ease-in`, `ease-out` 和 `ease-in-out`，或者你可以使用 `cubic-bezier` 函数来定义自己的曲线。

#### transition-delay

设置过渡效果开始前的延迟时间。

#### transition 

复合属性如果设置了一个时间，表示duration；如果设置了两个时间，第一是duration，第二个是delay ；其他值没有顺序要求。

### 注意



## 动画基本使用

### 定义关键帧

在CSS中，要定义动画的起始和结束状态，您需要使用 `@keyframes` 规则。`@keyframes` 规则允许您在动画序列的不同点上创建样式的变化，这些点可以是动画开始、结束，或者任意中间位置的状态。

以下是一个定义了动画起始和结束状态的示例，其中动画名称为 `example`：

```css
@keyframes example {
  from { /* 动画开始的状态，相当于0% */
    background-color: red;
    transform: scale(1);
  }
  to { /* 动画结束的状态，相当于100% */
    background-color: blue;
    transform: scale(2);
  }
}
```

这个 `example` 动画将改变元素的背景颜色和尺寸。你也可以使用百分比来定义动画的中间点：

```css
@keyframes example {
  0% { /* 动画开始 */
    background-color: red;
    transform: scale(1);
  }
  50% { /* 动画中间点 */
    background-color: yellow;
    transform: rotate(45deg);
  }
  100% { /* 动画结束 */
    background-color: blue;
    transform: scale(2);
  }
}
```

### 设置元素动画效果

一旦定义了 `@keyframes`，你可以通过元素的 `animation` 属性将动画绑定到特定的元素上：

```css
.element {
  animation-name: example; /* 使用上面定义的动画名称 */
  animation-duration: 2s; /* 动画持续时间 */
  animation-fill-mode: forwards; /* 保持动画结束状态 */
  /* 也可以添加animation-delay, animation-timing-function等属性 */
}
```

`animation-fill-mode` 可以设置动画在运行之前和之后如何将样式应用于其目标。例如，如果你想要在动画完成后元素保持结束状态的样式，可以使用 `forwards` 值。

请注意，在使用 `animation` 属性时，应保证元素的选择器正确，且 `@keyframes` 已被定义。这样才能确保动画能按预期运行。

## 常见动画面试题

### 在屏幕中心画圆，让圆转一秒歇一秒

首先使用`border-radius`获得一个圆，然后设置动画，0-50%设置旋转，50%-100%设置静止不动。函数使用linear，可以使得0-50是1S，剩余是1S。

```css
body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle {
    width: 100px;
    height: 100px;
    background-color: #3498db;
    border-radius: 50%;
    animation: rotate-pause 2s linear infinite;
    transform-origin: left top;
}

@keyframes rotate-pause {

    0% {
        /* 从0%至50%，对应1秒内完成360度旋转 */
        transform: rotate(0deg);
    }

    50%,
    100% {
        /* 从25%至50%，对应1秒持续静止状态（不旋转）；然后再旋转和停止 */
        transform: rotate(360deg);
    }
}
```



# CSS面试实现

## 绘制形状

> - [【CSS·圆角边框】有关border-radius属性的记录以及实现原理 - 掘金 (juejin.cn)](https://juejin.cn/post/7128323600028794916?searchId=20240403104047497DFB802B8F625DB32B)
> - [纯CSS画三角原理解析 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903567795421197?searchId=20230803095753F6112B1D1DEC6B1FC9A7)

### 自适应正方形

利用vh/vw

```css
.inner {
    width: 50vh;
    height: 50vh;
    background-color: aqua;

}
<div class="outer">
	<div class="inner"></div>
</div>
```

### 三角形

#### 等腰三角形

```html
<style>
    /* 
    	等腰三角形 
    		不需要设置对边，例如画向下的三角形，只需要上左右
    */
    .circle {
        width: 0px;
        height: 0px;
        border-top: 100px solid red;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
    } 
</style>
<body>
    <div class="circle"></div>
</body>
```

#### 直角三角形

```HTML
<style>
    .circle {
        width: 0px;
        height: 0px;
        border-top: 100px solid red;
        border-left: 100px solid transparent;
    }
</style>
<body>
    <div class="circle"></div>
</body>
```

### 扇形

#### 边框

利用边框，四个三角，然后设置一个圆角为边框的宽度，其他边框透明。

```css
.shanxing {
    width: 0px;
    height: 0px;
    border-radius: 100px;
    border:100px solid transparent;
    border-top: 100px solid red;

}
```

#### 盒子

就是角度不一样

```css
.shanxing {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 100px 0px 0px 0px;
}
```

### 圆形

#### 边框

```css
.yuanxing {
    width: 0;
    height: 0;
    border: 100px solid red;
    border-radius: 100px;
}
```

#### 盒子模型

```css
.yuanxing {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50px;
}
```

### 半圆

#### 边框

```css
.banyuan {
    width: 0px;
    height: 0px;
    border: 100px solid red;
    border-radius: 100px ;
    border-top-color: transparent;
    border-left-color: transparent;
}
```

#### 盒子模型

设置右下，左下的弧度的半径

```css
.banyuan {
    width: 100px;
    height: 50px;
    background-color: red;
    border-radius: 0px 0px 50px 50px;
}
```

### 梯形

#### 使用`clip-path`

左上，右上，右下，左下

```css
div {
    width: 200px;
    height: 100px;
    background-color: red;
    clip-path: polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%);
}
```

#### 

## 特殊的设置

### 画一条0.5px的线

```css
<style>
    div {
        width: 100px;
        height: 1px;
        background-color: red;
        transform: scaleY(0.5);
        transform-origin: 0% 0%;
    }
</style>

<body>
	<div></div>
</body>
```

### 如何实现字体小于12px

> - [如何让Chrome支持小于12px的文字【前端每日一题-5】 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903888747757582?searchId=202404031154424693DAA84D81E868E158)
> - [如何实现字体小于 12px 以及边框 0.5 px？ - 掘金 (juejin.cn)](https://juejin.cn/post/7118029219698835470?searchId=202404031154424693DAA84D81E868E158)

**注意**

1. 设置缩放原点

2. 要保证元素为block或者inline-block，因为scale属性只对可以定义宽高的元素有效

```html
<style>
    div {
        font-size: 20px;
        transform: scale(0.5);
        transform-origin: 0% 0%;
    }
</style>
</head>

<body>
    <div>
        你好
    </div>
</body>
```

```html
<style>
    span {
        font-size: 20px;
        transform: scale(0.5);
        transform-origin: 0% 0%;
        display: inline-block;
    }
</style>
</head>

<body>
    <span>
        你好
    </span>
</body>
```

# 性能优化

### CSS性能优化

#### 提高代码质量

1. 尽量使用CSS属性的简写，例如想设置四个方向的margin，可以直接使用margin来书写
2. 避免过多层数，选择器的嵌套
3. 避免过多的通配符选择器的内容
4. 多个元素存在共同的样式，我们可以提取公共的样式；
5. 利用属性的继承，减少CSS代码量。【哪些属性可以继承呢？】

#### 

1. 避免使用css import导入样式 ，而是使用link标签
   - CSS @import会阻塞页面的渲染，导致页面加载速度变慢。 这是因为浏览器在解析HTML时，如果遇到link标签，会并行下载外部CSS文件，而如果遇到@import规则，会等待当前CSS文件下载完毕后再下载引入的CSS文件。这样就造成了额外的网络延迟和渲染延迟。
   - CSS @import会影响CSS文件的缓存，导致页面性能下降。这是因为浏览器在缓存CSS文件时，会根据link标签的属性来判断是否需要缓存，而@import规则则不受这些属性的影响。这样就可能导致浏览器每次都需要重新下载引入的CSS文件，而不是从缓存中读取。
2. 尽量减少页面的重绘和重排

# CSS不常见的面试题

## 属性相关

### 1. css如何实现省略号

`text-overflow: ellipsis`
