---
order: 200
icon: python
---

# Python 大型项目开发

有一些 Python 的特性，只有当我们真正开发大型 Python 项目的时候，我们才能意识到他的重要性、意识到他存在的意义，而不是像在小型项目中一样只是炫技或者是玩具，比如“闭包”、“多线程”、”类型限制“等。

## 抽象

在 Python 面向对象编程中，静态函数和类函数不是一个概念。

静态函数装饰器 `staticmethod` 和抽象接口装饰器 `abstractmethod` 不能同时作用于同一个函数，但是类函数装饰器 `classmethod` 和抽象接口装饰器 `abstractmethod` 可以作用于同一个函数。

配合这一点，我们可以实现出其他语言难以实现的抽象——比如抽象类函数接口。

```python
import abc

class A(metaclass=abc.ABCMeta):
    @abc.abstractmethod
    def test1(self):
        pass

    @classmethod
    @abc.abstractmethod
    def test2(cls):
        pass

class B(A):
    def test1(self):
        pass

    @classmethod
    def test2(cls):
        pass

b = B()
b.test1()
B.test2()
```

## 闭包

###  为什么需要闭包？

闭包的目的是为了实现更好的封装，可以提前设置一些非运行时的固定参数，并保留一些运行时参数延后传入，是函数的“预制菜”，可以让不同的接口展现出统一的特性。

比如现在我在做一个爬虫，我把每个网站的 POST 接口爬取下来，然后希望以后调用的时候，只要传入用户名和密码就可以调用特定网站的 POST 接口。

那么我可能首先写了一个脚本，将所有的 POST 接口爬取了下来，然后我可以在使用的时候，去写对应的 request 来请求这些 POST 接口。但我们也可以再 POST 接口爬取下来的时候就通过一个函数，生成一个调用这个接口的函数，这样之后我们就不用关心 request 请求的细节，只需要直接调用接口的函数即可。

即有通过一个函数 `generate_post_func`，参数是对应 POST 请求的一些固定参数，返回值是一个函数 `post_func`，该函数的参数是用户名和密码，可以让我们直接通过 `post_func(username, password)` 来得到请求返回的结果。 

这个 `generate_post_func` 就是一个闭包。

### 相关资料

