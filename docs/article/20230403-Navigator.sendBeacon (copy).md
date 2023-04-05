---
title: Navigator.sendBeacon
---



# Navigator.sendBeacon

可用于通过`HTTP POST`将少量数据 异步传输到Web服务器；主要用于将统计数据发送到Web服务器，同时避免了用传统技术（如：`XMLHTTPRequest`）发送分析数据的一些问题。



## 语法

```js
navigator.sendBeacon(url);
navigator.sendBeacon(url, data);
```

### 参数

1. url 表示data将要被发送到的网络地址。
2. data表示将要发送的 `ArrayBuffer`、`ArrayBufferView`、`Blob` 、 `DOMString`、`FormData`或 `URLSearchParams`类型的数据。

### 返回值

当用户代理成功地将数据加入到传输队列中时，返回`true`，否则返回 `false`。



## 描述

该方法通过将数据发送到服务器来分析和诊断代码。这些代码通常尝试在卸载`unload` document之前向web服务器发送数据。然而，对于开发者来说保证在文档卸载期间发送数据一直是一个困难。因为用户代理通常会忽略在 `unload`事件处理器中产生的异步 `XMLHTTPRequest`。



为了解决这个问题，统计和诊断代码通常要在

- 发起一个同步`XMLHTTPRequest`来发送数据
- 创建一个 `img` 元素并设置`src`，大部分用户代理会延迟卸载 `unload`文档以加载图像。
- 创建一个几秒的 no-op循环。

上述的所有方法都会迫使用户代理延迟卸载文档，并使得下一个导航出现的更晚。

这就是 **`sendBeacon()`** 方法存在的意义。使用 **`sendBeacon()`** 方法会使用户代理在有机会时异步地向服务器发送数据，同时不会延迟页面的卸载或影响下一导航的载入性能，这意味着：

- 数据发送是可靠的。
- 数据异步传输。
- 不影响下一导航的载入。



### 在会话结束时发送统计数据

网站通常希望在用户完成页面浏览后向服务器发送分析或诊断数据，最可靠的方法是 `visibilitychange`事件发生时发送数据：

```js
document.addEventListener('visibilitychange', function logData() {
  if(document.visibilityState === 'hidden') {
    navigator.sendBeacon('/log', analyticsData);
  }
})
```



### 避免使用`unload`和`beforeunload`

在需要情况下（尤其是移动设备）浏览器不会产生 `unload` 和 `beforeunload` 和 `pagehide`事件。比如：

1. 用户加载了网页并与其交互；
2. 完成浏览后，用户切换到其他应用程序，而不是关闭选项卡；
3. 随后，用户通过手机的应用管理器关闭了浏览器应用。



此外，unload事件与 back/forward cache(bfcache)在现代浏览器的实现是不兼容的。

- Firefox浏览器，通过排除包含unload和beforeunload事件的页面，来处理这种不兼容，因此损失了一些性能。
- Safari和Chrome，在用户在同一个tab页导航到另一个页面时，不执行 unload，来处理这种不兼容。

### 使用 pagehide 作为回退

可使用 [`pagehide`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/pagehide_event) 事件来代替部分浏览器未实现的 `visibilitychange` 事件。和 `beforeunload` 与 `unload` 事件类似，这一事件不会被可靠地触发（特别是在移动设备上），但它与 bfcache 兼容。
