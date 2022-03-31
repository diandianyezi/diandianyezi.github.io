#### JavaScript问题

##### 请解释时间委托（event delegation）？

事件委托是将事件监听添加到父元素，而不是每个子元素单独设置事件监听器。当触发子元素时，事件会冒泡到父元素，监听器就会触发。

好处：

* 内存占用少，因为只需要给一个父元素添加时间处理程序，而不是为每个后代元素都添加事件处理元素；
* 无需从已删除的元素中解绑处理程序，也无需将处理程序绑定到新元素。

##### 请简述一下JavaScript中的this？

Js中的`this`只是一个相对复杂的概念，粗略地讲，函数的调用方式决定了`this`的值。`this`的取值符合以下规则：

* 在调用函数时使用`new`关键字，函数内的`this`是一个全新的对象。

    ```javascript
    function ConstructorExample() {
      console.info(this);
      this.value = 10;
      console.info(this);
    }
    
    new ConstructorExample();
    
    // {}
    // { value: 10}
    ```

    `new`关键字学习，可参考[js new](https://codeburst.io/javascripts-new-keyword-explained-as-simply-as-possible-fec0d87b2741)

    

* 如果`apply`、`call`或`bind`方法用于调用、创建一个函数，函数内的`this`就是作为参数传入这些方法的对象。

    ```javascript
    function fn() {
      console.log(this);
    }
    
    var obj = {
      value: 5
    }
    
    var boundFn = fn.bind(obj)
    boundFn(); // {value: 5}
    fn.call(obj) // {value: 5}
    fn.apply(obj) // { value: 5}
    ```

    

* 当函数作为对象里的方法被调用时，函数内的this是调用该函数的对象。

    ```javascript
    var obj = {
      value: 5,
      printThis: function () {
        console.log(this);
      }
    }
    
    obj.printThis(); // { value: 5, printThis: f }
    ```

    

* 如果调用函数不符合上述规则，那么`this`的值指向全局对象，浏览器环境下`this`的值指向`window`对象，但是在严格模式下(`'use strict'`)，`this`的值为`undefined`。

* 如果符合上述多个规则，则较高的规则将决定`this`的值；

* 如果该函数是ES2015中的箭头函数，将忽略上面的所有规则，`this`被设置为它被创建时的上下文。

##### 参考：

- https://codeburst.io/the-simple-rules-to-this-in-javascript-35d97f31bde3
- https://stackoverflow.com/a/3127440/1751946

