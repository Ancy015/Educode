// PYTHON BEGINNER CURRICULUM - INSERT THIS BEFORE getCurriculum in mockData.js

export const PYTHON_BEGINNER_CURRICULUM = [
    {
        id: "python-beginner-0",
        title: "Python Introduction & Installation",
        level: "beginner",
        type: "theory",
        content: `<h3>Python Introduction & Installation</h3>
<p><strong>What is Python?</strong> A high-level, interpreted language known for simplicity and readability. Used in web development, data science, AI, and automation.</p>
<p><strong>Why Python?</strong> Easy to learn, powerful ecosystem (Django, Flask, Pandas, NumPy), massive community.</p>
<p><strong>Installation:</strong></p>
<ul><li>Download from python.org</li><li>Install Python 3.x</li><li>Verify: Open terminal, run: <code>python --version</code></li></ul>
<p><strong>First Program:</strong></p>
<pre><code>print("Hello, Python!")
print("Welcome to coding!")</code></pre>
<p><strong>Output:</strong></p>
<pre><code>Hello, Python!
Welcome to coding!</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Install Python 3.x and verify version using terminal.", solution: "python" },
            { id: 2, type: "practice", prompt: "Create a file hello.py and print your name.", solution: "print" },
            { id: 3, type: "practice", prompt: "Print three different messages about Python.", solution: "print" },
            { id: 4, type: "practice", prompt: "Run a Python script and describe what happens.", solution: "python" },
            { id: 5, type: "practice", prompt: "Check Python's path using 'which python' (Mac/Linux) or 'where python' (Windows).", solution: "python" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-beginner-1",
        title: "Python Syntax & Indentation",
        level: "beginner",
        type: "theory",
        content: `<h3>Python Syntax & Indentation</h3>
<p><strong>Key Points:</strong> Python is indentation-based. Proper indentation is REQUIRED.</p>
<p><strong>Basic Rules:</strong></p>
<ul><li>Use 4 spaces per indentation level (standard)</li><li>Lines end without semicolon</li><li>Comments start with #</li><li>Code blocks (if, for, function) must be indented</li></ul>
<p><strong>Example:</strong></p>
<pre><code># This is a comment
name = "Alice"
if name == "Alice":
    print("Hello Alice!")  # Must be indented
    print("Welcome!")      # Still inside if block</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Write code with proper indentation for an if statement.", solution: "if" },
            { id: 2, type: "practice", prompt: "Predict output: what happens if indentation is wrong?", solution: "IndentationError" },
            { id: 3, type: "practice", prompt: "Create a multi-line program with comments.", solution: "#" },
            { id: 4, type: "practice", prompt: "Fix indentation in a broken code block.", solution: "    " },
            { id: 5, type: "practice", prompt: "Explain why indentation matters in Python.", solution: "block" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-beginner-2",
        title: "Variables & Data Types",
        level: "beginner",
        type: "theory",
        content: `<h3>Variables & Data Types</h3>
<p><strong>Variables:</strong> Store data with a name.</p>
<p><strong>Data Types:</strong> int, float, str, bool, list, dict, tuple</p>
<p><strong>Example:</strong></p>
<pre><code>age = 25            # int
height = 5.9        # float
name = "Bob"        # str
is_student = True   # bool

print(name, "is", age, "years old")</code></pre>
<p><strong>Type Checking:</strong> Use <code>type(variable)</code> to check data type.</p>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Create 5 variables of different types and print them.", solution: "=" },
            { id: 2, type: "practice", prompt: "Use type() function to check variable types.", solution: "type(" },
            { id: 3, type: "practice", prompt: "Store student info: name, age, gpa. Print formatted.", solution: "print" },
            { id: 4, type: "practice", prompt: "Swap two variables and print results.", solution: "=" },
            { id: 5, type: "practice", prompt: "Store a list of 3 hobbies and access the first one.", solution: "[" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-beginner-3",
        title: "Input / Output Operations",
        level: "beginner",
        type: "theory",
        content: `<h3>Input / Output Operations</h3>
<p><strong>Output:</strong> Use <code>print()</code> to display data.</p>
<p><strong>Input:</strong> Use <code>input()</code> to get user input (returns string).</p>
<p><strong>Example:</strong></p>
<pre><code>name = input("Enter your name: ")
age = int(input("Enter your age: "))  # Convert to int

print(f"Hello {name}! You are {age} years old.")</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Take user input for name and age, then print a greeting.", solution: "input(" },
            { id: 2, type: "practice", prompt: "Use f-string to format output with variables.", solution: "f\"" },
            { id: 3, type: "practice", prompt: "Convert user input to int and perform math operation.", solution: "int(" },
            { id: 4, type: "practice", prompt: "Take multiple inputs and display in formatted output.", solution: "input" },
            { id: 5, type: "practice", prompt: "Create a simple name and age calculator with input().", solution: "input" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-beginner-4",
        title: "Operators & Expressions",
        level: "beginner",
        type: "theory",
        content: `<h3>Operators & Expressions</h3>
<p><strong>Arithmetic:</strong> +, -, *, /, //, %, **</p>
<p><strong>Comparison:</strong> ==, !=, >, <, >=, <=</p>
<p><strong>Logical:</strong> and, or, not</p>
<p><strong>Example:</strong></p>
<pre><code>x, y = 10, 3
print(x + y)      # 13
print(x * y)      # 30
print(x // y)     # 3 (floor division)
print(x % y)      # 1 (modulo)
print(x > y and y > 0)  # True</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Calculate sum, difference, product, division of two numbers.", solution: "+" },
            { id: 2, type: "practice", prompt: "Use floor division (//) and modulo (%) operators.", solution: "//" },
            { id: 3, type: "practice", prompt: "Compare two numbers using ==, !=, >, < operators.", solution: "==" },
            { id: 4, type: "practice", prompt: "Use 'and', 'or', 'not' logical operators.", solution: "and" },
            { id: 5, type: "practice", prompt: "Calculate compound expression with multiple operators.", solution: "(" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-beginner-5",
        title: "Conditional Statements (if, elif, else)",
        level: "beginner",
        type: "theory",
        content: `<h3>Conditional Statements</h3>
<p><strong>Syntax:</strong></p>
<pre><code>if condition:
    # do something
elif another_condition:
    # do something else
else:
    # default action</code></pre>
<p><strong>Example:</strong></p>
<pre><code>age = 20
if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teen")
else:
    print("Child")</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Check if age >= 18 (adult), < 18 (child), print result.", solution: "if" },
            { id: 2, type: "practice", prompt: "Use if/elif/else to classify a number as positive, negative, zero.", solution: "if" },
            { id: 3, type: "practice", prompt: "Check multiple conditions: age >= 18 AND has_license -> can drive.", solution: "and" },
            { id: 4, type: "practice", prompt: "Nested if: check grade (A/B/C) based on score.", solution: "if" },
            { id: 5, type: "practice", prompt: "Ternary operator: result = 'yes' if condition else 'no'.", solution: "else" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-beginner-6",
        title: "Loops (for, while)",
        level: "beginner",
        type: "theory",
        content: `<h3>Loops: for and while</h3>
<p><strong>for Loop:</strong> Iterate over sequences</p>
<pre><code>for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

for item in ["apple", "banana", "cherry"]:
    print(item)</code></pre>
<p><strong>while Loop:</strong> Repeat while condition is true</p>
<pre><code>count = 0
while count < 5:
    print(count)
    count += 1</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Print numbers 1 to 10 using a for loop with range().", solution: "for" },
            { id: 2, type: "practice", prompt: "Iterate through a list and print each item.", solution: "for" },
            { id: 3, type: "practice", prompt: "Use while loop to print numbers until a condition is false.", solution: "while" },
            { id: 4, type: "practice", prompt: "Calculate sum of first N numbers using a loop.", solution: "for" },
            { id: 5, type: "practice", prompt: "Use break and continue in loops.", solution: "break" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-beginner-7",
        title: "Functions – Basics",
        level: "beginner",
        type: "theory",
        content: `<h3>Functions – Basics</h3>
<p><strong>Define a function:</strong></p>
<pre><code>def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Call the function</code></pre>
<p><strong>Return values:</strong></p>
<pre><code>def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Create function greet(name) that prints a greeting.", solution: "def" },
            { id: 2, type: "practice", prompt: "Function with return: square(n) returns n*n.", solution: "return" },
            { id: 3, type: "practice", prompt: "Function with multiple parameters: add(a, b) returns sum.", solution: "def" },
            { id: 4, type: "practice", prompt: "Function that takes a list and returns its length.", solution: "len" },
            { id: 5, type: "practice", prompt: "Call a function multiple times with different inputs.", solution: "def" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-beginner-8",
        title: "Lists, Tuples & Sets",
        level: "beginner",
        type: "theory",
        content: `<h3>Lists, Tuples & Sets</h3>
<p><strong>List (mutable):</strong></p>
<pre><code>fruits = ["apple", "banana", "cherry"]
fruits[0]  # "apple"
fruits.append("date")
print(fruits)  # ["apple", "banana", "cherry", "date"]</code></pre>
<p><strong>Tuple (immutable):</strong></p>
<pre><code>coords = (10, 20)
print(coords[0])  # 10</code></pre>
<p><strong>Set (unique values):</strong></p>
<pre><code>numbers = {1, 2, 3, 3, 2}
print(numbers)  # {1, 2, 3}</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Create a list of 5 items, add and remove elements.", solution: "[" },
            { id: 2, type: "practice", prompt: "Access list elements by index and slice lists.", solution: "[" },
            { id: 3, type: "practice", prompt: "Create a tuple and demonstrate it's immutable.", solution: "(" },
            { id: 4, type: "practice", prompt: "Create a set with duplicates and show unique values.", solution: "{" },
            { id: 5, type: "practice", prompt: "Combine lists, find common elements using sets.", solution: "[" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-beginner-9",
        title: "Dictionaries & Simple Programs",
        level: "beginner",
        type: "theory",
        content: `<h3>Dictionaries & Simple Programs</h3>
<p><strong>Dictionary (key-value pairs):</strong></p>
<pre><code>student = {"name": "Alice", "age": 20, "gpa": 3.8}
print(student["name"])  # "Alice"
student["age"] = 21
student["email"] = "alice@example.com"</code></pre>
<p><strong>Iterate through dictionary:</strong></p>
<pre><code>for key, value in student.items():
    print(f"{key}: {value}")</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Create a dictionary with student info and access values.", solution: "{" },
            { id: 2, type: "practice", prompt: "Add and remove key-value pairs from a dictionary.", solution: "[" },
            { id: 3, type: "practice", prompt: "Iterate through dictionary using .items().", solution: "for" },
            { id: 4, type: "practice", prompt: "Create nested dictionary (student with grades).", solution: "{" },
            { id: 5, type: "practice", prompt: "Write a simple address book program using dictionaries.", solution: "{" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    }
];

export const PYTHON_INTERMEDIATE_CURRICULUM = [
    {
        id: "python-intermediate-0",
        title: "Advanced Functions (args, kwargs, lambda)",
        level: "intermediate",
        type: "theory",
        content: `<h3>Advanced Functions: *args, **kwargs, lambda</h3>
<p><strong>*args (variable positional arguments):</strong></p>
<pre><code>def sum_all(*args):
    total = sum(args)
    return total

print(sum_all(1, 2, 3, 4))  # 10</code></pre>
<p><strong>**kwargs (variable keyword arguments):</strong></p>
<pre><code>def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=20, city="NYC")</code></pre>
<p><strong>lambda (anonymous function):</strong></p>
<pre><code>square = lambda x: x ** 2
print(square(5))  # 25

numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # [1, 4, 9, 16, 25]</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Create function with *args to sum any number of arguments.", solution: "*args" },
            { id: 2, type: "practice", prompt: "Create function with **kwargs to display key-value pairs.", solution: "**kwargs" },
            { id: 3, type: "practice", prompt: "Use lambda with map() to transform a list.", solution: "lambda" },
            { id: 4, type: "practice", prompt: "Use lambda with filter() to get even numbers.", solution: "lambda" },
            { id: 5, type: "practice", prompt: "Function that accepts both *args and **kwargs.", solution: "def" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-intermediate-1",
        title: "String Manipulation & Formatting",
        level: "intermediate",
        type: "theory",
        content: `<h3>String Manipulation & Formatting</h3>
<p><strong>String methods:</strong></p>
<pre><code>text = "Hello Python"
print(text.lower())          # hello python
print(text.upper())          # HELLO PYTHON
print(text.replace("Python", "World"))  # Hello World
print(text.split())          # ["Hello", "Python"]
print("-".join(["a", "b", "c"]))  # a-b-c</code></pre>
<p><strong>f-strings (formatted string literals):</strong></p>
<pre><code>name = "Alice"
age = 25
print(f"Name: {name}, Age: {age}")  # Name: Alice, Age: 25</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Use string methods: upper(), lower(), replace().", solution: "." },
            { id: 2, type: "practice", prompt: "Split string by delimiter and join back.", solution: "split" },
            { id: 3, type: "practice", prompt: "Use f-strings to format output with variables.", solution: "f\"" },
            { id: 4, type: "practice", prompt: "Find substring position using find() or index().", solution: "find" },
            { id: 5, type: "practice", prompt: "Remove whitespace using strip(), lstrip(), rstrip().", solution: "strip" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-intermediate-2",
        title: "File Handling (read/write/update)",
        level: "intermediate",
        type: "theory",
        content: `<h3>File Handling</h3>
<p><strong>Read a file:</strong></p>
<pre><code>with open("data.txt", "r") as file:
    content = file.read()
    print(content)</code></pre>
<p><strong>Write to a file:</strong></p>
<pre><code>with open("output.txt", "w") as file:
    file.write("Hello, World!")
    file.write("\\nSecond line")</code></pre>
<p><strong>Append to a file:</strong></p>
<pre><code>with open("log.txt", "a") as file:
    file.write("\\nNew log entry")</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Read a text file and print its contents.", solution: "open(" },
            { id: 2, type: "practice", prompt: "Write multiple lines to a file.", solution: "write" },
            { id: 3, type: "practice", prompt: "Append new data to an existing file.", solution: "\"a\"" },
            { id: 4, type: "practice", prompt: "Read file line by line using readlines().", solution: "readlines" },
            { id: 5, type: "practice", prompt: "Use 'with' statement for safe file handling.", solution: "with" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-intermediate-3",
        title: "Error Handling (try, except, finally)",
        level: "intermediate",
        type: "theory",
        content: `<h3>Error Handling</h3>
<p><strong>try-except block:</strong></p>
<pre><code>try:
    x = int(input("Enter a number: "))
    print(10 / x)
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    print("This always runs")</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Try-except block for ValueError when converting input.", solution: "try" },
            { id: 2, type: "practice", prompt: "Multiple except blocks for different error types.", solution: "except" },
            { id: 3, type: "practice", prompt: "Finally block that always executes.", solution: "finally" },
            { id: 4, type: "practice", prompt: "Catch generic Exception and print error message.", solution: "except" },
            { id: 5, type: "practice", prompt: "Raise custom exception with raise statement.", solution: "raise" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-intermediate-4",
        title: "Modules & Packages",
        level: "intermediate",
        type: "theory",
        content: `<h3>Modules & Packages</h3>
<p><strong>Import module:</strong></p>
<pre><code>import math
print(math.sqrt(16))  # 4.0
print(math.pi)        # 3.14159...

from math import sqrt, pi
print(sqrt(16))
print(pi)</code></pre>
<p><strong>Create custom module:</strong></p>
<pre><code># mymodule.py
def greet(name):
    return f"Hello, {name}!"

# main.py
import mymodule
print(mymodule.greet("Alice"))</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Import and use math module functions.", solution: "import" },
            { id: 2, type: "practice", prompt: "Use from...import to import specific functions.", solution: "from" },
            { id: 3, type: "practice", prompt: "Import as alias: import numpy as np.", solution: "as" },
            { id: 4, type: "practice", prompt: "Create custom module with functions.", solution: "def" },
            { id: 5, type: "practice", prompt: "Use datetime module to work with dates.", solution: "datetime" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-intermediate-5",
        title: "List / Dict Comprehensions",
        level: "intermediate",
        type: "theory",
        content: `<h3>List & Dictionary Comprehensions</h3>
<p><strong>List Comprehension:</strong></p>
<pre><code>squares = [x**2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]

evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]</code></pre>
<p><strong>Dictionary Comprehension:</strong></p>
<pre><code>square_dict = {x: x**2 for x in range(5)}
print(square_dict)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Create list comprehension for squared numbers.", solution: "[" },
            { id: 2, type: "practice", prompt: "List comprehension with conditional (if).", solution: "for" },
            { id: 3, type: "practice", prompt: "Dictionary comprehension for key-value mapping.", solution: "{" },
            { id: 4, type: "practice", prompt: "Nested list comprehension.", solution: "[" },
            { id: 5, type: "practice", prompt: "Convert list to dict using dict comprehension.", solution: "for" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-intermediate-6",
        title: "Object-Oriented Programming (OOP Basics)",
        level: "intermediate",
        type: "theory",
        content: `<h3>Object-Oriented Programming Basics</h3>
<p><strong>Classes and Objects:</strong></p>
<pre><code>class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        return f"{self.name} says Woof!"

dog = Dog("Buddy", 5)
print(dog.bark())  # Buddy says Woof!</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Create a class with __init__ and a method.", solution: "class" },
            { id: 2, type: "practice", prompt: "Create object instance and call methods.", solution: "Dog(" },
            { id: 3, type: "practice", prompt: "Use self parameter to access instance variables.", solution: "self" },
            { id: 4, type: "practice", prompt: "Create class with multiple methods.", solution: "def" },
            { id: 5, type: "practice", prompt: "Create class for student with name, id, gpa.", solution: "class" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-intermediate-7",
        title: "Classes & Objects",
        level: "intermediate",
        type: "theory",
        content: `<h3>Classes & Objects - Deeper Dive</h3>
<p><strong>Attributes and Methods:</strong></p>
<pre><code>class Car:
    wheels = 4  # Class attribute
    
    def __init__(self, brand, year):
        self.brand = brand      # Instance attribute
        self.year = year
    
    def info(self):
        return f"{self.year} {self.brand}"
    
    def age(self):
        return 2024 - self.year

car = Car("Toyota", 2020)
print(car.info())  # 2020 Toyota
print(car.age())   # 4</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Class with class and instance attributes.", solution: "class" },
            { id: 2, type: "practice", prompt: "Add and modify instance variables.", solution: "self" },
            { id: 3, type: "practice", prompt: "Create multiple objects from same class.", solution: "(" },
            { id: 4, type: "practice", prompt: "Method that uses instance variables.", solution: "def" },
            { id: 5, type: "practice", prompt: "Create class with initialization and methods.", solution: "__init__" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-intermediate-8",
        title: "Virtual Environments & pip",
        level: "intermediate",
        type: "theory",
        content: `<h3>Virtual Environments & pip</h3>
<p><strong>pip - Python Package Manager:</strong></p>
<pre><code># Install a package
pip install requests

# Install specific version
pip install requests==2.28.0

# List installed packages
pip list

# Requirements file
pip install -r requirements.txt</code></pre>
<p><strong>Virtual Environment:</strong></p>
<pre><code># Create virtual environment
python -m venv myenv

# Activate (Windows)
myenv\\Scripts\\activate

# Activate (Mac/Linux)
source myenv/bin/activate

# Install packages in virtual env
pip install flask django</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Create virtual environment and activate it.", solution: "venv" },
            { id: 2, type: "practice", prompt: "Install pip packages using pip install.", solution: "pip" },
            { id: 3, type: "practice", prompt: "Generate requirements.txt and install from it.", solution: "pip" },
            { id: 4, type: "practice", prompt: "Verify Python version inside virtual environment.", solution: "python" },
            { id: 5, type: "practice", prompt: "Create and use different virtual environments.", solution: "venv" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-intermediate-9",
        title: "Mini Project (CLI based)",
        level: "intermediate",
        type: "theory",
        content: `<h3>Mini Project: Command-Line Interface Application</h3>
<p><strong>Project: Task Manager CLI</strong></p>
<p>Build a simple command-line app to manage tasks:</p>
<ul>
<li>Add tasks to a list</li>
<li>Display all tasks</li>
<li>Mark task as complete</li>
<li>Delete tasks</li>
<li>Save tasks to file</li>
</ul>
<p><strong>Features to implement:</strong></p>
<ul>
<li>Use while loop for menu</li>
<li>Functions for each operation</li>
<li>Dictionary/List to store tasks</li>
<li>File I/O to persist data</li>
</ul>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Create task manager with add, view, delete functions.", solution: "def" },
            { id: 2, type: "practice", prompt: "Build CLI menu with while loop.", solution: "while" },
            { id: 3, type: "practice", prompt: "Store tasks in dictionary with timestamps.", solution: "{" },
            { id: 4, type: "practice", prompt: "Save and load tasks from JSON file.", solution: "json" },
            { id: 5, type: "practice", prompt: "Complete working task manager with all features.", solution: "def" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    }
];

export const PYTHON_ADVANCED_CURRICULUM = [
    {
        id: "python-advanced-0",
        title: "Advanced OOP (Inheritance, Polymorphism)",
        level: "advanced",
        type: "theory",
        content: `<h3>Advanced OOP: Inheritance & Polymorphism</h3>
<p><strong>Inheritance:</strong></p>
<pre><code>class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return f"{self.name} makes a sound"

class Dog(Animal):
    def speak(self):
        return f"{self.name} barks"

dog = Dog("Buddy")
print(dog.speak())  # Buddy barks</code></pre>
<p><strong>Polymorphism:</strong></p>
<pre><code>animals = [Dog("Rex"), Cat("Whiskers")]
for animal in animals:
    print(animal.speak())  # Each calls its own speak()</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Create parent class and child class with inheritance.", solution: "class" },
            { id: 2, type: "practice", prompt: "Override parent method in child class.", solution: "def" },
            { id: 3, type: "practice", prompt: "Use super() to call parent class method.", solution: "super" },
            { id: 4, type: "practice", prompt: "Polymorphism: multiple classes with same method name.", solution: "def" },
            { id: 5, type: "practice", prompt: "Create class hierarchy with multiple inheritance levels.", solution: "class" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-advanced-1",
        title: "Decorators & Generators",
        level: "advanced",
        type: "theory",
        content: `<h3>Decorators & Generators</h3>
<p><strong>Decorators:</strong></p>
<pre><code>def my_decorator(func):
    def wrapper():
        print("Something before function")
        func()
        print("Something after function")
    return wrapper

@my_decorator
def hello():
    print("Hello!")

hello()  # Calls wrapped version</code></pre>
<p><strong>Generators:</strong></p>
<pre><code>def countdown(n):
    while n > 0:
        yield n
        n -= 1

for num in countdown(5):
    print(num)  # 5, 4, 3, 2, 1</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Create simple decorator function.", solution: "def" },
            { id: 2, type: "practice", prompt: "Use @decorator syntax with function.", solution: "@" },
            { id: 3, type: "practice", prompt: "Create generator function with yield.", solution: "yield" },
            { id: 4, type: "practice", prompt: "Generator to create infinite sequence.", solution: "yield" },
            { id: 5, type: "practice", prompt: "Decorator with parameters/arguments.", solution: "def" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-advanced-2",
        title: "Iterators & Context Managers",
        level: "advanced",
        type: "theory",
        content: `<h3>Iterators & Context Managers</h3>
<p><strong>Iterators:</strong></p>
<pre><code>class MyIterator:
    def __init__(self, limit):
        self.limit = limit
        self.current = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current < self.limit:
            self.current += 1
            return self.current
        else:
            raise StopIteration

for i in MyIterator(3):
    print(i)  # 1, 2, 3</code></pre>
<p><strong>Context Managers (with statement):</strong></p>
<pre><code>with open("file.txt") as f:
    data = f.read()
# File automatically closes</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Create custom iterator class with __iter__ and __next__.", solution: "class" },
            { id: 2, type: "practice", prompt: "Use iterator in for loop.", solution: "for" },
            { id: 3, type: "practice", prompt: "Create context manager with __enter__ and __exit__.", solution: "def" },
            { id: 4, type: "practice", prompt: "Use context manager with 'with' statement.", solution: "with" },
            { id: 5, type: "practice", prompt: "Exception handling in context manager.", solution: "except" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-advanced-3",
        title: "Multithreading & Multiprocessing",
        level: "advanced",
        type: "theory",
        content: `<h3>Multithreading & Multiprocessing</h3>
<p><strong>Multithreading:</strong></p>
<pre><code>import threading

def task(name):
    for i in range(5):
        print(f"{name} - {i}")

thread = threading.Thread(target=task, args=("Thread1",))
thread.start()
thread.join()</code></pre>
<p><strong>Multiprocessing:</strong></p>
<pre><code>from multiprocessing import Process

def worker(num):
    print(f"Worker {num}")

if __name__ == "__main__":
    p = Process(target=worker, args=(1,))
    p.start()
    p.join()</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Create thread using threading.Thread.", solution: "Thread" },
            { id: 2, type: "practice", prompt: "Run multiple threads concurrently.", solution: "start" },
            { id: 3, type: "practice", prompt: "Use multiprocessing.Process for parallel execution.", solution: "Process" },
            { id: 4, type: "practice", prompt: "Thread synchronization with Lock.", solution: "Lock" },
            { id: 5, type: "practice", prompt: "Compare threading vs multiprocessing performance.", solution: "def" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-advanced-4",
        title: "Async Programming (async / await)",
        level: "advanced",
        type: "theory",
        content: `<h3>Async Programming with async/await</h3>
<p><strong>Async Functions:</strong></p>
<pre><code>import asyncio

async def fetch_data():
    print("Fetching...")
    await asyncio.sleep(2)
    print("Done!")
    return "data"

async def main():
    result = await fetch_data()
    print(result)

asyncio.run(main())</code></pre>
<p><strong>Run multiple async tasks:</strong></p>
<pre><code>async def main():
    results = await asyncio.gather(
        fetch_data(),
        fetch_data(),
        fetch_data()
    )
    return results</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Create async function using async def.", solution: "async" },
            { id: 2, type: "practice", prompt: "Use await to wait for async operation.", solution: "await" },
            { id: 3, type: "practice", prompt: "Run multiple coroutines with asyncio.gather().", solution: "gather" },
            { id: 4, type: "practice", prompt: "Simulate I/O operation with asyncio.sleep().", solution: "sleep" },
            { id: 5, type: "practice", prompt: "Error handling in async code with try-except.", solution: "except" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-advanced-5",
        title: "Memory Management & Performance",
        level: "advanced",
        type: "theory",
        content: `<h3>Memory Management & Performance Optimization</h3>
<p><strong>Understanding Memory:</strong></p>
<pre><code>import sys
x = [1, 2, 3]
print(sys.getsizeof(x))  # Size in bytes

# Check reference count
import gc
gc.get_referents(x)</code></pre>
<p><strong>Performance Tips:</strong></p>
<ul>
<li>Use list comprehensions instead of loops</li>
<li>Use generators for large datasets</li>
<li>Profile code with cProfile</li>
<li>Cache results with functools.lru_cache</li>
</ul>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Check memory usage of objects with sys.getsizeof().", solution: "getsizeof" },
            { id: 2, type: "practice", prompt: "Use @functools.lru_cache for memoization.", solution: "lru_cache" },
            { id: 3, type: "practice", prompt: "Profile code execution time with cProfile.", solution: "cProfile" },
            { id: 4, type: "practice", prompt: "Optimize list comprehension vs loops.", solution: "[" },
            { id: 5, type: "practice", prompt: "Memory leak prevention and garbage collection.", solution: "gc" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-advanced-6",
        title: "Working with APIs (REST, JSON)",
        level: "advanced",
        type: "theory",
        content: `<h3>Working with APIs: REST & JSON</h3>
<p><strong>Fetching from API:</strong></p>
<pre><code>import requests
import json

response = requests.get("https://jsonplaceholder.typicode.com/posts/1")
data = response.json()

print(data["title"])
print(data["body"])</code></pre>
<p><strong>POST Request:</strong></p>
<pre><code>payload = {"title": "New Post", "body": "Content"}
response = requests.post("https://api.example.com/posts", json=payload)
print(response.status_code)</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "GET request using requests library.", solution: "requests" },
            { id: 2, type: "practice", prompt: "Parse JSON response using .json().", solution: "json" },
            { id: 3, type: "practice", prompt: "POST request with payload.", solution: "post" },
            { id: 4, type: "practice", prompt: "Handle API errors with try-except.", solution: "except" },
            { id: 5, type: "practice", prompt: "Work with authentication tokens and headers.", solution: "headers" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-advanced-7",
        title: "Database Connectivity (SQL + ORM)",
        level: "advanced",
        type: "theory",
        content: `<h3>Database Connectivity: SQL & ORM</h3>
<p><strong>SQL with sqlite3:</strong></p>
<pre><code>import sqlite3

conn = sqlite3.connect("database.db")
cursor = conn.cursor()

# Create table
cursor.execute("""CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)""")

# Insert data
cursor.execute("INSERT INTO users (name) VALUES (?)", ("Alice",))
conn.commit()

# Fetch data
cursor.execute("SELECT * FROM users")
print(cursor.fetchall())</code></pre>
<p><strong>ORM with SQLAlchemy:</strong></p>
<pre><code>from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    name = Column(String)</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Create table and insert data using sqlite3.", solution: "sqlite3" },
            { id: 2, type: "practice", prompt: "Query database with SELECT statement.", solution: "SELECT" },
            { id: 3, type: "practice", prompt: "Use parameterized queries to prevent SQL injection.", solution: "?" },
            { id: 4, type: "practice", prompt: "Define models using SQLAlchemy ORM.", solution: "class" },
            { id: 5, type: "practice", prompt: "CRUD operations with ORM (Create, Read, Update, Delete).", solution: "class" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-advanced-8",
        title: "Testing & Debugging (pytest, logging)",
        level: "advanced",
        type: "theory",
        content: `<h3>Testing & Debugging with pytest & logging</h3>
<p><strong>Unit Testing with pytest:</strong></p>
<pre><code># test_math.py
def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0

# Run: pytest test_math.py</code></pre>
<p><strong>Logging:</strong></p>
<pre><code>import logging

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

logger.debug("Debug message")
logger.info("Info message")
logger.warning("Warning message")
logger.error("Error message")</code></pre>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Write unit tests with pytest assertions.", solution: "assert" },
            { id: 2, type: "practice", prompt: "Test exception handling with pytest.raises().", solution: "pytest" },
            { id: 3, type: "practice", prompt: "Set up logging with basicConfig().", solution: "logging" },
            { id: 4, type: "practice", prompt: "Log different severity levels.", solution: "logger" },
            { id: 5, type: "practice", prompt: "Debug code using pdb (Python Debugger).", solution: "pdb" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    },
    {
        id: "python-advanced-9",
        title: "Final Capstone Project",
        level: "advanced",
        type: "theory",
        content: `<h3>Final Capstone Project: Production-Ready App</h3>
<p><strong>Build a complete application with:</strong></p>
<ul>
<li><strong>Backend API:</strong> Flask/FastAPI with endpoints</li>
<li><strong>Database:</strong> SQLAlchemy ORM with multiple tables</li>
<li><strong>Authentication:</strong> User login with JWT tokens</li>
<li><strong>Error Handling:</strong> Proper try-except and logging</li>
<li><strong>Testing:</strong> Unit tests with pytest</li>
<li><strong>Performance:</strong> Async operations, caching</li>
<li><strong>Deployment:</strong> Deploy to cloud or local server</li>
</ul>
<p><strong>Project Example:</strong> Blog API with users, posts, comments, and authentication.</p>
<p><strong>Completion:</strong> Finish all 5 practice tasks to unlock the next topic.</p>`,
        questions: [
            { id: 1, type: "practice", prompt: "Create Flask API with GET, POST, PUT, DELETE routes.", solution: "Flask" },
            { id: 2, type: "practice", prompt: "Implement user authentication with JWT tokens.", solution: "jwt" },
            { id: 3, type: "practice", prompt: "Design database schema with relationships.", solution: "class" },
            { id: 4, type: "practice", prompt: "Write comprehensive unit tests for all endpoints.", solution: "def" },
            { id: 5, type: "practice", prompt: "Complete capstone project with all components integrated.", solution: "def" }
        ],
        videos: [
            { title: "Error Makes Clever - Python Full Course", url: "https://www.youtube.com/@ErrorMakesClever" }
        ]
    }
];
