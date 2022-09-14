---
  title: Babel配置
  date: 2022-09-05
  sidebar: heading
  breadcrumb: true
  lastUpdated: true
  contributors: true
  editLink: false
  category: JavaScript
  tag:
    - Babel

---

## 配置Babel

所有 Babel API [参数](https://www.babeljs.cn/docs/options) 都可以被配置。然而，如果该参数需要用到 JavaScript 代码，你可能需要使用 JavaScript 代码版的 [配置文件](https://www.babeljs.cn/docs/config-files)。

### 使用场景

- monorepo模式
- 需要编译node_modules 

可以使用 `babel.config.json`

- 配置文件仅适用于项目某个部分

可以使用`.babelrc.json` 文件

#### babel.config.json

请参阅 [`babel.config.json` 文档](https://www.babeljs.cn/docs/config-files#project-wide-configuration) 以了解更多关于配置参数的信息。

#### .babelrc.json

请参阅 [.babelrc 文档](https://www.babeljs.cn/docs/config-files#file-relative-configuration) 以了解更多关于配置参数的信息。

还可以选择将`.babelrc.json`的配置信息作为  `babel`键的值  `添加到 `package.json`文件

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "babel": {
    "presets": [ ... ],
    "plugins": [ ... ],
  }
}
```



### 用JavaScrript编写配置文件

```js
const presets = []
const plugins = []

// 可以调用 Nodejs的任何API
if (process.env["ENV"] === "prod") {
  plugins.push(...);
}

module.exports = { presets, plugins }
```



### 使用CLI(`@babel/cli`)

```shell
babel --plugins @babel/plugin-transform-arrow-functions script.js
```

请参阅 [babel-cli 文档](https://www.babeljs.cn/docs/babel-cli) 以了解更多关于配置参数的信息。

### 使用API(`@babel/core`)

```js
require("@babel/core").transformSync("code", {
  plugins: ["@babel/plugin-transform-arrow-functions"],
});
```

请参阅 [babel-core 文档](https://www.babeljs.cn/docs/babel-core) 以了解更多关于配置参数的信息。

### Print effective configs

You can tell Babel to print effective configs on a given input path

```shell
# *nix or WSL
BABEL_SHOW_CONFIG_FOR=./src/myComponent.jsx npm start

# or
$env:BABEL_SHOW_CONFIG_FOR = ".\src\myComponent.jsx"; npm start
```

Babel will print effective config sources ordered by ascending priority. Using the example above, the priority is:

```
babel.config.json < .babelrc < programmatic options from @babel/cli

Copy
```

In other words, `babel.config.json` is overwritten by `.babelrc`, and `.babelrc` is overwritten by programmatic options.