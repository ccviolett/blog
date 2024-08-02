import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-CahC9Ikc.js";const i={},l=e(`<h1 id="centos7升级glibc2-25避坑指南" tabindex="-1"><a class="header-anchor" href="#centos7升级glibc2-25避坑指南" aria-hidden="true">#</a> centos7升级glibc2.25避坑指南</h1><p>centos7默认的glibc函数库的版本为2.17，无法运行一些对glibc版本有要求的中间件。为了在centos7上可以正常运行此类中间件，则需要对glibc进行升级。</p><p>假设需要安装一个中间件，该版本的中间件要求glibc函数库在2.25以上，但操作系统的glibc版本为2.17，为了符合运行要求需要对glibc进行升级。由于直接升级到glibc2.25会出现各种崩溃的问题(如：无法远程、常规基础命令无法使用等等)。经反复测试确认，可直接升级到glibc2.31(升级过程中会自动安装缺失的版本)。</p><h2 id="_1-基础环境准备" tabindex="-1"><a class="header-anchor" href="#_1-基础环境准备" aria-hidden="true">#</a> 1 基础环境准备</h2><p>说明：升级之前最好保持两个以上的远程终端，防止升级失败时手误关闭了终端导致无法再远程！</p><p>升级glibc2.31前需要确保基础环境满足以下条件：gcc版本要在9以上(默认4.8.5)，make版本要在4.0以上(默认3.82)。</p><p>执行以下操作前需远程登录到目标服务器。</p><h3 id="_1-1-make-升级" tabindex="-1"><a class="header-anchor" href="#_1-1-make-升级" aria-hidden="true">#</a> 1.1 make 升级</h3><p>升级前需确认当前环境的make版本(make -v)，若当前版本为3.x则确认本次需升级，若为4.x则跳过此步骤。假设当前环境的make为3.x，需要进行make升级。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.安装依赖</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc gcc+
 
<span class="token comment"># 2.建立安装包存放目录</span>
<span class="token function">mkdir</span> /backup
 
<span class="token comment"># 3.下载make安装包</span>
<span class="token builtin class-name">cd</span> /backup
<span class="token function">wget</span> https://mirrors.aliyun.com/gnu/make/make-4.3.tar.gz
 
<span class="token comment"># 4.解压压缩包并建立构建目录</span>
<span class="token function">tar</span> <span class="token parameter variable">-xf</span> make-4.3.tar.gz
<span class="token builtin class-name">cd</span> make-4.3
<span class="token function">mkdir</span> build
<span class="token builtin class-name">cd</span> build
 
<span class="token comment"># 5.指定安装到具体的目录下，此示例表示将make安装到/opt下</span>
<span class="token punctuation">..</span>/configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/opt/make
 
<span class="token comment"># 6.编译安装</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
 
<span class="token comment"># 7.建立软连接</span>
<span class="token function">ln</span> <span class="token parameter variable">-sf</span> /opt/make/bin/make /usr/bin/make
 
