注释

```lua
-- a

--[[
a
b
c
d
]]
```

遍历数组

```lua
list = {"a", "b", "c"}

for i = 1, #list do
	print(list[i])
end

for i, v in ipairs(list) do
	print(v)
end
```

判断非空

```lua
if a ~= nil then
	-- do something
end
```

判断非空表

```lua
local a = {}

if next(a) ~= nil
	--不是空表
else
	--空表
end
```


字符串替换

```lua
res = string.gsub(str, "BEFORE", "AFTER")
```

### 参考资料

- [[Lua 混合编程]]
- [Lua中的非空判断_lua nil-CSDN博客](https://blog.csdn.net/qq_36383623/article/details/103955190)
- [Lua table遍历 - kaizenly - 博客园 (cnblogs.com)](https://www.cnblogs.com/Braveliu/p/10750574.html)
- [lua 判断table是否为空的正确做法_lua判断数组是否为空-CSDN博客](https://blog.csdn.net/hp_cpp/article/details/108244517)