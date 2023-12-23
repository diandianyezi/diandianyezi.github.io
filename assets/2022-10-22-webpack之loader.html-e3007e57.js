import{_ as l,W as r,X as t,Z as e,a1 as a,$ as n,a2 as o,C as p}from"./framework-609d4fec.js";const i={},d=o(`<h1 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> Loader</h1><p>用于对模块的源代码进行转换。loader 可以使你在 <code>import</code> 或 &quot;load(加载)&quot; 模块时预处理文件。因此，loader类似于其他构建工具中的 任务task，提供了处理前端构建步骤的得力方式。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 <code>import</code> CSS 文件！</p><h2 id="使用loader" tabindex="-1"><a class="header-anchor" href="#使用loader" aria-hidden="true">#</a> 使用loader</h2><p>两种方式</p><ol><li>配置方式：在配置文件中指定loader；</li><li>内联方式：在每个import语句中显示指定loader。</li></ol><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p><code>module.rules</code>允许你在webpack配置中指定多个loader。这种方式是展示loader的一种简明方式，并且有助于使代码变得简介和易于维护。</p><p>loader从右到左（或从下到上）地取值或执行。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// [style-loader](/loaders/style-loader)</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;style-loader&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// [css-loader](/loaders/css-loader)</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// [sass-loader](/loaders/sass-loader)</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;sass-loader&#39;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内联方式" tabindex="-1"><a class="header-anchor" href="#内联方式" aria-hidden="true">#</a> 内联方式</h3><p>在import语句或任何与import方法同等的引用方式中指定loader。使用 ！将资源中的loader分开。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&#39;style-loader!css-loader?modules!.styles.css&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),c=e("code",null,"import",-1),u={href:"https://webpack.docschina.org/configuration",target:"_blank",rel:"noopener noreferrer"},k=o('<ol><li>使用 ! 前缀，将禁用所有已配置的normal loader</li><li>使用 !! 前缀，将禁用所有已配置的loader(preloader,loader,postloader);</li><li>使用 -! 前缀，将禁用所有已配置的 preloader和loader，但是不禁用 postloader</li></ol><h2 id="loader特性" tabindex="-1"><a class="header-anchor" href="#loader特性" aria-hidden="true">#</a> loader特性</h2><ul><li>支持链式调用。一组链式的loader将按照相反的顺序执行。</li><li>loader 可以是同步的，也可以是异步的。</li><li>loader运行在Nodejs中，并且能够执行任何操作。</li><li>loader 可以通过options对象配置。</li><li>除了常见的通过 <code>package.json</code>的main来将npm 模块导出为loader，还可以在 module.rules 中使用loader字段直接引用一个模块。</li><li>插件 plugin 可以为loader带来更多特性。</li><li>loader能够产生额外的任意文件。</li></ul><p>可以通过loader的预处理函数，为js生态系统提供更多能力。用户现在可以更加灵活地引入细粒度逻辑。</p><h2 id="解析loader" tabindex="-1"><a class="header-anchor" href="#解析loader" aria-hidden="true">#</a> 解析loader</h2>',5),m={href:"https://webpack.docschina.org/concepts/module-resolution/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://webpack.docschina.org/concepts/module-resolution/#module-paths",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"npm install",-1),b=e("code",null,"node_modules",-1);function _(g,y){const s=p("ExternalLinkIcon");return r(),t("div",null,[d,e("p",null,[a("通过为内联 "),c,a(" 语句添加前缀，可以覆盖 "),e("a",u,[a("配置"),n(s)]),a(" 中的所有 loader, preLoader 和 postLoader：")]),k,e("p",null,[a("loader 遵循标准 "),e("a",m,[a("模块解析"),n(s)]),a(" 规则。多数情况下，loader 将从 "),e("a",v,[a("模块路径"),n(s)]),a(" 加载（通常是从 "),h,a(", "),b,a(" 进行加载）。")])])}const x=l(i,[["render",_],["__file","2022-10-22-webpack之loader.html.vue"]]);export{x as default};
