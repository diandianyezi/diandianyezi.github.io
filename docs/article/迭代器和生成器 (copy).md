# 迭代器与生成器

迭代的英文“iteration”源自拉丁文itero，意思是“重复”或“再来”。软件开发领域中的“迭代”，指的是按照顺序反复多次执行一段程序，通常会有明确的终止条件。ES6新增了两个高级特性：迭代器和生成器。



## 理解迭代

循环是迭代机制的基础。

但是通过循环来执行例程并不理想：

- **迭代之前需要实现知道如何使用数据结构；**
- **遍历顺序并不是数据结构固有的**。

**虽然ES5新增了Array.prototype.forEach()方法，想通用迭代需求迈进了一步（但仍不理想），这个方法解决了单独记录索引和通过数组对象取得值的问题。不过，没有办法标识迭代何时终止。因此这个方法只适用于数组，而且回调结构也比较笨拙。**

### 迭代器模式

无需知道如何迭代就能实现迭代操作。

迭代器描述了一个方案，即 **可以把有些结构称为“可迭代对象”(`iterable`)，因为它们实现了正式的`Iterable`接口，而且可以通过迭代器`Iterator`消费。**



可迭代对象：基本上可以理解成数组或集合这样的集合类型的对象。它们包含的元素都是有限的，而且都具有无歧义的遍历顺序，但是可迭代对象不一定是集合，也可以是仅仅具有类似数组行为的其他数据结构。



**任何实现Iterable接口的数据结构都可以被实现Iterator接口的结构 消费consume**。迭代器Iterator是按需创建的一次性对象。每个迭代器都会关联一个可迭代对象，而迭代器会暴露迭代其关联可迭代对象的API。迭代器无须了解其关联的可迭代对象的结构，

**实现Iterator接口要求同事具备两种能力：支持迭代的自我识别能力和创建实现Iterator接口的对象的能力。在ECMASript中，意味着必须暴露一个属性作为 默认迭代器，而且这个属性必须使用特殊的 Symbol.iterator作为键**。这个默认迭代器属性必须引用一个迭代器工厂函数，调用这个工厂函数必须返回一个新迭代器。

内置类型实现了Iterator接口：

- 数组
- 映射
- 集合
- 字符串
- arguments对象
- NodeList等集合类型

检查是否存在默认迭代器属性可以暴露这个工厂函数

### 可迭代协议

### 迭代器协议

### 提前终止迭代器

指定在迭代器提前关闭时会执行return方法，return方法是可选的， 必须返回一个IteratorResult对象，

如果迭代器没有关闭，则还可以继续从上次离开的地方继续迭代。比如数组的迭代器就是不能关闭的。

因为return方法可选，所以并不是所有迭代器都可关闭。

有return方法也不代表可以关闭迭代器，



## 生成器

es6新增的极为灵活的结构，**拥有在一个函数块内暂停和恢复代码执行的能力**。这种新能力具有深远的影响。

比如，使用生成器可以自定义迭代器和实现协程。

### 生成器基础

形式：在函数名钱加一个星号 *

只要是可以定义函数的地方，就可以定义生成器。

```js
function* generatorFn() {}
let generatorFn = function* () {}

let foo = {
  * generatorFn() {}
}

class Foo {
  * generatorFn() {}
}

class Bar {
  static * generatorFn() {}
}
```

> 箭头函数不能用来定义生成器函数

标识生成器函数的星号不受两侧空格的影响：

```js
// 等价的生成器函数
function* generatorFnA() {}
function *generatorFnA() {}
function * generatorFnC() {}

```



调用生成器函数会产生一个生成器对象。生成器对象一开始处于暂停执行的状态。与迭代器相似，生成器对象也实现了Iterator接口，也具有next方法。调用next方法会让生成器开始或恢复执行。

next方法返回值类似于迭代器，具有done和value

value属性是生成器函数的返回值，默认值为undefined，可以通过生成器函数的返回值指定。

生成器函数只会在初次调用next()方法后开始执行。

生成器对象实现了Iterable接口，它们默认的迭代器是自引用的：

### 通过yield中断执行

yield关键字可以让生成器停止和开始执行，也是生成器最有用的地方。yield关键字只能在生成器函数内部使用，必须直接在生成器函数定义中

使用next方法会继续执行

### 生成器对象作为可迭代对象

