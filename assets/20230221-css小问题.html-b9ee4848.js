import{_ as s,W as n,X as e,a2 as a}from"./framework-609d4fec.js";const c={},p=a(`<h1 id="li标签-自定义前缀" tabindex="-1"><a class="header-anchor" href="#li标签-自定义前缀" aria-hidden="true">#</a> <code>li</code>标签 自定义前缀</h1><p><code>list-style-type</code> 可以设置常见的样式，<code>li</code>标签的<code>display</code>属性必须为<code>list-item</code>，才会生效，其他<code>display</code>属性会失效，主要有：<code>disc</code> <code>circle</code> <code>square</code> 等</p><p><code>cjk-decimal</code>或<code>cjk-ideographic</code>，cjk-heavenly-stem（天干）、<code>cjk-earthly-branch</code>（地支）：</p><p>也可以使用 <code>@counter-style</code>规则自定义项目符号序列表</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@counter-style</span> counter-style-name</span> <span class="token punctuation">{</span>
    <span class="token property">system</span><span class="token punctuation">:</span> 计数系统
    <span class="token property">symbols</span><span class="token punctuation">:</span> 计数符号
    <span class="token property">additive-symbols</span><span class="token punctuation">:</span> 附加符号
    <span class="token property">negative</span><span class="token punctuation">:</span> 负数符号
    <span class="token property">prefix</span><span class="token punctuation">:</span> 前缀
    <span class="token property">suffix</span><span class="token punctuation">:</span> 后缀
    <span class="token property">range</span><span class="token punctuation">:</span> 范围
    <span class="token property">pad</span><span class="token punctuation">:</span> 补全
    <span class="token property">speak-as</span><span class="token punctuation">:</span> 如何阅读
    <span class="token property">fallback</span><span class="token punctuation">:</span> 备份计数规则
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![image-20230221101425209](../../../../../Library/Application Support/typora-user-images/image-20230221101425209.png)</p>`,6),t=[p];function o(i,l){return n(),e("div",null,t)}const r=s(c,[["render",o],["__file","20230221-css小问题.html.vue"]]);export{r as default};
