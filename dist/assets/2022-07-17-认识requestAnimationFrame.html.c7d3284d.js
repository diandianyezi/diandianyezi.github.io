import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,e as t}from"./app.9a90174f.js";const p={},e=t(`<h2 id="\u8BA4\u8BC6requestanimationframe" tabindex="-1"><a class="header-anchor" href="#\u8BA4\u8BC6requestanimationframe" aria-hidden="true">#</a> \u8BA4\u8BC6requestAnimationFrame</h2><p>\u544A\u8BC9\u6D4F\u89C8\u5668-\u4F60\u5E0C\u671B\u6267\u884C\u4E00\u4E2A\u52A8\u753B\uFF0C\u5E76\u4E14\u8981\u6C42\u6D4F\u89C8\u5668\u5728\u4E0B\u6B21\u91CD\u7ED8\u4E4B\u524D\u8C03\u7528\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u66F4\u65B0\u52A8\u753B\u3002\u8BE5\u65B9\u6CD5\u9700\u8981\u4F20\u5165\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8BE5\u56DE\u8C03\u51FD\u6570\u4F1A\u5728\u6D4F\u89C8\u5668\u4E0B\u6B21\u91CD\u7ED8\u4E4B\u524D\u6267\u884C\u3002</p><p>\u6D4F\u89C8\u5668\u7684\u91CD\u7ED8\u9891\u7387\u662F\u6BCF\u79D260\u6B21\uFF0C\u7EA616ms\u91CD\u7ED8\u4E00\u6B21</p><p>\u53EF\u4EE5\u7B80\u5355\u7684\u5C06<code>requestAnimationFrame</code>\u51FD\u6570\u89C6\u4E3A\u5EF6\u8FDF\u4E3A16ms\u7684<code>setTimeout</code>\u51FD\u6570\u3002</p><h3 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h3><p><code>callback</code></p><p>\u4E0B\u6B21\u91CD\u7ED8\u4E4B\u524D\u66F4\u65B0\u753B\u5E27\u6240\u8C03\u7528\u7684\u51FD\u6570\uFF08\u5373\u4E0A\u9762\u6240\u8BF4\u7684\u56DE\u8C03\u51FD\u6570\uFF09\u3002\u8BE5\u56DE\u8C03\u51FD\u6570\u4F1A\u88AB\u4F20\u56FE<code>DOMHighResTimeStamp</code>\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u4E0E <code>performance.now</code>\u7684\u8FD4\u56DE\u503C\u76F8\u540C\uFF0C\u8868\u793A<code>requestAnimationFrame\uFF08\uFF09</code>\u5F00\u59CB\u6267\u884C\u56DE\u8C03\u51FD\u6570\u7684\u65F6\u523B\u3002</p><h3 id="\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h3><p>\u4E00\u4E2A <code>long</code>\u6574\u6570\uFF0C\u8BF7\u6C42ID\uFF0C\u662F\u56DE\u8C03\u5217\u8868\u4E2D\u552F\u4E00\u7684\u6807\u8BC6\uFF0C\u662F\u4E2A\u975E\u96F6\u503C\uFF0C\u6CA1\u522B\u7684\u610F\u4E49\u3002\u53EF\u4EE5\u4F20\u8FD9\u4E2A\u503C\u7ED9 <code>window.cancelAnimationFrame()</code>\u4EE5\u53D6\u6D88\u56DE\u8C03\u51FD\u6570\u3002</p><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
            <span class="token selector">.animation</span> <span class="token punctuation">{</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
                <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>animation<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            jjj
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
            <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;animation&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> start<span class="token punctuation">;</span>
        
            <span class="token keyword">function</span> <span class="token function">step</span><span class="token punctuation">(</span><span class="token parameter">timestamp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
                    start <span class="token operator">=</span> timestamp<span class="token punctuation">;</span>
                
                <span class="token keyword">const</span> elapsed <span class="token operator">=</span> timestamp <span class="token operator">-</span> start<span class="token punctuation">;</span>
        
                <span class="token comment">//\u8FD9\u91CC\u4F7F\u7528\`Math.min()\`\u786E\u4FDD\u5143\u7D20\u521A\u597D\u505C\u5728 200px \u7684\u4F4D\u7F6E\u3002</span>
                element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token string">&#39;translateX(&#39;</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">0.1</span> <span class="token operator">*</span> elapsed<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px)&#39;</span><span class="token punctuation">;</span>
        
                <span class="token keyword">if</span> <span class="token punctuation">(</span>elapsed <span class="token operator">&lt;</span> <span class="token number">2000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5728\u4E24\u79D2\u540E\u505C\u6B62\u52A8\u753B</span>
                    window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>step<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        
            window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>step<span class="token punctuation">)</span><span class="token punctuation">;</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>`,12),o=[e];function c(l,i){return a(),s("div",null,o)}var r=n(p,[["render",c],["__file","2022-07-17-\u8BA4\u8BC6requestAnimationFrame.html.vue"]]);export{r as default};
