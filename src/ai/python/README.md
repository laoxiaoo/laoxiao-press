# Python 学习文档

本文档基于项目中的示例代码，系统讲解Python基础语法、函数、面向对象、数据库操作、多线程、网络请求和图像处理等核心知识。

---




# Python 虚拟环境

> 优点：Python虚拟环境与系统环境之间是隔离的一个项目一个虚拟环境，不同的虚拟环境不会相互影响，最大程度避免包冲突。
>
> 缺点：占用更大的空间，进入虚拟环境都需要使用命令activate激活才能使用，使用完，要使用deactivate命令退出。

# 创建

通过命令行创建

```shell
python-m venv 环境名
```

例如：

1. 在项目目录下创建虚拟环境 <b id="blue">env</b>

```shell
F:\git\gitee\llmops\llmops-api>python -m venv env
```

2. 在环境目录下能够看见如下的文件

![image-20260326231426068](image/1-base/image-20260326231426068.png)

3. 激活虚拟环境

```shell
F:\git\gitee\llmops\llmops-api>env\Scripts\activate
# 激活后进入虚拟环境
(env) F:\git\gitee\llmops\llmops-api>
```

4. 我们可以在虚拟环境下down相关的包，可以在Lib目录下看到对应的包
5. 退出虚拟环境

```shell
(env) F:\git\gitee\llmops\llmops-api>env\Scripts\deactivate.bat
```

# 配置镜像路径

```shell
(env) F:\git\gitee\llmops\llmops-api>pip config set global.index-url https://mirrors.cloud.tencent.com/pypi/simple
Writing to C:\Users\25181\AppData\Roaming\pip\pip.ini


(env) F:\git\gitee\llmops\llmops-api>pip config list
global.index-url='https://mirrors.cloud.tencent.com/pypi/simple'
```

# PyCharm配置

# 关联创建的虚拟环境

在setting下，能看到这个选项，关联了某个项目的虚拟环境

![image-20260330222227874](image/1-base/image-20260330222227874.png)

运行一个hello word输出程序，验证虚拟环境

# 勾选工具

格式化代码

优化导入：如果没有使用这个类，就会自动清除掉

![image-20260330222622591](image/1-base/image-20260330222622591.png)

# Python的包

如图，如果我们看到一个目录下有 _ init _.py 的文件，证明这个目录是一个包

# 依赖注入

Injector是一个轻量级依赖注入框架，轻松实现依赖注入功能，不需要显式创建依赖对象。

1. 安装依赖

```bash
(env) PS F:\git\gitee\llmops\llmops-api> pip install injector  
```

2. 通过@injector.inject 注解，自动的生成B对象
3. 可以通过构造方法，不用显示的去注入A对象
4. 通过injector.get方式取出对象，可以打印出对象A

```python
class A:
    name: str = "a"


@injector.inject
class B:
    def __init__(self, a: A):
        self.a = a

    def print_a(self):
        print(f"name:{self.a.name}")


injector = injector.Injector()
injector.get(B).print_a()
```

# 运行机制

> （解释型 + 虚拟机）

```tex
源代码（.py）
      ↓
【Python 解释器】
      ↓
编译为字节码（.pyc）
      ↓
【Python 虚拟机（PVM）】
      ↓
逐行/逐块解释执行
      ↓
操作系统 / 硬件
```



# 一、基础语法

## 1. eval() 动态计算表达式

**文件**: `1-base/2-eval.py`

```python
a = input("输入a:")
b = input("输入b：")
# 通过eval计算表达式
# 因为是变量，所以需要通过{}的方式进行包裹
# 最终c=a和b的输入只的相加
c = eval(f"{a}+{b}")
print(c)
```

**说明**:
- `input()` 函数用于获取用户输入，返回字符串类型
- `eval()` 函数将字符串作为Python表达式执行
- `f-string`（格式化字符串字面量）允许在字符串中嵌入变量，用`{}`包裹
- 例如输入`1`和`2`，`eval(f"{a}+{b}")`相当于`eval("1+2")`，结果为`3`

---

