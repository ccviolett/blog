在 Python3 中，`list` 去除了 `sort` 的 `cmp` 字段，使得我们没办法直接写自定义比较函数。

不过我们可以用 `functools` 中的 `cmp_to_key` 将比较函数转换为比较的 Key

```python
import functools

def myCmp(x, y):
	if x > y:
		return 1
	if x < y:
		return -1
	return 0

myList.sort(key=functools.cmp_to_key(myCmp))
```

### 参考资料

- [Python3 自定义 sort() 的排序规则_python3 sort-CSDN博客](https://blog.csdn.net/gongjianbo1992/article/details/107324871)