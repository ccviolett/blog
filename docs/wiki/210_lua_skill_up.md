---
order: 210
icon: computer
---

# Lua 技巧提升

## 功能实现

### 域名提取

```lua
function extractURL(inputString)
    -- URL的模式匹配，确保协议和域名都存在
    local urlPattern = 'https?://[%w.-]+/%S*'
    local url = string.match(inputString, urlPattern)
    return url
end
```

### 异常处理

异常处理是程序中至关重要的一环，不仅仅保证了程序不会意外中断、丢失数据、造成更大的影响，也能够为运营提供足够的数据来判断问题的出处。

在 Lua 中没有类似 `try-catch` 或 `try-except` 之类的语法糖，只给我们提供了 `pcall` 和 `xpcall` 两个函数来进行异常处理。

我们可以按照下面的模板来写 Lua 当中的异常处理：

```lua
if xpcall(function() CallTheFunction(args) end, function(err) HandleError(err) end) then
	-- do something when everything good
else
	-- do something when something go wrong
end
```

### 注释

```lua
-- a

--[[
a
b
c
d
]]
```

### 遍历数组

```lua
list = {"a", "b", "c"}

for i = 1, #list do
	print(list[i])
end

for i, v in ipairs(list) do
	print(v)
end
```

### 判断非空

```lua
if a ~= nil then
	-- do something
end
```

### 判断非空表

```lua
local a = {}

if next(a) ~= nil
	--不是空表
else
	--空表
end
```


### 字符串替换

```lua
res = string.gsub(str, "BEFORE", "AFTER")
```

## 混合编程

#### 参考资料

- https://github.com/scoder/lupa
- [混合编程：在Go中与Python共舞-腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/2403409)
- [探秘pLua：轻量级的Python与Lua交互库-CSDN博客](https://blog.csdn.net/gitblog_00083/article/details/137367920)
- [【Go-Lua】Golang嵌入Lua代码——gopher-lua_golang lua-CSDN博客](https://blog.csdn.net/xuehu96/article/details/126613678)

## 参考资料

- [Lua中的非空判断_lua nil-CSDN博客](https://blog.csdn.net/qq_36383623/article/details/103955190)
- [Lua table遍历 - kaizenly - 博客园 (cnblogs.com)](https://www.cnblogs.com/Braveliu/p/10750574.html)
- [lua 判断table是否为空的正确做法_lua判断数组是否为空-CSDN博客](https://blog.csdn.net/hp_cpp/article/details/108244517)
- [挑战一晚上从零入门lua语言，直接对标Python快速上手-腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1908398)