## 2. 列表定义与操作

**文件**: `1-base/3-list.py`

```python
# 列表的定义
# 列表的打印
# 打印列表类型
colours = [1, 2, 3, 4, 5]
print(colours)
print(type(colours))
# 访问第一个元素
print(colours[0])
# 删除列表元素
del colours[0]
print(colours)
```

**说明**:
- 列表（List）是Python中最常用的数据结构，用方括号`[]`定义
- 索引从`0`开始，访问第一个元素用`colours[0]`
- `del` 语句用于删除列表中的元素
- `type()` 函数返回对象的类型

---

## 3. 列表常用操作

**文件**: `1-base/4-list-operation.py`

```python
ls = ['a', 'b', 'c']
print(ls)
print(type(ls))
# 在某个位置插入元素
ls.insert(0, '-a')
print(ls)
# 尾部插入元素
ls.append("d")
print(ls)
# 将字符串变为列表，再追加到列表后面
ls.extend("efg")
print(ls)
# 移除元素
ls.remove('g')
print(ls)
# 弹出列表末尾元素，赋值给tmp
tmp = ls.pop()
print(ls)
print(tmp)
```

**说明**:
- `insert(index, item)`: 在指定位置插入元素
- `append(item)`: 在列表末尾添加元素
- `extend(iterable)`: 将可迭代对象的元素添加到列表末尾
- `remove(item)`: 移除第一个匹配的元素
- `pop(index)`: 移除并返回指定位置的元素，默认最后一个

---

## 4. 元组

**文件**: `1-base/5-tuple.py`

```python
# 元组用来处理一次性数据
# 元组是不可修改的

# 定义一个元组
c = ('a', 'a', 'b')
# 利用元组转为set，去重
new_c = set(c)
print(new_c)
# 然后再转为元组
new_c_tuple = tuple(new_c)
print(new_c_tuple)
```

**说明**:
- 元组（Tuple）用圆括号`()`定义，是不可变的数据结构
- 一旦创建，不能修改、删除或添加元素
- 可用于字典的键（列表不行）
- 代码中展示了利用`set()`去重的技巧

---

## 5. 字典

**文件**: `1-base/6-dict.py`

```python
# 定义字典类型
d = {'one': 1, 'two': 2, 'three': 3}
print(d)

d1 = dict(one=1, two=2, three=3)
print(d1)
# 遍历字典
for k, v in d.items():
    print(k, v)
# 遍历字典的值
for v in d.values(): print(v)
# 字典设置一个默认值，只有key没有value
d1.setdefault('free')
```

**说明**:
- 字典（Dictionary）是键值对数据结构，用`{}`定义
- `dict()` 可以通过关键字参数创建字典
- `items()`: 返回键值对元组组成的视图
- `values()`: 返回所有值的视图
- `setdefault(key, default)`: 如果键不存在，设置默认值并返回

---

## 6. 循环与推导式

**文件**: `1-base/7-for.py`

```python
# 循环，以：开始 ，以 tab 确定循环体
for i in (1, 2, 3, 4, 5):
    print(i)
    print("循环中")

print("循环结束")

# 字典循环
for k, v in {'one': 1, 'two': 2, 'three': 3}.items():
    print(k, v)

# 将字典变为元组
# 输出
# 0 one
# 1 two
# 2 three

for i in enumerate({'one': 1, 'two': 2, 'three': 3}):
    print(i[0], i[1])

# 通过推导式， 创建一个新的列表
# 将 i的值赋值给new_list
new_list = [i for i in range(10)]
# 将i*i的值赋值给new_list1
new_list1 = [i * i for i in range(10)]
# 如果i%2==0,则将i*i的值赋给new_list2
new_list2 = [i * i for i in range(10) if i % 2 == 0]
```

**说明**:
- `for` 循环遍历可迭代对象，循环体需要缩进
- `enumerate()` 为可迭代对象添加索引，返回`(index, value)`元组
- **列表推导式**是Python特有的简洁语法：
  - `[i for i in range(10)]`: 基础推导式
  - `[i*i for i in range(10)]`: 带计算
  - `[i*i for i in range(10) if i % 2 == 0]`: 带条件过滤

