---
date: 2024-07-26
---

# centos7升级glibc2.25避坑指南

centos7默认的glibc函数库的版本为2.17，无法运行一些对glibc版本有要求的中间件。为了在centos7上可以正常运行此类中间件，则需要对glibc进行升级。

假设需要安装一个中间件，该版本的中间件要求glibc函数库在2.25以上，但操作系统的glibc版本为2.17，为了符合运行要求需要对glibc进行升级。由于直接升级到glibc2.25会出现各种崩溃的问题(如：无法远程、常规基础命令无法使用等等)。经反复测试确认，可直接升级到glibc2.31(升级过程中会自动安装缺失的版本)。

## 1 基础环境准备

说明：升级之前最好保持两个以上的远程终端，防止升级失败时手误关闭了终端导致无法再远程！

升级glibc2.31前需要确保基础环境满足以下条件：gcc版本要在9以上(默认4.8.5)，make版本要在4.0以上(默认3.82)。

执行以下操作前需远程登录到目标服务器。

### 1.1 make 升级

升级前需确认当前环境的make版本(make -v)，若当前版本为3.x则确认本次需升级，若为4.x则跳过此步骤。假设当前环境的make为3.x，需要进行make升级。

```sh
# 1.安装依赖
yum -y install gcc gcc+
 
# 2.建立安装包存放目录
mkdir /backup
 
# 3.下载make安装包
cd /backup
wget https://mirrors.aliyun.com/gnu/make/make-4.3.tar.gz
 
# 4.解压压缩包并建立构建目录
tar -xf make-4.3.tar.gz
cd make-4.3
mkdir build
cd build
 
# 5.指定安装到具体的目录下，此示例表示将make安装到/opt下
../configure --prefix=/opt/make
 
# 6.编译安装
make && make install
 
# 7.建立软连接
ln -sf /opt/make/bin/make /usr/bin/make
 
# 8.检查make版本
make --version
# 输出
GNU Make 4.3
Built for x86_64-pc-linux-gnu
Copyright (C) 1988-2020 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
```

至此 make升级完成。

### 1.2 gcc升级

升级前需确认当前环境的gcc版本(gcc -v)，若当前版本为4.x则确认本次需升级，若为9.x则跳过此步骤。假设当前环境的gcc为4.x，需要进行gcc升级。

```sh
# 1.安装升级依赖
yum install -y gcc-c++ glibc-devel mpfr-devel libmpc-devel gmp-devel glibc-devel.i686
​
# 2.下载gcc9.3.1安装包
cd /backup
wget https://ftp.gnu.org/gnu/gcc/gcc-9.3.0/gcc-9.3.0.tar.gz --no-check-certificate
​
# 3.解包并执行编译前的准备
tar -xf gcc-9.3.0.tar.gz
cd gcc-9.3.0
# 下载依赖包
./contrib/download_prerequisites
# 建立构建目录
mkdir build
# 进入构建目录
cd build
​
# 4.指定安装到具体的目录下，此示例表示将make安装到/usr下(说明：若安装到非/usr目录,如安装到/opt/gcc，则在编译完成后需要配置环境变量、建立软连接。)
../configure --enable-checking=release --enable-language=c,c++ --disable-multilib --prefix=/usr
​
# 5.编译安装
make -j4 # -j代表编译时的任务数，一般有几个cpu核心就写几，构建速度会更快一些。该步骤执行时间很长
make install
​
# 6.上一步若安装目录不是/usr，则需要在编译完成后配置环境变量、建立软连接，若为/usr目录则跳过此步骤
# 假设将gcc编译安装到了/opt/gcc目录
# 6.1配置环境变量
vi /etc/profile.d/gcc.sh
# gcc环境配置
export PATH=/opt/gcc/bin:$PATH
export LD_LIBRARY_PATH=/opt/gcc/lib
# 编辑完成后:wq保存并退出
# 6.2重载环境变量
source /etc/profile
# 6.3重新生成新的链接
# 取消原始链接
unlink /usr/bin/cc
# 建立新链接
ln -sf /opt/gcc/bin/gcc /usr/bin/cc
ln -sf /opt/gcc/lib/gcc/x86_64-pc-linux-gnu/9.3.0/include /usr/include/gcc
# 设置库文件
echo "/opt/gcc/lib64" >> /etc/ld.so.conf.d/gcc.conf
# 加载动态连接库
ldconfig -v
# 查看加载结果
ldconfig -p | grep gcc
​
# 7.安装完成后检查gcc版本，若gcc升级失败则需查找失败原因并重新进行升级操作
gcc -v
Using built-in specs.
COLLECT_GCC=gcc
COLLECT_LTO_WRAPPER=/usr/libexec/gcc/x86_64-pc-linux-gnu/9.3.0/lto-wrapper
Target: x86_64-pc-linux-gnu
Configured with: ../configure --enable-checking=release --enable-language=c,c++ --disable-multilib --prefix=/usr
Thread model: posix
gcc version 9.3.0 (GCC)
```

## 2 升级glibc

升级前需查看当前环境的glibc是否存在符合的版本，若存在则跳过升级，此文档假设glibc当前最高的版本为2.17


