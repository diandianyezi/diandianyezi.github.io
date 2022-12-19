---
title: Sass基础
date: 2022-12-01
sidebar: heading
breadcrumb: true
lastUpdated: true
contributors: true
editLink: false
category: Scss
tag:
  - Scss
---



# Sass

Sass is a stylesheet language that’s compiled to CSS. It allows you to use [variables](https://sass-lang.com/documentation/variables), [nested rules](https://sass-lang.com/documentation/style-rules#nesting), [mixins](https://sass-lang.com/documentation/at-rules/mixin), [functions](https://sass-lang.com/documentation/modules), and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.



## 特色功能

- 完全兼容CSS3；
- 在CSS基础上增加变量、嵌套、混入等功能；
- 通过函数进行颜色值与属性值的运算
- 提供控制指令等高级功能
- 自定义输出格式

## 安装

```shell
npm install -g sass

sass --version
# 1.53.0 compiled with dart2js 2.17.3
```



## 基础

### 预处理[Preprocessing]

随着css样式表越来越大，越来越复杂，很难维护，预处理的出现更好地解决了这些问题，主要有以下特性：

- 嵌套 nesting
- mixins
- 继承

使得css更健壮，可维护



Sass 可以将.scss 文件 处理为.css 文件，应用在你的网站

可以使用命令行，处理.scss 文件，也可以加`--watch`参数，监听输入文件的改动，更新输出的css文件。

```shell
sass --watch input.scss output.css
# 将input.scss 处理为output.css 文件

# 可以监听文件夹，并输出css文件到文件夹，两个路径需要用分号分开
sass --watch app/sass:public/stylesheets
```

###### Sass有两种语法格式：`.scss` 和 `.sass`

- `.scss`  更常用，是css的超集，有效的css 也是有效的scss语法，用花括号进行嵌套，用分号进行分隔。
- `.sass` 比较不常见，用缩进来嵌套，用换行而不是用分号来进行分隔。

任何一种格式可以直接 [导入 (@import)](https://www.sass.hk/docs/#t7-1) 到另一种格式中使用，或者通过 `sass-convert` 命令行工具转换成另一种格式：

```css
sass-convert a.scss a.sass

sass-convert b.sass b.scss
```



### 变量

以`$`开头的标识符

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  color: $primary-color;
  font: 100% $font-stack;
}
```

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```



### 嵌套

可读性更好

```scss

nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

### Partials

可以新建一个有scss代码片段的文件，在别的scss文件引入。模块化css，更容易维护。以下划线开头的标识符 `_partial.scss`，下划线是为了告诉Sass，这是一个分片文件，不应该生成为css文件，用`@use`（Dart Sass 用`@use`，其他用`@import`）使用

### Modules

模块化

`@import`引用scss文件

```scss
// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}
```



### Mixins

`@mixin`创建一个方法，用 `@include`使用，可以传参数值

```scss
@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}

```

### Extend/Inheritance

```scss
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```

```css
/* This CSS will print because %message-shared is extended. */
.message, .success, .error, .warning {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```



### Operators

`+、-、math.div()、%`

```scss
@use "sass:math";

.container {
  display: flex;
}

article[role="main"] {
  width: math.div(600px, 960px) * 100%;
}

aside[role="complementary"] {
  width: math.div(300px, 960px) * 100%;
  margin-left: auto;
}
```

```css
.container {
  display: flex;
}

article[role="main"] {
  width: 62.5%;
}

aside[role="complementary"] {
  width: 31.25%;
  margin-left: auto;
}
```



