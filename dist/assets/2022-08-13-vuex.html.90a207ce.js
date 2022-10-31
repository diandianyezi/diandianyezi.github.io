import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as o,a as n,d as c,e as s,b as a,r as i}from"./app.9a90174f.js";const l={},r=s('<h2 id="vuex\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#vuex\u662F\u4EC0\u4E48" aria-hidden="true">#</a> Vuex\u662F\u4EC0\u4E48\uFF1F</h2><p>\u4E13\u4E3Avue\u5E94\u7528\u7A0B\u5E8F\u5F00\u53D1\u7684<strong>\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F</strong>\u3002\u91C7\u7528\u96C6\u4E2D\u5F0F\u5B58\u50A8\u7BA1\u7406\u5E94\u7528\u7684\u6240\u6709\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u5E76\u4EE5\u76F8\u5E94\u7684\u89C4\u5219\u4FDD\u8BC1\u72B6\u6001\u4EE5\u4E00\u79CD\u53EF\u9884\u6D4B\u7684\u65B9\u5F0F\u53D1\u751F\u53D8\u5316\u3002</p><h4 id="\u4EC0\u4E48\u662F\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F\uFF1F</h4><p>\u5355\u5411\u6570\u636E\u6D41 \u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://raw.githubusercontent.com/diandianyezi/typora-images/master/img/image-20210914092652030.png" alt="image-20210914092652030" loading="lazy"></p><p>\u5F53\u9047\u5230\u591A\u4E2A\u7EC4\u4EF6\u5171\u4EAB\u72B6\u6001\u65F6\uFF0C\u5355\u5411\u6570\u636E\u6D41\u7684\u7B80\u6D01\u6027\u5F88\u5BB9\u6613\u88AB\u7834\u574F\uFF1A</p><ul><li>\u591A\u4E2A\u89C6\u56FE\u4F9D\u8D56\u540C\u4E00\u72B6\u6001\uFF1B</li><li>\u6765\u81EA\u4E0D\u540C\u89C6\u56FE\u7684\u884C\u4E3A\u9700\u8981\u53D8\u66F4\u540C\u4E00\u72B6\u6001\u3002</li></ul><p>\u4F20\u53C2\u65B9\u6CD5\u5BF9\u4E8E\u591A\u5C42\u5D4C\u5957\u7684\u7EC4\u4EF6\u4F1A\u975E\u5E38\u7E41\u7410\uFF0C\u5BF9\u4E8E\u5144\u5F1F\u7EC4\u4EF6\u65E0\u80FD\u4E3A\u529B\u3002</p><p>\u4EE5\u5168\u5C40<strong>\u5355\u4F8B\u6A21\u5F0F</strong>\u7BA1\u7406 \u7EC4\u4EF6\u7684\u5171\u4EAB\u72B6\u6001\u3002</p><p>\u901A\u8FC7\u5B9A\u4E49\u548C\u9694\u79BB\u72B6\u6001\u7BA1\u7406\u4E2D\u7684\u5404\u79CD\u6982\u5FF5\u5E76\u901A\u8FC7\u5F3A\u5236\u89C4\u5219\u7EF4\u6301\u89C6\u56FE\u548C\u72B6\u6001\u95F4\u7684\u72EC\u7ACB\u6027\uFF0C\u6211\u4EEC\u7684\u4EE3\u7801\u5C06\u4F1A\u53D8\u5F97\u66F4\u7ED3\u6784\u5316\u4E14\u6613\u7EF4\u62A4\u3002\u501F\u9274\u4E86Flux\u3001Redux\u3002</p><p><img src="https://raw.githubusercontent.com/diandianyezi/typora-images/master/img/image-20210914105942671.png" alt="image-20210914105942671" loading="lazy"></p><h4 id="\u4EC0\u4E48\u60C5\u51B5\u4E0B\u5E94\u8BE5\u4F7F\u7528vuex" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u60C5\u51B5\u4E0B\u5E94\u8BE5\u4F7F\u7528vuex" aria-hidden="true">#</a> \u4EC0\u4E48\u60C5\u51B5\u4E0B\u5E94\u8BE5\u4F7F\u7528Vuex\uFF1F</h4>',12),u=a("\u4E2D\u5927\u578B\u5355\u9875\u5E94\u7528\u53EF\u4F7F\u7528Vuex\uFF0C\u5C0F\u578B\u5355\u9875\u5E94\u7528\u53EF\u4F7F\u7528\u7B80\u5355\u7684"),d={href:"https://cn.vuejs.org/v2/guide/state-management.html#%E7%AE%80%E5%8D%95%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E8%B5%B7%E6%AD%A5%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},k=a("store\u6A21\u5F0F"),v=s(`<h5 id="\u7B80\u5355\u7684store\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684store\u6A21\u5F0F" aria-hidden="true">#</a> \u7B80\u5355\u7684store\u6A21\u5F0F</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> store <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">debug</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Hello!&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setMessageAction</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>debug<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setMessageAction triggered with&#39;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message <span class="token operator">=</span> newValue
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">clearMessageAction</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>debug<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;clearMessageAction triggered&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> vmA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">privateState</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sharedState</span><span class="token operator">:</span> store<span class="token punctuation">.</span>state
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> vmB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">privateState</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sharedState</span><span class="token operator">:</span> store<span class="token punctuation">.</span>state
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u91CD\u8981\u7684\u662F\uFF0C\u6CE8\u610F\u4F60\u4E0D\u5E94\u8BE5\u5728 action \u4E2D \u66FF\u6362\u539F\u59CB\u7684\u72B6\u6001\u5BF9\u8C61 - \u7EC4\u4EF6\u548C store \u9700\u8981\u5F15\u7528\u540C\u4E00\u4E2A\u5171\u4EAB\u5BF9\u8C61\uFF0C\u53D8\u66F4\u624D\u80FD\u591F\u88AB\u89C2\u5BDF\u5230\u3002</p></blockquote><h4 id="\u5B89\u88C5\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F7F\u7528" aria-hidden="true">#</a> \u5B89\u88C5\u4F7F\u7528</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install <span class="token operator">--</span>save vuex

<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h5><p>\u4F9D\u8D56Promise\uFF0C\u53EF\u4F7F\u7528\u4E00\u4E2Apolyfill\u5E93 \u5982es6-promise</p><p>\u6838\u5FC3\u5C31\u662Fstore \u4ED3\u5E93\uFF0C\u5305\u542B\u5E94\u7528\u4E2D\u7684\u5927\u90E8\u5206\u72B6\u6001state\u3002</p><p>Vuex\u548C\u5355\u7EAF\u7684\u5168\u5C40\u5BF9\u8C61\u6709\u4EE5\u4E0B\u4E24\u70B9\u4E0D\u540C\uFF1A</p><ol><li>Vuex\u7684\u72B6\u6001\u5B58\u50A8\u662F\u54CD\u5E94\u5F0F\u7684\u3002store\u4E2D\u7684\u72B6\u6001\u53D1\u751F\u53D8\u5316\uFF0C\u90A3\u4E48\u76F8\u5E94\u7EC4\u4EF6\u4E5F\u4F1A\u5F97\u5230\u66F4\u65B0\u3002</li><li>\u4E0D\u80FD\u76F4\u63A5\u4FEE\u6539store\u4E2D\u7684\u72B6\u6001\u3002\u6539\u53D8store\u4E2D\u7684\u72B6\u6001\u552F\u4E00\u9014\u5F84\u5C31\u662F\u663E\u5F0F\u63D0\u4EA4mutation\u3002\u8FD9\u6837\u4F7F\u5F97\u6211\u4EEC\u53EF\u4EE5\u65B9\u4FBF\u5730\u8FFD\u8E2A\u6BCF\u4E00\u4E2A\u72B6\u6001\u7684\u53D8\u5316\u3002</li></ol><h5 id="\u6700\u7B80\u5355\u7684store" tabindex="-1"><a class="header-anchor" href="#\u6700\u7B80\u5355\u7684store" aria-hidden="true">#</a> \u6700\u7B80\u5355\u7684Store</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// -&gt; 1</span>

<span class="token comment">// \u4E3A\u4E86\u5728\u7EC4\u4EF6\u4E2D\u8BBF\u95EEthis.$store \u5C5E\u6027\uFF0C\u9700\u8981\u4E3AVue\u5B9E\u4F8B\u63D0\u4F9B\u521B\u5EFA\u597D\u7684store\uFF0CVuex\u63D0\u4F9B\u4E00\u4E2A\u4ECE\u6839\u7EC4\u4EF6\u5411\u6240\u6709\u5B50\u7EC4\u4EF6\uFF0C\u4EE5store\u9009\u9879\u7684\u65B9\u5F0F\u201C\u6CE8\u5165\u201Dstore\u7684\u673A\u5236\u3002</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">store</span><span class="token operator">:</span> store<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E store \u4E2D\u7684\u72B6\u6001\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u5728\u7EC4\u4EF6\u4E2D\u8C03\u7528 store \u4E2D\u7684\u72B6\u6001\u7B80\u5355\u5230\u4EC5\u9700\u8981\u5728\u8BA1\u7B97\u5C5E\u6027\u4E2D\u8FD4\u56DE\u5373\u53EF\u3002\u89E6\u53D1\u53D8\u5316\u4E5F\u4EC5\u4EC5\u662F\u5728\u7EC4\u4EF6\u7684 methods \u4E2D\u63D0\u4EA4 mutation</p><h4 id="\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> \u6838\u5FC3\u6982\u5FF5</h4><h5 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> state</h5><p>\u4F7F\u7528<strong>\u5355\u4E00\u72B6\u6001\u6811</strong>\uFF0C\u7528\u4E00\u4E2A\u5BF9\u8C61\u5305\u542B\u4E86\u5168\u90E8\u7684\u5E94\u7528\u5C42\u7EA7\u72B6\u6001\uFF0C\u4F5C\u4E3A \u552F\u4E00\u6570\u636E\u6E90\u800C\u5B58\u5728\u3002\u6BCF\u4E00\u4E2A\u5E94\u7528\u4EC5\u4EC5\u5305\u542B\u4E00\u4E2Astore\u5B9E\u4F8B\u3002</p><h6 id="\u5728\u7EC4\u4EF6\u4E2D\u83B7\u53D6vuex\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u5728\u7EC4\u4EF6\u4E2D\u83B7\u53D6vuex\u72B6\u6001" aria-hidden="true">#</a> \u5728\u7EC4\u4EF6\u4E2D\u83B7\u53D6Vuex\u72B6\u6001</h6><p>\u7531\u4E8E\u72B6\u6001\u5B58\u50A8\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u53EF\u4F7F\u7528\u8BA1\u7B97\u5C5E\u6027\u8FD4\u56DE\u67D0\u4E2A\u72B6\u6001\u3002</p><p>Vuex \u901A\u8FC7 <code>store</code> \u9009\u9879\uFF0C\u63D0\u4F9B\u4E86\u4E00\u79CD\u673A\u5236\u5C06\u72B6\u6001\u4ECE\u6839\u7EC4\u4EF6\u201C\u6CE8\u5165\u201D\u5230\u6BCF\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u4E2D\uFF08\u9700\u8C03\u7528 <code>Vue.use(Vuex)</code>\uFF09\uFF0C\u5B50\u7EC4\u4EF6\u901A\u8FC7 <code>this.$store</code>\u8BBF\u95EEstore</p><h6 id="mapstate\u8F85\u52A9\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#mapstate\u8F85\u52A9\u51FD\u6570" aria-hidden="true">#</a> mapState\u8F85\u52A9\u51FD\u6570</h6><p>\u5F53\u4E00\u4E2A\u7EC4\u4EF6\u9700\u8981\u83B7\u53D6\u591A\u4E2A\u72B6\u6001\u7684\u65F6\u5019\uFF0C\u5C06\u8FD9\u4E9B\u72B6\u6001\u90FD\u58F0\u660E\u4E3A\u8BA1\u7B97\u5C5E\u6027\u4F1A\u6709\u4E9B\u91CD\u590D\u548C\u5197\u4F59\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>mapState</code> \u8F85\u52A9\u51FD\u6570\u5E2E\u52A9\u6211\u4EEC\u751F\u6210\u8BA1\u7B97\u5C5E\u6027</p><h5 id="getters" tabindex="-1"><a class="header-anchor" href="#getters" aria-hidden="true">#</a> Getters</h5><p>Vuex\u5141\u8BB8\u6211\u4EEC\u5728store\u4E2D\u5B9A\u4E49getter\uFF0C\u5C31\u50CF\u8BA1\u7B97\u5C5E\u6027\u4E00\u6837\uFF0Cgetter\u7684\u8FD4\u56DE\u503C\u4F1A\u6839\u636E\u5B83\u7684\u4F9D\u8D56\u88AB\u7F13\u5B58\u8D77\u6765\uFF0C\u4E14\u53EA\u6709\u5F53\u5B83\u7684\u4F9D\u8D56\u503C\u53D1\u751F\u4E86\u6539\u53D8\u624D\u4F1A\u88AB\u91CD\u65B0\u8BA1\u7B97\u3002</p><p>\u63A5\u6536<code>state</code>\u4F5C\u4E3A\u5176\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">doneTodos</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=&gt;</span> todo<span class="token punctuation">.</span>done<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u901A\u8FC7\u5C5E\u6027\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u5C5E\u6027\u8BBF\u95EE" aria-hidden="true">#</a> \u901A\u8FC7\u5C5E\u6027\u8BBF\u95EE</h6><p>Getters\u4F1A\u66B4\u9732\u4E3A<code>store.getters</code>\u5BF9\u8C61\uFF0C\u4F60\u53EF\u4EE5\u4EE5\u5C5E\u6027\u7684\u5F62\u5F0F\u8BBF\u95EE\u8FD9\u4E9B\u503C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>doneTodos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u63A5\u53D7\u5176\u4ED6getter\u4F5C\u4E3A\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token function-variable function">doneTodosCount</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getters</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> getters<span class="token punctuation">.</span>doneTodos<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\uFF0Cgetter \u5728\u901A\u8FC7\u5C5E\u6027\u8BBF\u95EE\u65F6\u662F\u4F5C\u4E3A Vue \u7684\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u4E00\u90E8\u5206\u7F13\u5B58\u5176\u4E2D\u7684\u3002</p></blockquote><h6 id="\u901A\u8FC7\u65B9\u6CD5\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u65B9\u6CD5\u8BBF\u95EE" aria-hidden="true">#</a> \u901A\u8FC7\u65B9\u6CD5\u8BBF\u95EE</h6><p>\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BA9 getter \u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u6765\u5B9E\u73B0\u7ED9 getter \u4F20\u53C2\u3002\u5728\u4F60\u5BF9 store \u91CC\u7684\u6570\u7EC4\u8FDB\u884C\u67E5\u8BE2\u65F6\u975E\u5E38\u6709\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token function-variable function">getTodoById</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=&gt;</span> todo<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span><span class="token function">getTodoById</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\uFF0Cgetter\u5728\u901A\u8FC7\u65B9\u6CD5\u8BBF\u95EE\u65F6\uFF0C\u6BCF\u6B21\u90FD\u4F1A\u53BB\u8FDB\u884C\u8C03\u7528\uFF0C\u800C\u4E0D\u4F1A\u7F13\u5B58\u7ED3\u679C\u3002</p></blockquote><h6 id="mapgetters-\u8F85\u52A9\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#mapgetters-\u8F85\u52A9\u51FD\u6570" aria-hidden="true">#</a> mapGetters \u8F85\u52A9\u51FD\u6570</h6><p><code>mapGetters</code>\u8F85\u52A9\u51FD\u6570\u4EC5\u4EC5\u662F\u5C06store\u4E2D\u7684getter\u6620\u5C04\u5230\u5C40\u90E8\u8BA1\u7B97\u5C5E\u6027\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapGetters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4F7F\u7528\u5BF9\u8C61\u5C55\u5F00\u8FD0\u7B97\u7B26\u5C06 getter \u6DF7\u5165 computed \u5BF9\u8C61\u4E2D</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">&#39;doneTodosCount&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;anotherGetter&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="mutations" tabindex="-1"><a class="header-anchor" href="#mutations" aria-hidden="true">#</a> Mutations</h5><p>\u66F4\u6539state\u7684\u552F\u4E00\u65B9\u6CD5\u5C31\u662F\u63D0\u4EA4mutation\u3002Vuex\u4E2D\u7684mutation\u975E\u5E38\u7C7B\u4F3C\u4E8E\u4E8B\u4EF6\uFF1A\u6BCF\u4E2Amutation\u90FD\u6709\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684<strong>\u4E8B\u4EF6\u7C7B\u578B</strong> \u548C\u4E00\u4E2A<strong>\u56DE\u8C03\u51FD\u6570</strong>\u3002\u8FD9\u4E2A\u56DE\u8C03\u51FD\u6570\u5C31\u662F\u6211\u4EEC\u5B9E\u9645\u8FDB\u884C\u72B6\u6001\u66F4\u6539\u7684\u5730\u65B9\uFF0C\u5E76\u4E14\u5B83\u4F1A\u63A5\u53D7state\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u53D8\u66F4\u72B6\u6001</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41);function m(b,h){const e=i("ExternalLinkIcon");return p(),o("div",null,[r,n("p",null,[u,n("a",d,[k,c(e)])]),v])}var x=t(l,[["render",m],["__file","2022-08-13-vuex.html.vue"]]);export{x as default};
