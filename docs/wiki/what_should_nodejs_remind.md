# 使用 NodeJS 需要注意些什么？

在使用 `build` 项目之前，先把 `NodeJS` 的内存限制开大，否则可能会出现未知错误。

```bash
export NODE_OPTIONS=--max_old_space_size=4096
```