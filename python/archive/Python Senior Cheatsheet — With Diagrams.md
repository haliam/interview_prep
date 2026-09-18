# 🐍 Python Senior Cheatsheet — With Diagrams

## 1. GIL — Global Interpreter Lock

Code

```
        +---------------------------+
Thread1 |   [ GIL ACQUIRED ]        |
        +---------------------------+
Thread2 |   [ WAITING FOR GIL ]     |
        +---------------------------+
Thread3 |   [ WAITING FOR GIL ]     |
        +---------------------------+

Only one thread executes Python bytecode at a time.
```

- ![Python 3.12: What's New | TestDriven.io](https://ts4.mm.bing.net/th?id=OIP.YEkE7KKgaqyTcmkU87y_gAHaHa&pid=15.1&o=7&rm=3)
- ![Updating Extension Modules - Python Free-Threading Guide](https://ts3.mm.bing.net/th?id=OIP.4bkRrKDJf8fdgVr_bPoulQHaFu&pid=15.1&o=7&rm=3)
- ![Threading in Python: Definition, Issues and Best Practices](https://ts4.mm.bing.net/th?id=OIP.iOQNEtMnQ5gMmThbHXVUEgHaD6&pid=15.1&o=7&rm=3)
- ![Creating and Sharing data between Python threads for the Absolute ...](https://ts1.mm.bing.net/th?id=OIP.5vsJ_FwytPoT5DvTMaC67wHaGO&pid=15.1&o=7&rm=3)

## 2. Python Memory Model

Code

```
        +------------------------+
        |   Object (refcount)   |
        +------------------------+
                ↑   ↑
                |   |
   +------------+   +------------+
   |                             |
Reference A                 Reference B

GC handles cycles:
Generation0 → Generation1 → Generation2
```

- ![1.2 The Python Memory Model: Functions and Parameters — CSC148 Course Notes](https://ts2.mm.bing.net/th?id=OIP.8jw7Vu4_bCSWJ2pgjIpWwgHaHJ&pid=15.1&o=7&rm=3)
- ![How Python’s Memory Model Works: From Stack to Heap - Asma's Blog](https://ts3.mm.bing.net/th?id=OIP.qCuPTooCyCV2IJOPA-U6fQHaEc&pid=15.1&o=7&rm=3)
- ![PPT - Lecture 10: Heap Management PowerPoint Presentation, free ...](https://ts3.mm.bing.net/th?id=OIP.PeysakUnlzcQJYbmhtEWaQHaFj&pid=15.1&o=7&rm=3)
- ![PPT - Compiler course PowerPoint Presentation, free download - ID:6155236](https://ts4.explicit.bing.net/th?id=OIP.l0lhAPULK-850yn4tcqPkAHaFj&pid=15.1&o=7&rm=3)

## 3. Asyncio Event Loop

Code

```
+-------------------------------+
|         EVENT LOOP            |
+-------------------------------+
| Task1 → await I/O → paused    |
| Task2 → await I/O → paused    |
| Task3 → CPU work → running    |
+-------------------------------+
```

## 4. Generators

Code

```
def gen():
    yield 1   <-- pause here
    yield 2   <-- resume here
```

Execution timeline:

Code

```
start → yield 1 → resume → yield 2 → StopIteration
```

- ![Python Generators Explained: Efficient Iteration with Yield ...](https://ts1.mm.bing.net/th?id=OIP.cH2FIQ-9p_ZFczQL3itdMgHaE8&pid=15.1&o=7&rm=3)
- ![Python의 Generator 알아보기](https://ts4.mm.bing.net/th?id=OIP.lbQHbTDlXaB4BFza3ijOowHaDV&pid=15.1&o=7&rm=3)
- ![Lazy Evaluation in Spark - Scaler Topics](https://ts2.mm.bing.net/th?id=OIP.sJe1Wx8mYZd8lVidnFCVewHaEr&pid=15.1&o=7&rm=3)
- ![Apache Spark | The Good & The Bad](https://ts4.mm.bing.net/th?id=OIP.XnaJ8L_xmc7AZRW8K2cY6AHaEY&pid=15.1&o=7&rm=3)

## 5. Decorators

Code

```
@decorator
def func():
    pass

decorator(func) → wrapper(func)
```

- ![Python Decorators - The Three-Layer Pattern](https://ts2.mm.bing.net/th?id=OIP.rVoQhCciglpQQUvub44SmwHaGP&pid=15.1&o=7&rm=3)
- ![Decorators in Python - GeeksforGeeks](https://ts2.mm.bing.net/th?id=OIP.9PaFSuI78cEyABSRNR3-XwHaDt&pid=15.1&o=7&rm=3)
- ![Decorator & Presenter Design Pattern | PDF](https://ts4.mm.bing.net/th?id=OIP.8ChQl3TIM1LW8JaP9DQtKgAAAA&pid=15.1&o=7&rm=3)
- ![Decorator](https://ts4.mm.bing.net/th?id=OIP.sSNUL_F2Y_NABr_2ANbVdQHaHj&pid=15.1&o=7&rm=3)

## 6. Descriptors

Code

```
class Field:
    def __get__(...):
    def __set__(...):

class Model:
    name = Field()
```

Flow:

Code

```
obj.name → Field.__get__(obj)
obj.name = x → Field.__set__(obj, x)
```

## 7. Metaclasses

Code

```
class Meta(type):
    def __new__(...):
        # modify class

class A(metaclass=Meta):
    pass
```

- ![Metaclasses — Python’s Object-Oriented Paradigm and Its Metaprogramming ...](https://ts2.mm.bing.net/th?id=OIP.0d8CMNQP8ZcwuLuRRyNmuQHaG1&pid=15.1&o=7&rm=3)
- ![Understanding Python metaclasses | ionel's codelog](https://ts2.mm.bing.net/th?id=OIP.R8GnuBE8iNQ3Iv7JjU3lcgHaHe&pid=15.1&o=7&rm=3)
- ![Understanding Python metaclasses | ionel's codelog](https://ts2.mm.bing.net/th?id=OIP.R8GnuBE8iNQ3Iv7JjU3lcgHaHe&pid=15.1&o=7&rm=3)
- ![Free Class Registration Flow Chart Template to Edit Online](https://ts2.mm.bing.net/th?id=OIP.YKhYQjk6lzikWNmraugM6wHafV&pid=15.1&o=7&rm=3)

## 8. Context Managers

Code

```
with CM():
    do_work()

CM.__enter__()
CM.__exit__()
```

- ![Reusable piece of python functionality for wrapping arbitrary blocks of ...](https://ts1.mm.bing.net/th?id=OIP.Lq3IKQGobESOKmjkRlnzqAHaFm&pid=15.1&o=7&rm=3)
- ![The Virtual Context Manager — the Context Engineering Factory | by Eric ...](https://ts1.mm.bing.net/th?id=OIP.t73iQax2mS-RE4PrRcAkswHaEK&pid=15.1&o=7&rm=3)
- ![Xception](https://ts4.mm.bing.net/th?id=OIP.uLzpVSA1FZ1QUNz4FlnTugHaEi&pid=15.1&o=7&rm=3)
- ![Flow control op: switch/merge/enter/exit/nextIteration - blog](https://ts3.mm.bing.net/th?id=OIP.Lk3tS5Nxxhj2CGZKeudB_wHaEX&pid=15.1&o=7&rm=3)

## 9. Iterator Protocol

Code

```
iter(obj) → obj.__iter__()
next(obj) → obj.__next__()
```

- ![Understanding Iterators In Python Python Tutorials For Beginners](https://ts2.mm.bing.net/th?id=OIP.-EpsLqmnrH1A6oQeoE9GWAHaEo&pid=15.1&o=7&rm=3)
- ![Python Iterators Examples – Machine Learning Geek](https://ts4.mm.bing.net/th?id=OIP.0oqiykrf31C8_wBHs1G57gHaDO&pid=15.1&o=7&rm=3)
- ![Medium](https://ts4.mm.bing.net/th?id=OIP.-EpsLqmnrH1A6oQeoE9GWAHaEo&pid=15.1&o=7&rm=3)
- ![Iterator](https://ts2.mm.bing.net/th?id=OIP.qaLJiySjlURRRZQirgyHAwHaFY&pid=15.1&o=7&rm=3)

## Choose one:10. Concurrency Models

Code

```
Threads        → I/O-bound
Multiprocessing→ CPU-bound
Asyncio        → High concurrency I/O
```

## 11. Type Hints

Code

```
def add(a: int, b: int) -> int:
    return a + b
```

- ![A Complete Guide to Python Type Hints | Better Stack Community](https://ts1.mm.bing.net/th?id=OIP.J9tYeg62_JxvlcQxJYdDHAHaEd&pid=15.1&o=7&rm=3)
- ![Unlocking Code Clarity: A Guide to Effective Type Hinting in Python ...](https://ts1.mm.bing.net/th?id=OIP.4HLHF2B_JnfntL8Vu5B2LAHaGR&pid=15.1&o=7&rm=3)
- ![A Complete Guide to Python Type Hints | Better Stack Community](https://ts4.mm.bing.net/th?id=OIP.J9tYeg62_JxvlcQxJYdDHAHaEd&pid=15.1&o=7&rm=3)
- ![Python Type Hinting & Mypy: AST Internals, Protocols, and Static Typing](https://ts3.mm.bing.net/th?id=OIP.ExfcLN908eTn0PeFEDtI3wHaEC&pid=15.1&o=7&rm=3)

## 12. Dataclasses

Code

```
@dataclass
class User:
    id: int
    name: str
```

- ![Диаграмма классов python пример](https://ts4.mm.bing.net/th?id=OIP.LgubLaPcz1mLcsVYOr6hjwHaL6&pid=15.1&o=7&rm=3)
- ![How To Draw Diagram In Python](https://ts1.mm.bing.net/th?id=OIP.7KoqV3PVfyfMTTVvkBJo_wHaEe&pid=15.1&o=7&rm=3)
- ![Ai Generated Er Diagram – Erd Diagram Generator – UAKU](https://ts4.mm.bing.net/th?id=OIP.NhpXVHHcmJuVWRAhdqTiUwHaFj&pid=15.1&o=7&rm=3)
- ![UML Diagramm mit KI erstellen | Miro](https://ts2.mm.bing.net/th?id=OIP.63ojPE9sHd-QwkdxgQEfuAHaFj&pid=15.1&o=7&rm=3)

## 13. **slots**

Code

```
class Point:
    __slots__ = ("x", "y")
```

Memory:

Code

```
No __dict__ → smaller objects
```

## 14. Packaging

Code

```
pyproject.toml
[build-system]
[project]
```

- ![Python Packages with Examples - Python Geeks](https://ts3.mm.bing.net/th?id=OIP.K3GwQQInq5YPC6-IziEJ1AHaEw&pid=15.1&o=7&rm=3)
- ![Packaging-python](https://ts4.mm.bing.net/th?id=OIP.5I_cp3u3aHRRZA0AOHJiyAHaFO&pid=15.1&o=7&rm=3)
- ![Understanding Automotive Drivetrain Layouts: Types, Advantages, and ...](https://ts4.mm.bing.net/th?id=OIP.LOraX6Q46yWCTo4pAzhp6wHaE5&pid=15.1&o=7&rm=3)
- ![Understanding the AWD Diagram: A Visual Breakdown](https://ts1.mm.bing.net/th?id=OIP.qra55C3m9kWXbWYN6xuAnQHaEo&pid=15.1&o=7&rm=3)

## 15. Virtual Environments

Code

```
project/
    venv/
        bin/python
        site-packages/
```

- ![python - Is my understanding of the WSGI path correct - Super User](https://ts2.mm.bing.net/th?id=OIP.ZP-dV4r2eCheVchmxRw7MAHaFj&pid=15.1&o=7&rm=3)
- ![Containerization aka Docker](https://ts1.mm.bing.net/th?id=OIP.gvoN1HdyqiIy0CO4fM160QHaD3&pid=15.1&o=7&rm=3)
- ![Aislamiento del entorno | Centro de arquitectura de ArcGIS](https://ts4.mm.bing.net/th?id=OIP.OLa2WBKnC-sBg4qlZVg15gHaEA&pid=15.1&o=7&rm=3)
- ![Environment Isolation with Terraform Workspaces: A Modular EC2 + S3 ...](https://ts1.mm.bing.net/th?id=OIP.5oCbVuENS0dz8DPrQd-BJAHaEK&pid=15.1&o=7&rm=3)

## 16. Exceptions

Code

```
try:
    ...
except ValueError:
    ...
```

Hierarchy:

Code

```
BaseException
   Exception
      ValueError
      TypeError
```

- ![junior python что надо знать](https://ts3.mm.bing.net/th?id=OIP.MMPaHNktcexRn81KU2W58gHaEC&pid=15.1&o=7&rm=3)
- ![How to Catch Multiple Exceptions in Python – Real Python](https://ts3.mm.bing.net/th?id=OIP.YeUjCcWvfCIrz_4xqk9K2wHaDh&pid=15.1&o=7&rm=3)
- ![6 Phases Of Compiler | A Detailed Explanation (+Flowcharts)](https://ts3.mm.bing.net/th?id=OIP.hpJQ2Yz_JH51QmsmQHOxmAHaDt&pid=15.1&o=7&rm=3)
- ![PHP Exceptions: Try Catch for Error Handling](https://ts3.mm.bing.net/th?id=OIP.Q5c6kYVwZmPBbeQ9SDeGNwHaGV&pid=15.1&o=7&rm=3)

## 17. Logging

Code

```
logger → handler → formatter → output
```

## 18. Testing (pytest)

Code

```
@pytest.fixture
def db():
    ...
```

## 19. Performance Profiling

Code

```
cProfile → stats → optimize hotspots
```

- ![Profiling Python - NERSC Documentation](https://ts3.mm.bing.net/th?id=OIP.0SuN2HFd-LjQ0SHRI7BfpAHaFY&pid=15.1&o=7&rm=3)
- ![Profiling In Python: How To Find Performance Bottlenecks – HQDRES](https://ts4.mm.bing.net/th?id=OIP.3vG5IcKoWFZx1TWo9XrYGgHaEK&pid=15.1&o=7&rm=3)
- ![ByteByteGo | Frontend Performance Optimization](https://ts4.mm.bing.net/th?id=OIP.-NMRTRsqsAIMOBIONzMmhAHaJK&pid=15.1&o=7&rm=3)
- ![React Native Performance: Optimize for Speed](https://ts3.mm.bing.net/th?id=OIP.jjLmrzeJwMBONi32A3Rr4gHaHa&pid=15.1&o=7&rm=3)

## 20. Memory Leaks

Code

```
Cycles + __del__
Global caches
Lingering references
```

- ![Python Garbage Collection: How to Optimize Performance - EmiTechLogic](https://ts3.mm.bing.net/th?id=OIP.Kw2lT9ZtHD_TRSZ-yJKEUwHaF1&pid=15.1&o=7&rm=3)
- ![Tracking Down a Freaky Python Memory Leak](https://ts4.explicit.bing.net/th?id=OIP.2ZkOOlXvYv95IPIthY64aQHaDc&pid=15.1&o=7&rm=3)
- ![Fix RuntimeWarning: Enable tracemalloc Allocation Traceback](https://ts3.mm.bing.net/th?id=OIP.Su0vAM0ZLbxn2uVd4152CwHaE7&pid=15.1&o=7&rm=3)
- ![Python Dictionary Size: len(), getsizeof(), and Memory](https://ts4.mm.bing.net/th?id=OIP.AiWf5DlR5dQ7pNQs2fO-9wHaE8&pid=15.1&o=7&rm=3)

## 21. Mutable Defaults

Code

```
def f(x, acc=[]):  # BAD
def f(x, acc=None):  # GOOD
```

- ![Mutable default arguments in Python functions can cause unexpected ...](https://ts2.mm.bing.net/th?id=OIP.OJWQO_ZDd7u6bggR9Ua1pAHaHf&pid=15.1&o=7&rm=3)
- ![Getting Started with Python: Overview and Real-World Applications ...](https://ts4.mm.bing.net/th?id=OIP.te_EdfzlbVF1xEdLBCgQCQHaHk&pid=15.1&o=7&rm=3)
- ![Gateways :: Jmix Documentation](https://ts2.mm.bing.net/th?id=OIP.MPVI9vIMqqMfw9oGgGoV_AHaHa&pid=15.1&o=7&rm=3)
- ![Python Weird Behaviors: 10 Mind-Bending Quirks You Must Know ...](https://ts4.mm.bing.net/th?id=OIP.1RSDR0rSOMTKXXQEuF9QsgHaH-&pid=15.1&o=7&rm=3)

## 22. Import System

Code

```
import module
↓
sys.meta_path
↓
sys.modules cache
```

- ![CUDA Context-Independent Module Loading | NVIDIA Technical Blog](https://ts2.mm.bing.net/th?id=OIP.BAp5HHEaG7Jc5D7bnEbZEgHaEK&pid=15.1&o=7&rm=3)
- ![Electrical Distribution Load Flow technique.ppt](https://ts1.mm.bing.net/th?id=OIP.jwDRmJgyjg-V1D26vmCplgHaFj&pid=15.1&o=7&rm=3)

## 23. Dunder Methods

Code

```
__str__, __repr__, __eq__, __len__, __iter__
```

## 24. ORM Internals

Code

```
Model fields → descriptors
Model class → metaclass
Session → identity map
```

- ![How to Make an Object Role Model (ORM) Diagram | Edraw](https://ts1.mm.bing.net/th?id=OIP.VyOKhp6M_43T_4izOSl09gHaF-&pid=15.1&o=7&rm=3)
- ![ORM architecture | Documentation | DWKit](https://ts3.mm.bing.net/th?id=OIP.FgcEiIMJptWD7zT4-2sh1QHaEl&pid=15.1&o=7&rm=3)
- ![#73: First Steps with SQLAlchemy - Python Friday](https://ts4.mm.bing.net/th?id=OIP.TW1fhuTb-QTSmrxlneqe4gAAAA&pid=15.1&o=7&rm=3)
- ![Layers of Abstraction](https://ts1.mm.bing.net/th?id=OIP.uYtcuHlQ0XvxRh4fXtLZDwHaF9&pid=15.1&o=7&rm=3)

## 25. REST APIs

Code

```
Router → Handler → Service → Repository → DB
```

- ![Servicenow Api Example Rest](https://ts2.mm.bing.net/th?id=OIP.0d-PAEzBykfr4-tDWGRNHAHaEK&pid=15.1&o=7&rm=3)
- ![Building a Production-Ready Task Management API with FastAPI: Complete ...](https://ts2.mm.bing.net/th?id=OIP.yJevHvgFuxp__4_y3DbE6QHaJ6&pid=15.1&o=7&rm=3)
- ![Your Guide To Rest Api Versioning In Aspnet Core](https://ts3.mm.bing.net/th?id=OIP.UOM10YSpCSYgoZdTFeB-4wHaOg&pid=15.1&o=7&rm=3)
- ![Rest Api Architecture Diagram at Brodie Purser blog](https://ts2.mm.bing.net/th?id=OIP.O2vN4PDxw7cy7SV9UmXyUgHaEt&pid=15.1&o=7&rm=3)

## 26. Async DB Access

Code

```
asyncpg → connection pool → await queries
```

- ![PostgreSQL 18: Better I/O performance with AIO | CYBERTEC PostgreSQL ...](https://ts1.mm.bing.net/th?id=OIP.CAU1nUSk11ZMgNSNuw64zQHaF7&pid=15.1&o=7&rm=3)
- ![Data guard](https://ts2.mm.bing.net/th?id=OIP.0I6Gftq8QBE2hh_ijGMpFQHaEZ&pid=15.1&o=7&rm=3)
- ![Connection Poolを理解する : カスタムしながら理解するGraphQL Connection – ZBNM](https://ts2.mm.bing.net/th?id=OIP.aEQjFPYVxQR4lZ5k9fu-PAHaF7&pid=15.1&o=7&rm=3)
- ![From Slow Queries to Fast Responses: The Power of Connection Pooling ...](https://ts2.mm.bing.net/th?id=OIP.Iz6-GQA7FY-eEZMzr7rMsgHaIW&pid=15.1&o=7&rm=3)

## 27. Caching

Code

```
LRU Cache
Redis Cache
TTL-based Cache
```

- ![Caching patterns - Database Caching Strategies Using Redis](https://ts2.mm.bing.net/th?id=OIP.n3yqHhLHSaXm_MnLa44VkgHaHB&pid=15.1&o=7&rm=3)
- ![Fast ASP.NET Core Sessions with IDistributedCache - NCache](https://ts4.mm.bing.net/th?id=OIP.hBUL3p8Lh8uIeqyRpP2s1QHaGX&pid=15.1&o=7&rm=3)
- ![Step-by-Step Guide to Using Azure Redis Cache in ASP.NET Core 9 Web API ...](https://ts1.mm.bing.net/th?id=OIP.UrJd-Gu3Mxq4L4H0uWJu1wHaEK&pid=15.1&o=7&rm=3)
- ![Cache eviction policies. let’s go through all the common cache… | by ...](https://ts1.mm.bing.net/th?id=OIP.AaI0o6V-ywNgb7w4dEDOvAHaEr&pid=15.1&o=7&rm=3)

## 28. Message Queues

Code

```
Producer → Queue → Consumer
```

- ![All About Message Queues](https://ts3.mm.bing.net/th?id=OIP.qs2G1xDE-y1jrwaPAugM0wHaEN&pid=15.1&o=7&rm=3)
- ![Use Quick Steps To Process Messages – QUVLKC](https://ts3.mm.bing.net/th?id=OIP.7aYQQY5jcjEjkcFjxQhqlwHaEs&pid=15.1&o=7&rm=3)
- ![Getting Started with Apache Kafka: Introduction 2026 - Javacodepoint](https://ts3.mm.bing.net/th?id=OIP.2n_ap0J8EWK8hpnwZL4XBAHaDW&pid=15.1&o=7&rm=3)
- ![Advanced Kafka Producer Configurations and Idempotent Kafka Producer ...](https://ts1.mm.bing.net/th?id=OIP.28lJi8Wu2sKwq235buq5KQHaFx&pid=15.1&o=7&rm=3)

## 29. CI/CD

Code

```
Lint → Test → Build → Deploy
```

- ![What is a CI/CD Pipeline ? | OpsMx Blog](https://ts2.mm.bing.net/th?id=OIP.o2BXXD9IXTJq7XxzehlGqwHaD8&pid=15.1&o=7&rm=3)
- ![CI-CD pipeline diagram shows stages from commit to deployment ...](https://ts4.mm.bing.net/th?id=OIP.8Ozuh8xRlmtxhWD29XSI5gHaDG&pid=15.1&o=7&rm=3)
- ![Deployment Chart Template](https://ts2.mm.bing.net/th?id=OIP.asxWdA7GnLIDlO7qXzhd2QHaFu&pid=15.1&o=7&rm=3)
- ![Our Comprehensive DevOps Services](https://ts3.mm.bing.net/th?id=OIP.i9OKVxwMWZBRrkI3dy6tvgHaEK&pid=15.1&o=7&rm=3)

## 30. Clean Architecture

Code

```
Entities → Use Cases → Interfaces → Adapters → Framework
```

- ![Playwright — xUnit: .Net (C#) API Integration Testing | by Nagarjuna ...](https://ts1.mm.bing.net/th?id=OIP.cvNqGPySg6VjCW7US71BfQHaEp&pid=15.1&o=7&rm=3)
- ![A quick introduction to clean architecture](https://ts1.mm.bing.net/th?id=OIP.Xf9aw61QVi9tpOJv8J0SYwHaFc&pid=15.1&o=7&rm=3)
- ![Top 10 Software Architecture Patterns to Follow in 2025](https://ts2.mm.bing.net/th?id=OIP.NJeB1QK5cSJh_ccWuNFHjgHaFN&pid=15.1&o=7&rm=3)
- ![5 Common Software Architecture Patterns — Crowdbotics](https://ts4.mm.bing.net/th?id=OIP.n43XHo0xcUIS5Eu-p78E7QHaEK&pid=15.1&o=7&rm=3)

