### 伪类函数 :is() 和 :where()



```css
h1 > b, h2 > b, h3 > b, h4 > b, h5 > b, h6 > b {
  color: hotpink;
}

使用is 缩减代码并提高可读性
:is(h1,h2,h3,h4.h5.h6) > b {
  color: hotpink;
}
```

#### 浏览器兼容性

`:is()` 由 `:match()` 改名而来，部分浏览器有其私有的 `:any()` 实现 `:is()` 的部分功能，在使用 `:is()` 之前，我们应该先了解其兼容性：

![](https://raw.githubusercontent.com/diandianyezi/typora-images/master/img/202207252228643.png)

#### :is() 和 :where()

`:is()` 作为一个伪类函数，其接收选择器列表作为参数，并选择该列表中任意一个选择器可以选择的元素，`:where()` 伪类函数与其功能相同，仅仅选择器权重不同。

