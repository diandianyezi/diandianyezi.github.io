import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.9a90174f.js";const t={},p=e(`<p>\u672C\u7BC7\u535A\u5BA2\u4E3B\u8981\u662F\u5BF9 Javcscript \u539F\u578B\u548C\u539F\u578B\u94FE\u7684\u5B66\u4E60\u7406\u89E3</p><h2 id="\u7406\u89E3\u539F\u578B" tabindex="-1"><a class="header-anchor" href="#\u7406\u89E3\u539F\u578B" aria-hidden="true">#</a> \u7406\u89E3\u539F\u578B</h2><p>JavaScript \u5E38\u88AB\u63CF\u8FF0\u4E3A\u4E00\u79CD\u57FA\u4E8E\u539F\u578B\u7684\u8BED\u8A00\u2014\u2014\u6BCF\u4E2A\u5BF9\u8C61\u62E5\u6709\u4E00\u4E2A<code>__proto__</code>\uFF0C\u6307\u5411\u5B83\u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u4EE5\u5176\u539F\u578B\u4E3A\u6A21\u677F\u3001\u4ECE\u539F\u578B\u7EE7\u627F\u65B9\u6CD5\u548C\u5C5E\u6027\u3002\u539F\u578B\u5BF9\u8C61\u4E5F\u53EF\u80FD\u62E5\u6709\u539F\u578B\uFF0C\u5E76\u4ECE\u4E2D\u7EE7\u627F\u65B9\u6CD5\u548C\u5C5E\u6027\uFF0C\u4E00\u5C42\u4E00\u5C42\u3001\u4EE5\u6B64\u7C7B\u63A8\u3002\u8FD9\u79CD\u5173\u7CFB\u5E38\u88AB\u79F0\u4E3A\u539F\u578B\u94FE\u3002</p><h2 id="\u6784\u9020\u51FD\u6570\u521B\u5EFA\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570\u521B\u5EFA\u5BF9\u8C61" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570\u521B\u5EFA\u5BF9\u8C61</h2><p><code>JavaScript</code> \u4E2D\u4F7F\u7528 <code>new</code> \u64CD\u4F5C\u7B26\uFF0C\u901A\u8FC7\u6784\u9020\u51FD\u6570\u521D\u59CB\u5316\u65B0\u5BF9\u8C61\u3002\u6211\u4EEC\u5148\u4F7F\u7528\u6784\u9020\u51FD\u6570\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Ninja</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span>swung <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ninja <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ninja</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ninja<span class="token punctuation">.</span>swung<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u7B80\u5355\u7684\u901A\u8FC7 Ninja \u6784\u9020\u5668\u5B9E\u4F8B\u4E00\u4E2A\u5BF9\u8C61\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u901A\u8FC7\u8FD9\u4E2A\u4F8B\u5B50\u8BE6\u7EC6\u5C55\u5F00\u3002</p><h2 id="prototype" tabindex="-1"><a class="header-anchor" href="#prototype" aria-hidden="true">#</a> prototype</h2><p>\u5728 JavaScript \u4E2D\uFF0C\u51FD\u6570\u53EF\u4EE5\u6709\u5C5E\u6027\u3002\u6BCF\u4E2A\u51FD\u6570\u90FD\u6709\u4E00\u4E2A\u7279\u6B8A\u7684\u5C5E\u6027\u53EB\u4F5C\u539F\u578B\uFF08<code>prototype</code>\uFF09\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Ninja</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">Ninja</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>swung <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">const</span> ninja <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ninja</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ninja<span class="token punctuation">.</span>swung<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D Ninja \u51FD\u6570\u7684 <code>prototype</code> \u5C5E\u6027\u6307\u5411\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u88AB\u6784\u5EFA\u7684\u5B9E\u4F8B\u5BF9\u8C61 ninja \u7684\u539F\u578B\u4E5F\u6307\u5411\u8FD9\u4E2A\u5BF9\u8C61\u3002\u5173\u4E8E ninja \u539F\u578B\u5219\u5728\u4E0B\u9762\u8BE6\u7EC6\u5C55\u5F00\uFF1A</p><h2 id="proto" tabindex="-1"><a class="header-anchor" href="#proto" aria-hidden="true">#</a> __ proto__</h2><p>\u5728 JavaScript \u4E2D\uFF0C\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u5C5E\u6027\u662F\u5185\u7F6E\u5C5E\u6027\uFF08\u4F7F\u7528\u6807\u8BB0 <code>[[prototype]]</code>\uFF09\u3002ES6\u4E4B\u524D ECMAScript \u6807\u51C6\u6CA1\u6709\u63D0\u4F9B\u63A5\u53E3\u8BBF\u95EE\u8FD9\u4E2A\u5C5E\u6027\u7684\uFF0C\u4F46\u662F\u8BB8\u591A\u6D4F\u89C8\u5668\u90FD\u5B9E\u73B0\u4E86 JavaScript \u975E\u6807\u51C6\u7684\u5185\u7F6E\u5C5E\u6027__proto__\u6765\u8BBF\u95EE\u5BF9\u8C61\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Ninja</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span>swung <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ninja <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ninja</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ninja<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Ninja</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BCF\u4E00\u4E2AJavaScript\u5BF9\u8C61(\u9664\u4E86<code>null</code>)\u90FD\u5177\u6709__proto__\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u4F1A\u6307\u5411\u8BE5\u5BF9\u8C61\u7684\u539F\u578B\u3002</p><p>\u63A5\u7740\u5728\u770B\u4E0B\u9762\u8FD9\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Ninja</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span>swung <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ninja <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ninja</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>ninja<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">Ninja</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6\u5F00\u59CB\uFF0CECMAScript \u6807\u51C6\u63D0\u4F9B\u4E86 <code>Object.getPrototypeOf()</code> \u548C <code>Object.setPrototypeOf()</code> \u8BBF\u95EE\u5668\u6765\u8BBF\u95EE\u548C\u8BBE\u7F6E\u539F\u578B\u3002__proto__\u5B83\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u5185\u90E8\u5C5E\u6027\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u6B63\u5F0F\u7684\u5BF9\u5916\u7684 API\uFF0C\u53EA\u662F\u7531\u4E8E\u6D4F\u89C8\u5668\u5E7F\u6CDB\u652F\u6301\uFF0C\u624D\u88AB\u52A0\u5165\u4E86 <code>ES6</code>\uFF0C\u6240\u4EE5\u5EFA\u8BAE\u4E0D\u8981\u4F7F\u7528\u3002</p><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\u6784\u9020\u51FD\u6570\u539F\u578B\u548C\u5B9E\u4F8B\u5BF9\u8C61\u539F\u578B\u662F\u76F8\u540C\u7684\uFF0C\u5B83\u4EEC\u7684\u539F\u578B\u4E2D\u8FD8\u5305\u542B\u4E00\u4E2A\u7279\u6B8A\u7684\u5C5E\u6027 <code>constructor</code> \u7528\u4E8E\u6307\u5411\u6784\u9020\u51FD\u6570\u3002</p><h2 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h2><p>\u6BCF\u4E2A\u539F\u578B\u90FD\u6709\u4E00\u4E2A <code>constructor</code> \u5C5E\u6027\u6307\u5411\u5173\u8054\u7684\u6784\u9020\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Ninja</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Ninja</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Ninja<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6784\u9020\u51FD\u6570\u3001\u5B9E\u4F8B\u5BF9\u8C61\u548C-constructor-\u5173\u7CFB\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570\u3001\u5B9E\u4F8B\u5BF9\u8C61\u548C-constructor-\u5173\u7CFB\u56FE" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570\u3001\u5B9E\u4F8B\u5BF9\u8C61\u548C constructor \u5173\u7CFB\u56FE</h2><h2 id="\u539F\u578B\u94FE" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u94FE" aria-hidden="true">#</a> \u539F\u578B\u94FE</h2><p>\u5F53\u8BFB\u53D6\u5B9E\u4F8B\u7684\u5C5E\u6027\u65F6\uFF0C\u5982\u679C\u627E\u4E0D\u5230\uFF0C\u5C31\u4F1A\u67E5\u627E\u4E0E\u5BF9\u8C61\u5173\u8054\u7684\u539F\u578B\u4E2D\u7684\u5C5E\u6027\uFF0C\u5982\u679C\u8FD8\u67E5\u4E0D\u5230\uFF0C\u5C31\u53BB\u627E\u539F\u578B\u7684\u539F\u578B\uFF0C\u4E00\u76F4\u627E\u5230\u6700\u9876\u5C42\u4E3A\u6B62\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Ninja</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">Ninja</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>swung <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">const</span> ninja <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ninja</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
ninja<span class="token punctuation">.</span>swung <span class="token operator">=</span> <span class="token boolean">false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ninja<span class="token punctuation">.</span>swung<span class="token punctuation">)</span> <span class="token comment">// false</span>

