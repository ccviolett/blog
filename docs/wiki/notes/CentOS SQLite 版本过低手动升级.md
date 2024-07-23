若运行服务时显示类似的报错信息：

```
django.db.utils.NotSupportedError: SQLite 3.27 or later is required (found 3.26.0).
```

则需要手动升级 `SQLite` 版本。

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

```
/usr/local/lib
```

随后加载库即可 

```shell
sudo ldconfig
sudo ldconfig -p | grep sqlite
```

显示包含 `libsqlite3` 即为安装成功。

### 参考资料

-  [centos8stream 升级 sqlite3 ，解决 SQLite 3.27 or later is required (found 3.26.0)._centos8 yum sqlite-CSDN博客](https://blog.csdn.net/ly1358152944/article/details/134970257)。