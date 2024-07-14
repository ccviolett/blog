---
title: Vuepress
icon: laptop-code
category:
  - 使用指南
---

### 坑

#### Build

```bash
export NODE_OPTIONS=--max_old_space_size=4096
```

### VuePress Theme Hope

#### 安装配置

```sh
pnpm install -D chart.js echarts flowchart.ts katex @vue/repl reveal.js mermaid mathjax-full @waline/client
```

在 `src/.vuepress/theme.ts` 中找到类似于 `install XXX before enabling it` 的内容，将其下的注释内容给打开。

::: important
重要容器。
:::

::: info
信息容器。
:::

::: note
注释容器。
:::

::: tip
提示容器
:::

::: warning
警告容器
:::

::: caution
危险容器
:::

::: details
详情容器
:::

::: md-demo 自定义标题的容器
a
:::