```js
function* nTimes(n) {
  while(n--) {
    yield;
  }
}

for(let _ of nTimes(3)) {
  console.log('foo');
}

// foo
// foo
// foo
```

### 使用yield实现输入和输出

除了可以作为函数的中间返回语句使用，`yield`关键字还可以作为函数的中间参数使用。上一次让生成器函数暂停的`yield`关键字会接收到传给`next()`方法的第一个值。

yield关键字可以同时用于输入和输出。

```js
function * generatorFn() {
  return yield 'foo';
}

let generatorObj = generatorFn();
console.log(generatorObj.next()) // { done: false, value: 'foo' }
console.log(generatorObj.next('bar')) // { done: true, value: 'bar' }

```

### 产生可迭代对象

可以使用型号增强yield的行为，让它能够迭代一个可迭代对象，从而产出一个值：

yield＊的值是关联迭代器返回done: true时的value属性。对于普通迭代器来说，这个值是undefined：

```js
function* generatorFn() {
  console.log('iter value', yield* [1,2,3]);
}

for(const x of generatorFn()) {
  console.log('value:', x);
}

// value:1
// value:2
// value:3
// itervalue: undefined
```

### 使用yield* 实现递归算法

yield＊最有用的地方是实现递归操作，此时生成器可以产生自身。

```js
function* nTimes(n) {
  if(n > 0) {
    yield * nTimes(n-1);
    yield n-1;
  }
}

for(const x of nTimes(3)) {
  console.log(x);
}

// 0
// 1
// 2
```

在上述例子中，每个生成器首先都会从新创建的生成器对象产出每个值，然后再产出一个证书。结果就是生成器函数会递归地减少计数器值，并实例化另一个生成器对象。



### 生成器作为默认迭代器

```js
class Foo {
  constructor() {
    this.values = [1,2,3];
  }
  *[System.iterator]() {
    yield* this.values;
  }
}

const f = new Foo()
for(const x of f) {
  console.log(x);
}
```

### 提前终止生成器

生成器对象除了有next return这两个方法，还有第三个方法：throw()。

return和throw方法都可以用于强制生成器进入关闭状态。

1. `return`

   提供给return()方法的值，就是终止迭代器对象的值。

   与迭代器不同，所有生成器对象都有return方法，只要通过它进入关闭状态，就无法恢复了。

   for-of循环等内置语言结构会忽略状态为done: true的IteratorObject内部返回的值。

   ```js
   function* generatorFn() {
     for(const x of [1,2,3]) {
       yield x
     }
   }
   
   const g = generatorFn();
   for(const x of g) {
     if(x > 1) {
       console.info('hh')
       g.return(4);
     }
     const.log(x);
   }
   
   // 1
   // 2
   ```

2. `throw()`

   throw()方法会在暂停的时候将一个提供的错误注入到生成器对象中。如果错误未被处理，生成器就会关闭：

   ```js
   function* generatorFn() {
     for(const x of [1,2,3]) {
       yield x;
     }
   }
   
   const g = generatorFn();
   console.log(g); // generatorFn {<suspended>}
   
   try{
     g.throw('foo');
   } catch(e) {
     console.log(e); // foo
   }
   
   console.log(g) // generatorFn{<closed>}
   ```

   假如生成器函数内部处理了这个错误，那么生成器就不会关闭，而且还可以恢复执行。错误处理会跳过对应的yield，因此在这个例子中会跳过一个值.

   > 注意: 如果生成器对象还没有开始执行，那么调用throw()抛出的错误不会在函数内部被捕获，因为这相当于在函数块外部抛出了错误。



## 小结

迭代器：一个可以由任意对象实现的接口，支持持续获取对象产出的每一个值。任何实现Iterable接口的对象都有一个Symbol.iterator属性。这个属性引用默认迭代器。默认迭代器就像一个迭代器工厂，也就是一个函数，调用之后会产生一个实现Iterator接口的对象。

可以通过反复调用next方法，也可以通过原生消费者：for-of循环来自动消费。

生成器：特殊函数，调用后会返回一个生成器对象。生成器对象实现了Iterable接口，因此可用在任何消费可迭代对象的地方。生成器的独特之处在于支持yield关键字，能够暂停执行生成器函数。使用yield关键字还可以通过next方法接收输入和产生输出。在加上星号之后，yield关键字可以将跟在它后面的可迭代对象序列化为一连串值。





