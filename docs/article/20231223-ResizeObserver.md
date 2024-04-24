---
title: 学习Resize Observer API
date: 2023-09-09
sidebar: heading
breadcrumb: true
lastUpdated: true
contributors: true
editLink: false
category:
  - JavaScript
tag:
  - API
---

# Resize Observer API

在最近的需求开发中，新接触了这个API，日常记录一下。

这是一种无侵入的观察方式，可以在完全不影响目标元素业务逻辑的同时，嵌入需要响应变化的功能逻辑，例如发送埋点数据。减轻了开发者的心智负担和维护成本。

## ResizeObserver

`ResizeObserver`接口监视`Element`内容盒或边框盒或者`SVGElement`边界尺寸的变化。

`ResizeObserver`避免了通过回调函数调整大小时，通常创建的无限回调循环和循环依赖项。它只能通过在后续的帧中处理DOM中更深层次的元素来做到这一点。如果它的实现遵循规范，则应在绘制前和布局后调用 resize 事件。

### 构造函数

ResizeObserver()：创建并返回一个新的ResizeObserver对象

### 属性

无

### 方法

- ResizeObserver.disconnect()

    取消特定观察者目标上所有对Element的监听。

- ResizeObserver.observe()

    开始对指定Element的监听

- ResizeObserver.unobserve()

    结束对指定Element的监听

### 代码示例

```js
const observer = new ResizeObserver(callback);

function callback(entries) {
  for(const entry of entries) {
    const rect = entry.contentRect;
    // ...
  }
}
```

- `entry.contentRect`返回的是一个DOMRect对象，其中包含了目标元素的x, y, width, height, top, bottom, left, right等属性。

### 兼容性

![image-20231223154829492](https://raw.githubusercontent.com/diandianyezi/typora-images/master/img/202312231548922.png)



## ResizeObserverEntry

[`ResizeObserverEntry`](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserverEntry)描述已调整大小的单个元素，标识钙元素及其新大小。

**`ResizeObserverEntry`** 接口是传递给 [`ResizeObserver()`](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver/ResizeObserver) 构造函数中的回调函数参数的对象，它允许你获取真正在观察的 [`Element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 或 [`SVGElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/SVGElement) 最新的大小。

### 属性

[`ResizeObserverEntry.borderBoxSize`](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserverEntry/borderBoxSize)：只读，一个对象，当运行回调时，该对象包含着正在观察元素的新边框盒的大小。

[`ResizeObserverEntry.contentBoxSize`](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserverEntry/contentBoxSize) ：只读，一个对象，当运行回调时，该对象包含着正在观察元素的新内容盒的大小。

[`ResizeObserverEntry.devicePixelContentBoxSize`](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize) ：只读，一个对象，当运行回调时，该对象包含着正在观察元素的新内容盒的大小（以设备像素为单位）。

[`ResizeObserverEntry.contentRect`](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserverEntry/contentRect) ：只读，一个对象，当运行回调时，该对象包含着正在观察元素新大小的 [`DOMRectReadOnly`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMRectReadOnly) 对象。请注意，这比以上两个属性有着更好的支持，但是它是 Resize Observer API 早期实现遗留下来的，出于对浏览器的兼容性原因，仍然被保留在规范中，并且在未来的版本中可能被弃用。

[`ResizeObserverEntry.target`](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserverEntry/target) ：只读，对正在观察 [`Element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 或 [`SVGElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/SVGElement) 的引用。



需要实现一个功能：根据页面大小，设置底部协议展示是吸底展示还是在页面底部向下滚动后展示。最终想的方案根据监听页面两个dom元素的高度，如果这两个元素的高度之和大于页面高度，就将第二个元素的position设置为relative相对定位，小于页面高度，就将position设置为absolute绝对布局，吸底展示。



## 实践中发现的问题

IOS13以下不支持该属性，需要做降级处理 or polyfill

