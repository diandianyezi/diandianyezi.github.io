---
title: requestAnimationFrame
date: 2023-06-19
---



# requestAnimationFrame

在浏览器在下次重绘之前调用制动的回调函数更新动画。需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。

>`requestAnimationFrame`是一次性的，如果想在浏览器下次重绘之前继续更新下一帧动画，那会可以在回调函数自身再次调用`requestAnimationFrame`。

`DOMHighResTimeStamp`参数会传入回调方法中，它指示当前被`requestAnimationFrame()`排序的回调函数被触发的事件。



## 语法

```js
requestAnimationFrame(callback)
```



### 参数

callback：参数为 DOMHighResTimeStamp，该参数与performance.now()的返回值相同。它表示 `requestAnimationFrame()` 开始执行回调函数的时刻。



### 返回值

一个long证书，请求ID，是回调列表中的唯一的标识。是个非零值。可以用于取消回调函数请求。

```js
window.cancelAnimationFrame(id)
```



## 使用

```js
const element = document.getElementById("some-element-you-want-to-animate");
let start, previousTimeStamp;
let done = false;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  if (previousTimeStamp !== timestamp) {
    // 这里使用 Math.min() 确保元素在恰好位于 200px 时停止运动
    const count = Math.min(0.1 * elapsed, 200);
    element.style.transform = `translateX(${count}px)`;
    if (count === 200) done = true;
  }

  if (elapsed < 2000) {
    // 2 秒之后停止动画
    previousTimeStamp = timestamp;
    if (!done) {
      window.requestAnimationFrame(step);
    }
  }
}

window.requestAnimationFrame(step);

```



## 兼容性

![image-20230619094143080](https://raw.githubusercontent.com/diandianyezi/typora-images/master/img/202306190941502.png)

下面是一个polyfill：

```js
/**
 * window.requestIdleCallback()
 * version 0.0.0
 * Browser Compatibility:
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback#browser_compatibility
 */
if (!window.requestIdleCallback) {
  window.requestIdleCallback = function (callback, options) {
    var options = options || {};
    var relaxation = 1;
    var timeout = options.timeout || relaxation;
    var start = performance.now();
    return setTimeout(function () {
      callback({
        get didTimeout() {
          return options.timeout ? false : (performance.now() - start) - relaxation > timeout;
        },
        timeRemaining: function () {
          return Math.max(0, relaxation + (performance.now() - start));
        },
      });
    }, relaxation);
  };
}

/**
* window.cancelIdleCallback()
* version 0.0.0
* Browser Compatibility:
* https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelIdleCallback#browser_compatibility
*/
if (!window.cancelIdleCallback) {
  window.cancelIdleCallback = function (id) {
    clearTimeout(id);
  };
}

/**
* window.requestAnimationFrame()
* version 0.0.0
* Browser Compatibility:
* https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame#browser_compatibility
*/
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = function (callback) {
    return window.setTimeout(function () {
      callback(Date.now());
    }, 1000 / 60);
  };
}

/**
* window.cancelAnimationFrame()
* version 0.0.0
* Browser Compatibility:
* https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame#browser_compatibility
*/
if (!window.cancelAnimationFrame) {
  window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
}
```

