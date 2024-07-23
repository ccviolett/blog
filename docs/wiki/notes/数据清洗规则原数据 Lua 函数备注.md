```lua
function GetStringFieldValue(message, key)
-- 根据 key 获取 message 数据
end

function MarkTag(message, key, value)
-- 将数据 value 写入 message 的 key 中
end

function Alarm(message, alarm_id)
-- 触发 alarm_id 对应警报并传入参数 message
end

function SocWriteIDCQueue(message, name)
-- 将 message 写入 name 表中
-- name: soc_mq_hunyuan 混元大模型队列
-- name: soc_mq_tdw 热数据
end
```
