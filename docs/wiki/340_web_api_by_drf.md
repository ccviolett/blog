---
order: 340
icon: cube
---

# DRF 开发 Web API 基础

Django REST framework (DRF) 是一个成熟的 Python 后端框架。

### 安装依赖

通过 `pip install django-rest-framework` 安装支持 RESTful 风格 API 的组件。

将安装的 `rest_framework` 应用添加到项目设置中，修改项目文件夹下的 `settings.py` 如下：

```python
INSTALLED_APPS = [
    ...
    'rest_framework',
]
```

### 创建应用

我们假定项目名称为 `[project_name]`，应用名称为 `[app_name]`。

进入应用目录，编辑 `views.py` 代码如下：

```python
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets

class AnalyzeViewSet(viewsets.ModelViewSet):
    def create(self, request, *args, **kwargs):
        return HttpResponse('create')

    def list(self, request, *args, **kwargs):
        return HttpResponse('list')

    def retrieve(self, request, *args, **kwargs):
        return HttpResponse('retrieve')

    def update(self, request, *args, **kwargs):
        return HttpResponse('update')

    def destroy(self, request, *args, **kwargs):
        return HttpResponse('destroy')
```

这就是一个标准的 RESTful API 的格式了，我们只需要在每个函数中完成相对应的功能即可，也可以在函数中使用 `super().[function]()` 来调用外部的函数。

### 获取参数

其中 `request` 为 `Django REST framework` 的 `Requests`，可以通过 `request.data` 获取 POST 的数据，通过 `request.query_parmas` 获取 GET 的数据。

### 设置路由

修改项目文件夹 `[project_name]/[project_name]` 下的 `urls.py` 来设置路由。

```python
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from api.views import AnalyzeViewSet

router = routers.DefaultRouter()
router.register(r'analyze', AnalyzeViewSet, basename='')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
```

我们
### 参考资料

- [python - 利用 Django REST framework 构建 RESTful Web API - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000043865961)
- [AssertionError: `base_name` argument not specified, and could not automatically determine the..._`basename` argument not specified, and could not a-CSDN博客](https://blog.csdn.net/qq_41854273/article/details/83893657)
- [Django 预期从视图返回Response、HttpResponse或HttpStreamingResponse，但接收到的是|极客教程 (geek-docs.com)](https://geek-docs.com/django/django-questions/887_django_expected_a_response_httpresponse_or_httpstreamingresponse_to_be_returned_from_the_view_but_received_a_class_nonetype.html)
- [Requests - Django REST framework (django-rest-framework.org)](https://www.django-rest-framework.org/api-guide/requests/)
- [Django REST Framework 常见需求实践 - 微信后台开发 - KM平台 (woa.com)](https://km.woa.com/articles/show/565852?from=iSearch)
- [深入探索 Django Rest Framework - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/643397754)
- [django rest framework 获取前端参数的几种方式 - 简书 (jianshu.com)](https://www.jianshu.com/p/4b746e566d78)