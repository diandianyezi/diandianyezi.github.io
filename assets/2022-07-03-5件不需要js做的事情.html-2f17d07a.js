import{_ as e,W as o,X as c,Z as s,a1 as n,$ as t,a2 as p,C as l}from"./framework-609d4fec.js";const i={},u={href:"https://lexoral.com/blog/you-dont-need-js/",target:"_blank",rel:"noopener noreferrer"},r=p(`<p>不一定非要用js，用html 或者css也可实现的功能</p><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><h3 id="使用css控制svg动画" tabindex="-1"><a class="header-anchor" href="#使用css控制svg动画" aria-hidden="true">#</a> 使用css控制svg动画</h3><p>放烟花的例子，核心代码如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0 0 100 100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flight<span class="token punctuation">&quot;</span></span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>M 0 100 C 35 92 49 76 50 50<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>trail<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>M 50 50 C 41 23 26 23 1 41<span class="token punctuation">&quot;</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">stroke</span><span class="token punctuation">:</span> yellowgreen</span><span class="token punctuation">&quot;</span></span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>trail<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>M 50 50 C 30 43 14 51 0 100<span class="token punctuation">&quot;</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">stroke</span><span class="token punctuation">:</span> turquoise</span><span class="token punctuation">&quot;</span></span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>trail<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>M 50 50 C 84 46 96 63 100 85<span class="token punctuation">&quot;</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">stroke</span><span class="token punctuation">:</span> goldenrod</span><span class="token punctuation">&quot;</span></span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>trail<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>M 50 50 C 71 31 95 43 100 63<span class="token punctuation">&quot;</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">stroke</span><span class="token punctuation">:</span> mediumorchid</span><span class="token punctuation">&quot;</span></span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>trail<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>M 50 50 C 61 -6 76 3 73 100<span class="token punctuation">&quot;</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">stroke</span><span class="token punctuation">:</span> firebrick</span><span class="token punctuation">&quot;</span></span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>explosion<span class="token punctuation">&quot;</span></span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">svg</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 20em<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> darkslategrey<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 
  <span class="token selector">svg :global(*)</span> <span class="token punctuation">{</span>
    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 10s<span class="token punctuation">;</span>
    <span class="token property">fill</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
    <span class="token property">stroke-linecap</span><span class="token punctuation">:</span> round<span class="token punctuation">;</span>
    <span class="token property">stroke-linejoin</span><span class="token punctuation">:</span> round<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 
  <span class="token selector">.flight</span> <span class="token punctuation">{</span>
    <span class="token property">stroke</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
    <span class="token property">stroke-width</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token property">stroke-dasharray</span><span class="token punctuation">:</span> 10 100<span class="token punctuation">;</span>
    <span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> flight<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 
  <span class="token atrule"><span class="token rule">@keyframes</span> flight</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span>
      <span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">21%,
    to</span> <span class="token punctuation">{</span>
      <span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> -80<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 
  <span class="token selector">.explosion</span> <span class="token punctuation">{</span>
    <span class="token property">fill</span><span class="token punctuation">:</span> orangered<span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0.8<span class="token punctuation">;</span>
    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> explosion<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 
  <span class="token atrule"><span class="token rule">@keyframes</span> explosion</span> <span class="token punctuation">{</span>
    <span class="token selector">from,
    19%</span> <span class="token punctuation">{</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">20%</span> <span class="token punctuation">{</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">22%</span> <span class="token punctuation">{</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">23%</span> <span class="token punctuation">{</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">25%</span> <span class="token punctuation">{</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">26%</span> <span class="token punctuation">{</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">35%,
    to</span> <span class="token punctuation">{</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 
  <span class="token selector">.trail</span> <span class="token punctuation">{</span>
    <span class="token property">stroke-width</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token property">stroke-dasharray</span><span class="token punctuation">:</span> 1 10 5 10 10 5 30 150<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> trail<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 
  <span class="token atrule"><span class="token rule">@keyframes</span> trail</span> <span class="token punctuation">{</span>
    <span class="token selector">from,
    20%</span> <span class="token punctuation">{</span>
      <span class="token property">stroke-width</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
      <span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> 80<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%,
    to</span> <span class="token punctuation">{</span>
      <span class="token property">stroke-width</span><span class="token punctuation">:</span> 0.5<span class="token punctuation">;</span>
      <span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> -150<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，主要使用 <code>stroke-dasharray</code> 控制线条实虚线的样式，再利用动画效果对 <code>stroke-dashoffset</code> 产生变化，从而实现对线条起始点进行位移，实现线条 “绘图” 的效果，且该 css 样式对 svg 绘制的路径是生效的。</p><h3 id="siderbar" tabindex="-1"><a class="header-anchor" href="#siderbar" aria-hidden="true">#</a> siderbar</h3><p>可以使用 伪类 <code>:hover</code> 实现<code>hover</code>时才出现的侧边栏</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">nav</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> <span class="token string">&#39;absolute&#39;</span><span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> 0.2s transform<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">nav:hover,
nav:focus-within</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>核心在于 <code>hover</code> 时设置 <code>transform</code> 属性可以让元素偏移，且 <code>translateX(100%)</code> 可以位移当前元素宽度的身位。</p><p>另一个有意思的是，如果使用 TABS 按键聚焦到 sidebar 内元素也要让 sidebar 出来，可以直接用 <code>:focus-within</code> 实现。如果需要 hover 后延迟展示可以使用 <code>transition-delay</code> 属性。</p><p>还有其他使用方式:</p><ul><li>Dropdown menus</li><li>Tooltips</li><li>Showing Video Thumbnails 视频缩略图</li><li>Scaling up an image preview 缩放</li><li>Showing a preview of the link destination like on Wikipedia</li><li>Highlighting the important parts of a complex interface</li><li>Styling the hovered row in a table</li><li>Previewing what will happen if you click a button</li></ul><h3 id="sticky-positioning" tabindex="-1"><a class="header-anchor" href="#sticky-positioning" aria-hidden="true">#</a> Sticky Positioning</h3><p>https://developer.mozilla.org/zh-CN/docs/Web/CSS/position</p><p>根据正常文档流定位，然后相对它的最近滚动祖先和最近块级祖先，包括 tabel-related 元素，基于top left 等的值进行偏移，偏移值不会影响任何其他元素的位置。</p>`,16),k={href:"https://developer.mozilla.org/en/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context",target:"_blank",rel:"noopener noreferrer"},d=s("code",null,"overflow",-1),v=s("code",null,"hidden",-1),m=s("code",null,"scroll",-1),b=s("code",null,"auto",-1),g=s("code",null,"overlay",-1),h={href:"https://github.com/w3c/csswg-drafts/issues/865",target:"_blank",rel:"noopener noreferrer"},f=p(`<h3 id="手风琴菜单" tabindex="-1"><a class="header-anchor" href="#手风琴菜单" aria-hidden="true">#</a> 手风琴菜单</h3><p>使用 <code>&lt;details&gt;</code> 标签可以实现类似一个简易的折叠手风琴效果：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span>title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺点：做不了动画</p><h3 id="暗色主体" tabindex="-1"><a class="header-anchor" href="#暗色主体" aria-hidden="true">#</a> 暗色主体</h3><p>css 实现了对应的方法判断当前系统的主题是亮色还是暗色。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-color-schema</span><span class="token punctuation">:</span> light<span class="token punctuation">)</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-color-schema</span><span class="token punctuation">:</span> dark<span class="token punctuation">)</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span><span class="token punctuation">(</span><span class="token property">prefers-color-schema</span><span class="token punctuation">:</span> no-preference<span class="token punctuation">)</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function y(q,_){const a=l("ExternalLinkIcon");return o(),c("div",null,[s("p",null,[s("a",u,[n("参考you-dont-need-js"),t(a)])]),r,s("p",null,[n("该值总是创建一个新的"),s("a",k,[n("层叠上下文（stacking context"),t(a)]),n("）。注意，一个 sticky 元素会“固定”在离它最近的一个拥有“滚动机制”的祖先上（当该祖先的"),d,n(" 是 "),v,n(", "),m,n(", "),b,n(", 或 "),g,n("时），即便这个祖先不是最近的真实可滚动祖先。这有效地抑制了任何“sticky”行为（详情见"),s("a",h,[n("Github issue on W3C CSSWG"),t(a)]),n("）。")]),f])}const w=e(i,[["render",y],["__file","2022-07-03-5件不需要js做的事情.html.vue"]]);export{w as default};
