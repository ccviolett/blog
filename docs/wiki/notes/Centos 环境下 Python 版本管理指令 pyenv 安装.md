首先安装 `pyenv` 的依赖：

```
sudo yum install @development zlib-devel bzip2 bzip2-devel readline-devel sqlite \
sqlite-devel openssl-devel xz xz-devel libffi-devel findutils
```

随后运行安装指令：

```
curl -L https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer | bash
```

随后在 `.bashrc` 或 `.zshrc` 中配置相关系统变量：

```
export PYENV_ROOT="$HOME/.pyenv" 
export PATH="$PYENV_ROOT/bin:$PATH" 
eval "$(pyenv init -)"
```

随后即可通过 `pyenv` 指令控制 Python 版本

```
pyenv install 3.10.0
pyenv rehash
pyenv global 3.10.0
```

随后记得要重启一下终端，才能够更新 Python 的版本，`pip` 也会自动更新为对应的版本。

### 参考资料

- [Windows上安装pyenv，以及pyenv切换环境不生效的问题_pyenv 切换不生效-CSDN博客](https://blog.csdn.net/jioulongzi/article/details/133880310)
- [Python版本管理神器-pyenv - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/36402791)