- [一文教你Python中的闭包-CSDN博客](https://blog.csdn.net/Saki_Python/article/details/136166366)


## 多线程并发

### 线程竞争并发示例

可以解决类似下面场景的问题：

有 n 个工作窗口，m 个客户，每个客户处理业务时会占用一个工作窗口。新建和关闭工作窗口的代价较大，即工作窗口需要一直保持在线，不能在完成单个客户的业务后关闭窗口，等下一个客户来时再新建窗口。当任意一个工作窗口空闲的时候，自动分配客户前往窗口处理业务。

```python
import abc
import time
import threading
import queue
from concurrent.futures import ThreadPoolExecutor


class ThreadingAssistantBasicClass(metaclass=abc.ABCMeta):

    lock = threading.Lock()

    def __init__(self, *args, **kwargs):
        pass

    def __del__(self):
        pass

    @classmethod
    def threading_framework(cls, max_thread_num, assistant_init_args, task_args_list, shared_variable):
        """
        作用：多线程竞争
        说明：通过 kwargs 的方式传入 assistant_init_args, task_args_list, shared_variable
        assistant_init_args 将会被解包用于 assistant 初始化
        task_args_list 和 shared_variable 将会被解包用于 threading_run
        参数：
        - max_thread_num: 最大线程数量
        - assistant_init_args: 初始化参数
        - task_args_list: 任务参数列表
        - shared_variable: 共享变量
        """
        def get_idle_assistant(idle_assistant):
            """
            获取空闲assistant的函数
            """
            while True:
                try:
                    assistant = idle_assistant.get(timeout=0)  # 立即尝试从队列中获取可用assistant
                    return assistant
                except queue.Empty:
                    time.sleep(0.1)  # 如果没有可用的assistant，稍等片刻再次尝试

        # 创建 assistant 对象列表
        assistant_list = []
        for _ in range(max_thread_num):
            try:
                assistant = cls(**assistant_init_args)
                assistant_list.append(assistant)
            except Exception as e:
                print(e)
        # 初始化空闲assistant队列
        idle_assistant = queue.Queue()
        for driver_pair in assistant_list:
            idle_assistant.put(driver_pair)
        # 创建信号量以限制并发任务数量
        semaphore = threading.Semaphore(max_thread_num)

        # 定义任务包装器函数
        def wrapped_task(task_args, shared_variable):
            with semaphore:  # 获取信号量
                assistant = get_idle_assistant(idle_assistant)  # 获取空闲assistant
                try:
                    assistant.threading_task(**task_args, **shared_variable)
                except Exception as e:
                    raise e
                idle_assistant.put(assistant)  # 将assistant放回空闲队列

        # 使用 ThreadPoolExecutor 运行任务
        with ThreadPoolExecutor() as executor:
            futures = [executor.submit(wrapped_task, task_args, shared_variable) for task_args in task_args_list]

        # 关闭 assistant 对象
        for assistant in assistant_list:
            del assistant

    @abc.abstractmethod
    def threading_task(self, *args, **kwargs):
        """
        通过解包 task_args 进入正常的流程，并加锁读写数据
        """
        pass

    @classmethod
    @abc.abstractmethod
    def threading_run(cls, *args, **kwargs):
        """
        通过转换参数调用 threading_framework
        """
        pass
```

### 参考资料

- [python多线程(Multiprocessing)与多线程(Multithreading)区别优缺点最详细解释_python multiprocessing multithreading-CSDN博客](https://blog.csdn.net/waple_0820/article/details/93026922)
- [【Python】超详细实例讲解python多线程（threading模块）_python threading介绍-CSDN博客](https://blog.csdn.net/Xiao_Liu_OvO/article/details/138716321)
- [python 异步 async/await_python async-CSDN博客](https://blog.csdn.net/qq_43380180/article/details/111573642)
- [详解Python中的多线程、线程锁、线程变量 - threading、Thread、Lock与ThreadLocal详解_python thread variable-CSDN博客](https://blog.csdn.net/qq_38962621/article/details/110767604)
- [【Python】threading控制线程的数量_threading控制线程数量-CSDN博客](https://blog.csdn.net/qq_42830966/article/details/117842969)

## 引用与封装

“数据向下引用，结果向上封装”，这是开发大型项目的时候一个很重要的观念。

### 结果封装

使用类进行结果封装，而不是 `dict`，让上一级能够明确知道返回的结果有哪些内容，并且也能够为 IDE 提供补全提示。

```python
class Result:
	key1 = None
	key2 = None
	key3 = None

def func():
	result = Result()
	result.key1 = "a"
	result.key2 = 1
	result.key3 = True
	return result
```

### 数据传递

TODO

### 对接接口

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

## 异常处理

对于 `Exception` 的错误，通过 `args` 获取到 `tuple` 格式的参数，具体代码如下：

```python
try:
	raise Exception(100)
except Exception as err:
	code = err.args[0]
	print(type(code))
```

### 参考资料

- [except as e中的‘e’的作用总结-CSDN博客](https://blog.csdn.net/lina_acm/article/details/54808910)

## 超时限制

通常我们不希望我们的程序会在某一个 `case` 上卡死，导致我们需要在运行过程中重启我们的程序。

添加一个超时限制往往是一个不错的解决方法，我们使用 `func_timeout` 库来实现超时限制。

```python
from func_timeout import func_set_timeout

@func_set_timeout(timeout_value)
def func():
	pass
```

### 参考资料

- [Python超时装饰器：优雅地处理函数执行超时-CSDN博客](https://blog.csdn.net/suiyingy/article/details/135011597)

## 解包与 args, kwargs

为了使用字典作为类 `__init__` 函数的参数，你可以在创建对象时将字典解包为关键字参数

```python
class MyClass:
    def __init__(
            self,
            tid,
            image_file_path=None,
            log_file_path=None,
            driver=None,
            server=None,
            proxy=None
    ):
        self.tid = tid
        self.image_file_path = image_file_path
        self.log_file_path = log_file_path
        self.driver = driver
        self.server = server
        self.proxy = proxy

# 创建一个字典
my_dict = {
    "tid": "XXX",
    "image_file_path": "XXX",
    # ... 其他键值对
}

# 使用字典解包为关键字参数来创建对象
my_object = MyClass(**my_dict)
```