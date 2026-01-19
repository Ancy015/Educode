// Ruby Curriculum Content - 38 Topics Total

const RUBY_BEGINNER_CONTENT = {
    "Introduction to Ruby": {
        content: `<h3>Introduction to Ruby</h3><p>Ruby is a dynamic, interpreted language designed for programmer happiness and productivity. Created by Yukihiro Matsumoto in 1995, it emphasizes simplicity and readability.</p><h4>Key Features:</h4><ul><li>Everything is an object</li><li>Elegant syntax inspired by natural language</li><li>Duck typing and dynamic dispatch</li><li>Powerful metaprogramming capabilities</li></ul><h4>Example:</h4><pre><code>puts "Hello, Ruby World!"
# Simple and expressive
5.times { puts "Ruby rocks!" }</code></pre>`,
        videos: [
            { title: "Ruby in 100 Seconds - Fireship", url: "https://www.youtube.com/watch?v=UYm0kfnRTJk" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Complete the puts statement', template: '___("Hello Ruby")', solution: 'puts("Hello Ruby")' },
            { id: 2, type: 'output', prompt: 'What does 3.times { puts "Hi" } output?', template: '', solution: 'Hi (printed 3 times)' },
            { id: 3, type: 'modify', prompt: 'Change to print 5 times', template: '3.times { puts "Hi" }', solution: '5.times { puts "Hi" }' },
            { id: 4, type: 'fix', prompt: 'Fix the syntax error', template: 'Print "Hello"', solution: 'puts "Hello"' },
            { id: 5, type: 'logic', prompt: 'Why is Ruby called a programmer-friendly language?', template: '', solution: 'Natural syntax, reads like English, focuses on developer happiness' }
        ]
    },
    "Ruby Installation & Setup": {
        content: `<h3>Ruby Installation & Setup</h3><p>Setting up Ruby development environment with version managers and essential tools.</p><h4>Installation Methods:</h4><ul><li>rbenv - Lightweight version manager</li><li>RVM - Ruby Version Manager</li><li>Direct installation from ruby-lang.org</li></ul><h4>Example - Check Installation:</h4><pre><code>ruby --version
# => ruby 3.2.0

irb
# Interactive Ruby shell</code></pre>`,
        videos: [
            { title: "Ruby Installation Guide - Traversy Media", url: "https://www.youtube.com/watch?v=t_ispmWmdjY" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Command to check Ruby version', template: 'ruby ______', solution: 'ruby --version' },
            { id: 2, type: 'output', prompt: 'What is IRB?', template: '', solution: 'Interactive Ruby - REPL environment' },
            { id: 3, type: 'modify', prompt: 'Add .rb extension', template: 'script', solution: 'script.rb' },
            { id: 4, type: 'fix', prompt: 'Correct the run command', template: 'ruby script', solution: 'ruby script.rb' },
            { id: 5, type: 'logic', prompt: 'Why use version managers like rbenv?', template: '', solution: 'Manage multiple Ruby versions per project' }
        ]
    },
    "Ruby Program Structure": {
        content: `<h3>Ruby Program Structure</h3><p>Understanding the basic structure of Ruby programs, including comments, statements, and code organization.</p><h4>Structure Elements:</h4><ul><li>No semicolons required (optional)</li><li>Indentation for readability (2 spaces convention)</li><li>Comments with # and =begin/=end</li><li>Implicit return values</li></ul><h4>Example:</h4><pre><code># Single line comment
=begin
Multi-line comment
Block syntax
=end

def greet(name)
  "Hello, #{name}!"  # Implicit return
end

puts greet("Ruby")</code></pre>`,
        videos: [
            { title: "Ruby Basics - FreeCodeCamp", url: "https://www.youtube.com/watch?v=t_ispmWmdjY" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Write a single-line comment', template: '____ This is a comment', solution: '# This is a comment' },
            { id: 2, type: 'output', prompt: 'What does a method return if no explicit return?', template: '', solution: 'Last evaluated expression' },
            { id: 3, type: 'modify', prompt: 'Add explicit return', template: 'def add(a, b)\n  a + b\nend', solution: 'def add(a, b)\n  return a + b\nend' },
            { id: 4, type: 'fix', prompt: 'Fix the multi-line comment', template: '/* comment */', solution: '=begin\ncomment\n=end' },
            { id: 5, type: 'logic', prompt: 'Why are semicolons optional in Ruby?', template: '', solution: 'Ruby uses newlines as statement terminators' }
        ]
    },
    "Variables": {
        content: `<h3>Variables in Ruby</h3><p>Ruby supports local, instance, class, and global variables with different scoping rules.</p><h4>Variable Types:</h4><ul><li>Local: lowercase or underscore (name, user_age)</li><li>Instance: @variable (@name)</li><li>Class: @@variable (@@count)</li><li>Global: $variable ($debug)</li></ul><h4>Example:</h4><pre><code>name = "Alice"        # Local
@age = 25             # Instance
@@total_users = 100   # Class
$app_version = "1.0"  # Global

# Multiple assignment
x, y, z = 1, 2, 3</code></pre>`,
        videos: [
            { title: "Ruby Variables Explained - Programming with Mosh", url: "https://www.youtube.com/watch?v=WJlfVjGt6Hg" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create an instance variable for email', template: '____email = "test@example.com"', solution: '@email = "test@example.com"' },
            { id: 2, type: 'output', prompt: 'What scope does @@count have?', template: '', solution: 'Class variable - shared across all instances' },
            { id: 3, type: 'modify', prompt: 'Convert to global variable', template: 'config = "prod"', solution: '$config = "prod"' },
            { id: 4, type: 'fix', prompt: 'Fix the variable naming', template: '2name = "Bob"', solution: 'name2 = "Bob"' },
            { id: 5, type: 'logic', prompt: 'When should you use global variables?', template: '', solution: 'Rarely - only for truly global state, prefer constants or class variables' }
        ]
    },
    "Data Types": {
        content: `<h3>Ruby Data Types</h3><p>Ruby has dynamic typing with several built-in data types including numbers, strings, symbols, arrays, and hashes.</p><h4>Common Types:</h4><ul><li>Numbers: Integer, Float</li><li>Strings: "text" or 'text'</li><li>Symbols: :symbol</li><li>Booleans: true, false, nil</li><li>Arrays: [1, 2, 3]</li><li>Hashes: {key: value}</li></ul><h4>Example:</h4><pre><code>age = 25              # Integer
price = 19.99         # Float
name = "Ruby"         # String
active = true         # Boolean
status = :pending     # Symbol
numbers = [1, 2, 3]   # Array
user = {name: "Alice", age: 30}  # Hash</code></pre>`,
        videos: [
            { title: "Ruby Data Types - Codecademy", url: "https://www.youtube.com/watch?v=t_ispmWmdjY" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create a hash with name and age', template: 'person = {____}', solution: 'person = {name: "Bob", age: 25}' },
            { id: 2, type: 'output', prompt: 'What is the difference between :name and "name"?', template: '', solution: 'Symbol vs String - symbols are immutable and more memory efficient' },
            { id: 3, type: 'modify', prompt: 'Convert to symbol', template: 'status = "active"', solution: 'status = :active' },
            { id: 4, type: 'fix', prompt: 'Fix the array syntax', template: 'nums = (1, 2, 3)', solution: 'nums = [1, 2, 3]' },
            { id: 5, type: 'logic', prompt: 'Why use symbols over strings for hash keys?', template: '', solution: 'Symbols are immutable, use less memory, and faster for lookups' }
        ]
    },
    "Operators": {
        content: `<h3>Ruby Operators</h3><p>Ruby provides arithmetic, comparison, logical, and special operators for various operations.</p><h4>Operator Types:</h4><ul><li>Arithmetic: +, -, *, /, %, **</li><li>Comparison: ==, !=, <, >, <=, >=, <=></li><li>Logical: &&, ||, !, and, or, not</li><li>Assignment: =, +=, -=, *=, /=</li><li>Range: .., ...</li></ul><h4>Example:</h4><pre><code>a = 10 + 5        # 15
b = 10 ** 2       # 100 (exponent)
c = (1..5)        # Range 1 to 5
d = (1...5)       # Range 1 to 4 (exclusive)
e = 5 <=> 3       # 1 (spaceship operator)</code></pre>`,
        videos: [
            { title: "Ruby Operators Tutorial - edureka!", url: "https://www.youtube.com/watch?v=8S7GiIxJzZY" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Calculate 2 to the power of 8', template: 'result = 2 ____ 8', solution: 'result = 2 ** 8' },
            { id: 2, type: 'output', prompt: 'What does 5 <=> 3 return?', template: '', solution: '1 (left is greater)' },
            { id: 3, type: 'modify', prompt: 'Make range exclusive', template: '(1..10)', solution: '(1...10)' },
            { id: 4, type: 'fix', prompt: 'Fix the logical operator', template: 'if x > 5 & y < 10', solution: 'if x > 5 && y < 10' },
            { id: 5, type: 'logic', prompt: 'What is the spaceship operator used for?', template: '', solution: 'Comparison returning -1, 0, or 1 (used in sorting)' }
        ]
    },
    "Control Statements": {
        content: `<h3>Control Statements in Ruby</h3><p>Ruby provides if/elsif/else, unless, case, and ternary operators for conditional logic.</p><h4>Control Structures:</h4><ul><li>if/elsif/else</li><li>unless (opposite of if)</li><li>case/when</li><li>Ternary: condition ? true_val : false_val</li><li>Statement modifiers: puts "Hi" if true</li></ul><h4>Example:</h4><pre><code>age = 20

if age >= 18
  puts "Adult"
elsif age >= 13
  puts "Teen"
else
  puts "Child"
end

puts "Valid" if age > 0  # Modifier

status = age >= 18 ? "Adult" : "Minor"</code></pre>`,
        videos: [
            { title: "Ruby Conditionals - The Odin Project", url: "https://www.youtube.com/watch?v=nhs5dyoEz_U" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Write unless statement', template: '______ x == 0\n  puts "Not zero"\nend', solution: 'unless x == 0\n  puts "Not zero"\nend' },
            { id: 2, type: 'output', prompt: 'What does unless do?', template: '', solution: 'Executes block if condition is false (opposite of if)' },
            { id: 3, type: 'modify', prompt: 'Convert to ternary operator', template: 'if x > 0\n  "positive"\nelse\n  "negative"\nend', solution: 'x > 0 ? "positive" : "negative"' },
            { id: 4, type: 'fix', prompt: 'Fix the case statement', template: 'case x\nwhen 1 then "one"\nwhen 2 then "two"', solution: 'case x\nwhen 1 then "one"\nwhen 2 then "two"\nend' },
            { id: 5, type: 'logic', prompt: 'When to use unless vs if?', template: '', solution: 'Use unless for negative conditions to improve readability' }
        ]
    },
    "Loops": {
        content: `<h3>Loops in Ruby</h3><p>Ruby offers multiple ways to iterate: while, until, for, loop, and enumerable methods like each, times, upto.</p><h4>Loop Types:</h4><ul><li>while loop</li><li>until loop</li><li>for..in loop</li><li>loop do...end</li><li>Integer methods: times, upto, downto</li><li>break and next keywords</li></ul><h4>Example:</h4><pre><code>5.times { |i| puts i }

(1..5).each { |n| puts n }

loop do
  puts "Enter 'quit' to exit"
  input = gets.chomp
  break if input == 'quit'
end

i = 0
while i < 5
  puts i
  i += 1
end</code></pre>`,
        videos: [
            { title: "Ruby Loops Explained - Launch School", url: "https://www.youtube.com/watch?v=JLoOC83xJjA" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Loop 10 times using times method', template: '10._____ { |i| puts i }', solution: '10.times { |i| puts i }' },
            { id: 2, type: 'output', prompt: 'What does until do?', template: '', solution: 'Loops while condition is false (opposite of while)' },
            { id: 3, type: 'modify', prompt: 'Change to use upto', template: '(1..5).each { |n| puts n }', solution: '1.upto(5) { |n| puts n }' },
            { id: 4, type: 'fix', prompt: 'Add break condition', template: 'loop do\n  puts "Hello"\nend', solution: 'loop do\n  puts "Hello"\n  break\nend' },
            { id: 5, type: 'logic', prompt: 'Difference between break and next?', template: '', solution: 'break exits loop, next skips to next iteration' }
        ]
    },
    "Methods": {
        content: `<h3>Methods in Ruby</h3><p>Methods in Ruby are defined with def keyword and can have default parameters, variable arguments, and keyword arguments.</p><h4>Method Features:</h4><ul><li>def keyword for definition</li><li>Implicit return (last expression)</li><li>Default parameters</li><li>Variable arguments (*args)</li><li>Keyword arguments (key: value)</li><li>Bang methods (!) modify in place</li><li>Query methods (?) return boolean</li></ul><h4>Example:</h4><pre><code>def greet(name, greeting = "Hello")
  "#{greeting}, #{name}!"
end

def sum(*numbers)
  numbers.reduce(0, :+)
end

def create_user(name:, email:, age: 18)
  {name: name, email: email, age: age}
end</code></pre>`,
        videos: [
            { title: "Ruby Methods - Codecademy", url: "https://www.youtube.com/watch?v=nSg36JWNxuE" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define method with default parameter', template: 'def greet(name, msg = ______)\n  "#{msg} #{name}"\nend', solution: 'def greet(name, msg = "Hello")\n  "#{msg} #{name}"\nend' },
            { id: 2, type: 'output', prompt: 'What does *args do?', template: '', solution: 'Collects variable number of arguments into an array' },
            { id: 3, type: 'modify', prompt: 'Add keyword argument', template: 'def user(name, email)', solution: 'def user(name:, email:)' },
            { id: 4, type: 'fix', prompt: 'Add implicit return', template: 'def double(x)\n  x * 2\n  return\nend', solution: 'def double(x)\n  x * 2\nend' },
            { id: 5, type: 'logic', prompt: 'What convention do bang methods (!) follow?', template: '', solution: 'They modify the object in place (destructive methods)' }
        ]
    },
    "Arrays": {
        content: `<h3>Arrays in Ruby</h3><p>Arrays are ordered, integer-indexed collections that can hold objects of any type.</p><h4>Array Features:</h4><ul><li>Zero-indexed</li><li>Dynamic size</li><li>Mixed types allowed</li><li>Rich set of methods: push, pop, shift, unshift, map, select, etc.</li><li>Negative indexing</li></ul><h4>Example:</h4><pre><code>nums = [1, 2, 3, 4, 5]
nums << 6           # Append
nums.push(7)        # Append
first = nums[0]     # Access
last = nums[-1]     # Negative index

# Enumerable methods
doubled = nums.map { |n| n * 2 }
evens = nums.select { |n| n.even? }</code></pre>`,
        videos: [
            { title: "Ruby Arrays - Programming with Mosh", url: "https://www.youtube.com/watch?v=WJlfVjGt6Hg" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Append item to array', template: 'arr = [1, 2, 3]\narr ____ 4', solution: 'arr = [1, 2, 3]\narr << 4' },
            { id: 2, type: 'output', prompt: 'What does arr[-1] return?', template: '', solution: 'Last element of the array' },
            { id: 3, type: 'modify', prompt: 'Use map to square numbers', template: '[1, 2, 3].each { |n| n * n }', solution: '[1, 2, 3].map { |n| n * n }' },
            { id: 4, type: 'fix', prompt: 'Fix the array access', template: 'arr[arr.length]', solution: 'arr[arr.length - 1] or arr[-1]' },
            { id: 5, type: 'logic', prompt: 'Difference between map and each?', template: '', solution: 'map returns new array with transformed values, each returns original array' }
        ]
    },
    "Hashes": {
        content: `<h3>Hashes in Ruby</h3><p>Hashes are key-value pairs (dictionaries) that provide fast lookups and flexible data storage.</p><h4>Hash Features:</h4><ul><li>Key-value pairs</li><li>Symbol or string keys</li><li>Hash rocket (=>) or colon syntax</li><li>Methods: keys, values, has_key?, merge, select, etc.</li></ul><h4>Example:</h4><pre><code># Different syntax styles
user = { "name" => "Alice", "age" => 30 }
user2 = { name: "Bob", age: 25 }

# Access
puts user2[:name]

# Iteration
user2.each do |key, value|
  puts "#{key}: #{value}"
end

# Methods
user2.merge({ email: "bob@example.com" })</code></pre>`,
        videos: [
            { title: "Ruby Hashes - The Odin Project", url: "https://www.youtube.com/watch?v=nhs5dyoEz_U" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create hash with symbol keys', template: 'person = { ____ }', solution: 'person = { name: "Alice", age: 30 }' },
            { id: 2, type: 'output', prompt: 'What does hash.keys return?', template: '', solution: 'Array of all keys in the hash' },
            { id: 3, type: 'modify', prompt: 'Convert to symbol syntax', template: '{ "name" => "Bob" }', solution: '{ name: "Bob" }' },
            { id: 4, type: 'fix', prompt: 'Fix hash access', template: 'user["name"]  # symbol key hash', solution: 'user[:name]' },
            { id: 5, type: 'logic', prompt: 'When to use symbols vs strings as hash keys?', template: '', solution: 'Use symbols for fixed/internal keys (faster), strings for dynamic/user input' }
        ]
    },
    "Strings": {
        content: `<h3>Strings in Ruby</h3><p>Strings are mutable sequences of characters with powerful manipulation methods and interpolation support.</p><h4>String Features:</h4><ul><li>Single quotes ('') vs double quotes ("")</li><li>String interpolation with #{}</li><li>Methods: upcase, downcase, reverse, split, gsub, etc.</li><li>Multi-line strings with heredoc</li></ul><h4>Example:</h4><pre><code>name = "Ruby"
greeting = "Hello, #{name}!"  # Interpolation
caps = name.upcase            # "RUBY"
reversed = name.reverse       # "ybuR"

# Multi-line string
text = <<~HEREDOC
  This is a
  multi-line string
HEREDOC

# Methods
"hello world".split           # ["hello", "world"]
"ruby".gsub("r", "R")        # "Ruby"</code></pre>`,
        videos: [
            { title: "Ruby Strings - FreeCodeCamp", url: "https://www.youtube.com/watch?v=t_ispmWmdjY" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Use string interpolation', template: 'age = 25\ntext = "I am ______ years old"', solution: 'age = 25\ntext = "I am #{age} years old"' },
            { id: 2, type: 'output', prompt: 'What is the difference between \'\' and ""?', template: '', solution: 'Double quotes allow interpolation and escape sequences, single quotes are literal' },
            { id: 3, type: 'modify', prompt: 'Replace substring', template: '"hello".upcase', solution: '"hello".gsub("h", "H")' },
            { id: 4, type: 'fix', prompt: 'Fix interpolation', template: "'Name: #{name}'"', solution: '"Name: #{name}"' },
            { id: 5, type: 'logic', prompt: 'Are Ruby strings mutable?', template: '', solution: 'Yes - strings can be modified in place with bang methods' }
        ]
    },
    "Symbols": {
        content: `<h3>Symbols in Ruby</h3><p>Symbols are immutable, reusable identifiers that are more memory-efficient than strings for representing names and keys.</p><h4>Symbol Features:</h4><ul><li>Immutable (cannot be changed)</li><li>Unique (same symbol always same object)</li><li>Prefixed with colon (:symbol)</li><li>Faster comparison than strings</li><li>Common use: hash keys, method names, constants</li></ul><h4>Example:</h4><pre><code># Symbol creation
status = :pending
direction = :north

# Hash with symbol keys
user = { name: "Alice", role: :admin }

# Symbol to string conversion
:hello.to_s  # "hello"
"hello".to_sym  # :hello

# Same symbol is same object
:name.object_id == :name.object_id  # true
"name".object_id == "name".object_id  # false</code></pre>`,
        videos: [
            { title: "Ruby Symbols Explained - Launch School", url: "https://www.youtube.com/watch?v=JLoOC83xJjA" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create a symbol for status', template: 'status = ______', solution: 'status = :pending' },
            { id: 2, type: 'output', prompt: 'Are symbols mutable or immutable?', template: '', solution: 'Immutable - cannot be changed after creation' },
            { id: 3, type: 'modify', prompt: 'Convert string to symbol', template: '"active"', solution: '"active".to_sym or :active' },
            { id: 4, type: 'fix', prompt: 'Fix the symbol syntax', template: 'role = "admin:"', solution: 'role = :admin' },
            { id: 5, type: 'logic', prompt: 'Why use symbols instead of strings?', template: '', solution: 'Symbols are immutable, use less memory, faster for comparisons/lookups' }
        ]
    }
};

const RUBY_INTERMEDIATE_CONTENT = {
    "Object-Oriented Programming": {
        content: `<h3>Object-Oriented Programming in Ruby</h3><p>Ruby is a pure OOP language where everything is an object, including primitives like numbers and booleans.</p><h4>OOP Concepts:</h4><ul><li>Everything is an object</li><li>Classes and instances</li><li>Encapsulation with private/protected/public</li><li>Inheritance with <</li><li>Modules for mixins</li></ul><h4>Example:</h4><pre><code>class Animal
  def initialize(name)
    @name = name
  end
  
  def speak
    "#{@name} makes a sound"
  end
end

dog = Animal.new("Buddy")
puts dog.speak</code></pre>`,
        videos: [
            { title: "Ruby OOP - Codecademy", url: "https://www.youtube.com/watch?v=Qkrb8aMG6bo" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define a class with initialize', template: 'class User\n  def ______(name)\n    @name = name\n  end\nend', solution: 'class User\n  def initialize(name)\n    @name = name\n  end\nend' },
            { id: 2, type: 'output', prompt: 'What does initialize method do?', template: '', solution: 'Constructor method called when creating new instance' },
            { id: 3, type: 'modify', prompt: 'Add attr_accessor', template: 'class User\n  def initialize(name)\n    @name = name\n  end\nend', solution: 'class User\n  attr_accessor :name\n  def initialize(name)\n    @name = name\n  end\nend' },
            { id: 4, type: 'fix', prompt: 'Fix instance variable', template: 'class User\n  def initialize(name)\n    name = name\n  end\nend', solution: 'class User\n  def initialize(name)\n    @name = name\n  end\nend' },
            { id: 5, type: 'logic', prompt: 'Why is Ruby considered pure OOP?', template: '', solution: 'Everything is an object, even primitives like 1, true, nil' }
        ]
    },
    "Classes & Objects": {
        content: `<h3>Classes & Objects</h3><p>Classes define blueprints for objects with attributes (instance variables) and behaviors (methods).</p><h4>Class Features:</h4><ul><li>attr_reader, attr_writer, attr_accessor</li><li>Class variables (@@var)</li><li>Class methods (self.method)</li><li>Instance methods</li><li>Access control: private, protected, public</li></ul><h4>Example:</h4><pre><code>class Person
  attr_accessor :name, :age
  @@count = 0
  
  def initialize(name, age)
    @name = name
    @age = age
    @@count += 1
  end
  
  def self.total_count
    @@count
  end
  
  private
  
  def secret_method
    "Secret"
  end
end</code></pre>`,
        videos: [
            { title: "Ruby Classes and Objects - Programming with Mosh", url: "https://www.youtube.com/watch?v=WJlfVjGt6Hg" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create class method', template: 'def ____.count\n  @@count\nend', solution: 'def self.count\n  @@count\nend' },
            { id: 2, type: 'output', prompt: 'What does attr_accessor do?', template: '', solution: 'Creates getter and setter methods for instance variable' },
            { id: 3, type: 'modify', prompt: 'Make method private', template: 'def helper\n  "help"\nend', solution: 'private\n\ndef helper\n  "help"\nend' },
            { id: 4, type: 'fix', prompt: 'Fix class variable', template: 'class User\n  @count = 0\nend', solution: 'class User\n  @@count = 0\nend' },
            { id: 5, type: 'logic', prompt: 'Difference between attr_reader and attr_accessor?', template: '', solution: 'attr_reader creates only getter, attr_accessor creates both getter and setter' }
        ]
    },
    "Modules & Mixins": {
        content: `<h3>Modules & Mixins</h3><p>Modules provide namespacing and mixins for code reuse without multiple inheritance.</p><h4>Module Features:</h4><ul><li>Namespacing to avoid collisions</li><li>Mixins with include (instance methods)</li><li>Mixins with extend (class methods)</li><li>Cannot instantiate modules</li><li>Module methods with self</li></ul><h4>Example:</h4><pre><code>module Greetable
  def greet
    "Hello from #{self.class}"
  end
end

class Person
  include Greetable
end

person = Person.new
puts person.greet  # "Hello from Person"

module Math
  PI = 3.14159
  
  def self.circle_area(radius)
    PI * radius ** 2
  end
end</code></pre>`,
        videos: [
            { title: "Ruby Modules and Mixins - The Odin Project", url: "https://www.youtube.com/watch?v=nhs5dyoEz_U" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Include module in class', template: 'class User\n  ______ Authenticatable\nend', solution: 'class User\n  include Authenticatable\nend' },
            { id: 2, type: 'output', prompt: 'What does include do?', template: '', solution: 'Adds module methods as instance methods' },
            { id: 3, type: 'modify', prompt: 'Use extend instead', template: 'class User\n  include Helper\nend', solution: 'class User\n  extend Helper\nend' },
            { id: 4, type: 'fix', prompt: 'Fix module method', template: 'module Math\n  def pi\n    3.14\n  end\nend', solution: 'module Math\n  def self.pi\n    3.14\n  end\nend' },
            { id: 5, type: 'logic', prompt: 'Difference between include and extend?', template: '', solution: 'include adds instance methods, extend adds class methods' }
        ]
    },
    "Inheritance": {
        content: `<h3>Inheritance in Ruby</h3><p>Ruby supports single inheritance where a class can inherit from one parent class using the < operator.</p><h4>Inheritance Features:</h4><ul><li>Single inheritance with <</li><li>super keyword to call parent methods</li><li>Method overriding</li><li>All classes inherit from Object</li><li>Multiple behaviors via modules</li></ul><h4>Example:</h4><pre><code>class Animal
  def initialize(name)
    @name = name
  end
  
  def speak
    "Some sound"
  end
end

class Dog < Animal
  def speak
    super + " - Woof!"
  end
  
  def fetch
    "#{@name} is fetching!"
  end
end

dog = Dog.new("Buddy")
puts dog.speak  # "Some sound - Woof!"</code></pre>`,
        videos: [
            { title: "Ruby Inheritance - Launch School", url: "https://www.youtube.com/watch?v=JLoOC83xJjA" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create child class', template: 'class Dog ____ Animal\nend', solution: 'class Dog < Animal\nend' },
            { id: 2, type: 'output', prompt: 'What does super do?', template: '', solution: 'Calls the parent class method with same name' },
            { id: 3, type: 'modify', prompt: 'Add super call', template: 'def speak\n  "Woof"\nend', solution: 'def speak\n  super + " Woof"\nend' },
            { id: 4, type: 'fix', prompt: 'Fix inheritance syntax', template: 'class Dog extends Animal\nend', solution: 'class Dog < Animal\nend' },
            { id: 5, type: 'logic', prompt: 'Can Ruby have multiple inheritance?', template: '', solution: 'No - single inheritance only, use modules for multiple behaviors' }
        ]
    },
    "Polymorphism": {
        content: `<h3>Polymorphism in Ruby</h3><p>Polymorphism allows objects of different types to respond to the same message (duck typing).</p><h4>Polymorphic Patterns:</h4><ul><li>Duck typing (if it quacks like a duck...)</li><li>Method overriding</li><li>Interface through modules</li><li>Respond_to? for capability checking</li></ul><h4>Example:</h4><pre><code>class Dog
  def speak
    "Woof!"
  end
end

class Cat
  def speak
    "Meow!"
  end
end

animals = [Dog.new, Cat.new]
animals.each { |animal| puts animal.speak }

# Duck typing
def make_it_speak(animal)
  animal.speak if animal.respond_to?(:speak)
end</code></pre>`,
        videos: [
            { title: "Ruby Polymorphism - Codecademy", url: "https://www.youtube.com/watch?v=Qkrb8aMG6bo" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Check if object responds to method', template: 'obj.______(:save)', solution: 'obj.respond_to?(:save)' },
            { id: 2, type: 'output', prompt: 'What is duck typing?', template: '', solution: 'If object behaves like expected type, treat it as that type' },
            { id: 3, type: 'modify', prompt: 'Add respond_to check', template: 'obj.save', solution: 'obj.save if obj.respond_to?(:save)' },
            { id: 4, type: 'fix', prompt: 'Fix polymorphic call', template: 'animals.each { |a| a.makeSound }', solution: 'animals.each { |a| a.speak }' },
            { id: 5, type: 'logic', prompt: 'Why is duck typing useful?', template: '', solution: 'Allows flexibility without strict type hierarchies, focus on behavior not type' }
        ]
    },
    "Blocks": {
        content: `<h3>Blocks in Ruby</h3><p>Blocks are anonymous chunks of code passed to methods, enclosed in {} or do...end.</p><h4>Block Features:</h4><ul><li>Enclosed in {} (single line) or do...end (multi-line)</li><li>Passed to methods with yield</li><li>Block parameters with |param|</li><li>block_given? to check presence</li><li>Can capture with &block</li></ul><h4>Example:</h4><pre><code># Passing blocks
[1, 2, 3].each { |n| puts n }

[1, 2, 3].map do |n|
  n * 2
end

# Yielding to blocks
def greet
  puts "Before yield"
  yield if block_given?
  puts "After yield"
end

greet { puts "Inside block" }</code></pre>`,
        videos: [
            { title: "Ruby Blocks - FreeCodeCamp", url: "https://www.youtube.com/watch?v=t_ispmWmdjY" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Yield to block', template: 'def run\n  ______ if block_given?\nend', solution: 'def run\n  yield if block_given?\nend' },
            { id: 2, type: 'output', prompt: 'What does yield do?', template: '', solution: 'Executes the block passed to the method' },
            { id: 3, type: 'modify', prompt: 'Convert to do...end', template: '[1,2,3].each { |n| puts n }', solution: '[1,2,3].each do |n|\n  puts n\nend' },
            { id: 4, type: 'fix', prompt: 'Add block parameter', template: 'yield', solution: 'yield(value)' },
            { id: 5, type: 'logic', prompt: 'When to use {} vs do...end?', template: '', solution: '{} for single-line blocks, do...end for multi-line blocks' }
        ]
    },
    "Procs & Lambdas": {
        content: `<h3>Procs & Lambdas</h3><p>Procs and lambdas are objects that encapsulate blocks of code for reuse and passing around.</p><h4>Proc vs Lambda:</h4><ul><li>Proc: Proc.new { } or proc { }</li><li>Lambda: lambda { } or -> { }</li><li>Lambda checks argument count strictly</li><li>Lambda return exits lambda, Proc return exits method</li><li>Call with .call() or []</li></ul><h4>Example:</h4><pre><code># Proc
my_proc = Proc.new { |x| x * 2 }
my_proc.call(5)  # 10

# Lambda
my_lambda = lambda { |x| x * 2 }
my_lambda = ->(x) { x * 2 }  # Stabby lambda
my_lambda.call(5)  # 10

# Differences
def proc_return
  my_proc = Proc.new { return "from proc" }
  my_proc.call
  "after proc"  # Never reached
end

def lambda_return
  my_lambda = lambda { return "from lambda" }
  my_lambda.call
  "after lambda"  # This executes
end</code></pre>`,
        videos: [
            { title: "Ruby Procs and Lambdas - Launch School", url: "https://www.youtube.com/watch?v=JLoOC83xJjA" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create a lambda', template: 'double = ______ { |x| x * 2 }', solution: 'double = lambda { |x| x * 2 }' },
            { id: 2, type: 'output', prompt: 'What is stabby lambda syntax?', template: '', solution: '->(params) { code }' },
            { id: 3, type: 'modify', prompt: 'Convert to stabby lambda', template: 'lambda { |x| x + 1 }', solution: '->(x) { x + 1 }' },
            { id: 4, type: 'fix', prompt: 'Call the proc', template: 'my_proc = Proc.new { puts "Hi" }\nmy_proc', solution: 'my_proc = Proc.new { puts "Hi" }\nmy_proc.call' },
            { id: 5, type: 'logic', prompt: 'Key difference between Proc and Lambda?', template: '', solution: 'Lambda checks arguments strictly and return behaves differently' }
        ]
    },
    "Exception Handling": {
        content: `<h3>Exception Handling</h3><p>Ruby uses begin/rescue/ensure/end blocks to handle errors gracefully.</p><h4>Exception Features:</h4><ul><li>begin/rescue/end structure</li><li>Multiple rescue clauses</li><li>ensure always executes</li><li>retry to retry failed code</li><li>raise to throw exceptions</li><li>Custom exception classes</li></ul><h4>Example:</h4><pre><code>begin
  result = 10 / 0
rescue ZeroDivisionError => e
  puts "Error: #{e.message}"
rescue StandardError => e
  puts "Other error: #{e}"
ensure
  puts "This always runs"
end

# Custom exception
class CustomError < StandardError
end

raise CustomError, "Something went wrong"</code></pre>`,
        videos: [
            { title: "Ruby Exception Handling - edureka!", url: "https://www.youtube.com/watch?v=8S7GiIxJzZY" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Rescue specific exception', template: 'begin\n  code\n______ ArgumentError\n  handle\nend', solution: 'begin\n  code\nrescue ArgumentError\n  handle\nend' },
            { id: 2, type: 'output', prompt: 'What does ensure do?', template: '', solution: 'Executes code regardless of whether exception occurred' },
            { id: 3, type: 'modify', prompt: 'Add ensure clause', template: 'begin\n  code\nrescue\n  handle\nend', solution: 'begin\n  code\nrescue\n  handle\nensure\n  cleanup\nend' },
            { id: 4, type: 'fix', prompt: 'Fix exception raising', template: 'throw CustomError', solution: 'raise CustomError' },
            { id: 5, type: 'logic', prompt: 'When to use retry?', template: '', solution: 'To retry failed operation (e.g., network request) after fixing issue' }
        ]
    },
    "File Handling": {
        content: `<h3>File Handling</h3><p>Ruby provides robust file I/O operations for reading, writing, and manipulating files.</p><h4>File Operations:</h4><ul><li>File.open with modes (r, w, a, r+, w+, a+)</li><li>File.read for reading entire file</li><li>File.readlines for array of lines</li><li>Block form auto-closes file</li><li>File and Dir classes for manipulation</li></ul><h4>Example:</h4><pre><code># Reading
content = File.read("file.txt")
lines = File.readlines("file.txt")

# Writing
File.open("output.txt", "w") do |file|
  file.write("Hello, Ruby!")
  file.puts "New line"
end

# Safe block form (auto-closes)
File.open("data.txt", "r") do |file|
  file.each_line { |line| puts line }
end

# Check existence
File.exist?("file.txt")</code></pre>`,
        videos: [
            { title: "Ruby File I/O - Programming with Mosh", url: "https://www.youtube.com/watch?v=WJlfVjGt6Hg" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Open file for writing', template: 'File.open("file.txt", "____")', solution: 'File.open("file.txt", "w")' },
            { id: 2, type: 'output', prompt: 'What mode is "a"?', template: '', solution: 'Append mode - writes to end of file' },
            { id: 3, type: 'modify', prompt: 'Use block form', template: 'file = File.open("f.txt")\nfile.read', solution: 'File.open("f.txt") { |file| file.read }' },
            { id: 4, type: 'fix', prompt: 'Fix file existence check', template: 'if File.exists("f.txt")', solution: 'if File.exist?("f.txt")' },
            { id: 5, type: 'logic', prompt: 'Why use block form for File.open?', template: '', solution: 'Automatically closes file even if exception occurs' }
        ]
    },
    "Enumerables": {
        content: `<h3>Enumerables in Ruby</h3><p>The Enumerable module provides iteration methods for collections like arrays and hashes.</p><h4>Common Enumerable Methods:</h4><ul><li>map/collect - transform elements</li><li>select/filter - filter by condition</li><li>reject - filter opposite</li><li>reduce/inject - accumulate value</li><li>each_with_index, each_with_object</li><li>any?, all?, none?, one?</li></ul><h4>Example:</h4><pre><code>numbers = [1, 2, 3, 4, 5]

# Map
doubled = numbers.map { |n| n * 2 }

# Select
evens = numbers.select { |n| n.even? }

# Reduce
sum = numbers.reduce(0) { |acc, n| acc + n }
sum = numbers.reduce(:+)  # Shorthand

# Predicates
numbers.any? { |n| n > 3 }   # true
numbers.all? { |n| n > 0 }   # true</code></pre>`,
        videos: [
            { title: "Ruby Enumerables - The Odin Project", url: "https://www.youtube.com/watch?v=nhs5dyoEz_U" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Sum array with reduce', template: '[1,2,3].______(0, :+)', solution: '[1,2,3].reduce(0, :+)' },
            { id: 2, type: 'output', prompt: 'What does select return?', template: '', solution: 'New array with elements for which block returns true' },
            { id: 3, type: 'modify', prompt: 'Use reject instead', template: 'arr.select { |n| n.odd? }', solution: 'arr.reject { |n| n.even? }' },
            { id: 4, type: 'fix', prompt: 'Fix the map call', template: '[1,2,3].map(|n| n * 2)', solution: '[1,2,3].map { |n| n * 2 }' },
            { id: 5, type: 'logic', prompt: 'Difference between map and each?', template: '', solution: 'map returns new array with results, each returns original array' }
        ]
    },
    "Regular Expressions": {
        content: `<h3>Regular Expressions in Ruby</h3><p>Ruby has built-in regex support for pattern matching and text manipulation.</p><h4>Regex Features:</h4><ul><li>Syntax: /pattern/ or %r{pattern}</li><li>Match operator: =~</li><li>match method returns MatchData</li><li>scan to find all matches</li><li>gsub for replacement</li><li>Capture groups with ()</li></ul><h4>Example:</h4><pre><code># Matching
"hello" =~ /ll/  # 2 (index)
/ll/ =~ "hello"  # 2

# match method
match = "email@example.com".match(/(.+)@(.+)/)
match[1]  # "email"
match[2]  # "example.com"

# scan
"abc123def456".scan(/\d+/)  # ["123", "456"]

# gsub
"hello world".gsub(/world/, "Ruby")  # "hello Ruby"</code></pre>`,
        videos: [
            { title: "Ruby Regular Expressions - FreeCodeCamp", url: "https://www.youtube.com/watch?v=t_ispmWmdjY" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Match email pattern', template: 'email =~ /______/', solution: 'email =~ /.+@.+\\.com/' },
            { id: 2, type: 'output', prompt: 'What does =~ return?', template: '', solution: 'Index of first match, or nil if no match' },
            { id: 3, type: 'modify', prompt: 'Use gsub to replace', template: 'str =~ /old/', solution: 'str.gsub(/old/, "new")' },
            { id: 4, type: 'fix', prompt: 'Fix regex syntax', template: '"text".match("pattern")', solution: '"text".match(/pattern/)' },
            { id: 5, type: 'logic', prompt: 'What are capture groups?', template: '', solution: 'Parts of pattern in () that can be accessed separately in match results' }
        ]
    },
    "Gems & Bundler": {
        content: `<h3>Gems & Bundler</h3><p>Gems are Ruby packages, and Bundler manages gem dependencies for projects.</p><h4>Package Management:</h4><ul><li>gem install to install gems</li><li>Gemfile declares dependencies</li><li>bundle install to install from Gemfile</li><li>Gemfile.lock locks versions</li><li>require to load gems</li></ul><h4>Example:</h4><pre><code># Install gem
gem install rails

# Gemfile
source 'https://rubygems.org'

gem 'rails', '~> 7.0'
gem 'pg', '~> 1.4'
gem 'puma', '~> 5.6'

group :development do
  gem 'debug'
end

# Install dependencies
bundle install

# Require in code
require 'rails'</code></pre>`,
        videos: [
            { title: "Ruby Gems and Bundler - GoRails", url: "https://www.youtube.com/watch?v=T9JYS5zHrKE" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Install gems from Gemfile', template: '______ install', solution: 'bundle install' },
            { id: 2, type: 'output', prompt: 'What is Gemfile.lock?', template: '', solution: 'Locks exact versions of gems installed for consistency' },
            { id: 3, type: 'modify', prompt: 'Add version constraint', template: "gem 'rails'", solution: "gem 'rails', '~> 7.0'" },
            { id: 4, type: 'fix', prompt: 'Fix gem requirement', template: 'require rails', solution: "require 'rails'" },
            { id: 5, type: 'logic', prompt: 'Why use Bundler instead of gem install?', template: '', solution: 'Manages dependencies, ensures consistent versions across environments' }
        ]
    },
    "Testing (RSpec / Minitest)": {
        content: `<h3>Testing in Ruby</h3><p>Ruby has robust testing frameworks including RSpec (BDD) and Minitest (TDD).</p><h4>Testing Frameworks:</h4><ul><li>RSpec - Behavior Driven Development</li><li>Minitest - Test Driven Development</li><li>describe/it blocks (RSpec)</li><li>assert methods (Minitest)</li><li>Test organization and setup</li></ul><h4>Example - RSpec:</h4><pre><code>RSpec.describe Calculator do
  describe '#add' do
    it 'adds two numbers' do
      calc = Calculator.new
      expect(calc.add(2, 3)).to eq(5)
    end
  end
end

# Minitest
class CalculatorTest < Minitest::Test
  def test_add
    calc = Calculator.new
    assert_equal 5, calc.add(2, 3)
  end
end</code></pre>`,
        videos: [
            { title: "Ruby Testing with RSpec - Traversy Media", url: "https://www.youtube.com/watch?v=T9JYS5zHrKE" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Write RSpec expectation', template: '______(result).to eq(5)', solution: 'expect(result).to eq(5)' },
            { id: 2, type: 'output', prompt: 'What does describe do in RSpec?', template: '', solution: 'Groups related tests together' },
            { id: 3, type: 'modify', prompt: 'Convert to Minitest', template: 'expect(x).to eq(5)', solution: 'assert_equal 5, x' },
            { id: 4, type: 'fix', prompt: 'Fix RSpec syntax', template: 'it "tests" { expect(x).equal(5) }', solution: 'it "tests" do\n  expect(x).to eq(5)\nend' },
            { id: 5, type: 'logic', prompt: 'RSpec vs Minitest - when to use which?', template: '', solution: 'RSpec for BDD/readability, Minitest for simplicity/speed' }
        ]
    }
};

const RUBY_ADVANCED_CONTENT = {
    "Metaprogramming": {
        content: `<h3>Metaprogramming in Ruby</h3><p>Ruby's metaprogramming allows writing code that writes code at runtime.</p><h4>Metaprogramming Techniques:</h4><ul><li>define_method to create methods dynamically</li><li>method_missing for dynamic method handling</li><li>send to call methods dynamically</li><li>class_eval and instance_eval</li><li>const_get/const_set for constants</li></ul><h4>Example:</h4><pre><code>class DynamicClass
  [:name, :email, :age].each do |attr|
    define_method(attr) do
      instance_variable_get("@#{attr}")
    end
    
    define_method("#{attr}=") do |value|
      instance_variable_set("@#{attr}", value)
    end
  end
  
  def method_missing(method, *args)
    if method.to_s =~ /^find_by_(.+)$/
      find_by($1, args.first)
    else
      super
    end
  end
end</code></pre>`,
        videos: [
            { title: "Ruby Metaprogramming - RailsConf", url: "https://www.youtube.com/watch?v=Tz_KU7xNXqI" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define method dynamically', template: '______(:greet) do\n  "Hello"\nend', solution: 'define_method(:greet) do\n  "Hello"\nend' },
            { id: 2, type: 'output', prompt: 'What does method_missing do?', template: '', solution: 'Intercepts calls to undefined methods' },
            { id: 3, type: 'modify', prompt: 'Use send to call method', template: 'obj.save', solution: 'obj.send(:save)' },
            { id: 4, type: 'fix', prompt: 'Fix define_method', template: 'define_method "name" { @name }', solution: 'define_method(:name) { @name }' },
            { id: 5, type: 'logic', prompt: 'When is metaprogramming useful?', template: '', solution: 'DRY code, DSLs, dynamic behavior based on data/config' }
        ]
    },
    "Ruby Internals": {
        content: `<h3>Ruby Internals</h3><p>Understanding Ruby's internal architecture including the virtual machine and object model.</p><h4>Internal Concepts:</h4><ul><li>YARV (Yet Another Ruby VM)</li><li>Object model and metaclasses</li><li>Method lookup chain</li><li>Singleton classes (eigenclass)</li><li>Symbol table internals</li></ul><h4>Example:</h4><pre><code># Singleton class
obj = "hello"
def obj.special_method
  "I'm special!"
end

# Accessing singleton class
singleton = obj.singleton_class

# Method lookup
# obj -> singleton -> class -> superclass -> Object -> BasicObject

# Object internals
obj.class        # String
obj.class.superclass  # Object
obj.object_id    # Unique ID</code></pre>`,
        videos: [
            { title: "Ruby Internals - RubyConf", url: "https://www.youtube.com/watch?v=TMBWv9CG-rk" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Get singleton class', template: 'obj.______', solution: 'obj.singleton_class' },
            { id: 2, type: 'output', prompt: 'What is YARV?', template: '', solution: 'Yet Another Ruby VM - Ruby bytecode interpreter' },
            { id: 3, type: 'modify', prompt: 'Check if method defined', template: 'obj.method(:save)', solution: 'obj.respond_to?(:save)' },
            { id: 4, type: 'fix', prompt: 'Get superclass', template: 'String.super', solution: 'String.superclass' },
            { id: 5, type: 'logic', prompt: 'What is a singleton class?', template: '', solution: 'Hidden class for object-specific methods (eigenclass)' }
        ]
    },
    "Memory Management": {
        content: `<h3>Memory Management in Ruby</h3><p>Ruby uses automatic memory management with garbage collection and object lifecycle tracking.</p><h4>Memory Concepts:</h4><ul><li>Heap vs Stack allocation</li><li>Object allocation and deallocation</li><li>Reference counting</li><li>Memory pools</li><li>ObjectSpace for introspection</li></ul><h4>Example:</h4><pre><code>require 'objspace'

# Memory stats
ObjectSpace.count_objects
# => {:TOTAL=>12345, :FREE=>456, :T_CLASS=>789, ...}

# Object allocation
obj = "hello" * 1000000
ObjectSpace.memsize_of(obj)

# Memory profiling
GC.stat
# => {:count=>23, :heap_allocated_pages=>156, ...}

# Weak references
require 'weakref'
obj = "data"
weak = WeakRef.new(obj)</code></pre>`,
        videos: [
            { title: "Ruby Memory Management - RailsConf", url: "https://www.youtube.com/watch?v=r0s3cJn8ptE" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Get object count', template: 'ObjectSpace.______', solution: 'ObjectSpace.count_objects' },
            { id: 2, type: 'output', prompt: 'What does ObjectSpace provide?', template: '', solution: 'Access to all live objects for introspection' },
            { id: 3, type: 'modify', prompt: 'Get memory size', template: 'obj.size', solution: 'ObjectSpace.memsize_of(obj)' },
            { id: 4, type: 'fix', prompt: 'Get GC stats', template: 'GC.status', solution: 'GC.stat' },
            { id: 5, type: 'logic', prompt: 'What are weak references used for?', template: '', solution: 'Reference objects without preventing garbage collection' }
        ]
    },
    "Garbage Collection": {
        content: `<h3>Garbage Collection in Ruby</h3><p>Ruby uses generational garbage collection to automatically reclaim memory from unused objects.</p><h4>GC Features:</h4><ul><li>Mark and Sweep algorithm</li><li>Generational GC (young/old generations)</li><li>GC.start to trigger manually</li><li>GC.disable/enable for control</li><li>Tuning with environment variables</li></ul><h4>Example:</h4><pre><code># Manual GC
GC.start

# Disable/Enable
GC.disable
# ... critical section ...
GC.enable

# GC stats
puts GC.stat
# => {:count=>42, :heap_used=>234, ...}

# Profiling
GC::Profiler.enable
# ... code ...
puts GC::Profiler.report

# Tuning (environment)
# RUBY_GC_HEAP_INIT_SLOTS=100000
# RUBY_GC_MALLOC_LIMIT=60000000</code></pre>`,
        videos: [
            { title: "Ruby GC Deep Dive - RubyKaigi", url: "https://www.youtube.com/watch?v=r0s3cJn8ptE" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Enable GC profiler', template: 'GC::Profiler.______', solution: 'GC::Profiler.enable' },
            { id: 2, type: 'output', prompt: 'What is mark and sweep?', template: '', solution: 'GC algorithm: mark reachable objects, sweep (free) unreachable ones' },
            { id: 3, type: 'modify', prompt: 'Disable GC temporarily', template: '# critical code', solution: 'GC.disable\n# critical code\nGC.enable' },
            { id: 4, type: 'fix', prompt: 'Fix GC trigger', template: 'GC.run', solution: 'GC.start' },
            { id: 5, type: 'logic', prompt: 'What is generational GC?', template: '', solution: 'Separates young (frequently collected) and old objects for efficiency' }
        ]
    },
    "Concurrency & Threading": {
        content: `<h3>Concurrency & Threading</h3><p>Ruby provides threads for concurrent execution, with GIL limiting true parallelism in MRI.</p><h4>Threading Features:</h4><ul><li>Thread class for concurrency</li><li>GIL (Global Interpreter Lock) in MRI</li><li>Thread-safe code with Mutex</li><li>Thread pools and management</li><li>Thread.new and join</li></ul><h4>Example:</h4><pre><code>threads = []

5.times do |i|
  threads << Thread.new do
    puts "Thread #{i} starting"
    sleep(rand(1..3))
    puts "Thread #{i} done"
  end
end

threads.each(&:join)

# Thread-safe with Mutex
mutex = Mutex.new
counter = 0

threads = 10.times.map do
  Thread.new do
    1000.times do
      mutex.synchronize { counter += 1 }
    end
  end
end

threads.each(&:join)
puts counter  # 10000</code></pre>`,
        videos: [
            { title: "Ruby Threading - RubyConf", url: "https://www.youtube.com/watch?v=TMBWv9CG-rk" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create new thread', template: '______.new do\n  # code\nend', solution: 'Thread.new do\n  # code\nend' },
            { id: 2, type: 'output', prompt: 'What is GIL?', template: '', solution: 'Global Interpreter Lock - prevents true parallelism in MRI Ruby' },
            { id: 3, type: 'modify', prompt: 'Add mutex protection', template: 'counter += 1', solution: 'mutex.synchronize { counter += 1 }' },
            { id: 4, type: 'fix', prompt: 'Wait for thread completion', template: 'thread = Thread.new { work }', solution: 'thread = Thread.new { work }\nthread.join' },
            { id: 5, type: 'logic', prompt: 'How to achieve parallelism in Ruby?', template: '', solution: 'Use processes (fork), JRuby, or Rubinius (no GIL)' }
        ]
    },
    "Fibers": {
        content: `<h3>Fibers in Ruby</h3><p>Fibers provide lightweight cooperative concurrency with manual yielding and resuming.</p><h4>Fiber Features:</h4><ul><li>Fiber.new to create fiber</li><li>resume to execute/continue</li><li>Fiber.yield to pause</li><li>Cooperative multitasking</li><li>Lower overhead than threads</li></ul><h4>Example:</h4><pre><code>fiber = Fiber.new do
  puts "Fiber started"
  Fiber.yield "First yield"
  puts "Fiber resumed"
  Fiber.yield "Second yield"
  puts "Fiber ending"
  "Final value"
end

puts fiber.resume  # "Fiber started" then "First yield"
puts fiber.resume  # "Fiber resumed" then "Second yield"
puts fiber.resume  # "Fiber ending" then "Final value"

# Generator pattern
def fibonacci
  Fiber.new do
    a, b = 0, 1
    loop do
      Fiber.yield a
      a, b = b, a + b
    end
  end
end

fib = fibonacci
10.times { puts fib.resume }</code></pre>`,
        videos: [
            { title: "Ruby Fibers - RailsConf", url: "https://www.youtube.com/watch?v=TMBWv9CG-rk" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create fiber', template: 'f = ______.new do\n  Fiber.yield 1\nend', solution: 'f = Fiber.new do\n  Fiber.yield 1\nend' },
            { id: 2, type: 'output', prompt: 'What does Fiber.yield do?', template: '', solution: 'Pauses fiber and returns value to caller' },
            { id: 3, type: 'modify', prompt: 'Resume fiber', template: 'fiber', solution: 'fiber.resume' },
            { id: 4, type: 'fix', prompt: 'Fix fiber yield', template: 'yield value', solution: 'Fiber.yield value' },
            { id: 5, type: 'logic', prompt: 'Fibers vs Threads?', template: '', solution: 'Fibers: cooperative, manual control, lightweight. Threads: preemptive, automatic scheduling' }
        ]
    },
    "Performance Optimization": {
        content: `<h3>Performance Optimization</h3><p>Techniques for optimizing Ruby code performance including benchmarking and profiling.</p><h4>Optimization Strategies:</h4><ul><li>Benchmark module for timing</li><li>Use symbols over strings</li><li>Avoid unnecessary allocations</li><li>Memoization with ||=</li><li>Use bang methods when appropriate</li><li>Database query optimization</li></ul><h4>Example:</h4><pre><code>require 'benchmark'

# Benchmarking
Benchmark.bm do |x|
  x.report("Symbol") { 100000.times { :symbol } }
  x.report("String") { 100000.times { "string" } }
end

# Memoization
class User
  def full_name
    @full_name ||= "#{first_name} #{last_name}"
  end
end

# Efficient iteration
# Slow
arr.each { |x| arr2 << x * 2 }
# Fast
arr.map { |x| x * 2 }

# In-place modification
str = "hello"
str.upcase!  # Modifies in place</code></pre>`,
        videos: [
            { title: "Ruby Performance - RailsConf", url: "https://www.youtube.com/watch?v=r0s3cJn8ptE" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Memoize result', template: 'def expensive\n  @result ______ compute\nend', solution: 'def expensive\n  @result ||= compute\nend' },
            { id: 2, type: 'output', prompt: 'Why are symbols faster than strings?', template: '', solution: 'Symbols are immutable and reused (same object_id), strings create new objects' },
            { id: 3, type: 'modify', prompt: 'Use in-place modification', template: 'str = str.downcase', solution: 'str.downcase!' },
            { id: 4, type: 'fix', prompt: 'Fix benchmark', template: 'Benchmark.bm { puts "test" }', solution: 'Benchmark.bm do |x|\n  x.report("test") { puts "test" }\nend' },
            { id: 5, type: 'logic', prompt: 'What is memoization?', template: '', solution: 'Caching expensive computation results to avoid recalculation' }
        ]
    },
    "Ruby on Rails Internals": {
        content: `<h3>Ruby on Rails Internals</h3><p>Understanding Rails architecture, request lifecycle, and internal mechanisms.</p><h4>Rails Architecture:</h4><ul><li>MVC pattern (Model-View-Controller)</li><li>Request/Response cycle</li><li>Middleware stack</li><li>ActiveRecord ORM</li><li>Action Cable for WebSockets</li><li>ActiveJob for background jobs</li></ul><h4>Example:</h4><pre><code># Request cycle
# Rack Middleware -> Router -> Controller -> Model -> View -> Response

# Middleware
# config/application.rb
config.middleware.use MyCustomMiddleware

# Routes
# config/routes.rb
Rails.application.routes.draw do
  resources :users
  get '/about', to: 'pages#about'
end

# Controller
class UsersController < ApplicationController
  before_action :set_user, only: [:show]
  
  def show
    # @user set by before_action
  end
  
  private
  
  def set_user
    @user = User.find(params[:id])
  end
end</code></pre>`,
        videos: [
            { title: "Rails Internals - RailsConf", url: "https://www.youtube.com/watch?v=dxOLJjS-sMY" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Define before_action', template: '______ :authenticate, only: [:edit]', solution: 'before_action :authenticate, only: [:edit]' },
            { id: 2, type: 'output', prompt: 'What is Rack?', template: '', solution: 'Web server interface that Rails is built on' },
            { id: 3, type: 'modify', prompt: 'Add middleware', template: '# application.rb', solution: 'config.middleware.use CustomMiddleware' },
            { id: 4, type: 'fix', prompt: 'Fix route', template: "get 'users' to: UsersController#index", solution: "get 'users', to: 'users#index'" },
            { id: 5, type: 'logic', prompt: 'What is ActiveRecord?', template: '', solution: 'ORM (Object-Relational Mapping) for database interactions' }
        ]
    },
    "API Development": {
        content: `<h3>API Development in Ruby</h3><p>Building RESTful APIs with Rails API mode, serialization, and authentication.</p><h4>API Features:</h4><ul><li>Rails API mode (--api flag)</li><li>Serialization with ActiveModel::Serializers</li><li>JSON rendering</li><li>JWT authentication</li><li>Versioning strategies</li><li>Rate limiting and throttling</li></ul><h4>Example:</h4><pre><code># API Controller
class Api::V1::UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end
  
  def show
    user = User.find(params[:id])
    render json: user, status: :ok
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'User not found' }, status: :not_found
  end
end

# Serializer
class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :posts
end

# Routes with versioning
namespace :api do
  namespace :v1 do
    resources :users
  end
end</code></pre>`,
        videos: [
            { title: "Rails API Development - Traversy Media", url: "https://www.youtube.com/watch?v=QojnRc7SS9o" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Render JSON response', template: 'render _____ users', solution: 'render json: users' },
            { id: 2, type: 'output', prompt: 'What does --api flag do?', template: '', solution: 'Creates Rails app optimized for API (no views, assets, etc.)' },
            { id: 3, type: 'modify', prompt: 'Add status code', template: 'render json: user', solution: 'render json: user, status: :ok' },
            { id: 4, type: 'fix', prompt: 'Fix namespace route', template: 'api/v1/users', solution: 'namespace :api do\n  namespace :v1 do\n    resources :users\n  end\nend' },
            { id: 5, type: 'logic', prompt: 'Why version APIs?', template: '', solution: 'Allow changes without breaking existing clients' }
        ]
    },
    "Security in Ruby": {
        content: `<h3>Security in Ruby</h3><p>Best practices for secure Ruby applications including authentication, authorization, and common vulnerabilities.</p><h4>Security Topics:</h4><ul><li>SQL injection prevention</li><li>XSS (Cross-Site Scripting) protection</li><li>CSRF (Cross-Site Request Forgery) tokens</li><li>Mass assignment protection</li><li>Secure password storage (bcrypt)</li><li>Authentication (Devise, JWT)</li></ul><h4>Example:</h4><pre><code># SQL Injection Prevention
# Bad
User.where("email = '#{params[:email]}'")
# Good
User.where(email: params[:email])

# Password hashing
require 'bcrypt'
password = BCrypt::Password.create("secret")
password == "secret"  # true

# Strong parameters (mass assignment)
def user_params
  params.require(:user).permit(:name, :email)
end

# CSRF protection (Rails)
protect_from_forgery with: :exception

# XSS prevention (Rails auto-escapes)
<%= @user.name %>  # Auto-escaped
<%== @user.name %> # Not escaped (dangerous!)</code></pre>`,
        videos: [
            { title: "Ruby Security Best Practices - RailsConf", url: "https://www.youtube.com/watch?v=TMBWv9CG-rk" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Secure parameter filtering', template: 'params.require(:user).______()', solution: 'params.require(:user).permit(:name, :email)' },
            { id: 2, type: 'output', prompt: 'What is SQL injection?', template: '', solution: 'Attack where malicious SQL is injected through user input' },
            { id: 3, type: 'modify', prompt: 'Fix SQL injection', template: "User.where(\"name = '#{name}'\")", solution: 'User.where(name: name)' },
            { id: 4, type: 'fix', prompt: 'Hash password securely', template: 'password = params[:password]', solution: 'password = BCrypt::Password.create(params[:password])' },
            { id: 5, type: 'logic', prompt: 'What is mass assignment vulnerability?', template: '', solution: 'Attacker modifies unintended attributes by passing extra parameters' }
        ]
    },
    "Design Patterns": {
        content: `<h3>Design Patterns in Ruby</h3><p>Common design patterns implemented in Ruby for maintainable and scalable code.</p><h4>Common Patterns:</h4><ul><li>Singleton - single instance</li><li>Factory - object creation</li><li>Observer - event notification</li><li>Decorator - add behavior dynamically</li><li>Strategy - algorithm selection</li><li>Service Objects - business logic</li></ul><h4>Example:</h4><pre><code># Singleton
require 'singleton'
class Database
  include Singleton
  
  def connect
    "Connected"
  end
end

db = Database.instance

# Factory
class UserFactory
  def self.create(type)
    case type
    when :admin then Admin.new
    when :guest then Guest.new
    else User.new
    end
  end
end

# Service Object
class UserRegistration
  def initialize(user_params)
    @user_params = user_params
  end
  
  def call
    user = User.new(@user_params)
    user.save
    send_welcome_email(user)
    user
  end
end</code></pre>`,
        videos: [
            { title: "Ruby Design Patterns - RubyConf", url: "https://www.youtube.com/watch?v=TMBWv9CG-rk" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Include Singleton module', template: 'class Config\n  ______ Singleton\nend', solution: 'class Config\n  include Singleton\nend' },
            { id: 2, type: 'output', prompt: 'What is Singleton pattern?', template: '', solution: 'Ensures class has only one instance with global access' },
            { id: 3, type: 'modify', prompt: 'Create service object', template: 'User.create(params)', solution: 'UserCreationService.new(params).call' },
            { id: 4, type: 'fix', prompt: 'Fix factory pattern', template: 'def create(type)\n  type.new\nend', solution: 'def self.create(type)\n  case type\n  when :admin then Admin.new\n  end\nend' },
            { id: 5, type: 'logic', prompt: 'When to use Service Objects?', template: '', solution: 'For complex business logic that doesn\'t belong in models/controllers' }
        ]
    },
    "Profiling & Debugging": {
        content: `<h3>Profiling & Debugging</h3><p>Tools and techniques for debugging Ruby code and profiling performance bottlenecks.</p><h4>Tools:</h4><ul><li>pry for debugging (REPL)</li><li>byebug for breakpoints</li><li>ruby-prof for profiling</li><li>rack-mini-profiler for web apps</li><li>New Relic/Scout for production monitoring</li></ul><h4>Example:</h4><pre><code># Pry debugging
require 'pry'

def complex_method
  x = 10
  binding.pry  # Breakpoint
  y = x * 2
  y
end

# Profiling with ruby-prof
require 'ruby-prof'

RubyProf.start
# ... code to profile ...
result = RubyProf.stop

printer = RubyProf::FlatPrinter.new(result)
printer.print(STDOUT)

# Memory profiling
require 'memory_profiler'

report = MemoryProfiler.report do
  # ... code ...
end

report.pretty_print</code></pre>`,
        videos: [
            { title: "Ruby Debugging with Pry - GoRails", url: "https://www.youtube.com/watch?v=JLoOC83xJjA" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Set breakpoint with pry', template: '______.pry', solution: 'binding.pry' },
            { id: 2, type: 'output', prompt: 'What is Pry?', template: '', solution: 'Powerful REPL (Read-Eval-Print Loop) for debugging' },
            { id: 3, type: 'modify', prompt: 'Profile memory usage', template: 'RubyProf.start', solution: 'MemoryProfiler.report do\n  # code\nend' },
            { id: 4, type: 'fix', prompt: 'Fix pry usage', template: 'pry', solution: 'binding.pry' },
            { id: 5, type: 'logic', prompt: 'When to use profiling?', template: '', solution: 'To identify performance bottlenecks and optimize slow code' }
        ]
    }
};

const rubyBeginnerTitles = [
    "Introduction to Ruby",
    "Ruby Installation & Setup",
    "Ruby Program Structure",
    "Variables",
    "Data Types",
    "Operators",
    "Control Statements",
    "Loops",
    "Methods",
    "Arrays",
    "Hashes",
    "Strings",
    "Symbols"
];

const rubyIntermediateTitles = [
    "Object-Oriented Programming",
    "Classes & Objects",
    "Modules & Mixins",
    "Inheritance",
    "Polymorphism",
    "Blocks",
    "Procs & Lambdas",
    "Exception Handling",
    "File Handling",
    "Enumerables",
    "Regular Expressions",
    "Gems & Bundler",
    "Testing (RSpec / Minitest)"
];

const rubyAdvancedTitles = [
    "Metaprogramming",
    "Ruby Internals",
    "Memory Management",
    "Garbage Collection",
    "Concurrency & Threading",
    "Fibers",
    "Performance Optimization",
    "Ruby on Rails Internals",
    "API Development",
    "Security in Ruby",
    "Design Patterns",
    "Profiling & Debugging"
];

export { RUBY_BEGINNER_CONTENT, RUBY_INTERMEDIATE_CONTENT, RUBY_ADVANCED_CONTENT, rubyBeginnerTitles, rubyIntermediateTitles, rubyAdvancedTitles };
