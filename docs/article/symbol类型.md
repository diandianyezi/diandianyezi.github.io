---
  title: Symbol类型
  date: 2022-11-12
  sidebar: heading
  breadcrumb: true
  lastUpdated: true
  contributors: true
  editLink: false
  category: Javascript
  tag:
    - 基础
---
## Symbol类型

根据规范，只有两种原始类型可以用作对象属性键：

- 字符串类型
- symbol类型

symbol能给我们带来什么呢？

### symbol

`symbol`值表示唯一的标识符。

可以使用`Symbol()`来创建这种类型的值：

```js
let id = Symbol();
```

创建时，我们可以给symbol一个描述，也称为symbol名，这在代码调试时非常有用：

```js
// id是描述为"id"的symbol
let id = Symbol("id");
```

symbol保证是唯一的，即使我们创建了许多具有相同描述的symbol，它们的值也是不同。描述只是一个标签，不影响任何东西。

```js
let id1 = Symbol('id');
let id2 = Symbol('id');
alert(id1 === id2); // false
```

在哪里可以使用呢？

> symbol不会被自动转换为字符串
>
> ```js
> let id = Symbol("id");
> alert(id); // 类型错误：无法将 symbol 值转换为字符串。
> ```
>
> 如果真的想显示一个symbol，我们需要在它上面调用`.toString()`，如下所示：
>
> ```js
> let id = Symbol("id");
> alert(id.toString()); // Symbol(id)，现在它有效了
> ```
>
> 或者获取symbol.description属性，只显示描述
>
> ```js
> let id = Symbol("id");
> alert(id.description); // id
> ```
>
> 

### “隐藏”属性

symbol允许我们创建对象的"隐藏"属性，代码的任何其他部分都不能以外访问或重写这些属性。

```js
let user = { // 属于另一个代码
  name: "John"
};

let id = Symbol("id");

user[id] = 1;

alert( user[id] ); // 我们可以使用 symbol 作为键来访问数据
```

### 对象字面量中的symbol

如果我们要在对象字面量{...}中使用symbol，则需要使用方括号把它括起来。

就像这样：

```js
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // 而不是 "id"：123
};
```

### [symbol 在 for…in 中会被跳过](https://zh.javascript.info/symbol#symbol-zai-forin-zhong-hui-bei-tiao-guo)

symbol属性不参与`for...in`循环。

例如：

```js
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age（没有 symbol）

// 使用 symbol 任务直接访问
alert( "Direct: " + user[id] );
```

`Object.keys(user)`也会忽略它们，这是一般“隐藏符号属性”原则的一部分。

相反，Object.assign会同时复制字符串和symbol属性

### 全局Symbol

要从注册表中读取（不存在则创建）symbol，请使用 `Symbol.for(key)`。

该调用会检查全局注册表，如果有一个描述为key的symbol，则返回该symbol，否则将创建一个新symbol，并通过给定的key将其存储在注册表的。

注册表内的 symbol 被称为 **全局 symbol**。如果我们想要一个应用程序范围内的 symbol，可以在代码中随处访问 —— 这就是它们的用途。

### symbol.keyFor

对于全局symbol，不仅有Symbol.for(key)按名字返回一个symbol，还有一个反向调用Symbol.keyFor(sym)，它的作用完全反过来：通过全局symbol返回一个名字。

`Symbol.keyFor` 内部使用全局 symbol 注册表来查找 symbol 的键。所以它不适用于非全局 symbol。如果 symbol 不是全局的，它将无法找到它并返回 `undefined`。

也就是说，任何 symbol 都具有 `description` 属性。