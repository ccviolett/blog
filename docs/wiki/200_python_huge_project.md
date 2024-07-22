---
order: 200
icon: python
---

# Python 大型项目开发

## 对接接口

```python
fields = ["name", "age", "city"]

# 动态创建一个新的 Person 类，包含指定的字段
Person = type("Person", (object,), {field: None for field in fields})

# 使用字典数据实例化 Person 类
person = Person(**data)

print(person.name)  # 输出: John
print(person.age)   # 输出: 30
print(person.city)  # 输出: New York

# 将 Person 类转化回字典数据
person_dict = vars(person)
```