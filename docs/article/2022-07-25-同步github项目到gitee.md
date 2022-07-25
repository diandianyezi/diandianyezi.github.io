---
layout: post
title: 同步github项目到gitee
sidebar: heading
breadcrumb: true
lastUpdated: true
contributors: true
editLink: false
tag:
  - github
  - gitee
---

# Github同步项目到Gitee

我们已经在Github创建了博客仓库，并用Github Actions 实现了在推送分支时，自动部署。这篇文章里，我们将介绍如何将Github仓库更新到Gitee仓库

首先，需要在 Gitee 导入Github的博客仓库，具体操作如下：

1. 在Gitee绑定Github账号；
2. 新建仓库时，选择导入其他网站的仓库，选择导入Github仓库。
3. ![image-20220725105816246](https://raw.githubusercontent.com/diandianyezi/typora-images/master/img/image-20220725105816246.png)

![image-20220725105612428](../../../../../Library/Application Support/typora-user-images/image-20220725105612428.png)



创建之后，我们如何保证Github和Gitee仓库同步呢？

## 手动同步

在仓库首页有一个同步按钮，默认是强制同步。每次更新之后，需要自己手动点击。

![image-20220725105918432](https://raw.githubusercontent.com/diandianyezi/typora-images/master/img/image-20220725105918432.png)


## 自动同步

除了手动同步，还可以利用 `Github Actions`实现自动同步。具体为：在Github的博客仓库的gh-pages分支更新后，自动同步到Gitee上。

目前已经有实现好的Actions [Hub Mirror Action](https://github.com/Yikun/hub-mirror-action)

```yml
steps:
- name: Mirror the Github organization repos to Gitee.
  uses: Yikun/hub-mirror-action@master
  with:
    src: github/kunpengcompute # 源端账户名
    dst: gitee/kunpengcompute  # 目的端账户名
    dst_key: ${{ secrets.GITEE_PRIVATE_KEY }} # 表示用于在目的端上传代码的私钥，然后将其保存在 Secrets 中
    dst_token: ${{ secrets.GITEE_TOKEN }}
    account_type: org
```

具体操作步骤如下：

1. 获取私钥




参考文章：
https://github.com/mqyqingfeng/Blog/issues/236
