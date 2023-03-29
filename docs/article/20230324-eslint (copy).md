# Eslint

ESLint是一个用于识别和报告在ECMAScript/JavaScript代码中发现的模式的工具，其目标是使代码更加一致并避免错误。

ESlint完全是插件化的，每一条规则都是一个插件，可以在运行时添加更多插件。你也可以使用社区插件、配置和解析器来扩展ESlint的功能。

## 预备

安装Nodejs（ (`^12.22.0`, `^14.17.0`, or `>=16.0.0`)）并构建支持SSL。



## 快速开始

```shell
npm init @eslint@config
```

如果想使用一个托管在npm上的共享配置，可以使用 `--config`选项后面加上配置包名称：

```shell
npm init @eslint/config -- --config shareablePackageName1, name2

# or (`eslint-config` prefix is optional)
npm init @eslint/config -- --config eslint-config-semistandard
```



如果已经有 `package.json`，可以运行以下命令

```shell
npx eslint yourfile.js

yarn run eslint yourfile.js
```



## 配置

运行 `npm init @eslint/config` 之后，会生成一个 `.eslintrc.{js,yml,json}`文件。如下：

```js
{
  "rule": {
    "semi": ["error", "always"],
     "quotes": ["error", "double"]
  }
}
```

rule规则值的第一个值为错误等级，是以下值的一个

- off or 0 :关闭规则
- warn or 1：警告，不会影响exit code
- error or 2：错误，exit code为1

```json
{
    "extends": "eslint:recommended"
}
```

上面这个配置，会打开所有标志为推荐的规则。

可以在npm仓库中使用别人共享的配置。

ESlint不会检测你的代码，除非你从共享配置中扩展或者显式地在配置中打开规则。



## 全局安装

`npm install eslint --global`

不推荐全局安装`eslint`，如果全局安装了 `eslint`，使用的任何插件或可共享配置任然需要在本地安装。



## 手工调整

1. 安装ESlint 

```shell
npm install --save-dev eslint
```

2. 添加 `.eslintrc`文件
3. 添加配置信息
4. Lint code using the ESLint CLI:

```shell
npx eslint project-dir/ file1.js
```



