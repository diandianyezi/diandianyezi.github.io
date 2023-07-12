---
title: 实现内圆角
date: 2023-06-02
category: CSS
tags:
 - CSS
---



# CSS之实现内圆角

最近开发需求时，需要实现一个内圆角。在网上查阅资料发现了以下实现方法，在此记录一下：



## radial-gradient函数

`radial-gradient` 函数用径向渐变创建图像；



### CSS语法

```css
background-image: radial-gradient(shape size at position, start-color, ..., last-color);
```



- `shape`: 确定圆的类型
    - ellipse 默认：指定椭圆形的径向渐变
    - circle：指定圆形的径向渐变
- `size`：定义渐变的大小，可能值：
    - fathest-corner默认：指定径向渐变的半径长度为圆心到离圆心最远的角；
    - closest-side:指定径向渐变的半径长度为从圆心到离圆心最近的边；
    - closest-corner: 指定径向家变的半径长度为从圆心到离圆心最近的角；
    - fathest-side: 指定径向渐变的半径长度为从圆心到离圆心最远的角；
- `position`: 定义渐变的位置。可能值：
    - `center`默认：设置中间为径向渐变圆心的纵坐标值；
    - `top`: 设置顶部为径向渐变圆心的纵坐标值；
    - `bottom`: 设置底部为径向渐变圆心的纵坐标值；

- start-color,...,last-color: 用于指定渐变的起止颜色。