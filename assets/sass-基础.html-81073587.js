import{_ as p,W as c,X as i,Z as n,a1 as s,$ as e,a2 as t,C as l}from"./framework-609d4fec.js";const o={},r=n("h1",{id:"sass",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sass","aria-hidden":"true"},"#"),s(" Sass")],-1),u={href:"https://sass-lang.com/documentation/variables",target:"_blank",rel:"noopener noreferrer"},d={href:"https://sass-lang.com/documentation/style-rules#nesting",target:"_blank",rel:"noopener noreferrer"},v={href:"https://sass-lang.com/documentation/at-rules/mixin",target:"_blank",rel:"noopener noreferrer"},k={href:"https://sass-lang.com/documentation/modules",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="特色功能" tabindex="-1"><a class="header-anchor" href="#特色功能" aria-hidden="true">#</a> 特色功能</h2><ul><li>完全兼容CSS3；</li><li>在CSS基础上增加变量、嵌套、混入等功能；</li><li>通过函数进行颜色值与属性值的运算</li><li>提供控制指令等高级功能</li><li>自定义输出格式</li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> sass

sass <span class="token parameter variable">--version</span>
<span class="token comment"># 1.53.0 compiled with dart2js 2.17.3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><h3 id="预处理-preprocessing" tabindex="-1"><a class="header-anchor" href="#预处理-preprocessing" aria-hidden="true">#</a> 预处理[Preprocessing]</h3><p>随着css样式表越来越大，越来越复杂，很难维护，预处理的出现更好地解决了这些问题，主要有以下特性：</p><ul><li>嵌套 nesting</li><li>mixins</li><li>继承</li></ul><p>使得css更健壮，可维护</p><p>Sass 可以将.scss 文件 处理为.css 文件，应用在你的网站</p><p>可以使用命令行，处理.scss 文件，也可以加<code>--watch</code>参数，监听输入文件的改动，更新输出的css文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sass <span class="token parameter variable">--watch</span> input.scss output.css
<span class="token comment"># 将input.scss 处理为output.css 文件</span>

<span class="token comment"># 可以监听文件夹，并输出css文件到文件夹，两个路径需要用分号分开</span>
sass <span class="token parameter variable">--watch</span> app/sass:public/stylesheets
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="sass有两种语法格式-scss-和-sass" tabindex="-1"><a class="header-anchor" href="#sass有两种语法格式-scss-和-sass" aria-hidden="true">#</a> Sass有两种语法格式：<code>.scss</code> 和 <code>.sass</code></h6><ul><li><code>.scss</code> 更常用，是css的超集，有效的css 也是有效的scss语法，用花括号进行嵌套，用分号进行分隔。</li><li><code>.sass</code> 比较不常见，用缩进来嵌套，用换行而不是用分号来进行分隔。</li></ul>`,14),b={href:"https://www.sass.hk/docs/#t7-1",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"sass-convert",-1),g=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>sass-convert a.scss a.sass

sass-convert b.sass b.scss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><p>以<code>$</code>开头的标识符</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font-stack</span></span><span class="token punctuation">:</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$primary-color</span></span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>

<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$primary-color</span><span class="token punctuation">;</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 100% <span class="token variable">$font-stack</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 100% Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套" tabindex="-1"><a class="header-anchor" href="#嵌套" aria-hidden="true">#</a> 嵌套</h3><p>可读性更好</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code>
<span class="token selector">nav </span><span class="token punctuation">{</span>
  <span class="token selector">ul </span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">li </span><span class="token punctuation">{</span> <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span> <span class="token punctuation">}</span>

  <span class="token selector">a </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="partials" tabindex="-1"><a class="header-anchor" href="#partials" aria-hidden="true">#</a> Partials</h3><p>可以新建一个有scss代码片段的文件，在别的scss文件引入。模块化css，更容易维护。以下划线开头的标识符 <code>_partial.scss</code>，下划线是为了告诉Sass，这是一个分片文件，不应该生成为css文件，用<code>@use</code>（Dart Sass 用<code>@use</code>，其他用<code>@import</code>）使用</p><h3 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h3><p>模块化</p><p><code>@import</code>引用scss文件</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// styles.scss</span>
<span class="token keyword">@use</span> <span class="token string">&#39;base&#39;</span><span class="token punctuation">;</span>

<span class="token selector">.inverse </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> base.<span class="token variable">$primary-color</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mixins" tabindex="-1"><a class="header-anchor" href="#mixins" aria-hidden="true">#</a> Mixins</h3><p><code>@mixin</code>创建一个方法，用 <code>@include</code>使用，可以传参数值</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$theme</span></span><span class="token punctuation">:</span> DarkGray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$theme</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token variable">$theme</span><span class="token punctuation">,</span> .25<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.info </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> theme<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.alert </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$theme</span></span><span class="token punctuation">:</span> DarkRed<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.success </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$theme</span></span><span class="token punctuation">:</span> DarkGreen<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extend-inheritance" tabindex="-1"><a class="header-anchor" href="#extend-inheritance" aria-hidden="true">#</a> Extend/Inheritance</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector"><span class="token placeholder">%message-shared</span> </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// This CSS won&#39;t print because %equal-heights is never extended.</span>
<span class="token selector"><span class="token placeholder">%equal-heights</span> </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.message </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> <span class="token placeholder selector">%message-shared</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.success </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> <span class="token placeholder selector">%message-shared</span><span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.error </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> <span class="token placeholder selector">%message-shared</span><span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.warning </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> <span class="token placeholder selector">%message-shared</span><span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* This CSS will print because %message-shared is extended. */</span>
<span class="token selector">.message, .success, .error, .warning</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.success</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.error</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.warning</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="operators" tabindex="-1"><a class="header-anchor" href="#operators" aria-hidden="true">#</a> Operators</h3><p><code>+、-、math.div()、%</code></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:math&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">article[role=&quot;main&quot;] </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> math.<span class="token function">div</span><span class="token punctuation">(</span>600px<span class="token punctuation">,</span> 960px<span class="token punctuation">)</span> <span class="token operator">*</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">aside[role=&quot;complementary&quot;] </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> math.<span class="token function">div</span><span class="token punctuation">(</span>300px<span class="token punctuation">,</span> 960px<span class="token punctuation">)</span> <span class="token operator">*</span> 100%<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">article[role=&quot;main&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 62.5%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">aside[role=&quot;complementary&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 31.25%<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function y(x,f){const a=l("ExternalLinkIcon");return c(),i("div",null,[r,n("p",null,[s("Sass is a stylesheet language that’s compiled to CSS. It allows you to use "),n("a",u,[s("variables"),e(a)]),s(", "),n("a",d,[s("nested rules"),e(a)]),s(", "),n("a",v,[s("mixins"),e(a)]),s(", "),n("a",k,[s("functions"),e(a)]),s(", and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.")]),m,n("p",null,[s("任何一种格式可以直接 "),n("a",b,[s("导入 (@import)"),e(a)]),s(" 到另一种格式中使用，或者通过 "),h,s(" 命令行工具转换成另一种格式：")]),g])}const w=p(o,[["render",y],["__file","sass-基础.html.vue"]]);export{w as default};
