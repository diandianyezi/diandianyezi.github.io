import{_ as n,W as s,X as a,a2 as p}from"./framework-609d4fec.js";const t={},e=p(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="响应式布局" tabindex="-1"><a class="header-anchor" href="#响应式布局" aria-hidden="true">#</a> 响应式布局</h1><p>指的是同一页面在不同屏幕尺寸下有不同的布局。</p><p>缺点：css布局比较重。</p><blockquote><p>响应式设计与自适应设计的区别：响应式开发一套界面，通过检测视口分辨率，针对不同客户端在客户端做代码处理，来展现不同的布局和内容。</p></blockquote><h2 id="实现方案" tabindex="-1"><a class="header-anchor" href="#实现方案" aria-hidden="true">#</a> 实现方案</h2><h3 id="一、媒体查询" tabindex="-1"><a class="header-anchor" href="#一、媒体查询" aria-hidden="true">#</a> 一、媒体查询</h3><p><code>css3</code>媒体查询可以让我们针对不同的媒体类型定义不同的样式，当重置浏览器窗口大小的过程中，页面也会根据浏览器的高度和宽度重新渲染页面。</p><h4 id="移动有限-or-pc优先" tabindex="-1"><a class="header-anchor" href="#移动有限-or-pc优先" aria-hidden="true">#</a> 移动有限 or PC优先</h4><p>移动端优先使用的是 min-width</p><p>PC端优先使用的是max-width</p><h3 id="二、百分比布局" tabindex="-1"><a class="header-anchor" href="#二、百分比布局" aria-hidden="true">#</a> 二、百分比布局</h3><p>例如bootstrap是利用百分比定义元素的宽高，</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* pc width &gt; 1100px */</span>
<span class="token selector">html, body</span> <span class="token punctuation">{</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span><span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">aside</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* ipad pro */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">aside</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 8%<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* ipad */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">aside</span> <span class="token punctuation">{</span>
      <span class="token property">float</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh - 10%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* iphone6 7 8 plus */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 414px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">aside</span> <span class="token punctuation">{</span>
      <span class="token property">float</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 5%<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh - 5%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* iphoneX */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 375px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">aside</span> <span class="token punctuation">{</span>
      <span class="token property">float</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh - 10%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* iphone6 7 8 */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 375px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">aside</span> <span class="token punctuation">{</span>
      <span class="token property">float</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 3%<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh - 3%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* iphone5 */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">aside</span> <span class="token punctuation">{</span>
      <span class="token property">float</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 7%<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh - 7%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="百分比是相对谁的百分比呢" tabindex="-1"><a class="header-anchor" href="#百分比是相对谁的百分比呢" aria-hidden="true">#</a> 百分比是相对谁的百分比呢？？</h4><ul><li><p>子元素的<code>height</code>或者<code>width</code>中使用百分比，是相对于直接父元素；</p></li><li><p>子元素的<code>top</code>和<code>bottom</code>设置百分比，则相对于于直接非<code>static</code>定位的父元素的高度。</p></li><li><p>子元素的<code>left</code>和<code>right</code>设置百分比，则相对于直接非<code>static</code>定位的父元素的宽度。</p></li><li><p>子元素的<code>padding</code>和<code>margin</code>如果设置百分比，不论是垂直方向或者是水平方向，都相对于直接父亲元素的<code>width</code>，而与父元素的height没有关系。</p></li><li><p><code>Border-radius</code> 设置百分比，则是相对于自身的宽度，还有比如<code>translate</code>、<code>background-size</code>等都是相对于自身的</p></li></ul><p>缺点：计算复杂、相对父元素并不是唯一的</p><h3 id="三、rem布局" tabindex="-1"><a class="header-anchor" href="#三、rem布局" aria-hidden="true">#</a> 三、rem布局</h3><p>rem是css3新增的单位，并且移动端的支持度很高。rem是根据根元素html的font-size来决定大小的。所以如果根据rem来实现响应式布局，只需要根据视图容器的大小，动态的改变font-size即可。</p><p>rem响应式的布局思想:</p><ul><li>一般不要给元素设置具体的宽度，但是对于一些小图标可以设定具体宽度值；</li><li>高度值可以设置固定值，设计稿有多大，我们就严格有多大；</li><li>所有设置的固定值都用rem做单位；</li><li>js获取真实屏幕的高度，让其除以设计稿的宽度，算出比例，把之前的基准值按照比例进行重新的设定，这样项目就可以在移动端自适应了。</li></ul><p>缺点：必须通过js动态控制根元素的font-size大小，js与css有一定的耦合性，且必须将改变font-size的代码放在css样式之前。</p><p><code>REM</code>布局也是目前多屏幕适配的最佳方式。默认情况下我们html标签的<code>font-size</code>为16px,我们利用媒体查询，设置在不同设备下的字体大小。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* pc width &gt; 1100px */</span>
<span class="token selector">html</span><span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* ipad pro */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #FF00FF<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 1.4rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* ipad */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 1.3rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* iphone6 7 8 plus */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 414px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 1.25rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* iphoneX */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 375px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #0FF000<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 1.125rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* iphone6 7 8 */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 375px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #0FF000<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* iphone5 */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #0FF000<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 0.75rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、视口单位" tabindex="-1"><a class="header-anchor" href="#四、视口单位" aria-hidden="true">#</a> 四、视口单位</h3><p>css3中引入了一个新的单位vw/vh，与视图窗口有关，vw表示相对于视图窗口的宽度，vh表示相对于视图窗口的高度，除了vw和vh之外，还有vmax和vmin两个相关的单位。各个单位具体的含义如下：</p><table><thead><tr><th>单位</th><th>含义</th></tr></thead><tbody><tr><td>vw</td><td>相对于视窗的宽度，1vw 等于视口宽度的1%，即视窗宽度是100vw</td></tr><tr><td>vh</td><td>相对于视窗的高度，1vh 等于视口高度的1%，即视窗高度是100vh</td></tr><tr><td>vmin</td><td>vw和vh中的较小值</td></tr><tr><td>vmax</td><td>vw和vh中的较大值</td></tr></tbody></table><h4 id="使用视口单位来实现响应式有两种做法" tabindex="-1"><a class="header-anchor" href="#使用视口单位来实现响应式有两种做法" aria-hidden="true">#</a> 使用视口单位来实现响应式有两种做法：</h4><ol><li><p>仅使用vw作为CSS单位</p><ul><li><p>对于设计稿的尺寸转换，我们使用Sass函数编译</p></li><li><p>无论是文本还是布局宽度、间距等都使用vw作为单位</p></li><li><p>1物理像素线，采用tranform属性scale实现</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.mod_grid</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token selector">&amp;::after</span> <span class="token punctuation">{</span>
        // 实现1物理像素的下边框线
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
            <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 50% 0%<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    ...
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>对于需要保持宽高比的图，应该用padding-top实现</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.mod_banner</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token function">percentage</span><span class="token punctuation">(</span>100/700<span class="token punctuation">)</span><span class="token punctuation">;</span> // 使用padding-top
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token selector">img</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>搭配vw和rem</p><ul><li>给根元素发小设置随着视口变化而变化的vw单位，这样可以实现动态改变其大小</li><li>限制根元素字体大小的最大最小值，配合body加上最大宽度和最小宽度</li></ul></li></ol><h3 id="五、图片响应式" tabindex="-1"><a class="header-anchor" href="#五、图片响应式" aria-hidden="true">#</a> 五、图片响应式</h3><ol><li><p>大小自适应，保证图片在不同的屏幕分辨率下出现压缩、拉伸的情况；</p></li><li><p>根据不同的屏幕分辨率和设备像素比来尽可能选择高分辨率的图片，也就是当在小屏幕上不需要高清图或大图，这样我们用小图代替，就可以减少网络带宽了。</p></li><li><p>使用max-width（图片自适应）</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>max-width</code>保证了图片能够随着容器的进行等宽扩充（即保证所有图片最大显示为其自身的 100%。此时，如果包含图片的元素比图片固有宽度小，图片会缩放占满最大可用空间），而<code>height</code>为<code>auto</code>可以保证图片进行等比缩放而不至于失真。</p></li><li><p>使用scrset</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;img srcset=<span class="token string">&quot;photo_w350.jpg 1x, photo_w640.jpg 2x&quot;</span> src=<span class="token string">&quot;photo_w350.jpg&quot;</span> alt=<span class="token string">&quot;&quot;</span>&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果屏幕的dpi = 1的话则加载1倍图，而dpi = 2则加载2倍图，手机和mac基本上dpi都达到了2以上，这样子对于普通屏幕来说不会浪费流量，而对于视网膜屏来说又有高清的体验。</p></li><li><p>使用background-image</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.banner</span><span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/static/large.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 767px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/static/small.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用picture标签</p></li></ol><h2 id="响应式布局的成型方案" tabindex="-1"><a class="header-anchor" href="#响应式布局的成型方案" aria-hidden="true">#</a> 响应式布局的成型方案</h2><p>用rem做字体的适配，用srcset做图片的响应式，宽度可以用rem、flex。栅格系统来实现响应式，可能需要利用媒体查询作为响应式布局的基础，</p><ul><li>设置viewport</li><li>媒体查询</li><li>字体适配</li><li>百分比布局</li><li>图片的适配</li><li>结合flex、grid、BFC，栅格系统等已经成型的方案。</li></ul>`,34),c=[e];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","响应式布局.html.vue"]]);export{d as default};
