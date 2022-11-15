---
title: 如何实现并发请求控制
date: 2022-11-15
sidebar: heading
breadcrumb: true
lastUpdated: true
contributors: true
editLink: false
category: Nodejs
tag:
  - 并发
---



## 场景

实现一个并发请求函数`concurrencyRequest(urls, maxNum)`，要求如下：

- 要求最大并发数 `maxNum`；
- 每当有一个请求返回，就留下一个空位，可以增加新的请求；
- 所有请求完成后，结果按照urls库暖白的顺序一次打出（发送请求的函数可以直接使用`fetch`即可）。

```js
// 方法一
const concurrencyRequest = (urls, maxNum) => {
  return new Promise((resolve) => {
    if (urls.length === 0) {
      resolve([]);
      return
    }

    const results = [];
    let next = 0;
    let count = 0;

    async function request() {
      if (next === urls.length) return;

      const i = next;
      const url = urls[next];
      console.info(url);

      try {
        const res = await fetch(url);
        results[i] = res;
      } catch (err) {
        results[i] = err;
      } finally {
        count++;
        if (count === urls.length) {
          console.info('完成了');
          resolve(results)
        }
        request();
      }
    }

    // maxNum和urls.length取最小进行调用
    const times = Math.min(maxNum, urls.length);
    for (let i = 0; i < times; i++) {
      request();
    }

  })
}

const urls = [];
for (let i = 1; i <= 20; i++) {
  urls.push(`https://jsonplaceholder.typicode.com/todos/${i}`);
}
concurrencyRequest(urls, 3).then(res => {
  console.log(res);
})

// 使用promise.all

const sendRequest = (tasks, max, callback) => {
  let index = 0;
  let together = new Array(max).fill(null);
  const result = [];

  together = together.map(() => {
    return new Promise((resolve) => {
      const run = () => {
        if (index >= tasks.length) {
          resolve();
          return;
        }

        let cur = index;
        let task = tasks[index++];
        task().then(res => {
          result[cur] = res;
          run();
        }).catch((err) => {
          result[cur] = err;
          run();
        })
      }
      run();
    })
  })

  Promise.all(together).then(() => callback(result));
}

sendRequest(tasks, 3, (res) => {
  console.info(res)
})
```



参考：

https://juejin.cn/post/7163522138698153997
