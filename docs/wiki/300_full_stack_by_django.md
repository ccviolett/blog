---
order: 300
icon: cube
---

# Django 技能精进

## Django RESTful Framework

### 功能实现

#### 二级路由分页

在 DRF 中，我们可以很方便地通过 ViewSet 生成包含基础 CRUD 的 endpoint，并且能够通过 `@action` 装饰器在当前 endpoint 下快速注册子路由。

```python
@action(detail=False, methods=['get'], url_path='status/(?P<status_code>\d+)')
def get_status_vulinfos(self, request, status_code):
	vulinfos = VulInfo.objects.filter(status=status_code)

	page = self.paginate_queryset(vulinfos)
	if page is not None:
		serializer = VulInfoSerializer(page, many=True)
		return self.get_paginated_response(serializer.data)

	serializer = VulInfoSerializer(vulinfos, many=True)
	return Response(serializer.data, status=200)
```
