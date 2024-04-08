相关资源：

[前端面试必备 | Vite 篇（P1-30） - 牛客网 (nowcoder.com)](https://www.nowcoder.com/issue/tutorial?zhuanlanId=Mg58Em&uuid=8e9ff865b0d84b46833cbfe45a5c001d)

[esbuild 原理与应用实战 - sunny_的专栏 - 掘金 (juejin.cn)](https://juejin.cn/column/7285233095058718756)



# Vite原理篇

## 预构建

### 预构建目的

1. 将其他格式 (如 UMD 和 CommonJS) 的产物转换为 ESM 格式，使其在浏览器通过 `<script type="module"><script>`的方式正常加载。

2. 打包第三方库的代码，将各个第三方库分散的文件合并到一起，减少 HTTP 请求数量，避免页面加载性能劣化【以lodash为例】。

### 哪些内容会被预构建

1. **入口文件分析**：Vite 首先查看项目的入口文件，通常是 `index.html` 中通过 `<script type="module" src="...">` 引入的 JavaScript 文件。Vite 解析这些入口模块并搜集它们的所有 `import` 语句。
2. **依赖传递**：在解析入口文件时，Vite 会递归地追踪所有 `import` 导入的依赖，并将这些依赖添加到预构建列表中。这意味着 Vite 不仅会查看直接导入的文件，而且会继续查看这些文件导入的所有文件，形成一棵完整的依赖树。
3. **package.json中的字段**：Vite 会检查项目的 `package.json` 文件中的 `dependencies` 和 `devDependencies` 字段，并预构建那些可能是非 ES 模块的依赖。在现代前端开发中，通常期望依赖能够提供一个 `module` 字段，它会指向一个ES模块格式的入口点。如果依赖没有这个字段，或者该字段指向的不是有效的ES模块，Vite 就会优先考虑预构建这个依赖。
4. **配置文件指令**：在 `vite.config.js`（或 `vite.config.ts`）文件中，开发者可以通过 `optimizeDeps` 配置项的 `include` 和 `exclude` 字段显式地声明哪些依赖应当被预构建或排除。这通常用于解决特定的兼容性问题或者当你有更明确地控制哪些模块应该被预构建。
5. **常见的大型库**：Vite 识别一些常用的大型库（例如 `lodash`），即使它们没有直接被入口文件引用，Vite 也可能会决定预构建它们。因为在实际开发过程中经常会逐步引入这些库的子模块。

### 文件被预构建流程

当 Vite 发现一个文件需要被预构建时，会经历以下的步骤和过程：

1. **依赖发现**：
   - Vite 在启动时分析 `index.html` 和项目的入口文件来确定需要导入的模块。
   - 对每个导入的模块，Vite 会递归地解析其依赖树，包括所有的 `import` 和 `require` 调用。
2. **预构建决定**：
   - Vite 会检查每个模块是否以有效的 ESM 格式存在，通常是查找包的 `module` 或 `esmodule` 字段。
   - 对于那些非 ESM 或具有大量内部模块的依赖，Vite 会决定对其进行预构建。
3. **转译与打包**：
   - Vite 使用 Rollup 或 esbuild（根据配置）来打包和转译代码。
   - 同时将可能存在的 CommonJS、UMD 或其他非 ESM 代码转换为 ESM。
   - 如果有的话，执行任何配置中指定的插件转译过程，例如处理 TypeScript、JSX 等。
4. **优化存储**：
   - Vite 将预构建的依赖存储在一个缓存目录中，默认是项目根目录下的 `node_modules/.vite`。
   - 这些文件被打包成几个大型的 ESM 模块文件，而不是许多散落的小文件。
5. **模块路径重写**：
   - 在预构建过程中，Vite 会重写模块的导入路径，确保它们指向预构建后的缓存位置。
   - 开发服务器在提供文件时会解析这些重写后的导入路径，确保浏览器请求的是处理过并缓存在本地的版本。
6. **模块热更新**：
   - 为了支持快速热更新（HMR），Vite 会监控源代码的改动，并在必要时仅重新构建改动的部分。
7. **浏览器加载**：
   - 当浏览器请求文件时，Vite 开发服务器会提供预构建的模块，而不是原始的 npm 包文件。
   - 由于预构建的模块已经是 ESM 格式，并且是打包合并后的，所以加载速度会更快，使得开发体验更加流畅。

#### 预构建源码流程

### 预构建原理

#### 缓存判断

> Vite 中的预构建主要针对第三方依赖，也就是通常位于 `node_modules` 文件夹中的模块。因此影响到预构建内容的，追要是项目配置，依赖变化等。

##### 核心流程

1. **计算哈希值**：
   Vite 针对项目配置、依赖(lock files)，以及其他可能影响预构建结果的因素计算一个哈希值。
2. **缓存文件(_metadata.json)**：
   每次预构建后，Vite 会将一些元信息，包括刚刚提到的哈希值，写入到 `_metadata.json` 文件中。这个文件存储在缓存目录中。
3. **判断缓存是否命中**：
   在下次启动开发服务器时，Vite 将重新计算当前配置的哈希值，并将其与 `_metadata.json` 中存储的哈希值进行比较。如果两者一致，意味着缓存命中，此时会跳过预构建。
4. **读取和反序列化_metadata.json**：
   Vite 尝试读取 `_metadata.json` 文件，并将其中的 JSON 字符串反序列化成 JavaScript 对象。【在判断hash值是否相等时使用】
5. **日志输出和返回**：
   如果命中缓存，则会在控制台输出提示信息，并返回之前的预构建数据，使得开发环境可以立即启动，使用存储的预构建内容。

#### 依赖扫描

如果没有命中缓存，则会正式地进入依赖预构建阶段。不过 Vite 不会直接进行依赖的预构建，而是在之前探测一下项目中存在哪些依赖，收集依赖列表，也就是进行`依赖扫描`的过程。

##### 1. 获取入口



#### 依赖

## 热更新

> 通过 HMR 的技术我们就可以实现`局部刷新`和`状态保存`

## 打包工具

### Esbuild

#### 作用

1. 依赖预构建阶段：作为 Bundle 工具，完成ESM转换以及文件打包。

2. TypeScript 和 JSX 编译：esbuild 将 TypeScript 和 JSX 代码快速编译成 JavaScript。在这个过程中，它并不执行类型检查，而是仅仅转换语法。类型检查可以在 IDE 中或通过运行 tsc 命令独立完成。

3. 生产环境中 Esbuild 压缩器通过插件的形式融入到了 Rollup打包流程中，来进行生产环境的代码压缩，包括 JS 代码和 CSS 代码。

   Esbuild 被用于压缩的原因包括：

   - **速度**：esbuild 的压缩速度非常快，能够在短时间内处理大量代码。
   - **效率**：虽然可能不提供最高级别的压缩比（其他压缩工具如 Terser 可能在某些情况下提供更小的压缩输出），但 esbuild 的压缩效率和速度之间的平衡使其成为优秀的选择。

#### 代码压缩的内容

在生产阶段，对于使用ES Modules (ESM) 的项目，代码压缩旨在减小最终输出文件的体积，提升加载和执行速度。这主要包括对以下内容的压缩:

1. **JavaScript 文件压缩**：这是压缩过程中的主要内容，包括`.js`文件和`.mjs`(ES module)文件。压缩操作通常涵盖:
   - 删除空白字符和注释
   - 简化变量和函数名称（通常称为变量名改写或重命名）
   - 删除未被使用的代码（死代码移除，或称之为 tree-shaking）
   - 优化代码结构，简化条件表达式和优化循环等
   - 使用短的代码形式替换等价的长代码结构（例如使用`!0`代替`true`）
2. **CSS 压缩**：CSS文件也被压缩以减小体积，其包括：
   - 删除空格和换行
   - 压缩颜色代码（例如，`#ffffff` 可以压缩为 `#fff`）
   - 移除无效或未使用的CSS规则
   - 有时候还包括合并相同的CSS规则
3. **资源引用优化**：这涉及到通过ESM模块引用的任何外部资源，例如图片，字体或其他资产。虽然它们不直接被压缩，但是构建工具可能会执行如下操作：
   - 图片和字体等资源可能通过压缩算法（例如PNGCrush或jpegoptim）进行处理，以减小它们的文件大小
   - 资源的引用路径可能在构建期间重写以指向哈希命名的压缩文件
4. **HTML 压缩**：如果项目使用了HTML文件，这些文件也可能通过移除空白、注释、短化属性名等手段被压缩。
5. **Sourcemaps**：虽然Sourcemaps不是压缩的直接目标，但构建工具会生成Sourcemaps以帮助调试已压缩的代码。然而，生产中通常不会部署Sourcemaps以减少服务器负载。
6. **JSON 文件和其他静态资产**：在某些情况下，JSON配置文件和用在应用程序中的其他类似静态文件也可能面临压缩。

在Vite中，上述的JavaScript压缩任务通常由esbuild负责，但也可以配置为其他工具如Terser。Vite也提供了配置选项和插件接口来定制压缩和优化的其他方面，允许开发者根据项目需求调整构建输出。

#### 不足

Esbuild 作为打包工具也有一些缺点。

*   不支持降级到 `ES5` 的代码。这意味着在低端浏览器代码会跑不起来。
*   最大的局限性就在于 TS 中的类型检查问题。这是因为 Esbuild 并没有实现 TS 的类型系统，在编译 `TS`(或者 `TSX`) 文件时仅仅抹掉了类型相关的代码，暂时没有能力实现类型检查。
*   不提供操作打包产物的接口，像 Rollup 中灵活处理打包产物的能力 (如`renderChunk`钩子) 在 Esbuild 当中完全没有。
*   不支持自定义 Code Splitting 策略。传统的 Webpack 和 Rollup 都提供了自定义拆包策略的 API，而 Esbuild 并未提供，从而降级了拆包优化的灵活性。

#### Esbuild为什么快

1.  **使用 Golang 开发**，构建逻辑代码直接被编译为原生机器码，而不用像 JS 一样先代码解析为字节码，然后转换为机器码，大大节省了程序运行时间。

2.  **多核并行**。内部打包算法充分利用多核 CPU 优势，所有的步骤尽可能并行，这也是得益于 Go 当中多线程共享内存的优势。

3.  **从零造轮子**。几乎没有使用任何第三方库，所有逻辑自己编写，大到 AST 解析，小到字符串的操作，保证极致的代码性能。

4.  **高效的内存利用**。Esbuild中从头到尾尽可能地复用一份 AST 节点数据，而不用像 JS 打包工具中频繁地解析和传递 AST 数据（如 string -> TS -> JS -> string)，造成内存的大量浪费。

### rollup



# 面试题

## 看法

### 为什么选择Vite

1. 基本描述

   - 第一次用是在Vue3的项目中使用到的，Vite现在也是Vue生态中的重要的一部分；
   - 使用的体验就是明显感觉到开发体验特别好，项目启动的很快，并且热更新功能也很迅速；
   - 需要的配置的内容比较少，因为内部集成了一些插件，简化了作为开发者来说的一些流程
   - 总体来说呢，比Webpack有更好的开发体验。

2. 诱导性发言

   - 到后面使用多了，了解到原理之后，就更加坚定了使用Vite的想法。

   将问题引导到Vite的原理上

### 如何评价Vite5.0

看一些vue conference

### 如何看待未来vite发展

Vite 的发展前景通常被业界看好，并且预计它将继续在现代前端工具领域扮演重要角色。以下是几个关键原因和潜在趋势：

1. **现代浏览器支持：** Vite 利用了现代浏览器对 ES Modules 的原生支持，随着浏览器的不断更新，这种优势将更加凸显。
2. **开发体验：** Vite 提供了快速的 HMR（热模块替换）和冷启动速度，这符合现代前端开发对效率的追求。
3. **生态系统构建：** Vite 正在快速构建并不断完善其插件生态系统，这将进一步增强其功能性和灵活性。
4. **社区和贡献者的增长：** Vite 拥有一个活跃而忠实的社区，以及不断增长的贡献者基础，这对于开源项目来说至关重要。
5. **与框架的整合：** Vite 已经成为许多现代 JavaScript 框架（如 Vue、React、Svelte）的首选开发工具。
6. **持续迭代和改进：** Vite 的开发团队积极响应社区反馈，不断迭代和改进产品。
7. **性能优化的趋势：** 随着大型应用和复杂项目的增加，对构建工作流程性能的优化需求也在增加，Vite 在这方面有明显的优势。
8. **与工业趋势的契合：** 软件行业不断寻求更快、更高效的工具，Vite 与这一趋势相符。

未来，Vite 预计会继续发展其核心优势，同时可能在以下几个方面进行扩展：

- **适配更多场景**：增加对不同项目类型和规模的支持，包括大型企业应用。
- **深入集成测试和工程化**：提供更完整的开发到生产的流程支持。
- **进一步优化性能和稳定性**：虽然现已快速，但性能和稳定性是永无止境的追求。

尽管有这些积极的展望，Vite 的发展也需要面对市场和技术环境的变化，如新兴的构建工具竞争，以及对现有项目和工具的依赖。不过，考虑到其当前的势头和社区活跃度，不少人预期 Vite 将继续保持其在前端构建工具领域中的重要地位。

## 对比Webpack

### Vite和Webpack区别

#### 开发环境对比

##### Vite

- **基于 ESM**：使用原生 ES 模块加载，使得开发服务器启动几乎瞬时。
- **无需打包**：在开发时不打包代码，而是通过服务器按需动态地转译和提供模块。
- **快速热更新**：基于模块的热更新，会感觉更加快速和高效。

##### Webpack

- **打包模块**：初始化时要打包全部应用代码，这在大型项目中可能会相对慢一些。
- **加载器和插件**：可以通过配置加载器和插件对开发环境进行高度定制。
- **热模块替换（HMR）**：虽然支持HMR，但是更新速度取决于项目大小和配置。

#### 生产环境对比



#### 其他方面

##### Vite

- **现代化开发**：优化的是针对现代浏览器，可能不考虑老旧浏览器的兼容性。
- **简单配置**：更简易的配置流程，尤其是对于使用 Vue 和 React 项目。
- **快速成长**：虽然相对较新，但发展迅速，并且其设计符合未来 Web 开发的趋势。

##### Webpack

- **广泛兼容**：广泛的加载器和插件生态系，支持多种开发和部署场合。
- **复杂配置**：强大但复杂的配置系统，有时需要详细的配置来优化构建过程。
- **成熟稳定**：经过多年发展，已被验证适用于各种规模和复杂性的项目。

### Vite和Webpack原理对比

主要体现在开发阶段。

### Vite相比于wbp优势与不足

> 相似问题：
>
> - vite和webpack，相比与webpack解决了什么核心问题？
>   - Vite开发阶段的优势

#### 优势

1. **快速的开发启动**：Vite 利用原生的 ES 模块加载，这使得开发环境中的项目启动几乎是即时的。
2. **热更新性能**：由于使用了原生 ESM 和差异化更新，Vite 的热模块替换（HMR）通常比 Webpack 更快。
3. **简化的配置**：Vite 提供了更少且更简单的配置选项，尤其是在使用 Vue 和 React 时，经常能够开箱即用。
4. **预构建优化**：Vite 在开发模式下针对依赖进行预构建，确保后续的导入操作快速。
5. **轻量产物**：生产环境中使用 Rollup 进行打包，默认产生的代码更为简洁高效。

#### 不足

Vite 是一个基于 ESM 规范的前端构建工具，它提供了极快的开发体验和简单的使用方法，但也有一些不足之处，比如：

- 生态问题：Vite 相对较新，还没有像 Webpack 那样有一个庞大的生态系统，一些常用的加载器或插件可能还不够完善或缺乏维护。虽然 Vite 可以兼容大部分的 Rollup 插件，但也可能存在一些兼容性问题或性能损失。
- 灵活性问题：Vite 的设计理念是尽可能地简化构建过程，让用户专注于业务代码，而不是工具的配置。这样的好处是降低了学习成本和使用难度，但也意味着用户失去了一些定制化的能力。Vite 只暴露了很少的配置项和插件接口，如果用户有一些特殊的需求，可能需要自己编写插件或修改源码。
- **复杂打包逻辑支持**：Vite 目前可能不如 Webpack 在处理极其复杂的打包逻辑方面强大，尤其是在调整和微观管理打包产物时。
- **大规模多页面项目**：对于大型的多页面应用（MPA），Webpack 提供的高度可配置性可能更适合管理资源和优化。
- **成熟度和稳定性**：由于 Webpack 已经有长时间的发展，它的稳定性和问题解决资源可能更丰富。
- 自己的体验
  1. 开发环境和生产环境打包的差异性，可能会导致开发环境下没问题，但是生产环境下存在问题的情况。

#### webpack和vite谁有treeshaking，treeshaking在生产环境还是开发环境作用

#### vite 和 webpack/rollup有什么区别

- vite是更加顶层的工具，集成了xxx

#### vite和webpack在打包上的不同

Webpack 和 rollup ？

### vite为什么快

主要体现在开发阶段，开发阶段三个角度：

1. 依赖预构建
2. 基于ESM的按需加载
3. 基于ESM的热更新

### Webpack和Vite热更新原理

> 相似问题：
>
> - vite热更新为什么快

## 打包

### 开发环境和生产环境的打包区别

Vite 在开发环境和生产环境中的打包行为有一些明显的区别，主要是为了适应不同环境下的需求。以下是一些关键的区别点：

#### 开发环境

1. **无打包**：在开发环境中，Vite 不对应用代码进行打包。它利用浏览器的原生 ES 模块加载能力来按需加载模块。
2. **快速启动**：开发环境的重点是速度，所以 Vite 旨在提供近乎即时的服务器启动时间。
3. **预构建依赖**：为了提速，Vite 会预构建 `node_modules` 中的第三方库，尤其是大型的库，转换为 ES 模块格式。
4. **热模块替换（HMR）**：Vite 提供了快速的 HMR（热模块替换），当源代码被编辑时，相关模块会被即时更新，而无需刷新整个页面。
5. **源码映射（Source Maps）**：通常情况下，Vite 会生成源码映射，以便开发者能够更容易地调试代码。

#### 生产环境

1. **代码压缩**：在生产环境中，Vite 会压缩代码以减少文件大小，通常使用 Terser 或 esbuild。
2. **打包与优化**：Vite 使用 Rollup 进行代码打包，从而实现代码分割、资产处理和树摇（Tree Shaking）等优化措施。
3. **CSS代码处理**：Vite 会提取、合并并压缩 CSS 文件。
4. **资产处理**：如图像、字体和静态文件等。它们会被处理并且通常会加上内容哈希以优化缓存。
5. **清理产物**：生产构建会生成清理后的、可供部署的文件和目录。
6. **静态资源处理**：Vite 会把静态资源进行处理，例如生成 assets 并可能把它们转换成 base64 编码直接嵌入到代码中。
7. **长期缓存**：文件名会包含哈希值以实现长期浓精。

开发和生产环境下的主要区别在于速度和效率的优先级不同。开发环境优先速度和开发效率，以提高开发者的体验。而生产环境则侧重于代码的性能和优化，以减少应用的加载时间，并改进用户体验。

### vite遇到非ESM代码如何转换

#### 开发环境

**依赖探测**：
在开发服务器启动时，Vite 会首先分析项目的依赖。这一过程中，Vite 会找到所有在 `node_modules` 中的第三方依赖，并确定哪些不是 ESM 格式。

**使用 esbuild 进行转换**：
预构建过程默认使用 esbuild，因为 esbuild 以其极快的速度进行 JavaScript 代码转换而著名。Esbuild 能在很短的时间内将 CommonJS 或 UMD 格式的代码转换为 ESM 格式。

**生成优化代码**：
转换后的代码将以 ESM 格式存在，并被缓存起来以供快速访问，这样在开发过程中，就可以通过标准的模块加载方式来使用这些第三方包。

**缓存转换结果**：
Vite 将这些优化后的依赖存储在本地缓存中通常是在 `node_modules/.vite` 目录下。这样，在后续的开发会话中，如果没有新的依赖添加或者版本更新，Vite 可以快速启动而无需重新进行预构建。

#### 生产阶段

在生产阶段，Vite 处理非 ESM（如 CommonJS 或 UMD）模块的转换主要使用 Rollup 及其插件系统。这些工具和插件如下：

1. **Rollup**：
   作为打包工具，Rollup 可以将非 ESM 模块转换为 ESM 格式。Rollup 内部面向 ES 模块设计，因此需要转换这些模块以保持整体的一致性。
2. **@rollup/plugin-commonjs**：
   这是一个专门为 Rollup 设计的插件，用于将 CommonJS 模块转换成 ESM。在 Rollup 配置中引入该插件后，它会处理项目中的 CommonJS 依赖，使其能够正确地和其他 ESM 代码一起工作。
3. **@rollup/plugin-node-resolve**：
   这个插件让 Rollup 能够解析第三方模块及 `node_modules` 中的文件。它支持导入 CommonJS 和 ESM 格式的依赖，并且配合 `@rollup/plugin-commonjs` 插件一起使用，确保所有模块都能被正确加载和转换。
4. **其他可能用到的插件**：
   根据项目中使用的其他非标准模块类型，可能还需要引入其他插件，例如处理 JSON、YAML 或其他自定义格式的 Rollup 插件。

这些工具和插件能够确保，即使源代码或第三方依赖使用了非 ESM 格式，最终构建的结果仍将是一个符合现代浏览器标准的 ESM 代码包。通过这种方式，Vite 在生产环境中为应用提供了性能优化和兼容性保证。

### rollup打包的流程

Rollup 打包的过程可以分为以下几个步骤：

1. **解析输入选项**：
   Rollup 首先解析配置文件或者命令行提供的输入选项，这包括入口文件、输出配置、插件列表等信息。
2. **加载插件**：
   加载并初始化配置中指定的插件。Rollup 的插件可以在构建过程的不同阶段执行操作，如读写文件、转换代码等。
3. **构建依赖图**：
   Rollup 会解析入口文件，并递归地分析所有 `import` 语句来构建一个模块依赖图。在这个过程中，如果遇到任何外部依赖（例如，来自 `node_modules` 的包），Rollup 会根据配置决定是将其包含进打包结果还是作为外部引用保留。
4. **加载和转换模块内容**：
   对于依赖图中的每个模块，Rollup 使用相应的插件来加载模块内容，然后应用转换操作，如编译 TypeScript、处理 JSX、转换新的 JavaScript 语法等。
5. **Tree Shaking（摇树优化）**：
   在模块转换完成后，Rollup 会分析代码中哪些导出和变量被使用，哪些没有被使用。未被使用的导出和变量（即「死代码」）将被标记，在最终的打包结果中移除，以减少打包体积。
6. **代码产生**：
   Rollup 接下来会根据依赖图将模块合并成一个或多个包（这取决于是否有使用代码分割功能）。在这个过程中，Rollup 还会处理模块间的接口和变量冲突。
7. **产生输出文件**：
   Rollup 会生成打包后代码和源码映射（如果配置了`sourcemap`选项），并将其写入到指定的输出文件中。这可能包括一个单一的输出包，或者是当使用代码分割特性时的多个文件。
8. **压缩代码（可选）**：
   如果配置了插件进行代码压缩（如 terser），Rollup 将在最终输出之前压缩代码，以进一步减小文件体积。
9. **写入文件系统**：
   Rollup 把生成的代码和任何其他产物（如资产文件）写入到文件系统，完成构建过程。

整个打包过程受益于 Rollup 的简约设计，它旨在提供尽可能高效和简洁的包，特别适合用于构建需要高性能的库和工具。与其他工具相比，Rollup 在生成用于生产的最小化包方面表现突出

### 为什么Vite在生产环境要用Rollup打包

ES Build的不足

1. 不提供babel的功能

### Vite打包的产物可以直接发布吗

Vite 在生产环境下构建出来的结果是可以直接发布的。Vite 生成的构建产物已经经过了优化，包括代码压缩、分割、和长缓存哈希处理等，它们都是为了生产环境部署而准备的。

在构建生产版本时，Vite 通常执行如下操作：

1. **代码优化**：应用各种优化措施，例如代码压缩和 Tree Shaking，以移除未使用的代码。
2. **模块捆绑**：组合模块为更少的文件，以减少在浏览器中的请求次数。
3. **资源处理**：处理静态资源如样式、图像、字体等，并将它们添加到构建输出中。
4. **路径修正**：调整静态资源的 URL 路径，以确保在不同部署环境中资源能够正确加载。
5. **产物映射**：生成 content hashing 的文件名，以启动浏览器缓存并在更新时使旧缓存失效。
6. **Source Maps 生成**（可选）：如果需要，可以生成 Source Maps 以方便生产环境的调试。


### 打包之后是什么样子的

> 相关问题:
>
> vite打包后是什么样子？

rollup的结果 以及 esbuild的结果？

文件目录？

```
dist
├── assets
│   ├── logo.03d6d6da.png
│   ├── style.354b6427.css
│   └── vendor.217c8a07.js
├── index.html
├── main.0da16f1e.js
└── main.0da16f1e.js.map
```

### vite的打包依赖工具以及是用什么语言编写的

go

### webpack，vite，rollup, esbuild特点区别

#### Webpack

1. **适用范围**：设计用于应对复杂的大型应用、多页面应用（MPA）和单页面应用（SPA）。
2. **加载器支持**：拥有丰富的加载器（Loader）系统，可以处理各种不同类型的文件和资源。
3. **插件系统**：强大的插件生态系统，支持高度自定义的构建过程。
4. **HMR支持**：原生支持热模块替换（Hot Module Replacement），能够在开发过程中实时更新模块。
5. **代码拆分**：支持多种方式的代码拆分框架（即代码分割 Code Splitting）和懒加载（Lazy Loading）。
6. **配置复杂性**：具有复杂的配置需求，并需要更详细的概念理解来精细控制打包输出。
7. **构建速度**：相对慢，特别是在大型项目中，但可以通过配置优化。

#### Rollup

1. **适用范围**：最初设计目标是打包 JavaScript 库。现在也被用于应用程序，特别是需要产生高质量、无冗余代码的情况。
2. **模块处理**：专注于 ES6+ 的模块格式（ESM），输出更简洁、更高效的代码包。
3. **Tree Shaking**：强大的 Tree Shaking 能力，有效移除未使用的代码。
4. **简单配置**：相比 Webpack，通常提供更简洁的配置选项。
5. **插件系统**：虽然插件较少，但已经支持大多数开发过程中所需功能。
6. **构建速度**：构建速度通常比 Webpack 快，特别是对于小到中型项目。
7. **代码拆分**：Rollup 支持代码拆分，但 Webpack 在这方面可能更加成熟和灵活。

#### esbuild

1. **适用范围**：旨在提供极速的构建性能，适用于快速开发迭代和简单的生产构建。
2. **实现语言**：用 Go 语言编写，及其高效，特别是在转换 TypeScript 和 JSX。
3. **构建速度**：远快于 Webpack 和 Rollup，尤其在开发模式下，使用 esbuild 可以大大缩短等待时间。
4. **配置简单性**：简洁的配置模式，易于上手。
5. **插件生态**：插件系统正在成长，但目前比较有限。
6. **Tree Shaking 和 Splitting**：提供基本的 Tree Shaking 和代码拆分支持，但可能不如 Webpack 和 Rollup 灵活或高效。
7. **内置功能**：内置了转换、打包和压缩代码的能力，不需要额外加载器或插件。
8. **适用限制**：虽然非常快，但对于复杂的打包需求和优化尚不可比拟于 Webpack 或 Rollup。

总结来说，Webpack 适用于需要丰富功能和插件支持的复杂应用，Rollup适合生成库和高效、简洁代码的项目，而 esbuild 以其卓越的构建速度在迅速普及，适合快速开发和简单的生产用途。根据项目的具体需求和优化目标来选择使用哪种构建工具将非常重要。

### Vite如何进行语法检查

### babel.js的用法

## 插件

### vite中如何设置插件的执行时机

### 问vite插件

// vite-plugin-compression（压缩成gzip格式，配合nginx） ，

unplugin-auto-import自动导入，

unplugin-vue-components导入vue组件、

### vite有没有配置过什么插件？

## 配置

### 初始化Vite项目后一般进行哪些配置

> 相关问题：
>
> - 开发项目的初始工作？

#### Vite.config.js

当然可以。以下是一些常见的 Vite 配置示例，假设我们正在设置一个使用 Vue 的项目：

##### 1. 安装必要的插件

首先，你需要安装 Vite 插件，例如 Vue 支持的插件【自动安装了】。在命令行中运行：

```sh
 npm install @vitejs/plugin-vue
```

其他参见Vite插件篇。

2. ##### 配置文件（vite.config.js）

以下是一个基本的 `vite.config.js` 文件示例：

```javascript
   import { defineConfig } from 'vite';
   import vue from '@vitejs/plugin-vue';

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [vue()],
     resolve: {
       alias: {
         '@': '/src',
       },
     },
     server: {
       port: 3000, // 设置开发服务器端口号
       proxy: {
         // 设置代理，例如 API 请求
         '/api': {
           target: 'https://your-backend.dev',
           changeOrigin: true,
           secure: false,
           rewrite: (path) => path.replace(/^\/api/, '')
         },
       }
     },
     build: {
       outDir: 'dist', // 指定输出目录，默认是 'dist'
       sourcemap: true, // 生产环境生成 source map 文件
       // 更多构建配置...
     },
     // 其他配置...
   });
```

其他参见Vite环境配置。

#### **环境变量（.env 文件）**

创建 `.env` 文件并定义环境变量。

```plaintext
# .env
VITE_API_ENDPOINT=https://api.example.com
```

在你的 JavaScript 代码中，你可以通过 `import.meta.env.VITE_API_ENDPOINT` 来访问该变量。参见区分生产环境和开发环境。

#### **配置 TypeScript**

如果使用 TypeScript，创建 `tsconfig.json` 文件，并进行配置：

```json
   {
     "compilerOptions": {
       "target": "esnext",
       "module": "esnext",
       "strict": true,
       // 更多 TypeScript 配置...
     },
     "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
     "exclude": ["node_modules"]
   }
```

#### **配置 CSS 预处理器**

首先安装 Less：

```sh
npm install -D less
```

然后，在 Vue 组件中直接使用：

```vue
<style lang="less">
    /* 你的 SCSS 代码 */
</style>
```

同时需要再Vite中配置对应的CSS预处理器，以及全局变量文件等。

#### **配置 ESLint 和 Prettier**

安装必要的包和设置配置文件（`.eslintrc.js`, `.prettierrc` 等）。

这些配置为一个 Vue 项目提供了良好的起点。根据项目具体需要，你可能还需要进一步配置或添加插件。查阅官方文档是获取最佳实践和探索更多高级配置选项的好方法。

### vite开发环境配置

**服务器配置（`server`）**：
包括端口（`port`）、启用 HTTPS（`https`）、设置代理（`proxy`）等。

```javascript
   server: {
     port: 3000, // 设定开发服务器的端口
     open: true, // 自动打开浏览器
     cors: true, // 允许跨域资源共享
     proxy: {
       // 代理配置示例
       '/api': {
         target: 'http://backend-api.com',
         changeOrigin: true,
         rewrite: (path) => path.replace(/^\/api/, '')
       }
     }
   },
```

**别名配置（`resolve.alias`）**：
设置路径别名，简化模块导入。

```javascript
   resolve: {
     alias: {
       '@': '/src',
       'components': '/src/components'
     }
   },
```

**CSS 预处理器（`css.preprocessorOptions`）**：
定义 CSS 预处理器的全局变量和混入。

```javascript
css: {
    preprocessorOptions: {
        less: {
            javascriptEnabled: true,
            additionalData: "@import '~/style/main.less';",
        },
    },
},
```

**插件使用（`plugins`）**：
添加和配置必要的 Vite 插件，比如 Vue 或 React 支持。

```javascript
   import vue from '@vitejs/plugin-vue';

   plugins: [
     vue(),
     // ...其他插件
   ],
```

**HMR 配置（`server.hmr`）**：
自定义热模块替换的行为，例如设置超时或者端口等。

```javascript
   server: {
     hmr: {
       port: 3333, // 自定义 HMR 连接的端口（当默认端口被阻塞时）
     }
   },
```

**环境变量（通过 `.env` 文件）**：
设置环境变量，Vite 支持以 `VITE_` 为前缀的变量，将其暴露给客户端源代码。

```plaintext
// .env.development
VITE_API_BASE_URL=http://localhost:4000/
```

**优化选项（`optimizeDeps`）**：
预配置依赖优化行为，可以指定哪些依赖需要被预构建。

```javascript
   optimizeDeps: {
     include: ["lodash", "axios"], // 明确要预构建的依赖
     exclude: ["some-es6-package"] // 排除某些包
   },
```

这些是 Vite 开发环境中最常见的一些配置点。实际使用中，你可能需要根据项目的具体需求来添加或调整其他配置选项。建议查阅[Vite 官方文档](https://vitejs.dev/config/)了解所有可用配置项及其详细信息。

### vite生产环境配置

Vite 生产环境的配置一般是在 `vite.config.js` 文件中对 `build` 部分进行设置。以下是一些 Vite 生产环境中常用的配置选项：

**基本构建选项**
包括构建输出目录（`outDir`）、是否生成源代码映射（`sourcemap`）、压缩（`minify`）和清除文件（`emptyOutDir`）等。

```javascript
   build: {
     outDir: 'dist', // 指定输出目录
     sourcemap: true, // 是否生成 source map
     minify: 'terser', // 指定压缩工具或關閉压缩功能
     emptyOutDir: true, // 构建前清空输出目录
   },
```

**CSS 配置**
控制 CSS 代码的处理，如代码拆分（`cssCodeSplit`）、分析及预处理配置。

```javascript
build: {
    cssCodeSplit: true, // 默认为 true，将不同的 CSS 分到不同的文件中
},
```

**依赖优化**：
通过 `rollupOptions` 控制依赖打包行为，例如外部化一些依赖或定义特定拆包规则。

```javascript
   build: {
     rollupOptions: {
       external: ['vue'], // 指定不打包进库中的外部依赖
       output: {
         // 定义拆包规则
         manualChunks(id) {
           if (id.includes('node_modules')) {
             return 'vendor';
           }
         }
       }
     }
   },
```

**静态资源处理**：
配置静态资源的处理策略，如限制内联大小（`assetsInlineLimit`）或者设定文件名规则（`assetsDir`, `assetFileNames` 等）。

```javascript
   build: {
     assetsDir: 'assets', // 输出静态资源的文件夹
     assetsInlineLimit: 4096, // 小于 4kb 的资源转换为 base64 内联
     assetFileNames: `assets/[name]-[hash].[ext]`, // 设置打包后的资源文件命名
   },
```

**打包大小优化**：
使用 `chunkSizeWarningLimit` 控制产生 chunk 大小警告的限制。

```javascript
   build: {
     chunkSizeWarningLimit: 500, // 单个包超过 500kb 则发出警告
   },
```

**Library 模式**：
如果你正在打包一个库，可以使用 `lib` 模式并指定入口、格式和名称。

```javascript
   build: {
     lib: {
       entry: 'src/mylib.js',
       name: 'MyLib',
       formats: ['es', 'umd'],
     },
   },
```

这些都是针对生产环境进行的配置。具体配置的选择和设置取决于应用的需求和部署目标。为了确保正确和最佳的配置实践，建议深入阅读 [Vite 官方文档](https://vitejs.dev/config/build-options.html)，以了解所有可用的生产环境构建配置。

### Vite区分生产环境和开发环境怎么配置

在 Vite 中区分生产环境和开发环境的配置通常依赖于环境变量。加载环境变量的依据主要是通过不同的命令，设置不同的mode。

#### 区分当前环境

##### 指定模式启动

在 `package.json` 的 scripts 中，可以指定使用哪个模式启动：

```json
   {
     "scripts": {
       "dev": "vite", // 默认是 development 模式
       "build": "vite build", // 默认是 production 模式
       "preview": "vite preview" // 用于本地预览生产构建产物
     }
   }
```

##### 推断环境模式

Vite 提供 `--mode` 选项来显式指定模式（如 `vite build --mode staging`），该模式会先加载 `.env.staging` 环境文件，然后是 `.env`。

##### 总结

在我们执行 `yarn dev` 的时候，其实执行的是 `yarn dev --mode development`，那么mode就是development。同理，我们执行 `yarn build` 的时候，其实执行的是 `yarn dev --mode production`，进而mode就是production，除此之外，我们还可以自定义mode的内容。下面是不同命令对于mode的打印情况：

```js
// vite.config.js
export default defineConfig(({ command, mode }) => {
	console.log("mode", mode);
	return envResolver[command]()
})
```

- `yarn dev`： mode development
- `yarn build`： mode production

- 自定义内容， `yarn dev --mode hello`： mode hello

Vite 默认使用 `import.meta.env` 来提供环境变量的访问。

#### 源码中使用环境变量

**1. 环境变量文件**：
在项目根目录下创建环境变量文件，比如 `.env.development` 用于开发环境，`.env.production` 用于生产环境。Vite 在启动时会自动加载对应的环境变量文件。

**2. 设置环境变量**：
在环境变量文件中设置特定的变量。例如，定义 API 端点：

```env
# .env.development
VITE_API_BASE=http://localhost:3000

# .env.production
VITE_API_BASE=https://api.example.com
```

**3. 使用环境变量**：
在你的代码中使用环境变量时，可以通过 `import.meta.env` 访问它们：

```javascript
console.log(import.meta.env.VITE_API_BASE); // 根据不同的环境，输出对应的值
```

#### vite配置

在 `vite.config.js` 中，`defineConfig`会将当前的环境当作参数传入，我们可以通过不同的参数，返回不同的环境配置。

```javascript
   import { defineConfig } from 'vite';

   // 使用 `defineConfig` 帮助获得更好的类型提示
   export default defineConfig(({ command, mode }) => {
     if (command === 'serve') {
       // 开发环境配置
       return {
         // 开发环境配置项
       };
     } else {
       // 生产环境配置
       return {
         // 生产环境配置项
       };
     }
   });
```

**原理**：vite.config.js可以直接访问 `process.env.NODE_ENV` 获得当前的环境名称。

通过使用这些方式，你可以灵活地为 Vite 项目区分开发环境和生产环境的配置。可以使用环境变量进行细粒度的配置管理，而在 `vite.config.js` 文件中可以根据不同的环境进行更全局的配置调整。

## 优化

### 用过vite的什么优化？

答：分包，vite可以通过写函数检查node module，打包出多个文件

### 构建打包有做什么优化？

1. 参考Nuxt项目

### vite打包文件太过零散是否有做处理？

rollup 原理吗？ 可能是问生产环境的配置吧？

### vite对于打包后文件的优势

应该是问Vite在生产环境的打包做了什么

### 为什么vite打包更快

应该是说的开发环境？ 生产环境Vite打包快吗？

### vite首次加载如何优化？

### vite如果有大量图片会发生什么

Webpack 和 Vite 在配置上有很大差异, 你如何实现一个自动化工具, 将 Webpack 项目批量迁移到 Vite

Webpack 和 Vite 在配置上有很大差异，主要是因为它们使用了不同的构建方式和模块系统。Webpack 是基于 CommonJS 和 AMD 等非标准化的模块规范，它需要对所有的模块进行预编译和打包，然后在浏览器中运行。Vite 是基于 ESM 的标准化模块规范，它可以直接在浏览器中加载和执行原生的模块，无需预编译和打包¹²。

因此，如果要实现一个自动化工具，将 Webpack 项目批量迁移到 Vite，我认为需要考虑以下几个方面：

- 配置文件的转换：Webpack 的配置文件是一个 JavaScript 文件，它可以包含各种复杂的逻辑和自定义的选项。Vite 的配置文件是一个 TypeScript 文件，它只暴露了一些简单的选项和插件接口。我需要编写一个转换器，能够解析 Webpack 的配置文件，提取出其中的关键信息，比如入口文件，输出目录，别名，代理，加载器，插件等，然后生成一个对应的 Vite 的配置文件，或者提示用户需要手动修改的部分³⁴。
- 依赖包的处理：Webpack 可以处理各种类型的依赖包，包括 CommonJS，AMD，UMD，ESM 等。Vite 只能处理 ESM 类型的依赖包，对于其他类型的依赖包，需要使用一些转换工具，比如 esbuild，rollup-plugin-commonjs，rollup-plugin-node-resolve 等。我需要编写一个处理器，能够分析项目中的依赖包，判断它们的类型，然后根据 Vite 的要求，进行相应的转换或安装相应的插件⁵⁶。
- 代码的兼容性：Webpack 可以通过 Babel，TypeScript，PostCSS 等工具，对代码进行转换和优化，以适应不同的浏览器和环境。Vite 也可以使用这些工具，但是它们的配置方式和效果可能有所不同。我需要编写一个兼容器，能够检查项目中的代码，发现其中的不兼容或不一致的地方，然后根据 Vite 的规范，进行相应的修改或提示用户需要手动修改的部分 。

综上所述，我认为实现一个自动化工具，将 Webpack 项目批量迁移到 Vite，是一个比较复杂和有挑战性的任务，需要对两个工具的原理和特点有深入的了解，以及对项目的结构和代码有清晰的把握。

#### 首屏性能和懒加载较慢  

   （1 webpack在浏览器请求时，直接将打包好的文件发给浏览器没有首屏问题，  

   但vite在dev server首次响应请求时要对文件resolve、load、transform、parse等操作  

   （2）因为vite不对文件做合并捆绑操作，会导致大量http请求，懒加载时会发生二次预构建，会使加载性能有影响  

   4.如何解决首屏优化  

​    影响首屏加载的因素有：①在网络进程下载资源提交文档给渲染进程时，渲染进程会创建一个空白页面，等待css和js的加载，生成dom和cssom，然后执行js，然后准备首次渲染②所以首屏加载的主要瓶颈在：下载css、下载js、执行js   

​    所以缩短白屏时间有以下策略：①通过内联css、js移除下载时间、②尽量减少文件大小，压缩js文件解析js时加上async（加载完js后立即执行）和defer（页面全部加载完再执行）④css按需加载