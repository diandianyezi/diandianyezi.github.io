import{_ as p,W as t,X as e,Z as n,a1 as s,$ as o,a2 as c,C as l}from"./framework-609d4fec.js";const i={},u={href:"https://leetcode-cn.com/problems/find-median-from-data-stream/",target:"_blank",rel:"noopener noreferrer"},k=c(`<blockquote><p>中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。</p><p>例如，</p><p>[2,3,4] 的中位数是 3</p><p>[2,3] 的中位数是 (2 + 3) / 2 = 2.5</p><p>设计一个支持以下两种操作的数据结构：</p><p>void addNum(int num) - 从数据流中添加一个整数到数据结构中。 double findMedian() - 返回目前所有元素的中位数。</p><p>来源：力扣（LeetCode） 链接：https://leetcode-cn.com/problems/find-median-from-data-stream 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p></blockquote><p>解法：</p><p>最大堆和最小堆</p><h2 id="堆" tabindex="-1"><a class="header-anchor" href="#堆" aria-hidden="true">#</a> 堆</h2><p>堆是一棵树，其每个节点都有一个键值，且每个节点的键值都大于等于或者小于等于其父亲的值。</p><p>大于等于父亲的值 被称为小跟堆，否则小根堆。</p><p>小根堆主要支持的操作有：插入一个数、查询最小值、删除最小值、合并两个堆、减小一个元素的值。</p><h2 id="二叉堆" tabindex="-1"><a class="header-anchor" href="#二叉堆" aria-hidden="true">#</a> 二叉堆</h2><p>完全二叉树</p><h3 id="插入操作" tabindex="-1"><a class="header-anchor" href="#插入操作" aria-hidden="true">#</a> 插入操作</h3><p>保证插入后也是完全二叉树，</p><p><strong>向上调整</strong>：如果这个节点的权值大于它父亲的权值，就交换，重复次过程知道哦不满足或者到根。</p><h4 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h4><p>O(logN)</p><h3 id="删除操作" tabindex="-1"><a class="header-anchor" href="#删除操作" aria-hidden="true">#</a> 删除操作</h3><p><strong>向下调整</strong>：如果直接删除节点。会变成两个堆，不符合条件，我们直接将根节点和最后一个元素交换，然后删除在最后的根节点，然后向下调整堆</p><h4 id="时间复杂度-1" tabindex="-1"><a class="header-anchor" href="#时间复杂度-1" aria-hidden="true">#</a> 时间复杂度</h4><p>O(logN)</p><h3 id="减小某个点的权值" tabindex="-1"><a class="header-anchor" href="#减小某个点的权值" aria-hidden="true">#</a> 减小某个点的权值</h3><p>直接修改后，向上调整一次即可，时间复杂度为O(logN)</p><h3 id="核心操作实现" tabindex="-1"><a class="header-anchor" href="#核心操作实现" aria-hidden="true">#</a> 核心操作实现</h3><p>向上调整和向下调整</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MedianFinder</span> <span class="token punctuation">{</span>
    maxHeap<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 存放小的那批数</span>
    minHeap<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 存放大的那批数</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>minHeap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>maxHeap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// </span>
    <span class="token function">up</span><span class="token punctuation">(</span>flag<span class="token operator">=</span><span class="token string">&#39;max&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 插入就向上调整</span>
        <span class="token keyword">let</span> arr <span class="token operator">=</span> flag <span class="token operator">===</span> <span class="token string">&#39;max&#39;</span> <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxHeap <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minHeap
        <span class="token keyword">let</span> x <span class="token operator">=</span> arr<span class="token punctuation">.</span>length

        <span class="token keyword">while</span><span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span>  p <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>x <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>flag <span class="token operator">===</span> <span class="token string">&#39;max&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>p <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>p <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>x<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>x<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>p <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>p <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>x<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>p <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>x<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>x<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>p <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            x <span class="token operator">=</span> p
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">down</span><span class="token punctuation">(</span>flag<span class="token operator">=</span><span class="token string">&#39;max&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 删除了顶部元素就向下调整</span>
        <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">[</span>flag <span class="token operator">+</span> <span class="token string">&#39;Heap&#39;</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token keyword">let</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
        <span class="token keyword">while</span><span class="token punctuation">(</span>x <span class="token operator">*</span> <span class="token number">2</span><span class="token operator">&lt;=</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> c <span class="token operator">=</span> x <span class="token operator">*</span> <span class="token number">2</span>
            <span class="token comment">// 默认最大堆</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>flag <span class="token operator">===</span> <span class="token string">&#39;max&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>c <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;=</span> len <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>c <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span> c<span class="token operator">++</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>c<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> arr<span class="token punctuation">[</span>x<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>c <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;=</span> len <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>c <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span> c<span class="token operator">++</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>c<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> arr<span class="token punctuation">[</span>x<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>c<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>x<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>x<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>c<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
            x <span class="token operator">=</span> c
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">addNum</span><span class="token punctuation">(</span>num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> len1 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxHeap<span class="token punctuation">.</span>length
        <span class="token keyword">const</span> len2 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minHeap<span class="token punctuation">.</span>length

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>len1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>maxHeap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>len2 <span class="token operator">&amp;&amp;</span> num <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxHeap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>minHeap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>maxHeap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>maxHeap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> num
                <span class="token keyword">return</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxHeap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> num <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minHeap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 插入到</span>
            <span class="token keyword">this</span><span class="token punctuation">[</span>len1 <span class="token operator">&gt;</span> len2 <span class="token operator">?</span> <span class="token string">&#39;minHeap&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;maxHeap&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
            <span class="token comment">// 调整哪个堆</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>len1 <span class="token operator">&gt;</span> len2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 调整minHeap</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">up</span><span class="token punctuation">(</span><span class="token string">&#39;min&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// 调整maxHeap</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">up</span><span class="token punctuation">(</span><span class="token string">&#39;max&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxHeap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>len1<span class="token operator">&gt;</span>len2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>minHeap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>maxHeap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>maxHeap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> num
                <span class="token comment">// 调整两个堆</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">up</span><span class="token punctuation">(</span><span class="token string">&#39;min&#39;</span><span class="token punctuation">)</span>
                <span class="token comment">// 向下调整max</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">down</span><span class="token punctuation">(</span><span class="token string">&#39;max&#39;</span><span class="token punctuation">)</span>
                <span class="token comment">// console.info(this.maxHeap, this.minHeap)</span>
            <span class="token punctuation">}</span>  <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>maxHeap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">up</span><span class="token punctuation">(</span><span class="token string">&#39;max&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxHeap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>len2 <span class="token operator">&gt;</span> len1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>maxHeap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>minHeap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>minHeap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> num
                <span class="token comment">// 调整两个堆</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">up</span><span class="token punctuation">(</span><span class="token string">&#39;max&#39;</span><span class="token punctuation">)</span>
                <span class="token comment">// 向下调整min</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">down</span><span class="token punctuation">(</span><span class="token string">&#39;min&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>minHeap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">up</span><span class="token punctuation">(</span><span class="token string">&#39;min&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// console.info(this.maxHeap, this.minHeap)</span>
    <span class="token punctuation">}</span>

    <span class="token function">findMedian</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> len1 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxHeap<span class="token punctuation">.</span>length
        <span class="token keyword">const</span> len2 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minHeap<span class="token punctuation">.</span>length
        <span class="token comment">// console.info(this.maxHeap, len1, this.minHeap, len2)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>len1 <span class="token operator">===</span> len2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>maxHeap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minHeap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span>  <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span>len1 <span class="token operator">&gt;</span> len2 <span class="token operator">?</span> <span class="token string">&#39;maxHeap&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;minHeap&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function r(d,m){const a=l("ExternalLinkIcon");return t(),e("div",null,[n("p",null,[s("Leetcode题目 "),n("a",u,[s("295"),o(a)])]),k])}const b=p(i,[["render",r],["__file","2022-08-15-堆.html.vue"]]);export{b as default};
