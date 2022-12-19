---
title: Sass语法
---

## 语法

### 样式表解析

直接被解析为unicode序列，不会被转为字节流。

#### 输入编码

在 Ruby 1.9 及以上环境中运行 Sass 时，Sass 对文件的编码格式比较敏感，首先会根据 [CSS spec](http://www.w3.org/TR/2013/WD-css-syntax-3-20130919/#determine-the-fallback-encoding) 判断样式文件的编码格式，如果失败则检测 Ruby string encoding。也就是说，Sass 首先检查 Unicode byte order mark，然后是 `@charset` 声明，最后是 Ruby string encoding，假如都没有检测到，默认使用 UTF-8 编码。

#### 解析错误

当sass遇到无效的语法时，解析会失败并提示错误位置和错误原因。

可以通过特殊的API访问错误位置。

### 样式表结构

由语句组成，以 `;`分隔

语句块可以包含语句，由 `{}`包围

#### 全局语句

可以在Sass样式表 任何地方使用的

- [Variable declarations](https://sass-lang.com/documentation/variables), like `$var: value`.
- [Flow control at-rules](https://sass-lang.com/documentation/at-rules/control), like `@if` and `@each`.
- The [`@error`](https://sass-lang.com/documentation/at-rules/error), [`@warn`](https://sass-lang.com/documentation/at-rules/warn), and [`@debug`](https://sass-lang.com/documentation/at-rules/debug) rules.

#### css语句

这些语句会生成css，不能在 `@function`中使用

- [Style rules](https://sass-lang.com/documentation/style-rules), like `h1 { /* ... */ }`.
- [CSS at-rules](https://sass-lang.com/documentation/at-rules/css), like `@media` and `@font-face`.
- [Mixin uses](https://sass-lang.com/documentation/at-rules/mixin) using `@include`.
- The [`@at-root` rule](https://sass-lang.com/documentation/at-rules/at-root).

#### Top-level 语句

- [Module loads](https://sass-lang.com/documentation/at-rules/use), using `@use`.
- [Imports](https://sass-lang.com/documentation/at-rules/import), using `@import`.
- [Mixin definitions](https://sass-lang.com/documentation/at-rules/mixin) using `@mixin`.
- [Function definitions](https://sass-lang.com/documentation/at-rules/function) using `@function`.

#### 其他语句

- [Property declarations](https://sass-lang.com/documentation/style-rules/declarations) like `width: 100px` may only be used within style rules and some CSS at-rules.
- The [`@extend` rule](https://sass-lang.com/documentation/at-rules/extend) may only be used within style rules.



#### 表达式

An *expression* is anything that goes on the right-hand side of a property or variable declaration. Each expression produces a *[value](https://sass-lang.com/documentation/values)*. 

#### Literals

The simplest expressions just represent static values:

- [Numbers](https://sass-lang.com/documentation/values/numbers), which may or may not have units, like `12` or `100px`.
- [Strings](https://sass-lang.com/documentation/values/strings), which may or may not have quotes, like `"Helvetica Neue"` or `bold`.
- [Colors](https://sass-lang.com/documentation/values/colors), which can be referred to by their hex representation or by name, like `#c6538c` or `blue`.
- The [boolean](https://sass-lang.com/documentation/values/booleans) literals `true` or `false`.
- The singleton [`null`](https://sass-lang.com/documentation/values/null).
- [Lists of values](https://sass-lang.com/documentation/values/lists), which may be separated by spaces or commas and which may be enclosed in square brackets or no brackets at all, like `1.5em 1em 0 2em`, `Helvetica, Arial, sans-serif`, or `[col1-start]`.
- [Maps](https://sass-lang.com/documentation/values/maps) that associate values with keys, like `("background": red, "foreground": pink)`.

#### Operations

- == 和 !=
- \+ \- \* /  %
- < <= > >=
- and or not，除了false 和null，其他都为 true
- [`+`, `-`, and `/`](https://sass-lang.com/documentation/operators/string) can be used to concatenate strings.
- () 控制操作优先级



#### 其他Expressions

- `$var`
- [Function calls](https://sass-lang.com/documentation/at-rules/function), like `nth($list, 1)` or `var(--main-bg-color)`, which may call Sass core library functions or user-defined functions, or which may be compiled directly to CSS.
- [Special functions](https://sass-lang.com/documentation/syntax/special-functions), like `calc(1px + 100%)` or `url(http://myapp.com/assets/logo.png)`, that have their own unique parsing rules.
- [The parent selector](https://sass-lang.com/documentation/style-rules/parent-selector), `&`.
- The value `!important`, which is parsed as an unquoted string.

#### 注释

// 或 /**/

文档注释 ///



#### 特殊函数

url()

element()

progid()



