---
  title: Webpack Loader
  date: 2022-10-22
  sidebar: heading
  breadcrumb: true
  lastUpdated: true
  contributors: true
  editLink: false
  category: Javascript
  tag:
    - webpack
---

# Loader

用于对模块的源代码进行转换。loader 可以使你在 `import` 或 "load(加载)" 模块时预处理文件。因此，loader类似于其他构建工具中的 任务task，提供了处理前端构建步骤的得力方式。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 `import` CSS 文件！



## 使用loader

两种方式

1. 配置方式：在配置文件中指定loader；
2. 内联方式：在每个import语句中显示指定loader。



### 配置

`module.rules`允许你在webpack配置中指定多个loader。这种方式是展示loader的一种简明方式，并且有助于使代码变得简介和易于维护。

loader从右到左（或从下到上）地取值或执行。

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // [style-loader](/loaders/style-loader)
          { loader: 'style-loader' },
          // [css-loader](/loaders/css-loader)
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          // [sass-loader](/loaders/sass-loader)
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};
```

### 内联方式

在import语句或任何与import方法同等的引用方式中指定loader。使用 ！将资源中的loader分开。

```js
import styles from 'style-loader!css-loader?modules!.styles.css'
```

通过为内联 `import` 语句添加前缀，可以覆盖 [配置](https://webpack.docschina.org/configuration) 中的所有 loader, preLoader 和 postLoader：

1. 使用 ! 前缀，将禁用所有已配置的normal loader
2. 使用 !! 前缀，将禁用所有已配置的loader(preloader,loader,postloader);
3. 使用 -! 前缀，将禁用所有已配置的 preloader和loader，但是不禁用 postloader



## loader特性

- 支持链式调用。一组链式的loader将按照相反的顺序执行。
- loader 可以是同步的，也可以是异步的。
- loader运行在Nodejs中，并且能够执行任何操作。
- loader 可以通过options对象配置。
- 除了常见的通过 `package.json`的main来将npm 模块导出为loader，还可以在 module.rules 中使用loader字段直接引用一个模块。
- 插件 plugin 可以为loader带来更多特性。
- loader能够产生额外的任意文件。

可以通过loader的预处理函数，为js生态系统提供更多能力。用户现在可以更加灵活地引入细粒度逻辑。



## 解析loader

loader 遵循标准 [模块解析](https://webpack.docschina.org/concepts/module-resolution/) 规则。多数情况下，loader 将从 [模块路径](https://webpack.docschina.org/concepts/module-resolution/#module-paths) 加载（通常是从 `npm install`, `node_modules` 进行加载）。