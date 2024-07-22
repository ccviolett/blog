---
icon: spider
order: 110
---

# 基于 Selenium 的全能爬虫指南


## Selenium 小技巧

截图

x = driver.get_screenshot_as_base64()
image = base64.b64decode(x)
with open(image_name, "wb") as file:
file.write(image)

使用 Cookies

首先我们要确保 driver 停留在 Cookies 中 domain 所描述的页面上，否则可能会添加失败。

for cookie in cookies:
    cookie_dict = {
        'domain': '.woa.com',
        'name': cookie.get('name'),
        'value': cookie.get('value'),
        "expires": '',
        'path': '/',
        'httpOnly': False,
        'HostOnly': False,
        'Secure': False
    }
    driver.add_cookie(cookie_dict)

获取 input 类型

可以通过 item.get_attribute('attribute') 来获取其 HTML 属性（见 selenium 获取input输入的文本值和获取元素中的文本内容_c# selenium获取input的值-CSDN博客），故我们可以通过 item.get_attribute('type')来获取 input 的类型，来判断是否可以点击、是否用于提交表单。

## 网络请求 HAR 抓取

我们通过 `Browsermob-Proxy` 来完成网络请求的抓取。

BrowsermobProxy 是一个基于 Java11 的服务框架，我们首先要确保我们电脑上安装了 Java11，见 [Java Archive Downloads - Java SE 11 | Oracle 中国](https://www.oracle.com/cn/java/technologies/javase/jdk11-archive-downloads.html)。

随后我们需要通过 `pip install browsermob-proxy` 安装相关的 Python 包。

## 相关资料