<span class="token keyword">delete</span> ninja<span class="token punctuation">.</span>swung
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ninja<span class="token punctuation">.</span>swung<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u539F\u578B\u94FE\u7684\u6700\u9876\u5C42\u5373\u539F\u578B\u94FE\u7684\u7EC8\u70B9<code>Object.prototype</code>\u4E3Anull,\u6211\u4EEC\u53EF\u4EE5\u6253\u5370\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span> <span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>null \u8868\u793A\u201C\u6CA1\u6709\u5BF9\u8C61\u201D\uFF0C\u5373\u8BE5\u5904\u4E0D\u5E94\u8BE5\u6709\u503C\u3002</p></blockquote><p>\u6240\u4EE5 <code>Object.prototype.__ proto__</code> \u7684\u503C\u4E3A <code>null</code> \u8DDF <code>Object.prototype</code> \u6CA1\u6709\u539F\u578B\uFF0C\u5176\u5B9E\u8868\u8FBE\u4E86\u4E00\u4E2A\u610F\u601D\u3002</p><p>\u6240\u4EE5\u67E5\u627E\u5C5E\u6027\u7684\u65F6\u5019\u67E5\u5230 <code>Object.prototype</code> \u5C31\u505C\u6B62\u67E5\u627E\u4E86\u3002</p>`,32),o=[p];function c(i,l){return s(),a("div",null,o)}var d=n(t,[["render",c],["__file","2020-05-29-\u539F\u578B\u548C\u539F\u578B\u94FE.html.vue"]]);export{d as default};