```sh
# 1.查看glibc函数库版本
strings /lib64/libc.so.6 | grep -E "^GLIBC" | sort -V -r | uniq
# 输出
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
GLIBC_2.17  # 当前最高版本
GLIBC_PRIVATE
 
# 2.下载glibc-2.31安装包
cd /backup
wget https://mirrors.aliyun.com/gnu/glibc/glibc-2.31.tar.gz
 
# 3.进入到解压目录
tar -xf glibc-2.31.tar.gz
cd glibc-2.31
 
# 4.查看安装glibc的前提依赖，对于不满足的依赖需要进行升级，使用yum -y install xxx 升级或安装即可
cat INSTALL | grep -E "newer|later" | grep "*"
# 输出
* GNU 'make' 4.0 or newer
* GCC 6.2 or newer
* GNU 'binutils' 2.25 or later
* GNU 'texinfo' 4.7 or later
* GNU 'bison' 2.7 or later
* GNU 'sed' 3.02 or newer
* Python 3.4 or later
* GDB 7.8 or later with support for Python 2.7/3.4 or later
* GNU 'gettext' 0.10.36 or later
# 假设上述依赖条件已全部满足
 
# 5.建立构建目录，执行编译安装
mkdir build
 
# 6.指定安装到具体的目录下，此示例表示将make安装到/opt下
cd build/
../configure  --prefix=/usr --disable-profile --enable-add-ons --with-headers=/usr/include --with-binutils=/usr/bin --disable-sanity-checks --disable-werror
 
# 7.编译安装
make -j4  # 此处时间较长
make install
# 解决新启动远程终端时报一个WARNING
make localedata/install-locales
 
# install结束会出现一个错误，此错误可忽略
# 错误输出
Execution of gcc -B/usr/bin/ failed!
The script has found some problems with your installation!
Please read the FAQ and the README file and check the following:
- Did you change the gcc specs file (necessary after upgrading from
  Linux libc5)?
- Are there any symbolic links of the form libXXX.so to old libraries?
  Links like libm.so -> libm.so.5 (where libm.so.5 is an old library) are wrong,
  libm.so should point to the newly installed glibc file - and there should be
  only one such link (check e.g. /lib and /usr/lib)
You should restart this script from your build directory after you've
fixed all problems!
Btw. the script doesn't work if you're installing GNU libc not as your
primary library!
make[1]: *** [Makefile:120: install] Error 1
make[1]: Leaving directory '/backup/glibc-2.31'
make: *** [Makefile:12: install] Error 2'
 
# 8.安装完成后检查glibc版本
strings /lib64/libc.so.6 | grep -E "^GLIBC" | sort -V -r | uniq
# 输出
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
```

至此 glibc升级完成。

## 3 注意事项

1.升级glibc存在系统崩溃风险！！！升级前尽可能在个人环境下进行反复测试，确保无问题后再升级生产环境！

2.当glibc版本为2.17时千万不要直接升级到2.25！！！2.17与2.25直接差4个版本(2.18、2.22、2.23、2.24)，经反复测试确认发现直接升级到2.25时不会自动安装缺失的版本，而2.25又对之前的版本有依赖(个人猜测)，强行安装2.25不但安装失败，且会造成系统崩溃、异常(比如无法使用ls、cp等命令，无法进行远程连接)。

## 4 故障处理

故障现象：假设在glibc2.17时直接升级到glibc2.25，将会出现操作系统崩溃的情况，如：大部分命令不可用、无法远程登录、yum报错等。

说明：出现此类问题时千万不要重启服务器，不要关闭当前的终端！！！

```sh
# 编译报错输出
make[2]: *** [Makefile:84: da.mo] Segmentation fault (core dumped)
make[2]: Leaving directory '/root/glibc-2.25/po'
make[1]: *** [Makefile:215: po/subdir_install] Error 2
make[1]: Leaving directory '/root/glibc-2.25'
make: *** [Makefile:12: install] Error 2
​
# 命令执行输出错误
[root@centos84 build]# ls
ls: relocation error: /lib64/libpthread.so.0: symbol __libc_dl_error_tsd, version GLIBC_PRIVATE not defined in file libc.so.6 with link time reference
​
# yum执行输出
[root@centos84 build]# yum
/usr/bin/python: relocation error: /lib64/libpthread.so.0: symbol __libc_dl_error_tsd, version GLIBC_PRIVATE not defined in file libc.so.6 with link time reference
```

故障原因：glibc2.25未编译安装成功，但部分组件依赖的函数库软链接指向到了glibc2.25上。

解决办法：将软链接指向原glibc-2.17

```sh
# 1.先解决ls不能使用的问题
sln /usr/lib64/libc-2.17.so /lib64/libc.so.6
sln /usr/lib64/ld-2.17.so /usr/lib64/ld-linux-x86-64.so.2
# 再次执行ls时已经恢复正常了
# 上述的方式只是临时恢复了，如果执行ldconfig又会报错，需要执行以下操作进行彻底修复
​
# 2.彻底解决崩溃问题
# 链接指回libc-2.17 删除glibc2.25有关的文件
sln /usr/lib64/libc-2.17.so /lib64/libc.so.6
sln /usr/lib64/ld-2.17.so /usr/lib64/ld-linux-x86-64.so.2
sln /usr/lib64/libdl-2.17.so /usr/lib64/libdl.so.2
# 删除2.25文件
rm -rf /usr/lib64/libc-2.25.so /usr/lib64/ld-2.25.so /usr/lib64/libdl-2.25.so
```