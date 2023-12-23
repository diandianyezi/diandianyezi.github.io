import{_ as t,W as p,X as o,Z as n,a1 as s,$ as c,a2 as a,C as i}from"./framework-609d4fec.js";const l={},r=a('<h2 id="vuex是什么" tabindex="-1"><a class="header-anchor" href="#vuex是什么" aria-hidden="true">#</a> Vuex是什么？</h2><p>专为vue应用程序开发的<strong>状态管理模式</strong>。采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。</p><h4 id="什么是状态管理模式" tabindex="-1"><a class="header-anchor" href="#什么是状态管理模式" aria-hidden="true">#</a> 什么是状态管理模式？</h4><p>单向数据流 如下所示：</p><p><img src="https://raw.githubusercontent.com/diandianyezi/typora-images/master/img/image-20210914092652030.png" alt="image-20210914092652030"></p><p>当遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏：</p><ul><li>多个视图依赖同一状态；</li><li>来自不同视图的行为需要变更同一状态。</li></ul><p>传参方法对于多层嵌套的组件会非常繁琐，对于兄弟组件无能为力。</p><p>以全局<strong>单例模式</strong>管理 组件的共享状态。</p><p>通过定义和隔离状态管理中的各种概念并通过强制规则维持视图和状态间的独立性，我们的代码将会变得更结构化且易维护。借鉴了Flux、Redux。</p><p><img src="https://raw.githubusercontent.com/diandianyezi/typora-images/master/img/image-20210914105942671.png" alt="image-20210914105942671"></p><h4 id="什么情况下应该使用vuex" tabindex="-1"><a class="header-anchor" href="#什么情况下应该使用vuex" aria-hidden="true">#</a> 什么情况下应该使用Vuex？</h4>',12),u={href:"https://cn.vuejs.org/v2/guide/state-management.html#%E7%AE%80%E5%8D%95%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E8%B5%B7%E6%AD%A5%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},d=a(`<h5 id="简单的store模式" tabindex="-1"><a class="header-anchor" href="#简单的store模式" aria-hidden="true">#</a> 简单的store模式</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> store <span class="token operator">=</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>重要的是，注意你不应该在 action 中 替换原始的状态对象 - 组件和 store 需要引用同一个共享对象，变更才能够被观察到。</p></blockquote><h4 id="安装使用" tabindex="-1"><a class="header-anchor" href="#安装使用" aria-hidden="true">#</a> 安装使用</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm install <span class="token operator">--</span>save vuex

<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h5><p>依赖Promise，可使用一个polyfill库 如es6-promise</p><p>核心就是store 仓库，包含应用中的大部分状态state。</p><p>Vuex和单纯的全局对象有以下两点不同：</p><ol><li>Vuex的状态存储是响应式的。store中的状态发生变化，那么相应组件也会得到更新。</li><li>不能直接修改store中的状态。改变store中的状态唯一途径就是显式提交mutation。这样使得我们可以方便地追踪每一个状态的变化。</li></ol><h5 id="最简单的store" tabindex="-1"><a class="header-anchor" href="#最简单的store" aria-hidden="true">#</a> 最简单的Store</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
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

<span class="token comment">// 为了在组件中访问this.$store 属性，需要为Vue实例提供创建好的store，Vuex提供一个从根组件向所有子组件，以store选项的方式“注入”store的机制。</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">store</span><span class="token operator">:</span> store<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。触发变化也仅仅是在组件的 methods 中提交 mutation</p><h4 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h4><h5 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> state</h5><p>使用<strong>单一状态树</strong>，用一个对象包含了全部的应用层级状态，作为 唯一数据源而存在。每一个应用仅仅包含一个store实例。</p><h6 id="在组件中获取vuex状态" tabindex="-1"><a class="header-anchor" href="#在组件中获取vuex状态" aria-hidden="true">#</a> 在组件中获取Vuex状态</h6><p>由于状态存储是响应式的，可使用计算属性返回某个状态。</p><p>Vuex 通过 <code>store</code> 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 <code>Vue.use(Vuex)</code>），子组件通过 <code>this.$store</code>访问store</p><h6 id="mapstate辅助函数" tabindex="-1"><a class="header-anchor" href="#mapstate辅助函数" aria-hidden="true">#</a> mapState辅助函数</h6><p>当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 <code>mapState</code> 辅助函数帮助我们生成计算属性</p><h5 id="getters" tabindex="-1"><a class="header-anchor" href="#getters" aria-hidden="true">#</a> Getters</h5><p>Vuex允许我们在store中定义getter，就像计算属性一样，getter的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。</p><p>接收<code>state</code>作为其第一个参数：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="通过属性访问" tabindex="-1"><a class="header-anchor" href="#通过属性访问" aria-hidden="true">#</a> 通过属性访问</h6><p>Getters会暴露为<code>store.getters</code>对象，你可以以属性的形式访问这些值：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>doneTodos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以接受其他getter作为第二个参数：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token function-variable function">doneTodosCount</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getters</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> getters<span class="token punctuation">.</span>doneTodos<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意，getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的。</p></blockquote><h6 id="通过方法访问" tabindex="-1"><a class="header-anchor" href="#通过方法访问" aria-hidden="true">#</a> 通过方法访问</h6><p>也可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token function-variable function">getTodoById</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=&gt;</span> todo<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span><span class="token function">getTodoById</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意，getter在通过方法访问时，每次都会去进行调用，而不会缓存结果。</p></blockquote><h6 id="mapgetters-辅助函数" tabindex="-1"><a class="header-anchor" href="#mapgetters-辅助函数" aria-hidden="true">#</a> mapGetters 辅助函数</h6><p><code>mapGetters</code>辅助函数仅仅是将store中的getter映射到局部计算属性：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapGetters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 使用对象展开运算符将 getter 混入 computed 对象中</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">&#39;doneTodosCount&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;anotherGetter&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="mutations" tabindex="-1"><a class="header-anchor" href="#mutations" aria-hidden="true">#</a> Mutations</h5><p>更改state的唯一方法就是提交mutation。Vuex中的mutation非常类似于事件：每个mutation都有一个字符串的<strong>事件类型</strong> 和一个<strong>回调函数</strong>。这个回调函数就是我们实际进行状态更改的地方，并且它会接受state作为第一个参数：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 变更状态</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41);function k(v,m){const e=i("ExternalLinkIcon");return p(),o("div",null,[r,n("p",null,[s("中大型单页应用可使用Vuex，小型单页应用可使用简单的"),n("a",u,[s("store模式"),c(e)])]),d])}const h=t(l,[["render",k],["__file","2022-08-13-vuex.html.vue"]]);export{h as default};
