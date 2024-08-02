---
order: 320
icon: cube
---

# Selenium 全能爬虫指南

## 待整理

```python
wait.until(EC.url_changes(url))
```

## 环境配置

### 下载 Chrome 和 Chrome Driver

虽然新版本的 `Selenium` 已经可以自动根据 Chrome 版本去下载对应的 Chrome Driver 了，但是这种便利也造成了一些问题，详见 [解决selenium新版启动缓慢 (卡住) 的问题_selenium chrome速度太慢-CSDN博客](https://blog.csdn.net/qq_50735685/article/details/137022098)。

![博客截图](./_images/企业微信截图_17219745163624.png =x400)

如果没有特殊情况的话，建议直接在 [Chrome for Testing availability (googlechromelabs.github.io)](https://googlechromelabs.github.io/chrome-for-testing/) 上下载配套版本的 Chrome 和 Chrome Driver。

如果本地的环境比较老旧，无法正常运行最新的 Stable 版本，需要旧版本的，可以去[chromedriver.storage.googleapis.com/index.html](https://chromedriver.storage.googleapis.com/index.html)。

如果发现下载旧版本的 Chrome 也无法运行（如 glibc 版本过低），那么可以从软件源下载可用的 Chrome、Chromium 后，根据下载的版本去找对应的 Chrome Driver（只要大版本对就可以用）。

随后我们在初始化 `Selenium` 的时候指定 Chrome 和 Chrome Driver 的路径即可（如果 Chrome 使用的是系统默认的，可以不指定）

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service

opt = Options()
opt.binary_location = chrome_path
service = Service(driver_path)
driver = webdriver.Chrome(service=service, options=opt)
```

## 功能实现

### 随机 UA

我们可以通过 `fake_useragent` 包来实现。

```python
from fake_useragent import UserAgent
ua = UserAgent()
headers = {
	#ua.random 表示的时 随机生成一个User-Agent，这样的话我们就能有很多个 User-Agent 来使用，
    #就不用再担心 被封ip了。
	"User-Agent": ua.random,
  "Accept" : "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
}
```

#### 参考资料

- [Python requests模块破解反爬虫_屏蔽 python-requests-CSDN博客](https://blog.csdn.net/qq_41945828/article/details/105173061)


### 截图

```python
x = driver.get_screenshot_as_base64()
image = base64.b64decode(x)
with open(image_name, "wb") as file:
file.write(image)
```

### 使用 Cookies

首先我们要确保 driver 停留在 Cookies 中 domain 所描述的页面上，否则可能会添加失败。

```python
for cookie in cookies:
    cookie_dict = {
        'domain': '.baidu.com',
        'name': cookie.get('name'),
        'value': cookie.get('value'),
        "expires": '',
        'path': '/',
        'httpOnly': False,
        'HostOnly': False,
        'Secure': False
    }
    driver.add_cookie(cookie_dict)
```

### 获取 input 标签类型

可以通过 `item.get_attribute('attribute')` 来获取其 HTML 属性，故我们可以通过 `item.get_attribute('type')`来获取 input 的类型。

## 网页内容分析

我们通过 `Beautiful Soup` 来完成网页内容分析

## 网络请求 HAR 抓取

我们通过 `Browsermob-Proxy` 来完成网络请求的抓取。

BrowsermobProxy 是一个基于 Java11 的服务框架，我们首先要确保我们电脑上安装了 Java11，见 [Java Archive Downloads - Java SE 11 | Oracle 中国](https://www.oracle.com/cn/java/technologies/javase/jdk11-archive-downloads.html)。

随后我们需要通过 `pip install browsermob-proxy` 安装相关的 Python 包。

### 对接细节

如果我们想要在 `python` 的网络请求中，通过 `request` 利用 BMP 抓取到的 HAR 文件，那么我们有一些东西需要经过转换处理。

里面有很多东西是不能直接对接到 `request` 中使用的，headers 和 cookies 需要转换可以比较明显地看出来，但是有一些错误可能非常隐蔽，并且没有文档可以参考。

#### application/x-www-form-urlencoded

格式为 `application/x-www-form-urlencoded` 格式的 POST 请求，在 HAR 文件中是下面的形式：

```json
{
  "pageref": "test_har_470cc100-a475-47e7-867b-75136b30e8a5",
  "startedDateTime": "2024-07-16T11:14:15.111+08:00",
  "request": {
    "method": "POST",
    "url": "",
    "httpVersion": "HTTP/1.1",
    "cookies": [],
    "headers": [
      ...
    ],
    "queryString": [],
    "postData": {
      "mimeType": "application/x-www-form-urlencoded",
      "params": [
        {
          "name": "username",
          "value": "test_fe932eb8-85ba-4090-b8f1-6d145225f8de",
          "comment": ""
        },
        {
          "name": "password",
          "value": "test_12b0b5f0-f54f-4aa4-a4a0-dcae121f31c8",
          "comment": ""
        }
      ],
      "comment": ""
    },
    "headersSize": 570,
    "bodySize": 101,
    "comment": ""
}
```

我们可能以为可以通过其中 `postData.params` 的数据来发送 `requests` 请求，但是这是错误的。

在 `requests` 中，我们需要转化为 K-V 形式的 `dict`，才能通过 `request.post(url, data=data)` 正确发送。

## 抛弃 Seleinum

Selenium 存在若干不便利的地方。

	`undetected_chromedriver` 替代 Selenium

程序需要放在 `if __name__ == '__main__':` 当中，否则会遇到 `freeze_support` 问题。

### 参考资料

- [用undetected_chromedriver代替selenium解决浏览器打不开网页_undetected-chromedriver加载浏览器报错-CSDN博客](https://blog.csdn.net/Scott0902/article/details/127024380)
- [PyTorch：The “freeze_support()” line can be omitted if the program is not going to be frozen_the freeze support line-CSDN博客](https://blog.csdn.net/shenfuli/article/details/103969964)

## 相关资料

- [使用python3+selenium+browsermob-proxy-2.1.4 模拟浏览器开发者模式 Network中的抓包_browsermob proxy 下载-CSDN博客](https://blog.csdn.net/u010741112/article/details/118674293)
- [selenium 获取input输入的文本值和获取元素中的文本内容_c# selenium获取input的值-CSDN博客](https://blog.csdn.net/teachskyLY/article/details/85037383)
- [selenium的八种定位方式之：id、name、tag_name、class_name、link_text、partial_link_text、xpath_selenium name定位-CSDN博客](https://blog.csdn.net/c_xiazai12345/article/details/120624058)
- [Python爬虫（1）一次性搞定Selenium(新版)8种find_element元素定位方式_selenium find element-CSDN博客](https://blog.csdn.net/qq_16519957/article/details/128740502)
- [【自动化】【爬虫】终极方案 = Selenium + browsermob-proxy - 简书 (jianshu.com)](https://www.jianshu.com/p/7258ecfc6111)
- [python + selenium + browsermobproxy环境配置-CSDN博客](https://blog.csdn.net/qq_44315987/article/details/116501955)
- [server.start()出现报错browsermobproxy.exceptions.ProxyServerError_browsermobproxy.exceptions.proxyservererror: the b-CSDN博客](https://blog.csdn.net/qq_53953480/article/details/130509455)
- [browsermob-proxy使用时常见问题的解决办法-CSDN博客](https://blog.csdn.net/weixin_42521409/article/details/127927149)
- [Selenium爬虫-获取浏览器Network请求和响应-腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1549872)
- [selenium工具之解决元素不可交互 （element not interactable）/元素被拦截（element click intercepted） - 习久性成 - 博客园 (cnblogs.com)](https://www.cnblogs.com/hls-code/p/16263821.html)
