import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c as i,a as n,b as a,d as t,f as l}from"./app-D5ExZMHw.js";const c={},u=l(`<h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h3><h4 id="且-同时满足-a-和-b" tabindex="-1"><a class="header-anchor" href="#且-同时满足-a-和-b" aria-hidden="true">#</a> 且（同时满足 A 和 B）</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;A&quot;</span><span class="token operator">:</span> <span class="token string">&quot;A&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;B&quot;</span><span class="token operator">:</span> <span class="token string">&quot;B&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="或-满足-a-或-b-其中之一" tabindex="-1"><a class="header-anchor" href="#或-满足-a-或-b-其中之一" aria-hidden="true">#</a> 或（满足 A 或 B 其中之一）</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;A&quot;</span><span class="token operator">:</span> <span class="token string">&quot;A&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;B&quot;</span><span class="token operator">:</span> <span class="token string">&quot;B&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><p>比如要按照数据清洗规则中的要求，实现漏洞数据的筛选，其 Query DSL 如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ti_info&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tiother_info&quot;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                      <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;漏洞&quot;</span>
                      <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                      <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vul&quot;</span>
                      <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                  <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3>`,9),r={href:"https://www.jianshu.com/p/6c62170f8907",target:"_blank",rel:"noopener noreferrer"},d={href:"https://blog.csdn.net/mo_sss/article/details/133808562",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/qq_32681589/article/details/134106958?spm=1001.2014.3001.5501",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/qq_32681589/article/details/134170193?spm=1001.2014.3001.5502",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/qq_32681589/article/details/134143724",target:"_blank",rel:"noopener noreferrer"};function b(q,h){const s=o("ExternalLinkIcon");return p(),i("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("Elasticsearch——Query DSL语法入门 - 简书 (jianshu.com)"),t(s)])]),n("li",null,[n("a",d,[a("kibana操作elasticsearch（增删改查）_kibana删除指定数据-CSDN博客"),t(s)])]),n("li",null,[n("a",v,[a("【ES专题】ElasticSearch快速入门-CSDN博客"),t(s)])]),n("li",null,[n("a",k,[a("【ES专题】ElasticSearch搜索进阶_es bm25-CSDN博客"),t(s)])]),n("li",null,[n("a",m,[a("【ES专题】ElasticSearch 高级查询语法Query DSL实战_es query-CSDN博客"),t(s)])])])])}const g=e(c,[["render",b],["__file","Elasticsearch（ES） Query DSL 基础入门.html.vue"]]);export{g as default};
