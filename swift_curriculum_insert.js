// Swift Curriculum Content - 40 Topics Total

const SWIFT_BEGINNER_CONTENT = {
    "Introduction to Swift": {
        content: `<h3>Introduction to Swift</h3><p>Swift is a powerful, modern programming language developed by Apple for iOS, macOS, watchOS, and tvOS development. Released in 2014, it combines performance with safety and expressiveness.</p><h4>Key Features:</h4><ul><li>Type-safe and memory-safe</li><li>Fast and efficient performance</li><li>Modern syntax and features</li><li>Interoperability with Objective-C</li></ul><h4>Example:</h4><pre><code>print("Hello, Swift!")
// Clean, readable syntax
let message = "Swift is awesome"</code></pre>`,
        videos: [
            { title: "Swift in 100 Seconds - Fireship", url: "https://www.youtube.com/watch?v=nAchMctX4YA" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Complete the print statement', template: '___("Hello Swift")', solution: 'print("Hello Swift")' },
            { id: 2, type: 'output', prompt: 'What platforms does Swift support?', template: '', solution: 'iOS, macOS, watchOS, tvOS, Linux' },
            { id: 3, type: 'modify', prompt: 'Add a comment', template: 'print("Hi")', solution: '// Greeting\nprint("Hi")' },
            { id: 4, type: 'fix', prompt: 'Fix the syntax error', template: 'Print("Hello")', solution: 'print("Hello")' },
            { id: 5, type: 'logic', prompt: 'Why is Swift considered type-safe?', template: '', solution: 'Compiler enforces type checking at compile-time, preventing type errors' }
        ]
    },
    "Swift Installation & Setup": {
        content: `<h3>Swift Installation & Setup</h3><p>Setting up Swift development environment with Xcode on macOS or Swift toolchain on other platforms.</p><h4>Installation Options:</h4><ul><li>Xcode (macOS) - Full IDE with Swift</li><li>Swift.org - Open source toolchain</li><li>VS Code with Swift extensions</li></ul><h4>Example - Check Installation:</h4><pre><code>swift --version
// Apple Swift version 5.9

swift
// Interactive REPL</code></pre>`,
        videos: [
            { title: "Swift Setup Guide - CodeWithChris", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Command to check Swift version', template: 'swift ______', solution: 'swift --version' },
            { id: 2, type: 'output', prompt: 'What is the Swift REPL?', template: '', solution: 'Read-Eval-Print Loop - interactive Swift environment' },
            { id: 3, type: 'modify', prompt: 'Add .swift extension', template: 'main', solution: 'main.swift' },
            { id: 4, type: 'fix', prompt: 'Correct the compile command', template: 'swift compile main.swift', solution: 'swiftc main.swift' },
            { id: 5, type: 'logic', prompt: 'What is Xcode?', template: '', solution: 'Apple\'s IDE for Swift and iOS development' }
        ]
    },
    "Swift Program Structure": {
        content: `<h3>Swift Program Structure</h3><p>Understanding the basic structure of Swift programs, including statements, expressions, and code organization.</p><h4>Structure Elements:</h4><ul><li>No semicolons required (optional)</li><li>Indentation for readability (4 spaces)</li><li>Comments with // and /* */</li><li>No main function needed (top-level code)</li></ul><h4>Example:</h4><pre><code>// Single line comment
/*
 Multi-line comment
 Block syntax
*/

// Top-level code executes automatically
print("Program starts")

func greet(name: String) -> String {
    return "Hello, \\(name)!"
}

print(greet(name: "Swift"))</code></pre>`,
        videos: [
            { title: "Swift Basics - Sean Allen", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Write a single-line comment', template: '____ This is Swift', solution: '// This is Swift' },
            { id: 2, type: 'output', prompt: 'Does Swift require a main function?', template: '', solution: 'No - top-level code executes automatically' },
            { id: 3, type: 'modify', prompt: 'Add multi-line comment', template: 'print("Hi")', solution: '/*\nGreeting\n*/\nprint("Hi")' },
            { id: 4, type: 'fix', prompt: 'Fix the comment syntax', template: '# This is wrong', solution: '// This is correct' },
            { id: 5, type: 'logic', prompt: 'When are semicolons needed in Swift?', template: '', solution: 'Only when separating multiple statements on one line' }
        ]
    },
    "Variables & Constants": {
        content: `<h3>Variables & Constants in Swift</h3><p>Swift uses 'var' for variables and 'let' for constants, promoting immutability and safety.</p><h4>Key Concepts:</h4><ul><li>var - mutable variables</li><li>let - immutable constants (preferred)</li><li>Type inference automatically determines type</li><li>Explicit type annotation available</li></ul><h4>Example:</h4><pre><code>var age = 25          // Variable
let name = "Alice"    // Constant
var score: Int = 100  // Explicit type

age = 26  // OK
// name = "Bob"  // Error: cannot modify constant</code></pre>`,
        videos: [
            { title: "Swift Variables - CodeWithChris", url: "https://www.youtube.com/watch?v=OBn8EcZMCXI" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create a constant for PI', template: '___ pi = 3.14159', solution: 'let pi = 3.14159' },
            { id: 2, type: 'output', prompt: 'What happens if you try to modify a let constant?', template: '', solution: 'Compile-time error - constants are immutable' },
            { id: 3, type: 'modify', prompt: 'Convert to variable', template: 'let count = 0', solution: 'var count = 0' },
            { id: 4, type: 'fix', prompt: 'Fix the syntax error', template: 'constant name = "Bob"', solution: 'let name = "Bob"' },
            { id: 5, type: 'logic', prompt: 'Why prefer let over var?', template: '', solution: 'Immutability improves safety, prevents bugs, and helps compiler optimize' }
        ]
    },
    "Data Types": {
        content: `<h3>Swift Data Types</h3><p>Swift is strongly typed with a rich set of built-in types including integers, floating-point numbers, strings, and Booleans.</p><h4>Common Types:</h4><ul><li>Int, UInt - Integers (Int8, Int16, Int32, Int64)</li><li>Double, Float - Floating-point</li><li>String - Text</li><li>Bool - true/false</li><li>Character - Single character</li></ul><h4>Example:</h4><pre><code>let age: Int = 25
let price: Double = 19.99
let name: String = "Swift"
let isActive: Bool = true
let initial: Character = "A"

// Type safety
let total = age + 10  // OK
// let result = age + price  // Error: type mismatch</code></pre>`,
        videos: [
            { title: "Swift Data Types - Sean Allen", url: "https://www.youtube.com/watch?v=s-5U2Hw46WU" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare a Double variable', template: '___ price: ___ = 9.99', solution: 'let price: Double = 9.99' },
            { id: 2, type: 'output', prompt: 'What is the default floating-point type?', template: '', solution: 'Double (64-bit floating-point)' },
            { id: 3, type: 'modify', prompt: 'Add explicit type', template: 'let num = 42', solution: 'let num: Int = 42' },
            { id: 4, type: 'fix', prompt: 'Fix the type error', template: 'let x: Int = 3.14', solution: 'let x: Double = 3.14' },
            { id: 5, type: 'logic', prompt: 'Why does Swift have multiple integer types?', template: '', solution: 'Different sizes (Int8, Int16, etc.) for memory optimization and specific use cases' }
        ]
    },
    "Type Inference": {
        content: `<h3>Type Inference in Swift</h3><p>Swift's powerful type inference system automatically deduces types from context, reducing boilerplate while maintaining type safety.</p><h4>Features:</h4><ul><li>Compiler infers types from values</li><li>Explicit annotation optional</li><li>Type safety maintained</li><li>Works with complex types</li></ul><h4>Example:</h4><pre><code>let age = 25           // Inferred as Int
let price = 19.99      // Inferred as Double
let name = "Swift"     // Inferred as String
let items = [1, 2, 3]  // Inferred as [Int]

// Mixed types require explicit annotation
let numbers: [Double] = [1, 2, 3]</code></pre>`,
        videos: [
            { title: "Swift Type System - Paul Hudson", url: "https://www.youtube.com/watch?v=v0K-S01TBF8" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'What type is inferred?', template: 'let value = 100', solution: 'Int' },
            { id: 2, type: 'output', prompt: 'How does Swift infer [String]?', template: 'let arr = ["a", "b"]', solution: 'From the string literals in the array' },
            { id: 3, type: 'modify', prompt: 'Force Double type', template: 'let num = 5', solution: 'let num: Double = 5' },
            { id: 4, type: 'fix', prompt: 'Allow type inference', template: 'let x: Int = 10', solution: 'let x = 10' },
            { id: 5, type: 'logic', prompt: 'When should you use explicit types?', template: '', solution: 'When inference is ambiguous, for documentation, or when you need a specific type' }
        ]
    },
    "Operators": {
        content: `<h3>Swift Operators</h3><p>Swift provides standard operators plus unique features like nil-coalescing and range operators.</p><h4>Operator Types:</h4><ul><li>Arithmetic: +, -, *, /, %</li><li>Comparison: ==, !=, <, >, <=, >=</li><li>Logical: &&, ||, !</li><li>Range: ..., ..<</li><li>Nil-coalescing: ??</li></ul><h4>Example:</h4><pre><code>let sum = 10 + 5
let range = 1...5      // 1 to 5 inclusive
let halfOpen = 1..<5   // 1 to 4

let value: Int? = nil
let result = value ?? 0  // 0 if nil</code></pre>`,
        videos: [
            { title: "Swift Operators - CodeWithChris", url: "https://www.youtube.com/watch?v=OBn8EcZMCXI" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create a closed range 1-10', template: 'let r = ___', solution: 'let r = 1...10' },
            { id: 2, type: 'output', prompt: 'What does ?? do?', template: '', solution: 'Nil-coalescing operator - provides default value if optional is nil' },
            { id: 3, type: 'modify', prompt: 'Use half-open range', template: 'let r = 0...9', solution: 'let r = 0..<10' },
            { id: 4, type: 'fix', prompt: 'Fix the range syntax', template: 'let r = 1..5', solution: 'let r = 1...5' },
            { id: 5, type: 'logic', prompt: 'Difference between ... and ..<?', template: '', solution: '... includes end value, ..< excludes end value' }
        ]
    },
    "Control Flow": {
        content: `<h3>Control Flow in Swift</h3><p>Swift provides if/else, switch, and guard statements for controlling program flow.</p><h4>Features:</h4><ul><li>No parentheses required around conditions</li><li>Switch must be exhaustive</li><li>Guard for early exit</li><li>Where clauses for filtering</li></ul><h4>Example:</h4><pre><code>let score = 85

if score >= 90 {
    print("A")
} else if score >= 80 {
    print("B")
} else {
    print("C")
}

switch score {
case 90...100:
    print("Excellent")
case 80..<90:
    print("Good")
default:
    print("Needs improvement")
}</code></pre>`,
        videos: [
            { title: "Swift Control Flow - Sean Allen", url: "https://www.youtube.com/watch?v=StKCJM68l5A" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Write if statement without parentheses', template: '___ age > 18 { }', solution: 'if age > 18 { }' },
            { id: 2, type: 'output', prompt: 'What makes Swift switch exhaustive?', template: '', solution: 'Must handle all cases or include default' },
            { id: 3, type: 'modify', prompt: 'Add else clause', template: 'if x > 0 {\n  print("+")\n}', solution: 'if x > 0 {\n  print("+")\n} else {\n  print("-")\n}' },
            { id: 4, type: 'fix', prompt: 'Fix switch statement', template: 'switch x {\ncase 1:\n  print("One")\n}', solution: 'switch x {\ncase 1:\n  print("One")\ndefault:\n  break\n}' },
            { id: 5, type: 'logic', prompt: 'When to use guard vs if?', template: '', solution: 'Guard for early exit/validation, if for conditional logic' }
        ]
    },
    "Loops": {
        content: `<h3>Loops in Swift</h3><p>Swift offers for-in, while, and repeat-while loops with modern syntax and safety features.</p><h4>Loop Types:</h4><ul><li>for-in - Iterate over sequences</li><li>while - Condition before execution</li><li>repeat-while - Condition after execution</li><li>stride - Custom iteration steps</li></ul><h4>Example:</h4><pre><code>// For-in loop
for i in 1...5 {
    print(i)
}

// Iterate array
let fruits = ["Apple", "Banana", "Cherry"]
for fruit in fruits {
    print(fruit)
}

// While loop
var count = 0
while count < 5 {
    count += 1
}

// Stride
for i in stride(from: 0, to: 10, by: 2) {
    print(i)  // 0, 2, 4, 6, 8
}</code></pre>`,
        videos: [
            { title: "Swift Loops - CodeWithChris", url: "https://www.youtube.com/watch?v=OBn8EcZMCXI" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Loop through 1 to 10', template: 'for i ___ 1...10 { }', solution: 'for i in 1...10 { }' },
            { id: 2, type: 'output', prompt: 'What does stride(from: 0, to: 10, by: 3) produce?', template: '', solution: '0, 3, 6, 9' },
            { id: 3, type: 'modify', prompt: 'Use repeat-while', template: 'while x < 5 {\n  x += 1\n}', solution: 'repeat {\n  x += 1\n} while x < 5' },
            { id: 4, type: 'fix', prompt: 'Fix the for-in syntax', template: 'for i = 0; i < 5; i++ { }', solution: 'for i in 0..<5 { }' },
            { id: 5, type: 'logic', prompt: 'Difference between while and repeat-while?', template: '', solution: 'repeat-while executes at least once, while may not execute at all' }
        ]
    },
    "Functions": {
        content: `<h3>Functions in Swift</h3><p>Swift functions are first-class types with flexible syntax, parameter labels, and return types.</p><h4>Features:</h4><ul><li>Argument labels for clarity</li><li>Default parameter values</li><li>Variadic parameters</li><li>Multiple return values (tuples)</li><li>First-class functions</li></ul><h4>Example:</h4><pre><code>// Basic function
func greet(name: String) -> String {
    return "Hello, \\(name)!"
}

// Argument labels
func greet(person name: String, from hometown: String) {
    print("Hello \\(name) from \\(hometown)!")
}
greet(person: "Alice", from: "NYC")

// Multiple returns
func minMax(numbers: [Int]) -> (min: Int, max: Int) {
    return (numbers.min()!, numbers.max()!)
}</code></pre>`,
        videos: [
            { title: "Swift Functions - Paul Hudson", url: "https://www.youtube.com/watch?v=v0K-S01TBF8" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define function with return type', template: 'func add(a: Int, b: Int) ___ Int { }', solution: 'func add(a: Int, b: Int) -> Int { }' },
            { id: 2, type: 'output', prompt: 'What are argument labels?', template: '', solution: 'External names used when calling function for clarity' },
            { id: 3, type: 'modify', prompt: 'Add argument label', template: 'func greet(name: String) { }', solution: 'func greet(person name: String) { }' },
            { id: 4, type: 'fix', prompt: 'Fix return syntax', template: 'func double(x: Int) => Int { }', solution: 'func double(x: Int) -> Int { }' },
            { id: 5, type: 'logic', prompt: 'Why use tuples for multiple returns?', template: '', solution: 'Group related values without creating a struct, with named elements for clarity' }
        ]
    },
    "Tuples": {
        content: `<h3>Tuples in Swift</h3><p>Tuples group multiple values into a single compound value, useful for temporary data grouping.</p><h4>Features:</h4><ul><li>Group different types</li><li>Named or unnamed elements</li><li>Decomposition with pattern matching</li><li>Return multiple values from functions</li></ul><h4>Example:</h4><pre><code>// Basic tuple
let person = ("Alice", 25)
print(person.0)  // "Alice"

// Named elements
let user = (name: "Bob", age: 30)
print(user.name)  // "Bob"

// Decomposition
let (name, age) = user
print(name)  // "Bob"

// Function return
func getCoordinates() -> (x: Int, y: Int) {
    return (10, 20)
}</code></pre>`,
        videos: [
            { title: "Swift Tuples - Sean Allen", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create named tuple', template: 'let point = (___: 5, ___: 10)', solution: 'let point = (x: 5, y: 10)' },
            { id: 2, type: 'output', prompt: 'How to access unnamed tuple elements?', template: '', solution: 'Using indices: .0, .1, .2, etc.' },
            { id: 3, type: 'modify', prompt: 'Add names to tuple', template: 'let t = (100, 200)', solution: 'let t = (width: 100, height: 200)' },
            { id: 4, type: 'fix', prompt: 'Fix decomposition', template: 'let [x, y] = (1, 2)', solution: 'let (x, y) = (1, 2)' },
            { id: 5, type: 'logic', prompt: 'When to use tuples vs structs?', template: '', solution: 'Tuples for temporary grouping, structs for persistent data models' }
        ]
    },
    "Optionals": {
        content: `<h3>Optionals in Swift</h3><p>Optionals represent the presence or absence of a value, eliminating null pointer errors.</p><h4>Key Concepts:</h4><ul><li>Optional<T> or T? syntax</li><li>nil represents absence</li><li>Safe unwrapping required</li><li>Optional binding (if let, guard let)</li><li>Optional chaining</li></ul><h4>Example:</h4><pre><code>var age: Int? = 25
age = nil  // OK

// Optional binding
if let unwrappedAge = age {
    print("Age is \\(unwrappedAge)")
} else {
    print("No age")
}

// Nil-coalescing
let displayAge = age ?? 0

// Optional chaining
let name: String? = "Alice"
let upperName = name?.uppercased()  // Optional("ALICE")</code></pre>`,
        videos: [
            { title: "Swift Optionals Explained - Paul Hudson", url: "https://www.youtube.com/watch?v=7a7As0uNWOQ" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare optional String', template: 'var name: String___ = nil', solution: 'var name: String? = nil' },
            { id: 2, type: 'output', prompt: 'What does optional binding prevent?', template: '', solution: 'Runtime crashes from force-unwrapping nil values' },
            { id: 3, type: 'modify', prompt: 'Use guard let', template: 'if let x = value { }', solution: 'guard let x = value else { return }' },
            { id: 4, type: 'fix', prompt: 'Safe unwrap', template: 'let x = value!', solution: 'if let x = value { }' },
            { id: 5, type: 'logic', prompt: 'Why are optionals important in Swift?', template: '', solution: 'Explicitly handle absence of values, preventing null pointer errors at compile-time' }
        ]
    },
    "Strings": {
        content: `<h3>Strings in Swift</h3><p>Swift strings are Unicode-compliant, value types with powerful manipulation features.</p><h4>Features:</h4><ul><li>String interpolation with \\()</li><li>Multiline strings with """</li><li>Unicode support</li><li>Value type (copied on assignment)</li><li>Rich API for manipulation</li></ul><h4>Example:</h4><pre><code>let name = "Swift"
let greeting = "Hello, \\(name)!"

// Multiline
let multiline = """
    This is
    a multiline
    string
    """

// String methods
let text = "Hello World"
print(text.lowercased())  // "hello world"
print(text.contains("World"))  // true
print(text.count)  // 11</code></pre>`,
        videos: [
            { title: "Swift Strings - CodeWithChris", url: "https://www.youtube.com/watch?v=OBn8EcZMCXI" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'String interpolation with variable', template: 'let msg = "Hi ___name___"', solution: 'let msg = "Hi \\(name)"' },
            { id: 2, type: 'output', prompt: 'How to create multiline string?', template: '', solution: 'Use triple quotes """ """' },
            { id: 3, type: 'modify', prompt: 'Convert to uppercase', template: 'let text = "hello"', solution: 'let upper = text.uppercased()' },
            { id: 4, type: 'fix', prompt: 'Fix interpolation', template: 'let msg = "Count: {count}"', solution: 'let msg = "Count: \\(count)"' },
            { id: 5, type: 'logic', prompt: 'Why are Swift strings value types?', template: '', solution: 'Ensures thread safety and prevents unintended mutations' }
        ]
    },
    "Arrays": {
        content: `<h3>Arrays in Swift</h3><p>Swift arrays are ordered, type-safe collections that store multiple values of the same type.</p><h4>Features:</h4><ul><li>Type-safe: [Element]</li><li>Zero-indexed</li><li>Mutable with var, immutable with let</li><li>Rich collection API</li><li>Value semantics</li></ul><h4>Example:</h4><pre><code>var numbers = [1, 2, 3, 4, 5]
numbers.append(6)
numbers.insert(0, at: 0)
numbers.remove(at: 1)

// Array methods
let doubled = numbers.map { $0 * 2 }
let evens = numbers.filter { $0 % 2 == 0 }
let sum = numbers.reduce(0, +)

// Empty array
var items: [String] = []
items.append("First")</code></pre>`,
        videos: [
            { title: "Swift Arrays - Sean Allen", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create empty Int array', template: 'var arr: [___] = []', solution: 'var arr: [Int] = []' },
            { id: 2, type: 'output', prompt: 'What does map do?', template: '', solution: 'Transforms each element and returns new array' },
            { id: 3, type: 'modify', prompt: 'Add element', template: 'var arr = [1, 2]', solution: 'var arr = [1, 2]\narr.append(3)' },
            { id: 4, type: 'fix', prompt: 'Fix array declaration', template: 'let nums = []', solution: 'let nums: [Int] = []' },
            { id: 5, type: 'logic', prompt: 'Difference between var and let arrays?', template: '', solution: 'var allows modifications (append, remove), let is immutable' }
        ]
    }
};

const SWIFT_INTERMEDIATE_CONTENT = {
    "Dictionaries": {
        content: `<h3>Dictionaries in Swift</h3><p>Dictionaries store key-value pairs with type-safe keys and values.</p><h4>Features:</h4><ul><li>Type-safe: [Key: Value]</li><li>Unordered collection</li><li>Keys must be Hashable</li><li>Optional values on lookup</li></ul><h4>Example:</h4><pre><code>var scores = ["Alice": 95, "Bob": 87]
scores["Charlie"] = 92

// Access returns optional
if let aliceScore = scores["Alice"] {
    print("Alice: \\(aliceScore)")
}

// Iterate
for (name, score) in scores {
    print("\\(name): \\(score)")
}

// Methods
scores.updateValue(90, forKey: "Alice")
scores.removeValue(forKey: "Bob")</code></pre>`,
        videos: [
            { title: "Swift Dictionaries - Paul Hudson", url: "https://www.youtube.com/watch?v=v0K-S01TBF8" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create String to Int dictionary', template: 'var dict: [___: ___] = [:]', solution: 'var dict: [String: Int] = [:]' },
            { id: 2, type: 'output', prompt: 'Why does dictionary lookup return optional?', template: '', solution: 'Key might not exist in dictionary' },
            { id: 3, type: 'modify', prompt: 'Add default value', template: 'let x = dict["key"]', solution: 'let x = dict["key"] ?? 0' },
            { id: 4, type: 'fix', prompt: 'Fix dictionary syntax', template: 'let d = {"a": 1}', solution: 'let d = ["a": 1]' },
            { id: 5, type: 'logic', prompt: 'What does Hashable mean for dictionary keys?', template: '', solution: 'Type can be converted to hash value for efficient lookup' }
        ]
    },
    "Structs": {
        content: `<h3>Structs in Swift</h3><p>Structs are value types that encapsulate data and behavior, preferred for most data models in Swift.</p><h4>Features:</h4><ul><li>Value semantics (copied on assignment)</li><li>Memberwise initializer</li><li>Can have methods and properties</li><li>No inheritance (use protocols)</li><li>Mutating methods</li></ul><h4>Example:</h4><pre><code>struct User {
    var name: String
    var age: Int
    
    func greet() -> String {
        return "Hello, I'm \\(name)"
    }
    
    mutating func haveBirthday() {
        age += 1
    }
}

var user = User(name: "Alice", age: 25)
user.haveBirthday()
print(user.age)  // 26</code></pre>`,
        videos: [
            { title: "Swift Structs - Sean Allen", url: "https://www.youtube.com/watch?v=L3ThUqSQXG0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define struct with properties', template: 'struct Point {\n  var ___: Int\n  var ___: Int\n}', solution: 'struct Point {\n  var x: Int\n  var y: Int\n}' },
            { id: 2, type: 'output', prompt: 'What are value semantics?', template: '', solution: 'Copies are independent - changes to copy don\'t affect original' },
            { id: 3, type: 'modify', prompt: 'Add mutating method', template: 'func reset() {\n  count = 0\n}', solution: 'mutating func reset() {\n  count = 0\n}' },
            { id: 4, type: 'fix', prompt: 'Fix struct syntax', template: 'class Point { }', solution: 'struct Point { }' },
            { id: 5, type: 'logic', prompt: 'When to use struct vs class?', template: '', solution: 'Prefer struct for data models; use class when you need reference semantics or inheritance' }
        ]
    },
    "Classes & Objects": {
        content: `<h3>Classes & Objects in Swift</h3><p>Classes are reference types that support inheritance and are used when you need reference semantics.</p><h4>Features:</h4><ul><li>Reference semantics (shared instances)</li><li>Inheritance supported</li><li>Deinitializers available</li><li>Type casting</li><li>Identity operators (===, !==)</li></ul><h4>Example:</h4><pre><code>class Vehicle {
    var speed = 0
    
    func describe() -> String {
        return "Traveling at \\(speed) mph"
    }
}

class Car: Vehicle {
    var brand: String
    
    init(brand: String) {
        self.brand = brand
    }
    
    override func describe() -> String {
        return "\\(brand): \\(super.describe())"
    }
}</code></pre>`,
        videos: [
            { title: "Swift Classes - CodeWithChris", url: "https://www.youtube.com/watch?v=OBn8EcZMCXI" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define class with property', template: '___ Person {\n  var name: String\n}', solution: 'class Person {\n  var name: String\n}' },
            { id: 2, type: 'output', prompt: 'What are reference semantics?', template: '', solution: 'Multiple variables can reference same instance - changes affect all references' },
            { id: 3, type: 'modify', prompt: 'Add inheritance', template: 'class Dog { }', solution: 'class Dog: Animal { }' },
            { id: 4, type: 'fix', prompt: 'Fix override', template: 'func method() { }', solution: 'override func method() { }' },
            { id: 5, type: 'logic', prompt: 'What is the identity operator ===?', template: '', solution: 'Checks if two references point to the same instance' }
        ]
    },
    "Properties": {
        content: `<h3>Properties in Swift</h3><p>Properties associate values with types, including stored and computed properties.</p><h4>Types:</h4><ul><li>Stored properties (var/let)</li><li>Computed properties (get/set)</li><li>Property observers (willSet/didSet)</li><li>Lazy properties</li><li>Type properties (static)</li></ul><h4>Example:</h4><pre><code>struct Circle {
    var radius: Double
    
    // Computed property
    var area: Double {
        return .pi * radius * radius
    }
    
    var diameter: Double {
        get { radius * 2 }
        set { radius = newValue / 2 }
    }
}

class Counter {
    var count = 0 {
        didSet {
            print("Count changed from \\(oldValue) to \\(count)")
        }
    }
}</code></pre>`,
        videos: [
            { title: "Swift Properties - Paul Hudson", url: "https://www.youtube.com/watch?v=v0K-S01TBF8" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create computed property', template: 'var full: String {\n  ___ { first + last }\n}', solution: 'var full: String {\n  get { first + last }\n}' },
            { id: 2, type: 'output', prompt: 'What is a property observer?', template: '', solution: 'Code that runs when property value changes (willSet/didSet)' },
            { id: 3, type: 'modify', prompt: 'Add didSet observer', template: 'var score = 0', solution: 'var score = 0 {\n  didSet { print("Changed") }\n}' },
            { id: 4, type: 'fix', prompt: 'Fix computed property', template: 'var x: Int = 5 * 2', solution: 'var x: Int { 5 * 2 }' },
            { id: 5, type: 'logic', prompt: 'When to use lazy properties?', template: '', solution: 'When property is expensive to compute and might not be needed immediately' }
        ]
    },
    "Methods": {
        content: `<h3>Methods in Swift</h3><p>Methods are functions associated with types, including instance and type methods.</p><h4>Features:</h4><ul><li>Instance methods operate on instances</li><li>Type methods (static/class) on types</li><li>Mutating methods for value types</li><li>Self reference</li></ul><h4>Example:</h4><pre><code>struct Counter {
    var count = 0
    
    // Instance method
    mutating func increment() {
        count += 1
    }
    
    mutating func increment(by amount: Int) {
        count += amount
    }
    
    // Type method
    static func reset() -> Counter {
        return Counter(count: 0)
    }
}</code></pre>`,
        videos: [
            { title: "Swift Methods - Sean Allen", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define type method', template: '___ func create() { }', solution: 'static func create() { }' },
            { id: 2, type: 'output', prompt: 'Why mark method as mutating?', template: '', solution: 'Allows struct/enum methods to modify properties' },
            { id: 3, type: 'modify', prompt: 'Make method static', template: 'func helper() { }', solution: 'static func helper() { }' },
            { id: 4, type: 'fix', prompt: 'Fix mutating method', template: 'func change() {\n  value = 10\n}', solution: 'mutating func change() {\n  value = 10\n}' },
            { id: 5, type: 'logic', prompt: 'Difference between static and class methods?', template: '', solution: 'class methods can be overridden in subclasses, static cannot' }
        ]
    },
    "Initializers": {
        content: `<h3>Initializers in Swift</h3><p>Initializers prepare instances of types for use, setting initial values and performing setup.</p><h4>Features:</h4><ul><li>init() syntax</li><li>Multiple initializers</li><li>Convenience initializers</li><li>Failable initializers (init?)</li><li>Required initializers</li></ul><h4>Example:</h4><pre><code>struct User {
    let name: String
    var age: Int
    
    // Custom initializer
    init(name: String, age: Int = 0) {
        self.name = name
        self.age = age
    }
    
    // Failable initializer
    init?(id: String) {
        guard !id.isEmpty else { return nil }
        self.name = id
        self.age = 0
    }
}

let user1 = User(name: "Alice", age: 25)
let user2 = User(name: "Bob")
let user3 = User(id: "charlie")</code></pre>`,
        videos: [
            { title: "Swift Initializers - Paul Hudson", url: "https://www.youtube.com/watch?v=7a7As0uNWOQ" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define initializer', template: '___(x: Int) {\n  self.x = x\n}', solution: 'init(x: Int) {\n  self.x = x\n}' },
            { id: 2, type: 'output', prompt: 'What does init? return?', template: '', solution: 'Optional instance - nil if initialization fails' },
            { id: 3, type: 'modify', prompt: 'Add default value', template: 'init(age: Int) { }', solution: 'init(age: Int = 0) { }' },
            { id: 4, type: 'fix', prompt: 'Fix failable init', template: 'init(id: String) {\n  if id.isEmpty { return nil }\n}', solution: 'init?(id: String) {\n  guard !id.isEmpty else { return nil }\n}' },
            { id: 5, type: 'logic', prompt: 'When to use failable initializers?', template: '', solution: 'When initialization can fail based on invalid input or conditions' }
        ]
    },
    "Enumerations": {
        content: `<h3>Enumerations in Swift</h3><p>Enums define a common type for a group of related values, with powerful features like associated values and raw values.</p><h4>Features:</h4><ul><li>Case-based values</li><li>Associated values</li><li>Raw values</li><li>Methods and computed properties</li><li>Recursive enums</li></ul><h4>Example:</h4><pre><code>enum Direction {
    case north, south, east, west
}

enum Result {
    case success(String)
    case failure(Error)
}

enum StatusCode: Int {
    case ok = 200
    case notFound = 404
    case serverError = 500
}

let status = StatusCode.ok
print(status.rawValue)  // 200</code></pre>`,
        videos: [
            { title: "Swift Enums - Sean Allen", url: "https://www.youtube.com/watch?v=R5YeYx7COxk" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define enum with cases', template: 'enum Color {\n  case ___, ___, ___\n}', solution: 'enum Color {\n  case red, green, blue\n}' },
            { id: 2, type: 'output', prompt: 'What are associated values?', template: '', solution: 'Additional data stored with each enum case' },
            { id: 3, type: 'modify', prompt: 'Add raw values', template: 'enum Day {\n  case monday\n}', solution: 'enum Day: Int {\n  case monday = 1\n}' },
            { id: 4, type: 'fix', prompt: 'Fix enum syntax', template: 'enum Result {\n  success(String)\n}', solution: 'enum Result {\n  case success(String)\n}' },
            { id: 5, type: 'logic', prompt: 'When to use associated values vs raw values?', template: '', solution: 'Associated values for varying data per case; raw values for constant underlying values' }
        ]
    },
    "Protocols": {
        content: `<h3>Protocols in Swift</h3><p>Protocols define blueprints of methods, properties, and requirements that types can adopt.</p><h4>Features:</h4><ul><li>Define interface contracts</li><li>Multiple protocol conformance</li><li>Protocol inheritance</li><li>Protocol extensions</li><li>Associated types</li></ul><h4>Example:</h4><pre><code>protocol Drawable {
    func draw()
}

protocol Identifiable {
    var id: String { get }
}

struct Circle: Drawable, Identifiable {
    let id: String
    let radius: Double
    
    func draw() {
        print("Drawing circle with radius \\(radius)")
    }
}

extension Drawable {
    func describe() {
        print("This is drawable")
    }
}</code></pre>`,
        videos: [
            { title: "Swift Protocols - Paul Hudson", url: "https://www.youtube.com/watch?v=v0K-S01TBF8" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define protocol with method', template: 'protocol Named {\n  ___ getName() -> String\n}', solution: 'protocol Named {\n  func getName() -> String\n}' },
            { id: 2, type: 'output', prompt: 'Can structs conform to protocols?', template: '', solution: 'Yes - structs, classes, and enums can all conform to protocols' },
            { id: 3, type: 'modify', prompt: 'Add protocol conformance', template: 'struct User { }', solution: 'struct User: Identifiable { }' },
            { id: 4, type: 'fix', prompt: 'Fix protocol property', template: 'protocol Named {\n  var name\n}', solution: 'protocol Named {\n  var name: String { get }\n}' },
            { id: 5, type: 'logic', prompt: 'Why use protocols over inheritance?', template: '', solution: 'More flexible - types can conform to multiple protocols, works with value types' }
        ]
    },
    "Extensions": {
        content: `<h3>Extensions in Swift</h3><p>Extensions add new functionality to existing types without modifying their source code.</p><h4>Features:</h4><ul><li>Add computed properties</li><li>Add methods</li><li>Add initializers</li><li>Add protocol conformance</li><li>Cannot add stored properties</li></ul><h4>Example:</h4><pre><code>extension Int {
    var squared: Int {
        return self * self
    }
    
    func times(_ action: () -> Void) {
        for _ in 0..<self {
            action()
        }
    }
}

let num = 5
print(num.squared)  // 25

3.times {
    print("Hello")
}

extension String {
    var isEmail: Bool {
        contains("@") && contains(".")
    }
}</code></pre>`,
        videos: [
            { title: "Swift Extensions - Sean Allen", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create extension with method', template: 'extension String {\n  ___ reversed() { }\n}', solution: 'extension String {\n  func reversed() { }\n}' },
            { id: 2, type: 'output', prompt: 'Can extensions add stored properties?', template: '', solution: 'No - only computed properties and methods' },
            { id: 3, type: 'modify', prompt: 'Add computed property', template: 'extension Int { }', solution: 'extension Int {\n  var doubled: Int { self * 2 }\n}' },
            { id: 4, type: 'fix', prompt: 'Fix extension syntax', template: 'extension for String { }', solution: 'extension String { }' },
            { id: 5, type: 'logic', prompt: 'Why use extensions?', template: '', solution: 'Organize code, add functionality to types you don\'t own, retroactive protocol conformance' }
        ]
    },
    "Error Handling": {
        content: `<h3>Error Handling in Swift</h3><p>Swift provides structured error handling with throw, try, and catch for propagating and handling errors.</p><h4>Features:</h4><ul><li>Error protocol</li><li>Throwing functions</li><li>do-catch blocks</li><li>try? and try! operators</li><li>defer statements</li></ul><h4>Example:</h4><pre><code>enum NetworkError: Error {
    case badURL
    case timeout
    case serverError(Int)
}

func fetchData(url: String) throws -> String {
    guard !url.isEmpty else {
        throw NetworkError.badURL
    }
    return "Data"
}

do {
    let data = try fetchData(url: "https://api.com")
    print(data)
} catch NetworkError.badURL {
    print("Invalid URL")
} catch {
    print("Error: \\(error)")
}</code></pre>`,
        videos: [
            { title: "Swift Error Handling - Paul Hudson", url: "https://www.youtube.com/watch?v=pziKkwLGIjE" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define throwing function', template: 'func load() ___ -> Data { }', solution: 'func load() throws -> Data { }' },
            { id: 2, type: 'output', prompt: 'What does try? do?', template: '', solution: 'Converts result to optional - nil if error thrown' },
            { id: 3, type: 'modify', prompt: 'Add error handling', template: 'let x = fetch()', solution: 'do {\n  let x = try fetch()\n} catch { }' },
            { id: 4, type: 'fix', prompt: 'Fix throw syntax', template: 'return Error.invalid', solution: 'throw Error.invalid' },
            { id: 5, type: 'logic', prompt: 'When to use try! vs try??', template: '', solution: 'try! when you\'re certain it won\'t fail; try? when failure is acceptable and you want optional' }
        ]
    },
    "Closures": {
        content: `<h3>Closures in Swift</h3><p>Closures are self-contained blocks of functionality that can be passed around and used in code.</p><h4>Features:</h4><ul><li>First-class functions</li><li>Capture values from context</li><li>Trailing closure syntax</li><li>Shorthand argument names ($0, $1)</li><li>Escaping and non-escaping</li></ul><h4>Example:</h4><pre><code>// Basic closure
let greet = { (name: String) -> String in
    return "Hello, \\(name)!"
}

// Array methods
let numbers = [1, 2, 3, 4, 5]
let doubled = numbers.map { $0 * 2 }
let evens = numbers.filter { $0 % 2 == 0 }

// Trailing closure
func perform(times: Int, action: () -> Void) {
    for _ in 0..<times {
        action()
    }
}

perform(times: 3) {
    print("Hello")
}</code></pre>`,
        videos: [
            { title: "Swift Closures - Sean Allen", url: "https://www.youtube.com/watch?v=3iVLE_iFGJk" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create closure with parameter', template: 'let add = { (a: Int, b: Int) ___ Int in }', solution: 'let add = { (a: Int, b: Int) -> Int in }' },
            { id: 2, type: 'output', prompt: 'What does $0 represent?', template: '', solution: 'First shorthand closure parameter' },
            { id: 3, type: 'modify', prompt: 'Use shorthand syntax', template: 'nums.map { x in x * 2 }', solution: 'nums.map { $0 * 2 }' },
            { id: 4, type: 'fix', prompt: 'Fix closure syntax', template: 'let f = (x) => x * 2', solution: 'let f = { (x: Int) in x * 2 }' },
            { id: 5, type: 'logic', prompt: 'What does @escaping mean?', template: '', solution: 'Closure is stored and executed after function returns' }
        ]
    },
    "Memory Management (ARC)": {
        content: `<h3>Memory Management (ARC)</h3><p>Automatic Reference Counting (ARC) manages memory automatically by tracking and managing object references.</p><h4>Concepts:</h4><ul><li>Strong references (default)</li><li>Weak references</li><li>Unowned references</li><li>Reference cycles</li><li>Capture lists</li></ul><h4>Example:</h4><pre><code>class Person {
    let name: String
    weak var apartment: Apartment?
    
    init(name: String) {
        self.name = name
    }
}

class Apartment {
    let unit: String
    unowned let tenant: Person
    
    init(unit: String, tenant: Person) {
        self.unit = unit
        self.tenant = tenant
    }
}

// Closure capture list
class Manager {
    var task: (() -> Void)?
    
    func setup() {
        task = { [weak self] in
            self?.doWork()
        }
    }
}</code></pre>`,
        videos: [
            { title: "Swift ARC - Paul Hudson", url: "https://www.youtube.com/watch?v=v0K-S01TBF8" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare weak reference', template: '___ var delegate: Delegate?', solution: 'weak var delegate: Delegate?' },
            { id: 2, type: 'output', prompt: 'What causes retain cycles?', template: '', solution: 'Two objects strongly reference each other, preventing deallocation' },
            { id: 3, type: 'modify', prompt: 'Add weak self capture', template: 'closure = {\n  self.update()\n}', solution: 'closure = { [weak self] in\n  self?.update()\n}' },
            { id: 4, type: 'fix', prompt: 'Prevent retain cycle', template: 'var parent: Parent', solution: 'weak var parent: Parent?' },
            { id: 5, type: 'logic', prompt: 'Difference between weak and unowned?', template: '', solution: 'weak becomes nil when deallocated; unowned assumes reference always exists' }
        ]
    },
    "Access Control": {
        content: `<h3>Access Control in Swift</h3><p>Access control restricts access to parts of code from other source files and modules.</p><h4>Levels:</h4><ul><li>open - Most permissive, allows subclassing</li><li>public - Accessible from any module</li><li>internal - Default, module-only access</li><li>fileprivate - File-only access</li><li>private - Enclosing declaration only</li></ul><h4>Example:</h4><pre><code>public class PublicClass {
    public var publicProperty = 0
    internal var internalProperty = 0
    private var privateProperty = 0
    
    public func publicMethod() { }
    fileprivate func fileprivateMethod() { }
    private func privateMethod() { }
}

private class PrivateClass {
    var property = 0
}

public struct User {
    private(set) var id: String  // Read public, write private
    public var name: String
}</code></pre>`,
        videos: [
            { title: "Swift Access Control - Sean Allen", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Make property private', template: '___ var count = 0', solution: 'private var count = 0' },
            { id: 2, type: 'output', prompt: 'What is the default access level?', template: '', solution: 'internal - accessible within the same module' },
            { id: 3, type: 'modify', prompt: 'Make publicly readable, privately writable', template: 'var id: String', solution: 'private(set) var id: String' },
            { id: 4, type: 'fix', prompt: 'Fix access level', template: 'protected var x = 0', solution: 'private var x = 0' },
            { id: 5, type: 'logic', prompt: 'Difference between open and public?', template: '', solution: 'open allows subclassing outside module; public does not' }
        ]
    }
};

const SWIFT_ADVANCED_CONTENT = {
    "Generics": {
        content: `<h3>Generics in Swift</h3><p>Generics enable writing flexible, reusable code that works with any type while maintaining type safety.</p><h4>Features:</h4><ul><li>Generic functions and types</li><li>Type constraints</li><li>Associated types</li><li>Where clauses</li><li>Generic subscripts</li></ul><h4>Example:</h4><pre><code>// Generic function
func swap<T>(_ a: inout T, _ b: inout T) {
    let temp = a
    a = b
    b = temp
}

// Generic type
struct Stack<Element> {
    private var items: [Element] = []
    
    mutating func push(_ item: Element) {
        items.append(item)
    }
    
    mutating func pop() -> Element? {
        return items.popLast()
    }
}

// Type constraint
func findIndex<T: Equatable>(of value: T, in array: [T]) -> Int? {
    for (index, item) in array.enumerated() {
        if item == value {
            return index
        }
    }
    return nil
}</code></pre>`,
        videos: [
            { title: "Swift Generics - Paul Hudson", url: "https://www.youtube.com/watch?v=v0K-S01TBF8" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define generic function', template: 'func identity<___>(value: ___) -> ___ { }', solution: 'func identity<T>(value: T) -> T { }' },
            { id: 2, type: 'output', prompt: 'What are type constraints?', template: '', solution: 'Requirements that generic types must conform to protocols or inherit from classes' },
            { id: 3, type: 'modify', prompt: 'Add Equatable constraint', template: 'func compare<T>(a: T, b: T) { }', solution: 'func compare<T: Equatable>(a: T, b: T) { }' },
            { id: 4, type: 'fix', prompt: 'Fix generic syntax', template: 'func process(T)(value: T) { }', solution: 'func process<T>(value: T) { }' },
            { id: 5, type: 'logic', prompt: 'Why use generics?', template: '', solution: 'Write reusable code that works with any type while maintaining type safety' }
        ]
    },
    "Protocol-Oriented Programming": {
        content: `<h3>Protocol-Oriented Programming</h3><p>Swift's approach to programming that emphasizes protocols over inheritance for code reuse and composition.</p><h4>Concepts:</h4><ul><li>Protocol composition</li><li>Protocol extensions with defaults</li><li>Value type polymorphism</li><li>Protocol-based design</li><li>Conditional conformance</li></ul><h4>Example:</h4><pre><code>protocol Purchasable {
    var price: Double { get }
}

protocol Taxable {
    var taxRate: Double { get }
}

extension Taxable {
    var totalPrice: Double {
        return price * (1 + taxRate)
    }
}

struct Product: Purchasable, Taxable {
    let price: Double
    let taxRate: Double
}

// Protocol composition
func checkout(item: Purchasable & Taxable) {
    print("Total: \\(item.totalPrice)")
}</code></pre>`,
        videos: [
            { title: "Protocol-Oriented Programming - WWDC", url: "https://www.youtube.com/watch?v=g2LwFZatfTI" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Compose protocols', template: 'func process(item: ___ & ___) { }', solution: 'func process(item: Codable & Identifiable) { }' },
            { id: 2, type: 'output', prompt: 'What are protocol extensions?', template: '', solution: 'Add default implementations to protocols' },
            { id: 3, type: 'modify', prompt: 'Add default implementation', template: 'protocol Named {\n  var name: String { get }\n}', solution: 'extension Named {\n  var greeting: String { "Hello \\(name)" }\n}' },
            { id: 4, type: 'fix', prompt: 'Fix protocol composition', template: 'var x: Codable, Identifiable', solution: 'var x: Codable & Identifiable' },
            { id: 5, type: 'logic', prompt: 'Benefits of POP over OOP?', template: '', solution: 'Works with value types, multiple protocol conformance, retroactive modeling' }
        ]
    },
    "Concurrency (async / await)": {
        content: `<h3>Concurrency (async / await)</h3><p>Swift's modern concurrency model with async/await for writing asynchronous code in a sequential style.</p><h4>Features:</h4><ul><li>async functions</li><li>await keyword</li><li>Task and Task groups</li><li>async let for parallel tasks</li><li>MainActor for UI updates</li></ul><h4>Example:</h4><pre><code>func fetchUser(id: String) async throws -> User {
    let url = URL(string: "https://api.com/users/\\(id)")!
    let (data, _) = try await URLSession.shared.data(from: url)
    return try JSONDecoder().decode(User.self, from: data)
}

// Calling async function
Task {
    do {
        let user = try await fetchUser(id: "123")
        print(user.name)
    } catch {
        print("Error: \\(error)")
    }
}

// Parallel execution
async let user1 = fetchUser(id: "1")
async let user2 = fetchUser(id: "2")
let users = try await [user1, user2]</code></pre>`,
        videos: [
            { title: "Swift Concurrency - WWDC", url: "https://www.youtube.com/watch?v=eX7Z6MaFQUY" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define async function', template: 'func load() ___ -> Data { }', solution: 'func load() async -> Data { }' },
            { id: 2, type: 'output', prompt: 'What does await do?', template: '', solution: 'Suspends execution until async operation completes' },
            { id: 3, type: 'modify', prompt: 'Add async/await', template: 'let data = fetch()', solution: 'let data = await fetch()' },
            { id: 4, type: 'fix', prompt: 'Fix async call', template: 'let x = async fetch()', solution: 'let x = await fetch()' },
            { id: 5, type: 'logic', prompt: 'Benefits of async/await over completion handlers?', template: '', solution: 'Cleaner syntax, better error handling, easier to read sequential code' }
        ]
    },
    "GCD (Grand Central Dispatch)": {
        content: `<h3>GCD (Grand Central Dispatch)</h3><p>Low-level API for managing concurrent operations using dispatch queues.</p><h4>Concepts:</h4><ul><li>Serial and concurrent queues</li><li>Main queue for UI updates</li><li>Quality of Service (QoS)</li><li>Dispatch groups</li><li>Barriers and semaphores</li></ul><h4>Example:</h4><pre><code>// Main queue
DispatchQueue.main.async {
    // Update UI
    label.text = "Updated"
}

// Background queue
DispatchQueue.global(qos: .background).async {
    // Perform task
    let data = loadData()
    
    DispatchQueue.main.async {
        // Update UI with result
        display(data)
    }
}

// Custom queue
let queue = DispatchQueue(label: "com.app.custom")
queue.async {
    print("Task executed")
}</code></pre>`,
        videos: [
            { title: "GCD Tutorial - Brian Advent", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Dispatch to main queue', template: 'DispatchQueue.___.async { }', solution: 'DispatchQueue.main.async { }' },
            { id: 2, type: 'output', prompt: 'When to use main queue?', template: '', solution: 'For all UI updates - UIKit is not thread-safe' },
            { id: 3, type: 'modify', prompt: 'Use background QoS', template: 'DispatchQueue.global().async { }', solution: 'DispatchQueue.global(qos: .background).async { }' },
            { id: 4, type: 'fix', prompt: 'Fix queue syntax', template: 'Queue.main.async { }', solution: 'DispatchQueue.main.async { }' },
            { id: 5, type: 'logic', prompt: 'Difference between serial and concurrent queues?', template: '', solution: 'Serial executes tasks one at a time; concurrent executes multiple tasks simultaneously' }
        ]
    },
    "Value vs Reference Semantics": {
        content: `<h3>Value vs Reference Semantics</h3><p>Understanding the fundamental difference between value types (structs, enums) and reference types (classes) in Swift.</p><h4>Concepts:</h4><ul><li>Value types are copied</li><li>Reference types are shared</li><li>Copy-on-write optimization</li><li>Identity vs equality</li><li>When to use each</li></ul><h4>Example:</h4><pre><code>// Value type (struct)
struct Point {
    var x: Int
    var y: Int
}

var p1 = Point(x: 0, y: 0)
var p2 = p1  // Copy
p2.x = 10
print(p1.x)  // 0 (unchanged)

// Reference type (class)
class Person {
    var name: String
    init(name: String) { self.name = name }
}

let person1 = Person(name: "Alice")
let person2 = person1  // Same reference
person2.name = "Bob"
print(person1.name)  // "Bob" (changed)</code></pre>`,
        videos: [
            { title: "Value vs Reference Types - Paul Hudson", url: "https://www.youtube.com/watch?v=v0K-S01TBF8" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Which is a value type?', template: 'struct or class?', solution: 'struct' },
            { id: 2, type: 'output', prompt: 'What is copy-on-write?', template: '', solution: 'Optimization that delays copying until modification occurs' },
            { id: 3, type: 'modify', prompt: 'Convert to value type', template: 'class Data { }', solution: 'struct Data { }' },
            { id: 4, type: 'fix', prompt: 'Check identity', template: 'if obj1 == obj2 { }', solution: 'if obj1 === obj2 { }' },
            { id: 5, type: 'logic', prompt: 'When to prefer value types?', template: '', solution: 'For data models, thread safety, and when copies should be independent' }
        ]
    },
    "Performance Optimization": {
        content: `<h3>Performance Optimization</h3><p>Techniques and best practices for optimizing Swift code performance.</p><h4>Strategies:</h4><ul><li>Compile-time optimizations</li><li>Algorithm complexity</li><li>Memory management</li><li>Lazy evaluation</li><li>Profiling with Instruments</li></ul><h4>Example:</h4><pre><code>// Use lazy collections
let numbers = 1...1000000
let result = numbers.lazy
    .filter { $0 % 2 == 0 }
    .map { $0 * 2 }
    .prefix(10)  // Only computes first 10

// Avoid unnecessary copying
func process(data: inout [Int]) {
    data.append(42)  // Modifies in-place
}

// Use ContiguousArray for performance
var buffer = ContiguousArray<Int>()

// Compiler optimization attributes
@inline(__always) func fastOperation() {
    // Force inlining
}</code></pre>`,
        videos: [
            { title: "Swift Performance - WWDC", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create lazy sequence', template: 'let seq = arr.___', solution: 'let seq = arr.lazy' },
            { id: 2, type: 'output', prompt: 'What does @inline(__always) do?', template: '', solution: 'Forces compiler to inline function for performance' },
            { id: 3, type: 'modify', prompt: 'Use inout parameter', template: 'func update(arr: [Int]) { }', solution: 'func update(arr: inout [Int]) { }' },
            { id: 4, type: 'fix', prompt: 'Optimize collection', template: 'let x = arr.filter.map', solution: 'let x = arr.lazy.filter.map' },
            { id: 5, type: 'logic', prompt: 'Why use ContiguousArray?', template: '', solution: 'Guarantees contiguous storage for better cache performance' }
        ]
    },
    "SwiftUI Internals": {
        content: `<h3>SwiftUI Internals</h3><p>Understanding how SwiftUI's declarative framework works under the hood.</p><h4>Concepts:</h4><ul><li>View protocol and body</li><li>@State and @Binding</li><li>Property wrappers</li><li>View graph and diffing</li><li>ViewBuilder</li></ul><h4>Example:</h4><pre><code>struct ContentView: View {
    @State private var count = 0
    
    var body: some View {
        VStack {
            Text("Count: \\(count)")
            Button("Increment") {
                count += 1
            }
        }
    }
}

// Custom property wrapper
@propertyWrapper
struct Clamped {
    private var value: Int
    let range: ClosedRange<Int>
    
    var wrappedValue: Int {
        get { value }
        set { value = min(max(newValue, range.lowerBound), range.upperBound) }
    }
    
    init(wrappedValue: Int, _ range: ClosedRange<Int>) {
        self.range = range
        self.value = wrappedValue
    }
}</code></pre>`,
        videos: [
            { title: "SwiftUI Internals - WWDC", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define state variable', template: '___ private var count = 0', solution: '@State private var count = 0' },
            { id: 2, type: 'output', prompt: 'What is a ViewBuilder?', template: '', solution: 'Result builder that constructs views from closures' },
            { id: 3, type: 'modify', prompt: 'Add binding', template: '@State var text: String', solution: '@Binding var text: String' },
            { id: 4, type: 'fix', prompt: 'Fix view protocol', template: 'struct MyView {\n  var body { }\n}', solution: 'struct MyView: View {\n  var body: some View { }\n}' },
            { id: 5, type: 'logic', prompt: 'How does SwiftUI detect changes?', template: '', solution: 'Property wrappers notify views when values change, triggering re-render' }
        ]
    },
    "Combine Framework": {
        content: `<h3>Combine Framework</h3><p>Apple's reactive programming framework for processing asynchronous events over time.</p><h4>Components:</h4><ul><li>Publishers emit values</li><li>Subscribers receive values</li><li>Operators transform streams</li><li>Cancellables manage subscriptions</li><li>Subjects bridge imperative/reactive</li></ul><h4>Example:</h4><pre><code>import Combine

class ViewModel: ObservableObject {
    @Published var searchText = ""
    @Published var results: [String] = []
    private var cancellables = Set<AnyCancellable>()
    
    init() {
        $searchText
            .debounce(for: .milliseconds(300), scheduler: RunLoop.main)
            .removeDuplicates()
            .sink { [weak self] text in
                self?.search(text)
            }
            .store(in: &cancellables)
    }
    
    func search(_ query: String) {
        // Perform search
    }
}</code></pre>`,
        videos: [
            { title: "Combine Framework - WWDC", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create publisher property', template: '___ var value = ""', solution: '@Published var value = ""' },
            { id: 2, type: 'output', prompt: 'What does debounce do?', template: '', solution: 'Delays events until input pauses for specified time' },
            { id: 3, type: 'modify', prompt: 'Add map operator', template: '$text.sink { }', solution: '$text.map { $0.uppercased() }.sink { }' },
            { id: 4, type: 'fix', prompt: 'Fix subscription', template: 'publisher.subscribe { }', solution: 'publisher.sink { }' },
            { id: 5, type: 'logic', prompt: 'Why use Combine?', template: '', solution: 'Handle asynchronous events declaratively with operators for transformation and composition' }
        ]
    },
    "Testing": {
        content: `<h3>Testing in Swift</h3><p>Writing unit tests and UI tests using XCTest framework.</p><h4>Testing Types:</h4><ul><li>Unit tests with XCTest</li><li>UI tests with XCUITest</li><li>Test assertions</li><li>Mocking and dependency injection</li><li>Test-driven development (TDD)</li></ul><h4>Example:</h4><pre><code>import XCTest
@testable import MyApp

class CalculatorTests: XCTestCase {
    var calculator: Calculator!
    
    override func setUp() {
        super.setUp()
        calculator = Calculator()
    }
    
    override func tearDown() {
        calculator = nil
        super.tearDown()
    }
    
    func testAddition() {
        let result = calculator.add(5, 3)
        XCTAssertEqual(result, 8)
    }
    
    func testDivisionByZero() {
        XCTAssertThrowsError(try calculator.divide(10, 0))
    }
}</code></pre>`,
        videos: [
            { title: "XCTest Tutorial - Sean Allen", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Assert values equal', template: 'XCTAssert___(a, b)', solution: 'XCTAssertEqual(a, b)' },
            { id: 2, type: 'output', prompt: 'What is setUp() for?', template: '', solution: 'Initialize test dependencies before each test runs' },
            { id: 3, type: 'modify', prompt: 'Add tearDown', template: 'class Tests: XCTestCase { }', solution: 'class Tests: XCTestCase {\n  override func tearDown() { }\n}' },
            { id: 4, type: 'fix', prompt: 'Fix test method', template: 'func myTest() { }', solution: 'func testMyTest() { }' },
            { id: 5, type: 'logic', prompt: 'Why write unit tests?', template: '', solution: 'Catch bugs early, document behavior, enable safe refactoring' }
        ]
    },
    "Debugging": {
        content: `<h3>Debugging in Swift</h3><p>Tools and techniques for debugging Swift applications effectively.</p><h4>Tools:</h4><ul><li>Xcode debugger (LLDB)</li><li>Breakpoints and watchpoints</li><li>Print debugging</li><li>Memory graph debugger</li><li>Instruments profiling</li></ul><h4>Example:</h4><pre><code>// Debug print
debugPrint("Value: \\(value)")

// Custom debug description
struct User: CustomDebugStringConvertible {
    let id: Int
    let name: String
    
    var debugDescription: String {
        return "User(id: \\(id), name: \\(name))"
    }
}

// Assertions
assert(age > 0, "Age must be positive")
precondition(index < array.count, "Index out of bounds")

// LLDB commands
// po variable - print object
// p variable - print value
// bt - backtrace</code></pre>`,
        videos: [
            { title: "Debugging in Xcode - Apple", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Add assertion', template: '_____(count > 0, "Empty")', solution: 'assert(count > 0, "Empty")' },
            { id: 2, type: 'output', prompt: 'What does po command do?', template: '', solution: 'Print object description in LLDB debugger' },
            { id: 3, type: 'modify', prompt: 'Add debug description', template: 'struct Point { }', solution: 'struct Point: CustomDebugStringConvertible { }' },
            { id: 4, type: 'fix', prompt: 'Fix debug print', template: 'print("Debug: ", value)', solution: 'debugPrint("Debug: ", value)' },
            { id: 5, type: 'logic', prompt: 'When to use assert vs precondition?', template: '', solution: 'assert for debug builds; precondition checked in release builds too' }
        ]
    },
    "Unsafe Swift": {
        content: `<h3>Unsafe Swift</h3><p>Low-level memory manipulation and pointer operations for performance-critical code.</p><h4>Concepts:</h4><ul><li>UnsafePointer types</li><li>Manual memory management</li><li>Bridging with C APIs</li><li>Performance optimization</li><li>Buffer operations</li></ul><h4>Example:</h4><pre><code>// Unsafe pointer
func process(buffer: UnsafeBufferPointer<Int>) {
    for element in buffer {
        print(element)
    }
}

let array = [1, 2, 3, 4, 5]
array.withUnsafeBufferPointer { buffer in
    process(buffer: buffer)
}

// Raw memory
let ptr = UnsafeMutableRawPointer.allocate(
    byteCount: 16,
    alignment: 8
)
defer { ptr.deallocate() }

// Store value
ptr.storeBytes(of: 42, as: Int.self)</code></pre>`,
        videos: [
            { title: "Unsafe Swift - WWDC", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Allocate raw memory', template: 'let ptr = UnsafeMutableRawPointer.___()', solution: 'let ptr = UnsafeMutableRawPointer.allocate()' },
            { id: 2, type: 'output', prompt: 'Why use unsafe code?', template: '', solution: 'Performance optimization and interfacing with C APIs' },
            { id: 3, type: 'modify', prompt: 'Add deallocate', template: 'let ptr = allocate()', solution: 'let ptr = allocate()\ndefer { ptr.deallocate() }' },
            { id: 4, type: 'fix', prompt: 'Fix pointer type', template: 'let ptr: Pointer<Int>', solution: 'let ptr: UnsafePointer<Int>' },
            { id: 5, type: 'logic', prompt: 'Risks of unsafe Swift?', template: '', solution: 'Memory leaks, crashes, undefined behavior if used incorrectly' }
        ]
    },
    "Interoperability (Objective-C)": {
        content: `<h3>Interoperability (Objective-C)</h3><p>Bridging Swift and Objective-C code for compatibility with legacy codebases.</p><h4>Features:</h4><ul><li>@objc attribute</li><li>Bridging headers</li><li>Name translation</li><li>Nullability annotations</li><li>Swift-Objective-C type mapping</li></ul><h4>Example:</h4><pre><code>// Swift class exposed to Objective-C
@objc class DataManager: NSObject {
    @objc var count: Int = 0
    
    @objc func processData(_ data: String) -> Bool {
        return !data.isEmpty
    }
    
    @objc(customInitWithValue:)
    init(value: Int) {
        self.count = value
    }
}

// Optional in Objective-C
@objc class User: NSObject {
    @objc var name: String
    @objc var email: String?  // Optional
    
    @objc init(name: String) {
        self.name = name
    }
}</code></pre>`,
        videos: [
            { title: "Swift Objective-C Interop - Apple", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Expose to Objective-C', template: '_____ class MyClass { }', solution: '@objc class MyClass: NSObject { }' },
            { id: 2, type: 'output', prompt: 'What is a bridging header?', template: '', solution: 'File that imports Objective-C code into Swift project' },
            { id: 3, type: 'modify', prompt: 'Add @objc attribute', template: 'func method() { }', solution: '@objc func method() { }' },
            { id: 4, type: 'fix', prompt: 'Fix Objective-C exposure', template: '@objc class Test { }', solution: '@objc class Test: NSObject { }' },
            { id: 5, type: 'logic', prompt: 'Why inherit from NSObject?', template: '', solution: 'Required for Objective-C runtime features and @objc compatibility' }
        ]
    },
    "Swift Compiler Internals": {
        content: `<h3>Swift Compiler Internals</h3><p>Understanding how the Swift compiler works, from parsing to code generation.</p><h4>Phases:</h4><ul><li>Parsing and AST generation</li><li>Semantic analysis</li><li>SIL (Swift Intermediate Language)</li><li>IR generation (LLVM)</li><li>Optimization passes</li></ul><h4>Example:</h4><pre><code>// Compiler optimizations
// - Inlining
// - Dead code elimination
// - Copy propagation
// - Escape analysis

// View SIL
// swiftc -emit-sil file.swift

// Whole module optimization
// swiftc -whole-module-optimization

// Optimization levels
// -Onone - No optimization (debug)
// -O     - Optimize for speed
// -Osize - Optimize for size

// Custom optimization attributes
@_transparent  // Always inline
@_effects(readonly)  // No side effects
func pureFunction(x: Int) -> Int {
    return x * 2
}</code></pre>`,
        videos: [
            { title: "Swift Compiler Architecture - WWDC", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'What is SIL?', template: '', solution: 'Swift Intermediate Language' },
            { id: 2, type: 'output', prompt: 'What does whole-module optimization do?', template: '', solution: 'Optimizes across entire module for better inlining and performance' },
            { id: 3, type: 'modify', prompt: 'Add transparent attribute', template: 'func inline() { }', solution: '@_transparent func inline() { }' },
            { id: 4, type: 'fix', prompt: 'Fix optimization flag', template: 'swiftc -optimize file.swift', solution: 'swiftc -O file.swift' },
            { id: 5, type: 'logic', prompt: 'Why understand compiler internals?', template: '', solution: 'Write more efficient code, debug compiler errors, contribute to Swift development' }
        ]
    }
};

// Export all content
export { SWIFT_BEGINNER_CONTENT, SWIFT_INTERMEDIATE_CONTENT, SWIFT_ADVANCED_CONTENT };
