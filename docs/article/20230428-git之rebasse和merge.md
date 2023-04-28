---
title: git操作之rebase和merge
date: 2023-04-28
---

# Git操作之rebase 和merge

将一个分支合并到另外一个分支有两种策略rebase衍合和merge合并。



##  rebase

### 如何使用？

merge命令会将两个分支最新的快照以及二者最新的共同祖先进行三方合并。

rebase会自己的分支里产生的变化补丁重新在main分支的基础上打一遍。

```shell
git checkout my-branch
git rebase master
```

原理：

回到两个分支的共同祖先，提取你所在分支每次提交时产生的差异diff，把这些差异分别保存到临时文件里，然后从当前分支转换到你需要衍合的分支，依序使用每个差异补丁文件。

rebase能产生一个更为整洁的提交历史。rebase按照每行改变发生的次序重演发 生的改变，而merge是把最终结果合在一起。

### 更多有趣的衍合？

你还可以在衍合分支以外的地方衍合

`git rebase [主分支] [特性分支]` 命令会先检出特性分支，然后在主分支 master 上重演: