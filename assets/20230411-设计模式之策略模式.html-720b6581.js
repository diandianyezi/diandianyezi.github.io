const n=JSON.parse(`{"key":"v-3f73c939","path":"/article/20230411-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B9%8B%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F.html","title":"设计模式之策略模式","lang":"zh-CN","frontmatter":{"title":"设计模式之策略模式","date":"2023-04-08T00:00:00.000Z","description":"策略模式 就是定义一系列算法，把他们一个个封装起来，并且使他们可以相互替换； 根据不同参数命中不同策略。 应用案例：表单验证。 至少分为两部分： 策略类（可变），策略类封装了具体的算法，并负责具体的计算过程 环境类（不可变），接口客户的请求，随后将请求委托给某一个策略类 const strategies = { // 验证是否为空 isNoEmpty: function(value, errorMsg) { if(value.trim() === '') { return errorMsg } }, // 验证最小长度 minLength: function(value, length, errorMsg) { if(value.trim().length &lt; length) { return errorMsg; } }, // 验证最大长度 maxLength: function(value, length, errorMsg) { if(value.length &gt; length) { return errorMsg } }, // 验证手机号 isMobile: function(value, errorMsg) { if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[7]|18[0|1|2|3|5|6|7|8|9])\\\\d{8}$/.test(value)) { return errorMsg } } } // 验证类 class Validator { constructor() { this.cache = []; this.errList = []; }; add(value, rules) { for(let i = 0; rule; (rule = rules[i+1])) { let strategyArray = rule.strategy.split(':'); let errorMsg = rule.errorMsg; this.cache.push(() =&gt; { let strategy = strategyArray.shift(); strategyArray.unshift(value); strategyArray.push(errorMsg); let error = strategies[strategy](...strategyArray); if(error) { this.errList.push(error); } }) } } start() { for (let i = 0; validatorFunc; (validatorFunc = this.cache[i])) { validatorFunc(); } return this.errList; } } let validatorFunc = function(info) { let validator = new Validator(); validator.add(info.name, [ { strategy: 'isNoEmpty', errorMsg: '用户名不可为空', }, { strategy: 'minLength:2', errorMsg: '用户名长度不能小于2位', } ]) validator.add(info.password, [ { strategy: \\"minLength:6\\", errorMsg: \\"密码长度不能小于6位\\" } ]) validator.add(info.phoneNumber, [ { strategy: \\"isMobile\\", errorMsg: \\"请输入正确的手机号码格式\\" } ]); return validator.start(); } // 需要验证表单的对象 let userInfo = { userName: \\"王\\", password: \\"1234\\", phoneNumber: \\"666\\" }; let errorMsg = validataFunc(userInfo); console.log(errorMsg); // ['用户名长度不能小于2位', '密码长度不能小于6位', '请输入正确的手机号码格式']","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.netlify.app/article/20230411-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B9%8B%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"Yezi’s Blog"}],["meta",{"property":"og:title","content":"设计模式之策略模式"}],["meta",{"property":"og:description","content":"策略模式 就是定义一系列算法，把他们一个个封装起来，并且使他们可以相互替换； 根据不同参数命中不同策略。 应用案例：表单验证。 至少分为两部分： 策略类（可变），策略类封装了具体的算法，并负责具体的计算过程 环境类（不可变），接口客户的请求，随后将请求委托给某一个策略类 const strategies = { // 验证是否为空 isNoEmpty: function(value, errorMsg) { if(value.trim() === '') { return errorMsg } }, // 验证最小长度 minLength: function(value, length, errorMsg) { if(value.trim().length &lt; length) { return errorMsg; } }, // 验证最大长度 maxLength: function(value, length, errorMsg) { if(value.length &gt; length) { return errorMsg } }, // 验证手机号 isMobile: function(value, errorMsg) { if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[7]|18[0|1|2|3|5|6|7|8|9])\\\\d{8}$/.test(value)) { return errorMsg } } } // 验证类 class Validator { constructor() { this.cache = []; this.errList = []; }; add(value, rules) { for(let i = 0; rule; (rule = rules[i+1])) { let strategyArray = rule.strategy.split(':'); let errorMsg = rule.errorMsg; this.cache.push(() =&gt; { let strategy = strategyArray.shift(); strategyArray.unshift(value); strategyArray.push(errorMsg); let error = strategies[strategy](...strategyArray); if(error) { this.errList.push(error); } }) } } start() { for (let i = 0; validatorFunc; (validatorFunc = this.cache[i])) { validatorFunc(); } return this.errList; } } let validatorFunc = function(info) { let validator = new Validator(); validator.add(info.name, [ { strategy: 'isNoEmpty', errorMsg: '用户名不可为空', }, { strategy: 'minLength:2', errorMsg: '用户名长度不能小于2位', } ]) validator.add(info.password, [ { strategy: \\"minLength:6\\", errorMsg: \\"密码长度不能小于6位\\" } ]) validator.add(info.phoneNumber, [ { strategy: \\"isMobile\\", errorMsg: \\"请输入正确的手机号码格式\\" } ]); return validator.start(); } // 需要验证表单的对象 let userInfo = { userName: \\"王\\", password: \\"1234\\", phoneNumber: \\"666\\" }; let errorMsg = validataFunc(userInfo); console.log(errorMsg); // ['用户名长度不能小于2位', '密码长度不能小于6位', '请输入正确的手机号码格式']"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-28T09:59:05.000Z"}],["meta",{"property":"article:published_time","content":"2023-04-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-28T09:59:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式之策略模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-28T09:59:05.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1682675945000,"updatedTime":1682675945000,"contributors":[{"name":"diandian","email":"1092923594@qq.com","commits":1}]},"readingTime":{"minutes":1.39,"words":417},"filePathRelative":"article/20230411-设计模式之策略模式.md","localizedDate":"2023年4月8日","excerpt":"<h1> 策略模式</h1>\\n<p>就是定义一系列算法，把他们一个个封装起来，并且使他们可以相互替换；</p>\\n<p>根据不同参数命中不同策略。</p>\\n<p>应用案例：表单验证。</p>\\n<p>至少分为两部分：</p>\\n<ul>\\n<li>策略类（可变），策略类封装了具体的算法，并负责具体的计算过程</li>\\n<li>环境类（不可变），接口客户的请求，随后将请求委托给某一个策略类</li>\\n</ul>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> strategies <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 验证是否为空</span>\\n  <span class=\\"token function-variable function\\">isNoEmpty</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">value<span class=\\"token punctuation\\">,</span> errorMsg</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>value<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">trim</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">===</span> <span class=\\"token string\\">''</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">return</span> errorMsg\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token comment\\">// 验证最小长度</span>\\n  <span class=\\"token function-variable function\\">minLength</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">value<span class=\\"token punctuation\\">,</span> length<span class=\\"token punctuation\\">,</span> errorMsg</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>value<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">trim</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">&lt;</span> length<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">return</span> errorMsg<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token comment\\">// 验证最大长度</span>\\n  <span class=\\"token function-variable function\\">maxLength</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">value<span class=\\"token punctuation\\">,</span> length<span class=\\"token punctuation\\">,</span> errorMsg</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>value<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">&gt;</span> length<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">return</span> errorMsg\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token comment\\">// 验证手机号</span>\\n  <span class=\\"token function-variable function\\">isMobile</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">value<span class=\\"token punctuation\\">,</span> errorMsg</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span><span class=\\"token regex\\"><span class=\\"token regex-delimiter\\">/</span><span class=\\"token regex-source language-regex\\">^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[7]|18[0|1|2|3|5|6|7|8|9])\\\\d{8}$</span><span class=\\"token regex-delimiter\\">/</span></span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">test</span><span class=\\"token punctuation\\">(</span>value<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">return</span> errorMsg\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 验证类</span>\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Validator</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token function\\">constructor</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>cache <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>errList <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">value<span class=\\"token punctuation\\">,</span> rules</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> rule<span class=\\"token punctuation\\">;</span> <span class=\\"token punctuation\\">(</span>rule <span class=\\"token operator\\">=</span> rules<span class=\\"token punctuation\\">[</span>i<span class=\\"token operator\\">+</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">let</span> strategyArray <span class=\\"token operator\\">=</span> rule<span class=\\"token punctuation\\">.</span>strategy<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">split</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">':'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">let</span> errorMsg <span class=\\"token operator\\">=</span> rule<span class=\\"token punctuation\\">.</span>errorMsg<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>cache<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">let</span> strategy <span class=\\"token operator\\">=</span> strategyArray<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">shift</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        strategyArray<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">unshift</span><span class=\\"token punctuation\\">(</span>value<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        strategyArray<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>errorMsg<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token keyword\\">let</span> error <span class=\\"token operator\\">=</span> strategies<span class=\\"token punctuation\\">[</span>strategy<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">...</span>strategyArray<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>error<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n          <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>errList<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>error<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token function\\">start</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> validatorFunc<span class=\\"token punctuation\\">;</span> <span class=\\"token punctuation\\">(</span>validatorFunc <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>cache<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token function\\">validatorFunc</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>errList<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">let</span> <span class=\\"token function-variable function\\">validatorFunc</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">info</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> validator <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Validator</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  validator<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span>info<span class=\\"token punctuation\\">.</span>name<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span>\\n    <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">strategy</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'isNoEmpty'</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">errorMsg</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'用户名不可为空'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">strategy</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'minLength:2'</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">errorMsg</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'用户名长度不能小于2位'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n  validator<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span>info<span class=\\"token punctuation\\">.</span>password<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span>\\n    <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">strategy</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"minLength:6\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">errorMsg</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"密码长度不能小于6位\\"</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n\\n  validator<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span>info<span class=\\"token punctuation\\">.</span>phoneNumber<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span>\\n    <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">strategy</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"isMobile\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">errorMsg</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"请输入正确的手机号码格式\\"</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">return</span> validator<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">start</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 需要验证表单的对象</span>\\n<span class=\\"token keyword\\">let</span> userInfo <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">userName</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"王\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">password</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"1234\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">phoneNumber</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"666\\"</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">let</span> errorMsg <span class=\\"token operator\\">=</span> <span class=\\"token function\\">validataFunc</span><span class=\\"token punctuation\\">(</span>userInfo<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>errorMsg<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// ['用户名长度不能小于2位', '密码长度不能小于6位', '请输入正确的手机号码格式']</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
