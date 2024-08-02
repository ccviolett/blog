#### 类型判断

```python
if type(val) == type([]):
	pass
```

#### 类型限定

```python
def sum(a: int, b: int) -> int:
	return a + b

s: str = "Hello"
```

#### 联合类型

```python
from typing import Union
def read(name: str) -> Union[str, None]:
	return None
```

#### 调用对象（函数参数）


```python
from collections.abc import Callable
```

### 参考资料

- [Python type() Function (w3schools.com)](https://www.w3schools.com/python/ref_func_type.asp)
- [Python 类型提示(Typing Hint)使用详解 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/688656182) 
- [Python Type Hints 简明教程（基于 Python 3.12） - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/464979921)