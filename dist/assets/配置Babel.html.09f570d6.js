import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as i,a as s,d as e,b as n,e as o,r as p}from"./app.9a90174f.js";const l={},r=s("h2",{id:"\u914D\u7F6Ebabel",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u914D\u7F6Ebabel","aria-hidden":"true"},"#"),n(" \u914D\u7F6EBabel")],-1),d=n("\u6240\u6709 Babel API "),u={href:"https://www.babeljs.cn/docs/options",target:"_blank",rel:"noopener noreferrer"},b=n("\u53C2\u6570"),v=n(" \u90FD\u53EF\u4EE5\u88AB\u914D\u7F6E\u3002\u7136\u800C\uFF0C\u5982\u679C\u8BE5\u53C2\u6570\u9700\u8981\u7528\u5230 JavaScript \u4EE3\u7801\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u4F7F\u7528 JavaScript \u4EE3\u7801\u7248\u7684 "),h={href:"https://www.babeljs.cn/docs/config-files",target:"_blank",rel:"noopener noreferrer"},k=n("\u914D\u7F6E\u6587\u4EF6"),_=n("\u3002"),m=o('<h3 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h3><ul><li>monorepo\u6A21\u5F0F</li><li>\u9700\u8981\u7F16\u8BD1node_modules</li></ul><p>\u53EF\u4EE5\u4F7F\u7528 <code>babel.config.json</code></p><ul><li>\u914D\u7F6E\u6587\u4EF6\u4EC5\u9002\u7528\u4E8E\u9879\u76EE\u67D0\u4E2A\u90E8\u5206</li></ul><p>\u53EF\u4EE5\u4F7F\u7528<code>.babelrc.json</code> \u6587\u4EF6</p><h4 id="babel-config-json" tabindex="-1"><a class="header-anchor" href="#babel-config-json" aria-hidden="true">#</a> babel.config.json</h4>',6),f=n("\u8BF7\u53C2\u9605 "),g={href:"https://www.babeljs.cn/docs/config-files#project-wide-configuration",target:"_blank",rel:"noopener noreferrer"},j=s("code",null,"babel.config.json",-1),w=n(" \u6587\u6863"),x=n(" \u4EE5\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u914D\u7F6E\u53C2\u6570\u7684\u4FE1\u606F\u3002"),q=s("h4",{id:"babelrc-json",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#babelrc-json","aria-hidden":"true"},"#"),n(" .babelrc.json")],-1),y=n("\u8BF7\u53C2\u9605 "),B={href:"https://www.babeljs.cn/docs/config-files#file-relative-configuration",target:"_blank",rel:"noopener noreferrer"},I=n(".babelrc \u6587\u6863"),N=n(" \u4EE5\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u914D\u7F6E\u53C2\u6570\u7684\u4FE1\u606F\u3002"),S=o(`<p>\u8FD8\u53EF\u4EE5\u9009\u62E9\u5C06<code>.babelrc.json</code>\u7684\u914D\u7F6E\u4FE1\u606F\u4F5C\u4E3A <code>babel</code>\u952E\u7684\u503C <code>\u6DFB\u52A0\u5230 </code>package.json\`\u6587\u4EF6</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-package&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;babel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> ... <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> ... <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7528javascrript\u7F16\u5199\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7528javascrript\u7F16\u5199\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u7528JavaScrript\u7F16\u5199\u914D\u7F6E\u6587\u4EF6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> presets <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> plugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment">// \u53EF\u4EE5\u8C03\u7528 Nodejs\u7684\u4EFB\u4F55API</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">[</span><span class="token string">&quot;ENV&quot;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;prod&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> presets<span class="token punctuation">,</span> plugins <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528cli-babel-cli" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528cli-babel-cli" aria-hidden="true">#</a> \u4F7F\u7528CLI(<code>@babel/cli</code>)</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>babel --plugins @babel/plugin-transform-arrow-functions script.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),C=n("\u8BF7\u53C2\u9605 "),E={href:"https://www.babeljs.cn/docs/babel-cli",target:"_blank",rel:"noopener noreferrer"},L=n("babel-cli \u6587\u6863"),O=n(" \u4EE5\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u914D\u7F6E\u53C2\u6570\u7684\u4FE1\u606F\u3002"),A=o(`<h3 id="\u4F7F\u7528api-babel-core" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528api-babel-core" aria-hidden="true">#</a> \u4F7F\u7528API(<code>@babel/core</code>)</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@babel/core&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">transformSync</span><span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-transform-arrow-functions&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),V=n("\u8BF7\u53C2\u9605 "),F={href:"https://www.babeljs.cn/docs/babel-core",target:"_blank",rel:"noopener noreferrer"},P=n("babel-core \u6587\u6863"),J=n(" \u4EE5\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u914D\u7F6E\u53C2\u6570\u7684\u4FE1\u606F\u3002"),W=o(`<h3 id="print-effective-configs" tabindex="-1"><a class="header-anchor" href="#print-effective-configs" aria-hidden="true">#</a> Print effective configs</h3><p>You can tell Babel to print effective configs on a given input path</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># *nix or WSL</span>
<span class="token assign-left variable">BABEL_SHOW_CONFIG_FOR</span><span class="token operator">=</span>./src/myComponent.jsx <span class="token function">npm</span> start

<span class="token comment"># or</span>
<span class="token variable">$env</span>:BABEL_SHOW_CONFIG_FOR <span class="token operator">=</span> <span class="token string">&quot;.\\src\\myComponent.jsx&quot;</span><span class="token punctuation">;</span> <span class="token function">npm</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Babel will print effective config sources ordered by ascending priority. Using the example above, the priority is:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>babel.config.json &lt; .babelrc &lt; programmatic options from @babel/cli

Copy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In other words, <code>babel.config.json</code> is overwritten by <code>.babelrc</code>, and <code>.babelrc</code> is overwritten by programmatic options.</p>`,6);function G(H,R){const a=p("ExternalLinkIcon");return c(),i("div",null,[r,s("p",null,[d,s("a",u,[b,e(a)]),v,s("a",h,[k,e(a)]),_]),m,s("p",null,[f,s("a",g,[j,w,e(a)]),x]),q,s("p",null,[y,s("a",B,[I,e(a)]),N]),S,s("p",null,[C,s("a",E,[L,e(a)]),O]),A,s("p",null,[V,s("a",F,[P,e(a)]),J]),W])}var Y=t(l,[["render",G],["__file","\u914D\u7F6EBabel.html.vue"]]);export{Y as default};
