import{_ as e,W as t,X as p,Z as n,a1 as s,$ as c,a2 as o,C as l}from"./framework-609d4fec.js";const i={},u=n("h1",{id:"使用css自定义属性-变量",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用css自定义属性-变量","aria-hidden":"true"},"#"),s(" 使用CSS自定义属性（变量）")],-1),r={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",rel:"noopener noreferrer"},d=o(`<p>又被认为是<strong>级联变量</strong></p><p>定义如下：</p><ul><li>以 <code>--</code>开头，定义在一个元素作用域内，一般定义在 <code>:root</code> 这一伪类里，全局可用</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">element</span> <span class="token punctuation">{</span>
  <span class="token property">--main-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span> // 更加语义化，比black 更直观
<span class="token punctuation">}</span>

&lt;!-- 使用 --&gt;
<span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--main-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义属性的继承性" tabindex="-1"><a class="header-anchor" href="#自定义属性的继承性" aria-hidden="true">#</a> 自定义属性的继承性</h3><p>自定义属性会继承。</p><h3 id="自定义属性备用值" tabindex="-1"><a class="header-anchor" href="#自定义属性备用值" aria-hidden="true">#</a> 自定义属性备用值</h3><p>用 <code>var</code>函数 可以定义多个备用值</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.two</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--my-var<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* Red if --my-var is not defined */</span>
<span class="token punctuation">}</span>

<span class="token selector">.three</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--my-var<span class="token punctuation">,</span> <span class="token function">var</span><span class="token punctuation">(</span>--my-background<span class="token punctuation">,</span> pink<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* pink if --my-var and --my-background are not defined */</span>
<span class="token punctuation">}</span>

<span class="token selector">.three</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--my-var<span class="token punctuation">,</span> --my-background<span class="token punctuation">,</span> pink<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* Invalid: &quot;--my-background, pink&quot; */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有效性和值" tabindex="-1"><a class="header-anchor" href="#有效性和值" aria-hidden="true">#</a> 有效性和值</h3><p>传统css概念里，有效性和属性是绑定的。但是对于自定义属性来说。当自定义属性被解析时，浏览器不知道它们什么时候会被使用，所以必须认为是有效的。</p><p>但是，即便是有效的，当通过 <code>var</code>调用时，可能在特定的上下文环境不会奏效。</p><p><code>计算时有效性</code></p><h3 id="无效变量会导致什么" tabindex="-1"><a class="header-anchor" href="#无效变量会导致什么" aria-hidden="true">#</a> 无效变量会导致什么</h3><p>自定义属性无效时，浏览器会执行如下两个步骤：</p><ol><li>检查属性 color 是否为继承属性。是，但是 <code>&lt;p&gt;</code> 没有任何父元素定义了 color 属性。转到下一步。</li><li>将该值设置为它的<strong>默认初始值</strong>，比如 black。</li></ol><blockquote><p>当CSS属性-值中存在语法错误，该行会被忽略。然而如果自定义属性的值无效，并不会被忽略，会导致该值被覆盖为默认值。</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span> <span class="token property">--text-color</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">p</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">p</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--text-color<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

// p元素会显示为默认颜色 比如black
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript中的值" tabindex="-1"><a class="header-anchor" href="#javascript中的值" aria-hidden="true">#</a> JavaScript中的值</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>element<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">&#39;--my-var&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">getComputedStyle</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">&#39;--my-var&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 修改一个Dom节点上的CSS变量</span>
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setPropterty</span><span class="token punctuation">(</span><span class="token string">&#39;--my-var&#39;</span><span class="token punctuation">,</span> jsVar<span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function k(v,m){const a=l("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",r,[s("MDN-CSS自定义变量"),c(a)])]),d])}const h=e(i,[["render",k],["__file","2022-07-20-CSS自定义变量.html.vue"]]);export{h as default};
