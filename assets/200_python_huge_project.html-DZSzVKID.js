import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as i,c,a as n,b as a,d as e,f as t}from"./app-wbpecTI6.js";const l={},u=t(`<h1 id="python-大型项目开发" tabindex="-1"><a class="header-anchor" href="#python-大型项目开发" aria-hidden="true">#</a> Python 大型项目开发</h1><p>有一些 Python 的特性，只有当我们真正开发大型 Python 项目的时候，我们才能意识到他的重要性、意识到他存在的意义，而不是像在小型项目中一样只是炫技或者是玩具，比如“闭包”、“多线程”、”类型限制“等。</p><h2 id="抽象" tabindex="-1"><a class="header-anchor" href="#抽象" aria-hidden="true">#</a> 抽象</h2><p>在 Python 面向对象编程中，静态函数和类函数不是一个概念。</p><p>静态函数装饰器 <code>staticmethod</code> 和抽象接口装饰器 <code>abstractmethod</code> 不能同时作用于同一个函数，但是类函数装饰器 <code>classmethod</code> 和抽象接口装饰器 <code>abstractmethod</code> 可以作用于同一个函数。</p><p>配合这一点，我们可以实现出其他语言难以实现的抽象——比如抽象类函数接口。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> abc

<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">(</span>metaclass<span class="token operator">=</span>abc<span class="token punctuation">.</span>ABCMeta<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@abc<span class="token punctuation">.</span>abstractmethod</span>
    <span class="token keyword">def</span> <span class="token function">test1</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token decorator annotation punctuation">@abc<span class="token punctuation">.</span>abstractmethod</span>
    <span class="token keyword">def</span> <span class="token function">test2</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">test1</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">test2</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

b <span class="token operator">=</span> B<span class="token punctuation">(</span><span class="token punctuation">)</span>
b<span class="token punctuation">.</span>test1<span class="token punctuation">(</span><span class="token punctuation">)</span>
B<span class="token punctuation">.</span>test2<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2><h3 id="为什么需要闭包" tabindex="-1"><a class="header-anchor" href="#为什么需要闭包" aria-hidden="true">#</a> 为什么需要闭包？</h3><p>闭包的目的是为了实现更好的封装，可以提前设置一些非运行时的固定参数，并保留一些运行时参数延后传入，是函数的“预制菜”，可以让不同的接口展现出统一的特性。</p><p>比如现在我在做一个爬虫，我把每个网站的 POST 接口爬取下来，然后希望以后调用的时候，只要传入用户名和密码就可以调用特定网站的 POST 接口。</p><p>那么我可能首先写了一个脚本，将所有的 POST 接口爬取了下来，然后我可以在使用的时候，去写对应的 request 来请求这些 POST 接口。但我们也可以再 POST 接口爬取下来的时候就通过一个函数，生成一个调用这个接口的函数，这样之后我们就不用关心 request 请求的细节，只需要直接调用接口的函数即可。</p><p>即有通过一个函数 <code>generate_post_func</code>，参数是对应 POST 请求的一些固定参数，返回值是一个函数 <code>post_func</code>，该函数的参数是用户名和密码，可以让我们直接通过 <code>post_func(username, password)</code> 来得到请求返回的结果。</p><p>这个 <code>generate_post_func</code> 就是一个闭包。</p><h3 id="相关资料" tabindex="-1"><a class="header-anchor" href="#相关资料" aria-hidden="true">#</a> 相关资料</h3>`,15),r={href:"https://blog.csdn.net/Saki_Python/article/details/136166366",target:"_blank",rel:"noopener noreferrer"},d=t(`<h2 id="多线程并发" tabindex="-1"><a class="header-anchor" href="#多线程并发" aria-hidden="true">#</a> 多线程并发</h2><h3 id="线程竞争并发示例" tabindex="-1"><a class="header-anchor" href="#线程竞争并发示例" aria-hidden="true">#</a> 线程竞争并发示例</h3><p>可以解决类似下面场景的问题：</p><p>有 n 个工作窗口，m 个客户，每个客户处理业务时会占用一个工作窗口。新建和关闭工作窗口的代价较大，即工作窗口需要一直保持在线，不能在完成单个客户的业务后关闭窗口，等下一个客户来时再新建窗口。当任意一个工作窗口空闲的时候，自动分配客户前往窗口处理业务。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> abc
<span class="token keyword">import</span> time
<span class="token keyword">import</span> threading
<span class="token keyword">import</span> queue
<span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ThreadPoolExecutor


<span class="token keyword">class</span> <span class="token class-name">ThreadingAssistantBasicClass</span><span class="token punctuation">(</span>metaclass<span class="token operator">=</span>abc<span class="token punctuation">.</span>ABCMeta<span class="token punctuation">)</span><span class="token punctuation">:</span>

    lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">__del__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">threading_framework</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> max_thread_num<span class="token punctuation">,</span> assistant_init_args<span class="token punctuation">,</span> task_args_list<span class="token punctuation">,</span> shared_variable<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        作用：多线程竞争
        说明：通过 kwargs 的方式传入 assistant_init_args, task_args_list, shared_variable
        assistant_init_args 将会被解包用于 assistant 初始化
        task_args_list 和 shared_variable 将会被解包用于 threading_run
        参数：
        - max_thread_num: 最大线程数量
        - assistant_init_args: 初始化参数
        - task_args_list: 任务参数列表
        - shared_variable: 共享变量
        &quot;&quot;&quot;</span>
        <span class="token keyword">def</span> <span class="token function">get_idle_assistant</span><span class="token punctuation">(</span>idle_assistant<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token triple-quoted-string string">&quot;&quot;&quot;
            获取空闲assistant的函数
            &quot;&quot;&quot;</span>
            <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
                <span class="token keyword">try</span><span class="token punctuation">:</span>
                    assistant <span class="token operator">=</span> idle_assistant<span class="token punctuation">.</span>get<span class="token punctuation">(</span>timeout<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 立即尝试从队列中获取可用assistant</span>
                    <span class="token keyword">return</span> assistant
                <span class="token keyword">except</span> queue<span class="token punctuation">.</span>Empty<span class="token punctuation">:</span>
                    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>  <span class="token comment"># 如果没有可用的assistant，稍等片刻再次尝试</span>

        <span class="token comment"># 创建 assistant 对象列表</span>
        assistant_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>max_thread_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">try</span><span class="token punctuation">:</span>
                assistant <span class="token operator">=</span> cls<span class="token punctuation">(</span><span class="token operator">**</span>assistant_init_args<span class="token punctuation">)</span>
                assistant_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>assistant<span class="token punctuation">)</span>
            <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
        <span class="token comment"># 初始化空闲assistant队列</span>
        idle_assistant <span class="token operator">=</span> queue<span class="token punctuation">.</span>Queue<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> driver_pair <span class="token keyword">in</span> assistant_list<span class="token punctuation">:</span>
            idle_assistant<span class="token punctuation">.</span>put<span class="token punctuation">(</span>driver_pair<span class="token punctuation">)</span>
        <span class="token comment"># 创建信号量以限制并发任务数量</span>
        semaphore <span class="token operator">=</span> threading<span class="token punctuation">.</span>Semaphore<span class="token punctuation">(</span>max_thread_num<span class="token punctuation">)</span>

        <span class="token comment"># 定义任务包装器函数</span>
        <span class="token keyword">def</span> <span class="token function">wrapped_task</span><span class="token punctuation">(</span>task_args<span class="token punctuation">,</span> shared_variable<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">with</span> semaphore<span class="token punctuation">:</span>  <span class="token comment"># 获取信号量</span>
                assistant <span class="token operator">=</span> get_idle_assistant<span class="token punctuation">(</span>idle_assistant<span class="token punctuation">)</span>  <span class="token comment"># 获取空闲assistant</span>
                <span class="token keyword">try</span><span class="token punctuation">:</span>
                    assistant<span class="token punctuation">.</span>threading_task<span class="token punctuation">(</span><span class="token operator">**</span>task_args<span class="token punctuation">,</span> <span class="token operator">**</span>shared_variable<span class="token punctuation">)</span>
                <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
                    <span class="token keyword">raise</span> e
                idle_assistant<span class="token punctuation">.</span>put<span class="token punctuation">(</span>assistant<span class="token punctuation">)</span>  <span class="token comment"># 将assistant放回空闲队列</span>

        <span class="token comment"># 使用 ThreadPoolExecutor 运行任务</span>
        <span class="token keyword">with</span> ThreadPoolExecutor<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> executor<span class="token punctuation">:</span>
            futures <span class="token operator">=</span> <span class="token punctuation">[</span>executor<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>wrapped_task<span class="token punctuation">,</span> task_args<span class="token punctuation">,</span> shared_variable<span class="token punctuation">)</span> <span class="token keyword">for</span> task_args <span class="token keyword">in</span> task_args_list<span class="token punctuation">]</span>

        <span class="token comment"># 关闭 assistant 对象</span>
        <span class="token keyword">for</span> assistant <span class="token keyword">in</span> assistant_list<span class="token punctuation">:</span>
            <span class="token keyword">del</span> assistant

    <span class="token decorator annotation punctuation">@abc<span class="token punctuation">.</span>abstractmethod</span>
    <span class="token keyword">def</span> <span class="token function">threading_task</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        通过解包 task_args 进入正常的流程，并加锁读写数据
        &quot;&quot;&quot;</span>
        <span class="token keyword">pass</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token decorator annotation punctuation">@abc<span class="token punctuation">.</span>abstractmethod</span>
    <span class="token keyword">def</span> <span class="token function">threading_run</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        通过转换参数调用 threading_framework
        &quot;&quot;&quot;</span>
        <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3>`,6),k={href:"https://blog.csdn.net/waple_0820/article/details/93026922",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/Xiao_Liu_OvO/article/details/138716321",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/qq_43380180/article/details/111573642",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/qq_38962621/article/details/110767604",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.csdn.net/qq_42830966/article/details/117842969",target:"_blank",rel:"noopener noreferrer"},_=t(`<h2 id="引用与封装" tabindex="-1"><a class="header-anchor" href="#引用与封装" aria-hidden="true">#</a> 引用与封装</h2><p>“数据向下引用，结果向上封装”，这是开发大型项目的时候一个很重要的观念。</p><h3 id="结果封装" tabindex="-1"><a class="header-anchor" href="#结果封装" aria-hidden="true">#</a> 结果封装</h3><p>使用类进行结果封装，而不是 <code>dict</code>，让上一级能够明确知道返回的结果有哪些内容，并且也能够为 IDE 提供补全提示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Result</span><span class="token punctuation">:</span>
	key1 <span class="token operator">=</span> <span class="token boolean">None</span>
	key2 <span class="token operator">=</span> <span class="token boolean">None</span>
	key3 <span class="token operator">=</span> <span class="token boolean">None</span>

<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	result <span class="token operator">=</span> Result<span class="token punctuation">(</span><span class="token punctuation">)</span>
	result<span class="token punctuation">.</span>key1 <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span>
	result<span class="token punctuation">.</span>key2 <span class="token operator">=</span> <span class="token number">1</span>
	result<span class="token punctuation">.</span>key3 <span class="token operator">=</span> <span class="token boolean">True</span>
	<span class="token keyword">return</span> result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据传递" tabindex="-1"><a class="header-anchor" href="#数据传递" aria-hidden="true">#</a> 数据传递</h3><p>TODO</p><h3 id="对接接口" tabindex="-1"><a class="header-anchor" href="#对接接口" aria-hidden="true">#</a> 对接接口</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fields <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;city&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># 动态创建一个新的 Person 类，包含指定的字段</span>
Person <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&quot;Person&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>field<span class="token punctuation">:</span> <span class="token boolean">None</span> <span class="token keyword">for</span> field <span class="token keyword">in</span> fields<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># 使用字典数据实例化 Person 类</span>
person <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token operator">**</span>data<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span>  <span class="token comment"># 输出: John</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>age<span class="token punctuation">)</span>   <span class="token comment"># 输出: 30</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>city<span class="token punctuation">)</span>  <span class="token comment"># 输出: New York</span>

<span class="token comment"># 将 Person 类转化回字典数据</span>
person_dict <span class="token operator">=</span> <span class="token builtin">vars</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h2><p>对于 <code>Exception</code> 的错误，通过 <code>args</code> 获取到 <code>tuple</code> 格式的参数，具体代码如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
	<span class="token keyword">raise</span> Exception<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> err<span class="token punctuation">:</span>
	code <span class="token operator">=</span> err<span class="token punctuation">.</span>args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考资料-1" tabindex="-1"><a class="header-anchor" href="#参考资料-1" aria-hidden="true">#</a> 参考资料</h3>`,13),y={href:"https://blog.csdn.net/lina_acm/article/details/54808910",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="超时限制" tabindex="-1"><a class="header-anchor" href="#超时限制" aria-hidden="true">#</a> 超时限制</h2><p>通常我们不希望我们的程序会在某一个 <code>case</code> 上卡死，导致我们需要在运行过程中重启我们的程序。</p><p>添加一个超时限制往往是一个不错的解决方法，我们使用 <code>func_timeout</code> 库来实现超时限制。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> func_timeout <span class="token keyword">import</span> func_set_timeout

<span class="token decorator annotation punctuation">@func_set_timeout</span><span class="token punctuation">(</span>timeout_value<span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考资料-2" tabindex="-1"><a class="header-anchor" href="#参考资料-2" aria-hidden="true">#</a> 参考资料</h3>`,5),f={href:"https://blog.csdn.net/suiyingy/article/details/135011597",target:"_blank",rel:"noopener noreferrer"},w=t(`<h2 id="解包与-args-kwargs" tabindex="-1"><a class="header-anchor" href="#解包与-args-kwargs" aria-hidden="true">#</a> 解包与 args, kwargs</h2><p>为了使用字典作为类 <code>__init__</code> 函数的参数，你可以在创建对象时将字典解包为关键字参数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>
            self<span class="token punctuation">,</span>
            tid<span class="token punctuation">,</span>
            image_file_path<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
            log_file_path<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
            driver<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
            server<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
            proxy<span class="token operator">=</span><span class="token boolean">None</span>
    <span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>tid <span class="token operator">=</span> tid
        self<span class="token punctuation">.</span>image_file_path <span class="token operator">=</span> image_file_path
        self<span class="token punctuation">.</span>log_file_path <span class="token operator">=</span> log_file_path
        self<span class="token punctuation">.</span>driver <span class="token operator">=</span> driver
        self<span class="token punctuation">.</span>server <span class="token operator">=</span> server
        self<span class="token punctuation">.</span>proxy <span class="token operator">=</span> proxy

<span class="token comment"># 创建一个字典</span>
my_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;tid&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;XXX&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;image_file_path&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;XXX&quot;</span><span class="token punctuation">,</span>
    <span class="token comment"># ... 其他键值对</span>
<span class="token punctuation">}</span>

<span class="token comment"># 使用字典解包为关键字参数来创建对象</span>
my_object <span class="token operator">=</span> MyClass<span class="token punctuation">(</span><span class="token operator">**</span>my_dict<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function q(x,P){const s=o("ExternalLinkIcon");return i(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("一文教你Python中的闭包-CSDN博客"),e(s)])])]),d,n("ul",null,[n("li",null,[n("a",k,[a("python多线程(Multiprocessing)与多线程(Multithreading)区别优缺点最详细解释_python multiprocessing multithreading-CSDN博客"),e(s)])]),n("li",null,[n("a",v,[a("【Python】超详细实例讲解python多线程（threading模块）_python threading介绍-CSDN博客"),e(s)])]),n("li",null,[n("a",m,[a("python 异步 async/await_python async-CSDN博客"),e(s)])]),n("li",null,[n("a",b,[a("详解Python中的多线程、线程锁、线程变量 - threading、Thread、Lock与ThreadLocal详解_python thread variable-CSDN博客"),e(s)])]),n("li",null,[n("a",h,[a("【Python】threading控制线程的数量_threading控制线程数量-CSDN博客"),e(s)])])]),_,n("ul",null,[n("li",null,[n("a",y,[a("except as e中的‘e’的作用总结-CSDN博客"),e(s)])])]),g,n("ul",null,[n("li",null,[n("a",f,[a("Python超时装饰器：优雅地处理函数执行超时-CSDN博客"),e(s)])])]),w])}const T=p(l,[["render",q],["__file","200_python_huge_project.html.vue"]]);export{T as default};
