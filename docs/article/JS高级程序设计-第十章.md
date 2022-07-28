---
  title: JS高级程序设计-第十章-函数
  date: 
  sidebar: heading
  breadcrumb: true
  lastUpdated: true
  contributors: true
  editLink: false
  category: JavaScript
  tag:
    - 函数
---

# 函数 

[代码 demo地址]()

继续学习红宝书第10章，希望这一个21天计划能读完红宝书

这章主要介绍：

- 函数表达式、函数声明及箭头函数
- 默认参数及扩展运算符
- 使用函数实现递归
- 使用闭包实现私有变量



每个函数都是 `Function`类型的实例，而 `Function`也有属性和方法，跟其他引用类型一样。函数也是对象，所以 **函数名是指向函数对象的指针，并不一定与函数本身紧密绑定**。

## 函数定义方式

### 1. 函数声明方式

```js
function sum(a, b) {
  return a + b
}
```



### 2. 函数表达式方式

末尾可以加分号，与任何变量初始化语句一样

```js
const sum = function(a,b) {
  return a + b
};
```

### 3. 箭头函数

```js
const sum = (a,b) => {
  return a + b
};
```

### 4. Function 构造函数

该构造函数接收任意多个字符串参数，**最后一个参数为函数体，之前的参数为函数参数**

```js
let sum = new Function('a', 'b, 'return a + b'); // 不推荐
```

> 不推荐使用这种方法创建函数！
>
> 原因：这段代码会被解释两次；第一次：当做常规 ECMAScript代码，第二次：解释传给构造函数的字符串；
>
> 影响性能！！！

## 箭头函数

ES6新增 箭头函数，使用 `=>` 定义函数表达式。任何可以使用函数表达式的地方，都可以使用箭头函数。比较适合 嵌入函数的场景。省略大括号会隐式返回这行代码的值: `let triple = (x) => x * 3`。

> - 不能使用arguments、super、new.target
>
> - 不能用作构造函数
>
> - 没有prototype属性