---

## 7. 命令行参数解析

**文件**: `1-base/8-arg.py`

```python
import argparse

# 通过argparse模块创建参数解析器
parser = argparse.ArgumentParser(description="用来演示参数的输入")
# 运行命令 python 8-arg.py -n 1
parser.add_argument("-n", help="输入一个数组")
# 如果 是 不带- 号，直接
# parser.add_argument("n", help="输入一个数组")
# 表示 n是必填的

# 如下，user是必填参数
parser.add_argument("user", help="输入用户名")
args = parser.parse_args()

# python .\8-arg.py -n 10 aaa
print(f"输入的参数为：{args.n}")
print(f"输入的参数为：{args.user}")
```

**说明**:
- `argparse` 是Python标准库，用于解析命令行参数
- `ArgumentParser`: 创建参数解析器
- `add_argument()`: 添加参数
  - 带`-`的参数是可选的（如`-n`）
  - 不带`-`的参数是位置参数（必填）
- 运行示例: `python 8-arg.py -n 10 alice`

---

## 8. 字符串格式化

**文件**: `1-base/9-format.py`

```python
# 三种格式化输出方式
# % 占位符（旧式）
# str.format()（新式）
# f-string（Python 3.6+，推荐）

# F-string 的计算能力
print(f"{1 + 2}")

# 输出    123.12
# 设置宽度为10 ，因为123.12的长度为6，所以前面填充空格
number = 123.12
print(f"{number:10}")
# 输出0000123.12
# 设置宽度为10 ，010表示，因为123.12的长度为6，所以前面填充0
print(f"{number:010}")
# 输出123.120
# 设置小数点保留3位
print(f"{number:.3f}")

print(f"{number:010.3f}")
```

**说明**:
- Python有三种格式化方式：%、`.format()`、f-string（推荐）
- f-string支持在`{}`内直接计算：`f"{1+2}"`输出`3`
- 格式化语法：`{value:width.precision}`
  - `width`: 最小宽度
  - `0`: 用0填充
  - `.3f`: 保留3位小数

---

# 二、函数

## 10. 函数定义与lambda

**文件**: `2-def/10-def.py`

```python
# 定义一个函数
def f1():
    print("f1")


# 如果不带（），则返回函数对象
print(f1)
# 如果带（），则执行函数
print(f1())

# 通过lambda定义一个函数
add1 = lambda x, y: x + y
print(add1(1, 2))


# 相当于如下的定义
def add2(x, y):
    return x + y


print(add2(1, 2))
```

**说明**:
- `def` 定义函数，`return` 返回值
- 函数名不加括号返回函数对象本身，加括号则调用执行
- **lambda表达式**是匿名函数，语法：`lambda 参数: 表达式`
- lambda适合简单逻辑，复杂逻辑用`def`定义

---

## 11. 函数参数类型与关键字参数

**文件**: `2-def/11-def-param.py`

```python
#  3.5可以通过添加函数入参类型，来提示开发人员传入的参数类型（仅仅提示，因为python 是解释型语句，不能编译强制入参执行）
def f2(x: int):
    print(x)


print(f2(1))
print(f2("1"))


def f3(name, age, sex):
    print(name, age, sex)


# 通过关键字参数，可以调整参数顺序
f3(age=2, name="1", sex="0")
```

**说明**:
- Python 3.5引入类型提示（Type Hints），用`:`指定参数类型
- 类型提示仅起提示作用，不强制执行
- **关键字参数**：通过`key=value`形式传参，可以不按顺序
- 混合使用位置参数和关键字参数时，位置参数必须在前面

---

## 12. 可变参数

**文件**: `2-def/12-def-variableLengthParameter.py`

