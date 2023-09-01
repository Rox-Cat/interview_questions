项目中用到Typescript的哪些技术

### 为什么要使用Typescript

TypeScript主要用来解决JavaScript在大规模或复杂的应用开发中遇到的一些问题，例如：

- **类型错误**：JavaScript是一种动态类型的语言，不需要在编译时指定变量的类型，也可以在运行时改变变量的类型。这样的特性虽然提供了灵活性，但也可能导致一些难以发现和调试的错误，比如对未定义的变量进行操作，或者对不同类型的数据进行不合法的操作。TypeScript是一种静态类型的语言，可以在编译时检查变量的类型，避免类型错误的发生。
- 代码可读性和可维护性：JavaScript没有明确的类和接口的概念，对象的结构和行为往往是隐式和分散的。这使得代码难以阅读和理解，尤其是在涉及多个文件和模块的情况下。TypeScript支持类和接口等面向对象的特性，可以让代码更加清晰和结构化，方便开发者进行重构和扩展¹²。
- 工具支持：JavaScript由于其动态类型和灵活语法的特点，很难被一些集成开发环境（IDE）和编辑器提供智能提示和自动补全等功能。TypeScript由于其静态类型和严格语法的特点，可以被一些IDE和编辑器提供更好的工具支持，例如代码高亮、错误检测、重命名、跳转等¹²。

总之，TypeScript是一种在JavaScript基础上增加了类型系统和其他特性的语言，可以让开发者更加高效和安全地开发Web应用。



### 强语言、弱语言、静态语言、动态语言

动态语言类型和静态语言类型是从数据类型在何时确定来区分的¹。动态语言类型是指在运行时才确定数据的类型的语言，例如 Python、JavaScript、PHP 等¹²。静态语言类型是指在编译时就确定数据的类型的语言，例如 C/C++、Java、C# 等¹³⁴。

强语言类型和弱语言类型是指在运算时是否允许隐式地转换数据类型的语言¹²。强语言类型是指只能对同一种类型的数据进行运算，否则会报错的语言，例如 Python、Java 等¹²。弱语言类型是指可以对不同类型的数据进行运算，会自动地转换数据类型的语言，例如 JavaScript、PHP 等¹²。

TypeScript 是一种静态语言类型和强语言类型的编程语言。它是 JavaScript 的一个超集，可以编译成纯 JavaScript 代码。它支持显式地声明变量的类型，也可以根据上下文自动推断变量的类型。它还提供了一些高级的类型特性，例如枚举、元组、泛型等。



### tsconfig.json

tsconfig.json 是一个配置文件，用于指定 TypeScript 编译器如何编译 TypeScript 代码。tsconfig.json 包含以下内容：

- compilerOptions：一个对象，用于设置编译选项，如目标语言版本，输出目录，源映射，严格模式等。
- files：一个数组，用于指定要编译的文件列表，如果没有指定，则默认编译当前目录及其子目录下的所有 TypeScript 文件。
- include：一个数组，用于指定要编译的文件或目录的匹配模式，支持使用通配符 * 和 ? 等。
- exclude：一个数组，用于指定要排除的文件或目录的匹配模式，支持使用通配符 * 和 ? 等。
- extends：一个字符串，用于指定要继承的另一个配置文件的路径，可以覆盖或增加一些配置选项。
- references：一个数组，用于指定要引用的其他项目的路径，可以实现项目之间的依赖管理。

以下是一个 tsconfig.json 的示例代码：

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "sourceMap": true,
    "strict": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```