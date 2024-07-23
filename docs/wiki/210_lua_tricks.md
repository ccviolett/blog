---
order: 210
---
# Lua 的一些小技巧

## 异常处理

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