// C# Complete Curriculum (36 topics across 3 levels)

// C# Beginner (10 topics)
const CSHARP_BEGINNER_CONTENT = {
    "Introduction to C# & .NET": {
        content: `<h3>Introduction to C# & .NET</h3>
<p>C# is a modern, object-oriented language built on the .NET Framework with automatic memory management, type-safety, and cross-platform support.</p>
<h4>What is C#?</h4>
<ul>
<li><strong>Managed Language:</strong> Automatic memory management via Garbage Collector</li>
<li><strong>Type-Safe:</strong> Compile-time type checking prevents runtime errors</li>
<li><strong>Cross-Platform:</strong> .NET Core allows Windows, Linux, macOS development</li>
</ul>
<h4>First Program:</h4>
<pre><code>using System;
class Program {
    static void Main() {
        Console.WriteLine("Hello, C#!");
    }
}</code></pre>`,
        videos: [
            { title: "C# Basics - Microsoft", url: "https://www.youtube.com/watch?v=GZ9d9x7ZZKY" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Write a program that prints "Welcome to C#"', template: 'using System;\nclass Program {\n    static void Main() {\n        // TODO: Print welcome message\n    }\n}', solution: 'Console.WriteLine("Welcome to C#");' },
            { id: 2, type: 'output', prompt: 'What does this code print?\nConsole.WriteLine("Hello" + " " + "World");', template: '', solution: 'Hello World' },
            { id: 3, type: 'modify', prompt: 'Modify to print on two lines', template: 'Console.WriteLine("Line1"); Console.WriteLine("Line2");', solution: 'Already correct - each WriteLine is a new line' },
            { id: 4, type: 'fix', prompt: 'Fix the syntax error', template: 'Console.WriteLine("Missing semicolon")', solution: 'Console.WriteLine("Missing semicolon");' },
            { id: 5, type: 'logic', prompt: 'Which is the entry point of a C# program?', template: '', solution: 'The Main() method' }
        ]
    },
    "Program Structure": {
        content: `<h3>Program Structure</h3>
<p>Understanding namespaces, using statements, and the Main method.</p>
<h4>Namespaces:</h4>
<pre><code>using System;
namespace MyApp {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("Organized code");
        }
    }
}</code></pre>`,
        videos: [
            { title: "Program Structure - Brackeys", url: "https://www.youtube.com/watch?v=sHuLb-vV4l4" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create a namespace called MyNamespace', template: 'using System;\nnamespace _________ {\n    class Program {\n        static void Main() { }\n    }\n}', solution: 'MyNamespace' },
            { id: 2, type: 'output', prompt: 'What is the purpose of using System;?', template: '', solution: 'Imports namespaces to use built-in classes like Console' },
            { id: 3, type: 'modify', prompt: 'Add command-line argument support', template: 'static void Main() { }', solution: 'static void Main(string[] args) { }' },
            { id: 4, type: 'fix', prompt: 'Fix this program structure', template: 'class Program static Main() { }', solution: 'static void Main() { }' },
            { id: 5, type: 'logic', prompt: 'What is args used for?', template: '', solution: 'Storing command-line arguments passed to the program' }
        ]
    },
    "Data Types": {
        content: `<h3>C# Data Types</h3>
<p>Primitive value types and reference types.</p>
<h4>Primitive Types:</h4>
<pre><code>int age = 25;          // 32-bit integer
double pi = 3.14;      // 64-bit floating point
bool active = true;    // Boolean
char letter = 'A';     // Single character
string name = "Alice"; // Text (reference type)</code></pre>`,
        videos: [
            { title: "Data Types - Bro Code", url: "https://www.youtube.com/watch?v=xIqNarUAdF8" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare a variable to store age as integer', template: 'int age = _______;', solution: '25 (or any number)' },
            { id: 2, type: 'output', prompt: 'What is the default value of an int?', template: '', solution: '0' },
            { id: 3, type: 'modify', prompt: 'Change float to double for more precision', template: 'float pi = 3.14f;', solution: 'double pi = 3.14;' },
            { id: 4, type: 'fix', prompt: 'Fix the string declaration', template: 'string name = Alice;', solution: 'string name = "Alice";' },
            { id: 5, type: 'logic', prompt: 'Why is string a reference type?', template: '', solution: 'Because strings are objects that exist on the heap' }
        ]
    },
    "Variables & Constants": {
        content: `<h3>Variables & Constants</h3>
<p>Declaration, initialization, and scope.</p>
<h4>Constants:</h4>
<pre><code>const int MaxSize = 100;
const string AppName = "MyApp";</code></pre>`,
        videos: [
            { title: "Variables - Traversy Media", url: "https://www.youtube.com/watch?v=wxznTygnRfQ" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare a constant for max value of 50', template: 'const int maxValue = _______;', solution: '50' },
            { id: 2, type: 'output', prompt: 'Can you change a constant after declaration?', template: '', solution: 'No, constants cannot be modified' },
            { id: 3, type: 'modify', prompt: 'Make this variable read-only', template: 'int version = 1;', solution: 'readonly int version = 1;' },
            { id: 4, type: 'fix', prompt: 'Fix the variable declaration', template: 'const int x;', solution: 'const int x = 10; (constants must be initialized)' },
            { id: 5, type: 'logic', prompt: 'What is the difference between const and readonly?', template: '', solution: 'const is compile-time, readonly is runtime assignable once' }
        ]
    },
    "Operators": {
        content: `<h3>Operators</h3>
<p>Arithmetic, comparison, and logical operators.</p>
<h4>Arithmetic:</h4>
<pre><code>int a = 10, b = 3;
int sum = a + b;       // 13
int product = a * b;   // 30
int remainder = a % b; // 1</code></pre>`,
        videos: [
            { title: "Operators - Bro Code", url: "https://www.youtube.com/watch?v=K-bYvzGH_2E" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Calculate 7 + 5 * 2', template: 'int result = _______;', solution: '17 (multiplication first)' },
            { id: 2, type: 'output', prompt: 'What is 15 % 4?', template: '', solution: '3' },
            { id: 3, type: 'modify', prompt: 'Use compound operator to add 5', template: 'x = x + 5;', solution: 'x += 5;' },
            { id: 4, type: 'fix', prompt: 'Fix the boolean expression', template: 'if (x = 5)', solution: 'if (x == 5)' },
            { id: 5, type: 'logic', prompt: 'What does the % operator do?', template: '', solution: 'Returns the remainder of division' }
        ]
    },
    "Control Statements": {
        content: `<h3>Control Flow</h3>
<p>If-else and switch statements.</p>
<h4>If-Else:</h4>
<pre><code>int age = 18;
if (age >= 18) {
    Console.WriteLine("Adult");
} else {
    Console.WriteLine("Minor");
}</code></pre>`,
        videos: [
            { title: "Control Flow - Code Monkey", url: "https://www.youtube.com/watch?v=5LrDIUGkQUs" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Write if statement to check if number > 10', template: 'if (num _______ 10) {', solution: '>' },
            { id: 2, type: 'output', prompt: 'What is the output?\nif (5 > 3) Console.WriteLine("Yes");', template: '', solution: 'Yes' },
            { id: 3, type: 'modify', prompt: 'Add else if for age 13-17', template: 'if (age >= 18) { } else { }', solution: 'if (age >= 18) { } else if (age >= 13) { } else { }' },
            { id: 4, type: 'fix', prompt: 'Fix the syntax', template: 'if (x > 5)\nConsole.WriteLine("Yes")', solution: 'Correct as is (braces optional for single statement)' },
            { id: 5, type: 'logic', prompt: 'What operator checks equality?', template: '', solution: '==' }
        ]
    },
    "Loops": {
        content: `<h3>Loops</h3>
<p>For, while, and foreach loops.</p>
<h4>For Loop:</h4>
<pre><code>for (int i = 0; i < 5; i++) {
    Console.WriteLine(i);
}</code></pre>`,
        videos: [
            { title: "Loops - Bro Code", url: "https://www.youtube.com/watch?v=R7lSFRPFBC0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Write a for loop for i from 0 to 9', template: 'for (int i = 0; i _______ 10; i++) {', solution: '<' },
            { id: 2, type: 'output', prompt: 'How many times does this loop run?\nfor (int i = 0; i < 3; i++)', template: '', solution: '3 times' },
            { id: 3, type: 'modify', prompt: 'Change to count down from 5 to 0', template: 'for (int i = 0; i < 5; i++)', solution: 'for (int i = 5; i >= 0; i--)' },
            { id: 4, type: 'fix', prompt: 'Fix the infinite loop', template: 'for (int i = 0; i < 10;)', solution: 'for (int i = 0; i < 10; i++)' },
            { id: 5, type: 'logic', prompt: 'When does a while loop stop?', template: '', solution: 'When its condition becomes false' }
        ]
    },
    "Methods & Functions": {
        content: `<h3>Methods</h3>
<p>Creating and calling methods with parameters.</p>
<h4>Method Definition:</h4>
<pre><code>public int Add(int a, int b) {
    return a + b;
}

int result = Add(5, 3);  // result = 8</code></pre>`,
        videos: [
            { title: "Methods - Traversy Media", url: "https://www.youtube.com/watch?v=2ZIw-3F3q5w" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create a method that returns 10', template: 'public int _______ () { return 10; }', solution: 'GetNumber (or any name)' },
            { id: 2, type: 'output', prompt: 'What does this return?\npublic int Multiply(int a, int b) { return a * b; }\nMultiply(4, 5)', template: '', solution: '20' },
            { id: 3, type: 'modify', prompt: 'Add a parameter for name', template: 'public void Greet() { }', solution: 'public void Greet(string name) { }' },
            { id: 4, type: 'fix', prompt: 'Fix the method syntax', template: 'public void PrintNum int x { }', solution: 'public void PrintNum(int x) { }' },
            { id: 5, type: 'logic', prompt: 'What keyword tells a method to stop and return?', template: '', solution: 'return' }
        ]
    },
    "Arrays": {
        content: `<h3>Arrays</h3>
<p>Single and multidimensional arrays.</p>
<h4>Array Declaration:</h4>
<pre><code>int[] numbers = new int[5];
int[] values = { 1, 2, 3, 4, 5 };
string[] names = new string[] { "Alice", "Bob" };</code></pre>`,
        videos: [
            { title: "Arrays - Code Monkey", url: "https://www.youtube.com/watch?v=V-TZPe1Wf0o" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare an array of 3 integers', template: 'int[] arr = new int[_______];', solution: '3' },
            { id: 2, type: 'output', prompt: 'What is the index of first element?', template: '', solution: '0' },
            { id: 3, type: 'modify', prompt: 'Initialize array with values 1,2,3', template: 'int[] arr = new int[3];', solution: 'int[] arr = { 1, 2, 3 };' },
            { id: 4, type: 'fix', prompt: 'Fix the array access', template: 'int[] arr = {1,2,3}; int x = arr[3];', solution: 'int x = arr[2]; (index 3 is out of bounds)' },
            { id: 5, type: 'logic', prompt: 'How do you get the length of an array?', template: '', solution: 'array.Length' }
        ]
    },
    "Strings": {
        content: `<h3>Strings</h3>
<p>String manipulation and methods.</p>
<h4>String Operations:</h4>
<pre><code>string name = "Alice";
string greeting = "Hello, " + name;
int length = name.Length;
string upper = name.ToUpper();</code></pre>`,
        videos: [
            { title: "Strings - Bro Code", url: "https://www.youtube.com/watch?v=gfkTfcpWqAY" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Concatenate "Hello " and "World"', template: 'string result = "Hello " _______ "World";', solution: '+' },
            { id: 2, type: 'output', prompt: 'What is the length of "Hello"?', template: '', solution: '5' },
            { id: 3, type: 'modify', prompt: 'Use string interpolation instead of concatenation', template: 'string s = "Name: " + name;', solution: 'string s = $"Name: {name}";' },
            { id: 4, type: 'fix', prompt: 'Fix the string declaration', template: 'string text = Hello World;', solution: 'string text = "Hello World";' },
            { id: 5, type: 'logic', prompt: 'How to get character at index 0?', template: '', solution: 'string[0]' }
        ]
    }
};

// C# Intermediate (13 topics)
const CSHARP_INTERMEDIATE_CONTENT = {
    "Object-Oriented Programming (OOP)": {
        content: `<h3>Object-Oriented Programming</h3><p>Core principles of OOP in C#.</p>`,
        videos: [{ title: "OOP - Traversy Media", url: "https://www.youtube.com/watch?v=SLnwkKKnZWU" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'What are the 4 pillars of OOP?', template: '', solution: 'Encapsulation, Inheritance, Polymorphism, Abstraction' },
            { id: 2, type: 'output', prompt: 'Is C# object-oriented?', template: '', solution: 'Yes' },
            { id: 3, type: 'modify', prompt: 'Make a class', template: 'public class _______', solution: 'Animal (or any name)' },
            { id: 4, type: 'fix', prompt: 'Fix this', template: 'class Dog {', solution: 'Correct - add closing brace }' },
            { id: 5, type: 'logic', prompt: 'What is an object?', template: '', solution: 'An instance of a class' }
        ]
    },
    "Classes & Objects": {
        content: `<h3>Classes & Objects</h3><p>Creating classes and instantiating objects.</p>`,
        videos: [{ title: "Classes - Code Monkey", url: "https://www.youtube.com/watch?v=sLyWnV87YmU" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create an object of Person class', template: 'Person _______ = new Person();', solution: 'p (or person)' },
            { id: 2, type: 'output', prompt: 'How do you create a new instance?', template: '', solution: 'Use the new keyword' },
            { id: 3, type: 'modify', prompt: 'Add a property Name', template: 'class Person { }', solution: 'class Person { public string Name { get; set; } }' },
            { id: 4, type: 'fix', prompt: 'Fix the instantiation', template: 'Person p = Person();', solution: 'Person p = new Person();' },
            { id: 5, type: 'logic', prompt: 'What is the difference between class and object?', template: '', solution: 'Class is template, object is instance' }
        ]
    },
    "Constructors & Destructors": {
        content: `<h3>Constructors & Destructors</h3><p>Initialization and cleanup.</p>`,
        videos: [{ title: "Constructors - Brackeys", url: "https://www.youtube.com/watch?v=LMRMb91z0CY" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Write a constructor for Person class', template: 'public _______ () { }', solution: 'Person' },
            { id: 2, type: 'output', prompt: 'When is constructor called?', template: '', solution: 'When object is created (new keyword)' },
            { id: 3, type: 'modify', prompt: 'Add parameter to constructor', template: 'public Person() { }', solution: 'public Person(string name) { }' },
            { id: 4, type: 'fix', prompt: 'Fix constructor name', template: 'public person() { }', solution: 'public Person() { } (capital P)' },
            { id: 5, type: 'logic', prompt: 'Can a class have multiple constructors?', template: '', solution: 'Yes, constructor overloading' }
        ]
    },
    "Inheritance": {
        content: `<h3>Inheritance</h3><p>Code reuse through class hierarchy.</p>`,
        videos: [{ title: "Inheritance - Code Monkey", url: "https://www.youtube.com/watch?v=hCnLp8SzpWs" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Inherit Dog from Animal', template: 'public class Dog : _______', solution: 'Animal' },
            { id: 2, type: 'output', prompt: 'What is the parent class called?', template: '', solution: 'Base class' },
            { id: 3, type: 'modify', prompt: 'Override a method', template: 'public class Dog : Animal { }', solution: 'public override void Speak() { }' },
            { id: 4, type: 'fix', prompt: 'Fix the inheritance', template: 'public class Dog : Animal, Cat { }', solution: 'C# doesn\'t support multiple inheritance from classes' },
            { id: 5, type: 'logic', prompt: 'Does Dog inherit Animal methods?', template: '', solution: 'Yes' }
        ]
    },
    "Polymorphism": {
        content: `<h3>Polymorphism</h3><p>Method overloading and overriding.</p>`,
        videos: [{ title: "Polymorphism - Brackeys", url: "https://www.youtube.com/watch?v=TjU1pjfxaI0" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Overload Add method for double', template: 'public double Add(double a, double b) { return _______ ; }', solution: 'a + b' },
            { id: 2, type: 'output', prompt: 'What is method overloading?', template: '', solution: 'Same method name, different parameters' },
            { id: 3, type: 'modify', prompt: 'Override virtual method', template: 'public virtual void Speak() { }', solution: 'public override void Speak() { }' },
            { id: 4, type: 'fix', prompt: 'Fix the override', template: 'public override void speak() { }', solution: 'public override void Speak() { } (capital S)' },
            { id: 5, type: 'logic', prompt: 'What keyword marks method as overridable?', template: '', solution: 'virtual' }
        ]
    },
    "Abstraction": {
        content: `<h3>Abstraction</h3><p>Abstract classes and hiding complexity.</p>`,
        videos: [{ title: "Abstraction - Code Monkey", url: "https://www.youtube.com/watch?v=qxzQGFdVvDA" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create an abstract class', template: 'public _______ class Shape { }', solution: 'abstract' },
            { id: 2, type: 'output', prompt: 'Can you create instance of abstract class?', template: '', solution: 'No' },
            { id: 3, type: 'modify', prompt: 'Add abstract method', template: 'public abstract class Shape { }', solution: 'public abstract void Draw();' },
            { id: 4, type: 'fix', prompt: 'Fix this abstract method', template: 'abstract void Draw() { }', solution: 'public abstract void Draw(); (no body)' },
            { id: 5, type: 'logic', prompt: 'Must derived classes implement abstract methods?', template: '', solution: 'Yes' }
        ]
    },
    "Interfaces": {
        content: `<h3>Interfaces</h3><p>Contracts defining behavior.</p>`,
        videos: [{ title: "Interfaces - Traversy Media", url: "https://www.youtube.com/watch?v=F5-2l-nxJJU" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Implement IDrawable interface', template: 'public class Circle : _______', solution: 'IDrawable' },
            { id: 2, type: 'output', prompt: 'Can interface have fields?', template: '', solution: 'No, only methods and properties' },
            { id: 3, type: 'modify', prompt: 'Implement multiple interfaces', template: 'public class Car : IMoveable', solution: 'public class Car : IMoveable, IDrawable' },
            { id: 4, type: 'fix', prompt: 'Fix the interface definition', template: 'interface IShape { }', solution: 'public interface IShape { }' },
            { id: 5, type: 'logic', prompt: 'Can a class implement multiple interfaces?', template: '', solution: 'Yes' }
        ]
    },
    "Exception Handling": {
        content: `<h3>Exception Handling</h3><p>Try-catch blocks and custom exceptions.</p>`,
        videos: [{ title: "Exceptions - Brackeys", url: "https://www.youtube.com/watch?v=h0ySUO0EQTY" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Wrap code in try block', template: '_______ { int[] arr = new int[5]; arr[10] = 5; }', solution: 'try' },
            { id: 2, type: 'output', prompt: 'What comes after try?', template: '', solution: 'catch block' },
            { id: 3, type: 'modify', prompt: 'Add finally block', template: 'try { } catch { }', solution: 'try { } catch { } finally { }' },
            { id: 4, type: 'fix', prompt: 'Fix this catch', template: 'catch(Exception) { }', solution: 'catch(Exception ex) { }' },
            { id: 5, type: 'logic', prompt: 'What is finally used for?', template: '', solution: 'Cleanup code that always runs' }
        ]
    },
    "Collections": {
        content: `<h3>Collections</h3><p>List, Dictionary, HashSet, Queue, Stack.</p>`,
        videos: [{ title: "Collections - Code Monkey", url: "https://www.youtube.com/watch?v=QW9pL61gp1E" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create a List<int>', template: 'List<int> numbers = new List<int>();', solution: 'Correct' },
            { id: 2, type: 'output', prompt: 'How to add item to list?', template: '', solution: 'list.Add(item);' },
            { id: 3, type: 'modify', prompt: 'Use Dictionary instead', template: 'List<string> items = new();', solution: 'Dictionary<string, int> items = new();' },
            { id: 4, type: 'fix', prompt: 'Fix the List instantiation', template: 'List<int> = new();', solution: 'List<int> numbers = new();' },
            { id: 5, type: 'logic', prompt: 'What is the difference between List and Array?', template: '', solution: 'List is dynamic, Array is fixed size' }
        ]
    },
    "Generics": {
        content: `<h3>Generics</h3><p>Type-safe collections and methods.</p>`,
        videos: [{ title: "Generics - Traversy Media", url: "https://www.youtube.com/watch?v=ZeZHxB_uNQY" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create generic class Pair<T, U>', template: 'public class Pair<T, _______> { }', solution: 'U' },
            { id: 2, type: 'output', prompt: 'What does <T> mean?', template: '', solution: 'Type parameter, generic placeholder' },
            { id: 3, type: 'modify', prompt: 'Add constraint to T', template: 'public class Container<T>', solution: 'public class Container<T> where T : class' },
            { id: 4, type: 'fix', prompt: 'Fix the generic method', template: 'public void Swap<T, T>(ref T a, ref T b)', solution: 'public void Swap<T>(ref T a, ref T b) { }' },
            { id: 5, type: 'logic', prompt: 'Why use generics?', template: '', solution: 'Type safety, code reuse, avoid boxing' }
        ]
    },
    "File Handling": {
        content: `<h3>File Handling</h3><p>Reading and writing files.</p>`,
        videos: [{ title: "File I/O - Brackeys", url: "https://www.youtube.com/watch?v=qhVV2XPcvL4" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Read entire file content', template: 'string content = File.ReadAllText("_______");', solution: '"file.txt"' },
            { id: 2, type: 'output', prompt: 'What namespace has File class?', template: '', solution: 'System.IO' },
            { id: 3, type: 'modify', prompt: 'Write multiple lines', template: 'File.WriteAllText("file.txt", "line1");', solution: 'File.WriteAllLines("file.txt", new[] {"line1", "line2"});' },
            { id: 4, type: 'fix', prompt: 'Fix file write', template: 'File.Write("file.txt", "text");', solution: 'File.WriteAllText("file.txt", "text");' },
            { id: 5, type: 'logic', prompt: 'What class helps read large files efficiently?', template: '', solution: 'StreamReader' }
        ]
    },
    "Delegates & Events": {
        content: `<h3>Delegates & Events</h3><p>Function callbacks and event-driven programming.</p>`,
        videos: [{ title: "Delegates - Code Monkey", url: "https://www.youtube.com/watch?v=jlQmeyce65Q" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define a delegate', template: 'public delegate _______ MyDelegate();', solution: 'void' },
            { id: 2, type: 'output', prompt: 'What is a delegate?', template: '', solution: 'Type-safe function pointer/callback' },
            { id: 3, type: 'modify', prompt: 'Create an event', template: 'public delegate void OnClick();', solution: 'public event OnClick Clicked;' },
            { id: 4, type: 'fix', prompt: 'Fix the delegate usage', template: 'MyDelegate del = Method', solution: 'MyDelegate del = Method; (correct if Method signature matches)' },
            { id: 5, type: 'logic', prompt: 'What keyword triggers event?', template: '', solution: 'Invoke or invoke()' }
        ]
    },
    "LINQ": {
        content: `<h3>LINQ</h3><p>Query data using LINQ.</p>`,
        videos: [{ title: "LINQ - Traversy Media", url: "https://www.youtube.com/watch?v=Vbx5VqPo8gI" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Filter numbers > 5', template: 'var filtered = numbers.Where(n => n _______ 5);', solution: '>' },
            { id: 2, type: 'output', prompt: 'What does LINQ stand for?', template: '', solution: 'Language Integrated Query' },
            { id: 3, type: 'modify', prompt: 'Select doubled values', template: 'var doubled = numbers.Select(n => n);', solution: 'var doubled = numbers.Select(n => n * 2);' },
            { id: 4, type: 'fix', prompt: 'Fix the query', template: 'var result = numbers.where(x => x > 5);', solution: 'var result = numbers.Where(x => x > 5); (capital W)' },
            { id: 5, type: 'logic', prompt: 'Is LINQ lazy or eager?', template: '', solution: 'Lazy (executes when enumerated)' }
        ]
    }
};

// C# Advanced (13 topics)
const CSHARP_ADVANCED_CONTENT = {
    ".NET Runtime & CLR": {
        content: `<h3>.NET Runtime & CLR</h3><p>Understanding managed execution.</p>`,
        videos: [{ title: ".NET Runtime - Microsoft", url: "https://www.youtube.com/watch?v=mABDtqkOh_4" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'What does JIT stand for?', template: '', solution: 'Just-In-Time' },
            { id: 2, type: 'output', prompt: 'When is IL compiled to machine code?', template: '', solution: 'At runtime by JIT compiler' },
            { id: 3, type: 'modify', prompt: 'Enable AOT compilation', template: 'Manual project setting', solution: 'Set PublishAot property in project file' },
            { id: 4, type: 'fix', prompt: 'Fix terminology', template: 'IL is machine code', solution: 'IL is intermediate language, machine code is generated by JIT' },
            { id: 5, type: 'logic', prompt: 'What is metadata?', template: '', solution: 'Type information embedded in assembly' }
        ]
    },
    "Memory Management & Garbage Collection": {
        content: `<h3>Memory Management & GC</h3><p>Managed memory and garbage collection.</p>`,
        videos: [{ title: "Memory Management - Brackeys", url: "https://www.youtube.com/watch?v=F5h7-HQXrxU" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Force garbage collection', template: 'GC._______();', solution: 'Collect' },
            { id: 2, type: 'output', prompt: 'How many generations does GC have?', template: '', solution: '3 (Gen0, Gen1, Gen2)' },
            { id: 3, type: 'modify', prompt: 'Implement IDisposable', template: 'public class Resource { }', solution: 'public class Resource : IDisposable { public void Dispose() { } }' },
            { id: 4, type: 'fix', prompt: 'Fix IDisposable pattern', template: '~Resource() { }', solution: '~Resource() { Dispose(false); }' },
            { id: 5, type: 'logic', prompt: 'What is weak reference?', template: '', solution: 'Reference that doesn\'t prevent GC' }
        ]
    },
    "Async / Await": {
        content: `<h3>Async / Await</h3><p>Asynchronous programming patterns.</p>`,
        videos: [{ title: "Async/Await - Traversy Media", url: "https://www.youtube.com/watch?v=5Vz8-JNSalA" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Mark method as async', template: 'public _______ Task FetchData() { }', solution: 'async' },
            { id: 2, type: 'output', prompt: 'What does await do?', template: '', solution: 'Pauses method until Task completes' },
            { id: 3, type: 'modify', prompt: 'Return value from async method', template: 'public async Task FetchData() { }', solution: 'public async Task<string> FetchData() { }' },
            { id: 4, type: 'fix', prompt: 'Fix the async method', template: 'public void async Method() { }', solution: 'public async Task Method() { } (async after public)' },
            { id: 5, type: 'logic', prompt: 'What is Task.WhenAll used for?', template: '', solution: 'Wait for all tasks to complete' }
        ]
    },
    "Multithreading & Parallel Programming": {
        content: `<h3>Multithreading & Parallel</h3><p>Concurrent execution.</p>`,
        videos: [{ title: "Multithreading - Code Monkey", url: "https://www.youtube.com/watch?v=kSQpEEBFH8s" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create a thread', template: 'Thread t = new Thread(_______ );', solution: 'MethodName' },
            { id: 2, type: 'output', prompt: 'How to start a thread?', template: '', solution: 't.Start();' },
            { id: 3, type: 'modify', prompt: 'Use parallel for', template: 'for(int i=0; i<10; i++)', solution: 'Parallel.For(0, 10, i => { })' },
            { id: 4, type: 'fix', prompt: 'Fix thread start', template: 'Thread t = new Thread(Method); t.Run();', solution: 't.Start();' },
            { id: 5, type: 'logic', prompt: 'What synchronizes threads?', template: '', solution: 'lock, Mutex, Monitor, etc' }
        ]
    },
    "Task Parallel Library (TPL)": {
        content: `<h3>Task Parallel Library</h3><p>Modern async patterns with Task.</p>`,
        videos: [{ title: "TPL - Brackeys", url: "https://www.youtube.com/watch?v=O2AYJMYRKrQ" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create a Task', template: 'Task task = Task.Run(() => _______);', solution: 'Console.WriteLine("Hello")' },
            { id: 2, type: 'output', prompt: 'What does Task.Run do?', template: '', solution: 'Creates and starts a task' },
            { id: 3, type: 'modify', prompt: 'Add exception handling', template: 'await Task.Run(() => {});', solution: 'try { await Task.Run(() => {}); } catch { }' },
            { id: 4, type: 'fix', prompt: 'Fix Task creation', template: 'Task t = Task.Run;', solution: 'Task t = Task.Run(() => { });' },
            { id: 5, type: 'logic', prompt: 'What is AggregateException?', template: '', solution: 'Exception from multiple tasks' }
        ]
    },
    "Reflection": {
        content: `<h3>Reflection</h3><p>Runtime type inspection.</p>`,
        videos: [{ title: "Reflection - Code Monkey", url: "https://www.youtube.com/watch?v=kVDT8qW0rSc" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Get type of object', template: 'Type t = obj.GetType();', solution: 'Correct' },
            { id: 2, type: 'output', prompt: 'How to get all methods?', template: '', solution: 'type.GetMethods()' },
            { id: 3, type: 'modify', prompt: 'Invoke method dynamically', template: 'MethodInfo m = type.GetMethod("Name");', solution: 'object result = m.Invoke(instance, null);' },
            { id: 4, type: 'fix', prompt: 'Fix reflection call', template: 'Type t = Type.GetType();', solution: 'Type t = Type.GetType("Namespace.ClassName");' },
            { id: 5, type: 'logic', prompt: 'What is Activator.CreateInstance?', template: '', solution: 'Creates instance dynamically' }
        ]
    },
    "Dependency Injection": {
        content: `<h3>Dependency Injection</h3><p>Loose coupling with DI container.</p>`,
        videos: [{ title: "DI - Traversy Media", url: "https://www.youtube.com/watch?v=ND0eRxMJBKs" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Register service as Singleton', template: 'services.AddSingleton<IService, Service>();', solution: 'Correct' },
            { id: 2, type: 'output', prompt: 'What is difference between Singleton and Transient?', template: '', solution: 'Singleton=one instance, Transient=new each time' },
            { id: 3, type: 'modify', prompt: 'Register factory function', template: 'services.AddSingleton<IService>(new Service());', solution: 'services.AddSingleton<IService>(sp => new Service());' },
            { id: 4, type: 'fix', prompt: 'Fix DI resolution', template: 'var service = provider.GetService(IService);', solution: 'var service = provider.GetRequiredService<IService>();' },
            { id: 5, type: 'logic', prompt: 'What is Scoped lifetime?', template: '', solution: 'New instance per scope (e.g., per request)' }
        ]
    },
    "Design Patterns": {
        content: `<h3>Design Patterns</h3><p>Proven solutions to problems.</p>`,
        videos: [{ title: "Design Patterns - Code Monkey", url: "https://www.youtube.com/watch?v=WDfVsDmy1ks" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Implement Singleton pattern', template: 'public sealed class Singleton { private static _______', solution: 'readonly Singleton instance = new();' },
            { id: 2, type: 'output', prompt: 'What is Factory pattern?', template: '', solution: 'Creates objects without specifying exact classes' },
            { id: 3, type: 'modify', prompt: 'Use Observer pattern', template: 'List<IObserver> observers = new();', solution: 'foreach(var o in observers) o.Update();' },
            { id: 4, type: 'fix', prompt: 'Fix Singleton access', template: 'Singleton s = Singleton.instance;', solution: 'Singleton s = Singleton.Instance;' },
            { id: 5, type: 'logic', prompt: 'What is Strategy pattern?', template: '', solution: 'Encapsulates algorithms in separate classes' }
        ]
    },
    "Performance Optimization": {
        content: `<h3>Performance Optimization</h3><p>Writing efficient C# code.</p>`,
        videos: [{ title: "Performance - Brackeys", url: "https://www.youtube.com/watch?v=vFj4qhBUW-Q" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Measure execution time', template: 'var sw = Stopwatch.StartNew(); /* code */ sw.Stop();', solution: 'Console.WriteLine(sw.ElapsedMilliseconds);' },
            { id: 2, type: 'output', prompt: 'What causes boxing?', template: '', solution: 'Converting value type to object' },
            { id: 3, type: 'modify', prompt: 'Use StringBuilder for strings', template: 'string result = "";\\nfor(...) result += item;', solution: 'var sb = new StringBuilder();\\nfor(...) sb.Append(item);\\nstring result = sb.ToString();' },
            { id: 4, type: 'fix', prompt: 'Fix performance issue', template: 'list.Where(x => x > 5).Where(x => x < 10)', solution: 'list.Where(x => x > 5 && x < 10)' },
            { id: 5, type: 'logic', prompt: 'Why avoid boxing?', template: '', solution: 'Performance overhead and memory allocation' }
        ]
    },
    "Security in C#": {
        content: `<h3>Security</h3><p>Building secure applications.</p>`,
        videos: [{ title: "Security - Microsoft", url: "https://www.youtube.com/watch?v=qT3YxZ7YDCY" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Hash a password', template: 'using (var sha = SHA256.Create()) { var hash = sha.ComputeHash(); }', solution: 'Correct pattern' },
            { id: 2, type: 'output', prompt: 'What should you never do?', template: '', solution: 'Store passwords in plaintext' },
            { id: 3, type: 'modify', prompt: 'Validate input', template: 'string input = GetInput();', solution: 'if(string.IsNullOrEmpty(input)) throw new Exception();' },
            { id: 4, type: 'fix', prompt: 'Fix SQL injection risk', template: '"SELECT * FROM users WHERE id = " + userId', solution: 'Use parameterized queries' },
            { id: 5, type: 'logic', prompt: 'What is claims-based identity?', template: '', solution: 'Identity based on set of claims' }
        ]
    },
    "Unsafe Code & Pointers": {
        content: `<h3>Unsafe Code & Pointers</h3><p>Direct memory access.</p>`,
        videos: [{ title: "Unsafe Code - Code Monkey", url: "https://www.youtube.com/watch?v=hVMWZTsJJ1g" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Mark code as unsafe', template: '_______ { int* ptr; }', solution: 'unsafe' },
            { id: 2, type: 'output', prompt: 'What is & operator?', template: '', solution: 'Address-of operator' },
            { id: 3, type: 'modify', prompt: 'Dereference a pointer', template: 'int* ptr = &value;', solution: 'int deref = *ptr;' },
            { id: 4, type: 'fix', prompt: 'Fix pointer declaration', template: 'int * ptr;', solution: 'int* ptr; (spaces inconsistent)' },
            { id: 5, type: 'logic', prompt: 'Why avoid unsafe code?', template: '', solution: 'Breaks type safety, hard to debug' }
        ]
    },
    "Interoperability (PInvoke)": {
        content: `<h3>Interoperability</h3><p>Call native code from C#.</p>`,
        videos: [{ title: "P/Invoke - Brackeys", url: "https://www.youtube.com/watch?v=L5s76NWLVTU" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Import unmanaged function', template: '[DllImport("kernel32.dll")]\\nextern static _______ GetSystemMetrics(int);', solution: 'int' },
            { id: 2, type: 'output', prompt: 'What is P/Invoke?', template: '', solution: 'Platform Invoke for native function calls' },
            { id: 3, type: 'modify', prompt: 'Marshal string parameter', template: '[DllImport("lib.dll")]\\nextern static void Method(string s);', solution: 'extern static void Method([MarshalAs(UnmanagedType.LPStr)] string s);' },
            { id: 4, type: 'fix', prompt: 'Fix DLL import', template: '[DllImport("kernel32")]', solution: '[DllImport("kernel32.dll")]' },
            { id: 5, type: 'logic', prompt: 'What is marshaling?', template: '', solution: 'Converting between managed and unmanaged types' }
        ]
    },
    ".NET Internals": {
        content: `<h3>.NET Internals</h3><p>Understanding .NET architecture.</p>`,
        videos: [{ title: ".NET Internals - Microsoft", url: "https://www.youtube.com/watch?v=D3WP2wU3xq0" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'What does IL stand for?', template: '', solution: 'Intermediate Language' },
            { id: 2, type: 'output', prompt: 'Where is IL compiled to machine code?', template: '', solution: 'By JIT compiler at runtime' },
            { id: 3, type: 'modify', prompt: 'Examine assembly', template: 'Assembly asm = Assembly.GetExecutingAssembly();', solution: 'AssemblyName name = asm.GetName();' },
            { id: 4, type: 'fix', prompt: 'Fix metadata access', template: 'Type[] types = asm.GetType();', solution: 'Type[] types = asm.GetTypes();' },
            { id: 5, type: 'logic', prompt: 'What contains IL, metadata, and resources?', template: '', solution: 'Assembly' }
        ]
    }
};

// Export all C# content
export { CSHARP_BEGINNER_CONTENT, CSHARP_INTERMEDIATE_CONTENT, CSHARP_ADVANCED_CONTENT };