```python
# 当函数的参数不定长的时候，怎么处理
def telPhone(name, *phone, address=None, **other):
    print(f"name={name} phone={phone} address={address}, other={other}")


# 输出：name=zhangsan phone=(123, 456) address=None, other={}
# 第一个参数接收固定参数
# phone接收变长参数，接受之后，默认为元组类型
telPhone("zhangsan", 123, 456)

# 输出：name=lisi phone=(123, 456) address=beijing, other={'message': '其他一些东西'}
# other 接收变长参数，接受之后，默认为字典类型
telPhone("zhangsan", 123, 456, message='其他一些东西')

# 输出：name=lisi phone=(123, 456) address=beijing, other={}
telPhone("lisi", 123, 456, address="beijing")
```

**说明**:
- `*args`: 接收多余的位置参数，封装为元组
- `**kwargs`: 接收多余的关键字参数，封装为字典
- 命名关键字参数（如`address=None`）必须使用关键字传参

---

## 13. 函数的文档字符串

**文件**: `2-def/13-def-doc.py`

```python
# 定义函数稳定，解释函数的执行逻辑
def f1():
    """
    这是函数的解释文档
    """
    print("f1")


f1()
# 获取函数的文档内容
var = f1.__doc__
print(var)
# 通过dir() 获取函数的属性，如 当前函数有__doc__ 属性
# 可以通过他来获取函数的帮助文档
print(dir(f1))
```

**说明**:
- 文档字符串（Docstring）用三引号`"""`定义在函数开头
- `函数名.__doc__` 获取函数的文档字符串
- `dir()` 返回对象的所有属性和方法列表

---

## 14. 高阶函数

**文件**: `2-def/14-def-higher-order.py`

```python
# 高阶函数


def f1():
    print("f1")


# 我们可以把函数赋给变量，然后由变量调用
var = f1
var()


def add(number):
    return number + 1


# map(函数， 集合)
# 将集合中的元素取出来，调用函数，将返回结果变为一个map
# 可以通过for语句将其取出
for i in map(add, range(5)):
    print(i)
# 可以通过lambda 定义一个函数
# 将 map转为一个list, 联想 java 的stream map
print(list(map(lambda x: x + 1, range(5))))
# filter  联想 stream  filter
print(list(filter(lambda x: x > 3, range(5))))

# reduce 需要 import
from functools import reduce

print(reduce(lambda x, y: x + y, range(5)))
```

**说明**:
- **高阶函数**：接受函数作为参数或返回函数的函数
- `map(func, iterable)`: 对 iterable 的每个元素执行 func，返回迭代器
- `filter(func, iterable)`: 筛选满足条件的元素，返回迭代器
- `reduce(func, iterable)`: 累积计算（需导入`functools`）
- 类似Java Stream的map/filter/reduce

---

## 15. 偏函数

**文件**: `2-def/15-def-partial.py`

```python
# 偏函数

print(int("0f", base=16))

from functools import partial

# 从上面看，我们要把16进制的数字转换成10进制
# 可以int("0f", base=16)来操作
# 使用偏函数, 我们可以固定默认值， 创建一个新的函数，只需要传入值即可
int_16 = partial(int, base=16)
print(int_16("0f"))

# 例如打开文件
f = open("../file/f.txt", mode="w")
f.close()
# 使用偏函数,来给新函数入参一个默认值
w_open = partial(open, mode="w")
f = w_open("./file/f.txt")
f.close()
```

**说明**:
- **偏函数**（Partial Function）通过`functools.partial`创建
- 固定函数的部分参数，生成新函数
- 用途：预设常用参数，简化调用

---

## 16. 闭包

**文件**: `2-def/16-def-decorator.py`

```python
# 函数内部的变量，函数外部无法访问
# 这叫 内部变量

# 什么是闭包变量
# 如下：函数内部定义函数 叫做闭包
# 上级函数定义的变量叫闭包变量
def f1():
    x = 10

    def f2():
        print(x)

    return f2


# f1 将f2 返回，所以调用f就是调用f2
f = f1()
f()
```

**说明**:
- **闭包**：内部函数引用外部函数的变量
- `x` 是闭包变量，被内部函数`f2`引用
- 闭包可以保存函数的状态

---

## 17. 装饰器

**文件**: `2-def/17-def-decorator-time.py`

