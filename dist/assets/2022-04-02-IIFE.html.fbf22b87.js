import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as p,a as n,d as o,b as s,e as c,r as i}from"./app.c47ce94b.js";const u={},l=n("h3",{id:"iife",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#iife","aria-hidden":"true"},"#"),s(" IIFE")],-1),r={href:"https://developer.mozilla.org/zh-CN/docs/Glossary/IIFE",target:"_blank",rel:"noopener noreferrer"},d=s("MDN \u4ECB\u7ECD"),k=c(`<p>\u7ACB\u5373\u6267\u884C\u51FD\u6570 Immediately Invokes Function Expressions</p><p>JavaScript \u89E3\u6790\u5668\u5C06 <code>function foo(){ }();</code>\u89E3\u6790\u6210<code>function foo(){ }</code>\u548C<code>();</code>\u3002\u5176\u4E2D\uFF0C\u524D\u8005\u662F\u51FD\u6570\u58F0\u660E\uFF1B\u540E\u8005\uFF08\u4E00\u5BF9\u62EC\u53F7\uFF09\u662F\u8BD5\u56FE\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\uFF0C\u5374\u6CA1\u6709\u6307\u5B9A\u540D\u79F0\uFF0C\u56E0\u6B64\u5B83\u4F1A\u629B\u51FA<code>Uncaught SyntaxError: Unexpected token )</code>\u7684\u9519\u8BEF\u3002</p><p>\u4FEE\u6539\u65B9\u6CD5\u662F\uFF1A\u518D\u6DFB\u52A0\u4E00\u5BF9\u62EC\u53F7\uFF0C\u5F62\u5F0F\u4E0A\u6709\u4E24\u79CD\uFF1A<code>(function foo(){ })()</code>\u548C<code>(function foo(){ }())</code>\u3002\u4EE5\u4E0A\u51FD\u6570\u4E0D\u4F1A\u66B4\u9732\u5230\u5168\u5C40\u4F5C\u7528\u57DF\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u5728\u51FD\u6570\u5185\u90E8\u5F15\u7528\u81EA\u8EAB\uFF0C\u53EF\u4EE5\u7701\u7565\u51FD\u6570\u7684\u540D\u79F0\u3002</p><p>\u4F60\u53EF\u80FD\u4F1A\u7528\u5230 <code>void</code> \u64CD\u4F5C\u7B26\uFF1A<code>void function foo(){ }();</code>\u3002\u4F46\u662F\uFF0C\u8FD9\u79CD\u505A\u6CD5\u662F\u6709\u95EE\u9898\u7684\u3002\u8868\u8FBE\u5F0F\u7684\u503C\u662F<code>undefined</code>\uFF0C\u6240\u4EE5\u5982\u679C\u4F60\u7684 IIFE \u6709\u8FD4\u56DE\u503C\uFF0C\u4E0D\u8981\u7528\u8FD9\u79CD\u505A\u6CD5\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h3><p>An IIFE is an anonymous \u533F\u540D function that is created and then immediately invoked. It\u2019s not called from anywhere else (hence why it\u2019s anonymous), but runs just after being created.</p><p>\u5305\u542B\u4E24\u90E8\u5206\uFF0C\u4E00\u90E8\u5206\u662F\u5706\u62EC\u53F7\u91CC\u7684\u4E00\u4E2A\u533F\u540D\u51FD\u6570\uFF0C\u8FD9\u4E2A\u533F\u540D\u51FD\u6570\u62E5\u6709\u72EC\u7ACB\u7684\u8BCD\u6CD5\u4F5C\u7528\u57DF\u3002\u4E0D\u4EC5\u907F\u514D\u4E86\u5916\u754C\u8BBF\u95EE\u6B64IIFE\u4E2D\u7684\u53D8\u91CF\uFF0C\u800C\u4E14\u53C8\u4E0D\u4F1A\u6C61\u67D3\u5168\u5C40\u4F5C\u7528\u57DF\u3002\u7B2C\u4E8C\u90E8\u5206\u518D\u4E00\u6B21\u4F7F\u7528 <code>()</code> \u521B\u5EFA\u4E86\u4E00\u4E2A\u7ACB\u5373\u6267\u884C\u51FD\u6570\u8868\u8FBE\u5F0F\uFF0CJavaScript \u5F15\u64CE\u5230\u6B64\u5C06\u76F4\u63A5\u6267\u884C\u51FD\u6570\u3002</p><p>Example\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// returns 5 right away</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>They can be used to guard against <strong>unintended effects of hoisting:</strong> \u51FA\u4E4E\u610F\u6599\u7684\u63D0\u5347\u6548\u679C</p><p>IIFEs can also be used to enforce <strong>private variables and methods:</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> v <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> getValue <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
v <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">helperFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">val</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
      i <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> counter <span class="token operator">=</span> <span class="token function">helperFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

counter<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns 0</span>
counter<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span> <span class="token number">3</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
counter<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns 3</span>
counter<span class="token punctuation">.</span>i<span class="token punctuation">;</span> <span class="token comment">// returns undefined</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function v(m,b){const a=i("ExternalLinkIcon");return t(),p("div",null,[l,n("p",null,[n("a",r,[d,o(a)])]),k])}var g=e(u,[["render",v],["__file","2022-04-02-IIFE.html.vue"]]);export{g as default};