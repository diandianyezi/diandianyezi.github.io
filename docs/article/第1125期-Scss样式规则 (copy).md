---
title: Scss样式规则
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



### 样式规则

#### 插值 Interpolation

A property’s name can include [interpolation](https://sass-lang.com/documentation/interpolation), which makes it possible to dynamically generate properties as needed. You can even interpolate the entire property name!

`#{varName}`

```scss
@mixin prefix($property, $value, $prefixes) {
  @each $prefix in $prefixes {
    -#{$prefix}-#{$property}: $value;
  }
  #{$property}: $value;
}

.gray {
  @include prefix(filter, grayscale(50%), moz webkit);
}
```



You can combine interpolation with the parent selector `&`, the [`@at-root` rule](https://sass-lang.com/documentation/at-rules/at-root), and [selector functions](https://sass-lang.com/documentation/modules/selector) to wield some serious power when dynamically generating selectors. For more information, see the [parent selector documentation](https://sass-lang.com/documentation/style-rules/parent-selector).



#### 嵌套

css规则可以嵌套外，属性也可以嵌套。

嵌套属性的规则是这样的：把属性名从中划线-的地方断开，在根属性后边添加一个冒号:，紧跟一个`{ }`块，把子属性部分写在这个`{ }`块中。

```scss
.enlarge {
  font-size: 14px;
  transition: {
    property: font-size;
    duration: 4s;
    delay: 2s;
  }
  // css规则嵌套
  &:hover { font-size: 36px; }
}

// 属性也可嵌套
.info-page {
  margin: auto {
    bottom: 10px;
    top: 2px;
  }
}
```



```css
.info-page {
  margin: auto;
  margin-bottom: 10px;
  margin-top: 2px;
}
```

>The deeper you nest, the more bandwidth it takes to serve your CSS and the more work it takes the browser to render it. Keep those selectors shallow!



### Parent-Selector

父类选择器标识符 `$`;

用处: 设置父类的一些伪类属性、可以在父类元素之前添加选择器。

```scss
.alert {
  // The parent selector can be used to add pseudo-classes to the outer
  // selector.
  &:hover {
    font-weight: bold;
  }

  // It can also be used to style the outer selector in a certain context, such
  // as a body set to use a right-to-left language.
  [dir=rtl] & {
    margin-left: 0;
    margin-right: 10px;
  }

  // You can even use it as an argument to pseudo-class selectors.
  :not(&) {
    opacity: 0.8;
  }
}
```



```css
.alert:hover {
  font-weight: bold;
}
[dir=rtl] .alert {
  margin-left: 0;
  margin-right: 10px;
}
:not(.alert) {
  opacity: 0.8;
}

```



#### 添加后缀



```scss
.accordion {
  max-width: 600px;
  margin: 4rem auto;
  width: 90%;
  font-family: "Raleway", sans-serif;
  background: #f4f4f4;

  &__copy {
    display: none;
    padding: 1rem 1.5rem 2rem 1.5rem;
    color: gray;
    line-height: 1.6;
    font-size: 14px;
    font-weight: 500;

    &--open {
      display: block;
    }
  }
}
```



#### SassScript

```scss
.main aside:hover,
.sidebar p {
  parent-selector: &;
  // => ((unquote(".main") unquote("aside:hover")),
  //     (unquote(".sidebar") unquote("p")))
}
```



```css
.main aside:hover,
.sidebar p {
  parent-selector: .main aside:hover, .sidebar p;
}

```



#### 高级嵌套

See the [parent selector documentation](https://sass-lang.com/documentation/style-rules/parent-selector) for more details.

```scss
@use "sass:selector";

@mixin unify-parent($child) {
  @at-root #{selector.unify(&, $child)} {
    @content;
  }
}

.wrapper .field {
  @include unify-parent("input") {
    /* ... */
  }
  @include unify-parent("select") {
    /* ... */
  }
}
```

```css
.wrapper input.field {
  /* ... */
}

.wrapper select.field {
  /* ... */
}
```



### Placeholder Selector

占位符选择器，不会输出到css中

```scss
%toolbelt {
  box-sizing: border-box;
  border-top: 1px rgba(#000, .12) solid;
  padding: 16px 0;
  width: 100%;

  &:hover { border: 2px rgba(#000, .5) solid; }
}

.action-buttons {
  @extend %toolbelt;
  color: #4285f4;
}

.reset-buttons {
  @extend %toolbelt;
  color: #cddc39;
}
```



```css
.action-buttons, .reset-buttons {
  box-sizing: border-box;
  border-top: 1px rgba(0, 0, 0, 0.12) solid;
  padding: 16px 0;
  width: 100%;
}
.action-buttons:hover, .reset-buttons:hover {
  border: 2px rgba(0, 0, 0, 0.5) solid;
}

.action-buttons {
  color: #4285f4;
}

.reset-buttons {
  color: #cddc39;
}

```



