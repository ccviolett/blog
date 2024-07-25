---
icon: terminal
order: 20
---

# 通用 Linux 协助宝典

## 终端配置

### Zsh

首先我们通过 Linux 的包管理命令安装 zsh，随后配置 `Oh My Zsh`，通过以下的脚本一键安装。

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

但是因为众所周知的原因，这个命令经常会出现无法运行的情况，我们可以使用国内的镜像源。

```sh
sh -c "$(curl -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh)"
```

随后我们安装一些常用的插件，如 zsh-autosuggestions，通过以下的脚本一键安装：

```sh
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

随后将 `zsh-autosuggestions` 添加到 `~/.zshrc` 文件的 `plugins` 中去，修改完后配置文件如下。

```
plugins=(git zsh-autosuggestions)
```

#### 相关资料

- 官方网站：[Oh My Zsh - a delightful & open source framework for Zsh](https://ohmyz.sh)
- Github 项目：[GitHub - ohmyzsh/ohmyzsh: 🙃 A delightful community-driven (with 2,100+ contributors) framework for managing your zsh configuration. Includes 300+ optional plugins (rails, git, macOS, hub, docker, homebrew, node, php, python, etc), 140+ themes to spice up your morning, and an auto-update tool so that makes it easy to keep up with the latest updates from the community.](https://github.com/ohmyzsh/ohmyzsh)
- 国内配置：[oh-my-zsh 国内安装及配置 - 掘金](https://juejin.cn/post/7023578642156355592)
- [zsh & oh-my-zsh 的配置与使用 - 知乎](https://zhuanlan.zhihu.com/p/58073103)