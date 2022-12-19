---
title: Sass变量
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



### 变量

以 `$`开头，直接在变量值中使用。减少重复

中划线和下划线等价

#### Scss变量与css变量

- Scss变量只能被Sass编译，css变量直接输出到css文件
- 不同元素的css变量 可能有不同的值，但是Sass变量只能有一个值
- scss变量在值更改后，之前的引用不会变，但是css变量会变

#### 默认值

`!default`定义默认值为null或未定义时生效，一般在 library中使用

在引用库的时候 可以指定值 `@use <url> with (<variable>: <value>, <variable>: <value>)`

```scss
// _library.scss
$black: #000 !default;
$border-radius: 0.25rem !default;
$box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

code {
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}

// style.scss
@use 'library' with (
  $black: #222,
  $border-radius: 0.1rem
);
```

```css
code {
  border-radius: 0.1rem;
  box-shadow: 0 0.5rem 1rem rgba(34, 34, 34, 0.15);
}
```



#### 内置变量

使用： `sass:modulename`

- `sass:color`

- `sass:math`

- `sass:string`

- `sass:list`

- `sass:map`

- `sass:selector`

- `sass:meta`

    ​    

#### Scope

```scss
$global-variable: global value;

.content {
  $local-variable: local value;
  global: $global-variable;
  local: $local-variable;
}

.sidebar {
  global: $global-variable;

  // This would fail, because $local-variable isn't in scope:
  // local: $local-variable;
}
```



#### Shadowing

```scss
$variable: global value;

.content {
  $variable: local value;
  value: $variable; // local value
}

.sidebar {
  value: $variable; // global value
}
```

使用`!global`标识可以在局部作用域修改全局变量

```scss
$variable: first global value;

.content {
  $variable: second global value !global;
  value: $variable; //second global value
}

.sidebar {
  value: $variable; // second global value
}
```

#### Flow Control Scope

```scss
$dark-theme: true !default;
$primary-color: #fff !default;
$accent-color: #6e6e6e !default;

@if $dark-theme {
  $primary-color: darken($primary-color, 60%);
  $accent-color: lighten($accent-color, 60%);
}

.button {
  background-color: $primary-color;
  border: 1px solid $accent-color;
  border-radius: 10px;
}
```

> 注意！
>
> 控制流里不能声明声明新的变量，只能修改已经声明过的变量！

#### 高级变量函数

Sass核心库提供一些高级函数处理变量：

`meta.variable-exists()` 判断变量是否在当前作用域是否存在

`meta.global-variable-exists()` 判断变量是否在全局作用域存在

```scss
@use "sass:map";

$theme-colors: (
  "success": #28a745,
  "info": #17a2b8,
  "warning": #ffc107,
);

.alert {
  // Instead of $theme-color-#{warning}
  background-color: map.get($theme-colors, "warning");
}
```



