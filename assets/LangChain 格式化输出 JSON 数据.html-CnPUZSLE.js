import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as e,c as p,a as n,b as o,d as i,f as c}from"./app-kRcJ-ame.js";const l={},r=c(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langchain_openai <span class="token keyword">import</span> ChatOpenAI
<span class="token keyword">from</span> langchain<span class="token punctuation">.</span>prompts <span class="token keyword">import</span> PromptTemplate
<span class="token keyword">from</span> langchain_core<span class="token punctuation">.</span>prompts <span class="token keyword">import</span> ChatPromptTemplate
<span class="token keyword">from</span> langchain_core<span class="token punctuation">.</span>output_parsers <span class="token keyword">import</span> StrOutputParser
<span class="token keyword">from</span> langchain<span class="token punctuation">.</span>output_parsers <span class="token keyword">import</span> PydanticOutputParser
<span class="token keyword">from</span> langchain_core<span class="token punctuation">.</span>pydantic_v1 <span class="token keyword">import</span> BaseModel<span class="token punctuation">,</span> Field
<span class="token keyword">import</span> json

llm <span class="token operator">=</span> ChatOpenAI<span class="token punctuation">(</span>
    base_url<span class="token operator">=</span><span class="token string">&quot;http://hunyuanapi.woa.com/openapi/v1&quot;</span><span class="token punctuation">,</span>
    api_key<span class="token operator">=</span><span class="token string">&quot;HWiNj7muC8RNMu3xR0050RoE31uu2vkI&quot;</span><span class="token punctuation">,</span>
    model<span class="token operator">=</span><span class="token string">&quot;hunyuan&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">ResultItem</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    key1 <span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> Field<span class="token punctuation">(</span>description<span class="token operator">=</span><span class="token string">&quot;key1 的描述&quot;</span><span class="token punctuation">)</span>
    key2 <span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> Field<span class="token punctuation">(</span>description<span class="token operator">=</span><span class="token string">&quot;key2 的描述&quot;</span><span class="token punctuation">)</span>
    key3 <span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> Field<span class="token punctuation">(</span>description<span class="token operator">=</span><span class="token string">&quot;key3 的描述&quot;</span><span class="token punctuation">)</span>

parser <span class="token operator">=</span> PydanticOutputParser<span class="token punctuation">(</span>pydantic_object<span class="token operator">=</span>ResultItem<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>parser<span class="token punctuation">.</span>get_format_instructions<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

first_prompt <span class="token operator">=</span> PromptTemplate<span class="token punctuation">(</span>
    input_variables<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    partial_variables<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token string">&quot;format_instructions&quot;</span><span class="token punctuation">:</span> parser<span class="token punctuation">.</span>get_format_instructions<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    template<span class="token operator">=</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
    假设你是一个 XX 专家，请根据输入的内容分析出结构化的信息。请一步一步分析
    step1: 分析 XXX，写入 key1 字段
    step2: 分析 XXX，写入 key2 字段
    step3: 分析 XXX，写入 key3 字段

    {format_instructions}

    {input}
    &quot;&quot;&quot;</span>
<span class="token punctuation">)</span>

chain1 <span class="token operator">=</span> first_prompt <span class="token operator">|</span> llm <span class="token operator">|</span> StrOutputParser<span class="token punctuation">(</span><span class="token punctuation">)</span>
llm_answer <span class="token operator">=</span> chain1<span class="token punctuation">.</span>invoke<span class="token punctuation">(</span>input_data<span class="token punctuation">)</span>
json_answer <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>llm_answer<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：输入的数据要放在 <code>{format_instructions}</code> 之后，否则可能会出现 Markdown 格式的 JSON 甚至乱码格式，导致解析出错，需要 adapter 特殊处理，很不优雅。</p><h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3>`,3),u={href:"https://zhuanlan.zhihu.com/p/668955609",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const s=t("ExternalLinkIcon");return e(),p("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[o("如何在langchain中对大模型的输出进行格式化 - 知乎 (zhihu.com)"),i(s)])])])])}const _=a(l,[["render",d],["__file","LangChain 格式化输出 JSON 数据.html.vue"]]);export{_ as default};
