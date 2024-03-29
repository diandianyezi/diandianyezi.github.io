---
  title: MVC和MVVM
  date: 2022-09-03
  sidebar: heading
  breadcrumb: true
  lastUpdated: true
  contributors: true
  editLink: false
  category: 易混淆
  tag:
    - 软件设计
---

## MVC：

是Model（模型） View（视图） Controller（控制器）的缩写，是服务端分层开发的概念，本质上是用一种将数据、界面显示、业务逻辑分离的方法组织代码的软件开发设计典范。
（1）Model：数据层，负责操作数据库，执行数据的CRUD，职能单一。
（2）View：视图层，每当用户操作界面，就需要进行业务的处理，都会通过网络请求去服务端请求服务器。
（3）Controller：业务逻辑层，作为中间人负责数据层和视图层的交互。
总结：MVC模型中，Model、View，Controller三者是完全独立分开的，并且Model和View是完全隔离的，虽然Model不依赖于View，但是View是依赖于Model的，两者由Controller这个中间人负责交互。

## MVVM

是Model（模型） View（视图） ViewModel（调度者）的缩写，是客户端视图层分离的概念，本质上是将其中的View的状态和行为抽象化，让我们将视图UI和业务逻辑分开。
（1）Model：MVVM中的M保存的是每个页面中单独的数据。
（2）View：MVVM中的V就是每个页面中的HTML结构。
（3）ViewModel：MVVM中的VM是一个调度者，分离了Model和View，每当View需要获取或者保存数据时，都要通过VM做中间的处理。
总结：VM是MVVM的核心，是M和V之间的调度者，数据的双向绑定是由VM完成的。
MVVM与MVC的区别是，MVVM实现了View和Model的自动同步，不用手动操作Dom，即Model变化时View可以实时更新，View变化也能改变Model。
MVVM与MVC的区别是，MVVM实现了View和Model的自动同步，不用手动操作Dom，即Model变化时View可以实时更新，View变化也能改变Model。