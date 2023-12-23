import{_ as p,W as o,X as c,Z as s,a1 as n,$ as e,a2 as t,C as i}from"./framework-609d4fec.js";const l={},u=s("h3",{id:"样式规则",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#样式规则","aria-hidden":"true"},"#"),n(" 样式规则")],-1),r=s("h4",{id:"插值-interpolation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#插值-interpolation","aria-hidden":"true"},"#"),n(" 插值 Interpolation")],-1),d={href:"https://sass-lang.com/documentation/interpolation",target:"_blank",rel:"noopener noreferrer"},v=t(`<p><code>#{varName}</code></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">prefix</span><span class="token punctuation">(</span><span class="token variable">$property</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token variable">$prefixes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$prefix</span> in <span class="token variable">$prefixes</span> </span><span class="token punctuation">{</span>
    <span class="token property">-<span class="token variable">#{$prefix}</span>-<span class="token variable">#{$property}</span></span><span class="token punctuation">:</span> <span class="token variable">$value</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property"><span class="token variable">#{$property}</span></span><span class="token punctuation">:</span> <span class="token variable">$value</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.gray </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">prefix</span><span class="token punctuation">(</span>filter<span class="token punctuation">,</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>50%<span class="token punctuation">)</span><span class="token punctuation">,</span> moz webkit<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),k=s("code",null,"&",-1),m={href:"https://sass-lang.com/documentation/at-rules/at-root",target:"_blank",rel:"noopener noreferrer"},b=s("code",null,"@at-root",-1),h={href:"https://sass-lang.com/documentation/modules/selector",target:"_blank",rel:"noopener noreferrer"},g={href:"https://sass-lang.com/documentation/style-rules/parent-selector",target:"_blank",rel:"noopener noreferrer"},y=t(`<h4 id="嵌套" tabindex="-1"><a class="header-anchor" href="#嵌套" aria-hidden="true">#</a> 嵌套</h4><p>css规则可以嵌套外，属性也可以嵌套。</p><p>嵌套属性的规则是这样的：把属性名从中划线-的地方断开，在根属性后边添加一个冒号:，紧跟一个<code>{ }</code>块，把子属性部分写在这个<code>{ }</code>块中。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.enlarge </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token selector">transition: </span><span class="token punctuation">{</span>
    <span class="token property">property</span><span class="token punctuation">:</span> font-size<span class="token punctuation">;</span>
    <span class="token property">duration</span><span class="token punctuation">:</span> 4s<span class="token punctuation">;</span>
    <span class="token property">delay</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// css规则嵌套</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 36px<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 属性也可嵌套</span>
<span class="token selector">.info-page </span><span class="token punctuation">{</span>
  <span class="token selector">margin: auto </span><span class="token punctuation">{</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.info-page</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>The deeper you nest, the more bandwidth it takes to serve your CSS and the more work it takes the browser to render it. Keep those selectors shallow!</p></blockquote><h3 id="parent-selector" tabindex="-1"><a class="header-anchor" href="#parent-selector" aria-hidden="true">#</a> Parent-Selector</h3><p>父类选择器标识符 <code>$</code>;</p><p>用处: 设置父类的一些伪类属性、可以在父类元素之前添加选择器。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.alert </span><span class="token punctuation">{</span>
  <span class="token comment">// The parent selector can be used to add pseudo-classes to the outer</span>
  <span class="token comment">// selector.</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// It can also be used to style the outer selector in a certain context, such</span>
  <span class="token comment">// as a body set to use a right-to-left language.</span>
  <span class="token selector">[dir=rtl] <span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// You can even use it as an argument to pseudo-class selectors.</span>
  <span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>&amp;<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0.8<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.alert:hover</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">[dir=rtl] .alert</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">:not(.alert)</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.8<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="添加后缀" tabindex="-1"><a class="header-anchor" href="#添加后缀" aria-hidden="true">#</a> 添加后缀</h4><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.accordion </span><span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 4rem auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Raleway&quot;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f4f4f4<span class="token punctuation">;</span>

  <span class="token selector"><span class="token parent important">&amp;</span>__copy </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 1rem 1.5rem 2rem 1.5rem<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> gray<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.6<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>

    <span class="token selector"><span class="token parent important">&amp;</span>--open </span><span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sassscript" tabindex="-1"><a class="header-anchor" href="#sassscript" aria-hidden="true">#</a> SassScript</h4><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.main aside:hover,
.sidebar p </span><span class="token punctuation">{</span>
  <span class="token property">parent-selector</span><span class="token punctuation">:</span> &amp;<span class="token punctuation">;</span>
  <span class="token comment">// =&gt; ((unquote(&quot;.main&quot;) unquote(&quot;aside:hover&quot;)),</span>
  <span class="token comment">//     (unquote(&quot;.sidebar&quot;) unquote(&quot;p&quot;)))</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.main aside:hover,
.sidebar p</span> <span class="token punctuation">{</span>
  <span class="token property">parent-selector</span><span class="token punctuation">:</span> .main <span class="token property">aside</span><span class="token punctuation">:</span>hover<span class="token punctuation">,</span> .sidebar p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="高级嵌套" tabindex="-1"><a class="header-anchor" href="#高级嵌套" aria-hidden="true">#</a> 高级嵌套</h4>`,17),f={href:"https://sass-lang.com/documentation/style-rules/parent-selector",target:"_blank",rel:"noopener noreferrer"},x=t(`<div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:selector&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">@mixin</span> <span class="token function">unify-parent</span><span class="token punctuation">(</span><span class="token variable">$child</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@at-root</span> #<span class="token punctuation">{</span>selector.<span class="token function">unify</span><span class="token punctuation">(</span>&amp;<span class="token punctuation">,</span> <span class="token variable">$child</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">@content</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.wrapper .field </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">unify-parent</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">@include</span> <span class="token function">unify-parent</span><span class="token punctuation">(</span><span class="token string">&quot;select&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrapper input.field</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>

<span class="token selector">.wrapper select.field</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="placeholder-selector" tabindex="-1"><a class="header-anchor" href="#placeholder-selector" aria-hidden="true">#</a> Placeholder Selector</h3><p>占位符选择器，不会输出到css中</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector"><span class="token placeholder">%toolbelt</span> </span><span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 1px <span class="token function">rgba</span><span class="token punctuation">(</span>#000<span class="token punctuation">,</span> .12<span class="token punctuation">)</span> solid<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 16px 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>

  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span> <span class="token property">border</span><span class="token punctuation">:</span> 2px <span class="token function">rgba</span><span class="token punctuation">(</span>#000<span class="token punctuation">,</span> .5<span class="token punctuation">)</span> solid<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.action-buttons </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> <span class="token placeholder selector">%toolbelt</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #4285f4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.reset-buttons </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> <span class="token placeholder selector">%toolbelt</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #cddc39<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.action-buttons, .reset-buttons</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.12<span class="token punctuation">)</span> solid<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 16px 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.action-buttons:hover, .reset-buttons:hover</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span> solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.action-buttons</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #4285f4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.reset-buttons</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #cddc39<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function _(w,q){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,r,s("p",null,[n("A property’s name can include "),s("a",d,[n("interpolation"),e(a)]),n(", which makes it possible to dynamically generate properties as needed. You can even interpolate the entire property name!")]),v,s("p",null,[n("You can combine interpolation with the parent selector "),k,n(", the "),s("a",m,[b,n(" rule"),e(a)]),n(", and "),s("a",h,[n("selector functions"),e(a)]),n(" to wield some serious power when dynamically generating selectors. For more information, see the "),s("a",g,[n("parent selector documentation"),e(a)]),n(".")]),y,s("p",null,[n("See the "),s("a",f,[n("parent selector documentation"),e(a)]),n(" for more details.")]),x])}const S=p(l,[["render",_],["__file","第1125期-Scss样式规则 (copy).html.vue"]]);export{S as default};
