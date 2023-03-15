---
  title: 惊艳一时的CSS属性
  date: 2023-01-31
  sidebar: heading
  breadcrumb: true
  lastUpdated: true
  contributors: true
  editLink: false
  category: CSS
  tag:
    - CSS
---



### position：sticky

使用场景：置顶

注意： 兼容性



### :empty选择器

使用场景：容器为空时，通过该伪元素添加提示

```js
.container {
    height: 400px;
    width: 600px;
    background-color: antiquewhite;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container:empty::after {
    content: "暂无数据";
}
```



### gap

场景：将100px 3等分，且每个元素隔开10px

```js
display: flex | grid；
gap: 20px;
```



### background-clip:text

带背景的文字效果



### user-select

禁用光标选中



### :invalid伪类

表示任意内容未通过验证的`input`或其他`form`元素



### :focus-within伪类

表示一个元素获得焦点，或该元素的后代元素获得焦点。



### mix-blend-mode:difference

属性描述了元素的内容应该与元素的直系父元素的内容和元素的背景如何混合。其中，`difference` 表示差值。
