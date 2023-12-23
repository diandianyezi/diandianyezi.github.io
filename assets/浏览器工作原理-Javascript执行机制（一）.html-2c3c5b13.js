import{_ as a,W as n,X as s,a2 as e}from"./framework-609d4fec.js";const t={},r=e(`<h2 id="变量提升-hoisting" tabindex="-1"><a class="header-anchor" href="#变量提升-hoisting" aria-hidden="true">#</a> 变量提升 Hoisting</h2><p>是指在Javascript代码执行过程中，JavaScript引擎吧变量的声明部分和函数的声明部分提升到代码开头的行为。变量被提升后，会给变量设置默认值，这个默认值就是undefined。</p><h3 id="javascript代码的执行流程" tabindex="-1"><a class="header-anchor" href="#javascript代码的执行流程" aria-hidden="true">#</a> JavaScript代码的执行流程</h3><p><img src="https://raw.githubusercontent.com/diandianyezi/typora-images/master/img/649c6e3b5509ffd40e13ce9c91b3d91e.png" alt="img"></p><h4 id="_1-编译阶段" tabindex="-1"><a class="header-anchor" href="#_1-编译阶段" aria-hidden="true">#</a> 1. 编译阶段</h4><p>执行上下文和可执行代码</p><p>执行上下文是JS执行一段代码时的运行环境（this，变量、对象以及函数等）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">VariableEnvironment</span><span class="token operator">:</span>
     myname <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> 
     showName <span class="token operator">-</span><span class="token operator">&gt;</span><span class="token keyword">function</span> <span class="token operator">:</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myname<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>js引擎会为变量声明创建 变量环境对象存储在执行上下文中，其他代码会被编译为字节码</p><h4 id="_2-执行阶段" tabindex="-1"><a class="header-anchor" href="#_2-执行阶段" aria-hidden="true">#</a> 2. 执行阶段</h4><p>按顺序一行一行执行</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>JavaScript代码执行过程中，需要先做<strong>变量提升</strong>，而之所以需要实现变量提升，是因为JavaScript代码在执行之前需要先编译。 在编译阶段，<strong>变量和函数</strong>会被存放到变量环境中，变量的默认值会被设置为undefined；在代码执行阶段，JavaScript引擎会从变量环境中去查找自定义的变量和函数。</p>`,13),i=[r];function p(o,c){return n(),s("div",null,i)}const l=a(t,[["render",p],["__file","浏览器工作原理-Javascript执行机制（一）.html.vue"]]);export{l as default};
