---
title: 开发小技巧
date: 2022-11-14
sidebar: heading
breadcrumb: true
lastUpdated: true
contributors: true
editLink: false
category: Javascript
tag:
  - Javascript
---



##### ?? 运算符

当左边为 `null`或 `undefined`时，才返回右边的值，可以处理 `false` 和 0 的情况。

`````js
0 ?? 2 // 0
false ?? 2 // false
1 ?? 2 // 1
null ?? 2 // 2
undefined ?? 2 // 2
`````

##### 取整

```js
5.8 | 0 // 5
-5.8 | 0 // 5
```

> 利用计算机中二进制按位或进行计算，~~ 双非按位取反运算 也可以打到类似效果。

##### 奇偶数

```js
const num = 123
if(num & 1) console.log('odd')
else console.log('even')
```

##### 补0

```js
const fillZero = (num, len) => num.toString().padStart(len, '0');

fillZero(9, 2) // '09'
```

##### 保留小数

```js
const round = (num, demical) => Math.round(num * 10 ** demical) / 10 ** demical

round(12.453,2);       // 12.45
round(12.457,2);       // 12.46
```

##### 判断数据类型

```js
const type = (val) => {
  return Object.prototype.toString.call(val).slice(8, -1);
}

type(1);              // Number
type('s');            // String
type(false);          // Boolean
type([]);             // Array
type({});             // Object
type(new Date());     // Date
type(Symbol(0));      // Symbol
type(undefined);      // Undefined
type(null);           // Null
```

