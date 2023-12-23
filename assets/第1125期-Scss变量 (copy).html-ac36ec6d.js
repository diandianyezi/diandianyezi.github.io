import{_ as s,W as n,X as a,a2 as e}from"./framework-609d4fec.js";const p={},t=e(`<h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><p>以 <code>$</code>开头，直接在变量值中使用。减少重复</p><p>中划线和下划线等价</p><h4 id="scss变量与css变量" tabindex="-1"><a class="header-anchor" href="#scss变量与css变量" aria-hidden="true">#</a> Scss变量与css变量</h4><ul><li>Scss变量只能被Sass编译，css变量直接输出到css文件</li><li>不同元素的css变量 可能有不同的值，但是Sass变量只能有一个值</li><li>scss变量在值更改后，之前的引用不会变，但是css变量会变</li></ul><h4 id="默认值" tabindex="-1"><a class="header-anchor" href="#默认值" aria-hidden="true">#</a> 默认值</h4><p><code>!default</code>定义默认值为null或未定义时生效，一般在 library中使用</p><p>在引用库的时候 可以指定值 <code>@use &lt;url&gt; with (&lt;variable&gt;: &lt;value&gt;, &lt;variable&gt;: &lt;value&gt;)</code></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// _library.scss</span>
<span class="token property"><span class="token variable">$black</span></span><span class="token punctuation">:</span> #000 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border-radius</span></span><span class="token punctuation">:</span> 0.25rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$box-shadow</span></span><span class="token punctuation">:</span> 0 0.5rem 1rem <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token variable">$black</span><span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token selector">code </span><span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">$border-radius</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$box-shadow</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// style.scss</span>
<span class="token keyword">@use</span> <span class="token string">&#39;library&#39;</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$black</span></span><span class="token punctuation">:</span> #222<span class="token punctuation">,</span>
  <span class="token property"><span class="token variable">$border-radius</span></span><span class="token punctuation">:</span> 0.1rem
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">code</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.1rem<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0.5rem 1rem <span class="token function">rgba</span><span class="token punctuation">(</span>34<span class="token punctuation">,</span> 34<span class="token punctuation">,</span> 34<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="内置变量" tabindex="-1"><a class="header-anchor" href="#内置变量" aria-hidden="true">#</a> 内置变量</h4><p>使用： <code>sass:modulename</code></p><ul><li><p><code>sass:color</code></p></li><li><p><code>sass:math</code></p></li><li><p><code>sass:string</code></p></li><li><p><code>sass:list</code></p></li><li><p><code>sass:map</code></p></li><li><p><code>sass:selector</code></p></li><li><p><code>sass:meta</code></p><p>​</p></li></ul><h4 id="scope" tabindex="-1"><a class="header-anchor" href="#scope" aria-hidden="true">#</a> Scope</h4><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$global-variable</span></span><span class="token punctuation">:</span> global value<span class="token punctuation">;</span>

<span class="token selector">.content </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$local-variable</span></span><span class="token punctuation">:</span> local value<span class="token punctuation">;</span>
  <span class="token property">global</span><span class="token punctuation">:</span> <span class="token variable">$global-variable</span><span class="token punctuation">;</span>
  <span class="token property">local</span><span class="token punctuation">:</span> <span class="token variable">$local-variable</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.sidebar </span><span class="token punctuation">{</span>
  <span class="token property">global</span><span class="token punctuation">:</span> <span class="token variable">$global-variable</span><span class="token punctuation">;</span>

  <span class="token comment">// This would fail, because $local-variable isn&#39;t in scope:</span>
  <span class="token comment">// local: $local-variable;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="shadowing" tabindex="-1"><a class="header-anchor" href="#shadowing" aria-hidden="true">#</a> Shadowing</h4><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$variable</span></span><span class="token punctuation">:</span> global value<span class="token punctuation">;</span>

<span class="token selector">.content </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$variable</span></span><span class="token punctuation">:</span> local value<span class="token punctuation">;</span>
  <span class="token property">value</span><span class="token punctuation">:</span> <span class="token variable">$variable</span><span class="token punctuation">;</span> <span class="token comment">// local value</span>
<span class="token punctuation">}</span>

<span class="token selector">.sidebar </span><span class="token punctuation">{</span>
  <span class="token property">value</span><span class="token punctuation">:</span> <span class="token variable">$variable</span><span class="token punctuation">;</span> <span class="token comment">// global value</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>!global</code>标识可以在局部作用域修改全局变量</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$variable</span></span><span class="token punctuation">:</span> first global value<span class="token punctuation">;</span>

<span class="token selector">.content </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$variable</span></span><span class="token punctuation">:</span> second global value !global<span class="token punctuation">;</span>
  <span class="token property">value</span><span class="token punctuation">:</span> <span class="token variable">$variable</span><span class="token punctuation">;</span> <span class="token comment">//second global value</span>
<span class="token punctuation">}</span>

<span class="token selector">.sidebar </span><span class="token punctuation">{</span>
  <span class="token property">value</span><span class="token punctuation">:</span> <span class="token variable">$variable</span><span class="token punctuation">;</span> <span class="token comment">// second global value</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="flow-control-scope" tabindex="-1"><a class="header-anchor" href="#flow-control-scope" aria-hidden="true">#</a> Flow Control Scope</h4><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$dark-theme</span></span><span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$primary-color</span></span><span class="token punctuation">:</span> #fff <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$accent-color</span></span><span class="token punctuation">:</span> #6e6e6e <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$dark-theme</span> </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$primary-color</span></span><span class="token punctuation">:</span> <span class="token function">darken</span><span class="token punctuation">(</span><span class="token variable">$primary-color</span><span class="token punctuation">,</span> 60%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$accent-color</span></span><span class="token punctuation">:</span> <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">$accent-color</span><span class="token punctuation">,</span> 60%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$primary-color</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token variable">$accent-color</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意！</p><p>控制流里不能声明声明新的变量，只能修改已经声明过的变量！</p></blockquote><h4 id="高级变量函数" tabindex="-1"><a class="header-anchor" href="#高级变量函数" aria-hidden="true">#</a> 高级变量函数</h4><p>Sass核心库提供一些高级函数处理变量：</p><p><code>meta.variable-exists()</code> 判断变量是否在当前作用域是否存在</p><p><code>meta.global-variable-exists()</code> 判断变量是否在全局作用域存在</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:map&quot;</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$theme-colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;success&quot;</span><span class="token punctuation">:</span> #28a745<span class="token punctuation">,</span>
  <span class="token string">&quot;info&quot;</span><span class="token punctuation">:</span> #17a2b8<span class="token punctuation">,</span>
  <span class="token string">&quot;warning&quot;</span><span class="token punctuation">:</span> #ffc107<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token selector">.alert </span><span class="token punctuation">{</span>
  <span class="token comment">// Instead of $theme-color-#{warning}</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> map.<span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">$theme-colors</span><span class="token punctuation">,</span> <span class="token string">&quot;warning&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),l=[t];function c(o,i){return n(),a("div",null,l)}const r=s(p,[["render",c],["__file","第1125期-Scss变量 (copy).html.vue"]]);export{r as default};
