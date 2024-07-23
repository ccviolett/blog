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

### 参考资料

- [Python 正则表达式 | 菜鸟教程 (runoob.com)](https://www.runoob.com/python/python-reg-expressions.html)