```python
# 装饰器 对时间统计 的包装
import time
from functools import wraps


# 假设有一个函数，做一些业务功能，time.sleep(1)表示做功能期间
def func():
    print("开始执行")
    time.sleep(1)
    print("结束执行")


# 我们需要对这个函数进行统计时间，我们可以这样写
start = time.time()
func()
end = time.time()
print(f"函数执行时间：{end - start}")


# 如果使用装饰器，我们可以这样写
def time_stat(fc):
    @wraps(fc)
    def wrapper():
        s = time.time()
        fc()
        e = time.time()
        print(f"函数执行时间：{e - s}")

    return wrapper


# 定义一个装饰器函数，传入函数，在闭包函数中去做代理的事情
# 使用@函数名，对目标函数进行包装
@time_stat
def work():
    print("开始执行")
    time.sleep(1)
    print("结束执行")


# 调用时，真实调用的其实是装饰器的闭包函数
work()
# 我们打印函数名称，发现是wrapper,不是work，这是这里函数已经是闭包函数了
# 如果我们想要打印函数名称，则要借助 functools.wraps， 即上面的@wraps(fc)，对闭包函数进行进一步装饰
var = work.__name__
print(var)
```

**说明**:
- **装饰器**：在不修改原函数的前提下，增强其功能
- 装饰器本质是一个接收函数的函数，返回闭包
- `@wraps(fc)` 保留原函数的元信息（如`__name__`）
- 典型用途：日志、计时、权限校验、缓存

---

# 三、面向对象

## 18. 类定义

**文件**: `3-class/18-class.py`

```python
# 定义一个类
# object表示 父类，可以省略
class Coffee(object):
    hot = 0
    water = 0

    # 定义一个方法 加水， self类似java this
    def add_water(self):
        print("加水")
        self.water = self.water + 1


# 实例化一个类
coffee = Coffee()
# 调用方法
coffee.add_water()
```

**说明**:
- `class` 定义类，`object` 是所有类的基类（可省略）
- `self` 类似Java的`this`，指当前实例
- 类属性：定义在类中的变量，所有实例共享
- 实例化：`类名()`，调用`__init__`方法

---

## 19. 继承

**文件**: `3-class/19-class-extend.py`

```python
class Father(object):
    def run(self):
        print("run")


class Sun1(Father):
    def run(self):
        super().run()
        print("run1")


# 实现一个父类，通过super()调用父类的方法
sun1 = Sun1()
sun1.run()

# 多继承的时候，会按照C3算法，按照顺序遍历继承图
# 可以通过 Sun1.__mro__ 查看继承顺序
print(Sun1.__mro__)
```

**说明**:
- 继承：`class 子类(父类)`
- `super()` 调用父类的方法
- `__mro__`（Method Resolution Order）显示继承顺序
- Python支持多继承，使用C3算法解析顺序

---

## 20. 类装饰器

**文件**: `3-class/20-class-wrapper.py`

```python
# 类的装饰器

class KClass(object):
    @classmethod
    def func(cls):
        print("开始执行")


# 通过classmethod，让类直接调用方法
# cls表示类本身
# 类似 java static修饰类
KClass.func()


# staticmetho不需要cls，一般用作单独的方法调用
class KClass1():
    @staticmethod
    def func():
        print("开始执行")


KClass1.func()


class KClass2:

    @property
    def func(self):
        return self.__var

    @func.setter
    def func(self, varValue):
        self.__var = varValue


# 类似 java getter setter
# __表示 一个私有变量，不希望被外部访问
obj = KClass2()
obj.func = 1
print(obj.func)
```

**说明**:
- `@classmethod`: 类方法，第一个参数是类本身（`cls`），可直接`类名.方法()`调用
- `@staticmethod`: 静态方法，无需`cls`参数，类似Java static
- `@property`: 将方法转为属性，实现getter
- `@func.setter`: 实现setter
- `__var`: 私有变量（Name Mangling，外部用`_类名__var`访问）

---

## 21. 接口与鸭子类型

**文件**: `3-class/21-intfarce.py`

