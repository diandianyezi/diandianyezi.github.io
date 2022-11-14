---

---

## 简介

Dynamic Programming，Dp

**动态规划**是一种把原问题分解为相对简单的子问题的方式求解复杂问题的方法。

## 基础

动态规划应用于子问题重叠的情况：

1. 要去刻画最优解的结构特征；
2. 尝试递归地定义最优解的值；
3. 计算最优解；
4. 利用计算出的信息构造一个最优解。



主要有以下两个特点：

1. 最优子结构： 一个规模为n的问题可以转化为规模比他小的子问题来求解。换言之，f(n)可以他通过一个比他规模小的递推式来求解。一般具有这种结构的问题也可以用递归求解，但是递归的复杂度太高。
2. 子问题的重叠性：如果用递归求解，会有很多重复的子问题，动态规划就是修剪了重复的计算来降低时间复杂度。但是因为需要再存储中间状态，空间复杂度是增加了。

难点在于归纳递推式。

## 钢条切割

给定一段钢条，和不同长度的价格，问如何切割使得总价格最大。

> 最优子结构：问题最优解由相关子问题的最优解组合而成，而这些子问题可以独立求解。

动态规划的两种实现方法：

* 带备忘的自顶向下法（记忆化搜索）
* 自底向上法（将子问题按规模排序，类似于递推）

### 递归解法

指数级复杂度

```js

const p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30]; // 下标表示钢条长度，值表示对应价格

function cut_rod2(n) {
  if(n === 1) return 1;
  
  let max = p[n];
  for(let i = 1; i <= n; i++){
    let sum = p[i] + cut_rod2(n - i);
    if(sum > max) {
      max = sum;
    }
  }
  
  return max;
}

cut_rod2(9);  // 结果还是返回 25
```

### 动态规划方案

O(n)^2^ 复杂度

```js
const p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30]; // 下标表示钢条长度，值表示对应价格

function cut_rod3(n) {
  let r = [0, 1];   // r数组记录每个长度的最大收益
  
  for(let i = 2; i <=n; i++) {
    let max = p[i];
    for(let j = 1; j <= i; j++) {
      let sum = p[j] + r[i - j];
      
      if(sum > max) {
        max = sum;
      }
    }
    
    r[i] = max;
  }
  
  console.log(r);
  return r[n];
}

cut_rod3(9);  // 结果还是返回 25
```



### 输出最佳方案

需要一个数组来记录切割一次时左边的长度，然后在这个数组中回溯来找出切割方案。

```js
const p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30]; // 下标表示钢条长度，值表示对应价格

function cut_rod3(n) {
  let r = [0, 1];   // r数组记录每个长度的最大收益
  let leftLength = [0, 1];  // 数组leftLength记录切割一次时左边的长度
  let solution = [];
  
  for(let i = 2; i <=n; i++) {
    let max = p[i];
    leftLength[i] = i;     // 初始化左边为整块不切
    for(let j = 1; j <= i; j++) {
      let sum = p[j] + r[i - j];
      
      if(sum > max) {
        max = sum;
        leftLength[i] = j;  // 每次找到大的值，记录左边的长度
      } 
    }
    
    r[i] = max;
  }
  
  // 回溯寻找最佳方案
  let tempN = n;
  while(tempN > 0) {
    let left = leftLength[tempN];
    solution.push(left);
    tempN = tempN - left;
  }
  
  console.log(leftLength);  // [0, 1, 2, 3, 2, 2, 6, 1, 2, 3]
  console.log(solution);    // [3, 6]
  console.log(r);           // [0, 1, 5, 8, 10, 13, 17, 18, 22, 25]
  return {max: r[n], solution: solution};
}

cut_rod3(9);  // {max: 25, solution: [3, 6]}
```

## 最长公共子序列

- 一个序列的子序列是在该序列中删去若干元素后得到的序列

- 最长公共子序列LCS问题



### LCS的最优子结构：

![](https://raw.githubusercontent.com/diandianyezi/typora-images/master/img/76e65dde3d104a1eb037765c6791cead%7Etplv-k3u1fbpfcp-zoom-in-crop-mark%3A4536%3A0%3A0%3A0.png)

```js
var longestCommonSubsequence = function(text1, text2) {
    let len1 = text1.length;
    let len2 = text2.length;

    if(len1 === 0 || len2 === 0) {
        return 0;
    }

    // 构建一个二维数组
    // i 表示行号 对应len1 + 1
    // j 表示列号 对应len2 + 1
    // 第一行和第一列全部为0
    let res = []
    for(let i = 0; i < len1 + 1; i++) {
        res.push([]);
        for(let j = 0; j < len2 + 1; j++) {
            if(i === 0 || j === 0) {
                res[i][j] = 0;
            } else if(text1[i - 1] === text2[j - 1]) {
                res[i][j] = res[i-1][j-1] + 1
            } else {
                res[i][j] = res[i][j - 1] > res[i - 1][j] ? res[i][j - 1] : res[i - 1][j]
            }
        }
    }

    return res[len1][len2]
};
```



### 输出最长公共子序列

```js
var longestCommonSubsequence = function(text1, text2) {
    let len1 = text1.length;
    let len2 = text2.length;

    if(len1 === 0 || len2 === 0) {
        return 0;
    }

    // 构建一个二维数组
    // i 表示行号 对应len1 + 1
    // j 表示列号 对应len2 + 1
    // 第一行和第一列全部为0
    let res = [];
    let comeFrom = [];
  
    for(let i = 0; i < len1 + 1; i++) {
        res.push([]);
      	comeFrom.push([]);
        for(let j = 0; j < len2 + 1; j++) {
            if(i === 0 || j === 0) {
                res[i][j] = 0;
              	comeFrom[i][j] = 0;
            } else if(text1[i - 1] === text2[j - 1]) {
                res[i][j] = res[i-1][j-1] + 1
              	comeFrom[i][j] = 1;
            } else {
                comeFrom[i][j] = res[i][j - 1] > res[i - 1][j] ? 2 : 3
            }
        }
    }
    // 回溯comeFrom数组, 获得最长公共子序列
    let pointerI = len1;
    let pointerJ = len2;
    let lcsArr = []
    while(pointerI > 0 && pointerJ > 0) {
      if(comeFrom[pointerI][pointerJ] === 1) {
        lcsArr.push(text1[pointerI - 1]);
        pointerI --;
        pointerJ --;
      } else if(comeFrom[pointerI][pointerJ] === 2) {
        pointerI--;
      } else if(comeFrom[pointerI][pointerJ] === 3){
        pointerJ--
      }
    }
    console.info(lcsArr.join(''))
    return res[len1][len2]
};
```

时间复杂度：O(mn)



Leetcode https://leetcode.cn/problems/unique-substrings-in-wraparound-string/solution/huan-rao-zi-fu-chuan-zhong-wei-yi-de-zi-ndvea/

