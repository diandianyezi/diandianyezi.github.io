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
## 调用栈

JavaScript引擎正是利用栈的这种结构来管理执行上下文的。在执行上下文创建好后，JavaScript引擎会将执行上下文压入栈中，通常把这种用来管理执行上下文的栈称为执行上下文栈，又称调用栈。

调用栈是JavaScript引擎追踪函数执行的一个机制，当一次有多个函数被调用时，通过调用栈就能够追踪到哪个函数正在被执行以及各函数之间的调用关系。

## 在开发中如何利用好调用栈

1. 浏览器查看调用栈信息
   
   ![](https://static001.geekbang.org/resource/image/c0/a2/c0d303a289a535b87a6c445ba7f34fa2.png)

2. 除了通过断点来查看调用栈，你还可以使用console.trace()来输出当前的函数调用关系，比如在示例代码中的add函数里面加上了console.trace()，你就可以看到控制台输出的结果，如下图：

## 栈溢出
调用栈是一种用来管理执行上下文的数据结构，符合后进先出的规则。不过还有一点你要注意，调用栈是有大小的，当入栈的执行上下文超过一定数目，JavaScript引擎就会报错，我们把这种错误叫做栈溢出。
抛出的错误信息为：超过了最大栈调用大小（Maximum call stack size exceeded）。
如何解决：
把递归调用的形式改造成其他形式，或者使用加入定时器的方法来把当前任务拆分为其他很多小任务。

## 总结：
- 每调用一个函数，JavaScript引擎会为其创建执行上下文，并把该执行上下文压入调用栈，然后JavaScript引擎开始执行函数代码。
- 如果在一个函数A中调用了另外一个函数B，那么JavaScript引擎会为B函数创建执行上下文，并将B函数的执行上下文压入栈顶。
- 当前函数执行完毕后，JavaScript引擎会将该函数的执行上下文弹出栈。
- 当分配的调用栈空间被占满时，会引发“堆栈溢出”问题。
- 栈是一种非常重要的数据结构，不光应用在JavaScript语言中，其他的编程语言，如C/C++、Java、Python等语言，在执行过程中也都使用了栈来管理函数之间的调用关系。
