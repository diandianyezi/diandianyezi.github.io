---
  title: 浏览器工作原理-Javascript执行机制(一)
  date: 2022-10-14
  sidebar: heading
  breadcrumb: true
  lastUpdated: true
  contributors: true
  editLink: false
  category: JavaScript
  tag:
    - 浏览器
---
## 变量提升 Hoisting

是指在Javascript代码执行过程中，JavaScript引擎吧变量的声明部分和函数的声明部分提升到代码开头的行为。变量被提升后，会给变量设置默认值，这个默认值就是undefined。



### JavaScript代码的执行流程

![img](https://raw.githubusercontent.com/diandianyezi/typora-images/master/img/649c6e3b5509ffd40e13ce9c91b3d91e.png)



#### 1. 编译阶段

执行上下文和可执行代码

执行上下文是JS执行一段代码时的运行环境（this，变量、对象以及函数等）

```js
VariableEnvironment:
     myname -> undefined, 
     showName ->function : {console.log(myname)
```



js引擎会为变量声明创建 变量环境对象存储在执行上下文中，其他代码会被编译为字节码



#### 2. 执行阶段

按顺序一行一行执行



### 总结

JavaScript代码执行过程中，需要先做**变量提升**，而之所以需要实现变量提升，是因为JavaScript代码在执行之前需要先编译。 在编译阶段，**变量和函数**会被存放到变量环境中，变量的默认值会被设置为undefined；在代码执行阶段，JavaScript引擎会从变量环境中去查找自定义的变量和函数。