```python
# Python使用"鸭子类型"实现接口，接口越小越好

# 比如：函数有个 __call__ 方法.所以他可以直接func()调用

class A:
    def __call__(self):
        print('A')


# 输出A，调用了__call__方法
a = A()
a()
```

**说明**:
- Python使用**鸭子类型**（Duck Typing）："如果它走像鸭子，叫像鸭子，那就是鸭子"
- 无需显式声明接口，只要对象有相应方法即可
- `__call__` 方法使实例可以像函数一样被调用

---

## 22. 构造方法

**文件**: `3-class/22-init.py`

```python
class Klass:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def print(self):
        print(self.name, self.age)


# 通过__init__构造方法，传入参数，进行打印
c = Klass('张三', 18)
c.print()
# 打印魔术方法
print(dir(Klass))
```

**说明**:
- `__init__` 是构造方法，创建实例时自动调用
- 第一个参数是`self`，其他是传入参数
- `dir()` 返回类的方法列表，包括魔术方法（以`__`开头）

---

## 23. 模块导入

**文件**: `3-class/23-import.py`

```python
# 通过import 方式导入整个模块
# import os
#
# print(os.getcwd())

# from import 方式导入模块的特定方法
from os import getcwd

print(getcwd())

# 多个模块放在一个文件夹中，该文件夹称作包
# 包的导入与模块的导入相同:
# "import 包"或"from 包 import 模块"

# as给导入取别名
from os import getcwd as c

print(c())
```

**说明**:
- `import module`: 导入整个模块，使用`module.function()`
- `from module import function`: 导入特定成员
- `import module as alias`: 给模块起别名
- 包：包含`__init__.py`的文件夹

---

## 24. 符号计算

**文件**: `3-class/24-symbol.py`

```python
# 通过sympy模块，求导数
# 求导，就是求一个函数在某一点的变化速度。
# 导数 = 函数曲线在某一点的切线斜率
from sympy import Derivative, Symbol
from sympy.plotting import plot

# 定义符合变量x
x = Symbol('x')
# 数学函数
y = x * x + 3 * x + 2
# 求导输出结果
print(Derivative(y, x).doit())
plot(y, (x, -5, 5))
```

**说明**:
- `sympy` 是Python的符号数学库
- `Symbol` 定义符号变量
- `Derivative` 求导，`doit()` 执行计算
- `plot()` 绘制函数图像

---

## 25. 异常处理

**文件**: `3-class/25-exception.py`

```python
# 会输出ZeroDivisionError: division by zero异常
# 1 / 0

# 对异常进行处理
# 对指定异常进行处理
try:
    1 / 0
except ZeroDivisionError:
    print("除数不能为0")
# 对所有异常进行处理
try:
    1 / 0
except Exception:
    print("除数不能为0")
# 输出异常信息
try:
    1 / 0
except Exception as e:
    print("除数不能为0")
    print(e)

try:
    1 / 0
except ZeroDivisionError:
    print("除数不能为0")
else:
    # 如果没有抛出异常则执行下面语句
    print("没有异常")

try:
    1 / 0
except ZeroDivisionError:
    print("除数不能为0")
finally:
    # 无论是否有异常都会执行
    print("不管有没有异常都会执行")
```

**说明**:
- `try-except`: 捕获异常
- `except Exception`: 捕获所有异常
- `except Exception as e`: 获取异常信息
- `else`: 没有异常时执行
- `finally`: 无论是否异常都执行

---

## 26. 自定义异常

**文件**: `3-class/26-CustomException.py`

```python
# 自定义异常
# 通过继承Exception类，来自定义异常
class MyException(Exception):
    pass


# 抛出自定义异常
try:
    raise MyException("自定义异常")
except MyException as e:
    print(e)


# 自定义异常，通过init传入信息，通过msg打印 信息
class NameException(Exception):
    def __init__(self, name):
        self.name = name

    @property
    def msg(self):
        return f"{self.name}不是合法的用户名"


# 抛出自定义异常, 通过msg打印信息
try:
    raise NameException("张三")
except NameException as e:
    print(e.msg)
```

