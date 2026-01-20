// Kotlin Curriculum Content - 40 Topics Total

const KOTLIN_BEGINNER_CONTENT = {
    "Introduction to Kotlin": {
        content: `<h3>Introduction to Kotlin</h3><p>Kotlin is a modern, statically-typed programming language that runs on the JVM and is fully interoperable with Java. Created by JetBrains (makers of IntelliJ IDEA) in 2011, it's officially supported by Google for Android development.</p><h4>Key Features:</h4><ul><li>Concise and expressive syntax</li><li>Full Java interoperability</li><li>Null safety built-in</li><li>Functional and OOP paradigms</li><li>Extension functions</li></ul><h4>Example:</h4><pre><code>fun main() {
    println("Hello, Kotlin!")
    val message = "Kotlin is awesome"
    println(message)
}</code></pre>`,
        videos: [
            { title: "Kotlin in 100 Seconds - Fireship", url: "https://www.youtube.com/watch?v=xT8oP0oj-yQ" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Complete the print statement', template: 'println("Hello ___")', solution: 'println("Hello Kotlin")' },
            { id: 2, type: 'output', prompt: 'Who created Kotlin?', template: '', solution: 'JetBrains - makers of IntelliJ IDEA' },
            { id: 3, type: 'modify', prompt: 'Add a comment', template: 'println("Hi")', solution: '// Greeting\nprintln("Hi")' },
            { id: 4, type: 'fix', prompt: 'Fix the syntax error', template: 'print("Hello")', solution: 'println("Hello")' },
            { id: 5, type: 'logic', prompt: 'Why is Kotlin good for Android?', template: '', solution: 'Official support, null safety, concise syntax, interoperability with Java' }
        ]
    },
    "Kotlin Installation & Setup": {
        content: `<h3>Kotlin Installation & Setup</h3><p>Installing Kotlin and setting up your development environment for JVM, Android, or multiplatform projects.</p><h4>Installation Options:</h4><ul><li>IntelliJ IDEA (built-in Kotlin support)</li><li>Kotlin command-line compiler</li><li>Android Studio (official Android development)</li><li>Gradle/Maven integration</li></ul><h4>Example - Check Installation:</h4><pre><code>kotlinc -version
// Kotlin compiler 1.9.x

kotlinc Hello.kt -include-runtime -d Hello.jar
java -jar Hello.jar</code></pre>`,
        videos: [
            { title: "Kotlin Setup Guide - Traversy Media", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Command to check Kotlin version', template: 'kotlinc ______', solution: 'kotlinc -version' },
            { id: 2, type: 'output', prompt: 'What is the official Android IDE?', template: '', solution: 'Android Studio' },
            { id: 3, type: 'modify', prompt: 'Add .kt extension', template: 'main', solution: 'main.kt' },
            { id: 4, type: 'fix', prompt: 'Correct the compile command', template: 'kotlin compile main.kt', solution: 'kotlinc main.kt -include-runtime -d main.jar' },
            { id: 5, type: 'logic', prompt: 'Why use IntelliJ IDEA for Kotlin?', template: '', solution: 'Full IDE support, built-in Kotlin compiler, excellent code inspections' }
        ]
    },
    "Kotlin Program Structure": {
        content: `<h3>Kotlin Program Structure</h3><p>Understanding the basic structure of Kotlin programs, including functions, packages, and imports.</p><h4>Structure Elements:</h4><ul><li>Packages organize code</li><li>Functions are top-level (no classes required)</li><li>main() is the entry point</li><li>Single-expression functions</li><li>No semicolons needed</li></ul><h4>Example:</h4><pre><code>package com.example

import kotlin.math.sqrt

fun main() {
    val result = greet("Kotlin")
    println(result)
}

fun greet(name: String) = "Hello, $name!"

fun add(a: Int, b: Int): Int {
    return a + b
}</code></pre>`,
        videos: [
            { title: "Kotlin Basics - Programming with Mosh", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define a top-level function', template: '___ greet() { }', solution: 'fun greet() { }' },
            { id: 2, type: 'output', prompt: 'Where must main() be defined?', template: '', solution: 'At the top level of a file or in an object' },
            { id: 3, type: 'modify', prompt: 'Create single-expression function', template: 'fun double(x: Int): Int {\n  return x * 2\n}', solution: 'fun double(x: Int) = x * 2' },
            { id: 4, type: 'fix', prompt: 'Fix the package declaration', template: 'package package com.app', solution: 'package com.app' },
            { id: 5, type: 'logic', prompt: 'Why no class needed for main?', template: '', solution: 'Kotlin supports top-level functions, no boilerplate like Java' }
        ]
    },
    "Variables (val, var)": {
        content: `<h3>Variables (val, var)</h3><p>Kotlin uses val for immutable variables and var for mutable variables, promoting safer code.</p><h4>Key Concepts:</h4><ul><li>val - immutable (read-only, preferred)</li><li>var - mutable (can be reassigned)</li><li>Type inference or explicit typing</li><li>Late initialization with lateinit</li></ul><h4>Example:</h4><pre><code>val name = "Kotlin"     // Immutable
var count = 0           // Mutable
count = 5  // OK
// name = "Java"  // Error: Val cannot be reassigned

val age: Int = 25       // Explicit type
var score: Double = 95.5

// Late initialization
lateinit var config: String
config = "initialized"</code></pre>`,
        videos: [
            { title: "Kotlin Variables - Edureka", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create immutable variable', template: '___ name = "Alice"', solution: 'val name = "Alice"' },
            { id: 2, type: 'output', prompt: 'Can val variables be reassigned?', template: '', solution: 'No - val is immutable' },
            { id: 3, type: 'modify', prompt: 'Change to mutable', template: 'val count = 10', solution: 'var count = 10' },
            { id: 4, type: 'fix', prompt: 'Fix the variable type', template: 'var x: String = 42', solution: 'var x: Int = 42' },
            { id: 5, type: 'logic', prompt: 'When to use val vs var?', template: '', solution: 'Prefer val for immutability and safety; use var only when reassignment is needed' }
        ]
    },
    "Data Types": {
        content: `<h3>Kotlin Data Types</h3><p>Kotlin has a comprehensive set of data types including numbers, strings, booleans, and characters.</p><h4>Common Types:</h4><ul><li>Numbers: Byte, Short, Int, Long, Float, Double</li><li>Characters: Char</li><li>Booleans: Boolean</li><li>Strings: String</li><li>Arrays: IntArray, Array<T></li></ul><h4>Example:</h4><pre><code>val age: Int = 25
val price: Double = 19.99
val name: String = "Kotlin"
val isActive: Boolean = true
val initial: Char = 'K'

// Type inference
val x = 100         // Inferred as Int
val y = 3.14        // Inferred as Double

// String templates
val greeting = "Hello, $name!"</code></pre>`,
        videos: [
            { title: "Kotlin Data Types - Telusko", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare a Long variable', template: '___ value: ___ = 1000L', solution: 'val value: Long = 1000L' },
            { id: 2, type: 'output', prompt: 'What is the default number type?', template: '', solution: 'Int for whole numbers, Double for decimals' },
            { id: 3, type: 'modify', prompt: 'Add explicit type', template: 'val num = 42', solution: 'val num: Int = 42' },
            { id: 4, type: 'fix', prompt: 'Fix the type error', template: 'val x: Int = 3.14', solution: 'val x: Double = 3.14' },
            { id: 5, type: 'logic', prompt: 'Why different numeric types?', template: '', solution: 'Different sizes and ranges for memory optimization and specific use cases' }
        ]
    },
    "Type Inference": {
        content: `<h3>Type Inference in Kotlin</h3><p>Kotlin's smart type inference system automatically deduces types from context, reducing boilerplate code.</p><h4>Features:</h4><ul><li>Compiler infers types automatically</li><li>Works with collections and generics</li><li>Type safety maintained</li><li>Explicit annotations optional</li></ul><h4>Example:</h4><pre><code>val x = 10              // Inferred as Int
val y = 3.14            // Inferred as Double
val name = "Kotlin"     // Inferred as String
val list = listOf(1, 2, 3)  // Inferred as List<Int>

// No need for explicit types
val greeting = "Hello, ${name.uppercase()}"

// Type inference with collections
val numbers = listOf(1, 2, 3, 4, 5)
val doubled = numbers.map { it * 2 }</code></pre>`,
        videos: [
            { title: "Kotlin Type System - Rock the JVM", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Let Kotlin infer the type', template: 'val value = ___', solution: 'val value = 100' },
            { id: 2, type: 'output', prompt: 'What type is listOf(1,2,3)?', template: '', solution: 'List<Int>' },
            { id: 3, type: 'modify', prompt: 'Force explicit type', template: 'val x = 5', solution: 'val x: Int = 5' },
            { id: 4, type: 'fix', prompt: 'Allow type inference', template: 'val y: Double = 2.5', solution: 'val y = 2.5' },
            { id: 5, type: 'logic', prompt: 'When to use explicit types?', template: '', solution: 'For documentation, when inference is ambiguous, or API contracts' }
        ]
    },
    "Operators": {
        content: `<h3>Kotlin Operators</h3><p>Kotlin provides all standard operators plus smart features like the Elvis operator and spread operator.</p><h4>Operator Types:</h4><ul><li>Arithmetic: +, -, *, /, %</li><li>Comparison: ==, !=, <, >, <=, >=</li><li>Logical: &&, ||, !</li><li>Assignment: =, +=, -=, *=, /=</li><li>Elvis: ?: (default value)</li><li>in: membership testing</li></ul><h4>Example:</h4><pre><code>val a = 10 + 5
val b = 10 * 2
val c = 2 to 5  // Range

val value: Int? = null
val result = value ?: 0  // Elvis operator

val text = "Kotlin"
val hasK = 'K' in text

if (5 in 1..10) {
    println("In range")
}</code></pre>`,
        videos: [
            { title: "Kotlin Operators - Telusko", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Elvis operator with default', template: 'val x = value ___ 0', solution: 'val x = value ?: 0' },
            { id: 2, type: 'output', prompt: 'What does ?: do?', template: '', solution: 'Provides default value if left side is null' },
            { id: 3, type: 'modify', prompt: 'Create range', template: 'val r = 1 to 10', solution: 'val r = 1..10' },
            { id: 4, type: 'fix', prompt: 'Fix membership test', template: 'if (5 >= 1..10)', solution: 'if (5 in 1..10)' },
            { id: 5, type: 'logic', prompt: 'Why use Elvis operator?', template: '', solution: 'Concise null handling - shorter than if-else for default values' }
        ]
    },
    "Control Flow": {
        content: `<h3>Control Flow in Kotlin</h3><p>Kotlin provides if/else, when (switch), and loop control with advanced features.</p><h4>Features:</h4><ul><li>if/else expressions (return values)</li><li>when expression with pattern matching</li><li>Exhaustive when statements</li><li>Range and in checks</li></ul><h4>Example:</h4><pre><code>val age = 25
val status = if (age >= 18) "Adult" else "Minor"

val grade = when (age) {
    in 0..12 -> "Child"
    in 13..19 -> "Teen"
    else -> "Adult"
}

val day = when (5) {
    1 -> "Monday"
    2 -> "Tuesday"
    else -> "Other"
}</code></pre>`,
        videos: [
            { title: "Kotlin Control Flow - Programming with Mosh", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'If as expression', template: 'val x = ___ (5 > 3) "yes" ___ "no"', solution: 'val x = if (5 > 3) "yes" else "no"' },
            { id: 2, type: 'output', prompt: 'What is when in Kotlin?', template: '', solution: 'Switch statement with pattern matching and ranges' },
            { id: 3, type: 'modify', prompt: 'Add range check', template: 'when (x) {\n  1 -> print("One")\n}', solution: 'when (x) {\n  in 1..5 -> print("1-5")\n  else -> {}\n}' },
            { id: 4, type: 'fix', prompt: 'Make if returnable', template: 'var result\nif (x > 0) result = "pos"', solution: 'val result = if (x > 0) "pos" else "neg"' },
            { id: 5, type: 'logic', prompt: 'When to use when vs if?', template: '', solution: 'when for multiple discrete values; if for boolean conditions' }
        ]
    },
    "Loops": {
        content: `<h3>Loops in Kotlin</h3><p>Kotlin provides for, while, and do-while loops with powerful iteration features.</p><h4>Loop Types:</h4><ul><li>for-in loops (ranges, collections)</li><li>while loops</li><li>do-while loops</li><li>forEach and other functional loops</li><li>loop labels and break/continue</li></ul><h4>Example:</h4><pre><code>// For-in with range
for (i in 1..5) {
    println(i)
}

// Iterate with index
for ((index, value) in listOf("a", "b", "c").withIndex()) {
    println("$index: $value")
}

// While loop
var count = 0
while (count < 5) {
    count++
}

// forEach
listOf(1, 2, 3).forEach { value ->
    println(value)
}</code></pre>`,
        videos: [
            { title: "Kotlin Loops - Telusko", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'For loop with range', template: '___ i ___ 1..5 { }', solution: 'for (i in 1..5) { }' },
            { id: 2, type: 'output', prompt: 'What does withIndex() do?', template: '', solution: 'Provides both index and value during iteration' },
            { id: 3, type: 'modify', prompt: 'Use forEach', template: 'for (x in list) { print(x) }', solution: 'list.forEach { x -> print(x) }' },
            { id: 4, type: 'fix', prompt: 'Fix the range', template: 'for (i in 1.5) { }', solution: 'for (i in 1..5) { }' },
            { id: 5, type: 'logic', prompt: 'Why prefer forEach to for?', template: '', solution: 'More functional style, cleaner syntax, built-in variable scoping' }
        ]
    },
    "Functions": {
        content: `<h3>Functions in Kotlin</h3><p>Kotlin functions are first-class with support for default arguments, named parameters, and lambda expressions.</p><h4>Features:</h4><ul><li>Top-level functions</li><li>Default parameter values</li><li>Named arguments</li><li>Variable number of arguments (varargs)</li><li>Return type inference</li></ul><h4>Example:</h4><pre><code>fun greet(name: String) = "Hello, $name!"

fun add(a: Int, b: Int): Int = a + b

fun printNumbers(vararg nums: Int) {
    nums.forEach { println(it) }
}

fun buildMessage(name: String, greeting: String = "Hello") =
    "$greeting, $name!"

// Calling with named arguments
buildMessage(name = "Alice", greeting = "Hi")
printNumbers(1, 2, 3, 4, 5)</code></pre>`,
        videos: [
            { title: "Kotlin Functions - Rock the JVM", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Single-expression function', template: 'fun double(x: Int) ___ x * 2', solution: 'fun double(x: Int) = x * 2' },
            { id: 2, type: 'output', prompt: 'What are named arguments?', template: '', solution: 'Passing parameters by name for clarity' },
            { id: 3, type: 'modify', prompt: 'Add default value', template: 'fun greet(name: String) { }', solution: 'fun greet(name: String = "Guest") { }' },
            { id: 4, type: 'fix', prompt: 'Fix function syntax', template: 'fun add(a: Int, b: Int) { a + b }', solution: 'fun add(a: Int, b: Int) = a + b' },
            { id: 5, type: 'logic', prompt: 'Why use named arguments?', template: '', solution: 'Improves readability, prevents argument order mistakes' }
        ]
    },
    "Default & Named Arguments": {
        content: `<h3>Default & Named Arguments</h3><p>Kotlin allows functions to have default parameter values and be called with named arguments for clarity.</p><h4>Features:</h4><ul><li>Default values in parameters</li><li>Call with named arguments</li><li>Combine positional and named</li><li>Cleaner function calls</li></ul><h4>Example:</h4><pre><code>fun createUser(name: String, age: Int = 0, email: String = "") {
    println("$name, $age, $email")
}

// Called different ways
createUser("Alice")
createUser("Bob", 25)
createUser("Charlie", 30, "charlie@example.com")

// Named arguments
createUser(name = "Diana", age = 28)
createUser(email = "eve@example.com", name = "Eve", age = 24)

// Mix positional and named
createUser("Frank", email = "frank@example.com")</code></pre>`,
        videos: [
            { title: "Kotlin Parameters - Telusko", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Add default parameter', template: 'fun greet(name: String, greeting: String ___ "Hi")', solution: 'fun greet(name: String, greeting: String = "Hi")' },
            { id: 2, type: 'output', prompt: 'What are named arguments used for?', template: '', solution: 'Making function calls clearer by naming each parameter' },
            { id: 3, type: 'modify', prompt: 'Use named arguments', template: 'createUser("Alice", 25, "alice@example.com")', solution: 'createUser(name = "Alice", age = 25, email = "alice@example.com")' },
            { id: 4, type: 'fix', prompt: 'Call with defaults', template: 'createUser("Bob", , "bob@example.com")', solution: 'createUser("Bob", email = "bob@example.com")' },
            { id: 5, type: 'logic', prompt: 'Why use default arguments?', template: '', solution: 'Reduce boilerplate, provide sensible defaults, maintain backward compatibility' }
        ]
    },
    "Strings": {
        content: `<h3>Strings in Kotlin</h3><p>Kotlin strings are Unicode-compliant with powerful interpolation and manipulation features.</p><h4>Features:</h4><ul><li>String interpolation with $</li><li>Raw strings with triple quotes</li><li>String templates with expressions</li><li>Rich string methods</li></ul><h4>Example:</h4><pre><code>val name = "Kotlin"
val greeting = "Hello, $name!"

// String templates with expressions
val age = 5
val message = "Kotlin is $age years old"
val calculation = "5 + 3 = ${5 + 3}"

// Raw strings (multiline)
val poem = """
    Roses are red
    Violets are blue
    Kotlin is awesome
""".trimIndent()

// String methods
val text = "Hello World"
println(text.lowercase())  // "hello world"
println(text.contains("World"))  // true</code></pre>`,
        videos: [
            { title: "Kotlin Strings - Programming with Mosh", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'String interpolation', template: 'val msg = "Hello, ___name___!"', solution: 'val msg = "Hello, $name!"' },
            { id: 2, type: 'output', prompt: 'How to create multiline string?', template: '', solution: 'Use triple quotes """ """' },
            { id: 3, type: 'modify', prompt: 'Add expression in string', template: 'val result = "$x + $y"', solution: 'val result = "${x + y}"' },
            { id: 4, type: 'fix', prompt: 'Fix template expression', template: 'val msg = "Sum: $5 + 3"', solution: 'val msg = "Sum: ${5 + 3}"' },
            { id: 5, type: 'logic', prompt: 'Why use raw strings?', template: '', solution: 'Preserve formatting, avoid escaping, useful for multiline text' }
        ]
    },
    "Arrays & Lists": {
        content: `<h3>Arrays & Lists in Kotlin</h3><p>Kotlin provides multiple collection types including arrays, lists, sets, and maps with a rich API.</p><h4>Collection Types:</h4><ul><li>Array<T> - fixed size</li><li>List<T> - immutable ordered collection</li><li>MutableList<T> - mutable list</li><li>Set<T>, Map<K,V> - other collections</li></ul><h4>Example:</h4><pre><code>// Arrays
val array = arrayOf(1, 2, 3, 4, 5)
val intArray = intArrayOf(1, 2, 3)

// Lists
val list = listOf(1, 2, 3, 4, 5)
val mutableList = mutableListOf(1, 2, 3)
mutableList.add(4)
mutableList.remove(1)

// Operations
val doubled = list.map { it * 2 }
val evens = list.filter { it % 2 == 0 }
val sum = list.reduce { acc, value -> acc + value }</code></pre>`,
        videos: [
            { title: "Kotlin Collections - Telusko", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create immutable list', template: '___ list = listOf(1, 2, 3)', solution: 'val list = listOf(1, 2, 3)' },
            { id: 2, type: 'output', prompt: 'What does filter do?', template: '', solution: 'Returns new collection with elements matching predicate' },
            { id: 3, type: 'modify', prompt: 'Make mutable', template: 'val list = listOf(1, 2)', solution: 'val list = mutableListOf(1, 2)' },
            { id: 4, type: 'fix', prompt: 'Fix array access', template: 'val x = list[10]', solution: 'val x = list.getOrNull(10)' },
            { id: 5, type: 'logic', prompt: 'When to use List vs Array?', template: '', solution: 'Use List for most cases (flexible size); Array for performance-critical code' }
        ]
    },
    "Null Safety": {
        content: `<h3>Null Safety in Kotlin</h3><p>Kotlin's null safety system eliminates null pointer exceptions at compile time through nullable and non-nullable types.</p><h4>Features:</h4><ul><li>Non-nullable types by default</li><li>Nullable types with ?</li><li>Safe call operator ?.</li><li>Elvis operator ?:</li><li>Not-null assertion !!</li></ul><h4>Example:</h4><pre><code>val name: String = "Kotlin"  // Non-nullable
val age: Int? = null         // Nullable

// Safe call operator
val length = name?.length  // Works, returns 5
val ageLength = age?.toString()?.length  // null

// Elvis operator
val displayName = name ?: "Unknown"
val displayAge = age?.toString() ?: "Unknown"

// Not-null assertion (use carefully!)
val value: String = age!!.toString()  // Throws if null

// If-let equivalent
if (age != null) {
    println(age.toDouble())  // Smart cast to Int
}</code></pre>`,
        videos: [
            { title: "Kotlin Null Safety - Rock the JVM", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Nullable type declaration', template: '___ age: Int___ = null', solution: 'val age: Int? = null' },
            { id: 2, type: 'output', prompt: 'What does ?. do?', template: '', solution: 'Safe call - executes only if not null' },
            { id: 3, type: 'modify', prompt: 'Use Elvis operator', template: 'val x = value?.toString() if null ""', solution: 'val x = value?.toString() ?: ""' },
            { id: 4, type: 'fix', prompt: 'Make safely nullable', template: 'val name: String = null', solution: 'val name: String? = null' },
            { id: 5, type: 'logic', prompt: 'Why null safety matters?', template: '', solution: 'Prevents NullPointerException at runtime, catches at compile-time' }
        ]
    }
};

const KOTLIN_INTERMEDIATE_CONTENT = {
    "Object-Oriented Programming": {
        content: `<h3>Object-Oriented Programming</h3><p>Kotlin is fully object-oriented with support for classes, inheritance, and polymorphism.</p><h4>OOP Principles:</h4><ul><li>Encapsulation - data hiding</li><li>Inheritance - code reuse</li><li>Polymorphism - dynamic dispatch</li><li>Abstraction - hiding complexity</li></ul><h4>Example:</h4><pre><code>open class Animal(val name: String) {
    open fun sound() = "Generic sound"
}

class Dog(name: String) : Animal(name) {
    override fun sound() = "Woof!"
}

val dog = Dog("Rex")
println(dog.sound())  // "Woof!"</code></pre>`,
        videos: [
            { title: "Kotlin OOP - Programming with Mosh", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Inherit from class', template: 'class Dog : ___ { }', solution: 'class Dog : Animal { }' },
            { id: 2, type: 'output', prompt: 'Why mark class open?', template: '', solution: 'Kotlin classes are final by default; open allows inheritance' },
            { id: 3, type: 'modify', prompt: 'Override method', template: 'fun sound() = "Bark"', solution: 'override fun sound() = "Bark"' },
            { id: 4, type: 'fix', prompt: 'Fix inheritance', template: 'class Dog(name) extends Animal { }', solution: 'class Dog(name: String) : Animal(name) { }' },
            { id: 5, type: 'logic', prompt: 'Benefits of OOP?', template: '', solution: 'Code reuse, modularity, easier to maintain and extend' }
        ]
    },
    "Classes & Objects": {
        content: `<h3>Classes & Objects in Kotlin</h3><p>Classes are blueprints for objects with properties, methods, and constructors.</p><h4>Features:</h4><ul><li>Primary constructor in class header</li><li>Properties and backing fields</li><li>Visibility modifiers</li><li>Method definitions</li><li>init blocks</li></ul><h4>Example:</h4><pre><code>class Person(val name: String, var age: Int) {
    val fullName: String
        get() = "Person: $name"
    
    init {
        require(age >= 0) { "Age must be positive" }
    }
    
    fun greet() = "Hello, I'm $name"
}

val person = Person("Alice", 25)
println(person.greet())</code></pre>`,
        videos: [
            { title: "Kotlin Classes - Telusko", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define class with properties', template: 'class Point(___ x: Int, ___ y: Int)', solution: 'class Point(val x: Int, val y: Int)' },
            { id: 2, type: 'output', prompt: 'What is init block?', template: '', solution: 'Executes when object is created, for initialization logic' },
            { id: 3, type: 'modify', prompt: 'Add computed property', template: 'class Rectangle(val w: Int, val h: Int) { }', solution: 'class Rectangle(val w: Int, val h: Int) {\n  val area: Int\n    get() = w * h\n}' },
            { id: 4, type: 'fix', prompt: 'Fix property access', template: 'class Data {\n  var value = 10\n  var double = value * 2\n}', solution: 'class Data(var value: Int) {\n  val double: Int get() = value * 2\n}' },
            { id: 5, type: 'logic', prompt: 'Why use computed properties?', template: '', solution: 'Derive values from state without storing redundantly' }
        ]
    },
    "Constructors": {
        content: `<h3>Constructors in Kotlin</h3><p>Kotlin provides primary and secondary constructors for flexible object initialization.</p><h4>Features:</h4><ul><li>Primary constructor in class header</li><li>Secondary constructors with this()</li><li>Default parameter values</li><li>Initialization order</li></ul><h4>Example:</h4><pre><code>class User(val id: Int, var name: String = "Unknown") {
    var email: String = ""
    
    init {
        println("User created: $id, $name")
    }
    
    constructor(id: Int, name: String, email: String) : this(id, name) {
        this.email = email
    }
}

val user1 = User(1, "Alice")
val user2 = User(2, "Bob", "bob@example.com")</code></pre>`,
        videos: [
            { title: "Kotlin Constructors - Rock the JVM", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Primary constructor', template: 'class User(___) { }', solution: 'class User(val name: String, val age: Int) { }' },
            { id: 2, type: 'output', prompt: 'When does init block run?', template: '', solution: 'During object creation, after primary constructor' },
            { id: 3, type: 'modify', prompt: 'Add secondary constructor', template: 'class Point(val x: Int, val y: Int) { }', solution: 'class Point(val x: Int, val y: Int) {\n  constructor(value: Int) : this(value, value)\n}' },
            { id: 4, type: 'fix', prompt: 'Fix constructor call', template: 'constructor() { }', solution: 'constructor() : this(0) { }' },
            { id: 5, type: 'logic', prompt: 'When to use secondary constructors?', template: '', solution: 'Provide convenience constructors for common initialization patterns' }
        ]
    },
    "Inheritance": {
        content: `<h3>Inheritance in Kotlin</h3><p>Inheritance allows classes to inherit properties and methods from parent classes.</p><h4>Features:</h4><ul><li>Extend with :</li><li>Classes open by default for inheritance</li><li>override keyword required</li><li>super for parent access</li></ul><h4>Example:</h4><pre><code>open class Vehicle(val brand: String) {
    open fun description() = "Brand: $brand"
}

class Car(brand: String, val doors: Int) : Vehicle(brand) {
    override fun description() = 
        super.description() + ", Doors: $doors"
}

class Truck(brand: String) : Vehicle(brand) {
    override fun description() = 
        "${super.description()} - Truck"
}</code></pre>`,
        videos: [
            { title: "Kotlin Inheritance - Telusko", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Mark class for inheritance', template: '___ class Animal { }', solution: 'open class Animal { }' },
            { id: 2, type: 'output', prompt: 'What does super do?', template: '', solution: 'Refers to parent class methods/properties' },
            { id: 3, type: 'modify', prompt: 'Override method', template: 'class Dog : Animal { fun sound() = "Bark" }', solution: 'class Dog : Animal { override fun sound() = "Bark" }' },
            { id: 4, type: 'fix', prompt: 'Fix call to parent', template: 'fun test() = parent.method()', solution: 'fun test() = super.method()' },
            { id: 5, type: 'logic', prompt: 'Benefits of inheritance?', template: '', solution: 'Code reuse, polymorphism, shared functionality' }
        ]
    },
    "Interfaces": {
        content: `<h3>Interfaces in Kotlin</h3><p>Interfaces define contracts that classes must implement, supporting multiple inheritance.</p><h4>Features:</h4><ul><li>Define method contracts</li><li>Multiple interface implementation</li><li>Default implementations</li><li>Properties in interfaces</li></ul><h4>Example:</h4><pre><code>interface Animal {
    val name: String
    fun sound(): String
    fun eat() = "Eating..."
}

class Dog(override val name: String) : Animal {
    override fun sound() = "Woof!"
}

class Cat(override val name: String) : Animal {
    override fun sound() = "Meow!"
}

val animals: List<Animal> = listOf(
    Dog("Rex"), Cat("Whiskers")
)</code></pre>`,
        videos: [
            { title: "Kotlin Interfaces - Programming with Mosh", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Implement interface', template: 'class Dog ___ Animal { }', solution: 'class Dog : Animal { }' },
            { id: 2, type: 'output', prompt: 'Can interfaces have default implementations?', template: '', solution: 'Yes - provide default method bodies' },
            { id: 3, type: 'modify', prompt: 'Multiple interfaces', template: 'class Data : Interface1 { }', solution: 'class Data : Interface1, Interface2 { }' },
            { id: 4, type: 'fix', prompt: 'Override property from interface', template: 'interface I {\n  val x: Int\n}', solution: 'interface I {\n  val x: Int\n}\nclass C(override val x: Int) : I { }' },
            { id: 5, type: 'logic', prompt: 'When to use interfaces vs classes?', template: '', solution: 'Interfaces for contracts and multiple types; classes for concrete implementation' }
        ]
    },
    "Abstract Classes": {
        content: `<h3>Abstract Classes in Kotlin</h3><p>Abstract classes provide a template for subclasses with both abstract and concrete members.</p><h4>Features:</h4><ul><li>Cannot be instantiated</li><li>Abstract methods must be overridden</li><li>Concrete methods and properties</li><li>Constructors with parameters</li></ul><h4>Example:</h4><pre><code>abstract class Shape {
    abstract fun area(): Double
    
    fun describe() = "Shape with area: ${area()}"
}

class Circle(val radius: Double) : Shape() {
    override fun area() = Math.PI * radius * radius
}

class Rectangle(val width: Double, val height: Double) : Shape() {
    override fun area() = width * height
}

val circle: Shape = Circle(5.0)
println(circle.area())</code></pre>`,
        videos: [
            { title: "Kotlin Abstract Classes - Telusko", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare abstract method', template: 'abstract fun ___(): Int', solution: 'abstract fun calculate(): Int' },
            { id: 2, type: 'output', prompt: 'Can you create instance of abstract class?', template: '', solution: 'No - must subclass and provide implementations' },
            { id: 3, type: 'modify', prompt: 'Make non-abstract method', template: 'abstract fun process()', solution: 'fun process() = println("Processing")' },
            { id: 4, type: 'fix', prompt: 'Override abstract method', template: 'class MyClass : Abstract {\n  fun method() = 1\n}', solution: 'class MyClass : Abstract {\n  override fun method() = 1\n}' },
            { id: 5, type: 'logic', prompt: 'When to use abstract classes?', template: '', solution: 'When subclasses share common code and state' }
        ]
    },
    "Data Classes": {
        content: `<h3>Data Classes in Kotlin</h3><p>Data classes generate equals(), hashCode(), toString(), and copy() automatically for data containers.</p><h4>Features:</h4><ul><li>Auto-generated equals() and hashCode()</li><li>Readable toString()</li><li>copy() for immutable updates</li><li>Destructuring support</li></ul><h4>Example:</h4><pre><code>data class User(val id: Int, val name: String, val email: String)

val user = User(1, "Alice", "alice@example.com")
println(user)  // User(id=1, name=Alice, email=alice@example.com)

// Equality by content
val user2 = User(1, "Alice", "alice@example.com")
println(user == user2)  // true

// Copy with changes
val updated = user.copy(name = "Alicia")

// Destructuring
val (id, name, email) = user
println(id)</code></pre>`,
        videos: [
            { title: "Kotlin Data Classes - Rock the JVM", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define data class', template: '___ class User(val name: String)', solution: 'data class User(val name: String)' },
            { id: 2, type: 'output', prompt: 'What does data class generate?', template: '', solution: 'equals(), hashCode(), toString(), copy(), componentN()' },
            { id: 3, type: 'modify', prompt: 'Copy with modification', template: 'val user2 = user', solution: 'val user2 = user.copy(name = "NewName")' },
            { id: 4, type: 'fix', prompt: 'Destructure data class', template: 'val id = user.id', solution: 'val (id, name) = user' },
            { id: 5, type: 'logic', prompt: 'Why use data classes?', template: '', solution: 'Reduce boilerplate, automatic value-based equality, destructuring' }
        ]
    },
    "Sealed Classes": {
        content: `<h3>Sealed Classes in Kotlin</h3><p>Sealed classes restrict inheritance to a predefined set of subclasses, useful for type-safe hierarchies.</p><h4>Features:</h4><ul><li>Limited inheritance - only known subclasses</li><li>Abstract by default</li><li>Exhaustive when expressions</li><li>Pattern matching friendly</li></ul><h4>Example:</h4><pre><code>sealed class Result {
    data class Success(val data: String) : Result()
    data class Error(val exception: Exception) : Result()
    object Loading : Result()
}

fun handleResult(result: Result) = when (result) {
    is Result.Success -> println("Data: ${result.data}")
    is Result.Error -> println("Error: ${result.exception}")
    Result.Loading -> println("Loading...")
}

handleResult(Result.Success("Hello"))</code></pre>`,
        videos: [
            { title: "Kotlin Sealed Classes - Telusko", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define sealed class', template: '_____ class Status', solution: 'sealed class Status' },
            { id: 2, type: 'output', prompt: 'Why exhaustive when with sealed?', template: '', solution: 'Compiler knows all possible subclasses - no else needed' },
            { id: 3, type: 'modify', prompt: 'Subclass sealed class', template: 'sealed class Shape { }', solution: 'sealed class Shape { }\ndata class Circle(val r: Double) : Shape()' },
            { id: 4, type: 'fix', prompt: 'Pattern match sealed class', template: 'when (result) {\n  Success -> {}\n}', solution: 'when (result) {\n  is Result.Success -> {}\n  is Result.Error -> {}\n}' },
            { id: 5, type: 'logic', prompt: 'Benefits of sealed classes?', template: '', solution: 'Type safety, exhaustive pattern matching, controlled inheritance' }
        ]
    },
    "Enums": {
        content: `<h3>Enums in Kotlin</h3><p>Enums define a set of named constants with type safety and behavior.</p><h4>Features:</h4><ul><li>Named constants</li><li>Properties and methods</li><li>Enum values and ordinal</li><li>when with enum</li></ul><h4>Example:</h4><pre><code>enum class Color(val rgb: Int) {
    RED(0xFF0000),
    GREEN(0x00FF00),
    BLUE(0x0000FF);
    
    fun isWarm() = this == RED
}

enum class Direction {
    NORTH, SOUTH, EAST, WEST
}

val color = Color.RED
println(color.name)     // RED
println(color.ordinal)  // 0

when (color) {
    Color.RED -> println("Stop")
    Color.GREEN -> println("Go")
    Color.BLUE -> println("Slow")
}</code></pre>`,
        videos: [
            { title: "Kotlin Enums - Programming with Mosh", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define enum', template: '___ class Status {\n  PENDING, APPROVED, REJECTED\n}', solution: 'enum class Status {\n  PENDING, APPROVED, REJECTED\n}' },
            { id: 2, type: 'output', prompt: 'What is enum.ordinal?', template: '', solution: 'Zero-based position of enum constant' },
            { id: 3, type: 'modify', prompt: 'Add enum properties', template: 'enum class Level {\n  LOW, HIGH\n}', solution: 'enum class Level(val value: Int) {\n  LOW(1), HIGH(10)\n}' },
            { id: 4, type: 'fix', prompt: 'Access enum property', template: 'val x = Status.PENDING.value', solution: 'val x = Level.LOW.value' },
            { id: 5, type: 'logic', prompt: 'Why use enums?', template: '', solution: 'Type safety, fixed set of values, self-documenting code' }
        ]
    },
    "Collections": {
        content: `<h3>Collections in Kotlin</h3><p>Kotlin provides immutable and mutable collections with functional operations.</p><h4>Collection Types:</h4><ul><li>List, MutableList - ordered</li><li>Set, MutableSet - unique elements</li><li>Map, MutableMap - key-value pairs</li></ul><h4>Example:</h4><pre><code>val list = listOf(1, 2, 3, 4, 5)
val mutableList = mutableListOf(1, 2, 3)
mutableList.add(4)

val set = setOf(1, 2, 3)
val map = mapOf("a" to 1, "b" to 2)

// Operations
list.filter { it > 2 }
list.map { it * 2 }
list.find { it == 3 }
list.any { it > 4 }
list.all { it < 10 }

// Grouping
list.groupBy { it % 2 }</code></pre>`,
        videos: [
            { title: "Kotlin Collections - Rock the JVM", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create immutable set', template: '___ set = setOf(1, 2, 3)', solution: 'val set = setOf(1, 2, 3)' },
            { id: 2, type: 'output', prompt: 'What does filter return?', template: '', solution: 'New collection with elements matching predicate' },
            { id: 3, type: 'modify', prompt: 'Use map operation', template: 'list.transform { it * 2 }', solution: 'list.map { it * 2 }' },
            { id: 4, type: 'fix', prompt: 'Check if any element exists', template: 'list.exists { it > 5 }', solution: 'list.any { it > 5 }' },
            { id: 5, type: 'logic', prompt: 'Difference between List and Set?', template: '', solution: 'List is ordered with duplicates; Set has unique unordered elements' }
        ]
    },
    "Lambdas": {
        content: `<h3>Lambdas in Kotlin</h3><p>Lambdas are anonymous functions used for functional programming and passing code as data.</p><h4>Features:</h4><ul><li>Anonymous function expressions</li><li>Shorthand syntax</li><li>Closure capturing</li><li>Receiver lambdas</li></ul><h4>Example:</h4><pre><code>// Basic lambda
val add: (Int, Int) -> Int = { a, b -> a + b }
val result = add(5, 3)  // 8

// With list
val numbers = listOf(1, 2, 3, 4, 5)
numbers.forEach { println(it) }

// Multiple statements
val compute = { x: Int ->
    val doubled = x * 2
    doubled + 1
}

// Trailing lambda
listOf("a", "b", "c").map { it.uppercase() }</code></pre>`,
        videos: [
            { title: "Kotlin Lambdas - Telusko", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Lambda with two parameters', template: 'val f = { a, b ___  a + b }', solution: 'val f = { a, b -> a + b }' },
            { id: 2, type: 'output', prompt: 'What is it reference?', template: '', solution: 'Implicit parameter name when lambda has single parameter' },
            { id: 3, type: 'modify', prompt: 'Use trailing lambda', template: 'list.map({ it * 2 })', solution: 'list.map { it * 2 }' },
            { id: 4, type: 'fix', prompt: 'Fix lambda syntax', template: 'val f = (x) => x * 2', solution: 'val f = { x: Int -> x * 2 }' },
            { id: 5, type: 'logic', prompt: 'Why use lambdas?', template: '', solution: 'Concise, pass code to functions, functional programming' }
        ]
    },
    "Higher-Order Functions": {
        content: `<h3>Higher-Order Functions in Kotlin</h3><p>Functions that accept or return other functions, enabling functional programming patterns.</p><h4>Features:</h4><ul><li>Functions as parameters</li><li>Functions as return values</li><li>Function types</li><li>Closure capture</li></ul><h4>Example:</h4><pre><code>// Function taking function parameter
fun operate(a: Int, b: Int, op: (Int, Int) -> Int): Int {
    return op(a, b)
}

val sum = operate(5, 3) { a, b -> a + b }
val product = operate(5, 3) { a, b -> a * b }

// Function returning function
fun makeAdder(x: Int): (Int) -> Int {
    return { y -> x + y }
}

val add5 = makeAdder(5)
println(add5(3))  // 8</code></pre>`,
        videos: [
            { title: "Kotlin Higher-Order Functions - Rock the JVM", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Function parameter type', template: 'fun apply(f: _____) { }', solution: 'fun apply(f: (Int) -> String) { }' },
            { id: 2, type: 'output', prompt: 'What does it mean to return a function?', template: '', solution: 'Return a function object that can be called later' },
            { id: 3, type: 'modify', prompt: 'Return function', template: 'fun makeGreeter(greeting: String) { }', solution: 'fun makeGreeter(greeting: String): (String) -> String {\n  return { name -> "$greeting, $name" }\n}' },
            { id: 4, type: 'fix', prompt: 'Fix function type', template: 'fun map(f: Int -> String)', solution: 'fun map(f: (Int) -> String)' },
            { id: 5, type: 'logic', prompt: 'Use case for higher-order functions?', template: '', solution: 'Callbacks, function composition, decorators, functional utilities' }
        ]
    },
    "Exception Handling": {
        content: `<h3>Exception Handling in Kotlin</h3><p>Structured exception handling with try-catch-finally expressions.</p><h4>Features:</h4><ul><li>try-catch expressions (return values)</li><li>Finally blocks</li><li>Try with resources</li><li>Custom exceptions</li></ul><h4>Example:</h4><pre><code>try {
    val result = "100".toInt()
    println(result)
} catch (e: NumberFormatException) {
    println("Not a valid number")
} finally {
    println("Done")
}

// Try as expression
val value = try {
    "abc".toInt()
} catch (e: NumberFormatException) {
    0
}

// Custom exception
class ValidationException(message: String) : Exception(message)

fun validate(age: Int) {
    if (age < 0) throw ValidationException("Age cannot be negative")
}</code></pre>`,
        videos: [
            { title: "Kotlin Exception Handling - Programming with Mosh", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Try-catch block', template: '___ { code } ___ (e: Exception) { }', solution: 'try { code } catch (e: Exception) { }' },
            { id: 2, type: 'output', prompt: 'When does finally execute?', template: '', solution: 'Always - whether exception occurs or not' },
            { id: 3, type: 'modify', prompt: 'Try as expression', template: 'try { "1".toInt() } catch (e) -1', solution: 'val x = try { "1".toInt() } catch (e) { -1 }' },
            { id: 4, type: 'fix', prompt: 'Fix exception type', template: 'catch (e: IOException)', solution: 'catch (e: NumberFormatException)' },
            { id: 5, type: 'logic', prompt: 'Use case for finally?', template: '', solution: 'Resource cleanup, logging, operations that must always run' }
        ]
    }
};

const KOTLIN_ADVANCED_CONTENT = {
    "Coroutines": {
        content: `<h3>Coroutines in Kotlin</h3><p>Lightweight threads for asynchronous programming without blocking.</p><h4>Features:</h4><ul><li>launch and async</li><li>Suspendable functions</li><li>Job and Deferred</li><li>Structured concurrency</li></ul><h4>Example:</h4><pre><code>GlobalScope.launch {
    delay(1000)
    println("After delay")
}

val job = GlobalScope.async {
    fetchData()
}

runBlocking {
    val result = job.await()
}

suspend fun fetchData(): String {
    delay(1000)
    return "Data"
}</code></pre>`,
        videos: [
            { title: "Kotlin Coroutines - Rock the JVM", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Start coroutine', template: '___Scope.___()', solution: 'GlobalScope.launch { }' },
            { id: 2, type: 'output', prompt: 'What is suspend function?', template: '', solution: 'Function that can be paused and resumed' },
            { id: 3, type: 'modify', prompt: 'Use async', template: 'GlobalScope.launch { }', solution: 'GlobalScope.async { }' },
            { id: 4, type: 'fix', prompt: 'Fix suspend keyword', template: 'fun getData(): String { }', solution: 'suspend fun getData(): String { }' },
            { id: 5, type: 'logic', prompt: 'Why coroutines over threads?', template: '', solution: 'Lightweight, non-blocking, easier to read' }
        ]
    },
    "Concurrency": {
        content: `<h3>Concurrency in Kotlin</h3><p>Managing concurrent execution with threads, locks, and atomic operations.</p><h4>Concepts:</h4><ul><li>Thread basics</li><li>Synchronized blocks</li><li>Atomic variables</li><li>Thread-safe patterns</li></ul><h4>Example:</h4><pre><code>var counter = 0
val lock = Object()

synchronized(lock) {
    counter++
}

// Atomic
import java.util.concurrent.atomic.AtomicInteger
val atomic = AtomicInteger(0)
atomic.incrementAndGet()

// Thread
val thread = Thread {
    println("Running in thread")
}
thread.start()
thread.join()</code></pre>`,
        videos: [
            { title: "Kotlin Concurrency - Edureka", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Synchronize block', template: '_____(lock) { }', solution: 'synchronized(lock) { }' },
            { id: 2, type: 'output', prompt: 'What is thread safety?', template: '', solution: 'Multiple threads can access safely without data corruption' },
            { id: 3, type: 'modify', prompt: 'Use atomic', template: 'var x = 0', solution: 'val x = AtomicInteger(0)' },
            { id: 4, type: 'fix', prompt: 'Start thread', template: 'val t = Thread { }\nt.run()', solution: 'val t = Thread { }\nt.start()' },
            { id: 5, type: 'logic', prompt: 'When to use synchronized?', template: '', solution: 'Protect shared mutable state from race conditions' }
        ]
    },
    "Flow": {
        content: `<h3>Flow in Kotlin</h3><p>Reactive streams with cold flows and hot channels for asynchronous data processing.</p><h4>Features:</h4><ul><li>Cold flows</li><li>Operators (map, filter)</li><li>Collection and processing</li><li>Error handling</li></ul><h4>Example:</h4><pre><code>fun getNumbers(): Flow<Int> = flow {
    for (i in 1..5) {
        delay(100)
        emit(i)
    }
}

runBlocking {
    getNumbers()
        .map { it * 2 }
        .filter { it > 4 }
        .collect { println(it) }
}</code></pre>`,
        videos: [
            { title: "Kotlin Flow - Rock the JVM", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create flow', template: 'fun nums(): Flow<Int> = ___ { }', solution: 'fun nums(): Flow<Int> = flow { }' },
            { id: 2, type: 'output', prompt: 'What does emit do?', template: '', solution: 'Send value downstream' },
            { id: 3, type: 'modify', prompt: 'Add operator', template: 'flow.map { it * 2 }', solution: 'flow.map { it * 2 }.collect { }' },
            { id: 4, type: 'fix', prompt: 'Collect flow', template: 'flow.subscribe { }', solution: 'flow.collect { }' },
            { id: 5, type: 'logic', prompt: 'Flow vs async?', template: '', solution: 'Flow emits multiple values; async returns single value' }
        ]
    },
    "Generics": {
        content: `<h3>Generics in Kotlin</h3><p>Generic types for flexible, reusable code with type safety.</p><h4>Features:</h4><ul><li>Generic functions and classes</li><li>Type constraints</li><li>Variance (in, out)</li><li>Reified generics</li></ul><h4>Example:</h4><pre><code>fun <T> identity(value: T): T = value

class Box<T>(val value: T)

fun <T : Comparable<T>> maxOf(a: T, b: T): T {
    return if (a >= b) a else b
}

// Reified
inline fun <reified T> parseJson(json: String): T {
    return Json.decodeFromString(json)
}</code></pre>`,
        videos: [
            { title: "Kotlin Generics - Programming with Mosh", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Generic function', template: 'fun <___> id(x: ___): ___ = x', solution: 'fun <T> id(x: T): T = x' },
            { id: 2, type: 'output', prompt: 'What is type constraint?', template: '', solution: 'Requirement that generic type must satisfy' },
            { id: 3, type: 'modify', prompt: 'Add constraint', template: 'fun <T> max(a: T, b: T)', solution: 'fun <T : Comparable<T>> max(a: T, b: T)' },
            { id: 4, type: 'fix', prompt: 'Fix generic syntax', template: 'class Container[T] { }', solution: 'class Container<T> { }' },
            { id: 5, type: 'logic', prompt: 'Benefits of generics?', template: '', solution: 'Code reuse, type safety, flexibility' }
        ]
    },
    "Type Aliases": {
        content: `<h3>Type Aliases in Kotlin</h3><p>Create alternative names for types to improve readability.</p><h4>Features:</h4><ul><li>typealias for type names</li><li>Works with generics</li><li>Functional types</li></ul><h4>Example:</h4><pre><code>typealias Name = String
typealias UserMap = Map<String, User>
typealias Predicate<T> = (T) -> Boolean
typealias Handler = (String) -> Unit

val users: UserMap = mapOf()
val check: Predicate<Int> = { it > 0 }
val onSuccess: Handler = { message -> println(message) }</code></pre>`,
        videos: [
            { title: "Kotlin Type Aliases - Rock the JVM", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create type alias', template: '_____ UserId = Int', solution: 'typealias UserId = Int' },
            { id: 2, type: 'output', prompt: 'Are type aliases checked at runtime?', template: '', solution: 'No - they are compile-time only' },
            { id: 3, type: 'modify', prompt: 'Alias function type', template: 'fun f(h: (Int) -> String) { }', solution: 'typealias Transformer = (Int) -> String\nfun f(h: Transformer) { }' },
            { id: 4, type: 'fix', prompt: 'Generic type alias', template: 'typealias List = kotlin.collections.List<Int>', solution: 'typealias IntList = List<Int>' },
            { id: 5, type: 'logic', prompt: 'Why use type aliases?', template: '', solution: 'Improve readability, reduce complex type signatures' }
        ]
    },
    "DSLs": {
        content: `<h3>DSLs (Domain-Specific Languages) in Kotlin</h3><p>Create custom syntax for specific domains using lambdas and extension functions.</p><h4>Features:</h4><ul><li>Builder pattern</li><li>Receiver lambdas</li><li>Implicit receivers</li><li>Readable syntax</li></ul><h4>Example:</h4><pre><code>class HtmlBuilder {
    fun div(content: String) = println("<div>$content</div>")
}

fun html(block: HtmlBuilder.() -> Unit) {
    HtmlBuilder().block()
}

html {
    div("Hello World")
}

// DSL Example: Gradle-like
dependencies {
    implementation("com.example:lib:1.0")
}</code></pre>`,
        videos: [
            { title: "Kotlin DSLs - Telusko", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Receiver lambda', template: 'fun builder(block: T.() -> Unit)', solution: 'fun builder(block: Builder.() -> Unit) { }' },
            { id: 2, type: 'output', prompt: 'What is implicit receiver?', template: '', solution: 'this in lambda refers to receiver object' },
            { id: 3, type: 'modify', prompt: 'Create DSL builder', template: 'class Builder\nfun build(b: Builder) { }', solution: 'fun build(b: Builder.() -> Unit) { }' },
            { id: 4, type: 'fix', prompt: 'Use DSL', template: 'build().invoke { }', solution: 'build { }' },
            { id: 5, type: 'logic', prompt: 'DSL benefits?', template: '', solution: 'Readable, domain-focused syntax, less boilerplate' }
        ]
    },
    "Extension Functions": {
        content: `<h3>Extension Functions in Kotlin</h3><p>Add functions to existing classes without inheritance.</p><h4>Features:</h4><ul><li>Extend any class</li><li>Access to this</li><li>Method resolution order</li><li>Extension properties</li></ul><h4>Example:</h4><pre><code>fun String.isEmail(): Boolean {
    return contains("@") && contains(".")
}

fun <T> List<T>.second(): T = this[1]

fun String.repeat(times: Int): String {
    return (1..times).joinToString("") { this }
}

val email = "test@example.com"
println(email.isEmail())

val items = listOf(1, 2, 3)
println(items.second())</code></pre>`,
        videos: [
            { title: "Kotlin Extensions - Programming with Mosh", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Extension function', template: 'fun String.___() = this.uppercase()', solution: 'fun String.shout() = this.uppercase()' },
            { id: 2, type: 'output', prompt: 'What does this refer to?', template: '', solution: 'The receiver object (String instance)' },
            { id: 3, type: 'modify', prompt: 'Generic extension', template: 'fun List.first()', solution: 'fun <T> List<T>.first() = this[0]' },
            { id: 4, type: 'fix', prompt: 'Extension property', template: 'fun String.length', solution: 'val String.syllables: Int\n  get() = length' },
            { id: 5, type: 'logic', prompt: 'Extension benefits?', template: '', solution: 'Extend existing types, read like methods, avoid wrapper classes' }
        ]
    },
    "Delegation": {
        content: `<h3>Delegation in Kotlin</h3><p>Forward behavior to another object instead of inheriting.</p><h4>Features:</h4><ul><li>Class delegation with by</li><li>Property delegation</li><li>Lazy evaluation</li><li>Observable properties</li></ul><h4>Example:</h4><pre><code>interface Base {
    fun print()
}

class BaseImpl : Base {
    override fun print() = println("BaseImpl")
}

class Derived(b: Base) : Base by b

val base = BaseImpl()
Derived(base).print()

// Lazy delegation
val expensive: String by lazy {
    println("Computing")
    "result"
}</code></pre>`,
        videos: [
            { title: "Kotlin Delegation - Rock the JVM", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Class delegation', template: 'class C(i: I) : I ___ i', solution: 'class C(i: I) : I by i' },
            { id: 2, type: 'output', prompt: 'What does by keyword do?', template: '', solution: 'Delegates interface implementation to object' },
            { id: 3, type: 'modify', prompt: 'Lazy property', template: 'val expensive: String', solution: 'val expensive: String by lazy { compute() }' },
            { id: 4, type: 'fix', prompt: 'Observable property', template: 'var obs: Int by observable', solution: 'var obs: Int by Delegates.observable(0) { _, old, new ->' },
            { id: 5, type: 'logic', prompt: 'Delegation vs inheritance?', template: '', solution: 'Delegation is composition-friendly, more flexible than inheritance' }
        ]
    },
    "Reflection": {
        content: `<h3>Reflection in Kotlin</h3><p>Inspect and manipulate program structure at runtime.</p><h4>Features:</h4><ul><li>KClass and properties</li><li>Function references</li><li>Instance checks</li><li>Dynamic invocation</li></ul><h4>Example:</h4><pre><code>val clazz = String::class
println(clazz.qualifiedName)

val prop = String::class.members
    .filterIsInstance<KProperty1<String, *>>()

val fn = ::print
fn("Hello")

val obj: Any = "String"
if (obj is String) {
    println(obj.uppercase())
}</code></pre>`,
        videos: [
            { title: "Kotlin Reflection - Telusko", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Get KClass', template: '___ = String::class', solution: 'val clazz = String::class' },
            { id: 2, type: 'output', prompt: 'What is function reference?', template: '', solution: 'Reference to function that can be invoked later' },
            { id: 3, type: 'modify', prompt: 'Get class members', template: 'String::class', solution: 'String::class.members' },
            { id: 4, type: 'fix', prompt: 'Check type', template: 'if (obj as String)', solution: 'if (obj is String)' },
            { id: 5, type: 'logic', prompt: 'Reflection use cases?', template: '', solution: 'Serialization, framework development, dynamic behavior' }
        ]
    },
    "Kotlin Multiplatform": {
        content: `<h3>Kotlin Multiplatform Development</h3><p>Share code across JVM, JS, and native platforms.</p><h4>Platforms:</h4><ul><li>JVM (Java)</li><li>JS (JavaScript)</li><li>Native (iOS, Windows, Linux)</li></ul><h4>Example:</h4><pre><code>// commonMain
expect class Platform()
fun getPlatform(): Platform

// jvmMain
actual class Platform {
    actual val name: String = "JVM"
}

// jsMain
actual class Platform {
    actual val name: String = "JS"
}</code></pre>`,
        videos: [
            { title: "Kotlin Multiplatform - JetBrains", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Expect declaration', template: '_____ class Platform()', solution: 'expect class Platform()' },
            { id: 2, type: 'output', prompt: 'What are three platforms?', template: '', solution: 'JVM, JavaScript, Native' },
            { id: 3, type: 'modify', prompt: 'Actual implementation', template: 'expect class X', solution: 'actual class X { }' },
            { id: 4, type: 'fix', prompt: 'Source set structure', template: 'src/common/', solution: 'src/commonMain/, src/jvmMain/', etc' },
            { id: 5, type: 'logic', prompt: 'Multiplatform benefits?', template: '', solution: 'Share logic, reduce duplication, single codebase for multiple targets' }
        ]
    },
    "JVM Internals": {
        content: `<h3>JVM Internals in Kotlin</h3><p>Understanding how Kotlin compiles to JVM bytecode.</p><h4>Concepts:</h4><ul><li>Bytecode generation</li><li>Stack machine model</li><li>Class loading</li><li>Performance implications</li></ul><h4>Example:</h4><pre><code>// Bytecode perspective
fun add(a: Int, b: Int) = a + b

// Compiled to: 
// ALOAD 0
// ILOAD 1
// ILOAD 2
// IADD
// IRETURN

// View with: kotlinc -d out.jar && javap -c out</code></pre>`,
        videos: [
            { title: "JVM Internals - Rock the JVM", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'View bytecode', template: '_____ -c File.class', solution: 'javap -c File.class' },
            { id: 2, type: 'output', prompt: 'What is IADD?', template: '', solution: 'Integer add bytecode instruction' },
            { id: 3, type: 'modify', prompt: 'Generate bytecode', template: 'kotlinc file.kt', solution: 'kotlinc file.kt -d out.jar' },
            { id: 4, type: 'fix', prompt: 'View class structure', template: 'javap File', solution: 'javap -c File' },
            { id: 5, type: 'logic', prompt: 'Why understand bytecode?', template: '', solution: 'Debug performance, understand memory, optimize code' }
        ]
    },
    "Performance Optimization": {
        content: `<h3>Performance Optimization in Kotlin</h3><p>Techniques for writing efficient Kotlin code.</p><h4>Strategies:</h4><ul><li>Inline functions</li><li>Avoid allocations</li><li>Collection optimization</li><li>Profiling with JProfiler</li></ul><h4>Example:</h4><pre><code>// Inline to avoid closure overhead
inline fun forEach(block: (Int) -> Unit) {
    for (i in 1..100) block(i)
}

// Use Sequence for lazy evaluation
listOf(1, 2, 3)
    .asSequence()
    .map { it * 2 }
    .filter { it > 2 }
    .toList()

// Object reuse
val buffer = StringBuilder()
for (i in 0..1000) {
    buffer.append(i)
}</code></pre>`,
        videos: [
            { title: "Kotlin Performance - Telusko", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Inline function', template: '_____ fun process(f: () -> Unit)', solution: 'inline fun process(f: () -> Unit)' },
            { id: 2, type: 'output', prompt: 'Benefits of asSequence()?', template: '', solution: 'Lazy evaluation, reduced intermediate allocations' },
            { id: 3, type: 'modify', prompt: 'Use Sequence', template: 'list.map { }.filter { }', solution: 'list.asSequence().map { }.filter { }.toList()' },
            { id: 4, type: 'fix', prompt: 'Avoid allocation', template: 'var str = ""\nfor (i in 0..100) str += i', solution: 'val sb = StringBuilder()\nfor (i in 0..100) sb.append(i)' },
            { id: 5, type: 'logic', prompt: 'When to optimize?', template: '', solution: 'After profiling, on hot paths, when performance matters' }
        ]
    },
    "Interoperability (Java)": {
        content: `<h3>Interoperability (Java) in Kotlin</h3><p>Seamless integration between Kotlin and Java code.</p><h4>Features:</h4><ul><li>Call Java from Kotlin</li><li>Call Kotlin from Java</li><li>Platform types</li><li>Java collections compatibility</li></ul><h4>Example:</h4><pre><code>// Call Java
val list = ArrayList<String>()
val scanner = java.util.Scanner(System.in)

// Kotlin called from Java
public class KotlinClass {
    public static void main(String[] args) {
        MyKotlinClass obj = new MyKotlinClass("test");
        System.out.println(obj.getName());
    }
}

// Platform types suppress nullability
val javaString: String! = javaMethod()  // Dangerous!</code></pre>`,
        videos: [
            { title: "Kotlin Java Interop - Programming with Mosh", url: "https://www.youtube.com/watch?v=F9UC9sWv8J0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Call Java class', template: 'val list = ___()', solution: 'val list = ArrayList<String>()\nval list = arrayListOf<String>()' },
            { id: 2, type: 'output', prompt: 'What is platform type?', template: '', solution: 'Java type without nullability info (String!)' },
            { id: 3, type: 'modify', prompt: 'Safe Java call', template: 'val x: String = javaMethod()', solution: 'val x: String? = javaMethod()' },
            { id: 4, type: 'fix', prompt: 'Call Kotlin from Java', template: 'new MyClass()', solution: 'MyClassKt.method() for top-level, new MyClass() for classes' },
            { id: 5, type: 'logic', prompt: 'Why Kotlin-Java interop?', template: '', solution: 'Use existing Java libraries, gradual migration, shared codebases' }
        ]
    }
};

// Export all content
export { KOTLIN_BEGINNER_CONTENT, KOTLIN_INTERMEDIATE_CONTENT, KOTLIN_ADVANCED_CONTENT };
