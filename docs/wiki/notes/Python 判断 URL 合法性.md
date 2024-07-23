
```python
import re

# url_pattern = re.compile(r'^(https?://)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*/?$') # 不能匹配带 ? 的地址
url_pattern = re.compile(r'https?://(?:[-\w.]|(?:%[\da-fA-F]{2}))+')

def is_valid_url(url):
    if url_pattern.match(url):
        return True
    else:
        return False
```

### 参考资料

- [如何在Python中使用正则表达式验证URL？|极客笔记 (deepinout.com)](https://deepinout.com/python/python-qa/t_how-do-you-validate-a-url-with-a-regular-expression-in-python.html)