**说明**:
- 自定义异常：继承`Exception`类
- `raise`: 抛出异常
- 可在`__init__`中存储异常信息
- `@property` 定义属性方法

---

## 27. 命名元组

**文件**: `3-class/27-namedTuple.py`

```python
# 命名元组
from collections import namedtuple

# 创建一个带名字、带属性的元组
point = namedtuple("point", ["x", "y"])
# 普通元组只能用下标访问（p[0]），namedtuple 可以用名字访问（p.x），更直观
p1 = point(1, 2)
print(p1.x, p1.y)

# 普通的point 相加
# (1, 2, 1, 2)
print(p1 + point(1, 2))


# 自定义相加的逻辑
# 重写相加的函数
class PointAdd(namedtuple("point", ["x", "y"])):
    def __add__(self, other):
        return self.x + other.x, self.y + other.y


# p3+p4  相当于 self.__add__(p4)
# (2, 4)
p3 = PointAdd(1, 2)
p4 = PointAdd(1, 2)
print(p3 + p4)
```

**说明**:
- `namedtuple` 创建带名字的元组类
- 既有元组的轻量特性，又可通过属性名访问
- 可继承重写方法实现自定义操作

---

# 四、数据库操作

## 28. Redis 操作

**文件**: `4-db/28-redis.py`

```python
# pip3 install redis
import redis

# 连接redis
red = redis.Redis(host='192.168.1.134', port=6379, db=0)
print(red.keys('*'))
red.set('name', 'xiaoming')
print(red.get('name'))
```

**说明**:
- 安装：`pip install redis`
- `redis.Redis()` 创建连接对象
- 常用方法：`keys()`, `get()`, `set()`, `delete()` 等

---

## 29. MySQL 操作

**文件**: `4-db/29-mysql.py`

```python
# pip install pymysql

import pymysql

connect = pymysql.connect(host='192.168.1.134', user='root', password='123456', db='my_test')
# 查询
with connect.cursor() as cursor:
    cursor.execute('select * from t_user')
    result = cursor.fetchall()
    print(result)

# 插入
with connect.cursor() as cursor:
    cursor.execute('insert into t_user(name, age) values(%s, %s)', ('xiaoming', 18))
    connect.commit()
# 手动事务
cursor = connect.cursor()
sql = 'insert into t_user(name, age) values(%s, %s)'
data = ('xiaoming', 19)

try:
    cursor.execute(sql, data)
    connect.commit()
    print("✅ 插入成功")
except Exception as e:
    connect.rollback()
    print(f"插入失败：{e}")
finally:
    cursor.close()
```

**说明**:
- 安装：`pip install pymysql`
- `connect.cursor()` 创建游标
- `execute()` 执行SQL，`%s` 是占位符
- `commit()` 提交事务，`rollback()` 回滚
- 推荐使用`with`自动管理资源

---

# 五、多线程

## 30. 线程池

**文件**: `5-thread/30-threadPool.py`

```python
# 线程池
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

Urls = [
    'https://www.taobao.com',
    'https://www.taobao.com',
    'https://www.jd.com',
    'https://www.jd.com',
    'https://www.taobao.com',
    'https://www.taobao.com',
]


# 定义一个抓取网页的函数
def get_url(url):
    with urllib.request.urlopen(url, timeout=300) as conn:
        return conn.read()


# 创建一个线程池，并发3个
# ProcessPoolExecutor方式支持多核CPU
with ThreadPoolExecutor(max_workers=3) as executor:
    # 字典推导式，等价
    # futures = {}
    # for url in Urls:
    #     future = executor.submit(get_url, url)
    #     futures[future] = url
    futures = {executor.submit(get_url, url): url for url in Urls}
    for future in as_completed(futures):
        url = futures[future]
        try:
            data = future.result()
        except Exception as e:
            print('%s : %s' % (url, e))
        else:
            print('%s : %s' % (url, len(data)))
```

**说明**:
- `ThreadPoolExecutor`: 线程池管理器
- `max_workers`: 最大并发数
- `executor.submit()` 提交任务，返回`Future`对象
- `as_completed()` 按完成顺序返回结果
- `ProcessPoolExecutor` 适合CPU密集型任务（多进程）

