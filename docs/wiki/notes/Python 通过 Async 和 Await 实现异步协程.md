```python
import asyncio 
import time 
async def visit_url(url, response_time): 
	"""访问 url""" 
	await asyncio.sleep(response_time) 
	return f"访问{url}, 已得到返回结果" 
	
start_time = time.perf_counter() 
task = visit_url('http://wangzhen.com', 2) 
asyncio.run(task) 
print(f"消耗时间：{time.perf_counter() - start_time}")
```

### 异步迭代器 `async for`


### 参考资料

- [python教程：使用 async 和 await 协程进行并发编程 - 和牛 - 博客园 (cnblogs.com)](https://www.cnblogs.com/heniu/p/12740400.html)
- [Python Async/Await入门指南 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/27258289)