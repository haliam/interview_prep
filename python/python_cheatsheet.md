# Python Cheat Sheet

A condensed, scannable reference: setup, syntax, data types, control flow, functions, classes, errors, collections, comprehensions, file I/O, modules, environments, packaging, and useful idioms.

## Table of Contents
- [Getting Started](#getting-started)
- [Comments](#comments)
- [Data Types](#data-types)
- [Variables & Assignment](#variables--assignment)
- [Strings](#strings)
- [Numbers & Math](#numbers--math)
- [Conditionals](#conditionals)
- [Loops](#loops)
- [Functions](#functions)
- [Classes](#classes)
- [Exceptions](#exceptions)
- [Collections](#collections)
- [Comprehensions](#comprehensions)
- [File I/O](#file-io)
- [Imports & Modules](#imports--modules)
- [Virtual Environments](#virtual-environments)
- [Packages](#packages)
- [Type Hints](#type-hints)
- [Miscellaneous / Pythonic Idioms](#miscellaneous--pythonic-idioms)

---

## Getting Started

- Start the interactive shell:
  ```shell
  python
  ```
- Quit the interactive shell:
  ```python
  exit()
  ```
- Run a script:
  ```shell
  python my_script.py
  ```
- Run a script, then drop into interactive mode:
  ```shell
  python -i my_script.py
  ```
- Check the installed version:
  ```shell
  python --version
  ```

---

## Comments

- Always add a space after `#`.
- Comments explain **why**, not what — the code already says what.

```python
# This is a comment
print("This will run.")   # Inline comments are ignored by Python
```

---

## Data Types

- Python is dynamically typed.
- Use `None` for missing/optional values.
- `type()` checks the exact type; `isinstance()` checks type or subclass.

```python
type(42)                 # <class 'int'>
type(3.14)                # <class 'float'>
type("Hello")             # <class 'str'>
type(True)                 # <class 'bool'>
type(None)                 # <class 'NoneType'>

isinstance(3.14, float)    # True
issubclass(int, object)    # True — everything inherits from object
```

```python
int("42")                  # 42
float("3.14")               # 3.14
str(42)                     # "42"
bool(1)                     # True
list("abc")                 # ["a", "b", "c"]
```

---

## Variables & Assignment

- Variables are created on first assignment.
- Use `snake_case` and descriptive names.

```python
name = "Leo"          # str
age = 7                # int
height = 5.6            # float
is_cat = True            # bool
flaws = None              # NoneType
```

```python
x, y = 10, 20           # parallel assignment
a = b = c = 0            # chained assignment
```

```python
counter += 1
numbers += [4, 5]
permissions |= write
```

- Walrus operator — assign inside an expression:
  ```python
  if (n := len(data)) > 10:
      print(f"{n} items")
  ```

---

## Strings

- Prefer double quotes; use `\n` for a newline; `\\` for a literal backslash.

```python
single = 'Hello'
double = "World"
multi = """Multiple
line string"""
```

```python
greeting = "me" + "ow!"     # "meow!"
repeat = "Meow!" * 3          # "Meow!Meow!Meow!"
length = len("Python")        # 6
```

```python
"a".upper()                   # "A"
"A".lower()                    # "a"
" a ".strip()                   # "a"
"abc".replace("bc", "ha")        # "aha"
"a b".split()                     # ["a", "b"]
"-".join(["a", "b"])               # "a-b"
"abc".startswith("ab")              # True
"abc".endswith("c")                  # True
"abc".find("b")                       # 1 (or -1 if not found)
```

```python
text = "Python"
text[0]      # "P"  (first)
text[-1]     # "n"  (last)
text[1:4]    # "yth" (slice)
text[:3]     # "Pyt" (from start)
text[3:]     # "hon" (to end)
text[::2]    # "Pto" (every 2nd)
text[::-1]   # "nohtyP" (reverse)
```

```python
# f-strings
name = "Aubrey"
age = 2
f"Hello, {name}!"                    # "Hello, Aubrey!"
f"{name} is {age} years old"           # "Aubrey is 2 years old"
f"Debug: {age=}"                        # "Debug: age=2"
f"{3.14159:.2f}"                         # "3.14"

# .format()
"Hello, {name}!".format(name="Aubrey")    # "Hello, Aubrey!"
```

```python
"This is:\tCool."        # tab is interpreted → "This is:    Cool."
r"This is:\tCool."        # raw string, no interpretation → "This is:\tCool."
```

---

## Numbers & Math

```python
10 + 3    # 13
10 - 3    # 7
10 * 3    # 30
10 / 3    # 3.3333333333333335
10 // 3   # 3   (floor division)
10 % 3    # 1   (modulo)
2 ** 3    # 8   (power)
```

```python
abs(-5)              # 5
round(3.7)             # 4
round(3.14159, 2)       # 3.14
min(3, 1, 2)              # 1
max(3, 1, 2)               # 3
sum([1, 2, 3])               # 6
```

```python
import math
math.sqrt(16)         # 4.0
math.floor(3.7)         # 3
math.ceil(3.1)            # 4
math.pi                     # 3.141592653589793
```

---

## Conditionals

- Python uses indentation, not braces — 4 spaces per level is the convention.

```python
if age < 13:
    category = "child"
elif age < 20:
    category = "teenager"
else:
    category = "adult"
```

```python
x == y    # equal to
x != y    # not equal to
x < y     # less than
x <= y    # less than or equal
x > y     # greater than
x >= y    # greater than or equal
```

```python
if age >= 18 and has_car:
    print("Roadtrip!")

if is_weekend or is_holiday:
    print("No work today.")

if not is_raining:
    print("You can go outside.")
```

```python
# Ternary / conditional expression
status = "adult" if age >= 18 else "minor"
```

---

## Loops

- `range(5)` generates `0, 1, 2, 3, 4`.
- `enumerate()` gives you index + value together.
- `break` exits the loop; `continue` skips to the next iteration.
- Watch `while` loops for infinite-loop bugs.

```python
for i in range(5):        # 0, 1, 2, 3, 4
    print(i)

fruits = ["apple", "banana"]
for fruit in fruits:
    print(fruit)

for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

for name, age in zip(["A", "B"], [1, 2]):   # loop two lists in parallel
    print(name, age)
```

```python
while True:
    user_input = input("Enter 'quit' to exit: ")
    if user_input == "quit":
        break
    print(f"You entered: {user_input}")
```

```python
for i in range(10):
    if i == 3:
        continue   # skip this iteration
    if i == 7:
        break        # exit the loop
    print(i)
else:
    print("Loop finished without break")   # for/while...else
```

---

## Functions

- Define with `def`; call with `()`; return values with `return`.
- `lambda` creates small anonymous functions.

```python
def greet():
    return "Hello!"

def greet_person(name):
    return f"Hello, {name}!"

def add(x, y=10):          # default parameter
    return x + y

def total(*args, **kwargs):   # variable positional / keyword args
    return sum(args)
```

```python
greet()                    # "Hello!"
greet_person("Bartosz")     # "Hello, Bartosz!"
add(5, 3)                    # 8
add(7)                        # 17
add(y=1, x=2)                  # 3, keyword args
```

```python
def get_min_max(numbers):
    return min(numbers), max(numbers)   # returns a tuple

minimum, maximum = get_min_max([1, 5, 3])
```

```python
callable(x)   # can x be called like a function?
dir(x)          # list attributes/methods
globals()        # current global symbol table
hash(x)            # hash value
id(x)               # unique object identifier
locals()             # current local symbol table
repr(x)               # debug-friendly string representation
```

```python
square = lambda x: x ** 2
square(5)   # 25

numbers = [1, 2, 3, 4]
squared = list(map(lambda x: x ** 2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
```

---

## Classes

- A class is a blueprint for objects; you can create many instances.
- `__init__` is the constructor; `self` refers to the instance.

```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} says Woof!"

my_dog = Dog("Frieda", 3)
print(my_dog.bark())   # Frieda says Woof!
```

```python
class Cat:
    species = "Felis catus"       # class attribute (shared)

    def __init__(self, name):
        self.name = name           # instance attribute

    def meow(self):
        return f"{self.name} says Meow!"

    @classmethod
    def create_kitten(cls, name):
        return cls(f"Baby {name}")

    @staticmethod
    def is_feline():
        return True

    @property
    def loud_name(self):
        return self.name.upper()
```

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError

class Dog(Animal):
    def speak(self):
        return f"{self.name} barks!"
```

```python
class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __repr__(self):             # dev-facing string
        return f"Point({self.x}, {self.y})"

    def __eq__(self, other):        # enables ==
        return (self.x, self.y) == (other.x, other.y)
```

---

## Exceptions

- Errors raise exceptions; catch specific types where possible.
- `else` runs only if no exception occurred; `finally` always runs.

```python
try:
    number = int(input("Enter a number: "))
    result = 10 / number
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
else:
    print(f"Result: {result}")
finally:
    print("Calculation attempted")
```

```python
ValueError            # invalid value
TypeError               # wrong type
IndexError                # list index out of range
KeyError                    # dict key not found
FileNotFoundError             # file doesn't exist
AttributeError                  # attribute/method doesn't exist
```

```python
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    return age
```

```python
class InsufficientFundsError(Exception):   # custom exception
    pass
```

---

## Collections

- A collection stores multiple items and is iterable; strings count too.
- `len()` gives size; `in` checks membership.

```python
empty = []
nums = [5]
mixed = [1, "two", 3.0, True]

nums.append("x")           # add to end
nums.insert(0, "y")          # insert at index
nums.extend(["z", 5])          # extend with iterable
nums.remove("x")                 # remove first match
last = nums.pop()                  # remove & return last element

fruits = ["banana", "apple", "orange"]
fruits[0]                  # "banana"
fruits[-1]                   # "orange"
"apple" in fruits              # True
len(fruits)                      # 3
fruits.sort()                       # in place
sorted(fruits, reverse=True)          # new sorted list
```

```python
point = (3, 4)
single = (1,)        # trailing comma required for 1-tuple
empty = ()

x, y = point          # unpacking
x                        # 3

first, *rest = (1, 2, 3, 4)
first                       # 1
rest                          # [2, 3, 4]
```

```python
a = {1, 2, 3}
b = set([3, 4, 4, 5])

a | b            # union → {1, 2, 3, 4, 5}
a & b            # intersection → {3}
a - b            # difference → {1, 2}
a ^ b            # symmetric difference → {1, 2, 4, 5}
```

```python
empty = {}
pet = {"name": "Leo", "age": 42}

pet["sound"] = "Purr!"     # add key
pet["age"] = 7               # update value
age = pet.get("age", 0)        # get with default
del pet["sound"]                 # delete key
pet.pop("age")                     # remove & return

pet = {"name": "Frieda", "sound": "Bark!"}
pet.keys()      # dict_keys(['name', 'sound'])
pet.values()      # dict_values(['Frieda', 'Bark!'])
pet.items()         # dict_items([('name', 'Frieda'), ('sound', 'Bark!')])
```

```python
from collections import defaultdict, Counter, namedtuple, deque

d = defaultdict(list)         # missing keys auto-create as []
d["a"].append(1)

Counter(["a", "b", "a"])        # Counter({'a': 2, 'b': 1})

Point = namedtuple("Point", ["x", "y"])
p = Point(1, 2); p.x               # 1

dq = deque([1, 2, 3])
dq.appendleft(0)                       # fast O(1) push/pop both ends
```

---

## Comprehensions

- A condensed `for` loop; generally faster than the loop it replaces.

```python
squares = [x**2 for x in range(10)]

evens = [x for x in range(20) if x % 2 == 0]

matrix = [[i * j for j in range(3)] for i in range(3)]     # nested
```

```python
word_lengths = {word: len(word) for word in ["hello", "world"]}   # dict comp

unique_lengths = {len(word) for word in ["who", "what", "why"]}      # set comp

sum_squares = sum(x**2 for x in range(1000))                           # generator expr (lazy)
```

---

## File I/O

```python
# Read an entire file
with open("file.txt", mode="r", encoding="utf-8") as file:
    content = file.read()

# Read line by line
with open("file.txt", mode="r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())

# Write (overwrite)
with open("output.txt", mode="w", encoding="utf-8") as file:
    file.write("Hello, World!\n")

# Append
with open("log.txt", mode="a", encoding="utf-8") as file:
    file.write("New log entry\n")
```

```python
from pathlib import Path

p = Path("data/file.txt")
p.exists()          # True/False
p.stem                # "file"
p.suffix                # ".txt"
p.parent                  # Path("data")
p.read_text()               # read whole file as str
```

---

## Imports & Modules

- Prefer explicit imports over `import *`.
- Group imports: standard library → third-party → local/user-defined.

```python
import math
math.sqrt(16)

from math import sqrt
sqrt(16)

import numpy as np
np.array([1, 2, 3])

from math import *     # avoid — pollutes namespace
```

```python
import package.module
from package import module
from package.subpackage import module

from package.module import function, Class
from package.module import name as alias
```

```python
if __name__ == "__main__":     # only runs when file is executed directly
    main()
```

---

## Virtual Environments

- A "venv" isolates project dependencies from the system Python.

```shell
python -m venv .venv
```

```shell
# Windows
.venv\Scripts\activate
```

```shell
# Linux & macOS
source .venv/bin/activate
```

```shell
deactivate
```

---

## Packages

- The official third-party index is [PyPI](https://pypi.org/).

```shell
python -m pip install requests
```

```shell
python -m pip freeze > requirements.txt
python -m pip install -r requirements.txt
```

```shell
python -m pip install --upgrade requests
python -m pip uninstall requests
python -m pip list
```

---

## Type Hints

```python
def greet(name: str) -> str:
    return f"Hello, {name}!"

age: int = 7
scores: list[int] = [1, 2, 3]
mapping: dict[str, int] = {"a": 1}
maybe: int | None = None            # Optional[int]

from typing import Callable
handler: Callable[[int, int], int] = lambda a, b: a + b
```

---

## Miscellaneous / Pythonic Idioms

| Truthy                 | Falsy  |
|-------------------------|--------|
| `-42`                     | `0`      |
| `3.14`                      | `0.0`      |
| `"John"`                      | `""`         |
| `[1, 2, 3]`                      | `[]`           |
| `("apple", "banana")`             | `()`             |
| `{"key": None}`                     | `{}`               |
|                                        | `None`               |

```python
# Swap variables
a, b = b, a

# Flatten a list of lists
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [item for sublist in matrix for item in sublist]

# Remove duplicates (order not preserved)
unique_unordered = list(set(my_list))

# Remove duplicates, preserve order
unique = list(dict.fromkeys(my_list))

# Count occurrences
from collections import Counter
counts = Counter(my_list)

# Merge dicts (3.9+)
merged = dict_a | dict_b

# Chained comparisons
1 < x < 10

# Unpack into function call
def add(a, b): return a + b
args = (2, 3)
add(*args)
```