<span class="token comment"># 8.检查make版本</span>
<span class="token function">make</span> <span class="token parameter variable">--version</span>
<span class="token comment"># 输出</span>
GNU Make <span class="token number">4.3</span>
Built <span class="token keyword">for</span> x86_64-pc-linux-gnu
Copyright <span class="token punctuation">(</span>C<span class="token punctuation">)</span> <span class="token number">1988</span>-2020 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version <span class="token number">3</span> or later <span class="token operator">&lt;</span>http://gnu.org/licenses/gpl.html<span class="token operator">&gt;</span>
This is <span class="token function">free</span> software: you are <span class="token function">free</span> to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此 make升级完成。</p><h3 id="_1-2-gcc升级" tabindex="-1"><a class="header-anchor" href="#_1-2-gcc升级" aria-hidden="true">#</a> 1.2 gcc升级</h3><p>升级前需确认当前环境的gcc版本(gcc -v)，若当前版本为4.x则确认本次需升级，若为9.x则跳过此步骤。假设当前环境的gcc为4.x，需要进行gcc升级。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.安装升级依赖</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> gcc-c++ glibc-devel mpfr-devel libmpc-devel gmp-devel glibc-devel.i686
​
<span class="token comment"># 2.下载gcc9.3.1安装包</span>
<span class="token builtin class-name">cd</span> /backup
<span class="token function">wget</span> https://ftp.gnu.org/gnu/gcc/gcc-9.3.0/gcc-9.3.0.tar.gz --no-check-certificate
​
<span class="token comment"># 3.解包并执行编译前的准备</span>
<span class="token function">tar</span> <span class="token parameter variable">-xf</span> gcc-9.3.0.tar.gz
<span class="token builtin class-name">cd</span> gcc-9.3.0
<span class="token comment"># 下载依赖包</span>
./contrib/download_prerequisites
<span class="token comment"># 建立构建目录</span>
<span class="token function">mkdir</span> build
<span class="token comment"># 进入构建目录</span>
<span class="token builtin class-name">cd</span> build
​
<span class="token comment"># 4.指定安装到具体的目录下，此示例表示将make安装到/usr下(说明：若安装到非/usr目录,如安装到/opt/gcc，则在编译完成后需要配置环境变量、建立软连接。)</span>
<span class="token punctuation">..</span>/configure --enable-checking<span class="token operator">=</span>release --enable-language<span class="token operator">=</span>c,c++ --disable-multilib <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr
​
<span class="token comment"># 5.编译安装</span>
<span class="token function">make</span> <span class="token parameter variable">-j4</span> <span class="token comment"># -j代表编译时的任务数，一般有几个cpu核心就写几，构建速度会更快一些。该步骤执行时间很长</span>
<span class="token function">make</span> <span class="token function">install</span>
​
<span class="token comment"># 6.上一步若安装目录不是/usr，则需要在编译完成后配置环境变量、建立软连接，若为/usr目录则跳过此步骤</span>
<span class="token comment"># 假设将gcc编译安装到了/opt/gcc目录</span>
<span class="token comment"># 6.1配置环境变量</span>
<span class="token function">vi</span> /etc/profile.d/gcc.sh
<span class="token comment"># gcc环境配置</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/opt/gcc/bin:<span class="token environment constant">$PATH</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span>/opt/gcc/lib
<span class="token comment"># 编辑完成后:wq保存并退出</span>
<span class="token comment"># 6.2重载环境变量</span>
<span class="token builtin class-name">source</span> /etc/profile
<span class="token comment"># 6.3重新生成新的链接</span>
<span class="token comment"># 取消原始链接</span>
unlink /usr/bin/cc
<span class="token comment"># 建立新链接</span>
<span class="token function">ln</span> <span class="token parameter variable">-sf</span> /opt/gcc/bin/gcc /usr/bin/cc
<span class="token function">ln</span> <span class="token parameter variable">-sf</span> /opt/gcc/lib/gcc/x86_64-pc-linux-gnu/9.3.0/include /usr/include/gcc
<span class="token comment"># 设置库文件</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/opt/gcc/lib64&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/ld.so.conf.d/gcc.conf
<span class="token comment"># 加载动态连接库</span>
ldconfig <span class="token parameter variable">-v</span>
<span class="token comment"># 查看加载结果</span>
ldconfig <span class="token parameter variable">-p</span> <span class="token operator">|</span> <span class="token function">grep</span> gcc
​
<span class="token comment"># 7.安装完成后检查gcc版本，若gcc升级失败则需查找失败原因并重新进行升级操作</span>
gcc <span class="token parameter variable">-v</span>
Using built-in specs.
<span class="token assign-left variable">COLLECT_GCC</span><span class="token operator">=</span>gcc
<span class="token assign-left variable">COLLECT_LTO_WRAPPER</span><span class="token operator">=</span>/usr/libexec/gcc/x86_64-pc-linux-gnu/9.3.0/lto-wrapper
Target: x86_64-pc-linux-gnu
Configured with: <span class="token punctuation">..</span>/configure --enable-checking<span class="token operator">=</span>release --enable-language<span class="token operator">=</span>c,c++ --disable-multilib <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr
Thread model: posix
gcc version <span class="token number">9.3</span>.0 <span class="token punctuation">(</span>GCC<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-升级glibc" tabindex="-1"><a class="header-anchor" href="#_2-升级glibc" aria-hidden="true">#</a> 2 升级glibc</h2><p>升级前需查看当前环境的glibc是否存在符合的版本，若存在则跳过升级，此文档假设glibc当前最高的版本为2.17</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.查看glibc函数库版本</span>
strings /lib64/libc.so.6 <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&quot;^GLIBC&quot;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-V</span> <span class="token parameter variable">-r</span> <span class="token operator">|</span> <span class="token function">uniq</span>
<span class="token comment"># 输出</span>
GLIBC_2.2.5
GLIBC_2.2.6
GLIBC_2.3
GLIBC_2.3.2
GLIBC_2.3.3
GLIBC_2.3.4
GLIBC_2.4
GLIBC_2.5
GLIBC_2.6
GLIBC_2.7
GLIBC_2.8
GLIBC_2.9
GLIBC_2.10
GLIBC_2.11
GLIBC_2.12
GLIBC_2.13
GLIBC_2.14
GLIBC_2.15
GLIBC_2.16
GLIBC_2.17  <span class="token comment"># 当前最高版本</span>
GLIBC_PRIVATE
 
<span class="token comment"># 2.下载glibc-2.31安装包</span>
<span class="token builtin class-name">cd</span> /backup
<span class="token function">wget</span> https://mirrors.aliyun.com/gnu/glibc/glibc-2.31.tar.gz
 
<span class="token comment"># 3.进入到解压目录</span>
<span class="token function">tar</span> <span class="token parameter variable">-xf</span> glibc-2.31.tar.gz
<span class="token builtin class-name">cd</span> glibc-2.31
 
<span class="token comment"># 4.查看安装glibc的前提依赖，对于不满足的依赖需要进行升级，使用yum -y install xxx 升级或安装即可</span>
<span class="token function">cat</span> INSTALL <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&quot;newer|later&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;*&quot;</span>
<span class="token comment"># 输出</span>
* GNU <span class="token string">&#39;make&#39;</span> <span class="token number">4.0</span> or newer
* GCC <span class="token number">6.2</span> or newer
* GNU <span class="token string">&#39;binutils&#39;</span> <span class="token number">2.25</span> or later
* GNU <span class="token string">&#39;texinfo&#39;</span> <span class="token number">4.7</span> or later
* GNU <span class="token string">&#39;bison&#39;</span> <span class="token number">2.7</span> or later
* GNU <span class="token string">&#39;sed&#39;</span> <span class="token number">3.02</span> or newer
* Python <span class="token number">3.4</span> or later
* GDB <span class="token number">7.8</span> or later with support <span class="token keyword">for</span> Python <span class="token number">2.7</span>/3.4 or later
* GNU <span class="token string">&#39;gettext&#39;</span> <span class="token number">0.10</span>.36 or later
<span class="token comment"># 假设上述依赖条件已全部满足</span>
 
<span class="token comment"># 5.建立构建目录，执行编译安装</span>
<span class="token function">mkdir</span> build
 
<span class="token comment"># 6.指定安装到具体的目录下，此示例表示将make安装到/opt下</span>
<span class="token builtin class-name">cd</span> build/
<span class="token punctuation">..</span>/configure  <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr --disable-profile --enable-add-ons --with-headers<span class="token operator">=</span>/usr/include --with-binutils<span class="token operator">=</span>/usr/bin --disable-sanity-checks --disable-werror
 
<span class="token comment"># 7.编译安装</span>
<span class="token function">make</span> <span class="token parameter variable">-j4</span>  <span class="token comment"># 此处时间较长</span>
<span class="token function">make</span> <span class="token function">install</span>
<span class="token comment"># 解决新启动远程终端时报一个WARNING</span>
<span class="token function">make</span> localedata/install-locales
 
<span class="token comment"># install结束会出现一个错误，此错误可忽略</span>
<span class="token comment"># 错误输出</span>
Execution of gcc -B/usr/bin/ failed<span class="token operator">!</span>
The script has found some problems with your installation<span class="token operator">!</span>
Please <span class="token builtin class-name">read</span> the FAQ and the README <span class="token function">file</span> and check the following:
- Did you change the gcc specs <span class="token function">file</span> <span class="token punctuation">(</span>necessary after upgrading from
  Linux libc5<span class="token punctuation">)</span>?
- Are there any symbolic links of the form libXXX.so to old libraries?
  Links like libm.so -<span class="token operator">&gt;</span> libm.so.5 <span class="token punctuation">(</span>where libm.so.5 is an old library<span class="token punctuation">)</span> are wrong,
  libm.so should point to the newly installed glibc <span class="token function">file</span> - and there should be
  only one such <span class="token function">link</span> <span class="token punctuation">(</span>check e.g. /lib and /usr/lib<span class="token punctuation">)</span>
You should restart this script from your build directory after you<span class="token string">&#39;ve
fixed all problems!
Btw. the script doesn&#39;</span>t work <span class="token keyword">if</span> you<span class="token string">&#39;re installing GNU libc not as your
primary library!
make[1]: *** [Makefile:120: install] Error 1
make[1]: Leaving directory &#39;</span>/backup/glibc-2.31<span class="token string">&#39;
make: *** [Makefile:12: install] Error 2&#39;</span>
 
<span class="token comment"># 8.安装完成后检查glibc版本</span>
strings /lib64/libc.so.6 <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&quot;^GLIBC&quot;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-V</span> <span class="token parameter variable">-r</span> <span class="token operator">|</span> <span class="token function">uniq</span>
<span class="token comment"># 输出</span>
GLIBC_PRIVATE
GLIBC_2.30
GLIBC_2.29
GLIBC_2.28
GLIBC_2.27
GLIBC_2.26
GLIBC_2.25
GLIBC_2.24
GLIBC_2.23
GLIBC_2.22
GLIBC_2.18
GLIBC_2.17
GLIBC_2.16
GLIBC_2.15
GLIBC_2.14
GLIBC_2.13
GLIBC_2.12
GLIBC_2.11
GLIBC_2.10
GLIBC_2.9
GLIBC_2.8
GLIBC_2.7
GLIBC_2.6
GLIBC_2.5
GLIBC_2.4
GLIBC_2.3.4
GLIBC_2.3.3
GLIBC_2.3.2
GLIBC_2.3
GLIBC_2.2.6
GLIBC_2.2.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此 glibc升级完成。</p><h2 id="_3-注意事项" tabindex="-1"><a class="header-anchor" href="#_3-注意事项" aria-hidden="true">#</a> 3 注意事项</h2><p>1.升级glibc存在系统崩溃风险！！！升级前尽可能在个人环境下进行反复测试，确保无问题后再升级生产环境！</p><p>2.当glibc版本为2.17时千万不要直接升级到2.25！！！2.17与2.25直接差4个版本(2.18、2.22、2.23、2.24)，经反复测试确认发现直接升级到2.25时不会自动安装缺失的版本，而2.25又对之前的版本有依赖(个人猜测)，强行安装2.25不但安装失败，且会造成系统崩溃、异常(比如无法使用ls、cp等命令，无法进行远程连接)。</p><h2 id="_4-故障处理" tabindex="-1"><a class="header-anchor" href="#_4-故障处理" aria-hidden="true">#</a> 4 故障处理</h2><p>故障现象：假设在glibc2.17时直接升级到glibc2.25，将会出现操作系统崩溃的情况，如：大部分命令不可用、无法远程登录、yum报错等。</p><p>说明：出现此类问题时千万不要重启服务器，不要关闭当前的终端！！！</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编译报错输出</span>
make<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>: *** <span class="token punctuation">[</span>Makefile:84: da.mo<span class="token punctuation">]</span> Segmentation fault <span class="token punctuation">(</span>core dumped<span class="token punctuation">)</span>
make<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>: Leaving directory <span class="token string">&#39;/root/glibc-2.25/po&#39;</span>
make<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: *** <span class="token punctuation">[</span>Makefile:215: po/subdir_install<span class="token punctuation">]</span> Error <span class="token number">2</span>
make<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Leaving directory <span class="token string">&#39;/root/glibc-2.25&#39;</span>
make: *** <span class="token punctuation">[</span>Makefile:12: install<span class="token punctuation">]</span> Error <span class="token number">2</span>
​
<span class="token comment"># 命令执行输出错误</span>
<span class="token punctuation">[</span>root@centos84 build<span class="token punctuation">]</span><span class="token comment"># ls</span>
ls: relocation error: /lib64/libpthread.so.0: symbol __libc_dl_error_tsd, version GLIBC_PRIVATE not defined <span class="token keyword">in</span> <span class="token function">file</span> libc.so.6 with <span class="token function">link</span> <span class="token function">time</span> reference
​
<span class="token comment"># yum执行输出</span>
<span class="token punctuation">[</span>root@centos84 build<span class="token punctuation">]</span><span class="token comment"># yum</span>
/usr/bin/python: relocation error: /lib64/libpthread.so.0: symbol __libc_dl_error_tsd, version GLIBC_PRIVATE not defined <span class="token keyword">in</span> <span class="token function">file</span> libc.so.6 with <span class="token function">link</span> <span class="token function">time</span> reference
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>故障原因：glibc2.25未编译安装成功，但部分组件依赖的函数库软链接指向到了glibc2.25上。</p><p>解决办法：将软链接指向原glibc-2.17</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.先解决ls不能使用的问题</span>
sln /usr/lib64/libc-2.17.so /lib64/libc.so.6
sln /usr/lib64/ld-2.17.so /usr/lib64/ld-linux-x86-64.so.2
<span class="token comment"># 再次执行ls时已经恢复正常了</span>
<span class="token comment"># 上述的方式只是临时恢复了，如果执行ldconfig又会报错，需要执行以下操作进行彻底修复</span>
​
<span class="token comment"># 2.彻底解决崩溃问题</span>
<span class="token comment"># 链接指回libc-2.17 删除glibc2.25有关的文件</span>
sln /usr/lib64/libc-2.17.so /lib64/libc.so.6
sln /usr/lib64/ld-2.17.so /usr/lib64/ld-linux-x86-64.so.2
sln /usr/lib64/libdl-2.17.so /usr/lib64/libdl.so.2
<span class="token comment"># 删除2.25文件</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/lib64/libc-2.25.so /usr/lib64/ld-2.25.so /usr/lib64/libdl-2.25.so
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),c=[l];function t(p,r){return s(),a("div",null,c)}const u=n(i,[["render",t],["__file","20240726_centos7_upgrade_glibc.html.vue"]]);export{u as default};
