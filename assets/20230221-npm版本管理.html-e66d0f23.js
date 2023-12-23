import{_ as a,W as i,X as c,Z as n,a1 as s,$ as d,a2 as o,C as l}from"./framework-609d4fec.js";const t={},r=n("h1",{id:"npm版本管理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#npm版本管理","aria-hidden":"true"},"#"),s(" npm版本管理")],-1),p=n("h2",{id:"nvm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nvm","aria-hidden":"true"},"#"),s(" nvm")],-1),v={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},u=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ nvm use <span class="token number">16</span>
Now using <span class="token function">node</span> v16.9.1 <span class="token punctuation">(</span>npm v7.21.1<span class="token punctuation">)</span>
$ <span class="token function">node</span> <span class="token parameter variable">-v</span>
v16.9.1
$ nvm use <span class="token number">14</span>
Now using <span class="token function">node</span> v14.18.0 <span class="token punctuation">(</span>npm v6.14.15<span class="token punctuation">)</span>
$ <span class="token function">node</span> <span class="token parameter variable">-v</span>
v14.18.0
$ nvm <span class="token function">install</span> <span class="token number">12</span>
Now using <span class="token function">node</span> v12.22.6 <span class="token punctuation">(</span>npm v6.14.5<span class="token punctuation">)</span>
$ <span class="token function">node</span> <span class="token parameter variable">-v</span>
v12.22.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>独立的软件包，不依赖于node环境</p><p>只适用于linux mac环境，window环境使用nvw-windows。</p><h3 id="安装nvm" tabindex="-1"><a class="header-anchor" href="#安装nvm" aria-hidden="true">#</a> 安装nvm</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh <span class="token operator">|</span> <span class="token function">bash</span>

<span class="token function">wget</span> -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm ls-remote

nvm use <span class="token function">node</span>

nvm run <span class="token function">node</span> <span class="token parameter variable">--version</span> <span class="token comment"># 直接运行某一版本node</span>

nvm <span class="token builtin class-name">exec</span> <span class="token number">4.2</span>.2 <span class="token function">node</span> <span class="token parameter variable">--version</span> <span class="token comment"># 在当前终端的子进程中运行特定版本的Node</span>

nvm <span class="token function">which</span> <span class="token number">4.2</span>.2  <span class="token comment"># 确认某个版本Node的路径</span>

nvm <span class="token function">install</span> iosjs-v3.2.0 <span class="token comment"># 安装Node的其他实现</span>

<span class="token comment"># 快捷命令</span>
nvm <span class="token function">install</span> <span class="token function">node</span> 安装最新版Node

nvm <span class="token function">install</span> iosjs 安装最新版iosjs

nvm <span class="token function">install</span> unstable 安装最新不稳定版本的Node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在安装的时候，<code>nvm</code> 将不同的 <code>node</code> 版本存储到 <code>~/.nvm/&lt;version&gt;/</code> 下，然后修改 <code>$PATH</code>，将指定版本的<code>node</code>路径加入，这样我们调用的 <code>node</code> 命令即是使用指定版本的 <code>node</code>。</p><h2 id="n" tabindex="-1"><a class="header-anchor" href="#n" aria-hidden="true">#</a> n</h2><p>依赖于node环境，需要全局安装；</p><p>只适用于mac和linux环境，不适用于Windows。</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在安装的时候，<code>n</code>会先将指定版本的<code>node</code>存储下来，然后将其复制到我们熟知的路径<code>/usr/local/bin</code>，非常简单明了。当然由于<code>n</code>会操作到非用户目录，所以需要加 <code>sudo</code> 来执行命令。</p><p>但是 ,<code>n</code>会出现全局模块无法更新的问题</p><h2 id="不同点" tabindex="-1"><a class="header-anchor" href="#不同点" aria-hidden="true">#</a> 不同点</h2><ul><li>对全局模块的管理。<code>n</code> 对全局模块毫无作为，因此有可能在切换了 <code>node</code> 版本后发生全局模块执行出错的问题；<code>nvm</code> 的全局模块存在于各自版本的沙箱中，切换版本后需要重新安装，不同版本间也不存在任何冲突。</li><li>关于 <code>node</code> 路径。<code>n</code> 是万年不变的 <code>/usr/local/bin；</code> <code>nvm</code> 需要手动指定路径。</li></ul>`,17);function m(h,b){const e=l("ExternalLinkIcon");return i(),c("div",null,[r,p,n("p",null,[n("a",v,[s("nvm"),d(e)]),s("可以通过使用命令来安装和切换不同的node版本。")]),u])}const f=a(t,[["render",m],["__file","20230221-npm版本管理.html.vue"]]);export{f as default};
