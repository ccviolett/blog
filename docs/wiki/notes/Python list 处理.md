 
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

### 链接

```python
newlist = sum([
	list(listA),
	list(listB)
],[])
```

如果不加 `list`，可能会报错 `tuple`，见 [[Python tuple 错误]]

- [python can only concatenate_Python错误集锦：TypeError: can only concatenate list (not “tuple”) to list...-CSDN博客](https://blog.csdn.net/weixin_34327800/article/details/113960880)

### 参考资料

- [如何在Python中获取列表的最后一个元素？|极客教程 (geek-docs.com)](https://geek-docs.com/python/python-ask-answer/t_how-to-get-the-last-element-of-a-list-in-python.html)
