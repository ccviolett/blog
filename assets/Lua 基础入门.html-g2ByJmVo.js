import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o,c as i,a as n,b as a,d as e,f as p}from"./app-D5ExZMHw.js";const c={},r=p(`<p>注释</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- a</span>

<span class="token comment">--[[
a
b
c
d
]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历数组</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>list <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">}</span>

<span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">#</span>list <span class="token keyword">do</span>
	<span class="token function">print</span><span class="token punctuation">(</span>list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token keyword">in</span> <span class="token function">ipairs</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token keyword">do</span>
	<span class="token function">print</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断非空</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">if</span> a <span class="token operator">~=</span> <span class="token keyword">nil</span> <span class="token keyword">then</span>
	<span class="token comment">-- do something</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断非空表</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token function">next</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">~=</span> <span class="token keyword">nil</span>
	<span class="token comment">--不是空表</span>
<span class="token keyword">else</span>
	<span class="token comment">--空表</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字符串替换</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>res <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">gsub</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">&quot;BEFORE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;AFTER&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3>`,11),d=n("li",null,"[[Lua 混合编程]]",-1),u={href:"https://blog.csdn.net/qq_36383623/article/details/103955190",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.cnblogs.com/Braveliu/p/10750574.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/hp_cpp/article/details/108244517",target:"_blank",rel:"noopener noreferrer"};function m(b,_){const s=l("ExternalLinkIcon");return o(),i("div",null,[r,n("ul",null,[d,n("li",null,[n("a",u,[a("Lua中的非空判断_lua nil-CSDN博客"),e(s)])]),n("li",null,[n("a",k,[a("Lua table遍历 - kaizenly - 博客园 (cnblogs.com)"),e(s)])]),n("li",null,[n("a",v,[a("lua 判断table是否为空的正确做法_lua判断数组是否为空-CSDN博客"),e(s)])])])])}const f=t(c,[["render",m],["__file","Lua 基础入门.html.vue"]]);export{f as default};
