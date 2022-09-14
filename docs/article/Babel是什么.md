[官网](https://www.babeljs.cn/docs/index.html)

## Babel 是什么？

是一个JavaScript编译器

作为一个工具链，主要用于将采用ECMAScript 2015+语法编写的代码转换为向后兼容的Javascript语法，以便能够运行在当前和旧版本的浏览器和其他环境中。

主要有以下功能：

- 语法转换
- 通过`Polyfill`方式在目标环境中添加缺失的特性（通过引入第三方`polyfill`模块，例如`core-js`）
- 源码转换(codemodes)

```js
// Babel 输入： ES2015 箭头函数
[1, 2, 3].map(n => n + 1);

// Babel 输出： ES5 语法实现的同等功能
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

编译器可参考[the-super-tiny-compiler项目](https://github.com/jamiebuilds/the-super-tiny-compiler)

###  ES2015及更新版本

Babel 通过语法转换器来支持新版本的JS语法。

这些[插件](https://www.babeljs.cn/docs/plugins)

### JSX与React

Babel 能够转换 JSX 语法！查看 [React preset](https://www.babeljs.cn/docs/babel-preset-react) 了解更多信息。通过和 [babel-sublime](https://github.com/babel/babel-sublime) 一起使用还可以把语法高亮的功能提升到一个新的水平。



### 类型注释(Flow 和 TypeScript)

Babel可以删除类型注释！Babel是不做类型检查的，所以仍需要安装 Flow 或 TypeScript来执行类型检查的工作。



##### 插件化

Babel构建在插件之上。使用现有的或自己编写的插件可以组成一个转换管道。通过使用或创建一个 [preset](https://www.babeljs.cn/docs/plugins#presets) 即可轻松使用一组插件。

利用 [astexplorer.net](https://astexplorer.net/#/KJ8AjD6maa) 可以立即创建一个插件，或者使用 [generator-babel-plugin](https://github.com/babel/generator-babel-plugin) 生成一个插件模板。

```js
// 一个插件就是一个函数
export default function({ types: t }) {
  return {
    visitor: {
      Identifier(path) {
        let name = path.node.name; // 反转字符串： JavaScript -> tpircSavaJ
        path.node.name = name
          .split("")
          .reverse()
          .join("");
      },
    },
  };
}
```

### 可调式

支持Source Map

### 符合规范

### 代码紧凑

