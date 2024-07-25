import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c,a as n,b as a,d as t,f as l}from"./app-D5ExZMHw.js";const i={},u=l(`<p>抽象类：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> abc <span class="token keyword">import</span> abstractmethod<span class="token punctuation">,</span> ABCMeta


<span class="token keyword">class</span> <span class="token class-name">GraphicRule</span><span class="token punctuation">(</span>metaclass<span class="token operator">=</span>ABCMeta<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;图形接口类&quot;&quot;&quot;</span>

    <span class="token decorator annotation punctuation">@abstractmethod</span>
    <span class="token keyword">def</span> <span class="token function">area</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;面积&quot;&quot;&quot;</span>
        <span class="token keyword">pass</span>

    <span class="token decorator annotation punctuation">@abstractmethod</span>
    <span class="token keyword">def</span> <span class="token function">perimeter</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;周长&quot;&quot;&quot;</span>
        <span class="token keyword">pass</span>


<span class="token keyword">class</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span>GraphicRule<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;矩形类&quot;&quot;&quot;</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> b<span class="token punctuation">,</span> h<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>b <span class="token operator">=</span> b
        self<span class="token punctuation">.</span>h <span class="token operator">=</span> h

	<span class="token decorator annotation punctuation">@property</span>
    <span class="token keyword">def</span> <span class="token function">area</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>b<span class="token operator">*</span>self<span class="token punctuation">.</span>h

	<span class="token decorator annotation punctuation">@property</span>
    <span class="token keyword">def</span> <span class="token function">perimeter</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>b<span class="token operator">+</span>self<span class="token punctuation">.</span>h<span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">2</span>

<span class="token comment"># 实例矩形类的一个对象</span>
rect1 <span class="token operator">=</span> Rectangle<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;矩形面积：{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>rect1<span class="token punctuation">.</span>area<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;矩形周长：{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>rect1<span class="token punctuation">.</span>perimeter<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3>`,3),r={href:"https://blog.csdn.net/qq_45779334/article/details/107858999",target:"_blank",rel:"noopener noreferrer"},d={href:"https://blog.csdn.net/qq_35844043/article/details/104862886",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.runoob.com/w3cnote/python-func-decorators.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/qq_35844043/article/details/104862886",target:"_blank",rel:"noopener noreferrer"};function m(b,f){const s=o("ExternalLinkIcon");return p(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("python——class类和方法的用法详解_python class-CSDN博客"),t(s)])]),n("li",null,[n("a",d,[a("Python3之接口类（InterfaceClass）浅谈_python interface-CSDN博客"),t(s)])]),n("li",null,[n("a",k,[a("Python 函数装饰器 | 菜鸟教程 (runoob.com)"),t(s)])]),n("li",null,[n("a",v,[a("Python3之接口类（InterfaceClass）浅谈_python interface-CSDN博客"),t(s)])])])])}const q=e(i,[["render",m],["__file","Python Class 面向对象.html.vue"]]);export{q as default};
