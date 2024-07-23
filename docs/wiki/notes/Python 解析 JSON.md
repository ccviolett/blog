```
import json

data = {
	name: "Alice"
}

json_str = json.dumps(data, ensure_ascii=False, indent=4)

data_c = json.loads(json_str)
```

### 参考资料

- [Python3 JSON 数据解析 | 菜鸟教程 (runoob.com)](https://www.runoob.com/python3/python3-json.html)
- [Python json.dumps() 中文乱码问题_python打印json.dumps乱码问题-CSDN博客](https://blog.csdn.net/weixin_40612082/article/details/90115045)