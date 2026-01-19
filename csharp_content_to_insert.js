const CSHARP_BEGINNER_CONTENT = {
    "Introduction to C# & .NET": {
        content: `<h3>Introduction to C# & .NET</h3><p>C# is a modern, object-oriented language built on the .NET Framework with automatic memory management, type-safety, and cross-platform support.</p>`,
        videos: [{ title: "C# Basics - Microsoft", url: "https://www.youtube.com/watch?v=GZ9d9x7ZZKY" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Write Console.WriteLine for welcome message', template: 'Console._______("Welcome to C#");', solution: 'WriteLine' },
            { id: 2, type: 'output', prompt: 'What does using System do?', template: '', solution: 'Imports System namespace' },
            { id: 3, type: 'modify', prompt: 'Add semicolon to end', template: 'Console.WriteLine("Hello")', solution: 'Console.WriteLine("Hello");' },
            { id: 4, type: 'fix', prompt: 'Fix the Main method', template: 'static main()', solution: 'static void Main()' },
            { id: 5, type: 'logic', prompt: 'Is C# managed or unmanaged?', template: '', solution: 'Managed (garbage collection)' }
        ]
    },
    "Program Structure": {
        content: `<h3>Program Structure</h3><p>Understanding namespaces, using statements, and the Main method.</p>`,
        videos: [{ title: "Program Structure - Brackeys", url: "https://www.youtube.com/watch?v=sHuLb-vV4l4" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create namespace MyNamespace', template: 'namespace _______', solution: 'MyNamespace' },
            { id: 2, type: 'output', prompt: 'What is the purpose of using System;?', template: '', solution: 'Imports built-in classes' },
            { id: 3, type: 'modify', prompt: 'Add string[] args parameter', template: 'static void Main()', solution: 'static void Main(string[] args)' },
            { id: 4, type: 'fix', prompt: 'Fix missing brace', template: 'namespace MyApp {', solution: 'namespace MyApp { }' },
            { id: 5, type: 'logic', prompt: 'What are namespaces for?', template: '', solution: 'Organizing code into logical groups' }
        ]
    },
    "Data Types": {
        content: `<h3>C# Data Types</h3><p>Primitive value types and reference types in C#.</p>`,
        videos: [{ title: "Data Types - Bro Code", url: "https://www.youtube.com/watch?v=xIqNarUAdF8" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare integer variable', template: 'int age = _______;', solution: '25' },
            { id: 2, type: 'output', prompt: 'Default value of int?', template: '', solution: '0' },
            { id: 3, type: 'modify', prompt: 'Use double instead of float', template: 'float pi = 3.14f;', solution: 'double pi = 3.14;' },
            { id: 4, type: 'fix', prompt: 'Fix string value', template: 'string name = Alice;', solution: 'string name = "Alice";' },
            { id: 5, type: 'logic', prompt: 'Why is string a reference type?', template: '', solution: 'Strings are objects on the heap' }
        ]
    },
    "Variables & Constants": {
        content: `<h3>Variables & Constants</h3><p>Declaration, initialization, and scope of variables and constants.</p>`,
        videos: [{ title: "Variables - Traversy Media", url: "https://www.youtube.com/watch?v=wxznTygnRfQ" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare constant MAX_SIZE = 100', template: 'const int MAX_SIZE = _______;', solution: '100' },
            { id: 2, type: 'output', prompt: 'Can you modify a const after declaration?', template: '', solution: 'No' },
            { id: 3, type: 'modify', prompt: 'Make variable readonly', template: 'int version = 1;', solution: 'readonly int version = 1;' },
            { id: 4, type: 'fix', prompt: 'Fix const declaration', template: 'const int x;', solution: 'const int x = 10;' },
            { id: 5, type: 'logic', prompt: 'Difference between const and readonly?', template: '', solution: 'const is compile-time, readonly is runtime' }
        ]
    },
    "Operators": {
        content: `<h3>Operators</h3><p>Arithmetic, comparison, and logical operators in C#.</p>`,
        videos: [{ title: "Operators - Bro Code", url: "https://www.youtube.com/watch?v=K-bYvzGH_2E" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Calculate 7 + 5 * 2', template: 'int result = _______;', solution: '17' },
            { id: 2, type: 'output', prompt: 'What is 15 % 4?', template: '', solution: '3' },
            { id: 3, type: 'modify', prompt: 'Use += operator', template: 'x = x + 5;', solution: 'x += 5;' },
            { id: 4, type: 'fix', prompt: 'Fix equality check', template: 'if (x = 5)', solution: 'if (x == 5)' },
            { id: 5, type: 'logic', prompt: 'What does % operator do?', template: '', solution: 'Returns remainder of division' }
        ]
    },
    "Control Statements": {
        content: `<h3>Control Flow Statements</h3><p>If-else and switch statements for conditional execution.</p>`,
        videos: [{ title: "Control Flow - Code Monkey", url: "https://www.youtube.com/watch?v=5LrDIUGkQUs" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Check if num > 10', template: 'if (num _______ 10) {', solution: '>' },
            { id: 2, type: 'output', prompt: 'Output of: if (5 > 3) Console.WriteLine("Yes");?', template: '', solution: 'Yes' },
            { id: 3, type: 'modify', prompt: 'Add else if for teens', template: 'if (age >= 18) { } else { }', solution: 'else if (age >= 13)' },
            { id: 4, type: 'fix', prompt: 'Is this valid?', template: 'if (x > 5) Console.WriteLine("Yes");', solution: 'Yes, braces optional for single statement' },
            { id: 5, type: 'logic', prompt: 'What operator checks equality?', template: '', solution: '==' }
        ]
    },
    "Loops": {
        content: `<h3>Loops</h3><p>For, while, and foreach loops for repetition.</p>`,
        videos: [{ title: "Loops - Bro Code", url: "https://www.youtube.com/watch?v=R7lSFRPFBC0" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'For loop from 0 to 9', template: 'for (int i = 0; i _______ 10; i++)', solution: '<' },
            { id: 2, type: 'output', prompt: 'How many times: for (i=0; i<3; i++)?', template: '', solution: '3 times' },
            { id: 3, type: 'modify', prompt: 'Count down from 5 to 0', template: 'for (int i = 0; i < 5; i++)', solution: 'for (int i = 5; i >= 0; i--)' },
            { id: 4, type: 'fix', prompt: 'Fix infinite loop', template: 'for (int i = 0; i < 10;)', solution: 'for (int i = 0; i < 10; i++)' },
            { id: 5, type: 'logic', prompt: 'When does while loop stop?', template: '', solution: 'When condition becomes false' }
        ]
    },
    "Methods & Functions": {
        content: `<h3>Methods</h3><p>Creating and calling methods with parameters and return values.</p>`,
        videos: [{ title: "Methods - Traversy Media", url: "https://www.youtube.com/watch?v=2ZIw-3F3q5w" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Method that returns 10', template: 'public int _______()', solution: 'GetNumber' },
            { id: 2, type: 'output', prompt: 'Return value of Multiply(4, 5)?', template: '', solution: '20' },
            { id: 3, type: 'modify', prompt: 'Add name parameter', template: 'public void Greet() { }', solution: 'public void Greet(string name) { }' },
            { id: 4, type: 'fix', prompt: 'Fix method syntax', template: 'public void PrintNum int x { }', solution: 'public void PrintNum(int x) { }' },
            { id: 5, type: 'logic', prompt: 'What keyword stops and returns?', template: '', solution: 'return' }
        ]
    },
    "Arrays": {
        content: `<h3>Arrays</h3><p>Single and multidimensional arrays for storing collections of data.</p>`,
        videos: [{ title: "Arrays - Code Monkey", url: "https://www.youtube.com/watch?v=V-TZPe1Wf0o" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare array of 5 integers', template: 'int[] arr = new int[_______];', solution: '5' },
            { id: 2, type: 'output', prompt: 'Index of first element?', template: '', solution: '0' },
            { id: 3, type: 'modify', prompt: 'Initialize with values 1,2,3', template: 'int[] arr = new int[3];', solution: 'int[] arr = { 1, 2, 3 };' },
            { id: 4, type: 'fix', prompt: 'Fix array access', template: 'int x = arr[3];', solution: 'int x = arr[2]; (out of bounds)' },
            { id: 5, type: 'logic', prompt: 'Get array length?', template: '', solution: 'array.Length' }
        ]
    },
    "Strings": {
        content: `<h3>Strings</h3><p>String manipulation, concatenation, and interpolation methods.</p>`,
        videos: [{ title: "Strings - Bro Code", url: "https://www.youtube.com/watch?v=gfkTfcpWqAY" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Concatenate "Hello " + "World"', template: 'string result = "Hello " _______ "World";', solution: '+' },
            { id: 2, type: 'output', prompt: 'Length of "Hello"?', template: '', solution: '5' },
            { id: 3, type: 'modify', prompt: 'Use interpolation', template: 'string s = "Name: " + name;', solution: 'string s = $"Name: {name}";' },
            { id: 4, type: 'fix', prompt: 'Fix string', template: 'string text = Hello World;', solution: 'string text = "Hello World";' },
            { id: 5, type: 'logic', prompt: 'Get character at index?', template: '', solution: 'string[index]' }
        ]
    }
};

const csharpBeginnerTitles = [
    "Introduction to C# & .NET",
    "Program Structure",
    "Data Types",
    "Variables & Constants",
    "Operators",
    "Control Statements",
    "Loops",
    "Methods & Functions",
    "Arrays",
    "Strings"
];

const CSHARP_INTERMEDIATE_CONTENT = {
    "Object-Oriented Programming (OOP)": {
        content: `<h3>OOP</h3><p>Core principles of object-oriented programming in C#.</p>`,
        videos: [{ title: "OOP - Traversy", url: "https://www.youtube.com/watch?v=SLnwkKKnZWU" }],
        questions: [
            { id: 1, type: 'practice', prompt: '4 pillars of OOP', template: '', solution: 'Encapsulation, Inheritance, Polymorphism, Abstraction' },
            { id: 2, type: 'output', prompt: 'Is C# OOP?', template: '', solution: 'Yes' },
            { id: 3, type: 'modify', prompt: 'Create class Animal', template: 'public class _______', solution: 'Animal' },
            { id: 4, type: 'fix', prompt: 'Fix class syntax', template: 'class Dog {', solution: 'Add closing }' },
            { id: 5, type: 'logic', prompt: 'What is an object?', template: '', solution: 'Instance of a class' }
        ]
    },
    "Classes & Objects": {
        content: `<h3>Classes & Objects</h3><p>Creating classes and instantiating objects in C#.</p>`,
        videos: [{ title: "Classes - Code Monkey", url: "https://www.youtube.com/watch?v=sLyWnV87YmU" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create Person object', template: 'Person p = new _______();', solution: 'Person' },
            { id: 2, type: 'output', prompt: 'How to create instance?', template: '', solution: 'Use new keyword' },
            { id: 3, type: 'modify', prompt: 'Add Name property', template: 'class Person { }', solution: 'public string Name { get; set; }' },
            { id: 4, type: 'fix', prompt: 'Fix instantiation', template: 'Person p = Person();', solution: 'Person p = new Person();' },
            { id: 5, type: 'logic', prompt: 'Class vs object?', template: '', solution: 'Class is template, object is instance' }
        ]
    },
    "Constructors & Destructors": {
        content: `<h3>Constructors & Destructors</h3><p>Initialization and cleanup methods.</p>`,
        videos: [{ title: "Constructors - Brackeys", url: "https://www.youtube.com/watch?v=LMRMb91z0CY" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Constructor for Person', template: 'public _______() { }', solution: 'Person' },
            { id: 2, type: 'output', prompt: 'When constructor called?', template: '', solution: 'When object created' },
            { id: 3, type: 'modify', prompt: 'Add string name parameter', template: 'public Person() { }', solution: 'public Person(string name) { }' },
            { id: 4, type: 'fix', prompt: 'Fix name', template: 'public person() { }', solution: 'public Person() { }' },
            { id: 5, type: 'logic', prompt: 'Multiple constructors allowed?', template: '', solution: 'Yes, overloading' }
        ]
    },
    "Inheritance": {
        content: `<h3>Inheritance</h3><p>Code reuse through class hierarchy.</p>`,
        videos: [{ title: "Inheritance - Code Monkey", url: "https://www.youtube.com/watch?v=hCnLp8SzpWs" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Dog inherits Animal', template: 'public class Dog : _______', solution: 'Animal' },
            { id: 2, type: 'output', prompt: 'Parent class called?', template: '', solution: 'Base class' },
            { id: 3, type: 'modify', prompt: 'Override method', template: 'class Dog : Animal { }', solution: 'public override void Speak()' },
            { id: 4, type: 'fix', prompt: 'Fix inheritance', template: 'class Dog : Animal, Cat { }', solution: 'C# no multi-class inheritance' },
            { id: 5, type: 'logic', prompt: 'Dog inherits Animal methods?', template: '', solution: 'Yes' }
        ]
    },
    "Polymorphism": {
        content: `<h3>Polymorphism</h3><p>Method overloading and overriding.</p>`,
        videos: [{ title: "Polymorphism - Brackeys", url: "https://www.youtube.com/watch?v=TjU1pjfxaI0" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Add(double a, double b)', template: 'return _______;', solution: 'a + b' },
            { id: 2, type: 'output', prompt: 'Overloading definition?', template: '', solution: 'Same name, different params' },
            { id: 3, type: 'modify', prompt: 'Override virtual', template: 'virtual void Speak()', solution: 'override void Speak()' },
            { id: 4, type: 'fix', prompt: 'Fix override', template: 'override void speak()', solution: 'override void Speak()' },
            { id: 5, type: 'logic', prompt: 'Mark overridable?', template: '', solution: 'virtual keyword' }
        ]
    },
    "Abstraction": {
        content: `<h3>Abstraction</h3><p>Abstract classes and hiding complexity.</p>`,
        videos: [{ title: "Abstraction - Code Monkey", url: "https://www.youtube.com/watch?v=qxzQGFdVvDA" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Abstract class Shape', template: 'public _______ class Shape', solution: 'abstract' },
            { id: 2, type: 'output', prompt: 'Create abstract instance?', template: '', solution: 'No' },
            { id: 3, type: 'modify', prompt: 'Add abstract method', template: 'abstract class Shape { }', solution: 'public abstract void Draw();' },
            { id: 4, type: 'fix', prompt: 'Fix abstract method', template: 'abstract void Draw() { }', solution: 'No body allowed' },
            { id: 5, type: 'logic', prompt: 'Derived classes must implement?', template: '', solution: 'Yes' }
        ]
    },
    "Interfaces": {
        content: `<h3>Interfaces</h3><p>Contracts defining behavior without implementation.</p>`,
        videos: [{ title: "Interfaces - Traversy", url: "https://www.youtube.com/watch?v=F5-2l-nxJJU" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Implement IDrawable', template: 'class Circle : _______', solution: 'IDrawable' },
            { id: 2, type: 'output', prompt: 'Interface fields allowed?', template: '', solution: 'No' },
            { id: 3, type: 'modify', prompt: 'Multiple interfaces', template: 'class Car : IMoveable', solution: ', IDrawable' },
            { id: 4, type: 'fix', prompt: 'Fix interface', template: 'interface IShape { }', solution: 'public interface IShape' },
            { id: 5, type: 'logic', prompt: 'Class implement multiple?', template: '', solution: 'Yes' }
        ]
    },
    "Exception Handling": {
        content: `<h3>Exception Handling</h3><p>Try-catch blocks for error management.</p>`,
        videos: [{ title: "Exceptions - Brackeys", url: "https://www.youtube.com/watch?v=h0ySUO0EQTY" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Wrap in try block', template: '_______ { arr[10] = 5; }', solution: 'try' },
            { id: 2, type: 'output', prompt: 'After try comes?', template: '', solution: 'catch' },
            { id: 3, type: 'modify', prompt: 'Add finally', template: 'try { } catch { }', solution: 'finally { }' },
            { id: 4, type: 'fix', prompt: 'Fix catch', template: 'catch(Exception)', solution: 'catch(Exception ex)' },
            { id: 5, type: 'logic', prompt: 'Finally purpose?', template: '', solution: 'Cleanup code' }
        ]
    },
    "Collections": {
        content: `<h3>Collections</h3><p>List, Dictionary, HashSet and other collection types.</p>`,
        videos: [{ title: "Collections - Code Monkey", url: "https://www.youtube.com/watch?v=QW9pL61gp1E" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create List<int>', template: 'List<int> _______ = new();', solution: 'numbers' },
            { id: 2, type: 'output', prompt: 'Add item to list?', template: '', solution: 'list.Add(item)' },
            { id: 3, type: 'modify', prompt: 'Use Dictionary', template: 'List<string> items', solution: 'Dictionary<string, int>' },
            { id: 4, type: 'fix', prompt: 'Fix List', template: 'List<int> = new();', solution: 'List<int> numbers = new();' },
            { id: 5, type: 'logic', prompt: 'List vs Array?', template: '', solution: 'List dynamic, Array fixed' }
        ]
    },
    "Generics": {
        content: `<h3>Generics</h3><p>Type-safe collections and methods with generic parameters.</p>`,
        videos: [{ title: "Generics - Traversy", url: "https://www.youtube.com/watch?v=ZeZHxB_uNQY" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Pair<T, U>', template: 'class Pair<T, _______>', solution: 'U' },
            { id: 2, type: 'output', prompt: '<T> means?', template: '', solution: 'Type parameter' },
            { id: 3, type: 'modify', prompt: 'Add constraint', template: 'Container<T>', solution: 'where T : class' },
            { id: 4, type: 'fix', prompt: 'Fix generics', template: 'Swap<T, T>(T a, T b)', solution: 'Swap<T>(T a, T b)' },
            { id: 5, type: 'logic', prompt: 'Why generics?', template: '', solution: 'Type safety, reuse' }
        ]
    },
    "File Handling": {
        content: `<h3>File Handling</h3><p>Reading and writing files using System.IO.</p>`,
        videos: [{ title: "File I/O - Brackeys", url: "https://www.youtube.com/watch?v=qhVV2XPcvL4" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Read all text', template: 'File.ReadAllText("_______")', solution: '"file.txt"' },
            { id: 2, type: 'output', prompt: 'File class namespace?', template: '', solution: 'System.IO' },
            { id: 3, type: 'modify', prompt: 'Write multiple lines', template: 'WriteAllText', solution: 'WriteAllLines' },
            { id: 4, type: 'fix', prompt: 'Fix write', template: 'File.Write()', solution: 'WriteAllText()' },
            { id: 5, type: 'logic', prompt: 'Read large files?', template: '', solution: 'StreamReader' }
        ]
    },
    "Delegates & Events": {
        content: `<h3>Delegates & Events</h3><p>Function callbacks and event-driven programming patterns.</p>`,
        videos: [{ title: "Delegates - Code Monkey", url: "https://www.youtube.com/watch?v=jlQmeyce65Q" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Delegate definition', template: 'delegate _______ MyDel()', solution: 'void' },
            { id: 2, type: 'output', prompt: 'Delegate is?', template: '', solution: 'Type-safe callback' },
            { id: 3, type: 'modify', prompt: 'Create event', template: 'delegate void OnClick()', solution: 'event OnClick Clicked' },
            { id: 4, type: 'fix', prompt: 'Fix delegate', template: 'MyDelegate del = Method', solution: 'Assign if signature matches' },
            { id: 5, type: 'logic', prompt: 'Trigger event?', template: '', solution: 'Invoke()' }
        ]
    },
    "LINQ": {
        content: `<h3>LINQ</h3><p>Query data using Language Integrated Query syntax.</p>`,
        videos: [{ title: "LINQ - Traversy", url: "https://www.youtube.com/watch?v=Vbx5VqPo8gI" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Filter n > 5', template: '.Where(n => n _______ 5)', solution: '>' },
            { id: 2, type: 'output', prompt: 'LINQ stands for?', template: '', solution: 'Language Integrated Query' },
            { id: 3, type: 'modify', prompt: 'Double values', template: '.Select(n => n)', solution: '.Select(n => n * 2)' },
            { id: 4, type: 'fix', prompt: 'Fix query', template: '.where(x => x > 5)', solution: '.Where(x => x > 5)' },
            { id: 5, type: 'logic', prompt: 'LINQ lazy or eager?', template: '', solution: 'Lazy' }
        ]
    }
};

const csharpIntermediateTitles = [
    "Object-Oriented Programming (OOP)",
    "Classes & Objects",
    "Constructors & Destructors",
    "Inheritance",
    "Polymorphism",
    "Abstraction",
    "Interfaces",
    "Exception Handling",
    "Collections",
    "Generics",
    "File Handling",
    "Delegates & Events",
    "LINQ"
];

const CSHARP_ADVANCED_CONTENT = {
    ".NET Runtime & CLR": {
        content: `<h3>.NET Runtime & CLR</h3><p>Understanding managed execution and runtime compilation.</p>`,
        videos: [{ title: ".NET Runtime - Microsoft", url: "https://www.youtube.com/watch?v=mABDtqkOh_4" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'JIT stands for?', template: '', solution: 'Just-In-Time' },
            { id: 2, type: 'output', prompt: 'When IL compiled?', template: '', solution: 'At runtime' },
            { id: 3, type: 'modify', prompt: 'AOT compilation', template: '', solution: 'Ahead-Of-Time pre-compilation' },
            { id: 4, type: 'fix', prompt: 'Fix: IL is machine code', template: '', solution: 'IL is intermediate language' },
            { id: 5, type: 'logic', prompt: 'What is metadata?', template: '', solution: 'Type information in assembly' }
        ]
    },
    "Memory Management & Garbage Collection": {
        content: `<h3>Memory Management & GC</h3><p>Managed memory, generational garbage collection, and IDisposable.</p>`,
        videos: [{ title: "Memory - Brackeys", url: "https://www.youtube.com/watch?v=F5h7-HQXrxU" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Force GC', template: 'GC._______();', solution: 'Collect' },
            { id: 2, type: 'output', prompt: 'GC generations?', template: '', solution: '3 (Gen0, Gen1, Gen2)' },
            { id: 3, type: 'modify', prompt: 'Implement IDisposable', template: 'class Resource { }', solution: ': IDisposable { }' },
            { id: 4, type: 'fix', prompt: 'Fix finalizer', template: '~Resource() { }', solution: 'Add Dispose(false)' },
            { id: 5, type: 'logic', prompt: 'Weak reference?', template: '', solution: 'Won\'t prevent GC' }
        ]
    },
    "Async / Await": {
        content: `<h3>Async / Await</h3><p>Asynchronous programming with async/await keywords and Task.</p>`,
        videos: [{ title: "Async/Await - Traversy", url: "https://www.youtube.com/watch?v=5Vz8-JNSalA" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Mark method async', template: 'public _______ Task Method()', solution: 'async' },
            { id: 2, type: 'output', prompt: 'Await does?', template: '', solution: 'Pauses until Task completes' },
            { id: 3, type: 'modify', prompt: 'Return value', template: 'async Task Method()', solution: 'async Task<string> Method()' },
            { id: 4, type: 'fix', prompt: 'Fix async', template: 'void async Method()', solution: 'async Task Method()' },
            { id: 5, type: 'logic', prompt: 'Task.WhenAll?', template: '', solution: 'Wait all tasks complete' }
        ]
    },
    "Multithreading & Parallel Programming": {
        content: `<h3>Multithreading & Parallel</h3><p>Concurrent execution with threads and parallel programming.</p>`,
        videos: [{ title: "Multithreading - Code Monkey", url: "https://www.youtube.com/watch?v=kSQpEEBFH8s" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create thread', template: 'Thread t = new(_______)', solution: 'MethodName' },
            { id: 2, type: 'output', prompt: 'Start thread?', template: '', solution: 't.Start()' },
            { id: 3, type: 'modify', prompt: 'Parallel for', template: 'for(int i=0; i<10; i++)', solution: 'Parallel.For(0, 10, i => {})' },
            { id: 4, type: 'fix', prompt: 'Fix start', template: 't.Run();', solution: 't.Start()' },
            { id: 5, type: 'logic', prompt: 'Synchronize threads?', template: '', solution: 'lock, Mutex, Monitor' }
        ]
    },
    "Task Parallel Library (TPL)": {
        content: `<h3>Task Parallel Library</h3><p>Modern async patterns with Task and Parallel classes.</p>`,
        videos: [{ title: "TPL - Brackeys", url: "https://www.youtube.com/watch?v=O2AYJMYRKrQ" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create Task', template: 'Task.Run(() => _______)', solution: 'Console.WriteLine()' },
            { id: 2, type: 'output', prompt: 'Task.Run does?', template: '', solution: 'Creates and starts task' },
            { id: 3, type: 'modify', prompt: 'Handle exceptions', template: 'await Task.Run()', solution: 'try { } catch { }' },
            { id: 4, type: 'fix', prompt: 'Fix Task', template: 'Task t = Task.Run;', solution: 'Task.Run(() => {})' },
            { id: 5, type: 'logic', prompt: 'AggregateException?', template: '', solution: 'Multiple task exceptions' }
        ]
    },
    "Reflection": {
        content: `<h3>Reflection</h3><p>Runtime type inspection and dynamic invocation.</p>`,
        videos: [{ title: "Reflection - Code Monkey", url: "https://www.youtube.com/watch?v=kVDT8qW0rSc" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Get type', template: 'Type t = obj._______();', solution: 'GetType' },
            { id: 2, type: 'output', prompt: 'Get all methods?', template: '', solution: 'type.GetMethods()' },
            { id: 3, type: 'modify', prompt: 'Invoke method', template: 'GetMethod("Name")', solution: 'm.Invoke(instance, null)' },
            { id: 4, type: 'fix', prompt: 'Fix GetType', template: 'Type.GetType()', solution: 'Type.GetType("FullName")' },
            { id: 5, type: 'logic', prompt: 'CreateInstance?', template: '', solution: 'Activator.CreateInstance' }
        ]
    },
    "Dependency Injection": {
        content: `<h3>Dependency Injection</h3><p>Loose coupling with DI container and service registration.</p>`,
        videos: [{ title: "DI - Traversy", url: "https://www.youtube.com/watch?v=ND0eRxMJBKs" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Register Singleton', template: 'services.AddSingleton<I_______>', solution: 'Service, Service' },
            { id: 2, type: 'output', prompt: 'Singleton vs Transient?', template: '', solution: 'One vs new each time' },
            { id: 3, type: 'modify', prompt: 'Factory function', template: 'AddSingleton(new Service())', solution: 'AddSingleton(sp => new Service())' },
            { id: 4, type: 'fix', prompt: 'Fix GetService', template: 'GetService(IService)', solution: 'GetRequiredService<IService>()' },
            { id: 5, type: 'logic', prompt: 'Scoped lifetime?', template: '', solution: 'Per-request instance' }
        ]
    },
    "Design Patterns": {
        content: `<h3>Design Patterns</h3><p>Proven solutions: Singleton, Factory, Observer, Strategy and more.</p>`,
        videos: [{ title: "Design Patterns - Code Monkey", url: "https://www.youtube.com/watch?v=WDfVsDmy1ks" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Singleton pattern', template: 'sealed class Singleton { static _______', solution: 'Instance' },
            { id: 2, type: 'output', prompt: 'Factory pattern?', template: '', solution: 'Creates objects generically' },
            { id: 3, type: 'modify', prompt: 'Observer pattern', template: 'List<IObserver>', solution: 'foreach o.Update()' },
            { id: 4, type: 'fix', prompt: 'Fix Singleton', template: 'instance', solution: 'Instance (property)' },
            { id: 5, type: 'logic', prompt: 'Strategy pattern?', template: '', solution: 'Encapsulate algorithms' }
        ]
    },
    "Performance Optimization": {
        content: `<h3>Performance Optimization</h3><p>Writing efficient code: avoid boxing, use StringBuilder, etc.</p>`,
        videos: [{ title: "Performance - Brackeys", url: "https://www.youtube.com/watch?v=vFj4qhBUW-Q" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Measure time', template: 'Stopwatch.StartNew()', solution: 'sw.Stop(); sw.ElapsedMilliseconds' },
            { id: 2, type: 'output', prompt: 'Boxing?', template: '', solution: 'Value to object conversion' },
            { id: 3, type: 'modify', prompt: 'Use StringBuilder', template: 'string result = ""; result += item;', solution: 'var sb = new StringBuilder(); sb.Append()' },
            { id: 4, type: 'fix', prompt: 'Fix LINQ', template: '.Where().Where()', solution: '.Where(x => condition1 && condition2)' },
            { id: 5, type: 'logic', prompt: 'Why avoid boxing?', template: '', solution: 'Performance overhead' }
        ]
    },
    "Security in C#": {
        content: `<h3>Security</h3><p>Secure applications: hashing, validation, SQL injection prevention.</p>`,
        videos: [{ title: "Security - Microsoft", url: "https://www.youtube.com/watch?v=qT3YxZ7YDCY" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Hash password', template: 'SHA256.Create().ComputeHash()', solution: 'Correct pattern' },
            { id: 2, type: 'output', prompt: 'Never store?', template: '', solution: 'Plaintext passwords' },
            { id: 3, type: 'modify', prompt: 'Validate input', template: '', solution: 'Check null, empty, type' },
            { id: 4, type: 'fix', prompt: 'SQL injection', template: '"WHERE id = " + userId', solution: 'Parameterized queries' },
            { id: 5, type: 'logic', prompt: 'Claims-based identity?', template: '', solution: 'Claims set for identity' }
        ]
    },
    "Unsafe Code & Pointers": {
        content: `<h3>Unsafe Code & Pointers</h3><p>Direct memory access with pointers and unsafe blocks.</p>`,
        videos: [{ title: "Unsafe Code - Code Monkey", url: "https://www.youtube.com/watch?v=hVMWZTsJJ1g" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Mark unsafe', template: '_______ { int* ptr; }', solution: 'unsafe' },
            { id: 2, type: 'output', prompt: '& operator?', template: '', solution: 'Address-of' },
            { id: 3, type: 'modify', prompt: 'Dereference', template: 'int* ptr = &value;', solution: 'int x = *ptr;' },
            { id: 4, type: 'fix', prompt: 'Fix pointer', template: 'int * ptr;', solution: 'int* ptr;' },
            { id: 5, type: 'logic', prompt: 'Why avoid?', template: '', solution: 'Breaks type safety' }
        ]
    },
    "Interoperability (PInvoke)": {
        content: `<h3>Interoperability</h3><p>Call native code using P/Invoke and marshaling.</p>`,
        videos: [{ title: "P/Invoke - Brackeys", url: "https://www.youtube.com/watch?v=L5s76NWLVTU" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Import native function', template: '[DllImport("kernel32.dll")] extern static _______ GetMetrics(int);', solution: 'int' },
            { id: 2, type: 'output', prompt: 'P/Invoke?', template: '', solution: 'Platform Invoke for native calls' },
            { id: 3, type: 'modify', prompt: 'Marshal string', template: 'string s', solution: '[MarshalAs(UnmanagedType.LPStr)] string s' },
            { id: 4, type: 'fix', prompt: 'Fix DLL', template: '[DllImport("kernel32")]', solution: '[DllImport("kernel32.dll")]' },
            { id: 5, type: 'logic', prompt: 'Marshaling?', template: '', solution: 'Convert managed to unmanaged' }
        ]
    },
    ".NET Internals": {
        content: `<h3>.NET Internals</h3><p>Understanding .NET architecture, IL, and assemblies.</p>`,
        videos: [{ title: ".NET Internals - Microsoft", url: "https://www.youtube.com/watch?v=D3WP2wU3xq0" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'IL stands for?', template: '', solution: 'Intermediate Language' },
            { id: 2, type: 'output', prompt: 'IL compiled by?', template: '', solution: 'JIT compiler at runtime' },
            { id: 3, type: 'modify', prompt: 'Examine assembly', template: 'Assembly.GetExecutingAssembly()', solution: '.GetName()' },
            { id: 4, type: 'fix', prompt: 'Fix GetTypes', template: 'GetType()', solution: 'GetTypes()' },
            { id: 5, type: 'logic', prompt: 'Contains IL & metadata?', template: '', solution: 'Assembly' }
        ]
    }
};

const csharpAdvancedTitles = [
    ".NET Runtime & CLR",
    "Memory Management & Garbage Collection",
    "Async / Await",
    "Multithreading & Parallel Programming",
    "Task Parallel Library (TPL)",
    "Reflection",
    "Dependency Injection",
    "Design Patterns",
    "Performance Optimization",
    "Security in C#",
    "Unsafe Code & Pointers",
    "Interoperability (PInvoke)",
    ".NET Internals"
];
