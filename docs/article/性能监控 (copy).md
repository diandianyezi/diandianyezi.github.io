# 性能监控

## 监控什么？

有哪些具体的指标呢？

Google开发者提出了一种RAIL模型来衡量应用性能，即：Response、Animation、Idle、Load，分别代表着web应用声明周期的四个不同方面。并指出最好的性能指标是：100ms内响应用户输入；动画或者滚动需在10ms内产生下一帧；最大优化空闲时间；页面加载时长不超过5秒。

RAIL是一种以用户为中心的性能模型。每个网络应用均具有与其声明周期有关的四个不同方面，且这些方面以不同的方式影响着性能：

![image-20220701144557994](https://raw.githubusercontent.com/diandianyezi/typora-images/master/img/202207011445065.png)

可以转化为三个方面来看：响应速度、页面稳定性、外部服务调用

- 响应速度：页面初始访问速度+交互响应速度；
- 页面稳定性：页面出错率；
- 外部服务调用：网络请求访问速度。

### 1. 页面访问速度：白屏、首屏时间、可交互时间

google开发者提出的几个性能指标

![1](https://tva1.sinaimg.cn/large/006tNbRwgy1gah51k3lg8j31bi0gg45d.jpg)

| The Experience    | The Metric                                        |
| ----------------- | ------------------------------------------------- |
| is it happening?  | First Paint(FP)/First Contentful Paint(FCP)       |
| Is it useful?     | First Meaningful Paint(FMP)/Hero Element Timing   |
| Is it usable?     | Time to Interactive(TTI)                          |
| Is it delightful? | Long Tasks(technically the absence of long tasks) |

#### 1). FP and FCP

首次渲染、首次有内容的渲染

这两个指标浏览器已经标准化了，从performance的The Paint Timing API 可以获取到，一般来说两个时间相同，但也有情况下两者不同。

#### 2). First Meaningful paint and hero element timing

首次有意义的渲染、页面关键元素

我们假设当一个网页的 DOM 结构发生剧烈的变化的时候，就是这个网页主要内容出现的时候，那么在这样的一个时间点上，就是首次有意义的渲染。这个指标浏览器还没有规范，毕竟很难统一一个标准来定义网站的主体内容。
google lighthouse 定义的 first meaningful paint：
https://docs.google.com/document/d/1BR94tJdZLsin5poeet0XoTW60M0SjvOJQttKT-JK8HI/view

#### 3). Time to interactive

可交互时间

#### 4). 长任务

浏览器是单线程的，如果长任务过多，那必然会影响用户响应时长。好的应用需要最大化空闲时间，以保证能最快响应用户的输入。



### 2. 页面稳定性：页面出错情况

资源加载错误

JS执行出错



### 3. 外部服务调用

CGI耗时

CGI成功率

CDN资源耗时



## 监控的分类？

web性能监控可分为两类，一类是合成监控（Synthetic Monitoring，SYN），另一类是真实用户监控（Real User Monitoring，RUM）

### 合成监控

合成监控是采用web浏览器模拟器来加载网页，通过模拟终端用户可能得操作来采集对应的性能指标，最后输出一个网站性能报告。例如 LightHouse、PhantomJS等

Lighthouse是google一个开源的自动化工具，运行Lighthouse的方式有两种：一种是作为Chrome扩展程序运行，另一种是作为命令行工具运行。通过命令行工具可以将 Lighthouse 集成到持续集成系统。

优点： 无侵入性、简单快捷；

缺点：不是真实用户访问情况，只是Monitoring，没法考虑到登录情况，对于需要登录的页面没法监控。

### 真实用户监控

真实用户监控是一种被动监控技术，是一种应用服务，被监控的 web 应用通过 sdk 等方式接入该服务，将真实的用户访问、交互等性能指标数据收集上报、通过数据清洗加工后形成性能分析报表。例如 FrontJs、oneapm、Datadog 等。

![image-20220701152639466](https://raw.githubusercontent.com/diandianyezi/typora-images/master/img/202207011526507.png)



## performance分析

浏览器提供的 performance api，这也是性能监控数据的主要来源。

performance 提供高精度的时间戳，精度可达纳秒级别，且不会随操作系统时间设置的影响。
目前市场上的支持情况：主流浏览器都支持，大可放心使用。



# 参考文档：

http://www.alloyteam.com/2020/01/14184/

https://juejin.cn/post/6950824230653001758

