--- 
date: 2024-07-25
order: 30
---

# CentOS 协助宝典

## 常见问题

### Python 

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