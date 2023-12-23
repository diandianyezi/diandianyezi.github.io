import{_ as p,W as e,X as o,Z as n,a1 as s,$ as t,a2 as c,C as i}from"./framework-609d4fec.js";const u={},l=n("h1",{id:"await-to-js",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#await-to-js","aria-hidden":"true"},"#"),s(" Await to js")],-1),r={href:"https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/scopsy/await-to-js",target:"_blank",rel:"noopener noreferrer"},d=c(`<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i await-to-js <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> to <span class="token keyword">from</span> <span class="token string">&#39;await-to-js&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// If you use CommonJS (i.e NodeJS environment), it should be:</span>
<span class="token comment">// const to = require(&#39;await-to-js&#39;).default;</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncTaskWithCb</span><span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> err<span class="token punctuation">,</span> user<span class="token punctuation">,</span> saveTask<span class="token punctuation">,</span> notification<span class="token punctuation">;</span>
  
  <span class="token punctuation">[</span>err<span class="token punctuation">,</span> user<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">to</span><span class="token punctuation">(</span>UserModel<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token string">&#39;No user found&#39;</span><span class="token punctuation">)</span><span class="token operator">!</span>
    
  <span class="token punctuation">[</span>err<span class="token punctuation">,</span> savedTask<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">to</span><span class="token punctuation">(</span><span class="token function">TaskModel</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">userId</span><span class="token operator">:</span> user<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token string">&#39;Error occurred while saving task&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">if</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>notificationsEnabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token punctuation">[</span> err <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">to</span><span class="token punctuation">(</span>NotificationService<span class="token punctuation">.</span><span class="token function">sendNotification</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token string">&#39;Task Created&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token string">&#39;Error while sending notification&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
  <span class="token keyword">if</span><span class="token punctuation">(</span>savedTask<span class="token punctuation">.</span>assignedUser<span class="token punctuation">.</span>id <span class="token operator">!==</span> user<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token punctuation">[</span> err<span class="token punctuation">,</span> notification <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">to</span><span class="token punctuation">(</span>NotificationService<span class="token punctuation">.</span><span class="token function">sendNotification</span><span class="token punctuation">(</span>savedTask<span class="token punctuation">.</span>assignedUser<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token string">&#39;Task was created for you&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token string">&#39;Error while sending notification&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> saveTask<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncFunctionWithThrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>err<span class="token punctuation">,</span> user<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">to</span><span class="token punctuation">(</span>UserModel<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;User not found&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span> Promise <span class="token punctuation">}</span></span> <span class="token parameter">promise</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span> Object<span class="token punctuation">=</span> <span class="token punctuation">}</span></span> <span class="token parameter">errorExt</span> - Additional Information you can pass to the err object
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span> Promise <span class="token punctuation">}</span></span>
 */</span>

<span class="token keyword">function</span> <span class="token function">to</span><span class="token punctuation">(</span><span class="token parameter">promise<span class="token punctuation">,</span> errorExt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> data<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>errorExt<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> parsedError <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> err<span class="token punctuation">,</span> errorExt<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>parsedError<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>err<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> to <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> to<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数为<code>promise</code>和可选错误信息对象,</p>`,7);function v(m,b){const a=i("ExternalLinkIcon");return e(),o("div",null,[l,n("p",null,[n("a",r,[s("github"),t(a)])]),n("p",null,[n("a",k,[s("官方博客"),t(a)])]),d])}const w=p(u,[["render",v],["__file","2022-04-12-await-to-js.html.vue"]]);export{w as default};
