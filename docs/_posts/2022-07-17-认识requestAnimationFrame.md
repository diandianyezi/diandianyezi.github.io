## 认识requestAnimationFrame

告诉浏览器-你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下次重绘之前执行。

浏览器的重绘频率是每秒60次，约16ms重绘一次

可以简单的将`requestAnimationFrame`函数视为延迟为16ms的`setTimeout`函数。



### 参数

`callback`

下次重绘之前更新画帧所调用的函数（即上面所说的回调函数）。该回调函数会被传图`DOMHighResTimeStamp`参数，该参数与 `performance.now`的返回值相同，表示`requestAnimationFrame（）`开始执行回调函数的时刻。

### 返回值

一个 `long`整数，请求ID，是回调列表中唯一的标识，是个非零值，没别的意义。可以传这个值给 `window.cancelAnimationFrame()`以取消回调函数。



### 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .animation {
            height: 200px;
            width: 200px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div id="animation">
        jjj
    </div>
    <script>
        const element = document.getElementById('animation');
        let start;
    
        function step(timestamp) {
            if (start === undefined)
                start = timestamp;
            
            const elapsed = timestamp - start;
    
            //这里使用`Math.min()`确保元素刚好停在 200px 的位置。
            element.style.transform = 'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';
    
            if (elapsed < 2000) { // 在两秒后停止动画
                window.requestAnimationFrame(step);
            }
        }
    
        window.requestAnimationFrame(step);
    </script>
</body>
</html>
```



### 





