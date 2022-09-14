---
  title: 跨窗口通信
  date: 2022-09-01
  sidebar: heading
  breadcrumb: true
  lastUpdated: true
  contributors: true
  editLink: false
  category: JavaScript
  tag:
    -iframe

---


# 

# 跨窗口通信

## 同源

> 同源策略会限制窗口和frame之间的通信。
>
> 同源策略目的是保护用户信息免遭信息盗窃。

同源指的是 两个url具有相同的协议、域和端口。

同源策略规定：

- 如果我们有对另一个窗口的引用(window.open || iframe)，并且该窗口是同源的，那么我们就具有对该窗口的全部访问权限；
- 如果不是同源的，我们就不能访问窗口中的内容：变量、文档等任何东西。唯一例外的是location：我们可以修改它，使用它进行重定向。但是无法读取location。

## iframe

允许将其他Web文档嵌入到当前文档中。很适合将第三方内容嵌入到你的网站。

```html
<iframe src="https://developer.mozilla.org/zh-CN/docs/Glossary"
        width="100%" height="500" frameborder="0"
        allowfullscreen sandbox>
  <p> <a href="https://developer.mozilla.org/zh-CN/docs/Glossary">
    Fallback link for browsers that don't support iframes
  </a> </p>
</iframe>

```

基本要素：

- `allowfullscreen` :如果设置，iframe则可以通过全屏Api设置(iframe的requestFullscreen())为全屏模式；

    > **备注：** 这是一个遗留属性，已经被重新定义为 `allow="fullscreen"`

- [**`allowpaymentrequest`**](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe#attr-allowpaymentrequest)

    设置为`true`时，跨域的 `<iframe>` 就可以调用 [Payment Request API](https://developer.mozilla.org/zh-CN/docs/Web/API/Payment_Request_API)。

    > **备注：** 这是一个历史遗留属性，已经被重新定义为 `allow="payment"`.

- `border:none`:  不展示边框；

- `src`：嵌入文档的URL路径；

- `width` 和 `height`：iframe的宽度和高度；

备选字段：

- `sandbox`：需要在已经支持其他iframe功能但稍微更现代的浏览器上才能工作，该属性可以提高安全性设置。

> 为了提高速度，在主内容完成加载后，使用js设置src属性。使主页面更快可用并且降低加载时间，更利于SEO

每个嵌入的浏览器上下文都有自己的 会话历史和文档，嵌入其他页面的浏览器上下文被称为 父级浏览器上下文，顶级的浏览器上下文-没有父级浏览器上下文，通常是浏览器窗口，表示为Window对象。

### 安全隐患

> 单击劫持：是一种常见的iframe攻击，将隐藏的iframe嵌入到你的文档中（或将你的文档嵌入到他们自己的恶意网站），并使用它来捕获用户的交互。这是误导用户或窃取敏感数据的常见方式。

`X-Frame-Options`：HTTP响应头 是否允许浏览器在iframe frame embed 或 object里渲染页面。网站用此方法可以防止 单击劫持 攻击。



#### 只在必要时嵌入

#### 使用HTTPS

#### 始终使用sandbox属性

#### 配置 CSP指令

