编码

```python
encode_info = {
	"xxx": xxx,
}
base64_info = str(base64.b64encode(json.dumps(encode_info, ensure_ascii=False).encode('utf-8')), 'utf-8')
```

解码

```python
base64_info = str(text).encode('utf-8')
info = str(base64.b64decode(base64_info), 'utf-8')
json_info = json.loads(info)
```

### 参考资料

- [python中base64编码与解码_python中编码和解码base64-CSDN博客](https://blog.csdn.net/fireflylane/article/details/84674509)