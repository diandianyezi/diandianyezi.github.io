import{_ as n,W as s,X as a,a2 as t}from"./framework-609d4fec.js";const p={},e=t(`<h1 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h1><p>就是定义一系列算法，把他们一个个封装起来，并且使他们可以相互替换；</p><p>根据不同参数命中不同策略。</p><p>应用案例：表单验证。</p><p>至少分为两部分：</p><ul><li>策略类（可变），策略类封装了具体的算法，并负责具体的计算过程</li><li>环境类（不可变），接口客户的请求，随后将请求委托给某一个策略类</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> strategies <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 验证是否为空</span>
  <span class="token function-variable function">isNoEmpty</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> errorMsg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> errorMsg
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 验证最小长度</span>
  <span class="token function-variable function">minLength</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> length<span class="token punctuation">,</span> errorMsg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">&lt;</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> errorMsg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 验证最大长度</span>
  <span class="token function-variable function">maxLength</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> length<span class="token punctuation">,</span> errorMsg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> errorMsg
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 验证手机号</span>
  <span class="token function-variable function">isMobile</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> errorMsg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[7]|18[0|1|2|3|5|6|7|8|9])\\d{8}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> errorMsg
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 验证类</span>
<span class="token keyword">class</span> <span class="token class-name">Validator</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cache <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>errList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> rules</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> rule<span class="token punctuation">;</span> <span class="token punctuation">(</span>rule <span class="token operator">=</span> rules<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> strategyArray <span class="token operator">=</span> rule<span class="token punctuation">.</span>strategy<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> errorMsg <span class="token operator">=</span> rule<span class="token punctuation">.</span>errorMsg<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> strategy <span class="token operator">=</span> strategyArray<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        strategyArray<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        strategyArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>errorMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> error <span class="token operator">=</span> strategies<span class="token punctuation">[</span>strategy<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>strategyArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>errList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> validatorFunc<span class="token punctuation">;</span> <span class="token punctuation">(</span>validatorFunc <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">validatorFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>errList<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">validatorFunc</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> validator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Validator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  validator<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">strategy</span><span class="token operator">:</span> <span class="token string">&#39;isNoEmpty&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">errorMsg</span><span class="token operator">:</span> <span class="token string">&#39;用户名不可为空&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">strategy</span><span class="token operator">:</span> <span class="token string">&#39;minLength:2&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">errorMsg</span><span class="token operator">:</span> <span class="token string">&#39;用户名长度不能小于2位&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
  validator<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>password<span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">strategy</span><span class="token operator">:</span> <span class="token string">&quot;minLength:6&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">errorMsg</span><span class="token operator">:</span> <span class="token string">&quot;密码长度不能小于6位&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>

  validator<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>phoneNumber<span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">strategy</span><span class="token operator">:</span> <span class="token string">&quot;isMobile&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">errorMsg</span><span class="token operator">:</span> <span class="token string">&quot;请输入正确的手机号码格式&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> validator<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 需要验证表单的对象</span>
<span class="token keyword">let</span> userInfo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">userName</span><span class="token operator">:</span> <span class="token string">&quot;王&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&quot;1234&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">phoneNumber</span><span class="token operator">:</span> <span class="token string">&quot;666&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> errorMsg <span class="token operator">=</span> <span class="token function">validataFunc</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>errorMsg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;用户名长度不能小于2位&#39;, &#39;密码长度不能小于6位&#39;, &#39;请输入正确的手机号码格式&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","20230411-设计模式之策略模式.html.vue"]]);export{r as default};
