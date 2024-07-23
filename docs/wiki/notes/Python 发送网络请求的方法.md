我们可以使用 `requests` 库方便地进行网络请求。

### 常见操作

#### 发送 POST 请求

```python
requests.post(url, json={
	"xxx": xxx,
	...
})
```

#### 获取 GET 信息

```python
res = requests.get(url).text
```

### 参考资料

- [Python requests 模块 | 菜鸟教程 (runoob.com)](https://www.runoob.com/python3/python-requests.html)