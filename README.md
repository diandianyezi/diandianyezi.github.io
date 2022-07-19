# 介绍

## 速览

- [x]  这是一款 Vuepress 主题，集成了博客所需的分类、TAG墙、分页、评论等功能。
- [x]  主题追求极简，配置上手简单，适配移动端。
- [x] 博客效果展示：

![now](https://user-gold-cdn.xitu.io/2020/5/2/171d4a46cd1c4caf?w=599&h=287&f=gif&s=1994152)

## 主题使用

### 安装主题

创建一个新的项目 my-blog：

```shell
mkdir my-blog
cd my-blog
```

初始化 yarn 或 npm ：

```shell
yarn init  或 npm init -y
```

安装 vuepress 和 vuepress-theme-melodydl：

```shell
yarn add vuepress vuepress-theme-melodydl
或
npm install vuepress vuepress-theme-melodydl
```

创建 src/_posts 文件夹和 Vuepress 配置文件，项目结构大致为：

```shell
my-blog
├── src # Blog 源文件目录
│   ├── .vuepress # Vuepress 目录
│   │   └── public # Vuepress 静态资源文件
│   │   └── config.js # Vuepress 配置文件
│   └── about # About 页面 文件夹
│   │   ├── index.md  # about 页面内容文件
│   └── _posts # 博客文件夹
│       ├── xxx.md
│       ...
└── package.json
```

在 package.json 加入 script 字段：

```json
{
  "scripts": {
    "dev": "vuepress dev src",
    "build": "vuepress build src"
  }
}
```

### 配置主题

在 src/.vuepress/config.js 中配置 Vuepress 和主题：

``` html
<details>
  <summary>点击展示配置示例</summary>

    module.exports = {
        // 网站 Title
          title: 'Top 的博客 ｜ Top Blog',
          
          // 网站描述
          description: '个人博客',
          
          // 网站 favicon 图标设置等
          head: [
            ['link', { rel: 'icon', href: '/favicon.ico' }],
            ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
          ],
          
          // 使用的主题
          theme: 'melodydl',
          
          // 主题配置
          themeConfig: {
            title: 'Top Blog',

        // 个人信息（没有或不想设置的，删掉对应字段即可）
        personalInfo: {
        
        // 名称
          name: 'melodydl',
          
          // 头像 public文件夹下
          avatar: '/avatar-top.jpeg',
          
          // 头部背景图
          headerBackgroundImg: '/avatar-bg.jpeg',
          
          // 个人简介 (支持 HTML)
          description: '前端开发 三只猫的铲屎官',
          
           // 电子邮箱
          email: 'facecode@foxmail.com',
          
          // 所在地
          location: 'Shanghai, China'
        },
        // 顶部导航栏内容
        nav: [ 
          {text: 'HOME', link: '/' },
          {text: 'ABOUT', link: '/about/'},
          {text: 'TAGS', link: '/tags/'}      
        ],
        
        // 首页头部标题背景图设置，图片直接放在 public 文件夹下
        header: {
          home: {
            title: 'Top Blog', 
            subtitle: '好好生活，慢慢相遇', 
            headerImage: '/home-bg.jpeg'
          },
          
          // tag页面头部标题背景图设置，图片直接放在 public 文件夹下
          tags: {
            title: 'Tags', 
            subtitle: '遇见你花光了我所有的运气', 
            headerImage: '/tags-bg.jpg'
          },
          
          // 文章详情头部背景图
          postHeaderImg: '/post-bg.jpeg',
        },
        
        // 社交平台帐号信息 
        sns: {
          // 简书账号和链接
          "jianshu": { 
            account: "jianshu", 
            link: "https://www.jianshu.com/u/5dddaee8f351", 
          },
          
          // 新浪 账号和链接
          "weibo": { 
            account: "",
            link: ""
          },
          
          // 知乎 帐号和链接
          "zhihu": { 
            account: "zhihu",
            link: "https://www.zhihu.com/people/sheng-tang-de-xing-kong"
          },
          
          // Github 帐号和链接
          "github": { 
            account: "github",
            link: "https://github.com/youdeliang"
          }
        },
        // 底部 footer 的相关设置 
        footer: {
          // gitbutton  配置
          gitbtn: {
            // 仓库地址
            repository: "https://ghbtns.com/github-btn.html?user=youdeliang&repo=vuepress-theme-top&type=star&count=true",
            frameborder: 0,
            scrolling: 0,
            width: "80px",
            height: "20px"
          },
          
          // 添加自定义 footer
          custom: `Copyright &copy; Top Blog 2022 <br /> 
            Theme By <a href="https://www.vuepress.cn/" target="_blank">VuePress</a>
            | <a href="https://www.github.com/youdeliang/" target="_blank">youdeliang</a>`
        },
        
        // 分页配置
        pagination: {
          // 每页文章数量
          perPage: 5,
        },
        
        // vssue 评论配置, 如果不需要，可以设置 comments: false
        comments: false,
      }
    }
</details>
```

### about页面配置

```md
---
layout: about 
title: About
subtitle: 你可以很好，但你无需完美
headerImage: /about-bg.jpg # public 文件夹下的图片
---

下面为个人信息等内容...
```

### 创建博客

在 src/_posts 下创建 md 文件

```
<!-- _posts/2019-04-01-JS异步编程方案总结.md -->
---
title: "JS异步编程方案总结"
date: 2019-04-01
tags:
  - Promise
  - JavaScript
---

本篇博客主要是对 Javcscript 异步编程方案总结

more 上面的内容是摘要，将显示在目录中。

<!-- more -->

more 下面的内容只有浏览这篇文章时才会完全展示，不会显示在目录中。

```

运行相应 script 生成你的博客网站

```shell
# 开发
npm run dev
# 构建
npm run build
```
