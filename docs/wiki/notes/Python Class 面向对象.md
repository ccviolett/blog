抽象类：

```python
from abc import abstractmethod, ABCMeta


class GraphicRule(metaclass=ABCMeta):
    """图形接口类"""

    @abstractmethod
    def area(self):
        """面积"""
        pass

    @abstractmethod
    def perimeter(self):
        """周长"""
        pass


class Rectangle(GraphicRule):
    """矩形类"""
    def __init__(self, b, h):
        self.b = b
        self.h = h

	@property
    def area(self):
        return self.b*self.h

	@property
    def perimeter(self):
        return (self.b+self.h)*2

# 实例矩形类的一个对象
rect1 = Rectangle(3, 7)
print("矩形面积：{}".format(rect1.area))
print("矩形周长：{}".format(rect1.perimeter))
```

### 参考资料

- [python——class类和方法的用法详解_python class-CSDN博客](https://blog.csdn.net/qq_45779334/article/details/107858999)
- [Python3之接口类（InterfaceClass）浅谈_python interface-CSDN博客](https://blog.csdn.net/qq_35844043/article/details/104862886)
- [Python 函数装饰器 | 菜鸟教程 (runoob.com)](https://www.runoob.com/w3cnote/python-func-decorators.html)
- [Python3之接口类（InterfaceClass）浅谈_python interface-CSDN博客](https://blog.csdn.net/qq_35844043/article/details/104862886)