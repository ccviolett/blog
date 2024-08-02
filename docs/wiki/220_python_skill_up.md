---
order: 220
icon: computer
---

# Python 技能精进

## 常见功能

### 网络请求

```python
import requests
res = requests.get(url)
res = requests.post(url, data=data)
res = requests.post(url, json=data)
```

### 排序

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

#### 参考资料

- [Python3 自定义 sort() 的排序规则_python3 sort-CSDN博客](https://blog.csdn.net/gongjianbo1992/article/details/107324871)


### 字符串处理

插入

```python
name = 'Bob'
str = f'Hello, {name}'
```

切割

```python
str.split(',')
```

去除前后特定字符

```python
str.strip(' ')
```

正则匹配

```python
url_pattern = re.compile(r'https?://(?:[-\w.]|(?:%[\da-fA-F]{2}))+')
url_res = url_pattern.search(text)
url = url_res.group()
```

### list 处理

#### 末尾

```python
lastItem = myList[-1]
```

需要注意 `list` 不能为空，否则会越界

#### 长度

```python
listLen = len(myList)
```

#### 铺平

```python
newlist = sum(messList, [])
```

#### 链接

```python
newlist = sum([
	list(listA),
	list(listB)
],[])
```

[python can only concatenate_Python错误集锦：TypeError: can only concatenate list (not “tuple”) to list...-CSDN博客](https://blog.csdn.net/weixin_34327800/article/details/113960880)

### Lambda

```python
sum = lambda a, b: a + b
res = sum(1, 2)
```

#### 参考资料

- [细说Python的lambda函数用法，建议收藏 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/80960485)

## 常见错误

### tuple 错误

多加 `,` 导致 `tuple` 报错

```python
list = ["a", "b", "c"],

print(type(list))
```

会得到 `<class 'tuple'>`
