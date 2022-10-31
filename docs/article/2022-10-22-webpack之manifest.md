---
  title: Webpack manifest
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

# manifest

在使用webpack构建的典型应用程序或站点中，有三种主要的代码类型：

- 编写的源码；
- 依赖的第三方的libary或vendor代码；
- webpack的runtime和manifest，管理所有模块的交互。

## runtime

runtime，以及伴随的manifest数据，主要是指：在浏览器运行过程中，webpack用来连接模块化应用程序所需的所有代码。它包含：在模块交互时，连接模块所需的加载和解析逻辑。包括：已经加载到浏览器中的连接模块逻辑，以及尚未加载模块的延迟加载逻辑。

## manifest

管理所有模块之间的交互。

当 **compiler** 开始执行、解析和映射应用程序时，它会保留所有模块的详细要点。这个数据集合称为 "manifest"，当完成打包并发送到浏览器时，runtime 会通过 manifest 来解析和加载模块。无论你选择哪种 [模块语法](https://webpack.docschina.org/api/module-methods)，那些 `import` 或 `require` 语句现在都已经转换为 `__webpack_require__` 方法，此方法指向**模块标识符(module identifier)**。通过使用 manifest 中的数据，runtime 将能够检索这些标识符，找出每个标识符背后对应的模块。

