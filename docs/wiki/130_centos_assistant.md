--- 
icon: terminal
order: 130
---

# CentOS 协助宝典

## 常见问题

### Curl 安装（危险）

通过源码编译安装 curl 可能会导致 yum 无法使用！

```sh
sudo yum install wget gcc openssl-devel -y
wget https://curl.se/download/curl-8.9.0.tar.gz
tar -xvf curl-8.9.0.tar.gz
cd curl-8.9.0 || exit
./configure --with-ssl=/usr/local/openssl
make -j8
sudo make install
sudo mv /usr/bin/curl /usr/bin/curl.bak
sudo ln -s /usr/local/bin/curl /usr/bin/curl
cd .. || exit

sudo rm /usr/local/lib/libcurl.so /usr/local/lib/libcurl.so.4
sudo ln -s /usr/lib64/libcurl.so.4.3.0 /usr/local/lib/libcurl.so.4
```

#### 参考资料

- https://blog.csdn.net/lyc0424/article/details/107541357

### Python 3.12 安装

#### OpenSSL 安装

我们可以通过 `openssl version` 查看 OpenSSL 的版本，Pyenv 需要 openssl 1.1.1+，如果满足可以跳过此步。

下面来安装 OpenSSL 3.3.1

```sh
wget https://github.com/openssl/openssl/releases/download/openssl-3.3.1/openssl-3.3.1.tar.gz
tar -xvf openssl-3.3.1.tar.gz
cd openssl-3.3.1 || exit
./config -Wl,-rpath=/usr/lib64 --prefix=/usr/local/openssl --openssldir=/usr/local/openssl --libdir=/usr/lib64 --shared
sudo make -j8  && sudo make install
sudo mv /usr/bin/openssl /usr/bin/openssl.bak
sudo ln -s /usr/local/openssl/bin/openssl /usr/bin/openssl
cd .. || exit
```

#### PyEnv 安装

```sh
sudo yum install @development zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel xz xz-devel libffi-devel findutils
curl -L https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer | bash
cat << EOF >> ~/.bashrc
export PYENV_ROOT="\$HOME/.pyenv"
export PATH="\$PYENV_ROOT/bin:\$PATH"
eval "\$(pyenv init -)"
EOF
source ~/.bashrc
```

#### Python 安装

我们可以通过 `pyenv` 指令控制 Python 版本

```sh
pyenv install 3.10.0
pyenv rehash
pyenv global 3.10.0
```

最后记得要重启一下终端，才能够更新 Python 的版本，`pip` 也会自动更新为对应的版本。

### 参考资料

- [Windows上安装pyenv，以及pyenv切换环境不生效的问题_pyenv 切换不生效-CSDN博客](https://blog.csdn.net/jioulongzi/article/details/133880310)
- [Python版本管理神器-pyenv - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/36402791)


### CentOS SQlite 手动升级

我们在运行服务（如 Django）的时候，可能会遇到类似下面这样的报错信息：

```sh
django.db.utils.NotSupportedError: SQLite 3.27 or later is required (found 3.26.0).
```

在通过 `yum install sqlite` 之后依然无法解决，则需要我们手动升级 `SQLite` 版本。

在官网[SQLite Download Page](https://www.sqlite.org/download.html)找到最新版本包的下载地址，下面以 3.46.0 为例，下载并编译安装

```shell
wget https://www.sqlite.org/2024/sqlite-autoconf-3460000.tar.gz
tar xvf sqlite-autoconf-3460000.tar.gz
cd sqlite-autoconf-3460000
./configure
make -j 8
sudo make install
```

添加类库路径，编辑文件 `/etc/ld.so.conf.d/sqlite.conf`，内容如下： 

```sh
/usr/local/lib
```

随后加载库即可 

```shell
sudo ldconfig
sudo ldconfig -p | grep sqlite
```

显示包含 `libsqlite3` 即为安装成功。

#### 参考资料

-  [centos8stream 升级 sqlite3 ，解决 SQLite 3.27 or later is required (found 3.26.0)._centos8 yum sqlite-CSDN博客](https://blog.csdn.net/ly1358152944/article/details/134970257)。