---

# 六、网络请求

## 31. requests 库

**文件**: `6-request/31-request.py`

```python
# pip3 install requests

import requests

# 设置头信息
# 一般遇到status=451,一般就是任务当前请求不是浏览器请求，需要设置headers
# 遇到这情况，如果设置了下面的head还无法解决，就完全仿照浏览器的请求，去设置headers
hds = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36 Edg/147.0.0.0',
    'Referer': 'https://time.geekbang.org/',
    'Origin': 'https://time.geekbang.org', }
# r = requests.get("https://time.geekbang.org/", headers=hds)

# 打印状态
# print(r.status_code)
# print(r.headers['content-type'])
# print(r.encoding)
# 打印请求的返回信息
# print(r.text)

data = {"ids": [100310001, 100026001, 100078401, 100030501, 100014301, 100014401, 100029001, 100020301, 100024601,
                100021601]}

j = requests.post("https://time.geekbang.org/serv/v3/product/infos", headers=hds, json=data)

print(j.status_code)
print(j.text)
# 获取json数据
print(j.json())
# 请求数据，输出json的内容
data = j.json()['data']['infos']
for i in data:
    print(i['title'])
```

**说明**:
- 安装：`pip install requests`
- `requests.get()` / `requests.post()` 发送请求
- `headers` 参数设置请求头
- `json` 参数自动设置`Content-Type`并序列化
- `response.json()` 解析JSON响应
- 常见状态码：200成功，404未找到，500服务器错误

---

# 七、图像处理

## 32. OpenCV 基础

**文件**: `8-face/1-opencv.py`

```python
# 人脸识别一般步骤
# 1. 图片转换为灰度
# 2. 识别图像中得人脸
# 3. 训练特征库
# 4. 比对目标图片

# 使用OpenCV标注图像
# 标注图像，用于调试不断得优化算法

# pip install opencv-python
# pip install Pillow
# pip install opencv-contrib-python
# pip install numpy

import cv2
# 读取到图片内容
pic = cv2.imread("./cat.jpeg")

# 打印 图片的rgb数组信息
print(pic)
```

**说明**:
- 安装：`pip install opencv-python pillow opencv-contrib-python numpy`
- `cv2.imread()` 读取图像文件
- 返回NumPy数组，存储像素值

---

## 33. OpenCV 图像标注

**文件**: `8-face/2-opencv.py`

```python
# 一般用于调试得方法
import  cv2
pic = cv2.imread("./cat.jpeg")
# 在左上角，右上角坐标，标注一个红色框，用于调试
cv2.rectangle(pic,(10,50),(50,150),(0,0,255),2)
# 展示图片
cv2.imshow("title", pic)
# 等待输入任意键
cv2.waitKey(0)
# 销毁打开得图片
cv2.destroyAllWindows()
```

**说明**:
- `cv2.rectangle()` 绘制矩形
  - 参数：图像，左上角坐标，右下角坐标，颜色(BGR)，线宽
- `cv2.imshow()` 显示图像
- `cv2.waitKey()` 等待按键，参数毫秒，0表示无限等待
- `cv2.destroyAllWindows()` 关闭所有窗口

---

# 附录：Python 核心概念速查

| 概念 | 说明 |
|------|------|
| 列表推导式 | `[表达式 for item in iterable if 条件]` |
| 字典推导式 | `{k: v for k, v in iterable}` |
| f-string | `f"{变量名}"` 格式化输出 |
| *args | 可变位置参数（元组） |
| **kwargs | 可变关键字参数（字典） |
| @property | 将方法转为属性 |
| @classmethod | 类方法，参数为cls |
| @staticmethod | 静态方法，无需self/cls |
| super() | 调用父类方法 |
| `__init__` | 构造方法 |
| `__str__` | 字符串表示 |
| `__call__` | 使实例可调用 |
| try-except | 异常处理 |
| raise | 抛出异常 |
| with | 上下文管理器 |