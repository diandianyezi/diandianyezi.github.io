const e=JSON.parse('{"key":"v-3e916883","path":"/article/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html","title":"动态规划","lang":"zh-CN","frontmatter":{"title":"动态规划","date":"2022-11-08T00:00:00.000Z","sidebar":"heading","breadcrumb":true,"lastUpdated":true,"contributors":true,"editLink":false,"category":"算法","tag":["动态规划"],"description":"简介 Dynamic Programming，Dp 动态规划是一种把原问题分解为相对简单的子问题的方式求解复杂问题的方法。 基础 动态规划应用于子问题重叠的情况： 要去刻画最优解的结构特征； 尝试递归地定义最优解的值； 计算最优解； 利用计算出的信息构造一个最优解。 主要有以下两个特点： 最优子结构： 一个规模为n的问题可以转化为规模比他小的子问题来求解。换言之，f(n)可以他通过一个比他规模小的递推式来求解。一般具有这种结构的问题也可以用递归求解，但是递归的复杂度太高。 子问题的重叠性：如果用递归求解，会有很多重复的子问题，动态规划就是修剪了重复的计算来降低时间复杂度。但是因为需要再存储中间状态，空间复杂度是增加了。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.netlify.app/article/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html"}],["meta",{"property":"og:site_name","content":"Yezi’s Blog"}],["meta",{"property":"og:title","content":"动态规划"}],["meta",{"property":"og:description","content":"简介 Dynamic Programming，Dp 动态规划是一种把原问题分解为相对简单的子问题的方式求解复杂问题的方法。 基础 动态规划应用于子问题重叠的情况： 要去刻画最优解的结构特征； 尝试递归地定义最优解的值； 计算最优解； 利用计算出的信息构造一个最优解。 主要有以下两个特点： 最优子结构： 一个规模为n的问题可以转化为规模比他小的子问题来求解。换言之，f(n)可以他通过一个比他规模小的递推式来求解。一般具有这种结构的问题也可以用递归求解，但是递归的复杂度太高。 子问题的重叠性：如果用递归求解，会有很多重复的子问题，动态规划就是修剪了重复的计算来降低时间复杂度。但是因为需要再存储中间状态，空间复杂度是增加了。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-21T07:45:14.000Z"}],["meta",{"property":"article:tag","content":"动态规划"}],["meta",{"property":"article:published_time","content":"2022-11-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-21T07:45:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"动态规划\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-08T00:00:00.000Z\\",\\"dateModified\\":\\"2022-11-21T07:45:14.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":2,"title":"钢条切割","slug":"钢条切割","link":"#钢条切割","children":[{"level":3,"title":"递归解法","slug":"递归解法","link":"#递归解法","children":[]},{"level":3,"title":"动态规划方案","slug":"动态规划方案","link":"#动态规划方案","children":[]},{"level":3,"title":"输出最佳方案","slug":"输出最佳方案","link":"#输出最佳方案","children":[]}]},{"level":2,"title":"最长公共子序列","slug":"最长公共子序列","link":"#最长公共子序列","children":[{"level":3,"title":"LCS的最优子结构：","slug":"lcs的最优子结构","link":"#lcs的最优子结构","children":[]},{"level":3,"title":"输出最长公共子序列","slug":"输出最长公共子序列","link":"#输出最长公共子序列","children":[]}]}],"git":{"createdTime":1669016714000,"updatedTime":1669016714000,"contributors":[{"name":"zhangting","email":"1092923594@qq.com","commits":1}]},"readingTime":{"minutes":4.2,"words":1259},"filePathRelative":"article/动态规划.md","localizedDate":"2022年11月8日","excerpt":"<h2> 简介</h2>\\n<p>Dynamic Programming，Dp</p>\\n<p><strong>动态规划</strong>是一种把原问题分解为相对简单的子问题的方式求解复杂问题的方法。</p>\\n<h2> 基础</h2>\\n<p>动态规划应用于子问题重叠的情况：</p>\\n<ol>\\n<li>要去刻画最优解的结构特征；</li>\\n<li>尝试递归地定义最优解的值；</li>\\n<li>计算最优解；</li>\\n<li>利用计算出的信息构造一个最优解。</li>\\n</ol>\\n<p>主要有以下两个特点：</p>\\n<ol>\\n<li>最优子结构： 一个规模为n的问题可以转化为规模比他小的子问题来求解。换言之，f(n)可以他通过一个比他规模小的递推式来求解。一般具有这种结构的问题也可以用递归求解，但是递归的复杂度太高。</li>\\n<li>子问题的重叠性：如果用递归求解，会有很多重复的子问题，动态规划就是修剪了重复的计算来降低时间复杂度。但是因为需要再存储中间状态，空间复杂度是增加了。</li>\\n</ol>","autoDesc":true}');export{e as data};
