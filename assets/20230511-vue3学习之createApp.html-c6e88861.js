import{_ as p,W as e,X as t,Z as n,a1 as o,$ as c,a2 as s,C as l}from"./framework-609d4fec.js";const i={},r=s(`<h1 id="createapp" tabindex="-1"><a class="header-anchor" href="#createapp" aria-hidden="true">#</a> CreateApp</h1><blockquote><p>顾名思义，CreateApp作为vue的启动函数，返回一个应用实例</p></blockquote><h3 id="从一个例子开始" tabindex="-1"><a class="header-anchor" href="#从一个例子开始" aria-hidden="true">#</a> 从一个例子开始</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> HelloVueApp <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Hello Vue!&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span>HelloVueApp<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#hello-vue&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u={href:"https://vue3j.cn/run/start.html",target:"_blank",rel:"noopener noreferrer"},k=s(`<p>createApp 干了些什么？</p><p>ensureRenderer -&gt; createRenderer -&gt; baseCreateRenderer</p><p>baseCreateRenderer 返回了createApp</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token punctuation">{</span>
    render<span class="token punctuation">,</span>
    hydrate<span class="token punctuation">,</span>
    <span class="token literal-property property">createApp</span><span class="token operator">:</span> <span class="token function">createAppAPI</span><span class="token punctuation">(</span>render<span class="token punctuation">,</span> hydrate<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>调用了<code>createAppAPI</code>方法</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> createAppAPI<span class="token operator">&lt;</span>HostElement<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">render</span><span class="token operator">:</span> RootRenderFunction<span class="token punctuation">,</span>
  hydrate<span class="token operator">?</span><span class="token operator">:</span> RootHydrateFunction
<span class="token punctuation">)</span><span class="token operator">:</span> CreateAppFunction<span class="token operator">&lt;</span>HostElement<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token parameter">rootComponent<span class="token punctuation">,</span> rootProps <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rootProps <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>rootProps<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      __DEV__ <span class="token operator">&amp;&amp;</span> <span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">root props passed to app.mount() must be an object.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      rootProps <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 创建默认APP配置</span>
    <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">createAppContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> installedPlugins <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> isMounted <span class="token operator">=</span> <span class="token boolean">false</span>

    <span class="token keyword">const</span> <span class="token literal-property property">app</span><span class="token operator">:</span> App <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">_component</span><span class="token operator">:</span> rootComponent <span class="token keyword">as</span> Component<span class="token punctuation">,</span>
      <span class="token literal-property property">_props</span><span class="token operator">:</span> rootProps<span class="token punctuation">,</span>
      <span class="token literal-property property">_container</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token literal-property property">_context</span><span class="token operator">:</span> context<span class="token punctuation">,</span>

      <span class="token keyword">get</span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> context<span class="token punctuation">.</span>config
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token keyword">set</span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">warn</span><span class="token punctuation">(</span>
            <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">app.config cannot be replaced. Modify individual options instead.</span><span class="token template-punctuation string">\`</span></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// 都是一些眼熟的方法</span>
      <span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">directive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// mount 我们拎出来讲</span>
      <span class="token function">mount</span><span class="token punctuation">(</span>
      	<span class="token parameter"><span class="token literal-property property">rootContainer</span><span class="token operator">:</span> HostElement<span class="token punctuation">,</span>
        isHydrate<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
        isSVG<span class="token operator">?</span><span class="token operator">:</span> boolean</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">unmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> app
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>createAppContext()</code> 创建默认app配置</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createAppContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> AppContext <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token keyword">as</span> any<span class="token punctuation">,</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">isNativeTag</span><span class="token operator">:</span> <span class="token constant">NO</span><span class="token punctuation">,</span>
      <span class="token literal-property property">performance</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">globalProperties</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">optionMergeStrategies</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">errorHandler</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
      <span class="token literal-property property">warnHandler</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
      <span class="token literal-property property">compilerOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provides</span><span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">optionsCache</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">propsCache</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">emitsCache</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function d(v,m){const a=l("ExternalLinkIcon");return e(),t("div",null,[r,n("p",null,[n("a",u,[o("亲自试试"),c(a)])]),k])}const y=p(i,[["render",d],["__file","20230511-vue3学习之createApp.html.vue"]]);export{y as default};
