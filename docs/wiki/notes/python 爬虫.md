
UserAgent

```python
from fake_useragent import UserAgent
ua = UserAgent()
headers = {
	#ua.random 表示的时 随机生成一个User-Agent，这样的话我们就能有很多个 User-Agent 来使用，
     #就不用再担心 被封ip了。
	"User-Agent": ua.random,
    "Accept" : "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Accept-Language" : "zh-CN,zh;q=0.9",
    "Accept-Encoding" : "gzip, deflate, br",
    "DNT" : "1",
    "Connection" : "cloes"
}
```

### 参考资料

- [Python requests模块破解反爬虫_屏蔽 python-requests-CSDN博客](https://blog.csdn.net/qq_41945828/article/details/105173061)