const NATIVE_SYNTAX = {
    python: { print: 'print("Hello Python")', solution: 'print', forbidden: [';', 'console.log', 'System.out', 'printf'], context: 'Indentation and Scripting' },
    javascript: { print: 'console.log("Hello JS");', solution: 'console.log', forbidden: ['System.out', 'printf', 'echo'], context: 'Event Loop and DOM' },
    java: { print: 'System.out.println("Hello Java");', solution: 'System.out.println', forbidden: ['console.log', 'print(', 'printf'], context: 'JVM and Objects' },
    cpp: { print: 'std::cout << "Hello C++" << std::endl;', solution: 'cout', forbidden: ['console.log', 'System.out', 'print('], context: 'Pointers and STL' },
    c: { print: 'printf("Hello C\\n");', solution: 'printf', forbidden: ['console.log', 'System.out', 'std::cout'], context: 'Direct Memory and Headers' },
    csharp: { print: 'Console.WriteLine("Hello C#");', solution: 'Console.WriteLine', forbidden: ['console.log', 'System.out.println', 'printf'], context: '.NET Framework and XAML' },
    sql: { print: 'SELECT * FROM users;', solution: 'SELECT', forbidden: ['print', 'console.log', 'var '], context: 'Relational Sets' },
    go: { print: 'fmt.Println("Hello Go")', solution: 'fmt', forbidden: ['console.log', 'System.out', 'static '], context: 'Goroutines and Slices' },
    rust: { print: 'println!("Hello Rust");', solution: 'println!', forbidden: ['console.log', 'System.out', 'NULL'], context: 'Ownership and Borrowing' },
    php: { print: 'echo "Hello PHP";', solution: 'echo', forbidden: ['console.log', 'System.out', 'System.err'], context: 'Server-side Scripting' },
    ruby: { print: 'puts "Hello Ruby"', solution: 'puts', forbidden: ['console.log', 'System.out', 'printf'], context: 'Elegant Objects' },
    swift: { print: 'print("Hello Swift")', solution: 'print', forbidden: ['console.log', 'System.out', 'printf'], context: 'iOS and Optionals' },
    kotlin: { print: 'println("Hello Kotlin")', solution: 'println', forbidden: ['console.log', 'System.out', 'printf'], context: 'Interoperability and Null Safety' },
    dart: { print: 'print("Hello Dart");', solution: 'print', forbidden: ['console.log', 'System.out', 'printf'], context: 'Flutter and Asynchrony' },
};

const PYTHON_ENHANCED_CONTENT = {
    "Variables": {
        content: `<h3>Python Variables and Memory</h3>
<p><strong>Real-World:</strong> Instagram uses Python variables to handle millions of user sessions.</p>
<h4>Key Points:</h4>
<ul>
<li>Dynamic typing at runtime</li>
<li>Variables are references to objects</li>
<li>Strings/integers immutable, lists/dicts mutable</li>
</ul>
<h4>Example - Shopping Cart:</h4>
<pre><code>class Cart:
    def __init__(self):
        self.items = []
        self.total = 0.0
    
    def add(self, name, price):
        self.items.append({'name': name, 'price': price})
        self.total += price</code></pre>`,
        videos: [
            { title: "Python Variables - Corey Schafer", url: "https://www.youtube.com/watch?v=cQT33yu9pY8" }
        ]
    },
    "Control": {
        content: `<h3>Python Control Flow</h3>
<p><strong>Industry:</strong> Netflix uses control flow for content recommendations.</p>
<h4>Features:</h4>
<ul>
<li>Truthiness (empty lists = False)</li>
<li>Walrus operator (Python 3.8+)</li>
<li>Match-case (Python 3.10+)</li>
</ul>
<h4>Example - Authentication:</h4>
<pre><code>def auth(user, pw):
    if user := db.get(user):
        if user['pw'] == pw:
            return {'access': 'granted'}
    return {'error': 'denied'}</code></pre>`,
        videos: [
            { title: "Control Flow - Mosh", url: "https://www.youtube.com/watch?v=HZARImviDxg" }
        ]
    },
    "Loops": {
        content: `<h3>Python Loops</h3>
<p><strong>Production:</strong> Spotify processes millions of songs with efficient loops.</p>
<h4>Techniques:</h4>
<ul>
<li>List comprehensions (30-40% faster)</li>
<li>Generators (memory efficient)</li>
<li>enumerate() for index + value</li>
</ul>
<h4>Example:</h4>
<pre><code># List comprehension
premium = [u['name'] for u in users if u['purchases'] > 20]

# Generator
def get_premium(data):
    for u in data:
        if u['purchases'] > 20:
            yield u['name']</code></pre>`,
        videos: [
            { title: "Python Loops - Tech With Tim", url: "https://www.youtube.com/watch?v=94UHCEmprCY" }
        ]
    },
    "Functions": {
        content: `<h3>Python Functions</h3>
<p><strong>Enterprise:</strong> Google uses decorators for logging and caching.</p>
<h4>Advanced:</h4>
<ul>
<li>Decorators modify behavior</li>
<li>*args and **kwargs</li>
<li>Closures remember scope</li>
</ul>
<h4>Example - Rate Limiting:</h4>
<pre><code>def rate_limit(max_calls):
    calls = []
    def decorator(func):
        def wrapper(*args):
            if len(calls) >= max_calls:
                raise Exception("Limit exceeded")
            calls.append(time.time())
            return func(*args)
        return wrapper
    return decorator</code></pre>`,
        videos: [
            { title: "Python Functions - Corey Schafer", url: "https://www.youtube.com/watch?v=9Os0o3wzS_I" }
        ]
    }
};

const TOPIC_TEMPLATES = {
    "Variables": {
        python: 'name = "Alex"\nage = 25\nprint(f"{name} is {age}")',
        javascript: 'let name = "Alex";\nconst age = 25;\nconsole.log(`${name} is ${age}`);',
        java: 'String name = "Alex";\nint age = 25;\nSystem.out.println(name + " is " + age);',
    },
    "Control": {
        python: 'if age > 18:\n    print("Adult")\nelse:\n    print("Minor")',
        javascript: 'if (age > 18) {\n    console.log("Adult");\n} else {\n    console.log("Minor");\n}',
    },
    "Loops": {
        python: 'for i in range(5):\n    print(f"Count: {i}")',
        javascript: 'for (let i = 0; i < 5; i++) {\n    console.log(`Count: ${i}`);\n}',
    },
    "Functions": {
        python: 'def greet(name):\n    return f"Hello {name}"',
        javascript: 'function greet(name) {\n    return `Hello ${name}`;\n}',
    }
};

// Beginner Java content: theory + 5 practice tasks per topic
const JAVA_BEGINNER_CONTENT = {
    "Introduction to Java": {
        content: `
            <h3>What is Java?</h3>
            <p>Java is an object-oriented language that runs on the JVM. You write Java once, it compiles to bytecode, and runs on many platforms.</p>
            <h4>Why use Java?</h4>
            <p>Cross-platform apps, Android development, and large enterprise systems.</p>
            <h4>Key Definitions</h4>
            <ul>
                <li><strong>JDK:</strong> Developer tools to compile and run Java.</li>
                <li><strong>JRE:</strong> Runtime environment for Java apps.</li>
                <li><strong>JVM:</strong> Virtual machine that executes Java bytecode.</li>
                <li><strong>Bytecode:</strong> Platform-independent compiled code.</li>
            </ul>
            <h4>Syntax</h4>
            <pre><code>class Main {
    public static void main(String[] args) {
        System.out.println("Java is fun!");
    }
}</code></pre>
            <h4>Explanation</h4>
            <p><strong>class Main</strong> defines a class. <strong>main</strong> is the entry point. <strong>System.out.println</strong> prints text.</p>
            <h4>Output</h4>
            <pre><code>Java is fun!</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Print “Hello, EduCode” on one line and your name on the next.', template: 'class Main { public static void main(String[] args){ /* write here */ } }', solution: 'System.out.println' },
            { id: 2, type: 'output', prompt: 'Predict what prints: System.out.print("A"); System.out.println("B");', template: 'class Main { public static void main(String[] args){ System.out.print("A"); System.out.println("B"); } }', solution: 'AB' },
            { id: 3, type: 'modify', prompt: 'Change message to “Learning Java!” and add another line “Day 1”.', template: 'class Main { public static void main(String[] args){ System.out.println("Start"); } }', solution: 'Learning Java!' },
            { id: 4, type: 'fix', prompt: 'Fix missing semicolon: System.out.println("Hi")', template: 'class Main { public static void main(String[] args){ System.out.println("Hi") } }', solution: ';' },
            { id: 5, type: 'logic', prompt: 'Use a String user = "Priya" and print: Welcome, Priya', template: 'class Main { public static void main(String[] args){ String user = "Priya"; /* print welcome */ } }', solution: 'Welcome, ' }
        ]
    },
    "Java Installation & Setup": {
        content: `
            <h3>Install JDK</h3>
            <p>Install the JDK to compile with <code>javac</code> and run with <code>java</code>.</p>
            <h4>Why?</h4>
            <p>Compiler and runtime are required to build and execute programs.</p>
            <h4>Key Definitions</h4>
            <ul>
                <li><strong>javac:</strong> Compiles .java to .class</li>
                <li><strong>java:</strong> Runs bytecode</li>
                <li><strong>PATH/JAVA_HOME:</strong> Environment setup</li>
            </ul>
            <h4>Compile/Run</h4>
            <pre><code>javac Main.java
java Main</code></pre>
            <h4>Easy Program</h4>
            <pre><code>class Main { public static void main(String[] args){ System.out.println("JDK Ready"); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Print “Setup OK”.', template: 'class Main { public static void main(String[] args){ /* print */ } }', solution: 'Setup OK' },
            { id: 2, type: 'output', prompt: 'Predict output: System.out.println("Version: " + (8 + 3));', template: 'class Main { public static void main(String[] args){ System.out.println("Version: " + (8 + 3)); } }', solution: 'Version: 11' },
            { id: 3, type: 'modify', prompt: 'Add another line: PATH Configured.', template: 'class Main { public static void main(String[] args){ System.out.println("JDK Ready"); } }', solution: 'PATH Configured' },
            { id: 4, type: 'fix', prompt: 'Fix class name case: class main → class Main', template: 'class main { public static void main(String[] args){ System.out.println("Hi"); } }', solution: 'class Main' },
            { id: 5, type: 'logic', prompt: 'Print Home path from String home = "C:\\Java".', template: 'class Main { public static void main(String[] args){ String home = "C:\\Java"; /* print */ } }', solution: 'home' }
        ]
    },
    "Java Program Structure": {
        content: `
            <h3>Program Structure</h3>
            <p>A program has classes. The <code>main</code> method is the entry point.</p>
            <h4>Syntax</h4>
            <pre><code>class Main { public static void main(String[] args){ System.out.println("Start"); } }</code></pre>
            <h4>Easy Program</h4>
            <pre><code>class Main { public static void main(String[] args){ System.out.println("Start"); System.out.println("End"); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Print “Structure OK”.', template: 'class Main { public static void main(String[] args){ /* print */ } }', solution: 'Structure OK' },
            { id: 2, type: 'output', prompt: 'Predict: System.out.print("X"); System.out.print("Y");', template: 'class Main { public static void main(String[] args){ System.out.print("X"); System.out.print("Y"); } }', solution: 'XY' },
            { id: 3, type: 'modify', prompt: 'Add a third print “Z”.', template: 'class Main { public static void main(String[] args){ System.out.println("X"); System.out.println("Y"); } }', solution: 'Z' },
            { id: 4, type: 'fix', prompt: 'Fix missing parameters in main: add (String[] args).', template: 'class Main { public static void main(){ System.out.println("Hi"); } }', solution: 'String[] args' },
            { id: 5, type: 'logic', prompt: 'Print a header line: --- App ---', template: 'class Main { public static void main(String[] args){ /* header */ } }', solution: '--- App ---' }
        ]
    },
    "Variables": {
        content: `
            <h3>Variables</h3>
            <p>Variables store values with types.</p>
            <h4>Syntax</h4>
            <pre><code>int count = 3; String name = "Asha";</code></pre>
            <h4>Easy Program</h4>
            <pre><code>class Main { public static void main(String[] args){ int a=5; String s="Total"; System.out.println(s + ": " + a); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare int year = 2026 and print it.', template: 'class Main { public static void main(String[] args){ int year = 2026; /* print */ } }', solution: '2026' },
            { id: 2, type: 'output', prompt: 'Predict: int x=2; x=x+3; print x', template: 'class Main { public static void main(String[] args){ int x=2; x=x+3; System.out.println(x); } }', solution: '5' },
            { id: 3, type: 'modify', prompt: 'Change String city to "Madurai" and print.', template: 'class Main { public static void main(String[] args){ String city="Chennai"; /* change+print */ } }', solution: 'Madurai' },
            { id: 4, type: 'fix', prompt: 'Fix type: int val = "5" → 5.', template: 'class Main { public static void main(String[] args){ int val = "5"; System.out.println(val); } }', solution: 'int val = 5' },
            { id: 5, type: 'logic', prompt: 'Store item and price; print “Item: name, Price: price”.', template: 'class Main { public static void main(String[] args){ String name="Pen"; double price=10.5; /* print */ } }', solution: 'Item:' }
        ]
    },
    "Primitive Data Types": {
        content: `
            <h3>Primitives</h3>
            <p>byte, short, int, long, float, double, char, boolean.</p>
            <h4>Syntax</h4>
            <pre><code>double rate=7.5; boolean ok=true; char grade='A';</code></pre>
            <h4>Easy Program</h4>
            <pre><code>class Main { public static void main(String[] args){ boolean ok=true; char g='A'; System.out.println(ok + " " + g); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare float temp = 30.5f and print.', template: 'class Main { public static void main(String[] args){ float temp = 30.5f; /* print */ } }', solution: '30.5' },
            { id: 2, type: 'output', prompt: 'Predict: long n=10L; System.out.println(n*2);', template: 'class Main { public static void main(String[] args){ long n=10L; System.out.println(n*2); } }', solution: '20' },
            { id: 3, type: 'modify', prompt: 'Change char star to # and print twice.', template: 'class Main { public static void main(String[] args){ char star='+'; /* change+print */ } }', solution: '#' },
            { id: 4, type: 'fix', prompt: 'Fix float f = 2.0 → 2.0f.', template: 'class Main { public static void main(String[] args){ float f = 2.0; System.out.println(f); } }', solution: '2.0f' },
            { id: 5, type: 'logic', prompt: 'Use boolean isMember to print discount when true.', template: 'class Main { public static void main(String[] args){ boolean isMember=true; /* if true print Discount */ } }', solution: 'Discount' }
        ]
    },
    "Operators": {
        content: `
            <h3>Operators</h3>
            <p>Arithmetic, relational, logical, assignment.</p>
            <pre><code>int r = 7 % 3; boolean b = (3 > 2) && (5 > 4);</code></pre>
            <h4>Easy Program</h4>
            <pre><code>class Main { public static void main(String[] args){ int a=7,b=3; System.out.println(a/b); System.out.println(a%b); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Compute sum and product of a=8, b=5.', template: 'class Main { public static void main(String[] args){ int a=8,b=5; /* print sum and product */ } }', solution: 'a+b' },
            { id: 2, type: 'output', prompt: 'Predict: System.out.println(10/4);', template: 'class Main { public static void main(String[] args){ System.out.println(10/4); } }', solution: '2' },
            { id: 3, type: 'modify', prompt: 'Change && to || and print result of true || false.', template: 'class Main { public static void main(String[] args){ System.out.println(true && false); } }', solution: 'true || false' },
            { id: 4, type: 'fix', prompt: 'Fix: int k += 1; → declare k and then k += 1;', template: 'class Main { public static void main(String[] args){ int k += 1; System.out.println(k); } }', solution: 'int k=0;' },
            { id: 5, type: 'logic', prompt: 'Compute final bill = price * qty and print.', template: 'class Main { public static void main(String[] args){ double price=50; int qty=3; /* print */ } }', solution: '*' }
        ]
    },
    "Conditional Statements": {
        content: `
            <h3>Conditionals</h3>
            <p>Use if/else and switch to branch logic.</p>
            <pre><code>if (x>0) { /*...*/ } else { /*...*/ }</code></pre>
            <h4>Easy Program</h4>
            <pre><code>class Main { public static void main(String[] args){ int n=5; if(n%2==0) System.out.println("Even"); else System.out.println("Odd"); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Print Adult if age>=18 else Minor.', template: 'class Main { public static void main(String[] args){ int age=18; /* if-else */ } }', solution: 'Adult' },
            { id: 2, type: 'output', prompt: 'Predict: int s=70; if(s>60) print Pass;', template: 'class Main { public static void main(String[] args){ int s=70; if(s>60) System.out.println("Pass"); } }', solution: 'Pass' },
            { id: 3, type: 'modify', prompt: 'Convert if-else to switch for day=1..7.', template: 'class Main { public static void main(String[] args){ int day=1; /* switch */ } }', solution: 'switch' },
            { id: 4, type: 'fix', prompt: 'Add braces {} around two statements.', template: 'class Main { public static void main(String[] args){ if(true) System.out.println("A"); System.out.println("B"); } }', solution: '{' },
            { id: 5, type: 'logic', prompt: 'Free delivery if amount>=500.', template: 'class Main { public static void main(String[] args){ int amount=500; /* print Free Delivery or No */ } }', solution: 'Free' }
        ]
    },
    "Loops": {
        content: `
            <h3>Loops</h3>
            <p>Repeat actions with for/while/do-while.</p>
            <pre><code>for(int i=0;i<3;i++){ /*...*/ }</code></pre>
            <h4>Easy Program</h4>
            <pre><code>class Main { public static void main(String[] args){ int sum=0; for(int i=1;i<=5;i++) sum+=i; System.out.println(sum); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Print numbers 1..10 on one line separated by spaces.', template: 'class Main { public static void main(String[] args){ /* loop */ } }', solution: 'for' },
            { id: 2, type: 'output', prompt: 'Predict: int i=3; while(i>0){ print i; i--; }', template: 'class Main { public static void main(String[] args){ int i=3; while(i>0){ System.out.print(i); i--; } } }', solution: '321' },
            { id: 3, type: 'modify', prompt: 'Change while to do-while.', template: 'class Main { public static void main(String[] args){ int i=0; while(i<3){ System.out.println(i); i++; } } }', solution: 'do' },
            { id: 4, type: 'fix', prompt: 'Fix for loop i-- to i++.', template: 'class Main { public static void main(String[] args){ for(int i=0;i<3;i--){ System.out.println(i); } } }', solution: 'i++' },
            { id: 5, type: 'logic', prompt: 'Count items in array and print total.', template: 'class Main { public static void main(String[] args){ int[] cart={1,1,1}; /* count */ } }', solution: 'cart.length' }
        ]
    },
    "Arrays": {
        content: `
            <h3>Arrays</h3>
            <p>Fixed-size sequence of same type.</p>
            <pre><code>int[] a = {1,2,3}; a.length;</code></pre>
            <h4>Easy Program</h4>
            <pre><code>class Main { public static void main(String[] args){ int[] a={2,4,6}; int s=0; for(int x:a) s+=x; System.out.println(s); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create cities array and print first item.', template: 'class Main { public static void main(String[] args){ String[] cities={"Chennai","Madurai"}; /* print first */ } }', solution: 'cities[0]' },
            { id: 2, type: 'output', prompt: 'Predict: int[] a={1,2}; print a.length;', template: 'class Main { public static void main(String[] args){ int[] a={1,2}; System.out.println(a.length); } }', solution: '2' },
            { id: 3, type: 'modify', prompt: 'Change second city to “Coimbatore” and print all.', template: 'class Main { public static void main(String[] args){ String[] cities={"Chennai","Madurai"}; /* change+print */ } }', solution: 'Coimbatore' },
            { id: 4, type: 'fix', prompt: 'Fix index: a[3]=10 → a[2]=10 for size 3.', template: 'class Main { public static void main(String[] args){ int[] a = new int[3]; a[3]=10; System.out.println(a[2]); } }', solution: 'a[2]' },
            { id: 5, type: 'logic', prompt: 'Find max in scores and print.', template: 'class Main { public static void main(String[] args){ int[] scores={40,55,67}; /* find max */ } }', solution: 'max' }
        ]
    },
    "Methods": {
        content: `
            <h3>Methods</h3>
            <p>Reusable blocks with parameters and returns.</p>
            <pre><code>static int add(int a,int b){ return a+b; }</code></pre>
            <h4>Easy Program</h4>
            <pre><code>class Main { static int add(int a,int b){ return a+b; } public static void main(String[] a){ System.out.println(add(2,3)); } }</code></pre>
            <h4>Recommended Tamil Java Full Course Video</h4>
            <p><a href="https://www.youtube.com/@ErrorMakesClever" target="_blank" rel="noopener">Error Makes Clever (Beginner to Advanced)</a></p>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Method greet(String n) returns “Hello, n”.', template: 'class Main { static String greet(String n){ /* return */ } public static void main(String[] a){ System.out.println(greet("Asha")); } }', solution: 'return "Hello, "' },
            { id: 2, type: 'output', prompt: 'Predict: sum(1,2) returns 3; print it.', template: 'class Main { static int sum(int a,int b){ return a+b; } public static void main(String[] a){ System.out.println(sum(1,2)); } }', solution: '3' },
            { id: 3, type: 'modify', prompt: 'Change add to add three numbers.', template: 'class Main { static int add(int a,int b){ return a+b; } public static void main(String[] a){ System.out.println(add(1,2)); } }', solution: 'int add(int a,int b,int c)' },
            { id: 4, type: 'fix', prompt: 'Fix missing return in method.', template: 'class Main { static int mul(int a,int b){ a*b; } public static void main(String[] a){ System.out.println(mul(2,3)); } }', solution: 'return' },
            { id: 5, type: 'logic', prompt: 'discount(price, isMember) returns 10% off when member.', template: 'class Main { static double discount(double price, boolean isMember){ /* logic */ } public static void main(String[] a){ System.out.println(discount(100,true)); } }', solution: '0.9' }
        ]
    }
};

// Intermediate Java OOPS content
const JAVA_INTERMEDIATE_CONTENT = {
    "Introduction to OOPS": {
        content: `
            <h3>OOPS Basics</h3>
            <p>Object-Oriented Programming has four pillars: Encapsulation, Inheritance, Polymorphism, and Abstraction.</p>
            <h4>Why OOPS?</h4>
            <p>Organizes code into reusable objects, improves maintainability and scalability.</p>
            <h4>Simple Example</h4>
            <pre><code>class Intro {
    void say(){ System.out.println("OOPS in Java"); }
    public static void main(String[] a){ new Intro().say(); }
}</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Write a class Hello with method greet() printing “OOPS”.', template: 'class Hello { /* method */ } class Main { public static void main(String[] a){ /* call */ } }', solution: 'void greet' },
            { id: 2, type: 'output', prompt: 'Predict: new Intro().say(); prints?', template: 'class Intro { void say(){ System.out.println("OOPS in Java"); } public static void main(String[] a){ new Intro().say(); } }', solution: 'OOPS in Java' },
            { id: 3, type: 'modify', prompt: 'Add a second method info() printing “Four pillars”.', template: 'class Intro { void say(){ System.out.println("OOPS"); } }', solution: 'info' },
            { id: 4, type: 'fix', prompt: 'Fix missing access: public static void main(String[] a).', template: 'class Intro { static void main(String[] a){ } }', solution: 'public static void main' },
            { id: 5, type: 'logic', prompt: 'Design a tiny class Note with title and print it.', template: 'class Note { String title; /* print */ }', solution: 'System.out.println' }
        ]
    },
    "Class & Object": {
        content: `
            <h3>Class and Object</h3>
            <p>A class defines structure and behavior; an object is an instance of a class.</p>
            <h4>Example</h4>
            <pre><code>class Person { String name; }
class Main { public static void main(String[] a){ Person p = new Person(); p.name = "Asha"; System.out.println(p.name); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create class Car with field model and print model.', template: 'class Car { String model; } class Main { public static void main(String[] a){ /* new Car, set, print */ } }', solution: 'new Car' },
            { id: 2, type: 'output', prompt: 'Predict default output after setting name then printing.', template: 'class User { String name; } class Main { public static void main(String[] a){ User u=new User(); u.name="Neo"; System.out.println(u.name); } }', solution: 'Neo' },
            { id: 3, type: 'modify', prompt: 'Add method show() to print name.', template: 'class User { String name="Ana"; /* add show */ }', solution: 'void show' },
            { id: 4, type: 'fix', prompt: 'Fix missing new keyword when creating object.', template: 'class Box { int w; } class Main { public static void main(String[] a){ Box b; b.w=10; } }', solution: 'new Box()' },
            { id: 5, type: 'logic', prompt: 'Make a Phone class with brand and price, then print details.', template: 'class Phone { String brand; int price; }', solution: 'brand' }
        ]
    },
    "Constructors": {
        content: `
            <h3>Constructors</h3>
            <p>Special methods to initialize objects; same name as class, no return type; can be overloaded.</p>
            <h4>Example</h4>
            <pre><code>class Account { int balance; Account(int b){ balance=b; } }
class Main { public static void main(String[] a){ Account acc=new Account(100); System.out.println(acc.balance); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Add default constructor setting balance=50.', template: 'class Wallet { int balance; /* ctor */ }', solution: 'Wallet()' },
            { id: 2, type: 'output', prompt: 'Predict printed balance from parameterized constructor.', template: 'class Wallet { int b; Wallet(int x){ b=x; } public static void main(String[] a){ System.out.println(new Wallet(70).b); } }', solution: '70' },
            { id: 3, type: 'modify', prompt: 'Overload constructor to set name and balance.', template: 'class Wallet { int b; Wallet(int x){ b=x; } /* overload */ }', solution: 'Wallet(String' },
            { id: 4, type: 'fix', prompt: 'Fix wrong constructor name: void Wallet(){...} → Wallet(){...}.', template: 'class Wallet { void Wallet(){ } }', solution: 'Wallet()' },
            { id: 5, type: 'logic', prompt: 'Create Account with id and balance; print id:balance.', template: 'class Account { /* fields+ctors */ }', solution: 'Account(' }
        ]
    },
    "Inheritance": {
        content: `
            <h3>Inheritance</h3>
            <p>One class (child) extends another (parent) to reuse behavior.</p>
            <h4>Example</h4>
            <pre><code>class Animal { void speak(){ System.out.println("...");} }
class Dog extends Animal { void speak(){ System.out.println("Woof"); } }
class Main { public static void main(String[] a){ new Dog().speak(); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create Bike extends Vehicle; print “Bike moving”.', template: 'class Vehicle { void move(){ System.out.println("Moving"); } } /* child */', solution: 'extends Vehicle' },
            { id: 2, type: 'output', prompt: 'Predict: new Dog().speak(); prints?', template: 'class Animal { void speak(){ System.out.println("..."); } } class Dog extends Animal { void speak(){ System.out.println("Woof"); } } class Main { public static void main(String[] a){ new Dog().speak(); } }', solution: 'Woof' },
            { id: 3, type: 'modify', prompt: 'Call parent method using super.speak() then child message.', template: 'class Cat extends Animal { void speak(){ /* super then print */ } }', solution: 'super.speak' },
            { id: 4, type: 'fix', prompt: 'Add extends keyword to child declaration.', template: 'class Car { } class Electric { void charge(){ } }', solution: 'extends' },
            { id: 5, type: 'logic', prompt: 'Create Employee extends Person and print name from parent.', template: 'class Person { String name="Asha"; } /* child */', solution: 'System.out.println' }
        ]
    },
    "Polymorphism": {
        content: `
            <h3>Polymorphism</h3>
            <p>Same interface, different implementations. Base reference can point to child and call overridden methods.</p>
            <h4>Example</h4>
            <pre><code>class Shape { void draw(){ System.out.println("Shape"); } }
class Circle extends Shape { void draw(){ System.out.println("Circle"); } }
class Main { public static void main(String[] a){ Shape s = new Circle(); s.draw(); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Use Shape ref to call draw() of Rectangle.', template: 'class Rectangle extends Shape { void draw(){ System.out.println("Rect"); } } class Main { public static void main(String[] a){ /* polymorphic call */ } }', solution: 'Shape s = new Rectangle' },
            { id: 2, type: 'output', prompt: 'Predict: Shape s=new Circle(); s.draw();', template: 'class Shape { void draw(){ System.out.println("Shape"); } } class Circle extends Shape { void draw(){ System.out.println("Circle"); } }', solution: 'Circle' },
            { id: 3, type: 'modify', prompt: 'Add Triangle class overriding draw().', template: 'class Shape { void draw(){ System.out.println("Shape"); } } /* add Triangle */', solution: 'class Triangle' },
            { id: 4, type: 'fix', prompt: 'Fix static call on instance method: s.draw() not Shape.draw().', template: 'class Shape { void draw(){ } } class Main { public static void main(String[] a){ Shape s=new Shape(); Shape.draw(); } }', solution: 's.draw()' },
            { id: 5, type: 'logic', prompt: 'Create array of Shape and call draw() for each.', template: 'class Shape { void draw(){ System.out.println("S"); } } /* children */', solution: 'for(' }
        ]
    },
    "Encapsulation": {
        content: `
            <h3>Encapsulation</h3>
            <p>Hide data with private fields; expose via getters/setters.</p>
            <h4>Example</h4>
            <pre><code>class User { private String name; public String getName(){ return name; } public void setName(String n){ name=n; } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Add setPrice(double) and getPrice() to Product.', template: 'class Product { private double price; /* add methods */ }', solution: 'getPrice' },
            { id: 2, type: 'output', prompt: 'Predict after setName("Neo"): getName() prints?', template: 'class User { private String n; public void setName(String x){ n=x; } public String getName(){ return n; } }', solution: 'Neo' },
            { id: 3, type: 'modify', prompt: 'Validate setAge(int) to ignore negative values.', template: 'class Person { private int age; public void setAge(int a){ /* validate */ } }', solution: 'a<0' },
            { id: 4, type: 'fix', prompt: 'Fix direct field access compile error: make name private and use getter.', template: 'class User { String name; } class Main { public static void main(String[] a){ User u=new User(); System.out.println(u.name); } }', solution: 'private' },
            { id: 5, type: 'logic', prompt: 'BankAccount: deposit(amount) updates balance via setter.', template: 'class BankAccount { private int bal; /* methods */ }', solution: 'deposit' }
        ]
    },
    "Abstraction": {
        content: `
            <h3>Abstraction</h3>
            <p>Expose essentials, hide details using abstract classes.</p>
            <h4>Example</h4>
            <pre><code>abstract class Animal { abstract void sound(); }
class Cat extends Animal { void sound(){ System.out.println("Meow"); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Implement Dog that overrides sound().', template: 'abstract class Animal { abstract void sound(); } /* class Dog */', solution: 'void sound' },
            { id: 2, type: 'output', prompt: 'Predict: new Cat().sound(); prints?', template: 'abstract class Animal { abstract void sound(); } class Cat extends Animal { void sound(){ System.out.println("Meow"); } }', solution: 'Meow' },
            { id: 3, type: 'modify', prompt: 'Add abstract move() in Animal and implement in Cat.', template: 'abstract class Animal { abstract void sound(); /* add move */ }', solution: 'abstract void move' },
            { id: 4, type: 'fix', prompt: 'Fix error: cannot instantiate abstract class, remove new Animal().', template: 'abstract class A { } class Main { public static void main(String[] a){ A x = new A(); } }', solution: 'abstract' },
            { id: 5, type: 'logic', prompt: 'Payment abstract class with process(); implement UPIPayment.', template: 'abstract class Payment { abstract void process(); } /* class UPIPayment */', solution: 'process' }
        ]
    },
    "Interfaces": {
        content: `
            <h3>Interfaces</h3>
            <p>Define contracts; classes implement them.</p>
            <h4>Example</h4>
            <pre><code>interface Logger { void log(String m); }
class ConsoleLogger implements Logger { public void log(String m){ System.out.println(m); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Implement Notifier with notify(String).', template: 'interface Notifier { void notify(String m); } /* class */', solution: 'implements' },
            { id: 2, type: 'output', prompt: 'Predict: new ConsoleLogger().log("Hi");', template: 'interface Logger { void log(String m); } class ConsoleLogger implements Logger { public void log(String m){ System.out.println(m); } }', solution: 'Hi' },
            { id: 3, type: 'modify', prompt: 'Add EmailLogger implementing Logger.', template: 'interface Logger { void log(String m); } /* add class */', solution: 'class EmailLogger' },
            { id: 4, type: 'fix', prompt: 'Fix missing implements keyword.', template: 'interface L { void log(String m); } class CL { public void log(String m){ } }', solution: 'implements L' },
            { id: 5, type: 'logic', prompt: 'Make array of Logger and call log() on each.', template: 'interface Logger { void log(String m); } /* classes */', solution: 'Logger[]' }
        ]
    },
    "Packages": {
        content: `
            <h3>Packages</h3>
            <p>Group related classes; declare with package name at top and import as needed.</p>
            <h4>Example</h4>
            <pre><code>package com.educode.demo;
class Demo { public static void main(String[] a){ System.out.println("PKG"); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Add package line: package com.educode.app;', template: '/* add package line */ class App { }', solution: 'package com.educode.app' },
            { id: 2, type: 'output', prompt: 'Predict main print after adding package line.', template: 'package com.educode.app; class App { public static void main(String[] a){ System.out.println("OK"); } }', solution: 'OK' },
            { id: 3, type: 'modify', prompt: 'Create subpackage com.educode.util and a Util class.', template: '/* write package+class */', solution: 'com.educode.util' },
            { id: 4, type: 'fix', prompt: 'Fix package case-sensitivity issues (use lowercase).', template: 'package Com.EduCode; class A { }', solution: 'package com.educode' },
            { id: 5, type: 'logic', prompt: 'Explain where import is used when classes are in different packages.', template: '/* write comment in code */', solution: 'import' }
        ]
    },
    "String Handling": {
        content: `
            <h3>String Handling</h3>
            <p>Strings are immutable; use methods like length(), toUpperCase(), substring(), equals().</p>
            <h4>Example</h4>
            <pre><code>class S { public static void main(String[] a){ String s="java"; System.out.println(s.toUpperCase()); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Concatenate first and last name with a space.', template: 'class Main { public static void main(String[] a){ String f="Asha", l="R"; /* print full */ } }', solution: 'f + " " + l' },
            { id: 2, type: 'output', prompt: 'Predict: System.out.println("EduCode".length());', template: 'class Main { public static void main(String[] a){ System.out.println("EduCode".length()); } }', solution: '7' },
            { id: 3, type: 'modify', prompt: 'Change toUpperCase to toLowerCase and print.', template: 'class Main { public static void main(String[] a){ String s="JAVA"; System.out.println(s.toUpperCase()); } }', solution: 'toLowerCase' },
            { id: 4, type: 'fix', prompt: 'Fix substring indices: use s.substring(1,3).', template: 'class Main { public static void main(String[] a){ String s="abcd"; System.out.println(s.substring(1,5)); } }', solution: '1,3' },
            { id: 5, type: 'logic', prompt: 'Check equals for two strings and print Match/No Match.', template: 'class Main { public static void main(String[] a){ String a1="hi", a2="HI"; /* compare */ } }', solution: 'equals' }
        ]
    }
};

// Advanced Java content
const JAVA_ADVANCED_CONTENT = {
    "Exception Handling": {
        content: `
            <h3>Exception Handling</h3>
            <p>Use try/catch/finally to handle runtime errors and keep programs stable.</p>
            <h4>Example</h4>
            <pre><code>class EH {
    public static void main(String[] a){
        try { int x = 10/0; }
        catch(ArithmeticException ex){ System.out.println("Divide by zero"); }
        finally { System.out.println("Done"); }
    }
}</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Wrap risky code in try/catch and print error message.', template: 'class Main { public static void main(String[] a){ /* risky */ } }', solution: 'try' },
            { id: 2, type: 'output', prompt: 'Predict prints when dividing by zero in try-catch-finally.', template: 'class M { public static void main(String[] a){ try{ int x=1/0; } catch(Exception e){ System.out.println("Err"); } finally{ System.out.println("F"); } } }', solution: 'Err F' },
            { id: 3, type: 'modify', prompt: 'Add finally to close resource message.', template: 'class M { public static void main(String[] a){ try{ System.out.println("run"); } catch(Exception e){ } } }', solution: 'finally' },
            { id: 4, type: 'fix', prompt: 'Fix catch type from String to Exception.', template: 'class M { public static void main(String[] a){ try{ } catch(String e){ } } }', solution: 'Exception' },
            { id: 5, type: 'logic', prompt: 'Throw and catch IllegalArgumentException when input < 0.', template: 'class M { static void check(int n){ /* throw if <0 */ } public static void main(String[] a){ check(-1); } }', solution: 'throw new IllegalArgumentException' }
        ]
    },
    "Custom Exceptions": {
        content: `
            <h3>Custom Exceptions</h3>
            <p>Create your own exception classes to express domain errors.</p>
            <h4>Example</h4>
            <pre><code>class LowBalanceException extends Exception { LowBalanceException(String m){ super(m); } }
class Bank { void withdraw(int bal) throws LowBalanceException { if(bal<100) throw new LowBalanceException("Low balance"); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create InvalidAgeException extends Exception and use it.', template: 'class InvalidAgeException extends Exception { /* ctor */ } class App { /* throw */ }', solution: 'extends Exception' },
            { id: 2, type: 'output', prompt: 'Predict message from custom exception thrown.', template: 'class E extends Exception{ E(String m){ super(m);} } class M{ public static void main(String[] a){ try{ throw new E("X"); } catch(E e){ System.out.println(e.getMessage()); } } }', solution: 'X' },
            { id: 3, type: 'modify', prompt: 'Change exception to runtime (extends RuntimeException).', template: 'class E extends Exception { }', solution: 'RuntimeException' },
            { id: 4, type: 'fix', prompt: 'Add throws to method signature using checked exception.', template: 'class E extends Exception{ } class M{ static void f(){ throw new E(); } }', solution: 'throws E' },
            { id: 5, type: 'logic', prompt: 'Validate input and throw custom exception with message.', template: 'class Bad extends Exception{ Bad(String m){ super(m);} } class M{ static void check(String s){ /* throw when blank */ } }', solution: 'isEmpty' }
        ]
    },
    "Collections Framework": {
        content: `
            <h3>Collections Framework</h3>
            <p>Core interfaces and classes to store and process groups of objects.</p>
            <h4>Example</h4>
            <pre><code>import java.util.*;
class C { public static void main(String[] a){ List<String> list = new ArrayList<>(); list.add("A"); System.out.println(list.size()); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create ArrayList<Integer> and add 3 numbers, then print size.', template: 'import java.util.*; class M{ public static void main(String[] a){ /* list */ } }', solution: 'ArrayList' },
            { id: 2, type: 'output', prompt: 'Predict size after add/remove.', template: 'import java.util.*; class M{ public static void main(String[] a){ List<Integer> l=new ArrayList<>(); l.add(1); l.add(2); l.remove(0); System.out.println(l.size()); } }', solution: '1' },
            { id: 3, type: 'modify', prompt: 'Switch implementation to LinkedList.', template: 'import java.util.*; class M{ public static void main(String[] a){ List<String> l=new ArrayList<>(); } }', solution: 'LinkedList' },
            { id: 4, type: 'fix', prompt: 'Fix raw type warning: use generics List<String>.', template: 'import java.util.*; class M{ public static void main(String[] a){ List l=new ArrayList(); } }', solution: '<String>' },
            { id: 5, type: 'logic', prompt: 'Iterate list and print elements on one line.', template: 'import java.util.*; class M{ public static void main(String[] a){ List<String> l=Arrays.asList("A","B"); /* iterate */ } }', solution: 'for(' }
        ]
    },
    "List, Set, Map": {
        content: `
            <h3>List, Set, Map</h3>
            <p>List keeps order and duplicates; Set unique elements; Map key-value pairs.</p>
            <h4>Example</h4>
            <pre><code>import java.util.*;
class LSM { public static void main(String[] a){ Set<Integer> s=new HashSet<>(); s.add(1); s.add(1); System.out.println(s.size()); Map<String,Integer> m=new HashMap<>(); m.put("a",1); System.out.println(m.get("a")); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Use Set to store unique cities and print count.', template: 'import java.util.*; class M{ public static void main(String[] a){ /* set */ } }', solution: 'HashSet' },
            { id: 2, type: 'output', prompt: 'Predict after adding duplicate to Set.', template: 'import java.util.*; class M{ public static void main(String[] a){ Set<Integer> s=new HashSet<>(); s.add(2); s.add(2); System.out.println(s.size()); } }', solution: '1' },
            { id: 3, type: 'modify', prompt: 'Change Map to TreeMap and print first key.', template: 'import java.util.*; class M{ public static void main(String[] a){ Map<String,Integer> m=new HashMap<>(); m.put("b",2); m.put("a",1); /* print first key */ } }', solution: 'TreeMap' },
            { id: 4, type: 'fix', prompt: 'Fix null pointer when reading absent key: check containsKey.', template: 'import java.util.*; class M{ public static void main(String[] a){ Map<String,Integer> m=new HashMap<>(); System.out.println(m.get("x").toString()); } }', solution: 'containsKey' },
            { id: 5, type: 'logic', prompt: 'Count word frequency using Map.', template: 'import java.util.*; class M{ public static void main(String[] a){ String[] w={"a","b","a"}; /* freq */ } }', solution: 'put' }
        ]
    },
    "File Handling": {
        content: `
            <h3>File Handling</h3>
            <p>Use java.io and java.nio to read/write files safely.</p>
            <h4>Example</h4>
            <pre><code>import java.io.*;
class F { public static void main(String[] a) throws Exception { try(BufferedWriter bw=new BufferedWriter(new FileWriter("out.txt"))){ bw.write("Hi"); } } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Write lines to a file using BufferedWriter.', template: 'import java.io.*; class M{ public static void main(String[] a) throws Exception{ /* write */ } }', solution: 'BufferedWriter' },
            { id: 2, type: 'output', prompt: 'Predict: reading an empty file length.', template: 'import java.io.*; class M{ public static void main(String[] a) throws Exception{ File f=new File("e.txt"); System.out.println(f.length()); } }', solution: '0' },
            { id: 3, type: 'modify', prompt: 'Switch to try-with-resources.', template: 'import java.io.*; class M{ public static void main(String[] a) throws Exception{ BufferedReader br=new BufferedReader(new FileReader("x.txt")); } }', solution: 'try(' },
            { id: 4, type: 'fix', prompt: 'Close stream to avoid leak.', template: 'import java.io.*; class M{ public static void main(String[] a) throws Exception{ BufferedWriter bw=new BufferedWriter(new FileWriter("x.txt")); bw.write("A"); } }', solution: 'close' },
            { id: 5, type: 'logic', prompt: 'Append to existing file without overwriting.', template: 'import java.io.*; class M{ public static void main(String[] a) throws Exception{ /* open append */ } }', solution: 'FileWriter("x", true)' }
        ]
    },
    "Multithreading": {
        content: `
            <h3>Multithreading</h3>
            <p>Run tasks concurrently using Thread or Runnable.</p>
            <h4>Example</h4>
            <pre><code>class T extends Thread { public void run(){ System.out.println("Work"); } }
class M { public static void main(String[] a){ new T().start(); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create Runnable that prints current thread name.', template: 'class M{ public static void main(String[] a){ /* runnable */ } }', solution: 'new Thread' },
            { id: 2, type: 'output', prompt: 'Predict start vs run difference.', template: 'class T extends Thread{ public void run(){ System.out.println("R"); } } class M{ public static void main(String[] a){ T t=new T(); t.run(); } }', solution: 'R' },
            { id: 3, type: 'modify', prompt: 'Start two threads and print messages.', template: 'class M{ public static void main(String[] a){ /* two threads */ } }', solution: 'start()' },
            { id: 4, type: 'fix', prompt: 'Fix IllegalThreadStateException by not starting same thread twice.', template: 'class T extends Thread{ public void run(){ } } class M{ public static void main(String[] a){ T t=new T(); t.start(); t.start(); } }', solution: 'new T()' },
            { id: 5, type: 'logic', prompt: 'Use join() to wait for threads to finish.', template: 'class M{ public static void main(String[] a) throws Exception{ /* join */ } }', solution: 'join' }
        ]
    },
    "Synchronization": {
        content: `
            <h3>Synchronization</h3>
            <p>Coordinate thread access to shared data using synchronized, locks.</p>
            <h4>Example</h4>
            <pre><code>class Counter { int c; synchronized void inc(){ c++; } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Add synchronized to method update().', template: 'class Safe { void update(){ /* sync */ } }', solution: 'synchronized' },
            { id: 2, type: 'output', prompt: 'Predict consistent count using synchronized inc.', template: 'class C{ int c; synchronized void inc(){ c++; } }', solution: 'consistency' },
            { id: 3, type: 'modify', prompt: 'Use synchronized block on this.', template: 'class S{ void go(){ /* block */ } }', solution: 'synchronized(this)' },
            { id: 4, type: 'fix', prompt: 'Avoid race: move c++ inside synchronized block.', template: 'class C{ int c; void inc(){ c++; } }', solution: 'synchronized' },
            { id: 5, type: 'logic', prompt: 'Use ReentrantLock for fine control.', template: 'class M{ public static void main(String[] a){ /* lock */ } }', solution: 'ReentrantLock' }
        ]
    },
    "Streams": {
        content: `
            <h3>Streams</h3>
            <p>Functional-style operations on collections: map, filter, reduce.</p>
            <h4>Example</h4>
            <pre><code>import java.util.*;
class S { public static void main(String[] a){ List<Integer> l=Arrays.asList(1,2,3); l.stream().map(x->x*2).forEach(System.out::println); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Filter even numbers and print.', template: 'import java.util.*; class M{ public static void main(String[] a){ List<Integer> l=Arrays.asList(1,2,3,4); /* stream */ } }', solution: 'filter' },
            { id: 2, type: 'output', prompt: 'Predict output of map x->x+1.', template: 'import java.util.*; class M{ public static void main(String[] a){ List<Integer> l=Arrays.asList(1,2); l.stream().map(x->x+1).forEach(System.out::println); } }', solution: '2 3' },
            { id: 3, type: 'modify', prompt: 'Use reduce to sum list.', template: 'import java.util.*; class M{ public static void main(String[] a){ List<Integer> l=Arrays.asList(1,2,3); /* reduce */ } }', solution: 'reduce' },
            { id: 4, type: 'fix', prompt: 'Fix null stream error: use Stream.of.', template: 'import java.util.stream.*; class M{ public static void main(String[] a){ List<Integer> l=null; l.stream(); } }', solution: 'Stream.of' },
            { id: 5, type: 'logic', prompt: 'Convert names to uppercase and collect to list.', template: 'import java.util.*; class M{ public static void main(String[] a){ List<String> n=Arrays.asList("a","b"); /* map+collect */ } }', solution: 'collect' }
        ]
    },
    "Lambda Expressions": {
        content: `
            <h3>Lambda Expressions</h3>
            <p>Concise functions for functional interfaces. Syntax: (args) -> body</p>
            <h4>Example</h4>
            <pre><code>import java.util.*;
class L { public static void main(String[] a){ List<Integer> l=Arrays.asList(1,2); l.forEach(x -> System.out.println(x)); } }</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Define Comparator<Integer> with lambda for descending sort.', template: 'import java.util.*; class M{ public static void main(String[] a){ /* comparator */ } }', solution: '(a,b) -> b-a' },
            { id: 2, type: 'output', prompt: 'Predict forEach lambda prints.', template: 'import java.util.*; class M{ public static void main(String[] a){ Arrays.asList("A","B").forEach(s->System.out.println(s)); } }', solution: 'A B' },
            { id: 3, type: 'modify', prompt: 'Change lambda to method reference System.out::println.', template: 'import java.util.*; class M{ public static void main(String[] a){ Arrays.asList(1,2).forEach(x->System.out.println(x)); } }', solution: 'System.out::println' },
            { id: 4, type: 'fix', prompt: 'Fix missing functional interface type: use Predicate<String>.', template: 'import java.util.function.*; class M{ public static void main(String[] a){ /* predicate */ } }', solution: 'Predicate<String>' },
            { id: 5, type: 'logic', prompt: 'Compose two lambdas: increment then double.', template: 'import java.util.function.*; class M{ public static void main(String[] a){ /* compose */ } }', solution: 'andThen' }
        ]
    },
    "JDBC": {
        content: `
            <h3>JDBC</h3>
            <p>Connect to databases using DriverManager, Connection, PreparedStatement.</p>
            <h4>Example</h4>
            <pre><code>// Pseudo demo (requires driver on classpath)
import java.sql.*;
class J { public static void main(String[] a) throws Exception { /* Connection conn=DriverManager.getConnection(url,user,pw); */ }
}</code></pre>
        `,
        questions: [
            { id: 1, type: 'practice', prompt: 'Write code skeleton to open a JDBC connection (commented).', template: 'import java.sql.*; class M{ public static void main(String[] a){ /* DriverManager.getConnection */ } }', solution: 'DriverManager' },
            { id: 2, type: 'output', prompt: 'Explain what PreparedStatement prevents (SQL injection).', template: '/* write short print */', solution: 'SQL injection' },
            { id: 3, type: 'modify', prompt: 'Change Statement to PreparedStatement with parameter.', template: 'import java.sql.*; class M{ public static void main(String[] a){ /* stmt */ } }', solution: 'PreparedStatement' },
            { id: 4, type: 'fix', prompt: 'Close Connection in finally/try-with-resources.', template: 'import java.sql.*; class M{ public static void main(String[] a){ Connection c=null; /* open */ } }', solution: 'close' },
            { id: 5, type: 'logic', prompt: 'Print “Connected” when connection is not null (commented).', template: 'import java.sql.*; class M{ public static void main(String[] a){ /* connect */ } }', solution: 'Connected' }
        ]
    }
};

const PYTHON_BEGINNER_CONTENT = {
    "Python Introduction & Installation": {
        content: `<h3>Python Introduction & Installation</h3>
<p><strong>Industry Impact:</strong> Spotify, Instagram, and Netflix use Python for rapid development.</p>
<h4>Getting Started:</h4>
<ul>
<li>Download Python 3.x from python.org</li>
<li>Check installation: <code>python --version</code></li>
<li>Run code: <code>python script.py</code></li>
<li>Interactive mode: <code>python</code> for REPL</li>
</ul>
<h4>Your First Program:</h4>
<pre><code>print("Welcome to Python!")
name = input("What's your name? ")
print(f"Hello, {name}!")</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Write code to print "Python Rocks".', template: 'print()', solution: 'print' },
            { id: 2, type: 'output', prompt: 'What does print("2" + "3") output?', template: '# write answer in comment', solution: '23' },
            { id: 3, type: 'modify', prompt: 'Add input() to ask user name and print greeting.', template: 'name = ', solution: 'input' },
            { id: 4, type: 'fix', prompt: 'Fix syntax error: print"Hello" → print("Hello")', template: 'print"Hello"', solution: 'print("Hello")' },
            { id: 5, type: 'logic', prompt: 'Print 3 different strings on separate lines.', template: 'print()', solution: 'print' }
        ]
    },
    "Python Syntax & Indentation": {
        content: `<h3>Python Syntax & Indentation</h3>
<p>Python uses indentation to define code blocks (no braces!).</p>
<h4>Key Rules:</h4>
<ul>
<li>4 spaces per indentation level</li>
<li>Colons (:) end statements that start blocks</li>
<li>Case-sensitive (x ≠ X)</li>
<li>Comments start with #</li>
</ul>
<h4>Example:</h4>
<pre><code>if True:
    print("Indented block")
    if True:
        print("Double indented")
print("Back to main")</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Write if block that prints message when True.', template: 'if True:\n    ', solution: 'print' },
            { id: 2, type: 'output', prompt: 'Spot indentation error and explain.', template: 'if True:\nprint("error")', solution: 'IndentationError' },
            { id: 3, type: 'modify', prompt: 'Add nested if block inside if block.', template: 'if True:\n    if True:\n        ', solution: 'print' },
            { id: 4, type: 'fix', prompt: 'Fix: missing colon after if statement.', template: 'if x == 5\n    print(x)', solution: 'if x == 5:' },
            { id: 5, type: 'logic', prompt: 'Create nested indentation with 3 levels.', template: '# Level 1\nif True:\n    # Level 2\n    if True:\n        # Level 3', solution: 'print' }
        ]
    },
    "Variables & Data Types": {
        content: `<h3>Variables & Data Types</h3>
<p>Python is dynamically typed; type is determined at runtime.</p>
<h4>Core Data Types:</h4>
<ul>
<li><strong>int</strong>: 42, -5, 0</li>
<li><strong>float</strong>: 3.14, -0.5</li>
<li><strong>str</strong>: "Hello", 'World'</li>
<li><strong>bool</strong>: True, False</li>
<li><strong>None</strong>: Null equivalent</li>
</ul>
<h4>Example:</h4>
<pre><code>age = 25
height = 5.9
name = "Asha"
is_student = True
print(f"{name} is {age} years old")</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create variables for name, age, and price.', template: 'name = \nage = \nprice = ', solution: '=' },
            { id: 2, type: 'output', prompt: 'What type is 42? (int, float, str)', template: 'x = 42\nprint(type(x))', solution: 'int' },
            { id: 3, type: 'modify', prompt: 'Change variable type from int to string.', template: 'x = 100\nx = ', solution: '"' },
            { id: 4, type: 'fix', prompt: 'Fix: assign value 25 to variable age correctly.', template: 'age == 25', solution: 'age = 25' },
            { id: 5, type: 'logic', prompt: 'Create mixed type variables and print all.', template: '# int, float, str, bool', solution: 'print' }
        ]
    },
    "Input / Output Operations": {
        content: `<h3>Input / Output Operations</h3>
<p>Read user input and format output clearly.</p>
<h4>I/O Functions:</h4>
<ul>
<li><code>print()</code> - Display output</li>
<li><code>input()</code> - Read user input (always string)</li>
<li>f-strings - Format with variables</li>
</ul>
<h4>Example:</h4>
<pre><code>name = input("Enter name: ")
age = int(input("Enter age: "))
print(f"Hello {name}, you are {age} years old")</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Use input() to get user name and print it.', template: 'name = ', solution: 'input' },
            { id: 2, type: 'output', prompt: 'Convert string input to integer: age = int(input(...)))', template: '# complete the code', solution: 'int(input' },
            { id: 3, type: 'modify', prompt: 'Use f-string to print name and age formatted.', template: 'name = "Asha"\nage = 20\nprint(f', solution: 'f"' },
            { id: 4, type: 'fix', prompt: 'Fix: age is string, convert to int before math.', template: 'age = input("Age: ")\nprint(age + 5)', solution: 'int(input' },
            { id: 5, type: 'logic', prompt: 'Ask user for product name and price, print receipt.', template: 'name = input()\nprice = ', solution: 'input' }
        ]
    },
    "Operators & Expressions": {
        content: `<h3>Operators & Expressions</h3>
<p>Perform calculations and comparisons.</p>
<h4>Operator Types:</h4>
<ul>
<li><strong>Arithmetic</strong>: +, -, *, /, //, %, **</li>
<li><strong>Comparison</strong>: ==, !=, <, >, <=, >=</li>
<li><strong>Logical</strong>: and, or, not</li>
</ul>
<h4>Example:</h4>
<pre><code>x, y = 10, 3
print(x + y)      # 13
print(x > y)      # True
print(x > 5 and y < 5)  # True</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Perform division and floor division.', template: 'x = 10\nprint(x / 3)\nprint(x // 3)', solution: '/' },
            { id: 2, type: 'output', prompt: 'Calculate 2**5 (2 to power 5).', template: 'print(2 ** 5)', solution: '32' },
            { id: 3, type: 'modify', prompt: 'Compare two numbers and print True/False.', template: 'a = 15\nb = 20\nprint(a ', solution: '>' },
            { id: 4, type: 'fix', prompt: 'Fix: use and not & for logical AND.', template: 'if x > 5 & y < 10:', solution: 'and' },
            { id: 5, type: 'logic', prompt: 'Check if age is 18-65 (valid working age).', template: 'age = 30\nif age ', solution: 'age >= 18 and age <= 65' }
        ]
    },
    "Conditional Statements (if, elif, else)": {
        content: `<h3>Conditional Statements</h3>
<p>Make decisions in code with if, elif, else.</p>
<h4>Pattern:</h4>
<pre><code>if condition:
    # do this
elif other_condition:
    # do that
else:
    # default</code></pre>
<h4>Example:</h4>
<pre><code>score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("C")</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Write if-else for even/odd number.', template: 'n = 7\nif n % 2 == 0:', solution: 'even' },
            { id: 2, type: 'output', prompt: 'Trace: if 5>3 print "Yes" else print "No".', template: '# predict output', solution: 'Yes' },
            { id: 3, type: 'modify', prompt: 'Add elif for three grades: 90+, 80+, else.', template: 'score = 85\nif score >= 90:\nelse:', solution: 'elif' },
            { id: 4, type: 'fix', prompt: 'Fix: use == not = for comparison.', template: 'if age = 18:', solution: 'age == 18' },
            { id: 5, type: 'logic', prompt: 'Check age: <13=child, 13-17=teen, 18+=adult.', template: 'age = 15\nif age < 13:', solution: 'elif' }
        ]
    },
    "Loops (for, while)": {
        content: `<h3>Loops</h3>
<p>Repeat code for items in a list or while condition is true.</p>
<h4>Loop Types:</h4>
<ul>
<li><strong>for</strong> - Fixed iterations over sequence</li>
<li><strong>while</strong> - Repeat while condition is true</li>
<li><strong>break</strong> - Exit loop early</li>
<li><strong>continue</strong> - Skip to next iteration</li>
</ul>
<h4>Example:</h4>
<pre><code>for i in range(5):
    print(i)  # 0,1,2,3,4

while count < 3:
    print(count)
    count += 1</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Print numbers 1-10 using for loop.', template: 'for i in range(', solution: 'range' },
            { id: 2, type: 'output', prompt: 'Predict output: for x in [1,2,3]: print(x*2)', template: '# trace execution', solution: '2' },
            { id: 3, type: 'modify', prompt: 'Use while loop to count from 1 to 5.', template: 'count = 1\nwhile count ', solution: '<=' },
            { id: 4, type: 'fix', prompt: 'Fix infinite loop: add count increment.', template: 'while True:\n    print("hi")', solution: 'count' },
            { id: 5, type: 'logic', prompt: 'Sum numbers 1-100 using loop.', template: 'total = 0\nfor i in range(', solution: 'total +=' }
        ]
    },
    "Functions – Basics": {
        content: `<h3>Functions – Basics</h3>
<p>Reusable blocks of code defined with def keyword.</p>
<h4>Anatomy:</h4>
<pre><code>def greet(name):
    message = f"Hello, {name}!"
    return message

result = greet("Asha")
print(result)</code></pre>
<h4>Key Points:</h4>
<ul>
<li>Define with <code>def</code>, parameters in ()</li>
<li>Return value with <code>return</code></li>
<li>Call function with name(args)</li>
</ul>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Define function add(a, b) that returns sum.', template: 'def add(a, b):\n    return ', solution: 'a + b' },
            { id: 2, type: 'output', prompt: 'Predict: def double(x): return x*2; double(5)', template: '# trace call', solution: '10' },
            { id: 3, type: 'modify', prompt: 'Add second parameter city to greet function.', template: 'def greet(name, city):\n    return f', solution: 'city' },
            { id: 4, type: 'fix', prompt: 'Fix: add missing return statement.', template: 'def add(a,b):\n    result = a+b', solution: 'return' },
            { id: 5, type: 'logic', prompt: 'Create function to check if number is positive.', template: 'def is_positive(n):\n    return ', solution: 'n > 0' }
        ]
    },
    "Lists, Tuples & Sets": {
        content: `<h3>Lists, Tuples & Sets</h3>
<p>Store multiple items in collections.</p>
<h4>Collection Types:</h4>
<ul>
<li><strong>List</strong> [1,2,3] - Mutable, ordered</li>
<li><strong>Tuple</strong> (1,2,3) - Immutable, ordered</li>
<li><strong>Set</strong> {1,2,3} - Unique items, unordered</li>
</ul>
<h4>Example:</h4>
<pre><code>fruits = ["apple", "banana", "cherry"]
fruits.append("date")
fruits[0] = "orange"
print(fruits[1:3])  # slicing</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create list of 3 colors and print.', template: 'colors = [', solution: '[' },
            { id: 2, type: 'output', prompt: 'Predict: [1,2,3][1]', template: '# what is value?', solution: '2' },
            { id: 3, type: 'modify', prompt: 'Append "dog" to list and print length.', template: 'animals = ["cat", "bird"]\nanimals.', solution: 'append' },
            { id: 4, type: 'fix', prompt: 'Fix: tuple is immutable, use list instead.', template: 'items = (1,2,3)\nitems[0] = 10', solution: '[1,2,3]' },
            { id: 5, type: 'logic', prompt: 'Create set of numbers, add 99, check if in set.', template: 'numbers = {1,2,3}\nnumbers.add(', solution: '99' }
        ]
    },
    "Dictionaries & Simple Programs": {
        content: `<h3>Dictionaries & Simple Programs</h3>
<p>Store key-value pairs for organized data.</p>
<h4>Dictionary Basics:</h4>
<ul>
<li>Define: <code>dict = {"key": value}</code></li>
<li>Access: <code>dict["key"]</code></li>
<li>Add/Update: <code>dict["new"] = value</code></li>
<li>Delete: <code>del dict["key"]</code></li>
</ul>
<h4>Example - Phone Directory:</h4>
<pre><code>contacts = {"Asha": 1001, "Ravi": 1002}
contacts["Sita"] = 1003
print(contacts["Asha"])</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create dict with name:age pairs.', template: 'person = {', solution: '{' },
            { id: 2, type: 'output', prompt: 'Print value for key "name" in dict.', template: 'student = {"name": "Asha", "age": 20}\nprint(', solution: 'name' },
            { id: 3, type: 'modify', prompt: 'Add new key "email" to dict.', template: 'user = {"name": "Ravi"}\nuser[', solution: 'email' },
            { id: 4, type: 'fix', prompt: 'Fix: use ["key"] not .key for dict access.', template: 'data.name', solution: 'data["name"]' },
            { id: 5, type: 'logic', prompt: 'Create phone directory, add 3 contacts, print one.', template: 'phonebook = {\n', solution: '{' }
        ]
    }
};

const PYTHON_INTERMEDIATE_CONTENT = {
    "Advanced Functions (args, kwargs, lambda)": {
        content: `<h3>Advanced Functions</h3>
<p>Master flexible function parameters and anonymous functions.</p>
<h4>Concepts:</h4>
<ul>
<li><strong>*args</strong> - Variable positional arguments (tuple)</li>
<li><strong>**kwargs</strong> - Variable keyword arguments (dict)</li>
<li><strong>lambda</strong> - Anonymous functions for quick operations</li>
</ul>
<h4>Example:</h4>
<pre><code>def greet(*names):
    for name in names:
        print(f"Hello, {name}")

greet("Asha", "Ravi", "Sita")

# Lambda
double = lambda x: x * 2
print(double(5))  # 10</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Define function with *args to sum all numbers.', template: 'def sum_all(*args):\n    total = 0\n    for num in args:\n        total += num\n    return total', solution: '*args' },
            { id: 2, type: 'output', prompt: 'Call sum_all(1,2,3,4,5) and predict result.', template: '# trace execution', solution: '15' },
            { id: 3, type: 'modify', prompt: 'Add **kwargs to print key-value pairs.', template: 'def display(**kwargs):\n    for k, v in kwargs.items():', solution: '**kwargs' },
            { id: 4, type: 'fix', prompt: 'Fix lambda syntax: lambda x: x*2 not lambda x => x*2', template: 'square = lambda x => x**2', solution: 'lambda x: x**2' },
            { id: 5, type: 'logic', prompt: 'Use lambda with map() to square list of numbers.', template: 'nums = [1,2,3,4,5]\nresult = list(map(lambda x: ', solution: 'x**2' }
        ]
    },
    "String Manipulation & Formatting": {
        content: `<h3>String Manipulation & Formatting</h3>
<p>Powerful string operations and professional formatting.</p>
<h4>Methods:</h4>
<ul>
<li><code>upper(), lower(), capitalize()</code> - Case changes</li>
<li><code>strip(), split(), join()</code> - Trimming & joining</li>
<li><code>replace(), find()</code> - Searching & replacing</li>
<li>f-strings - Modern formatting</li>
</ul>
<h4>Example:</h4>
<pre><code>text = "  Python Programming  "
print(text.strip().upper())  # PYTHON PROGRAMMING

words = "Hello Python World".split()
print(" | ".join(words))  # Hello | Python | World</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Convert string to uppercase using upper().', template: 'name = "python"\nprint(name.', solution: 'upper()' },
            { id: 2, type: 'output', prompt: 'Predict output: "hello".find("l")', template: '# what index?', solution: '2' },
            { id: 3, type: 'modify', prompt: 'Split sentence into words using split().', template: 'sentence = "I love Python"\nwords = sentence.', solution: 'split()' },
            { id: 4, type: 'fix', prompt: 'Replace all commas with spaces.', template: 'text = "a,b,c,d"\ntext.replace(",", " ")', solution: 'replace' },
            { id: 5, type: 'logic', prompt: 'Format string with 3 variables using f-string.', template: 'name = "Asha"\nage = 20\ncity = "Delhi"\nprint(f', solution: 'f"' }
        ]
    },
    "File Handling (read/write/update)": {
        content: `<h3>File Handling</h3>
<p>Read from and write to files.</p>
<h4>File Modes:</h4>
<ul>
<li><strong>'r'</strong> - Read (default)</li>
<li><strong>'w'</strong> - Write (overwrite)</li>
<li><strong>'a'</strong> - Append</li>
<li><strong>'r+'</strong> - Read & Write</li>
</ul>
<h4>Example:</h4>
<pre><code># Write
with open("data.txt", "w") as f:
    f.write("Hello, File!")

# Read
with open("data.txt", "r") as f:
    content = f.read()
    print(content)</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Write "Welcome" to a file named output.txt.', template: 'with open("output.txt", "w") as f:\n    f.', solution: 'write' },
            { id: 2, type: 'output', prompt: 'Read entire file content using read().', template: 'with open("file.txt", "r") as f:\n    content = f.', solution: 'read()' },
            { id: 3, type: 'modify', prompt: 'Read file line by line using readlines().', template: 'with open("file.txt", "r") as f:\n    lines = f.', solution: 'readlines()' },
            { id: 4, type: 'fix', prompt: 'Always close file or use with statement.', template: 'f = open("file.txt")\ndata = f.read()\nf.close()', solution: 'with' },
            { id: 5, type: 'logic', prompt: 'Append 5 names to names.txt file.', template: 'with open("names.txt", "a") as f:\n    for name in ["Asha", "Ravi"]:\n        f.', solution: 'write' }
        ]
    },
    "Error Handling (try, except, finally)": {
        content: `<h3>Error Handling</h3>
<p>Gracefully handle errors without crashing.</p>
<h4>Structure:</h4>
<pre><code>try:
    # Code that might error
    x = int(input("Number: "))
    result = 10 / x
except ValueError:
    print("Invalid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
finally:
    print("Done")</code></pre>
<h4>Common Exceptions:</h4>
<ul>
<li>ValueError, TypeError, ZeroDivisionError, FileNotFoundError</li>
</ul>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Wrap int(input()) in try-except for ValueError.', template: 'try:\n    x = int(input())\nexcept ', solution: 'ValueError' },
            { id: 2, type: 'output', prompt: 'What error for 10/0?', template: '# name the exception', solution: 'ZeroDivisionError' },
            { id: 3, type: 'modify', prompt: 'Add finally block to always print "Complete".', template: 'try:\n    pass\nexcept:\n    pass\n', solution: 'finally' },
            { id: 4, type: 'fix', prompt: 'Fix: catch IndexError not just Exception.', template: 'except Exception:\n    pass', solution: 'IndexError' },
            { id: 5, type: 'logic', prompt: 'Handle file not found and value conversion errors.', template: 'try:\n    with open(', solution: 'FileNotFoundError' }
        ]
    },
    "Modules & Packages": {
        content: `<h3>Modules & Packages</h3>
<p>Organize code into reusable modules and packages.</p>
<h4>Concepts:</h4>
<ul>
<li><strong>Module</strong> - Single .py file with functions/classes</li>
<li><strong>Package</strong> - Directory with __init__.py and modules</li>
<li><strong>import</strong> - Load module/function</li>
</ul>
<h4>Example:</h4>
<pre><code>import math
from datetime import datetime

print(math.sqrt(16))  # 4.0
print(datetime.now())

from collections import Counter
data = Counter([1,1,2,3,3,3])
print(data[3])  # 3</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Import math module and use sqrt().', template: 'import math\nprint(math.sqrt(', solution: 'math.sqrt' },
            { id: 2, type: 'output', prompt: 'Predict: from datetime import datetime; print(type(datetime.now()))', template: '# what type?', solution: 'datetime' },
            { id: 3, type: 'modify', prompt: 'Import Counter from collections and count items.', template: 'from collections import Counter\ndata = ', solution: 'Counter' },
            { id: 4, type: 'fix', prompt: 'Fix: import random before using random.choice().', template: 'nums = random.choice([1,2,3])', solution: 'import random' },
            { id: 5, type: 'logic', prompt: 'Use os module to get current directory and list files.', template: 'import os\nprint(os.', solution: 'getcwd()' }
        ]
    },
    "List / Dict Comprehensions": {
        content: `<h3>List / Dict Comprehensions</h3>
<p>Create lists and dicts in a single elegant line.</p>
<h4>Syntax:</h4>
<ul>
<li>List: <code>[expr for item in iterable if condition]</code></li>
<li>Dict: <code>{key: value for item in iterable if condition}</code></li>
</ul>
<h4>Example:</h4>
<pre><code># List comprehension
squares = [x**2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]

# Dict comprehension
users = {i: f"user{i}" for i in range(1, 4)}
print(users)  # {1: 'user1', 2: 'user2', 3: 'user3'}</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create list of even numbers 0-10 using comprehension.', template: 'evens = [x for x in range(11) if ', solution: 'x % 2 == 0' },
            { id: 2, type: 'output', prompt: 'Predict: [x*2 for x in [1,2,3]]', template: '# what list?', solution: '[2, 4, 6]' },
            { id: 3, type: 'modify', prompt: 'Create dict {1: "a", 2: "b", 3: "c"} with comprehension.', template: '{x: chr(64+x) for x in ', solution: 'range' },
            { id: 4, type: 'fix', prompt: 'Fix nested loops in list comprehension.', template: '[[x+y for x in range(2)] for y in range(3)]', solution: 'for' },
            { id: 5, type: 'logic', prompt: 'Filter list to include only strings with length > 3.', template: 'words = ["a", "apple", "bat", "balloon"]\nlong = [w for w in words if ', solution: 'len(w) > 3' }
        ]
    },
    "Object-Oriented Programming (OOP Basics)": {
        content: `<h3>Object-Oriented Programming Basics</h3>
<p>Model real-world entities with classes.</p>
<h4>OOP Concepts:</h4>
<ul>
<li><strong>Class</strong> - Blueprint for objects</li>
<li><strong>Object/Instance</strong> - Created from class</li>
<li><strong>Attributes</strong> - Data/properties</li>
<li><strong>Methods</strong> - Functions inside class</li>
</ul>
<h4>Example:</h4>
<pre><code>class Dog:
    def __init__(self, name):
        self.name = name
    
    def bark(self):
        return f"{self.name} says Woof!"

dog = Dog("Buddy")
print(dog.bark())</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create class Car with __init__ method.', template: 'class Car:\n    def __init__(self, brand):\n        self.', solution: 'self.brand' },
            { id: 2, type: 'output', prompt: 'Create Car("Tesla") and predict object type.', template: '# what is type?', solution: 'Car' },
            { id: 3, type: 'modify', prompt: 'Add method to Car that returns brand.', template: 'def get_brand(self):\n    return ', solution: 'self.brand' },
            { id: 4, type: 'fix', prompt: 'Fix: __init__ must have self as first parameter.', template: 'def __init__(name):', solution: '__init__(self, name)' },
            { id: 5, type: 'logic', prompt: 'Create Person class with name, age; add greet method.', template: 'class Person:\n    def __init__(self, name, age):', solution: 'self' }
        ]
    },
    "Classes & Objects": {
        content: `<h3>Classes & Objects</h3>
<p>Deep dive into class design and object interaction.</p>
<h4>Class Structure:</h4>
<ul>
<li>Attributes (instance/class)</li>
<li>Methods (instance/class/static)</li>
<li>Property decorators (@property)</li>
</ul>
<h4>Example:</h4>
<pre><code>class Account:
    def __init__(self, balance=0):
        self._balance = balance
    
    @property
    def balance(self):
        return self._balance
    
    def deposit(self, amount):
        self._balance += amount

acc = Account(1000)
print(acc.balance)
acc.deposit(500)</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Add class variable shared_value to Track class.', template: 'class Track:\n    shared_value = 0', solution: 'class' },
            { id: 2, type: 'output', prompt: 'Predict: create 2 instances, modify class var.', template: '# what changes?', solution: 'both' },
            { id: 3, type: 'modify', prompt: 'Add @classmethod to get class variable.', template: '@classmethod\n    def get_shared(cls):', solution: '@classmethod' },
            { id: 4, type: 'fix', prompt: 'Fix: use self.attr not self._attr unless private.', template: 'self._name = "test"', solution: 'self.name' },
            { id: 5, type: 'logic', prompt: 'Create Bank class with deposit, withdraw, balance methods.', template: 'class Bank:\n    def __init__(self, initial):', solution: 'self' }
        ]
    },
    "Virtual Environments & pip": {
        content: `<h3>Virtual Environments & pip</h3>
<p>Manage dependencies and project isolation.</p>
<h4>Workflow:</h4>
<ul>
<li><code>python -m venv myenv</code> - Create virtual environment</li>
<li><code>source myenv/bin/activate</code> (Linux/Mac) or <code>myenv\\Scripts\\activate</code> (Windows)</li>
<li><code>pip install package_name</code> - Install package</li>
<li><code>pip freeze > requirements.txt</code> - Save dependencies</li>
</ul>
<h4>Example:</h4>
<pre><code>pip install requests
pip install -r requirements.txt
pip list  # Show installed packages</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create virtual environment named venv.', template: 'python -m venv ', solution: 'venv' },
            { id: 2, type: 'output', prompt: 'Command to activate venv on Windows.', template: '# write command', solution: 'activate' },
            { id: 3, type: 'modify', prompt: 'Install requests library using pip.', template: 'pip install ', solution: 'requests' },
            { id: 4, type: 'fix', prompt: 'Fix: install in activated venv, not system Python.', template: '# understand isolation', solution: 'venv' },
            { id: 5, type: 'logic', prompt: 'Create requirements.txt and install from it.', template: 'pip freeze > requirements.txt\npip install ', solution: 'requirements.txt' }
        ]
    },
    "Mini Project (CLI based)": {
        content: `<h3>Mini Project: CLI Task Manager</h3>
<p>Build a real application combining all intermediate concepts.</p>
<h4>Features:</h4>
<ul>
<li>Add, view, mark complete, delete tasks</li>
<li>Store in JSON file</li>
<li>Command-line interface</li>
</ul>
<h4>Project Structure:</h4>
<pre><code>task_manager/
├── main.py
├── tasks.json
└── requirements.txt</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Write function to load tasks from JSON file.', template: 'import json\ndef load_tasks():\n    with open("tasks.json") as f:', solution: 'json.load' },
            { id: 2, type: 'output', prompt: 'Display menu options for user.', template: 'print("1. Add 2. View 3. Exit")', solution: 'print' },
            { id: 3, type: 'modify', prompt: 'Add function to save tasks to JSON.', template: 'def save_tasks(tasks):\n    with open("tasks.json", "w") as f:', solution: 'json.dump' },
            { id: 4, type: 'fix', prompt: 'Fix: handle FileNotFoundError on first run.', template: 'try:\n    load_tasks()\nexcept:', solution: 'FileNotFoundError' },
            { id: 5, type: 'logic', prompt: 'Create main loop: menu → action → save.', template: 'while True:\n    choice = input()\n    if choice == "1":\n        # add task', solution: 'if' }
        ]
    }
};

const PYTHON_ADVANCED_CONTENT = {
    "Advanced OOP (Inheritance, Polymorphism)": {
        content: `<h3>Advanced OOP</h3>
<p>Professional object design with inheritance and polymorphism.</p>
<h4>Concepts:</h4>
<ul>
<li><strong>Inheritance</strong> - Child class inherits from parent</li>
<li><strong>Polymorphism</strong> - Same interface, different behavior</li>
<li><strong>Method overriding</strong> - Child modifies parent method</li>
<li><strong>super()</strong> - Call parent method</li>
</ul>
<h4>Example:</h4>
<pre><code>class Animal:
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return super().speak() + " Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow"

for animal in [Dog(), Cat()]:
    print(animal.speak())</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create Vehicle parent and Car child class.', template: 'class Vehicle:\n    pass\nclass Car(Vehicle):', solution: 'class Car(Vehicle)' },
            { id: 2, type: 'output', prompt: 'Predict: Dog().speak() when Dog extends Animal.', template: '# what output?', solution: 'speak' },
            { id: 3, type: 'modify', prompt: 'Override parent method and call super().', template: 'def start(self):\n    return super().start() + " Engine on"', solution: 'super()' },
            { id: 4, type: 'fix', prompt: 'Fix: child class must inherit from parent.', template: 'class Bike:\n    def move():', solution: 'class Bike(Vehicle):' },
            { id: 5, type: 'logic', prompt: 'Create hierarchy: Employee (parent) → Manager, Developer.', template: 'class Employee:\n    def __init__(self, name):', solution: 'class Manager(Employee)' }
        ]
    },
    "Decorators & Generators": {
        content: `<h3>Decorators & Generators</h3>
<p>Advanced function manipulation and memory-efficient iterables.</p>
<h4>Features:</h4>
<ul>
<li><strong>Decorators</strong> - Modify function behavior (@decorator)</li>
<li><strong>Generators</strong> - Yield values lazily (yield keyword)</li>
<li><strong>yield vs return</strong> - Generator state preserved</li>
</ul>
<h4>Example:</h4>
<pre><code>def timer(func):
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        print(f"Time: {time.time() - start}s")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(1)

slow_function()

def countdown(n):
    while n > 0:
        yield n
        n -= 1</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Write decorator to log function calls.', template: 'def log_calls(func):\n    def wrapper(*args):\n        print(f"Calling {func.__name__}")\n        return ', solution: 'func(' },
            { id: 2, type: 'output', prompt: 'Predict output of countdown(3) generator.', template: 'for num in countdown(3): print(num)', solution: '3' },
            { id: 3, type: 'modify', prompt: 'Add decorator @property to class method.', template: '@property\n    def value(self):\n        return ', solution: '@property' },
            { id: 4, type: 'fix', prompt: 'Fix: generator uses yield not return.', template: 'def gen():\n    return 1\n    return 2', solution: 'yield' },
            { id: 5, type: 'logic', prompt: 'Create Fibonacci generator yielding infinite sequence.', template: 'def fibonacci():\n    a, b = 0, 1\n    while True:\n        yield ', solution: 'a' }
        ]
    },
    "Iterators & Context Managers": {
        content: `<h3>Iterators & Context Managers</h3>
<p>Custom iteration and resource management patterns.</p>
<h4>Concepts:</h4>
<ul>
<li><strong>Iterator</strong> - __iter__() and __next__()</li>
<li><strong>Context Manager</strong> - __enter__() and __exit__() for with statement</li>
<li><strong>contextlib</strong> - Helper decorators</li>
</ul>
<h4>Example:</h4>
<pre><code>class CountUp:
    def __init__(self, n):
        self.n = n
        self.current = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current < self.n:
            self.current += 1
            return self.current
        else:
            raise StopIteration

for num in CountUp(3):
    print(num)  # 1, 2, 3</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Implement __iter__ and __next__ for custom iterator.', template: 'def __iter__(self):\n    return self\n    def __next__(self):', solution: '__next__' },
            { id: 2, type: 'output', prompt: 'When is StopIteration raised?', template: '# explain condition', solution: 'end' },
            { id: 3, type: 'modify', prompt: 'Use context manager with statement.', template: 'with open("file.txt") as f:\n    ', solution: 'with' },
            { id: 4, type: 'fix', prompt: 'Fix: __enter__ and __exit__ methods required.', template: 'class Manager:\n    def open():', solution: '__enter__' },
            { id: 5, type: 'logic', prompt: 'Create FileManager context manager for file operations.', template: 'class FileManager:\n    def __init__(self, name):\n        self.name = name\n    def __enter__(self):', solution: 'open' }
        ]
    },
    "Multithreading & Multiprocessing": {
        content: `<h3>Multithreading & Multiprocessing</h3>
<p>Concurrent execution for performance.</p>
<h4>Concepts:</h4>
<ul>
<li><strong>Threading</strong> - Lightweight, shared memory</li>
<li><strong>Multiprocessing</strong> - Heavy, isolated memory</li>
<li><strong>Lock/RLock</strong> - Synchronization</li>
<li><strong>Queue</strong> - Thread-safe communication</li>
</ul>
<h4>Example:</h4>
<pre><code>import threading
import time

def worker(n):
    for i in range(n):
        print(f"Worker {i}")
        time.sleep(0.1)

thread1 = threading.Thread(target=worker, args=(3,))
thread2 = threading.Thread(target=worker, args=(2,))

thread1.start()
thread2.start()
thread1.join()
thread2.join()
print("Done")</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create Thread and run worker function.', template: 'import threading\nt = threading.Thread(target=worker)', solution: 'Thread(' },
            { id: 2, type: 'output', prompt: 'When does thread.join() block?', template: '# explain', solution: 'complete' },
            { id: 3, type: 'modify', prompt: 'Use Lock to protect shared resource.', template: 'lock = threading.Lock()\nwith lock:\n    # critical section', solution: 'Lock()' },
            { id: 4, type: 'fix', prompt: 'Fix: start() launches thread, not run().', template: 'thread.run()', solution: 'thread.start()' },
            { id: 5, type: 'logic', prompt: 'Create 5 worker threads processing Queue items.', template: 'from queue import Queue\nq = Queue()\nfor i in range(5):\n    t = threading.Thread(target=', solution: 'Queue' }
        ]
    },
    "Async Programming (async / await)": {
        content: `<h3>Async Programming</h3>
<p>Non-blocking concurrent code with async/await.</p>
<h4>Key Points:</h4>
<ul>
<li><strong>async def</strong> - Define coroutine</li>
<li><strong>await</strong> - Wait for async operation</li>
<li><strong>asyncio</strong> - Async I/O library</li>
<li><strong>Task</strong> - Schedule coroutine</li>
</ul>
<h4>Example:</h4>
<pre><code>import asyncio

async def fetch(name):
    print(f"Fetching {name}")
    await asyncio.sleep(1)
    return f"Data: {name}"

async def main():
    results = await asyncio.gather(
        fetch("A"), fetch("B"), fetch("C")
    )
    print(results)

asyncio.run(main())</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Define async function that awaits sleep.', template: 'async def delay():\n    await asyncio.sleep(', solution: 'async def' },
            { id: 2, type: 'output', prompt: 'How to run async function?', template: '# use asyncio.run()', solution: 'asyncio.run' },
            { id: 3, type: 'modify', prompt: 'Use gather() to run multiple coroutines.', template: 'results = await asyncio.gather(', solution: 'gather' },
            { id: 4, type: 'fix', prompt: 'Fix: await outside async function error.', template: 'result = await fetch()', solution: 'async def' },
            { id: 5, type: 'logic', prompt: 'Create producer-consumer with asyncio.Queue.', template: 'q = asyncio.Queue()\nasync def producer():\n    await q.put(', solution: 'Queue' }
        ]
    },
    "Memory Management & Performance": {
        content: `<h3>Memory Management & Performance</h3>
<p>Optimize Python code for speed and memory.</p>
<h4>Techniques:</h4>
<ul>
<li><strong>Profiling</strong> - cProfile, memory_profiler</li>
<li><strong>Garbage Collection</strong> - gc module</li>
<li><strong>Generators</strong> - Lazy evaluation</li>
<li><strong>List vs Generator</strong> - Memory difference</li>
</ul>
<h4>Example:</h4>
<pre><code>import cProfile
import pstats

def slow_function():
    total = sum(range(1000000))
    return total

cProfile.run('slow_function()')

# Memory check
import sys
list_data = [i for i in range(1000)]
gen_data = (i for i in range(1000))
print(sys.getsizeof(list_data))
print(sys.getsizeof(gen_data))</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Use cProfile to profile function execution.', template: 'import cProfile\ncProfile.run(\'', solution: 'cProfile.run' },
            { id: 2, type: 'output', prompt: 'Compare memory: list vs generator.', template: 'import sys\nprint(sys.getsizeof(', solution: 'getsizeof' },
            { id: 3, type: 'modify', prompt: 'Use memory_profiler decorator.', template: '@profile\ndef my_func():', solution: '@profile' },
            { id: 4, type: 'fix', prompt: 'Fix: import gc for garbage collection.', template: 'import gc\ngc.collect()', solution: 'gc.collect' },
            { id: 5, type: 'logic', prompt: 'Optimize loop with generator instead of list.', template: 'data = (x**2 for x in range(1000000))\nfor item in data:', solution: 'for' }
        ]
    },
    "Working with APIs (REST, JSON)": {
        content: `<h3>Working with APIs</h3>
<p>Fetch and send data to remote services.</p>
<h4>Libraries:</h4>
<ul>
<li><strong>requests</strong> - HTTP library</li>
<li><strong>json</strong> - Parse JSON</li>
<li>Methods: GET, POST, PUT, DELETE</li>
</ul>
<h4>Example:</h4>
<pre><code>import requests
import json

# GET request
response = requests.get('https://api.github.com/users/octocat')
data = response.json()
print(data['name'])

# POST request
payload = {'name': 'Asha', 'age': 20}
response = requests.post('https://api.example.com/users', json=payload)
print(response.status_code)</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Fetch JSON data using requests.get().', template: 'import requests\nresponse = requests.get(\'..\')\ndata = response.', solution: 'json()' },
            { id: 2, type: 'output', prompt: 'Check HTTP status code 200 = success.', template: 'if response.status_code == ', solution: '200' },
            { id: 3, type: 'modify', prompt: 'Send POST request with JSON payload.', template: 'payload = {"key": "value"}\nresponse = requests.post(..., json=', solution: 'payload' },
            { id: 4, type: 'fix', prompt: 'Fix: handle network errors with try-except.', template: 'response = requests.get("url")', solution: 'except' },
            { id: 5, type: 'logic', prompt: 'Fetch user data from API and display name, email.', template: 'url = "..."\nresponse = requests.get(url)\nuser = response.json()\nprint(user[', solution: 'name' }
        ]
    },
    "Database Connectivity (SQL + ORM)": {
        content: `<h3>Database Connectivity</h3>
<p>Interact with databases using SQL and ORM.</p>
<h4>Approaches:</h4>
<ul>
<li><strong>sqlite3</strong> - Built-in, file-based</li>
<li><strong>SQLAlchemy ORM</strong> - Object mapping</li>
<li><strong>Raw SQL</strong> - Direct queries</li>
</ul>
<h4>Example:</h4>
<pre><code>import sqlite3

conn = sqlite3.connect('users.db')
cursor = conn.cursor()

cursor.execute('''CREATE TABLE users
                  (id INTEGER PRIMARY KEY, name TEXT)''')

cursor.execute("INSERT INTO users (name) VALUES (?)", ("Asha",))
conn.commit()

cursor.execute("SELECT * FROM users")
print(cursor.fetchall())

conn.close()</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Connect to SQLite database.', template: 'import sqlite3\nconn = sqlite3.connect(\'', solution: 'sqlite3.connect' },
            { id: 2, type: 'output', prompt: 'Execute CREATE TABLE statement.', template: 'cursor.execute(\'CREATE TABLE', solution: 'CREATE TABLE' },
            { id: 3, type: 'modify', prompt: 'Use SQLAlchemy ORM to define model.', template: 'from sqlalchemy import create_engine, Column, Integer, String\nfrom sqlalchemy.ext.declarative import declarative_base\nBase = declarative_base()\nclass User(Base):\n    __tablename__ = "users"\n    id = Column(Integer, primary_key=True)\n    name = Column(String)', solution: 'Column' },
            { id: 4, type: 'fix', prompt: 'Fix: commit after INSERT.', template: 'cursor.execute("INSERT...")\nconn.commit()', solution: 'commit()' },
            { id: 5, type: 'logic', prompt: 'Create table, insert 3 users, fetch all.', template: 'cursor.execute(\'CREATE...\'\n# insert users\ncursor.execute(\'SELECT *...\')', solution: 'INSERT' }
        ]
    },
    "Testing & Debugging (pytest, logging)": {
        content: `<h3>Testing & Debugging</h3>
<p>Professional code quality with tests and logging.</p>
<h4>Tools:</h4>
<ul>
<li><strong>pytest</strong> - Testing framework</li>
<li><strong>logging</strong> - Structured logging</li>
<li><strong>assert</strong> - Test assertions</li>
<li><strong>pdb</strong> - Debugger</li>
</ul>
<h4>Example:</h4>
<pre><code>import logging
import pytest

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def add(a, b):
    result = a + b
    logger.info(f"Adding {a} + {b} = {result}")
    return result

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0

if __name__ == "__main__":
    pytest.main([__file__])</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Write pytest test function.', template: 'def test_add():\n    assert add(2, 3) == ', solution: '5' },
            { id: 2, type: 'output', prompt: 'Configure logging at INFO level.', template: 'import logging\nlogging.basicConfig(level=', solution: 'logging.INFO' },
            { id: 3, type: 'modify', prompt: 'Add logger to function.', template: 'logger = logging.getLogger(__name__)\nlogger.info(f"', solution: 'getLogger' },
            { id: 4, type: 'fix', prompt: 'Fix: run pytest from command line.', template: 'pytest test_file.py', solution: 'pytest' },
            { id: 5, type: 'logic', prompt: 'Write 3 test cases: valid input, edge, error.', template: 'def test_valid():\n    assert\ndef test_edge():\n    assert\ndef test_error():\n    with pytest.raises(', solution: 'pytest.raises' }
        ]
    },
    "Final Capstone Project": {
        content: `<h3>Final Capstone: Web Scraper & Data Pipeline</h3>
<p>Production-quality project combining all advanced skills.</p>
<h4>Requirements:</h4>
<ul>
<li>Scrape data from website (requests, BeautifulSoup)</li>
<li>Parse and clean data</li>
<li>Store in SQLite database</li>
<li>Create REST API (Flask)</li>
<li>Unit tests (pytest)</li>
<li>Logging and error handling</li>
</ul>
<h4>Project Structure:</h4>
<pre><code>web_scraper/
├── scraper.py
├── models.py
├── api.py
├── tests/
│   └── test_scraper.py
├── requirements.txt
└── README.md</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create BeautifulSoup parser for HTML.', template: 'from bs4 import BeautifulSoup\nsoup = BeautifulSoup(html, "html.parser")\ndata = soup.find(\'', solution: 'BeautifulSoup' },
            { id: 2, type: 'output', prompt: 'Extract all links from page using CSS selector.', template: 'links = soup.select("a")', solution: 'select' },
            { id: 3, type: 'modify', prompt: 'Create Flask endpoint /api/data.', template: 'from flask import Flask\napp = Flask(__name__)\n@app.route("/api/data")\ndef get_data():', solution: '@app.route' },
            { id: 4, type: 'fix', prompt: 'Fix: handle requests exceptions with try-except.', template: 'try:\n    response = requests.get(url)\nexcept:', solution: 'requests.exceptions' },
            { id: 5, type: 'logic', prompt: 'Create pipeline: scrape → parse → store → serve.', template: '# Plan steps\n1. Scrape\n2. Parse\n3. Store\n4. Serve', solution: 'scrape' }
        ]
    }
};

const SQL_BEGINNER_CONTENT = {
    "Introduction to Databases & SQL": {
        content: `<h3>Introduction to Databases & SQL</h3>
<p><strong>Industry Impact:</strong> 95% of enterprises use relational databases powered by SQL.</p>
<h4>Core Concepts:</h4>
<ul>
<li><strong>Database</strong> - Organized data storage</li>
<li><strong>Table</strong> - Rows and columns (like spreadsheet)</li>
<li><strong>SQL</strong> - Query language for databases</li>
<li><strong>DBMS</strong> - MySQL, PostgreSQL, SQL Server, Oracle</li>
</ul>
<h4>Example:</h4>
<pre><code>-- Connect to database
SELECT * FROM employees;
-- Get all data from employees table</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Write SELECT statement to view all columns from users table.', template: 'SELECT * FROM users;', solution: 'SELECT' },
            { id: 2, type: 'output', prompt: 'What does * mean in SELECT *?', template: '-- write answer in comment', solution: 'all' },
            { id: 3, type: 'modify', prompt: 'Select only name and email columns from users.', template: 'SELECT name, email FROM users;', solution: 'name, email' },
            { id: 4, type: 'fix', prompt: 'Fix: add semicolon at end of query.', template: 'SELECT * FROM employees', solution: ';' },
            { id: 5, type: 'logic', prompt: 'Write comment explaining what database stores.', template: '-- Database stores...', solution: 'organized' }
        ]
    },
    "SQL Data Types": {
        content: `<h3>SQL Data Types</h3>
<p>Different data types for different kinds of information.</p>
<h4>Common Data Types:</h4>
<ul>
<li><strong>INT</strong> - Integer (1, 25, -5)</li>
<li><strong>VARCHAR(n)</strong> - Text up to n characters</li>
<li><strong>DECIMAL(p,s)</strong> - Decimal numbers (9.99)</li>
<li><strong>DATE</strong> - YYYY-MM-DD format</li>
<li><strong>BOOLEAN</strong> - TRUE/FALSE</li>
</ul>
<h4>Example:</h4>
<pre><code>-- Different data types
id INT
name VARCHAR(100)
salary DECIMAL(10,2)
hire_date DATE
is_active BOOLEAN</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Define column age as INT data type.', template: 'age INT', solution: 'INT' },
            { id: 2, type: 'output', prompt: 'What data type for email address?', template: '-- answer', solution: 'VARCHAR' },
            { id: 3, type: 'modify', prompt: 'Change VARCHAR(50) to VARCHAR(100) for longer names.', template: 'name VARCHAR(100)', solution: '100' },
            { id: 4, type: 'fix', prompt: 'Fix: price should be DECIMAL not INT.', template: 'price INT', solution: 'DECIMAL' },
            { id: 5, type: 'logic', prompt: 'Choose data types: user_id, username, registration_date.', template: '-- user_id: INT\n-- username: VARCHAR\n-- registration_date: DATE', solution: 'INT' }
        ]
    },
    "Creating Tables (DDL Basics)": {
        content: `<h3>Creating Tables (DDL)</h3>
<p>DDL = Data Definition Language (CREATE, ALTER, DROP).</p>
<h4>CREATE TABLE Syntax:</h4>
<pre><code>CREATE TABLE tablename (
    column1 DATATYPE,
    column2 DATATYPE,
    ...
);</code></pre>
<h4>Example:</h4>
<pre><code>CREATE TABLE students (
    id INT,
    name VARCHAR(50),
    email VARCHAR(100),
    age INT
);</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create users table with id, name, email columns.', template: 'CREATE TABLE users (\n    id INT,\n    name VARCHAR(50),\n    email VARCHAR(100)\n);', solution: 'CREATE TABLE' },
            { id: 2, type: 'output', prompt: 'What is the keyword to create table?', template: '-- answer', solution: 'CREATE TABLE' },
            { id: 3, type: 'modify', prompt: 'Add phone VARCHAR(15) column to users table.', template: 'CREATE TABLE users (..., phone VARCHAR(15));', solution: 'phone' },
            { id: 4, type: 'fix', prompt: 'Fix: missing semicolon and parentheses.', template: 'CREATE TABLE employees (id INT', solution: ');' },
            { id: 5, type: 'logic', prompt: 'Design table for products: id, name, price, category.', template: 'CREATE TABLE products (', solution: 'CREATE TABLE' }
        ]
    },
    "INSERT, UPDATE, DELETE": {
        content: `<h3>Data Manipulation (INSERT, UPDATE, DELETE)</h3>
<p>Modify data in tables (DML = Data Manipulation Language).</p>
<h4>Commands:</h4>
<ul>
<li><strong>INSERT INTO</strong> - Add new rows</li>
<li><strong>UPDATE</strong> - Modify existing rows</li>
<li><strong>DELETE FROM</strong> - Remove rows</li>
</ul>
<h4>Example:</h4>
<pre><code>INSERT INTO users (name, email) VALUES ('Asha', 'asha@email.com');
UPDATE users SET age = 25 WHERE name = 'Asha';
DELETE FROM users WHERE id = 3;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Insert new user: name=Ravi, email=ravi@test.com', template: 'INSERT INTO users (name, email) VALUES (\'Ravi\', \'ravi@test.com\');', solution: 'INSERT' },
            { id: 2, type: 'output', prompt: 'What does UPDATE do?', template: '-- answer', solution: 'modify' },
            { id: 3, type: 'modify', prompt: 'Update Asha age to 30 where name=Asha.', template: 'UPDATE users SET age = 30 WHERE name = \'Asha\';', solution: 'UPDATE' },
            { id: 4, type: 'fix', prompt: 'Fix: VALUES should be (\'value1\', \'value2\').', template: 'INSERT INTO users VALUES Asha, asha@test.com', solution: 'VALUES' },
            { id: 5, type: 'logic', prompt: 'Delete all users with age < 18.', template: 'DELETE FROM users WHERE age < 18;', solution: 'DELETE' }
        ]
    },
    "SELECT Statements": {
        content: `<h3>SELECT Statements</h3>
<p>Query data from tables using SELECT.</p>
<h4>Basic SELECT:</h4>
<ul>
<li>SELECT * - All columns</li>
<li>SELECT col1, col2 - Specific columns</li>
<li>SELECT DISTINCT col - Unique values</li>
<li>SELECT column AS alias - Rename column</li>
</ul>
<h4>Example:</h4>
<pre><code>SELECT * FROM employees;
SELECT name, salary FROM employees;
SELECT DISTINCT city FROM customers;
SELECT name AS employee_name FROM employees;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Select name and salary from employees.', template: 'SELECT name, salary FROM employees;', solution: 'SELECT' },
            { id: 2, type: 'output', prompt: 'What does DISTINCT do?', template: '-- answer', solution: 'unique' },
            { id: 3, type: 'modify', prompt: 'Use alias: SELECT email AS contact FROM users.', template: 'SELECT email AS contact FROM users;', solution: 'AS' },
            { id: 4, type: 'fix', prompt: 'Fix: column name is email not e_mail.', template: 'SELECT e_mail FROM users', solution: 'email' },
            { id: 5, type: 'logic', prompt: 'Select all distinct departments.', template: 'SELECT DISTINCT department FROM employees;', solution: 'DISTINCT' }
        ]
    },
    "WHERE Clause & Conditions": {
        content: `<h3>WHERE Clause & Conditions</h3>
<p>Filter rows based on conditions.</p>
<h4>Operators:</h4>
<ul>
<li><strong>=</strong> - Equal</li>
<li><strong>!=, <>  </strong> - Not equal</li>
<li><strong>>, <, >=, <=</strong> - Comparison</li>
<li><strong>AND, OR, NOT</strong> - Logical</li>
</ul>
<h4>Example:</h4>
<pre><code>SELECT * FROM employees WHERE salary > 50000;
SELECT * FROM users WHERE age >= 18 AND city = 'Delhi';
SELECT * FROM products WHERE price < 100 OR category = 'Books';</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Select all users with age > 21.', template: 'SELECT * FROM users WHERE age > 21;', solution: 'WHERE' },
            { id: 2, type: 'output', prompt: 'Find employees with salary = 50000.', template: 'SELECT * FROM employees WHERE salary = 50000;', solution: '=' },
            { id: 3, type: 'modify', prompt: 'Find users from Delhi AND age > 18.', template: 'SELECT * FROM users WHERE city = \'Delhi\' AND age > 18;', solution: 'AND' },
            { id: 4, type: 'fix', prompt: 'Fix: use = for comparison, not ==.', template: 'SELECT * FROM users WHERE age == 20', solution: 'age = 20' },
            { id: 5, type: 'logic', prompt: 'Find inactive OR archived users.', template: 'SELECT * FROM users WHERE is_active = FALSE OR is_archived = TRUE;', solution: 'OR' }
        ]
    },
    "Sorting Data (ORDER BY)": {
        content: `<h3>Sorting Data (ORDER BY)</h3>
<p>Sort results in ascending or descending order.</p>
<h4>Syntax:</h4>
<ul>
<li>ORDER BY column ASC - Ascending (default)</li>
<li>ORDER BY column DESC - Descending</li>
<li>ORDER BY col1, col2 - Multiple columns</li>
</ul>
<h4>Example:</h4>
<pre><code>SELECT * FROM employees ORDER BY salary DESC;
SELECT * FROM products ORDER BY price ASC;
SELECT * FROM students ORDER BY last_name ASC, first_name ASC;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Sort employees by salary highest to lowest.', template: 'SELECT * FROM employees ORDER BY salary DESC;', solution: 'DESC' },
            { id: 2, type: 'output', prompt: 'What is default sort order (ASC or DESC)?', template: '-- answer', solution: 'ASC' },
            { id: 3, type: 'modify', prompt: 'Sort by name A-Z then by age.', template: 'SELECT * FROM users ORDER BY name ASC, age ASC;', solution: 'ORDER BY' },
            { id: 4, type: 'fix', prompt: 'Fix: ORDER BY comes after WHERE.', template: 'ORDER BY salary FROM employees WHERE age > 30', solution: 'FROM... WHERE... ORDER BY' },
            { id: 5, type: 'logic', prompt: 'Show newest registrations first.', template: 'SELECT * FROM users ORDER BY registration_date DESC;', solution: 'DESC' }
        ]
    },
    "Aggregate Functions": {
        content: `<h3>Aggregate Functions</h3>
<p>Calculate summary values across rows.</p>
<h4>Functions:</h4>
<ul>
<li><strong>COUNT()</strong> - Count rows</li>
<li><strong>SUM()</strong> - Add values</li>
<li><strong>AVG()</strong> - Average</li>
<li><strong>MAX(), MIN()</strong> - Maximum, minimum</li>
</ul>
<h4>Example:</h4>
<pre><code>SELECT COUNT(*) FROM employees;
SELECT SUM(salary) FROM employees;
SELECT AVG(age) FROM users;
SELECT MAX(price), MIN(price) FROM products;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Count total number of employees.', template: 'SELECT COUNT(*) FROM employees;', solution: 'COUNT' },
            { id: 2, type: 'output', prompt: 'Calculate total salary budget.', template: 'SELECT SUM(salary) FROM employees;', solution: 'SUM' },
            { id: 3, type: 'modify', prompt: 'Find average price of products.', template: 'SELECT AVG(price) FROM products;', solution: 'AVG' },
            { id: 4, type: 'fix', prompt: 'Fix: COUNT(*) not COUNT(all).', template: 'SELECT COUNT(all) FROM users', solution: 'COUNT(*)' },
            { id: 5, type: 'logic', prompt: 'Find highest and lowest employee salary.', template: 'SELECT MAX(salary), MIN(salary) FROM employees;', solution: 'MAX' }
        ]
    },
    "Constraints (PRIMARY KEY, FOREIGN KEY, UNIQUE)": {
        content: `<h3>Constraints</h3>
<p>Rules for data integrity and relationships.</p>
<h4>Constraint Types:</h4>
<ul>
<li><strong>PRIMARY KEY</strong> - Unique identifier (no nulls)</li>
<li><strong>FOREIGN KEY</strong> - References parent table</li>
<li><strong>UNIQUE</strong> - All values unique</li>
<li><strong>NOT NULL</strong> - Field required</li>
<li><strong>DEFAULT</strong> - Default value</li>
</ul>
<h4>Example:</h4>
<pre><code>CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    status VARCHAR(20) DEFAULT 'active'
);

CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Add PRIMARY KEY constraint to id column.', template: 'id INT PRIMARY KEY', solution: 'PRIMARY KEY' },
            { id: 2, type: 'output', prompt: 'What does UNIQUE constraint do?', template: '-- answer', solution: 'unique' },
            { id: 3, type: 'modify', prompt: 'Make email UNIQUE and NOT NULL.', template: 'email VARCHAR(100) UNIQUE NOT NULL', solution: 'UNIQUE' },
            { id: 4, type: 'fix', prompt: 'Fix: FOREIGN KEY references parent table.', template: 'FOREIGN KEY (dept_id) REFERENCES departments(id)', solution: 'REFERENCES' },
            { id: 5, type: 'logic', prompt: 'Design users table with constraints.', template: 'CREATE TABLE users (\n    id INT PRIMARY KEY,\n    email VARCHAR(100) UNIQUE NOT NULL,\n    age INT NOT NULL,\n    status VARCHAR(20) DEFAULT \'active\'\n);', solution: 'PRIMARY KEY' }
        ]
    },
    "Basic Functions (String, Numeric, Date)": {
        content: `<h3>Basic Functions</h3>
<p>Built-in functions for data transformation.</p>
<h4>String Functions:</h4>
<ul>
<li>UPPER(str) - Convert to uppercase</li>
<li>LOWER(str) - Convert to lowercase</li>
<li>LENGTH(str) - String length</li>
<li>SUBSTRING(str, pos, len) - Extract part</li>
<li>CONCAT(str1, str2) - Combine strings</li>
</ul>
<h4>Numeric & Date:</h4>
<ul>
<li>ROUND(num, decimals)</li>
<li>ABS(num)</li>
<li>YEAR(date), MONTH(date), DAY(date)</li>
</ul>
<h4>Example:</h4>
<pre><code>SELECT UPPER(name) FROM users;
SELECT LENGTH(email) FROM users;
SELECT CONCAT(first_name, ' ', last_name) FROM employees;
SELECT YEAR(hire_date) FROM employees;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Convert all names to uppercase.', template: 'SELECT UPPER(name) FROM users;', solution: 'UPPER' },
            { id: 2, type: 'output', prompt: 'Get length of email strings.', template: 'SELECT LENGTH(email) FROM users;', solution: 'LENGTH' },
            { id: 3, type: 'modify', prompt: 'Combine first_name and last_name.', template: 'SELECT CONCAT(first_name, \' \', last_name) FROM employees;', solution: 'CONCAT' },
            { id: 4, type: 'fix', prompt: 'Fix: UPPER not UPPERCASE.', template: 'SELECT UPPER(name) FROM users;', solution: 'UPPER' },
            { id: 5, type: 'logic', prompt: 'Extract year from hire_date column.', template: 'SELECT YEAR(hire_date) FROM employees;', solution: 'YEAR' }
        ]
    }
};

const SQL_INTERMEDIATE_CONTENT = {
    "Joins (INNER, LEFT, RIGHT, FULL)": {
        content: `<h3>Joins - Combining Tables</h3>
<p>Combine data from multiple tables based on relationships.</p>
<h4>Join Types:</h4>
<ul>
<li><strong>INNER JOIN</strong> - Only matching rows</li>
<li><strong>LEFT JOIN</strong> - All from left table + matches</li>
<li><strong>RIGHT JOIN</strong> - All from right table + matches</li>
<li><strong>FULL OUTER JOIN</strong> - All rows both tables</li>
</ul>
<h4>Example:</h4>
<pre><code>SELECT u.name, o.order_id
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

SELECT * FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Write INNER JOIN between users and orders.', template: 'SELECT * FROM users\nINNER JOIN orders ON users.id = orders.user_id;', solution: 'INNER JOIN' },
            { id: 2, type: 'output', prompt: 'What does INNER JOIN return?', template: '-- answer', solution: 'matching' },
            { id: 3, type: 'modify', prompt: 'Use LEFT JOIN to keep unmatched users.', template: 'SELECT * FROM users u\nLEFT JOIN orders o ON u.id = o.user_id;', solution: 'LEFT JOIN' },
            { id: 4, type: 'fix', prompt: 'Fix: use ON not WHERE for join condition.', template: 'SELECT * FROM users u JOIN orders o ON u.id = o.user_id;', solution: 'ON' },
            { id: 5, type: 'logic', prompt: 'Get employees and their departments.', template: 'SELECT e.name, d.dept_name\nFROM employees e\nJOIN departments d ON e.dept_id = d.id;', solution: 'JOIN' }
        ]
    },
    "Subqueries": {
        content: `<h3>Subqueries (Nested Queries)</h3>
<p>Queries within queries for complex filtering.</p>
<h4>Subquery Types:</h4>
<ul>
<li><strong>Scalar subquery</strong> - Returns 1 value</li>
<li><strong>Row subquery</strong> - Returns 1 row</li>
<li><strong>Table subquery</strong> - Returns multiple rows</li>
<li><strong>IN, EXISTS</strong> - Check membership</li>
</ul>
<h4>Example:</h4>
<pre><code>SELECT * FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);

SELECT * FROM orders 
WHERE customer_id IN (SELECT id FROM customers WHERE status = 'premium');</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Find employees earning more than average.', template: 'SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);', solution: 'subquery' },
            { id: 2, type: 'output', prompt: 'What does IN operator do in subquery?', template: '-- answer', solution: 'membership' },
            { id: 3, type: 'modify', prompt: 'Find orders from premium customers using IN.', template: 'SELECT * FROM orders WHERE customer_id IN (SELECT id FROM customers WHERE status = \'premium\');', solution: 'IN' },
            { id: 4, type: 'fix', prompt: 'Fix: parentheses around subquery.', template: 'SELECT * FROM users WHERE age > SELECT AVG(age) FROM users', solution: '()' },
            { id: 5, type: 'logic', prompt: 'Find products more expensive than cheapest item.', template: 'SELECT * FROM products WHERE price > (SELECT MIN(price) FROM products);', solution: 'subquery' }
        ]
    },
    "GROUP BY & HAVING": {
        content: `<h3>GROUP BY & HAVING</h3>
<p>Group rows and filter groups.</p>
<h4>Concepts:</h4>
<ul>
<li><strong>GROUP BY</strong> - Group rows by column</li>
<li><strong>HAVING</strong> - Filter groups (like WHERE for groups)</li>
<li>Aggregate functions with GROUP BY</li>
</ul>
<h4>Example:</h4>
<pre><code>SELECT department, COUNT(*) as emp_count
FROM employees
GROUP BY department;

SELECT category, SUM(sales) as total_sales
FROM products
GROUP BY category
HAVING SUM(sales) > 10000;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Count employees per department.', template: 'SELECT department, COUNT(*) FROM employees GROUP BY department;', solution: 'GROUP BY' },
            { id: 2, type: 'output', prompt: 'What does HAVING do?', template: '-- answer', solution: 'filter groups' },
            { id: 3, type: 'modify', prompt: 'Show departments with > 5 employees.', template: 'SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 5;', solution: 'HAVING' },
            { id: 4, type: 'fix', prompt: 'Fix: non-aggregated column must be in GROUP BY.', template: 'SELECT name, COUNT(*) FROM employees GROUP BY department', solution: 'GROUP BY' },
            { id: 5, type: 'logic', prompt: 'Find categories with total sales > 5000.', template: 'SELECT category, SUM(price) FROM products GROUP BY category HAVING SUM(price) > 5000;', solution: 'HAVING' }
        ]
    },
    "Views": {
        content: `<h3>Views</h3>
<p>Virtual tables based on queries.</p>
<h4>View Features:</h4>
<ul>
<li>Simplify complex queries</li>
<li>Reuse queries</li>
<li>Security (hide columns)</li>
<li>Query views like tables</li>
</ul>
<h4>Example:</h4>
<pre><code>CREATE VIEW employee_details AS
SELECT emp_id, emp_name, salary, dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.id;

SELECT * FROM employee_details WHERE salary > 50000;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create view of active users.', template: 'CREATE VIEW active_users AS SELECT * FROM users WHERE status = \'active\';', solution: 'CREATE VIEW' },
            { id: 2, type: 'output', prompt: 'What is a view?', template: '-- answer', solution: 'virtual table' },
            { id: 3, type: 'modify', prompt: 'Query a view like a table.', template: 'SELECT * FROM active_users;', solution: 'FROM' },
            { id: 4, type: 'fix', prompt: 'Fix: CREATE VIEW syntax.', template: 'CREATE VIEW high_earners SELECT * FROM employees WHERE salary > 100000;', solution: 'AS' },
            { id: 5, type: 'logic', prompt: 'Create view combining users and orders.', template: 'CREATE VIEW user_orders AS SELECT u.name, o.order_id FROM users u JOIN orders o ON u.id = o.user_id;', solution: 'CREATE VIEW' }
        ]
    },
    "Indexes": {
        content: `<h3>Indexes</h3>
<p>Speed up queries by organizing data.</p>
<h4>Index Types:</h4>
<ul>
<li><strong>Single Column</strong> - Index on one column</li>
<li><strong>Composite</strong> - Index on multiple columns</li>
<li><strong>Unique</strong> - Unique values only</li>
<li><strong>Full-text</strong> - Text searching</li>
</ul>
<h4>Example:</h4>
<pre><code>CREATE INDEX idx_email ON users(email);
CREATE INDEX idx_name_city ON customers(last_name, city);
CREATE UNIQUE INDEX idx_username ON accounts(username);

-- Drop index
DROP INDEX idx_email;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create index on email column.', template: 'CREATE INDEX idx_email ON users(email);', solution: 'CREATE INDEX' },
            { id: 2, type: 'output', prompt: 'Why use indexes?', template: '-- answer', solution: 'speed' },
            { id: 3, type: 'modify', prompt: 'Create composite index on name and city.', template: 'CREATE INDEX idx_name_city ON users(name, city);', solution: 'CREATE INDEX' },
            { id: 4, type: 'fix', prompt: 'Fix: INDEX keyword before name.', template: 'CREATE idx_users ON users(id);', solution: 'INDEX' },
            { id: 5, type: 'logic', prompt: 'Create unique index on username.', template: 'CREATE UNIQUE INDEX idx_username ON accounts(username);', solution: 'UNIQUE' }
        ]
    },
    "Stored Procedures": {
        content: `<h3>Stored Procedures</h3>
<p>Reusable SQL code blocks stored in database.</p>
<h4>Benefits:</h4>
<ul>
<li>Reuse code</li>
<li>Security (restricted access)</li>
<li>Performance (pre-compiled)</li>
<li>Reduced network traffic</li>
</ul>
<h4>Example:</h4>
<pre><code>CREATE PROCEDURE GetUserByID @UserID INT
AS
BEGIN
    SELECT * FROM users WHERE id = @UserID;
END;

-- Call procedure
EXEC GetUserByID @UserID = 5;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create procedure to get user by ID.', template: 'CREATE PROCEDURE GetUser @ID INT\nAS\nBEGIN\n    SELECT * FROM users WHERE id = @ID;\nEND;', solution: 'PROCEDURE' },
            { id: 2, type: 'output', prompt: 'What is a stored procedure?', template: '-- answer', solution: 'reusable' },
            { id: 3, type: 'modify', prompt: 'Add parameter for username filtering.', template: 'CREATE PROCEDURE GetUserByName @Name VARCHAR(100)\nAS\nBEGIN\n    SELECT * FROM users WHERE name = @Name;\nEND;', solution: 'PROCEDURE' },
            { id: 4, type: 'fix', prompt: 'Fix: use @ for parameter in SQL Server.', template: 'CREATE PROCEDURE GetUser ID INT', solution: '@' },
            { id: 5, type: 'logic', prompt: 'Create procedure to insert new user.', template: 'CREATE PROCEDURE AddUser @Name VARCHAR(100), @Email VARCHAR(100)\nAS\nBEGIN\n    INSERT INTO users (name, email) VALUES (@Name, @Email);\nEND;', solution: 'PROCEDURE' }
        ]
    },
    "User-Defined Functions": {
        content: `<h3>User-Defined Functions (UDF)</h3>
<p>Custom functions for calculations and transformations.</p>
<h4>Function Types:</h4>
<ul>
<li><strong>Scalar</strong> - Returns single value</li>
<li><strong>Table-valued</strong> - Returns table</li>
<li><strong>Inline</strong> - Single SELECT</li>
</ul>
<h4>Example:</h4>
<pre><code>CREATE FUNCTION CalculateTax(@amount DECIMAL)
RETURNS DECIMAL
AS
BEGIN
    RETURN @amount * 0.18;
END;

SELECT CalculateTax(1000) AS tax_amount;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create function to calculate discount.', template: 'CREATE FUNCTION CalculateDiscount(@price DECIMAL)\nRETURNS DECIMAL\nAS\nBEGIN\n    RETURN @price * 0.1;\nEND;', solution: 'FUNCTION' },
            { id: 2, type: 'output', prompt: 'What does UDF return?', template: '-- answer', solution: 'value' },
            { id: 3, type: 'modify', prompt: 'Use function in SELECT.', template: 'SELECT CalculateDiscount(100);', solution: 'CalculateDiscount' },
            { id: 4, type: 'fix', prompt: 'Fix: RETURNS clause needed.', template: 'CREATE FUNCTION GetAge() BEGIN ...', solution: 'RETURNS' },
            { id: 5, type: 'logic', prompt: 'Create function to get age from birth date.', template: 'CREATE FUNCTION GetAge(@birthdate DATE)\nRETURNS INT\nAS\nBEGIN\n    RETURN YEAR(GETDATE()) - YEAR(@birthdate);\nEND;', solution: 'FUNCTION' }
        ]
    },
    "Transactions (COMMIT, ROLLBACK, SAVEPOINT)": {
        content: `<h3>Transactions</h3>
<p>Group statements; all succeed or all fail (ACID).</p>
<h4>Transaction Commands:</h4>
<ul>
<li><strong>BEGIN</strong> - Start transaction</li>
<li><strong>COMMIT</strong> - Save changes</li>
<li><strong>ROLLBACK</strong> - Undo changes</li>
<li><strong>SAVEPOINT</strong> - Partial rollback point</li>
</ul>
<h4>Example:</h4>
<pre><code>BEGIN TRANSACTION;
    UPDATE accounts SET balance = balance - 100 WHERE id = 1;
    UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;

-- On error:
ROLLBACK;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Write transaction with COMMIT.', template: 'BEGIN TRANSACTION;\n    INSERT INTO users (name) VALUES (\'John\');\nCOMMIT;', solution: 'COMMIT' },
            { id: 2, type: 'output', prompt: 'What does ROLLBACK do?', template: '-- answer', solution: 'undo' },
            { id: 3, type: 'modify', prompt: 'Add ROLLBACK on error.', template: 'BEGIN TRANSACTION;\n    -- statements\nROLLBACK;', solution: 'ROLLBACK' },
            { id: 4, type: 'fix', prompt: 'Fix: use SAVEPOINT for partial rollback.', template: 'SAVEPOINT sp1;', solution: 'SAVEPOINT' },
            { id: 5, type: 'logic', prompt: 'Transfer money between accounts atomically.', template: 'BEGIN TRANSACTION;\n    UPDATE accounts SET balance = balance - 100 WHERE id = 1;\n    UPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;', solution: 'TRANSACTION' }
        ]
    },
    "CASE Statements": {
        content: `<h3>CASE Statements</h3>
<p>Conditional logic in queries (if-then-else).</p>
<h4>CASE Types:</h4>
<ul>
<li><strong>Simple CASE</strong> - Compare single expression</li>
<li><strong>Searched CASE</strong> - Multiple conditions</li>
</ul>
<h4>Example:</h4>
<pre><code>SELECT name, 
    CASE 
        WHEN salary >= 100000 THEN 'Senior'
        WHEN salary >= 50000 THEN 'Mid-level'
        ELSE 'Junior'
    END AS level
FROM employees;

SELECT id,
    CASE status
        WHEN 'active' THEN 'Active'
        WHEN 'inactive' THEN 'Inactive'
        ELSE 'Unknown'
    END AS status_text
FROM users;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Use CASE to categorize age groups.', template: 'SELECT name,\n    CASE\n        WHEN age < 18 THEN \'Minor\'\n        WHEN age >= 18 THEN \'Adult\'\n        ELSE \'Unknown\'\n    END AS age_group\nFROM users;', solution: 'CASE' },
            { id: 2, type: 'output', prompt: 'What is default CASE value without match?', template: '-- answer', solution: 'ELSE' },
            { id: 3, type: 'modify', prompt: 'Add ELSE clause for unmatched values.', template: 'CASE ... WHEN ... THEN ... ELSE \'Other\' END', solution: 'ELSE' },
            { id: 4, type: 'fix', prompt: 'Fix: CASE ... WHEN ... THEN ... END', template: 'SELECT CASE status IF \'active\' THEN \'Yes\'', solution: 'WHEN' },
            { id: 5, type: 'logic', prompt: 'Grade students: 90+=A, 80+=B, else C.', template: 'SELECT name,\n    CASE\n        WHEN marks >= 90 THEN \'A\'\n        WHEN marks >= 80 THEN \'B\'\n        ELSE \'C\'\n    END AS grade\nFROM students;', solution: 'CASE' }
        ]
    },
    "Database Normalization": {
        content: `<h3>Database Normalization</h3>
<p>Organize data to reduce redundancy and improve integrity.</p>
<h4>Normal Forms:</h4>
<ul>
<li><strong>1NF</strong> - No repeating groups</li>
<li><strong>2NF</strong> - Remove partial dependencies</li>
<li><strong>3NF</strong> - Remove transitive dependencies</li>
<li><strong>BCNF</strong> - Stricter version of 3NF</li>
</ul>
<h4>Example - Unnormalized to 3NF:</h4>
<pre><code>-- Unnormalized (bad)
Orders: order_id, customer_name, customer_city, product_name, qty

-- Normalized to 3NF
Customers: customer_id, name, city
Products: product_id, name, price
Orders: order_id, customer_id, product_id, qty</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Identify repeating groups in table.', template: '-- Customers table with multiple addresses\n-- Should separate into: Customers, Addresses', solution: '1NF' },
            { id: 2, type: 'output', prompt: 'What does normalization prevent?', template: '-- answer', solution: 'redundancy' },
            { id: 3, type: 'modify', prompt: 'Split customer table with address.', template: 'Customers: id, name\nAddresses: id, customer_id, street, city', solution: 'separate' },
            { id: 4, type: 'fix', prompt: 'Fix: move product_price to Products table.', template: '-- From Orders table, move price to Products', solution: 'Products' },
            { id: 5, type: 'logic', prompt: 'Design normalized student course enrollment.', template: 'Students: id, name\nCourses: id, title\nEnrollment: student_id, course_id', solution: 'normalized' }
        ]
    }
};

const SQL_ADVANCED_CONTENT = {
    "Window Functions": {
        content: `<h3>Window Functions</h3>
<p>Advanced analytics: rank, partition, running totals.</p>
<h4>Functions:</h4>
<ul>
<li><strong>ROW_NUMBER()</strong> - Sequential row number</li>
<li><strong>RANK()</strong> - Rank with gaps</li>
<li><strong>DENSE_RANK()</strong> - Rank without gaps</li>
<li><strong>LAG/LEAD</strong> - Previous/next row</li>
<li><strong>SUM/AVG OVER</strong> - Running total/average</li>
</ul>
<h4>Example:</h4>
<pre><code>SELECT employee_id, salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) as rank,
    SUM(salary) OVER (ORDER BY salary DESC) as running_total
FROM employees;

SELECT name, salary,
    AVG(salary) OVER (PARTITION BY department) as dept_avg
FROM employees;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Rank employees by salary descending.', template: 'SELECT name, salary,\n    ROW_NUMBER() OVER (ORDER BY salary DESC) as rank\nFROM employees;', solution: 'ROW_NUMBER' },
            { id: 2, type: 'output', prompt: 'Difference between RANK and DENSE_RANK?', template: '-- answer', solution: 'gaps' },
            { id: 3, type: 'modify', prompt: 'Add running total of salary.', template: 'SELECT name,\n    SUM(salary) OVER (ORDER BY name) as running_total\nFROM employees;', solution: 'OVER' },
            { id: 4, type: 'fix', prompt: 'Fix: PARTITION BY for grouped ranking.', template: 'SELECT name, salary,\n    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC)\nFROM employees;', solution: 'PARTITION BY' },
            { id: 5, type: 'logic', prompt: 'Get average salary per department with window function.', template: 'SELECT name, salary,\n    AVG(salary) OVER (PARTITION BY department) as dept_avg\nFROM employees;', solution: 'PARTITION BY' }
        ]
    },
    "Common Table Expressions (CTE)": {
        content: `<h3>Common Table Expressions (CTE)</h3>
<p>Named subqueries for readable recursive queries.</p>
<h4>Syntax:</h4>
<pre><code>WITH CTE_Name AS (
    SELECT ...
)
SELECT * FROM CTE_Name;</code></pre>
<h4>Example - Recursive CTE:</h4>
<pre><code>WITH RECURSIVE cte_numbers AS (
    SELECT 1 as num
    UNION ALL
    SELECT num + 1
    FROM cte_numbers
    WHERE num < 10
)
SELECT * FROM cte_numbers;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create CTE for high earners.', template: 'WITH high_earners AS (\n    SELECT * FROM employees WHERE salary > 100000\n)\nSELECT * FROM high_earners;', solution: 'WITH' },
            { id: 2, type: 'output', prompt: 'What is benefit of CTE?', template: '-- answer', solution: 'readability' },
            { id: 3, type: 'modify', prompt: 'Use CTE in WHERE clause.', template: 'WITH active_users AS (...)\nSELECT * FROM active_users WHERE ...;', solution: 'WITH' },
            { id: 4, type: 'fix', prompt: 'Fix: recursive CTE needs UNION ALL.', template: 'WITH RECURSIVE cte AS (...\nUNION ALL\n...)SELECT * FROM cte;', solution: 'UNION ALL' },
            { id: 5, type: 'logic', prompt: 'Create recursive CTE for organizational hierarchy.', template: 'WITH RECURSIVE hierarchy AS (\n    SELECT id, name, manager_id FROM employees WHERE manager_id IS NULL\n    UNION ALL\n    SELECT e.id, e.name, e.manager_id FROM employees e\n    JOIN hierarchy h ON e.manager_id = h.id\n)\nSELECT * FROM hierarchy;', solution: 'RECURSIVE' }
        ]
    },
    "Query Optimization & Execution Plans": {
        content: `<h3>Query Optimization</h3>
<p>Analyze and improve query performance.</p>
<h4>Optimization Techniques:</h4>
<ul>
<li>Use EXPLAIN/ANALYZE to view execution plan</li>
<li>Index frequently searched columns</li>
<li>Avoid SELECT * when not needed</li>
<li>Filter early with WHERE clause</li>
<li>Use JOINs instead of subqueries when possible</li>
</ul>
<h4>Example:</h4>
<pre><code>EXPLAIN SELECT * FROM employees WHERE salary > 50000;
-- Analyze execution plan, identify missing indexes

-- Optimized query
SELECT name, salary FROM employees WHERE salary > 50000;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Use EXPLAIN to view query plan.', template: 'EXPLAIN SELECT * FROM users WHERE age > 30;', solution: 'EXPLAIN' },
            { id: 2, type: 'output', prompt: 'Why avoid SELECT * in production?', template: '-- answer', solution: 'unnecessary' },
            { id: 3, type: 'modify', prompt: 'Add WHERE clause to filter early.', template: 'SELECT name FROM users WHERE status = \'active\';', solution: 'WHERE' },
            { id: 4, type: 'fix', prompt: 'Fix: use JOIN not subquery for better performance.', template: 'SELECT * FROM users u\nJOIN orders o ON u.id = o.user_id;', solution: 'JOIN' },
            { id: 5, type: 'logic', prompt: 'Optimize slow query by adding indexes.', template: 'CREATE INDEX idx_user_status ON users(status);\nCREATE INDEX idx_order_user ON orders(user_id);', solution: 'CREATE INDEX' }
        ]
    },
    "Advanced Indexing Strategies": {
        content: `<h3>Advanced Indexing</h3>
<p>Strategic index design for maximum performance.</p>
<h4>Index Types:</h4>
<ul>
<li><strong>B-Tree</strong> - Default, range queries</li>
<li><strong>Hash</strong> - Exact matches only</li>
<li><strong>Bitmap</strong> - Low cardinality columns</li>
<li><strong>Covering</strong> - All columns in index</li>
<li><strong>Partial</strong> - Index subset of rows</li>
</ul>
<h4>Example:</h4>
<pre><code>-- Covering index (includes all needed columns)
CREATE INDEX idx_user_search ON users(status, age) INCLUDE (name, email);

-- Partial index (only active users)
CREATE INDEX idx_active_users ON users(email) WHERE status = 'active';

-- Composite index (column order matters)
CREATE INDEX idx_order_date ON orders(customer_id, order_date);</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create covering index.', template: 'CREATE INDEX idx_covering ON users(id) INCLUDE (name, email);', solution: 'INCLUDE' },
            { id: 2, type: 'output', prompt: 'When to use partial indexes?', template: '-- answer', solution: 'subset' },
            { id: 3, type: 'modify', prompt: 'Create composite index on multiple columns.', template: 'CREATE INDEX idx_composite ON orders(customer_id, order_date, total);', solution: 'composite' },
            { id: 4, type: 'fix', prompt: 'Fix: column order matters in composite index.', template: 'CREATE INDEX idx_order ON orders(order_date, customer_id);', solution: 'order' },
            { id: 5, type: 'logic', prompt: 'Design indexes for frequently queried columns.', template: 'CREATE INDEX idx_email ON users(email);\nCREATE INDEX idx_status_date ON accounts(status, created_date);', solution: 'INDEX' }
        ]
    },
    "Triggers": {
        content: `<h3>Triggers</h3>
<p>Automatic actions on table changes.</p>
<h4>Trigger Types:</h4>
<ul>
<li><strong>BEFORE INSERT/UPDATE/DELETE</strong> - Before change</li>
<li><strong>AFTER INSERT/UPDATE/DELETE</strong> - After change</li>
<li>Access OLD and NEW values</li>
<li>Enforce business rules</li>
</ul>
<h4>Example:</h4>
<pre><code>CREATE TRIGGER update_timestamp
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
    SET NEW.updated_at = NOW();
END;

CREATE TRIGGER prevent_negative_salary
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    IF NEW.salary < 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Salary cannot be negative';
    END IF;
END;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create AFTER INSERT trigger.', template: 'CREATE TRIGGER log_insert\nAFTER INSERT ON users\nFOR EACH ROW\nBEGIN\n    INSERT INTO audit_log VALUES (NEW.id, NOW());\nEND;', solution: 'TRIGGER' },
            { id: 2, type: 'output', prompt: 'What is trigger?', template: '-- answer', solution: 'automatic' },
            { id: 3, type: 'modify', prompt: 'Update timestamp on UPDATE.', template: 'SET NEW.updated_at = NOW();', solution: 'NOW()' },
            { id: 4, type: 'fix', prompt: 'Fix: use NEW to access inserted values.', template: 'IF NEW.salary < 0', solution: 'NEW' },
            { id: 5, type: 'logic', prompt: 'Create trigger to maintain inventory count.', template: 'CREATE TRIGGER decrease_stock\nAFTER INSERT ON orders\nFOR EACH ROW\nBEGIN\n    UPDATE products SET stock = stock - NEW.qty WHERE id = NEW.product_id;\nEND;', solution: 'TRIGGER' }
        ]
    },
    "Database Security & Roles": {
        content: `<h3>Database Security & Roles</h3>
<p>Control access with users, roles, and permissions.</p>
<h4>Security Concepts:</h4>
<ul>
<li><strong>Users</strong> - Individual database accounts</li>
<li><strong>Roles</strong> - Groups with permissions</li>
<li><strong>GRANT</strong> - Give permissions</li>
<li><strong>REVOKE</strong> - Remove permissions</li>
<li><strong>Least Privilege</strong> - Minimal needed access</li>
</ul>
<h4>Example:</h4>
<pre><code>CREATE USER 'analyst'@'localhost' IDENTIFIED BY 'password123';

CREATE ROLE data_analyst;
GRANT SELECT, INSERT ON database.* TO data_analyst;
GRANT data_analyst TO 'analyst'@'localhost';

REVOKE INSERT ON database.sensitive_table FROM data_analyst;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create database user.', template: 'CREATE USER \'newuser\'@\'localhost\' IDENTIFIED BY \'password\';', solution: 'CREATE USER' },
            { id: 2, type: 'output', prompt: 'What is database role?', template: '-- answer', solution: 'permission group' },
            { id: 3, type: 'modify', prompt: 'Grant SELECT permission on table.', template: 'GRANT SELECT ON employees TO analyst;', solution: 'GRANT' },
            { id: 4, type: 'fix', prompt: 'Fix: use REVOKE to remove permissions.', template: 'REVOKE INSERT ON table FROM user;', solution: 'REVOKE' },
            { id: 5, type: 'logic', prompt: 'Create readonly role for auditors.', template: 'CREATE ROLE auditor;\nGRANT SELECT ON database.* TO auditor;', solution: 'GRANT' }
        ]
    },
    "Partitioning": {
        content: `<h3>Partitioning</h3>
<p>Split large tables for performance and management.</p>
<h4>Partitioning Types:</h4>
<ul>
<li><strong>Range</strong> - By date/number ranges</li>
<li><strong>List</strong> - By specific values</li>
<li><strong>Hash</strong> - By hash function</li>
<li><strong>Composite</strong> - Combination</li>
</ul>
<h4>Example:</h4>
<pre><code>CREATE TABLE orders (
    id INT,
    order_date DATE,
    amount DECIMAL
)
PARTITION BY RANGE (YEAR(order_date)) (
    PARTITION p2020 VALUES LESS THAN (2021),
    PARTITION p2021 VALUES LESS THAN (2022),
    PARTITION p2022 VALUES LESS THAN (2023),
    PARTITION p_future VALUES LESS THAN MAXVALUE
);</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Partition table by date range.', template: 'CREATE TABLE sales (...)\nPARTITION BY RANGE (YEAR(date)) (...);', solution: 'PARTITION' },
            { id: 2, type: 'output', prompt: 'Why partition tables?', template: '-- answer', solution: 'performance' },
            { id: 3, type: 'modify', prompt: 'Use LIST partitioning by region.', template: 'PARTITION BY LIST (region) (...);', solution: 'LIST' },
            { id: 4, type: 'fix', prompt: 'Fix: RANGE and LIST are partition types.', template: 'PARTITION BY RANGE (date) VALUES LESS THAN (...);', solution: 'VALUES LESS THAN' },
            { id: 5, type: 'logic', prompt: 'Partition logs by month.', template: 'CREATE TABLE logs (...)\nPARTITION BY RANGE (YEAR(date), MONTH(date)) (...);', solution: 'PARTITION' }
        ]
    },
    "High-Availability & Replication": {
        content: `<h3>High-Availability & Replication</h3>
<p>Backup, failover, and data redundancy.</p>
<h4>HA Concepts:</h4>
<ul>
<li><strong>Replication</strong> - Master-slave copies</li>
<li><strong>Failover</strong> - Automatic switchover</li>
<li><strong>Clustering</strong> - Multiple servers</li>
<li><strong>Backup</strong> - Data protection</li>
</ul>
<h4>Example - Master-Slave Setup:</h4>
<pre><code>-- Master server
SHOW MASTER STATUS;

-- Slave server
CHANGE MASTER TO MASTER_HOST='master_ip', 
                   MASTER_USER='repl_user',
                   MASTER_PASSWORD='password';
START SLAVE;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Setup replication between master and slave.', template: 'CHANGE MASTER TO MASTER_HOST=\'...\',...;', solution: 'CHANGE MASTER' },
            { id: 2, type: 'output', prompt: 'What is database replication?', template: '-- answer', solution: 'copy' },
            { id: 3, type: 'modify', prompt: 'Start slave replication.', template: 'START SLAVE;', solution: 'START SLAVE' },
            { id: 4, type: 'fix', prompt: 'Fix: check slave status.', template: 'SHOW SLAVE STATUS;', solution: 'SHOW SLAVE STATUS' },
            { id: 5, type: 'logic', prompt: 'Implement failover strategy.', template: '-- Configure multiple replicas\n-- Setup heartbeat monitoring\n-- Automatic promotion on master failure', solution: 'failover' }
        ]
    },
    "Performance Tuning": {
        content: `<h3>Performance Tuning</h3>
<p>System-level optimization for speed and scalability.</p>
<h4>Tuning Areas:</h4>
<ul>
<li><strong>Buffer Pool</strong> - Memory for cache</li>
<li><strong>Query Cache</strong> - Cache results</li>
<li><strong>Slow Query Log</strong> - Identify slow queries</li>
<li><strong>Connection Pooling</strong> - Reuse connections</li>
</ul>
<h4>Example:</h4>
<pre><code>-- Enable slow query log
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 2;

-- Check performance
SHOW PROCESSLIST;
SHOW STATUS;
SHOW VARIABLES LIKE 'max_connections';</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Enable slow query logging.', template: 'SET GLOBAL slow_query_log = \'ON\';', solution: 'slow_query_log' },
            { id: 2, type: 'output', prompt: 'Check current processes running.', template: 'SHOW PROCESSLIST;', solution: 'PROCESSLIST' },
            { id: 3, type: 'modify', prompt: 'Set long query threshold to 3 seconds.', template: 'SET GLOBAL long_query_time = 3;', solution: 'long_query_time' },
            { id: 4, type: 'fix', prompt: 'Fix: check current connections setting.', template: 'SHOW VARIABLES LIKE \'max_connections\';', solution: 'max_connections' },
            { id: 5, type: 'logic', prompt: 'Optimize memory allocation for buffer pool.', template: 'SET GLOBAL innodb_buffer_pool_size = 8G;\n-- Restart server for changes to take effect', solution: 'buffer_pool' }
        ]
    },
    "SQL for Large-Scale Data Systems": {
        content: `<h3>SQL for Large-Scale Data Systems</h3>
<p>Handling petabyte-scale data and distributed systems.</p>
<h4>Concepts:</h4>
<ul>
<li><strong>Data Warehousing</strong> - Snowflake, BigQuery</li>
<li><strong>Distributed SQL</strong> - Across multiple servers</li>
<li><strong>Columnar Storage</strong> - For analytics</li>
<li><strong>Sharding</strong> - Data partitioning across nodes</li>
</ul>
<h4>Example - BigQuery Style:</h4>
<pre><code>-- Analyze large dataset efficiently
SELECT 
    DATE(timestamp) as date,
    COUNT(DISTINCT user_id) as daily_users,
    SUM(revenue) as daily_revenue
FROM events
WHERE date >= '2024-01-01'
GROUP BY date
ORDER BY date DESC;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Write query for billion-row table.', template: 'SELECT DATE(timestamp), COUNT(DISTINCT user_id)\nFROM events\nGROUP BY DATE(timestamp);', solution: 'DATE' },
            { id: 2, type: 'output', prompt: 'What is data warehouse?', template: '-- answer', solution: 'analytics' },
            { id: 3, type: 'modify', prompt: 'Use columnar storage for analytics.', template: '-- Design with column-oriented format\nSELECT specific_columns FROM table;', solution: 'columnnar' },
            { id: 4, type: 'fix', prompt: 'Fix: partition large tables for query speed.', template: 'SELECT * FROM events\nWHERE DATE(timestamp) >= \'2024-01-01\'', solution: 'partition' },
            { id: 5, type: 'logic', prompt: 'Design distributed SQL across shards.', template: '-- Design sharding key\n-- Route queries to correct shard\n-- Aggregate results from multiple shards', solution: 'sharding' }
        ]
    }
};

const JS_BEGINNER_CONTENT = {
    "Introduction to JavaScript": {
        content: `<h3>Introduction to JavaScript</h3>
<p><strong>Industry Impact:</strong> JavaScript powers 99% of websites and modern web applications.</p>
<h4>What is JavaScript?</h4>
<ul>
<li>Programming language for web browsers and servers (Node.js)</li>
<li>Originally created in 1995 by Brendan Eich</li>
<li>Runs in browser without compilation</li>
<li>Powers dynamic, interactive websites</li>
</ul>
<h4>Uses:</h4>
<ul>
<li>Web development (frontend & backend)</li>
<li>Mobile apps (React Native, Flutter)</li>
<li>Desktop apps (Electron)</li>
<li>Server-side (Node.js)</li>
</ul>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Write console.log statement to print "Hello JavaScript".', template: 'console.log("Hello JavaScript");', solution: 'console.log' },
            { id: 2, type: 'output', prompt: 'What is JavaScript?', template: '// write answer', solution: 'programming language' },
            { id: 3, type: 'modify', prompt: 'Print your name using console.log.', template: 'console.log("Your Name");', solution: 'console.log' },
            { id: 4, type: 'fix', prompt: 'Fix: add semicolon and proper syntax.', template: 'console.log("Hello");', solution: ';' },
            { id: 5, type: 'logic', prompt: 'Print three different messages.', template: 'console.log("Line 1");\nconsole.log("Line 2");\nconsole.log("Line 3");', solution: 'console.log' }
        ]
    },
    "JavaScript Setup & Environment": {
        content: `<h3>JavaScript Setup & Environment</h3>
<p>Run JavaScript in browsers and Node.js environments.</p>
<h4>Browser Setup:</h4>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;JS App&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
    &lt;script&gt;
        console.log("Browser JavaScript");
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<h4>Node.js Setup:</h4>
<pre><code>// app.js
console.log("Hello from Node.js");

// Run: node app.js</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create script tag in HTML.', template: '&lt;script&gt;\nconsole.log("Test");\n&lt;/script&gt;', solution: '&lt;script&gt;' },
            { id: 2, type: 'output', prompt: 'Where does Node.js run?', template: '// answer', solution: 'server' },
            { id: 3, type: 'modify', prompt: 'Link external JS file.', template: '&lt;script src="app.js"&gt;&lt;/script&gt;', solution: 'src' },
            { id: 4, type: 'fix', prompt: 'Fix: close script tag properly.', template: '&lt;script&gt;code&lt;/script&gt;', solution: '&lt;/script&gt;' },
            { id: 5, type: 'logic', prompt: 'Setup basic HTML with JavaScript.', template: '&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;script&gt;\nconsole.log("Setup complete");\n&lt;/script&gt;\n&lt;/html&gt;', solution: '&lt;script&gt;' }
        ]
    },
    "Variables (var, let, const)": {
        content: `<h3>Variables: var, let, const</h3>
<p>Store and manage data with different scoping rules.</p>
<h4>Variable Keywords:</h4>
<ul>
<li><strong>var</strong> - Function-scoped (avoid in modern JS)</li>
<li><strong>let</strong> - Block-scoped (preferred for variables)</li>
<li><strong>const</strong> - Block-scoped, immutable (preferred default)</li>
</ul>
<h4>Example:</h4>
<pre><code>const name = "Asha";  // Cannot change
let age = 20;          // Can change
age = 21;              // OK

var city = "Delhi";    // Avoid (function-scoped)</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare const variable for name.', template: 'const name = "Asha";', solution: 'const' },
            { id: 2, type: 'output', prompt: 'Can const be reassigned?', template: '// answer', solution: 'no' },
            { id: 3, type: 'modify', prompt: 'Change let variable value.', template: 'let count = 5;\ncount = 10;', solution: '=' },
            { id: 4, type: 'fix', prompt: 'Fix: use let for reassignable variables.', template: 'const x = 10;\nx = 20;', solution: 'let x = 10' },
            { id: 5, type: 'logic', prompt: 'Declare const, let, var variables.', template: 'const name = "Asha";\nlet age = 20;\nvar city = "Delhi";', solution: 'const' }
        ]
    },
    "Data Types": {
        content: `<h3>JavaScript Data Types</h3>
<p>Primitive and complex data types.</p>
<h4>Primitive Types:</h4>
<ul>
<li><strong>Number</strong> - 42, 3.14, -5</li>
<li><strong>String</strong> - "Hello", 'World'</li>
<li><strong>Boolean</strong> - true, false</li>
<li><strong>Undefined</strong> - Variable declared but not assigned</li>
<li><strong>Null</strong> - Explicitly empty value</li>
<li><strong>Symbol</strong> - Unique identifier</li>
</ul>
<h4>Complex Types:</h4>
<ul>
<li><strong>Object</strong> - { key: value }</li>
<li><strong>Array</strong> - [1, 2, 3]</li>
</ul>
<h4>Example:</h4>
<pre><code>const num = 42;
const str = "Hello";
const bool = true;
const arr = [1, 2, 3];
const obj = { name: "Asha", age: 20 };</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create variables of all primitive types.', template: 'const num = 42;\nconst str = "test";\nconst bool = true;', solution: 'const' },
            { id: 2, type: 'output', prompt: 'What is typeof 42?', template: '// answer', solution: 'number' },
            { id: 3, type: 'modify', prompt: 'Create array and object variables.', template: 'const arr = [1, 2, 3];\nconst obj = { key: "value" };', solution: '[' },
            { id: 4, type: 'fix', prompt: 'Fix: string uses quotes.', template: 'const str = "Hello";', solution: '"' },
            { id: 5, type: 'logic', prompt: 'Store name, age, and hobbies in variables.', template: 'const name = "Asha";\nconst age = 20;\nconst hobbies = ["reading", "coding"];', solution: 'const' }
        ]
    },
    "Operators": {
        content: `<h3>JavaScript Operators</h3>
<p>Perform calculations and comparisons.</p>
<h4>Arithmetic Operators:</h4>
<ul>
<li>+ Addition, - Subtraction, * Multiplication, / Division, % Modulo, ** Exponent</li>
</ul>
<h4>Comparison Operators:</h4>
<ul>
<li>==, ===, !=, !==, <, >, <=, >=</li>
</ul>
<h4>Logical Operators:</h4>
<ul>
<li>&& AND, || OR, ! NOT</li>
</ul>
<h4>Example:</h4>
<pre><code>console.log(10 + 5);      // 15
console.log(10 > 5);      // true
console.log(true && false); // false
console.log("5" === 5);   // false (strict equality)</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Add two numbers: 10 + 20.', template: 'console.log(10 + 20);', solution: '+' },
            { id: 2, type: 'output', prompt: 'What is 2 ** 3?', template: '// answer', solution: '8' },
            { id: 3, type: 'modify', prompt: 'Compare two values: 15 > 10.', template: 'console.log(15 > 10);', solution: '>' },
            { id: 4, type: 'fix', prompt: 'Fix: use === for strict equality.', template: 'console.log("5" === 5);', solution: '===' },
            { id: 5, type: 'logic', prompt: 'Check if age > 18 AND status is active.', template: 'const age = 25;\nconst active = true;\nconsole.log(age > 18 && active);', solution: '&&' }
        ]
    },
    "Conditional Statements": {
        content: `<h3>Conditional Statements (if, else, switch)</h3>
<p>Make decisions in code.</p>
<h4>if / else:</h4>
<pre><code>if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teen");
} else {
    console.log("Child");
}</code></pre>
<h4>switch:</h4>
<pre><code>switch (day) {
    case "Monday":
        console.log("Start of week");
        break;
    case "Friday":
        console.log("TGIF");
        break;
    default:
        console.log("Weekday");
}</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Write if statement checking age > 18.', template: 'if (age > 18) { console.log("Adult"); }', solution: 'if' },
            { id: 2, type: 'output', prompt: 'Execute else block when if is false.', template: '// explain', solution: 'condition false' },
            { id: 3, type: 'modify', prompt: 'Add else if for age >= 13.', template: 'else if (age >= 13) { console.log("Teen"); }', solution: 'else if' },
            { id: 4, type: 'fix', prompt: 'Fix: use switch with break statements.', template: 'switch(day) { case "Mon": break; }', solution: 'break' },
            { id: 5, type: 'logic', prompt: 'Grade students based on score.', template: 'if (score >= 90) { grade = "A"; } else if (score >= 80) { grade = "B"; } else { grade = "C"; }', solution: 'if' }
        ]
    },
    "Loops": {
        content: `<h3>Loops (for, while, forEach)</h3>
<p>Repeat code multiple times.</p>
<h4>for Loop:</h4>
<pre><code>for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}</code></pre>
<h4>while Loop:</h4>
<pre><code>let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}</code></pre>
<h4>forEach (Arrays):</h4>
<pre><code>const nums = [1, 2, 3];
nums.forEach(num => console.log(num));</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Loop from 1 to 10 using for.', template: 'for (let i = 1; i <= 10; i++) { console.log(i); }', solution: 'for' },
            { id: 2, type: 'output', prompt: 'How many times does while loop execute?', template: '// answer', solution: 'condition true' },
            { id: 3, type: 'modify', prompt: 'Loop through array using forEach.', template: 'arr.forEach(item => console.log(item));', solution: 'forEach' },
            { id: 4, type: 'fix', prompt: 'Fix: add loop counter increment.', template: 'while (i < 5) { console.log(i); i++; }', solution: 'i++' },
            { id: 5, type: 'logic', prompt: 'Sum numbers 1-100 using loop.', template: 'let sum = 0;\nfor (let i = 1; i <= 100; i++) { sum += i; }', solution: 'for' }
        ]
    },
    "Functions": {
        content: `<h3>Functions</h3>
<p>Reusable blocks of code.</p>
<h4>Function Declaration:</h4>
<pre><code>function greet(name) {
    return \`Hello, \${name}!\`;
}

console.log(greet("Asha")); // Hello, Asha!</code></pre>
<h4>Arrow Function (ES6):</h4>
<pre><code>const add = (a, b) => a + b;
console.log(add(5, 3)); // 8</code></pre>
<h4>Anonymous Function:</h4>
<pre><code>const multiply = function(a, b) {
    return a * b;
};</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create function that returns double of input.', template: 'function double(x) { return x * 2; }', solution: 'function' },
            { id: 2, type: 'output', prompt: 'What does return statement do?', template: '// answer', solution: 'output value' },
            { id: 3, type: 'modify', prompt: 'Create arrow function for subtraction.', template: 'const subtract = (a, b) => a - b;', solution: '=>' },
            { id: 4, type: 'fix', prompt: 'Fix: function name must be valid identifier.', template: 'function myFunc() { return 42; }', solution: 'myFunc' },
            { id: 5, type: 'logic', prompt: 'Create function to check even/odd number.', template: 'function isEven(n) { return n % 2 === 0; }', solution: 'function' }
        ]
    },
    "Arrays": {
        content: `<h3>Arrays</h3>
<p>Store multiple values in ordered list.</p>
<h4>Array Basics:</h4>
<pre><code>const colors = ["red", "green", "blue"];
console.log(colors[0]); // "red"
colors.push("yellow");  // Add to end
colors.pop();           // Remove from end
console.log(colors.length); // 4</code></pre>
<h4>Array Methods:</h4>
<pre><code>arr.slice(1, 3);      // Get items 1-2
arr.includes("red");  // Check if contains
arr.join(", ");       // Join as string
arr.reverse();        // Reverse order</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create array of 5 numbers.', template: 'const nums = [1, 2, 3, 4, 5];', solution: '[' },
            { id: 2, type: 'output', prompt: 'Access first element of array.', template: 'arr[0]', solution: '0' },
            { id: 3, type: 'modify', prompt: 'Add element to array using push.', template: 'arr.push(6);', solution: 'push' },
            { id: 4, type: 'fix', prompt: 'Fix: array indices start at 0.', template: 'console.log(arr[0]);', solution: '0' },
            { id: 5, type: 'logic', prompt: 'Create array of names and get length.', template: 'const names = ["Asha", "Ravi", "Sita"];\nconsole.log(names.length);', solution: 'length' }
        ]
    },
    "Objects (Basics)": {
        content: `<h3>Objects (Basics)</h3>
<p>Store related data and functions together.</p>
<h4>Object Creation:</h4>
<pre><code>const person = {
    name: "Asha",
    age: 20,
    city: "Delhi",
    greet: function() {
        return \`Hello, I'm \${this.name}\`;
    }
};

console.log(person.name);       // "Asha"
console.log(person["age"]);     // 20
console.log(person.greet());    // Hello, I'm Asha</code></pre>
<h4>Adding Properties:</h4>
<pre><code>person.email = "asha@email.com";
person["phone"] = "9876543210";</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create object with name and age.', template: 'const user = { name: "Asha", age: 20 };', solution: '{' },
            { id: 2, type: 'output', prompt: 'Access object property with dot notation.', template: 'obj.name', solution: '.' },
            { id: 3, type: 'modify', prompt: 'Add new property to object.', template: 'obj.email = "test@email.com";', solution: '=' },
            { id: 4, type: 'fix', prompt: 'Fix: use bracket notation for property access.', template: 'obj["name"]', solution: '["name"]' },
            { id: 5, type: 'logic', prompt: 'Create student object with methods.', template: 'const student = {\n    name: "Asha",\n    grade: "A",\n    study: function() { return "Studying..."; }\n};', solution: '{' }
        ]
    }
};

const JS_INTERMEDIATE_CONTENT = {
    "Scope & Hoisting": {
        content: `<h3>Scope & Hoisting</h3>
<p>Understand variable accessibility and JavaScript's hoisting mechanism.</p>
<h4>Scope Types:</h4>
<ul>
<li><strong>Global Scope</strong> - Accessible everywhere</li>
<li><strong>Function Scope</strong> - Accessible within function</li>
<li><strong>Block Scope</strong> - Accessible within { }</li>
<li><strong>Lexical Scope</strong> - Inner accesses outer</li>
</ul>
<h4>Hoisting:</h4>
<pre><code>// Hoisted (undefined at first)
console.log(x); // undefined
var x = 5;

// Not hoisted (ReferenceError)
console.log(y); // Error
let y = 10;</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Demonstrate global scope.', template: 'const global = "accessible";\nfunction test() { console.log(global); }', solution: 'global' },
            { id: 2, type: 'output', prompt: 'What is hoisting?', template: '// answer', solution: 'move declaration' },
            { id: 3, type: 'modify', prompt: 'Create block scope with let.', template: '{ let x = 5; } // x not accessible here', solution: 'let' },
            { id: 4, type: 'fix', prompt: 'Fix: var vs let hoisting difference.', template: 'console.log(x); let x = 5; // Error', solution: 'ReferenceError' },
            { id: 5, type: 'logic', prompt: 'Demonstrate lexical scope with nested functions.', template: 'const outer = 10;\nfunction f1() { function f2() { console.log(outer); } }', solution: 'outer' }
        ]
    },
    "Closures": {
        content: `<h3>Closures</h3>
<p>Functions that retain access to outer scope variables.</p>
<h4>Closure Pattern:</h4>
<pre><code>function outer(x) {
    return function inner(y) {
        return x + y;
    };
}

const add5 = outer(5);
console.log(add5(3)); // 8</code></pre>
<h4>Practical Use:</h4>
<pre><code>// Counter with private state
const counter = (() => {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
})();</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create closure that returns sum function.', template: 'function add(x) { return (y) => x + y; }', solution: 'function' },
            { id: 2, type: 'output', prompt: 'What is closure?', template: '// answer', solution: 'function scope' },
            { id: 3, type: 'modify', prompt: 'Create multiplier closure.', template: 'const mult = (x) => (y) => x * y;', solution: '=>' },
            { id: 4, type: 'fix', prompt: 'Fix: closure accesses outer variables.', template: 'function outer(x) { return () => x; }', solution: 'outer' },
            { id: 5, type: 'logic', prompt: 'Create counter with increment/decrement.', template: 'const counter = (() => { let count = 0; return { inc: () => ++count, dec: () => --count }; })();', solution: 'closure' }
        ]
    },
    "Higher-Order Functions": {
        content: `<h3>Higher-Order Functions</h3>
<p>Functions that take or return functions.</p>
<h4>Examples:</h4>
<ul>
<li><strong>map()</strong> - Transform each element</li>
<li><strong>filter()</strong> - Select matching elements</li>
<li><strong>reduce()</strong> - Combine to single value</li>
<li><strong>forEach()</strong> - Execute for each element</li>
</ul>
<h4>Example:</h4>
<pre><code>const nums = [1, 2, 3, 4, 5];

const squared = nums.map(x => x ** 2);
const evens = nums.filter(x => x % 2 === 0);
const sum = nums.reduce((acc, x) => acc + x, 0);</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Use map to double all numbers.', template: 'const doubled = nums.map(x => x * 2);', solution: 'map' },
            { id: 2, type: 'output', prompt: 'What does filter return?', template: '// answer', solution: 'new array' },
            { id: 3, type: 'modify', prompt: 'Use reduce to sum numbers.', template: 'const sum = nums.reduce((acc, x) => acc + x, 0);', solution: 'reduce' },
            { id: 4, type: 'fix', prompt: 'Fix: map returns new array.', template: 'const result = nums.map(x => x + 1);', solution: 'map' },
            { id: 5, type: 'logic', prompt: 'Chain map, filter, reduce operations.', template: 'nums.filter(x => x > 2).map(x => x * 2).reduce((a, b) => a + b, 0);', solution: 'chain' }
        ]
    },
    "Array Methods (map, filter, reduce)": {
        content: `<h3>Array Methods in Depth</h3>
<p>Master powerful array manipulation methods.</p>
<h4>map():</h4>
<pre><code>const nums = [1, 2, 3];
const squared = nums.map(x => x ** 2); // [1, 4, 9]</code></pre>
<h4>filter():</h4>
<pre><code>const evens = nums.filter(x => x % 2 === 0); // [2]</code></pre>
<h4>reduce():</h4>
<pre><code>const sum = nums.reduce((acc, x) => acc + x, 0); // 6</code></pre>
<h4>find(), some(), every():</h4>
<pre><code>arr.find(x => x > 2);      // First match
arr.some(x => x > 3);      // Any match?
arr.every(x => x > 0);     // All match?</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Get all objects by mapping name.', template: 'const names = users.map(u => u.name);', solution: 'map' },
            { id: 2, type: 'output', prompt: 'Filter numbers greater than 5.', template: 'const big = nums.filter(x => x > 5);', solution: 'filter' },
            { id: 3, type: 'modify', prompt: 'Use find to get first match.', template: 'const user = users.find(u => u.id === 1);', solution: 'find' },
            { id: 4, type: 'fix', prompt: 'Fix: reduce needs initial value.', template: 'arr.reduce((a, b) => a + b, 0);', solution: '0' },
            { id: 5, type: 'logic', prompt: 'Filter and map in combination.', template: 'const result = users.filter(u => u.age > 18).map(u => u.name);', solution: 'filter' }
        ]
    },
    "DOM Manipulation": {
        content: `<h3>DOM Manipulation</h3>
<p>Interact with HTML elements using JavaScript.</p>
<h4>Select Elements:</h4>
<pre><code>const el = document.getElementById("id");
const els = document.querySelectorAll(".class");
const el2 = document.querySelector("h1");</code></pre>
<h4>Modify Elements:</h4>
<pre><code>el.textContent = "New Text";
el.innerHTML = "&lt;span&gt;HTML&lt;/span&gt;";
el.classList.add("active");
el.style.color = "red";</code></pre>
<h4>Create & Remove:</h4>
<pre><code>const div = document.createElement("div");
div.textContent = "New Element";
document.body.appendChild(div);
el.remove();</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Get element by ID.', template: 'const el = document.getElementById("myId");', solution: 'getElementById' },
            { id: 2, type: 'output', prompt: 'Select all elements with class.', template: 'const els = document.querySelectorAll(".className");', solution: 'querySelectorAll' },
            { id: 3, type: 'modify', prompt: 'Change element text.', template: 'el.textContent = "Updated Text";', solution: 'textContent' },
            { id: 4, type: 'fix', prompt: 'Fix: use classList to add class.', template: 'el.classList.add("active");', solution: 'classList' },
            { id: 5, type: 'logic', prompt: 'Create and append new element.', template: 'const newEl = document.createElement("p");\nnewEl.textContent = "Paragraph";\ndocument.body.appendChild(newEl);', solution: 'createElement' }
        ]
    },
    "Events & Event Handling": {
        content: `<h3>Events & Event Handling</h3>
<p>Respond to user interactions.</p>
<h4>Event Listeners:</h4>
<pre><code>const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    console.log("Button clicked!");
});

// With arrow function
btn.addEventListener("click", () => {
    console.log("Clicked");
});</code></pre>
<h4>Common Events:</h4>
<ul>
<li><strong>click</strong> - Mouse click</li>
<li><strong>change</strong> - Form change</li>
<li><strong>submit</strong> - Form submission</li>
<li><strong>keydown</strong> - Key pressed</li>
<li><strong>mouseover</strong> - Mouse hover</li>
</ul>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Add click event listener.', template: 'btn.addEventListener("click", () => console.log("Clicked"));', solution: 'addEventListener' },
            { id: 2, type: 'output', prompt: 'What event fires on form submit?', template: '// answer', solution: 'submit' },
            { id: 3, type: 'modify', prompt: 'Handle input change event.', template: 'input.addEventListener("change", (e) => console.log(e.target.value));', solution: 'change' },
            { id: 4, type: 'fix', prompt: 'Fix: use addEventListener method.', template: 'btn.addEventListener("click", handler);', solution: 'addEventListener' },
            { id: 5, type: 'logic', prompt: 'Toggle class on click.', template: 'el.addEventListener("click", () => el.classList.toggle("active"));', solution: 'toggle' }
        ]
    },
    "Error Handling": {
        content: `<h3>Error Handling (try, catch, finally)</h3>
<p>Handle errors gracefully.</p>
<h4>Try-Catch-Finally:</h4>
<pre><code>try {
    // Code that might error
    riskyFunction();
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Cleanup code");
}</code></pre>
<h4>Throwing Errors:</h4>
<pre><code>function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Write try-catch block.', template: 'try { risky(); } catch (e) { console.log(e); }', solution: 'try' },
            { id: 2, type: 'output', prompt: 'What does finally always do?', template: '// answer', solution: 'execute' },
            { id: 3, type: 'modify', prompt: 'Throw custom error.', template: 'throw new Error("Custom message");', solution: 'throw' },
            { id: 4, type: 'fix', prompt: 'Fix: catch parameter is required.', template: 'catch (error) { console.log(error); }', solution: 'error' },
            { id: 5, type: 'logic', prompt: 'Validate input and throw error.', template: 'if (!input) throw new Error("Input required");\n// Process input', solution: 'throw' }
        ]
    },
    "Asynchronous JavaScript (Callbacks, Promises)": {
        content: `<h3>Asynchronous JavaScript</h3>
<p>Handle operations that take time (network, timers).</p>
<h4>Callbacks:</h4>
<pre><code>function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 1000);
}

fetchData((data) => console.log(data));</code></pre>
<h4>Promises:</h4>
<pre><code>const promise = new Promise((resolve, reject) => {
    if (success) {
        resolve("Success!");
    } else {
        reject("Failed!");
    }
});

promise
    .then(data => console.log(data))
    .catch(error => console.error(error));</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create promise that resolves.', template: 'const p = new Promise((resolve) => resolve("done"));', solution: 'Promise' },
            { id: 2, type: 'output', prompt: 'What is callback?', template: '// answer', solution: 'function' },
            { id: 3, type: 'modify', prompt: 'Chain promises with then().', template: 'promise.then(data => console.log(data));', solution: 'then' },
            { id: 4, type: 'fix', prompt: 'Fix: handle rejection with catch.', template: 'promise.catch(e => console.error(e));', solution: 'catch' },
            { id: 5, type: 'logic', prompt: 'Create promise chain.', template: 'promise.then(r => console.log(r)).catch(e => console.error(e));', solution: 'then' }
        ]
    },
    "ES6+ Features": {
        content: `<h3>ES6+ Features</h3>
<p>Modern JavaScript syntax and features.</p>
<h4>Destructuring:</h4>
<pre><code>const [a, b] = [1, 2];
const { name, age } = { name: "Asha", age: 20 };</code></pre>
<h4>Spread Operator:</h4>
<pre><code>const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

const obj2 = { ...obj1, newKey: "value" };</code></pre>
<h4>Template Literals:</h4>
<pre><code>const name = "Asha";
const msg = \`Hello, \${name}!\`;</code></pre>
<h4>Class Syntax:</h4>
<pre><code>class Person {
    constructor(name) { this.name = name; }
    greet() { return \`Hello, \${this.name}\`; }
}</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Destructure array [1, 2, 3].', template: 'const [x, y, z] = [1, 2, 3];', solution: '[' },
            { id: 2, type: 'output', prompt: 'What does spread operator do?', template: '// answer', solution: 'expand' },
            { id: 3, type: 'modify', prompt: 'Use template literal with variable.', template: 'const msg = `Hello, ${name}!`;', solution: '`' },
            { id: 4, type: 'fix', prompt: 'Fix: use class keyword.', template: 'class MyClass { constructor() {} }', solution: 'class' },
            { id: 5, type: 'logic', prompt: 'Combine spread and destructuring.', template: 'const [a, ...rest] = [1, 2, 3, 4]; // rest = [2,3,4]', solution: 'spread' }
        ]
    },
    "Modules & Imports": {
        content: `<h3>Modules & Imports (ES6)</h3>
<p>Organize code into reusable modules.</p>
<h4>Export Module:</h4>
<pre><code>// math.js
export function add(a, b) { return a + b; }
export const PI = 3.14159;</code></pre>
<h4>Import Module:</h4>
<pre><code>// app.js
import { add, PI } from "./math.js";
console.log(add(2, 3)); // 5

// Default export
export default function greet() {}
import greet from "./greet.js";</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Export function from module.', template: 'export function myFunc() { return 42; }', solution: 'export' },
            { id: 2, type: 'output', prompt: 'Import named export.', template: 'import { func } from "./module.js";', solution: 'import' },
            { id: 3, type: 'modify', prompt: 'Import default export.', template: 'import myModule from "./module.js";', solution: 'import' },
            { id: 4, type: 'fix', prompt: 'Fix: use from keyword in import.', template: 'import { add } from "./math.js";', solution: 'from' },
            { id: 5, type: 'logic', prompt: 'Create and import module with multiple exports.', template: 'export const a = 1;\nexport const b = 2;\nimport { a, b } from "./module.js";', solution: 'export' }
        ]
    }
};

const JS_ADVANCED_CONTENT = {
    "Async / Await": {
        content: `<h3>Async / Await</h3>
<p>Modern asynchronous code with cleaner syntax.</p>
<h4>async/await Syntax:</h4>
<pre><code>async function fetchUser() {
    try {
        const response = await fetch("/api/user");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchUser();</code></pre>
<h4>Error Handling:</h4>
<pre><code>async function getData() {
    try {
        const data = await fetchData();
        return data;
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Done");
    }
}</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create async function.', template: 'async function getData() { return await fetch("/api"); }', solution: 'async' },
            { id: 2, type: 'output', prompt: 'What does await do?', template: '// answer', solution: 'wait' },
            { id: 3, type: 'modify', prompt: 'Handle async error with try-catch.', template: 'try { const d = await fetch(...); } catch(e) { }', solution: 'catch' },
            { id: 4, type: 'fix', prompt: 'Fix: await only in async function.', template: 'async function f() { const d = await fetch(...); }', solution: 'async' },
            { id: 5, type: 'logic', prompt: 'Chain multiple async calls.', template: 'const u = await getUser();\nconst p = await getProfile(u.id);', solution: 'await' }
        ]
    },
    "JavaScript Engine & Execution Context": {
        content: `<h3>JavaScript Engine & Execution Context</h3>
<p>Understand how JavaScript executes code.</p>
<h4>Execution Context Stack:</h4>
<ul>
<li><strong>Global Context</strong> - Code execution starts here</li>
<li><strong>Function Context</strong> - Created for each function call</li>
<li><strong>Call Stack</strong> - LIFO (Last In First Out)</li>
</ul>
<h4>Phases:</h4>
<pre><code>// Creation phase: declarations hoisted
// Execution phase: code runs line-by-line

function outer() {
    const x = 10;        // Outer execution context
    function inner() {
        console.log(x);  // Inner execution context
    }
    inner();
}</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Understand function context stack.', template: 'function a() { function b() { } b(); }', solution: 'context' },
            { id: 2, type: 'output', prompt: 'What is call stack?', template: '// answer', solution: 'LIFO' },
            { id: 3, type: 'modify', prompt: 'Trace execution through functions.', template: 'function f1() { f2(); }\nfunction f2() { }', solution: 'stack' },
            { id: 4, type: 'fix', prompt: 'Fix: understand this binding context.', template: 'const obj = { val: 5, get: function() { return this.val; } };', solution: 'this' },
            { id: 5, type: 'logic', prompt: 'Explain execution order.', template: 'console.log(a); // hoisted\nvar a = 5;\nfunction b() { console.log(a); }\nb();', solution: 'hoisting' }
        ]
    },
    "Event Loop & Concurrency Model": {
        content: `<h3>Event Loop & Concurrency Model</h3>
<p>Master JavaScript's single-threaded event-driven model.</p>
<h4>Event Loop Components:</h4>
<ul>
<li><strong>Call Stack</strong> - Executes synchronous code</li>
<li><strong>Web APIs</strong> - Browser APIs (fetch, setTimeout)</li>
<li><strong>Callback Queue</strong> - Callbacks waiting</li>
<li><strong>Event Loop</strong> - Checks when stack is empty</li>
</ul>
<h4>Example:</h4>
<pre><code>console.log("Start");
setTimeout(() => console.log("After 0ms"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// Output: Start, End, Promise, After 0ms</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Understand event loop timing.', template: 'setTimeout(() => {}, 0);\nPromise.resolve().then(() => {});', solution: 'event loop' },
            { id: 2, type: 'output', prompt: 'Execution order with setTimeout and Promise.', template: '// answer', solution: 'sync, promise, timeout' },
            { id: 3, type: 'modify', prompt: 'Demonstrate callback queue.', template: 'setTimeout(() => console.log("Callback"), 0);', solution: 'setTimeout' },
            { id: 4, type: 'fix', prompt: 'Fix: microtask queue before callback queue.', template: 'Promise vs setTimeout timing', solution: 'microtask' },
            { id: 5, type: 'logic', prompt: 'Predict execution order.', template: 'console.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);', solution: '1,4,3,2' }
        ]
    },
    "Memory Management & Garbage Collection": {
        content: `<h3>Memory Management & Garbage Collection</h3>
<p>Optimize memory usage and prevent leaks.</p>
<h4>Garbage Collection:</h4>
<ul>
<li><strong>Mark and Sweep</strong> - Remove unreachable objects</li>
<li><strong>Memory Leaks</strong> - Accidental references preventing GC</li>
<li><strong>Weak References</strong> - WeakMap, WeakSet</li>
</ul>
<h4>Memory Leak Example:</h4>
<pre><code>// Bad: Creates memory leak
const cache = [];
function addToCache(data) {
    cache.push(data); // Never removed!
}

// Good: Use WeakMap
const cache2 = new WeakMap();
cache2.set(obj, data); // Auto-collected when obj is GC'd</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Identify memory leak.', template: 'const arr = []; // Never clear', solution: 'memory leak' },
            { id: 2, type: 'output', prompt: 'What is garbage collection?', template: '// answer', solution: 'automatic' },
            { id: 3, type: 'modify', prompt: 'Use WeakMap to prevent leaks.', template: 'const weakCache = new WeakMap();', solution: 'WeakMap' },
            { id: 4, type: 'fix', prompt: 'Fix: remove references to allow GC.', template: 'obj = null; // Now eligible for GC', solution: 'null' },
            { id: 5, type: 'logic', prompt: 'Clean up event listeners to prevent leaks.', template: 'el.removeEventListener("click", handler);', solution: 'removeEventListener' }
        ]
    },
    "Prototypes & Inheritance": {
        content: `<h3>Prototypes & Inheritance</h3>
<p>Object-oriented JavaScript with prototype chain.</p>
<h4>Prototype Chain:</h4>
<pre><code>const parent = { greet: () => "Hello" };
const child = Object.create(parent);
child.name = "Asha";

console.log(child.greet()); // Hello (inherited)</code></pre>
<h4>Constructor Functions:</h4>
<pre><code>function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    return \`\${this.name} speaks\`;
};

const dog = new Animal("Dog");
console.log(dog.speak());</code></pre>
<h4>ES6 Class (Syntax Sugar):</h4>
<pre><code>class Animal {
    constructor(name) { this.name = name; }
    speak() { return \`\${this.name} speaks\`; }
}

class Dog extends Animal {
    speak() { return super.speak() + " Woof!"; }
}</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Create prototype inheritance.', template: 'const parent = { x: 1 };\nconst child = Object.create(parent);', solution: 'Object.create' },
            { id: 2, type: 'output', prompt: 'Access inherited property through chain.', template: 'child.x // 1', solution: 'chain' },
            { id: 3, type: 'modify', prompt: 'Create constructor function.', template: 'function MyClass(val) { this.val = val; }', solution: 'function' },
            { id: 4, type: 'fix', prompt: 'Fix: add method to prototype.', template: 'MyClass.prototype.method = function() {};', solution: 'prototype' },
            { id: 5, type: 'logic', prompt: 'Create class with inheritance.', template: 'class Child extends Parent { constructor() { super(); } }', solution: 'extends' }
        ]
    },
    "Design Patterns in JavaScript": {
        content: `<h3>Design Patterns in JavaScript</h3>
<p>Common solutions for recurring problems.</p>
<h4>Singleton Pattern:</h4>
<pre><code>const Singleton = (() => {
    let instance;
    return {
        getInstance: () => {
            if (!instance) instance = {};
            return instance;
        }
    };
})();</code></pre>
<h4>Observer Pattern:</h4>
<pre><code>const EventEmitter = {
    events: {},
    on(event, callback) { (this.events[event] ||= []).push(callback); },
    emit(event, ...args) { this.events[event]?.forEach(cb => cb(...args)); }
};</code></pre>
<h4>Factory Pattern:</h4>
<pre><code>function createUser(type) {
    if (type === "admin") return { role: "admin", canDelete: true };
    return { role: "user", canDelete: false };
}</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Implement Singleton pattern.', template: 'const Single = (() => { let inst; return { get: () => inst = inst || {} }; })();', solution: 'Singleton' },
            { id: 2, type: 'output', prompt: 'What is Factory pattern?', template: '// answer', solution: 'create objects' },
            { id: 3, type: 'modify', prompt: 'Implement Observer/EventEmitter.', template: 'on(event, cb) { events[event] = cb; }', solution: 'Observer' },
            { id: 4, type: 'fix', prompt: 'Fix: Factory returns different objects.', template: 'function factory(type) { return type === "A" ? {} : []; }', solution: 'factory' },
            { id: 5, type: 'logic', prompt: 'Use design pattern in real app.', template: 'const db = Singleton.getInstance();\nemitter.on("save", saveData);', solution: 'pattern' }
        ]
    },
    "Web APIs & Fetch": {
        content: `<h3>Web APIs & Fetch</h3>
<p>Communicate with servers and APIs.</p>
<h4>Fetch API:</h4>
<pre><code>// GET request
const response = await fetch("/api/users");
const data = await response.json();

// POST request
const result = await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Asha" })
});

// Error handling
if (!response.ok) throw new Error(\`HTTP \${response.status}\`);</code></pre>
<h4>Common Status Codes:</h4>
<ul>
<li>200 - OK, 201 - Created, 400 - Bad Request, 401 - Unauthorized, 404 - Not Found, 500 - Server Error</li>
</ul>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Fetch data from API.', template: 'const res = await fetch("/api"); const data = await res.json();', solution: 'fetch' },
            { id: 2, type: 'output', prompt: 'What does response.ok check?', template: '// answer', solution: 'status 200-299' },
            { id: 3, type: 'modify', prompt: 'Send POST request with JSON.', template: 'fetch("/api", { method: "POST", body: JSON.stringify({}) });', solution: 'POST' },
            { id: 4, type: 'fix', prompt: 'Fix: set Content-Type header.', template: 'headers: { "Content-Type": "application/json" }', solution: 'Content-Type' },
            { id: 5, type: 'logic', prompt: 'Handle fetch errors properly.', template: 'fetch("/api").then(r => { if (!r.ok) throw new Error(`${r.status}`); return r.json(); });', solution: 'error' }
        ]
    },
    "Performance Optimization": {
        content: `<h3>Performance Optimization</h3>
<p>Write fast, responsive JavaScript applications.</p>
<h4>Techniques:</h4>
<ul>
<li><strong>Debouncing</strong> - Delay repeated calls</li>
<li><strong>Throttling</strong> - Limit call frequency</li>
<li><strong>Lazy Loading</strong> - Load on demand</li>
<li><strong>Code Splitting</strong> - Load code in chunks</li>
<li><strong>Memoization</strong> - Cache results</li>
</ul>
<h4>Example - Debounce:</h4>
<pre><code>function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

const search = debounce((query) => fetch(\`/api/search?q=\${query}\`), 300);</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Implement debounce function.', template: 'function debounce(fn, d) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), d); }; }', solution: 'debounce' },
            { id: 2, type: 'output', prompt: 'What is debouncing?', template: '// answer', solution: 'delay calls' },
            { id: 3, type: 'modify', prompt: 'Use debounce on search input.', template: 'input.addEventListener("input", debounce(search, 300));', solution: 'debounce' },
            { id: 4, type: 'fix', prompt: 'Fix: throttle limits frequency.', template: 'let last = 0; return (...a) => { if (Date.now() - last > delay) { fn(...a); last = Date.now(); } }', solution: 'throttle' },
            { id: 5, type: 'logic', prompt: 'Memoize function results.', template: 'const memo = (fn) => { const cache = {}; return (x) => cache[x] ?? (cache[x] = fn(x)); };', solution: 'memoization' }
        ]
    },
    "Security Best Practices": {
        content: `<h3>Security Best Practices</h3>
<p>Prevent common web vulnerabilities.</p>
<h4>XSS (Cross-Site Scripting):</h4>
<pre><code>// Bad: XSS vulnerability
el.innerHTML = userInput; // Dangerous!

// Good: Use textContent
el.textContent = userInput;

// Good: Sanitize HTML
import DOMPurify from "dompurify";
el.innerHTML = DOMPurify.sanitize(userInput);</code></pre>
<h4>CSRF Protection:</h4>
<pre><code>// Always use CSRF tokens
const token = document.querySelector('input[name="csrf"]').value;
fetch("/api", {
    method: "POST",
    headers: { "X-CSRF-Token": token },
    body: JSON.stringify(data)
});</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Prevent XSS with textContent.', template: 'el.textContent = userInput; // Safe', solution: 'textContent' },
            { id: 2, type: 'output', prompt: 'What is XSS?', template: '// answer', solution: 'script injection' },
            { id: 3, type: 'modify', prompt: 'Sanitize user HTML.', template: 'el.innerHTML = DOMPurify.sanitize(html);', solution: 'DOMPurify' },
            { id: 4, type: 'fix', prompt: 'Fix: avoid dangerous innerHTML.', template: 'el.textContent = text; // Not el.innerHTML', solution: 'textContent' },
            { id: 5, type: 'logic', prompt: 'Include CSRF token in requests.', template: 'headers: { "X-CSRF-Token": token }', solution: 'CSRF' }
        ]
    },
    "JavaScript Testing & Debugging": {
        content: `<h3>JavaScript Testing & Debugging</h3>
<p>Write reliable code with tests and debugging.</p>
<h4>Testing Frameworks:</h4>
<ul>
<li><strong>Jest</strong> - Unit testing</li>
<li><strong>Mocha</strong> - Test runner</li>
<li><strong>Jasmine</strong> - BDD framework</li>
</ul>
<h4>Unit Test Example:</h4>
<pre><code>// test.js
import { add } from "./math.js";

describe("Math", () => {
    it("adds two numbers", () => {
        expect(add(2, 3)).toBe(5);
    });
});</code></pre>
<h4>Debugging:</h4>
<pre><code>// Browser DevTools
debugger;  // Pause execution
console.log(var);
console.table(array);
console.trace();  // Stack trace</code></pre>`,
        questions: [
            { id: 1, type: 'practice', prompt: 'Write unit test with Jest.', template: 'test("adds numbers", () => { expect(add(2,3)).toBe(5); });', solution: 'test' },
            { id: 2, type: 'output', prompt: 'What is unit testing?', template: '// answer', solution: 'test functions' },
            { id: 3, type: 'modify', prompt: 'Use debugger to pause.', template: 'debugger; // Code pauses here', solution: 'debugger' },
            { id: 4, type: 'fix', prompt: 'Fix: use expect for assertions.', template: 'expect(result).toBe(expected);', solution: 'expect' },
            { id: 5, type: 'logic', prompt: 'Test error handling.', template: 'expect(() => riskyFunc()).toThrow();', solution: 'toThrow' }
        ]
    }
};

const CPP_BEGINNER_CONTENT = {
    "C++ Setup": {
        content: `<h3>C++ Setup & Environment</h3>
<p><strong>Real-World:</strong> Google, Microsoft, and game studios use C++ for performance-critical systems.</p>
<h4>Installation:</h4>
<ul>
<li>Windows: Install MinGW or Visual Studio</li>
<li>Linux: Install g++ via apt-get</li>
<li>macOS: Install Xcode Command Line Tools</li>
</ul>
<h4>Compilation:</h4>
<pre><code>// hello.cpp
#include <iostream>
int main() {
    std::cout << "Hello, C++!" << std::endl;
    return 0;
}

// Compile: g++ hello.cpp -o hello
// Run: ./hello</code></pre>`,
        videos: [
            { title: "C++ Setup Guide - CodeBeauty", url: "https://www.youtube.com/watch?v=17rwHdyQs7c" }
        ]
    },
    "Syntax & I/O": {
        content: `<h3>C++ Syntax & Input/Output</h3>
<p>Understand basic C++ syntax and console I/O operations.</p>
<h4>Headers & Namespaces:</h4>
<pre><code>#include <iostream>  // Input-Output library
using namespace std;  // Avoid std:: prefix

int main() {
    cout << "Name: ";
    string name;
    cin >> name;
    cout << "Hello, " << name << "!" << endl;
    return 0;
}</code></pre>
<h4>Output Methods:</h4>
<ul>
<li>cout - Standard output</li>
<li>cerr - Error output</li>
<li>clog - Logging output</li>
</ul>`,
        videos: [
            { title: "C++ I/O - Programming with Mosh", url: "https://www.youtube.com/watch?v=tj8qm3MZ4Es" }
        ]
    },
    "Variables & Data Types": {
        content: `<h3>Variables & Data Types</h3>
<p>Master C++ fundamental data types and variable declarations.</p>
<h4>Primitive Types:</h4>
<pre><code>int age = 25;              // 4 bytes
float height = 5.9f;       // 4 bytes
double pi = 3.14159;       // 8 bytes
char grade = 'A';          // 1 byte
bool isPassed = true;      // 1 byte

// Type casting
int value = (int)3.14;     // explicit cast
int num = 100;
double result = num;       // implicit cast</code></pre>
<h4>Memory Layout:</h4>
<ul>
<li>char: 1 byte (-128 to 127)</li>
<li>int: 4 bytes</li>
<li>long: 8 bytes</li>
<li>float: 4 bytes (6-7 digits precision)</li>
<li>double: 8 bytes (15-16 digits precision)</li>
</ul>`,
        videos: [
            { title: "C++ Data Types - Bro Code", url: "https://www.youtube.com/watch?v=oJGBhb4j2nE" }
        ]
    },
    "Operators": {
        content: `<h3>Operators in C++</h3>
<p>Learn arithmetic, logical, and bitwise operators.</p>
<h4>Operator Categories:</h4>
<pre><code>// Arithmetic
int sum = 10 + 5;      // 15
int diff = 10 - 5;     // 5
int prod = 10 * 5;     // 50
int div = 10 / 5;      // 2
int mod = 10 % 3;      // 1

// Comparison
bool isEqual = (5 == 5);        // true
bool isGreater = (10 > 5);      // true
bool isNotEqual = (5 != 3);     // true

// Logical
bool result = (5 > 3) && (10 > 5);  // AND - true
bool result2 = (5 < 3) || (10 > 5); // OR - true
bool result3 = !(5 < 3);            // NOT - true

// Bitwise
int bitwiseAnd = 5 & 3;        // 1 (101 & 011 = 001)
int bitwiseOr = 5 | 3;         // 7 (101 | 011 = 111)
int leftShift = 5 << 1;        // 10 (shift left)</code></pre>`,
        videos: [
            { title: "C++ Operators - Apna College", url: "https://www.youtube.com/watch?v=SZQ6-_3-x5s" }
        ]
    },
    "Control Flow": {
        content: `<h3>Control Flow Statements</h3>
<p>Conditional execution of code blocks.</p>
<h4>If-Else-If:</h4>
<pre><code>int score = 85;

if (score >= 90) {
    cout << "Grade: A" << endl;
} else if (score >= 80) {
    cout << "Grade: B" << endl;
} else if (score >= 70) {
    cout << "Grade: C" << endl;
} else {
    cout << "Grade: F" << endl;
}

// Ternary operator
string result = (score >= 90) ? "Pass" : "Fail";</code></pre>
<h4>Switch Statement:</h4>
<pre><code>int day = 3;
switch(day) {
    case 1: cout << "Monday"; break;
    case 2: cout << "Tuesday"; break;
    case 3: cout << "Wednesday"; break;
    default: cout << "Unknown";
}</code></pre>`,
        videos: [
            { title: "C++ Control Flow - CodeBeauty", url: "https://www.youtube.com/watch?v=1TvJG57bzHw" }
        ]
    },
    "Loops": {
        content: `<h3>Loop Structures</h3>
<p>Repeat code execution with for, while, and do-while loops.</p>
<h4>For Loop:</h4>
<pre><code>// Traditional for loop
for (int i = 0; i < 5; i++) {
    cout << i << " ";
}  // Output: 0 1 2 3 4

// Summing numbers
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}
cout << sum;  // 5050</code></pre>
<h4>While & Do-While:</h4>
<pre><code>// While loop
int count = 0;
while (count < 3) {
    cout << count << " ";
    count++;
}

// Do-While (executes at least once)
do {
    cout << "Enter number: ";
    cin >> num;
} while (num != 0);</code></pre>
<h4>Loop Control:</h4>
<ul>
<li>break - Exit loop immediately</li>
<li>continue - Skip to next iteration</li>
</ul>`,
        videos: [
            { title: "C++ Loops - Programming with Mosh", url: "https://www.youtube.com/watch?v=Z1Yd7aUcW3t" }
        ]
    },
    "Functions": {
        content: `<h3>Functions in C++</h3>
<p>Modular code through function definition and calling.</p>
<h4>Function Syntax:</h4>
<pre><code>// Declaration (prototype)
int add(int a, int b);

// Definition
int add(int a, int b) {
    return a + b;
}

// Calling
int result = add(5, 3);  // 8

// Void function (no return)
void greet(string name) {
    cout << "Hello, " << name << "!" << endl;
}
greet("Alice");</code></pre>
<h4>Function Features:</h4>
<ul>
<li>Default parameters: int power(int base, int exp = 2)</li>
<li>Function overloading: same name, different parameters</li>
<li>Pass by value vs reference: void swap(int &a, int &b)</li>
</ul>`,
        videos: [
            { title: "C++ Functions - Bro Code", url: "https://www.youtube.com/watch?v=xzVirXLmbIE" }
        ]
    },
    "Arrays & Strings": {
        content: `<h3>Arrays & Strings</h3>
<p>Work with collections of data and text.</p>
<h4>Arrays:</h4>
<pre><code>// Array declaration
int numbers[5] = {10, 20, 30, 40, 50};
int arr[3];  // Uninitialized

// Accessing elements
cout << numbers[0];  // 10
numbers[2] = 35;     // Modify

// Array iteration
for (int i = 0; i < 5; i++) {
    cout << numbers[i] << " ";
}</code></pre>
<h4>Strings:</h4>
<pre><code>#include <string>
using namespace std;

// C++ String class
string name = "Alice";
string greeting = "Hello, " + name;  // Concatenation

// String methods
int len = name.length();      // 5
string upper = "HELLO";
char first = name[0];         // 'A'
bool found = (name.find("li") != string::npos);</code></pre>`,
        videos: [
            { title: "C++ Arrays & Strings - CodeBeauty", url: "https://www.youtube.com/watch?v=PXy12fX4V8w" }
        ]
    },
    "Pointers & References": {
        content: `<h3>Pointers & References</h3>
<p>Understand memory addresses and indirect access to variables.</p>
<h4>Pointers:</h4>
<pre><code>// Pointer declaration
int x = 10;
int* ptr = &x;  // Address-of operator &

// Dereferencing
cout << *ptr;    // 10 (dereference to get value)
cout << ptr;     // Memory address

// Pointer arithmetic
int arr[] = {10, 20, 30};
int* p = arr;    // Points to first element
cout << *p;      // 10
cout << *(p+1);  // 20 (move pointer forward)

// Null pointer
int* nullPtr = nullptr;</code></pre>
<h4>References:</h4>
<pre><code>int x = 10;
int& ref = x;  // Reference (alias)

ref = 20;      // Changes x to 20
cout << x;     // 20

// References vs Pointers:
// - References cannot be null
// - References cannot be reassigned
// - Syntactically cleaner</code></pre>`,
        videos: [
            { title: "C++ Pointers - Programming with Mosh", url: "https://www.youtube.com/watch?v=w0QYle1jotc" }
        ]
    },
    "Basic OOP": {
        content: `<h3>Introduction to Object-Oriented Programming</h3>
<p>Fundamentals of classes and objects in C++.</p>
<h4>Class Definition:</h4>
<pre><code>class Car {
    // Access modifiers
    private:
        string color;
        int speed;
    
    public:
        // Constructor
        Car(string c, int s) : color(c), speed(s) {}
        
        // Methods
        void accelerate() {
            speed += 10;
        }
        
        void display() {
            cout << color << " car at " << speed << " km/h" << endl;
        }
};

// Creating objects
Car myCar("red", 50);
myCar.accelerate();
myCar.display();</code></pre>
<h4>OOP Principles:</h4>
<ul>
<li>Encapsulation - Hide internal state</li>
<li>Inheritance - Reuse code from parent classes</li>
<li>Polymorphism - Override methods in subclasses</li>
<li>Abstraction - Expose only necessary details</li>
</ul>`,
        videos: [
            { title: "C++ OOP Basics - Apna College", url: "https://www.youtube.com/watch?v=xQN_7zx0nPw" }
        ]
    }
};

const CPP_INTERMEDIATE_CONTENT = {
    "Classes & Objects": {
        content: `<h3>Advanced Classes & Objects</h3>
<p><strong>Industry Use:</strong> Game engines use sophisticated class hierarchies.</p>
<h4>Member Variables & Methods:</h4>
<pre><code>class Player {
    private:
        string name;
        int health;
        int mana;
    
    public:
        Player(string n, int h, int m) : name(n), health(h), mana(m) {}
        
        void takeDamage(int dmg) {
            health -= dmg;
            if (health < 0) health = 0;
        }
        
        int getHealth() const { return health; }  // const method
        void setName(string n) { name = n; }
};</code></pre>
<h4>Static Members:</h4>
<pre><code>class Counter {
    private:
        static int count;  // Shared by all instances
    
    public:
        Counter() { count++; }
        static int getCount() { return count; }
};

int Counter::count = 0;  // Initialize static variable</code></pre>`,
        videos: [
            { title: "C++ Classes - CodeBeauty", url: "https://www.youtube.com/watch?v=NZtr93kS-5s" }
        ]
    },
    "Constructors & Destructors": {
        content: `<h3>Constructors & Destructors</h3>
<p>Object initialization and cleanup.</p>
<h4>Constructors:</h4>
<pre><code>class File {
    private:
        string filename;
        int* data;
    
    public:
        // Default constructor
        File() : filename(""), data(nullptr) {}
        
        // Parameterized constructor
        File(string f) : filename(f) {
            data = new int[100];
        }
        
        // Copy constructor
        File(const File& other) : filename(other.filename) {
            data = new int[100];
            // Copy data from other
        }
};</code></pre>
<h4>Destructors:</h4>
<pre><code>class File {
    private:
        int* buffer;
    
    public:
        File() { buffer = new int[1000]; }
        
        ~File() {  // Destructor
            delete[] buffer;  // Free memory
        }
};

File f;  // Constructor called
// ... use f ...
// Destructor called automatically when f goes out of scope</code></pre>`,
        videos: [
            { title: "C++ Constructors & Destructors - Bro Code", url: "https://www.youtube.com/watch?v=n2fWkAEZC2s" }
        ]
    },
    "Inheritance": {
        content: `<h3>Inheritance</h3>
<p>Extend functionality from base classes.</p>
<h4>Single Inheritance:</h4>
<pre><code>class Animal {  // Base class
    protected:
        string name;
    
    public:
        Animal(string n) : name(n) {}
        virtual void makeSound() {
            cout << "Generic animal sound" << endl;
        }
};

class Dog : public Animal {  // Derived class
    public:
        Dog(string n) : Animal(n) {}
        
        void makeSound() override {  // Override method
            cout << name << " barks: Woof!" << endl;
        }
};

Animal* pet = new Dog("Buddy");
pet->makeSound();  // Buddy barks: Woof!</code></pre>
<h4>Access Levels:</h4>
<ul>
<li>public - Accessible everywhere</li>
<li>protected - Accessible in derived classes</li>
<li>private - Only in this class</li>
</ul>`,
        videos: [
            { title: "C++ Inheritance - Programming with Mosh", url: "https://www.youtube.com/watch?v=fYRCvxjWYzo" }
        ]
    },
    "Polymorphism": {
        content: `<h3>Polymorphism</h3>
<p>Multiple forms and dynamic method resolution.</p>
<h4>Virtual Functions & Override:</h4>
<pre><code>class Shape {  // Base class
    public:
        virtual void draw() { cout << "Drawing shape" << endl; }
        virtual ~Shape() {}  // Virtual destructor
};

class Circle : public Shape {
    public:
        void draw() override { cout << "Drawing circle" << endl; }
};

class Square : public Shape {
    public:
        void draw() override { cout << "Drawing square" << endl; }
};

void displayShape(Shape* s) {
    s->draw();  // Calls correct method based on actual type
}

Circle c;
Square sq;
displayShape(&c);   // Drawing circle
displayShape(&sq);  // Drawing square</code></pre>
<h4>Function Overloading:</h4>
<pre><code>class Printer {
    public:
        void print(int n) { cout << n << endl; }
        void print(string s) { cout << s << endl; }
        void print(double d) { cout << d << endl; }
};</code></pre>`,
        videos: [
            { title: "C++ Polymorphism - CodeBeauty", url: "https://www.youtube.com/watch?v=RjeMsFfGr8o" }
        ]
    },
    "STL Containers": {
        content: `<h3>Standard Template Library Containers</h3>
<p>Efficient data structures from the STL.</p>
<h4>Vector (Dynamic Array):</h4>
<pre><code>#include <vector>
using namespace std;

vector<int> nums;  // Empty vector
nums.push_back(10);
nums.push_back(20);
nums.insert(nums.begin(), 5);  // Insert at beginning

for (int n : nums) {
    cout << n << " ";  // 5 10 20
}

nums.pop_back();  // Remove last element
cout << nums.size();  // 2</code></pre>
<h4>Map (Key-Value Pairs):</h4>
<pre><code>#include <map>
map<string, int> ages;
ages["Alice"] = 25;
ages["Bob"] = 30;

if (ages.count("Alice") > 0) {
    cout << ages["Alice"];  // 25
}

for (auto& pair : ages) {
    cout << pair.first << ": " << pair.second << endl;
}</code></pre>
<h4>Set (Unique Values):</h4>
<pre><code>#include <set>
set<int> unique_nums;
unique_nums.insert(5);
unique_nums.insert(3);
unique_nums.insert(5);  // Ignored, already exists

cout << unique_nums.size();  // 2</code></pre>`,
        videos: [
            { title: "C++ STL Containers - Apna College", url: "https://www.youtube.com/watch?v=j3ZLGKqVCaU" }
        ]
    },
    "STL Algorithms": {
        content: `<h3>STL Algorithms & Iterators</h3>
<p>Powerful algorithms for data manipulation.</p>
<h4>Common Algorithms:</h4>
<pre><code>#include <algorithm>
#include <vector>

vector<int> nums = {5, 2, 8, 1, 9};

// Sorting
sort(nums.begin(), nums.end());  // Ascending
sort(nums.rbegin(), nums.rend());  // Descending

// Finding
auto it = find(nums.begin(), nums.end(), 8);
if (it != nums.end()) {
    cout << "Found!";
}

// Transforming
vector<int> doubled;
transform(nums.begin(), nums.end(), 
           back_inserter(doubled), 
           [](int x) { return x * 2; });

// Counting
int even_count = count_if(nums.begin(), nums.end(),
                          [](int x) { return x % 2 == 0; });</code></pre>
<h4>Iterators:</h4>
<pre><code>vector<int> v = {1, 2, 3};
vector<int>::iterator it = v.begin();
*it;      // 1
++it;     // Move to next
it += 2;  // Advance by 2</code></pre>`,
        videos: [
            { title: "C++ STL Algorithms - Bro Code", url: "https://www.youtube.com/watch?v=GS54lLGkMEE" }
        ]
    },
    "Exception Handling": {
        content: `<h3>Exception Handling</h3>
<p>Manage errors gracefully with try-catch-throw.</p>
<h4>Try-Catch Blocks:</h4>
<pre><code>try {
    int age;
    cin >> age;
    
    if (age < 0) {
        throw invalid_argument("Age cannot be negative");
    }
    if (age > 150) {
        throw out_of_range("Age unrealistic");
    }
    
    cout << "Age is valid: " << age << endl;
}
catch (invalid_argument& e) {
    cout << "Invalid: " << e.what() << endl;
}
catch (out_of_range& e) {
    cout << "Out of range: " << e.what() << endl;
}
catch (exception& e) {
    cout << "Error: " << e.what() << endl;
}</code></pre>
<h4>Custom Exceptions:</h4>
<pre><code>class NegativeNumberException : public exception {
    public:
        const char* what() const noexcept override {
            return "Numbers must be positive!";
        }
};</code></pre>`,
        videos: [
            { title: "C++ Exception Handling - Programming with Mosh", url: "https://www.youtube.com/watch?v=hjwqyO3DV4c" }
        ]
    },
    "File Handling": {
        content: `<h3>File I/O Operations</h3>
<p>Read and write files in C++.</p>
<h4>Writing to Files:</h4>
<pre><code>#include <fstream>
#include <string>
using namespace std;

ofstream outFile("output.txt");
if (outFile.is_open()) {
    outFile << "Line 1: Hello" << endl;
    outFile << "Line 2: World" << endl;
    outFile.close();
} else {
    cout << "Error opening file!" << endl;
}</code></pre>
<h4>Reading from Files:</h4>
<pre><code>ifstream inFile("output.txt");
string line;

if (inFile.is_open()) {
    while (getline(inFile, line)) {
        cout << line << endl;
    }
    inFile.close();
}

// Read word by word
string word;
while (inFile >> word) {
    cout << word << endl;
}</code></pre>
<h4>File Modes:</h4>
<ul>
<li>ios::in - Read mode</li>
<li>ios::out - Write mode (overwrites)</li>
<li>ios::app - Append mode</li>
<li>ios::binary - Binary mode</li>
</ul>`,
        videos: [
            { title: "C++ File Handling - CodeBeauty", url: "https://www.youtube.com/watch?v=sgtTATLZ5Eg" }
        ]
    },
    "Templates Basics": {
        content: `<h3>Function & Class Templates</h3>
<p>Generic programming for code reuse.</p>
<h4>Function Templates:</h4>
<pre><code>// Generic max function
template <typename T>
T getMax(T a, T b) {
    return (a > b) ? a : b;
}

int max_int = getMax(5, 10);        // 10
double max_double = getMax(3.5, 7.2);  // 7.2

// Multiple parameters
template <typename T, typename U>
void display(T first, U second) {
    cout << first << ", " << second << endl;
}

display(42, "Hello");  // 42, Hello</code></pre>
<h4>Class Templates:</h4>
<pre><code>template <typename T>
class Pair {
    private:
        T first, second;
    
    public:
        Pair(T f, T s) : first(f), second(s) {}
        
        void display() {
            cout << first << ", " << second << endl;
        }
};

Pair<int> p1(10, 20);
p1.display();  // 10, 20

Pair<string> p2("Hello", "World");
p2.display();  // Hello, World</code></pre>`,
        videos: [
            { title: "C++ Templates - Bro Code", url: "https://www.youtube.com/watch?v=I-hZkUa9mIs" }
        ]
    },
    "Memory Management": {
        content: `<h3>Dynamic Memory Allocation</h3>
<p>Manage memory at runtime with new and delete.</p>
<h4>Dynamic Allocation:</h4>
<pre><code>// Allocate single variable
int* ptr = new int;      // Allocate int
*ptr = 42;
delete ptr;             // Free memory
ptr = nullptr;          // Avoid dangling pointer

// Allocate array
int* arr = new int[10];
for (int i = 0; i < 10; i++) {
    arr[i] = i * i;
}
delete[] arr;  // Note: [] for arrays

// Allocate object
class Car { ... };
Car* myCar = new Car();
delete myCar;</code></pre>
<h4>Memory Leaks:</h4>
<pre><code>// BAD: Memory leak
void bad_function() {
    int* ptr = new int(100);
    // ... no delete ...
}  // ptr deallocated but memory not freed!

// GOOD: Proper cleanup
void good_function() {
    int* ptr = new int(100);
    // ... use ptr ...
    delete ptr;  // Explicit cleanup
}</code></pre>`,
        videos: [
            { title: "C++ Memory Management - Programming with Mosh", url: "https://www.youtube.com/watch?v=sxTFSxUwLWE" }
        ]
    }
};

const CPP_ADVANCED_CONTENT = {
    "Advanced Templates": {
        content: `<h3>Advanced Template Metaprogramming</h3>
<p><strong>Expert Level:</strong> Used in libraries like Boost and STL internals.</p>
<h4>Template Specialization:</h4>
<pre><code>// Primary template
template <typename T>
class Calculator {
    public:
        static T square(T x) { return x * x; }
};

// Specialization for string
template <>
class Calculator<string> {
    public:
        static string square(string s) {
            return s + s;
        }
};

Calculator<int> ci;
cout << ci.square(5);  // 25

Calculator<string> cs;
cout << cs.square("hi");  // hihi</code></pre>
<h4>SFINAE & Enable_if:</h4>
<pre><code>#include <type_traits>
using namespace std;

template <typename T>
enable_if_t<is_integral_v<T>, T>
multiply(T a, T b) {
    return a * b;
}

// This version only enabled for floating-point types
template <typename T>
enable_if_t<is_floating_point_v<T>, T>
multiply(T a, T b) {
    return a * b * 1.0;
}</code></pre>`,
        videos: [
            { title: "C++ Template Metaprogramming - Code Monkey", url: "https://www.youtube.com/watch?v=a1yS1MCyScg" }
        ]
    },
    "Move Semantics": {
        content: `<h3>Move Semantics & RValue References</h3>
<p>Optimize performance by avoiding unnecessary copies.</p>
<h4>RValue References & Move Constructor:</h4>
<pre><code>class Buffer {
    private:
        int* data;
        int size;
    
    public:
        // Copy constructor
        Buffer(const Buffer& other) : size(other.size) {
            data = new int[size];
            for (int i = 0; i < size; i++) {
                data[i] = other.data[i];
            }
        }
        
        // Move constructor (C++11)
        Buffer(Buffer&& other) noexcept : data(other.data), size(other.size) {
            other.data = nullptr;  // Steal ownership
            other.size = 0;
        }
        
        ~Buffer() { delete[] data; }
};

Buffer b1(vector_data);
Buffer b2 = move(b1);  // Move instead of copy</code></pre>
<h4>Move Semantics Benefits:</h4>
<ul>
<li>Avoids expensive deep copies</li>
<li>Transfers ownership of resources</li>
<li>Enables perfect forwarding</li>
<li>Essential for efficient containers</li>
</ul>`,
        videos: [
            { title: "C++ Move Semantics - CodeBeauty", url: "https://www.youtube.com/watch?v=St0MNEU5M-0" }
        ]
    },
    "Smart Pointers": {
        content: `<h3>Smart Pointers (RAII Pattern)</h3>
<p>Automatic memory management without manual delete.</p>
<h4>Unique Pointer:</h4>
<pre><code>#include <memory>
using namespace std;

// unique_ptr: Exclusive ownership
unique_ptr<int> ptr1(new int(42));
cout << *ptr1;  // 42

// Transfer ownership
unique_ptr<int> ptr2 = move(ptr1);
// ptr1 is now null

// Make_unique (safer)
auto ptr3 = make_unique<int>(100);
// Automatically deleted when ptr3 goes out of scope</code></pre>
<h4>Shared Pointer:</h4>
<pre><code>// shared_ptr: Multiple owners
shared_ptr<vector<int>> data = make_shared<vector<int>>();
data->push_back(10);

shared_ptr<vector<int>> data2 = data;  // Reference count increases
// Memory freed only when all pointers destroyed

cout << data.use_count();  // 2</code></pre>
<h4>Weak Pointer:</h4>
<pre><code>weak_ptr<int> weak = shared_ptr;

if (auto strong = weak.lock()) {
    cout << *strong;  // Safe access
}</code></pre>`,
        videos: [
            { title: "C++ Smart Pointers - Bro Code", url: "https://www.youtube.com/watch?v=UOB7-B3sM8s" }
        ]
    },
    "Multithreading": {
        content: `<h3>Multithreading & Concurrency</h3>
<p>Execute multiple tasks simultaneously.</p>
<h4>Creating Threads:</h4>
<pre><code>#include <thread>
#include <iostream>
using namespace std;

void work(int id) {
    for (int i = 0; i < 5; i++) {
        cout << "Worker " << id << ": " << i << endl;
    }
}

int main() {
    thread t1(work, 1);
    thread t2(work, 2);
    
    // Wait for threads to complete
    t1.join();
    t2.join();
    
    return 0;
}</code></pre>
<h4>Thread Synchronization:</h4>
<pre><code>#include <mutex>

mutex mtx;

void criticalSection(int id) {
    mtx.lock();
    cout << "Thread " << id << " executing" << endl;
    mtx.unlock();
    
    // Better: use lock_guard
    {
        lock_guard<mutex> guard(mtx);
        // Critical section
    }  // Automatically unlocks
}</code></pre>`,
        videos: [
            { title: "C++ Multithreading - Programming with Mosh", url: "https://www.youtube.com/watch?v=gvAb2XW3u7g" }
        ]
    },
    "Concurrency": {
        content: `<h3>Advanced Concurrency Patterns</h3>
<p>Condition variables, atomics, and thread pools.</p>
<h4>Condition Variables:</h4>
<pre><code>#include <condition_variable>
#include <queue>

queue<int> buffer;
mutex mtx;
condition_variable cv;

// Producer thread
void producer() {
    for (int i = 0; i < 10; i++) {
        unique_lock<mutex> lock(mtx);
        buffer.push(i);
        lock.unlock();
        cv.notify_one();  // Notify consumer
    }
}

// Consumer thread
void consumer() {
    while (true) {
        unique_lock<mutex> lock(mtx);
        cv.wait(lock, [] { return !buffer.empty(); });
        int val = buffer.front();
        buffer.pop();
        cout << val << endl;
    }
}</code></pre>
<h4>Atomic Operations:</h4>
<pre><code>#include <atomic>

atomic<int> counter(0);

void increment() {
    counter++;  // Thread-safe without mutex
}

// Memory ordering
counter.store(5, memory_order_release);
int val = counter.load(memory_order_acquire);</code></pre>`,
        videos: [
            { title: "C++ Condition Variables - CodeBeauty", url: "https://www.youtube.com/watch?v=gKRwAYJfvmQ" }
        ]
    },
    "Design Patterns": {
        content: `<h3>C++ Design Patterns</h3>
<p>Proven solutions to common problems.</p>
<h4>Singleton Pattern:</h4>
<pre><code>class Database {
    private:
        static Database* instance;
        Database() {}  // Private constructor
    
    public:
        static Database* getInstance() {
            if (instance == nullptr) {
                instance = new Database();
            }
            return instance;
        }
};

Database* Database::instance = nullptr;</code></pre>
<h4>Factory Pattern:</h4>
<pre><code>class Shape { public: virtual ~Shape() {} };
class Circle : public Shape {};
class Square : public Shape {};

class ShapeFactory {
    public:
        static Shape* createShape(string type) {
            if (type == "circle") return new Circle();
            if (type == "square") return new Square();
            return nullptr;
        }
};</code></pre>
<h4>Observer Pattern:</h4>
<pre><code>class Observer {
    public:
        virtual void update(string message) = 0;
};

class Subject {
    private:
        vector<Observer*> observers;
    
    public:
        void attach(Observer* obs) { observers.push_back(obs); }
        void notify(string msg) {
            for (auto obs : observers) obs->update(msg);
        }
};</code></pre>`,
        videos: [
            { title: "C++ Design Patterns - Apna College", url: "https://www.youtube.com/watch?v=tyoJVYrZMo0" }
        ]
    },
    "Performance Optimization": {
        content: `<h3>Profiling & Performance Tuning</h3>
<p>Write efficient, blazingly fast C++ code.</p>
<h4>Optimization Techniques:</h4>
<pre><code>// 1. Use references instead of copies
void process(const vector<int>& data) {  // No copy
    for (const auto& item : data) {
        // ...
    }
}

// 2. Minimize allocations
vector<int> v;
v.reserve(1000);  // Pre-allocate
for (int i = 0; i < 1000; i++) {
    v.push_back(i);
}

// 3. Use move semantics
string s = "hello";
string s2 = move(s);  // No copy

// 4. Compiler optimizations
// Compile with: g++ -O3 -march=native program.cpp</code></pre>
<h4>Profiling Tools:</h4>
<ul>
<li>gprof - CPU profiler</li>
<li>valgrind - Memory profiler</li>
<li>perf - Linux performance analyzer</li>
<li>Google Chrome DevTools for web C++</li>
</ul>`,
        videos: [
            { title: "C++ Performance - Chandler Carruth", url: "https://www.youtube.com/watch?v=fDlJUCMLj8E" }
        ]
    },
    "Low-level C++": {
        content: `<h3>Low-Level Programming & System Calls</h3>
<p>Direct hardware and OS interaction.</p>
<h4>Bit Manipulation:</h4>
<pre><code>// Bitwise operations
int flags = 0b0000;
flags |= (1 << 2);    // Set bit 2
flags &= ~(1 << 1);   // Clear bit 1
flags ^= (1 << 3);    // Toggle bit 3

bool isBitSet = (flags & (1 << 2)) != 0;

// Bit fields in structs
struct Permissions {
    unsigned int read : 1;
    unsigned int write : 1;
    unsigned int execute : 1;
};</code></pre>
<h4>Inline Assembly:</h4>
<pre><code>// GCC inline assembly
int x = 10, result;
asm("movl %1, %%eax;\n\t"
    "addl $5, %%eax;\n\t"
    "movl %%eax, %0;\n\t"
    : "=r" (result)      // Output
    : "r" (x)            // Input
    : "%eax");

// result = x + 5</code></pre>`,
        videos: [
            { title: "C++ Bit Manipulation - Errichto", url: "https://www.youtube.com/watch?v=bVJ-4_1Hpww" }
        ]
    },
    "Modern C++ Features": {
        content: `<h3>C++11/14/17/20 Modern Features</h3>
<p>Latest language enhancements and best practices.</p>
<h4>Auto Type Deduction (C++11):</h4>
<pre><code>auto x = 42;                    // int
auto str = "hello"s;            // std::string
auto vec = vector{1, 2, 3};     // vector<int>

// Range-based for loop
for (auto& item : collection) {
    // ...
}

// Structured bindings (C++17)
auto [key, value] = pair;
for (auto [x, y] : map_data) {
    // ...
}</code></pre>
<h4>Lambda Functions (C++11):</h4>
<pre><code>// Simple lambda
auto square = [](int x) { return x * x; };
cout << square(5);  // 25

// Capture variables
int multiplier = 3;
auto multiply = [multiplier](int x) { return x * multiplier; };

// With STL
vector<int> nums = {1, 2, 3, 4};
transform(nums.begin(), nums.end(), nums.begin(),
          [](int x) { return x * 2; });</code></pre>
<h4>Concepts (C++20):</h4>
<pre><code>template <typename T>
concept Addable = requires(T a, T b) {
    { a + b } -> convertible_to<T>;
};

template <Addable T>
T add(T a, T b) { return a + b; }</code></pre>`,
        videos: [
            { title: "C++17 Features - Conor Hoekstra", url: "https://www.youtube.com/watch?v=wTnLRwt5W4o" }
        ]
    },
    "C++ Internals": {
        content: `<h3>Understanding C++ Internals</h3>
<p>How the compiler and runtime work under the hood.</p>
<h4>Object Memory Layout:</h4>
<pre><code>class Base {
public:
    int x;        // 4 bytes
    virtual void foo() {}  // VTable pointer added
};

class Derived : public Base {
public:
    int y;        // 4 bytes
};

// Memory layout:
// [VTable*: 8] [x: 4] [y: 4] = 16 bytes (with padding)

sizeof(Base);     // 16
sizeof(Derived);  // 16</code></pre>
<h4>VTable (Virtual Method Table):</h4>
<pre><code>// Compiler creates VTable at compile time
class Shape {
public:
    virtual void draw() = 0;
    virtual ~Shape() {}
};

// VTable structure:
// Shape::VTable = [&Shape::~Shape, &Shape::draw]
// Circle::VTable = [&Circle::~Circle, &Circle::draw]

// At runtime: shape_ptr->draw() looks up in VTable</code></pre>
<h4>Name Mangling:</h4>
<pre><code>// C++ names are "mangled" for linking
void foo(int);        // _Z3fooi
void foo(double);     // _Z3food
void foo(string);     // _Z3fooSs

// Use extern "C" to prevent mangling
extern "C" {
    void c_function();
}</code></pre>`,
        videos: [
            { title: "C++ Object Model - Herb Sutter", url: "https://www.youtube.com/watch?v=qH4YNBx5TTU" }
        ]
    }
};

const C_BEGINNER_CONTENT = {
    "C Basics & Compilation": {
        content: `<h3>C Basics & Compilation</h3>
<p><strong>Real-World:</strong> Operating systems (Linux kernel), databases (SQLite), and embedded systems rely on C.</p>
<h4>C Program Structure:</h4>
<pre><code>#include <stdio.h>   // Include header

int main() {          // Entry point
    printf("Hello, C!\\n");  // Output
    return 0;         // Exit status
}</code></pre>
<h4>Compilation Process:</h4>
<ul>
<li>Preprocessing - Directives handled (#include, #define)</li>
<li>Compilation - Convert to assembly code</li>
<li>Assembly - Generate object file (.o)</li>
<li>Linking - Link libraries and objects into executable</li>
</ul>
<h4>Compile & Run:</h4>
<pre><code>gcc program.c -o program      // Compile
./program                      // Run on Linux/Mac
program.exe                    // Run on Windows</code></pre>`,
        videos: [
            { title: "C Basics & Compilation - Bro Code", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Write a C program that prints "Hello, World!"', template: '#include <stdio.h>\nint main() {\n    \n    return 0;\n}', solution: 'printf' },
            { id: 2, type: 'output', prompt: 'What is the entry point of a C program?', template: '// answer', solution: 'main' },
            { id: 3, type: 'modify', prompt: 'Add a header to use printf.', template: '// Add #include directive\nint main() { printf(\"Hi\"); }', solution: '#include' },
            { id: 4, type: 'fix', prompt: 'Fix: Missing return statement in main.', template: '#include <stdio.h>\nint main() {\n    printf(\"Hello\");\n}', solution: 'return' },
            { id: 5, type: 'logic', prompt: 'Compile a C program named test.c.', template: '// gcc command', solution: 'gcc' }
        ]
    },
    "Data Types": {
        content: `<h3>C Data Types</h3>
<p>Fundamental building blocks of data in C.</p>
<h4>Primitive Types:</h4>
<pre><code>// Integer types
char age = 25;                  // 1 byte (-128 to 127)
short salary_level = 2;         // 2 bytes
int employee_id = 10001;        // 4 bytes
long population = 7800000000L;  // 8 bytes

// Floating-point
float temperature = 36.5f;      // 4 bytes
double pi = 3.14159265359;      // 8 bytes

// Check sizes
printf("int size: %lu bytes\\n", sizeof(int));
printf("double size: %lu bytes\\n", sizeof(double));</code></pre>
<h4>Type Casting:</h4>
<pre><code>int x = 10;
float y = (float)x;  // Explicit cast
int z = (int)3.7;    // Truncates to 3

printf("%d\\n", (int)(5.99));  // 5</code></pre>`,
        videos: [
            { title: "C Data Types - Programming with Mosh", url: "https://www.youtube.com/watch?v=tsG7EEYA_1c" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare an integer and a float variable.', template: 'int num;\nfloat price;', solution: 'int' },
            { id: 2, type: 'output', prompt: 'What is the size of int on most systems?', template: '// answer in bytes', solution: '4' },
            { id: 3, type: 'modify', prompt: 'Cast a float to int.', template: 'float f = 3.7;\nint x = f;', solution: '(int)' },
            { id: 4, type: 'fix', prompt: 'Fix: Use correct format specifier for float.', template: 'printf("%d", 3.14f);', solution: '%f' },
            { id: 5, type: 'logic', prompt: 'Print size of double.', template: 'printf("%lu", sizeof(double));', solution: 'sizeof' }
        ]
    },
    "Variables & Constants": {
        content: `<h3>Variables & Constants in C</h3>
<p>Store and manage data with variables and immutable constants.</p>
<h4>Variable Declaration:</h4>
<pre><code>// Declaration and initialization
int score = 95;              // Declared and assigned
char grade;                  // Declared only
grade = 'A';                 // Later assigned

// Multiple variables
int x = 1, y = 2, z = 3;
float price, quantity;

// Valid identifiers
int myVariable;              // Camel case
int my_variable;             // Snake case
int MyVariable;              // Pascal case</code></pre>
<h4>Constants:</h4>
<pre><code>// Using #define (preprocessor)
#define PI 3.14159
#define MAX_STUDENTS 100

// Using const (compile-time checked)
const int DAYS_IN_WEEK = 7;
const float EARTH_GRAVITY = 9.8f;

// Constants cannot be modified
// DAYS_IN_WEEK = 8;  // Error!</code></pre>
<h4>Storage Classes:</h4>
<pre><code>auto int x = 5;              // Local (default)
static int counter = 0;      // Persistent
extern int global_var;       // External variable</code></pre>`,
        videos: [
            { title: "C Variables & Constants - CodeBeauty", url: "https://www.youtube.com/watch?v=yJB_8JBVcCc" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare and initialize a variable.', template: 'int score = 100;', solution: 'int' },
            { id: 2, type: 'output', prompt: 'What keyword makes a variable constant?', template: '// answer', solution: 'const' },
            { id: 3, type: 'modify', prompt: 'Define a constant for PI.', template: '#define PI 3.14159', solution: '#define' },
            { id: 4, type: 'fix', prompt: 'Fix: Const variable must be initialized.', template: 'const int X;', solution: '= 10' },
            { id: 5, type: 'logic', prompt: 'Use a static variable in a function.', template: 'static int count = 0;\ncount++;', solution: 'static' }
        ]
    },
    "Operators": {
        content: `<h3>C Operators</h3>
<p>Perform operations on variables and values.</p>
<h4>Arithmetic Operators:</h4>
<pre><code>int a = 10, b = 3;

printf("%d\\n", a + b);      // 13 (addition)
printf("%d\\n", a - b);      // 7 (subtraction)
printf("%d\\n", a * b);      // 30 (multiplication)
printf("%d\\n", a / b);      // 3 (division - integer)
printf("%d\\n", a % b);      // 1 (modulo)
printf("%d\\n", a++);        // Post-increment
printf("%d\\n", ++a);        // Pre-increment</code></pre>
<h4>Comparison & Logical:</h4>
<pre><code>int x = 5, y = 10;

// Comparison (returns 0 or 1)
printf("%d\\n", x == y);    // 0 (false)
printf("%d\\n", x != y);    // 1 (true)
printf("%d\\n", x < y);     // 1 (true)
printf("%d\\n", x > y);     // 0 (false)

// Logical
printf("%d\\n", (x > 0) && (y > 0));  // 1 (AND)
printf("%d\\n", (x > 10) || (y > 0)); // 1 (OR)
printf("%d\\n", !(x == y));           // 1 (NOT)</code></pre>
<h4>Bitwise Operators:</h4>
<pre><code>int flags = 0;  // Binary: 0000
flags = 5 & 3;  // 0101 & 0011 = 0001 = 1
flags = 5 | 3;  // 0101 | 0011 = 0111 = 7
flags = 5 ^ 3;  // 0101 ^ 0011 = 0110 = 6
flags = ~5;     // NOT 0101 = 1010 (inverts all bits)</code></pre>`,
        videos: [
            { title: "C Operators - Apna College", url: "https://www.youtube.com/watch?v=eQSZhKRxJ5c" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Calculate 10 % 3 (modulo).', template: 'int result = 10 % 3;', solution: '%' },
            { id: 2, type: 'output', prompt: 'What is 5 / 2 in C (integer division)?', template: '// answer', solution: '2' },
            { id: 3, type: 'modify', prompt: 'Use post-increment on variable x.', template: 'int x = 5;\nx++;', solution: '++' },
            { id: 4, type: 'fix', prompt: 'Fix: Use && for logical AND.', template: 'if (x > 0 & y > 0) {}', solution: '&&' },
            { id: 5, type: 'logic', prompt: 'Use bitwise OR to set a flag.', template: 'flags = flags | (1 << 2);', solution: '|' }
        ]
    },
    "Control Statements": {
        content: `<h3>Control Statements (If-Else)</h3>
<p>Execute code conditionally based on conditions.</p>
<h4>If Statement:</h4>
<pre><code>int age = 18;

if (age >= 18) {
    printf("You are an adult.\\n");
}</code></pre>
<h4>If-Else:</h4>
<pre><code>int score = 75;

if (score >= 90) {
    printf("Grade: A\\n");
} else if (score >= 80) {
    printf("Grade: B\\n");
} else if (score >= 70) {
    printf("Grade: C\\n");
} else {
    printf("Grade: F\\n");
}</code></pre>
<h4>Switch Statement:</h4>
<pre><code>int day = 3;

switch (day) {
    case 1:
        printf("Monday\\n");
        break;  // Important!
    case 2:
        printf("Tuesday\\n");
        break;
    case 3:
        printf("Wednesday\\n");
        break;
    default:
        printf("Unknown day\\n");
}</code></pre>
<h4>Ternary Operator:</h4>
<pre><code>int age = 20;
char* status = (age >= 18) ? "Adult" : "Minor";
printf("%s\\n", status);  // Adult</code></pre>`,
        videos: [
            { title: "C Control Statements - Bro Code", url: "https://www.youtube.com/watch?v=aVJxcJ2qJYc" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Write if-else to check if num is positive.', template: 'if (num > 0) printf("Positive");\nelse printf("Not positive");', solution: 'if' },
            { id: 2, type: 'output', prompt: 'What happens if break is missing in switch?', template: '// answer', solution: 'fall through' },
            { id: 3, type: 'modify', prompt: 'Add else-if for score >= 80.', template: 'if (score >= 90) {}\nelse if (score >= 80) {}', solution: 'else if' },
            { id: 4, type: 'fix', prompt: 'Fix: Add break in switch case.', template: 'case 1: printf("One");', solution: 'break' },
            { id: 5, type: 'logic', prompt: 'Use ternary operator for max.', template: 'int max = (a > b) ? a : b;', solution: '?' }
        ]
    },
    "Loops": {
        content: `<h3>Loop Structures</h3>
<p>Repeat code execution with for, while, and do-while loops.</p>
<h4>For Loop:</h4>
<pre><code>// Traditional for loop
for (int i = 0; i < 5; i++) {
    printf("%d ", i);  // Output: 0 1 2 3 4
}

// Sum 1 to 100
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}
printf("Sum: %d\\n", sum);  // 5050</code></pre>
<h4>While Loop:</h4>
<pre><code>int count = 0;
while (count < 3) {
    printf("Count: %d\\n", count);
    count++;
}

// Reading input until sentinel
int num;
while (scanf("%d", &num) == 1 && num != 0) {
    printf("You entered: %d\\n", num);
}</code></pre>
<h4>Do-While Loop:</h4>
<pre><code>// Executes at least once
int choice;
do {
    printf("Enter 0 to quit: ");
    scanf("%d", &choice);
} while (choice != 0);</code></pre>
<h4>Loop Control:</h4>
<pre><code>// break - Exit loop
for (int i = 0; i < 10; i++) {
    if (i == 5) break;  // Exit when i = 5
}

// continue - Skip to next iteration
for (int i = 0; i < 5; i++) {
    if (i == 2) continue;  // Skip 2
    printf("%d ", i);      // Output: 0 1 3 4
}</code></pre>`,
        videos: [
            { title: "C Loops - Programming with Mosh", url: "https://www.youtube.com/watch?v=WqDDOH1sybE" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Write a for loop to print 0 to 9.', template: 'for (int i = 0; i < 10; i++) printf("%d ", i);', solution: 'for' },
            { id: 2, type: 'output', prompt: 'How many times does do-while execute minimum?', template: '// answer', solution: '1' },
            { id: 3, type: 'modify', prompt: 'Use while loop to sum 1 to 10.', template: 'int i = 1, sum = 0;\nwhile (i <= 10) { sum += i; i++; }', solution: 'while' },
            { id: 4, type: 'fix', prompt: 'Fix: Add loop increment.', template: 'for (int i = 0; i < 5;) {}', solution: 'i++' },
            { id: 5, type: 'logic', prompt: 'Use continue to skip even numbers.', template: 'if (i % 2 == 0) continue;', solution: 'continue' }
        ]
    },
    "Functions": {
        content: `<h3>Functions in C</h3>
<p>Modularize code with reusable functions.</p>
<h4>Function Declaration & Definition:</h4>
<pre><code>// Declaration (prototype)
int add(int a, int b);

// Definition
int add(int a, int b) {
    return a + b;
}

// Calling
int result = add(5, 3);  // 8
printf("Result: %d\\n", result);</code></pre>
<h4>Void Functions:</h4>
<pre><code>void greet(char* name) {
    printf("Hello, %s!\\n", name);
    // No return needed for void
}

greet("Alice");  // Hello, Alice!</code></pre>
<h4>Pass by Value vs Reference:</h4>
<pre><code>// Pass by value (copy)
void increment(int x) {
    x++;  // Doesn't affect original
}

int num = 5;
increment(num);
printf("%d\\n", num);  // Still 5

// Pass by reference (using pointers)
void increment_ref(int* x) {
    (*x)++;  // Changes original
}

increment_ref(&num);
printf("%d\\n", num);  // Now 6</code></pre>
<h4>Return Types & Early Return:</h4>
<pre><code>int max(int a, int b) {
    if (a > b) return a;  // Early return
    return b;
}

float calculate(int x) {
    if (x < 0) return -1.0;  // Error indicator
    return (float)x / 2;
}</code></pre>`,
        videos: [
            { title: "C Functions - CodeBeauty", url: "https://www.youtube.com/watch?v=OPN_3Zjyb-g" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Write a function that returns sum of two ints.', template: 'int add(int a, int b) { return a + b; }', solution: 'return' },
            { id: 2, type: 'output', prompt: 'What keyword indicates no return value?', template: '// answer', solution: 'void' },
            { id: 3, type: 'modify', prompt: 'Pass variable by reference using pointer.', template: 'void inc(int* x) { (*x)++; }', solution: '*' },
            { id: 4, type: 'fix', prompt: 'Fix: Add function prototype.', template: 'int multiply(int, int);', solution: 'int multiply' },
            { id: 5, type: 'logic', prompt: 'Call function with address-of operator.', template: 'increment(&num);', solution: '&' }
        ]
    },
    "Arrays": {
        content: `<h3>Arrays in C</h3>
<p>Store multiple values of the same type.</p>
<h4>Array Declaration:</h4>
<pre><code>// Fixed-size arrays
int numbers[5];                    // Uninitialized
int scores[5] = {90, 85, 88, 95};  // Partial init (5th = 0)
int data[3] = {10, 20, 30};        // Complete init

// Size determined by elements
int arr[] = {1, 2, 3, 4, 5};  // Size = 5

// Accessing elements
printf("%d\\n", numbers[0]);      // First element
numbers[2] = 42;                  // Modify element</code></pre>
<h4>Iterating Arrays:</h4>
<pre><code>int arr[5] = {10, 20, 30, 40, 50};

// Using index
for (int i = 0; i < 5; i++) {
    printf("%d ", arr[i]);
}

// Get array size
int size = sizeof(arr) / sizeof(arr[0]);  // 5

// Sum all elements
int sum = 0;
for (int i = 0; i < size; i++) {
    sum += arr[i];
}
printf("Sum: %d\\n", sum);</code></pre>
<h4>2D Arrays:</h4>
<pre><code>int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Access element
printf("%d\\n", matrix[1][2]);  // 6 (row 1, col 2)

// Iterate
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d ", matrix[i][j]);
    }
}</code></pre>`,
        videos: [
            { title: "C Arrays - Apna College", url: "https://www.youtube.com/watch?v=3SEzVnjZpWk" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare an integer array of size 10.', template: 'int arr[10];', solution: 'int' },
            { id: 2, type: 'output', prompt: 'What is the index of the first element?', template: '// answer', solution: '0' },
            { id: 3, type: 'modify', prompt: 'Initialize array with values {1,2,3}.', template: 'int nums[] = {1, 2, 3};', solution: '{' },
            { id: 4, type: 'fix', prompt: 'Fix: Calculate array size correctly.', template: 'int size = sizeof(arr) / sizeof(arr[0]);', solution: 'sizeof' },
            { id: 5, type: 'logic', prompt: 'Access element at row 1, col 2 in 2D array.', template: 'int val = matrix[1][2];', solution: '[1][2]' }
        ]
    },
    "Strings": {
        content: `<h3>Strings in C</h3>
<p>Text handling using character arrays and functions.</p>
<h4>String Basics:</h4>
<pre><code>// String as char array (null-terminated)
char name[20] = "Alice";      // 'A','l','i','c','e','\0'
char city[] = "New York";     // Size auto-determined

// Individual characters
printf("%c\\n", name[0]);     // A
printf("%c\\n", name[5]);     // \0 (null terminator)

// Print string
printf("%s\\n", name);         // Alice
printf("Name: %s\\n", name);  // Name: Alice</code></pre>
<h4>String Input:</h4>
<pre><code>#include <stdio.h>

char input[50];

// Read string (stops at space)
scanf("%s", input);

// Read entire line (including spaces)
fgets(input, sizeof(input), stdin);

// Read with limit to prevent overflow
char buffer[20];
fgets(buffer, 20, stdin);  // Maximum 19 characters</code></pre>
<h4>String Functions:</h4>
<pre><code>#include <string.h>

char str1[20] = "Hello";
char str2[20] = "World";

// Length
int len = strlen(str1);  // 5

// Copy
strcpy(str2, str1);     // str2 = "Hello"
strncpy(str2, str1, 3); // str2 = "Hel" (safer)

// Concatenate
strcat(str1, " World");     // str1 = "Hello World"
strncat(str1, " C", 2);    // Safer version

// Compare
int cmp = strcmp(str1, str2);  // 0 if equal

// Find substring
char* pos = strchr(str1, 'o');  // Find first 'o'</code></pre>`,
        videos: [
            { title: "C Strings - Bro Code", url: "https://www.youtube.com/watch?v=L8b5DFYw4Cc" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare a string "Hello".', template: 'char str[] = "Hello";', solution: 'char' },
            { id: 2, type: 'output', prompt: 'What character ends every string?', template: '// answer', solution: '\\0' },
            { id: 3, type: 'modify', prompt: 'Use strlen to get string length.', template: 'int len = strlen(str);', solution: 'strlen' },
            { id: 4, type: 'fix', prompt: 'Fix: Include string.h for strcpy.', template: '#include <string.h>', solution: '#include' },
            { id: 5, type: 'logic', prompt: 'Compare two strings with strcmp.', template: 'if (strcmp(s1, s2) == 0) {}', solution: 'strcmp' }
        ]
    },
    "Pointers Basics": {
        content: `<h3>Pointers in C</h3>
<p>Understanding memory addresses and indirect access.</p>
<h4>Pointer Concepts:</h4>
<pre><code>int x = 10;
int* ptr = &x;  // Address-of operator &

printf("Value: %d\\n", x);       // 10
printf("Address: %p\\n", &x);    // 0x7fff5fbff8c8 (example)
printf("Pointer value: %p\\n", ptr);  // Same as &x
printf("Dereferenced: %d\\n", *ptr);  // 10 (dereference *)</code></pre>
<h4>Pointer Operations:</h4>
<pre><code>int a = 5, b = 10;
int* p1 = &a;
int* p2 = &b;

// Dereferencing
*p1 = 20;       // Changes a to 20
printf("%d\\n", a);   // 20

// Reassign pointer
p1 = p2;        // p1 now points to b
printf("%d\\n", *p1);  // 10

// Null pointer
int* null_ptr = NULL;  // Safe uninitialized pointer</code></pre>
<h4>Pointers & Functions:</h4>
<pre><code>// Swap using pointers
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int x = 5, y = 10;
swap(&x, &y);
printf("%d %d\\n", x, y);  // 10 5

// Return pointer
int* getMax(int* a, int* b) {
    return (*a > *b) ? a : b;
}

int max_ptr = *getMax(&x, &y);</code></pre>
<h4>Pointer Size:</h4>
<pre><code>int* ptr;
char* cptr;
float* fptr;

// All pointers same size on same machine
printf("%lu bytes\\n", sizeof(ptr));   // 8 (64-bit)
printf("%lu bytes\\n", sizeof(cptr));  // 8 (64-bit)
printf("%lu bytes\\n", sizeof(fptr));  // 8 (64-bit)</code></pre>`,
        videos: [
            { title: "C Pointers - Programming with Mosh", url: "https://www.youtube.com/watch?v=m5-nlY2-pXQ" }
        ],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare a pointer to int.', template: 'int* ptr;', solution: 'int*' },
            { id: 2, type: 'output', prompt: 'Which operator gets the address of a variable?', template: '// answer', solution: '&' },
            { id: 3, type: 'modify', prompt: 'Dereference pointer to get value.', template: 'int val = *ptr;', solution: '*' },
            { id: 4, type: 'fix', prompt: 'Fix: Initialize pointer to NULL.', template: 'int* p = NULL;', solution: 'NULL' },
            { id: 5, type: 'logic', prompt: 'Pass pointer to function to modify variable.', template: 'void inc(int* x) { (*x)++; }\ninc(&num);', solution: '&' }
        ]
    }
};

const C_INTERMEDIATE_CONTENT = {
    "Pointer Arithmetic": {
        content: `<h3>Pointer Arithmetic</h3>
<p><strong>Industry:</strong> Essential for system programming and memory manipulation.</p>
<h4>Pointer Operations:</h4>
<pre><code>int arr[5] = {10, 20, 30, 40, 50};
int* ptr = arr;  // Points to first element

printf("%d\\n", *ptr);        // 10
printf("%d\\n", *(ptr + 1));  // 20 (moves 4 bytes)
printf("%d\\n", *(ptr + 2));  // 30

ptr++;  // Move to next element
printf("%d\\n", *ptr);        // 20

ptr += 2;  // Move 2 elements forward
printf("%d\\n", *ptr);        // 40</code></pre>
<h4>Pointer Subtraction:</h4>
<pre><code>int* p1 = &arr[0];
int* p2 = &arr[4];

int distance = p2 - p1;  // 4 elements apart
printf("Distance: %ld\\n", distance);</code></pre>
<h4>Array Traversal:</h4>
<pre><code>int nums[5] = {1, 2, 3, 4, 5};
int* p = nums;

for (int i = 0; i < 5; i++) {
    printf("%d ", *(p + i));  // or p[i]
}

// Using pointer increment
for (int* ptr = nums; ptr < nums + 5; ptr++) {
    printf("%d ", *ptr);
}</code></pre>`,
        videos: [
            { title: "Pointer Arithmetic - Neso Academy", url: "https://www.youtube.com/watch?v=h-HCtyPqBb8" }
        ]
    },
    "Structures & Unions": {
        content: `<h3>Structures & Unions</h3>
<p>Group related data together in custom types.</p>
<h4>Structures:</h4>
<pre><code>// Define structure
struct Student {
    int id;
    char name[50];
    float gpa;
};

// Create instance
struct Student s1;
s1.id = 101;
strcpy(s1.name, "Alice");
s1.gpa = 3.8;

// Initialize at declaration
struct Student s2 = {102, "Bob", 3.5};

printf("%d: %s (%.2f)\\n", s1.id, s1.name, s1.gpa);</code></pre>
<h4>Typedef for Cleaner Code:</h4>
<pre><code>typedef struct {
    int x;
    int y;
} Point;

Point p1 = {10, 20};  // No 'struct' keyword needed
Point p2 = {30, 40};

printf("Point: (%d, %d)\\n", p1.x, p1.y);</code></pre>
<h4>Unions:</h4>
<pre><code>// Union - all members share same memory
union Data {
    int i;
    float f;
    char str[20];
};

union Data d;
d.i = 10;
printf("%d\\n", d.i);  // 10

d.f = 3.14;  // Overwrites i
printf("%.2f\\n", d.f);  // 3.14
printf("%d\\n", d.i);    // Garbage (overwritten)

printf("Size: %lu\\n", sizeof(d));  // Size of largest member</code></pre>
<h4>Nested Structures:</h4>
<pre><code>struct Address {
    char city[30];
    int zip;
};

struct Person {
    char name[50];
    int age;
    struct Address addr;
};

struct Person p1 = {"John", 25, {"NYC", 10001}};
printf("%s lives in %s\\n", p1.name, p1.addr.city);</code></pre>`,
        videos: [
            { title: "C Structures - Bro Code", url: "https://www.youtube.com/watch?v=SAae7u8GrRw" }
        ]
    },
    "File Handling": {
        content: `<h3>File I/O Operations</h3>
<p>Read from and write to files.</p>
<h4>Writing to Files:</h4>
<pre><code>#include <stdio.h>

FILE* file = fopen("output.txt", "w");  // Write mode
if (file == NULL) {
    printf("Error opening file!\\n");
    return 1;
}

fprintf(file, "Hello, File!\\n");
fprintf(file, "Number: %d\\n", 42);

fclose(file);  // Always close files</code></pre>
<h4>Reading from Files:</h4>
<pre><code>FILE* file = fopen("input.txt", "r");  // Read mode
if (file == NULL) {
    perror("Error");
    return 1;
}

char buffer[100];
while (fgets(buffer, sizeof(buffer), file) != NULL) {
    printf("%s", buffer);
}

fclose(file);

// Reading formatted data
FILE* f = fopen("data.txt", "r");
int num;
char name[50];
fscanf(f, "%d %s", &num, name);
fclose(f);</code></pre>
<h4>File Modes:</h4>
<ul>
<li>"r" - Read (file must exist)</li>
<li>"w" - Write (creates/truncates file)</li>
<li>"a" - Append (creates if not exists)</li>
<li>"r+" - Read/Write</li>
<li>"w+" - Write/Read (truncates)</li>
<li>"a+" - Append/Read</li>
</ul>
<h4>Binary Files:</h4>
<pre><code>// Write binary
FILE* bf = fopen("data.bin", "wb");
int data[] = {1, 2, 3, 4, 5};
fwrite(data, sizeof(int), 5, bf);
fclose(bf);

// Read binary
bf = fopen("data.bin", "rb");
int buffer[5];
fread(buffer, sizeof(int), 5, bf);
fclose(bf);</code></pre>`,
        videos: [
            { title: "C File Handling - CodeBeauty", url: "https://www.youtube.com/watch?v=p4rNbO9T0jE" }
        ]
    },
    "Dynamic Memory Allocation": {
        content: `<h3>Dynamic Memory with malloc, calloc, realloc, free</h3>
<p>Allocate memory at runtime on the heap.</p>
<h4>malloc - Allocate Memory:</h4>
<pre><code>#include <stdlib.h>

// Allocate single integer
int* ptr = (int*)malloc(sizeof(int));
if (ptr == NULL) {
    printf("Memory allocation failed!\\n");
    return 1;
}
*ptr = 42;
printf("%d\\n", *ptr);
free(ptr);  // Always free!

// Allocate array
int n = 10;
int* arr = (int*)malloc(n * sizeof(int));
for (int i = 0; i < n; i++) {
    arr[i] = i * i;
}
free(arr);</code></pre>
<h4>calloc - Zero-initialized Allocation:</h4>
<pre><code>// Allocate and initialize to 0
int* data = (int*)calloc(5, sizeof(int));
for (int i = 0; i < 5; i++) {
    printf("%d ", data[i]);  // 0 0 0 0 0
}
free(data);</code></pre>
<h4>realloc - Resize Memory:</h4>
<pre><code>int* arr = (int*)malloc(5 * sizeof(int));
// ... use arr ...

// Need more space
arr = (int*)realloc(arr, 10 * sizeof(int));
if (arr == NULL) {
    printf("Reallocation failed!\\n");
}
// Now arr has space for 10 integers
free(arr);</code></pre>
<h4>Memory Leaks & Best Practices:</h4>
<pre><code>// BAD: Memory leak
void bad() {
    int* p = (int*)malloc(100 * sizeof(int));
    // ... no free() ...
}  // Memory leaked!

// GOOD: Proper cleanup
void good() {
    int* p = (int*)malloc(100 * sizeof(int));
    if (p == NULL) return;
    // ... use p ...
    free(p);
    p = NULL;  // Prevent dangling pointer
}</code></pre>`,
        videos: [
            { title: "Dynamic Memory - Neso Academy", url: "https://www.youtube.com/watch?v=lQP4X3odvHE" }
        ]
    },
    "Storage Classes": {
        content: `<h3>Storage Classes in C</h3>
<p>Control variable lifetime and visibility.</p>
<h4>Auto (Default for Local Variables):</h4>
<pre><code>void function() {
    auto int x = 10;  // 'auto' is default, rarely used
    int y = 20;       // Same as auto
    // x and y destroyed when function exits
}</code></pre>
<h4>Static (Persistent Local Variables):</h4>
<pre><code>void counter() {
    static int count = 0;  // Initialized once
    count++;
    printf("%d\\n", count);
}

counter();  // 1
counter();  // 2
counter();  // 3
// count persists between calls

// Static global (file scope only)
static int file_private = 100;  // Only visible in this file</code></pre>
<h4>Extern (External Linkage):</h4>
<pre><code>// file1.c
int global_var = 50;  // Definition

void set_global(int val) {
    global_var = val;
}

// file2.c
extern int global_var;  // Declaration (refers to file1.c)

void print_global() {
    printf("%d\\n", global_var);
}</code></pre>
<h4>Register (Request Fast Access):</h4>
<pre><code>void fast_loop() {
    register int i;  // Suggest storing in CPU register
    for (i = 0; i < 1000000; i++) {
        // Fast iteration
    }
    // Cannot take address: &i is invalid
}</code></pre>
<h4>Summary Table:</h4>
<ul>
<li><strong>auto</strong> - Local, automatic lifetime, block scope</li>
<li><strong>static</strong> - Local/Global, permanent lifetime, limited scope</li>
<li><strong>extern</strong> - Global, permanent, external linkage</li>
<li><strong>register</strong> - Local, fast access, no address</li>
</ul>`,
        videos: [
            { title: "Storage Classes - Neso Academy", url: "https://www.youtube.com/watch?v=aX-ScNOqkh0" }
        ]
    },
    "Preprocessors": {
        content: `<h3>C Preprocessor Directives</h3>
<p>Compile-time text processing before compilation.</p>
<h4>#define - Macros:</h4>
<pre><code>// Object-like macros
#define PI 3.14159
#define MAX 100
#define MESSAGE "Hello, World!"

double area = PI * r * r;

// Function-like macros
#define SQUARE(x) ((x) * (x))
#define MAX(a, b) ((a) > (b) ? (a) : (b))

int val = SQUARE(5);      // Expands to ((5) * (5))
int max_val = MAX(10, 20);  // 20</code></pre>
<h4>#include - File Inclusion:</h4>
<pre><code>// Standard library headers
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// User-defined headers
#include "myheader.h"
#include "utils/helper.h"</code></pre>
<h4>Conditional Compilation:</h4>
<pre><code>#define DEBUG 1

#ifdef DEBUG
    printf("Debug mode enabled\\n");
#endif

#ifndef RELEASE
    printf("Not in release mode\\n");
#endif

#if DEBUG == 1
    printf("Debugging level 1\\n");
#elif DEBUG == 2
    printf("Debugging level 2\\n");
#else
    printf("No debugging\\n");
#endif</code></pre>
<h4>#undef - Undefine Macro:</h4>
<pre><code>#define TEMP 100
printf("%d\\n", TEMP);  // 100

#undef TEMP
// TEMP no longer defined</code></pre>
<h4>Predefined Macros:</h4>
<pre><code>printf("File: %s\\n", __FILE__);     // Current filename
printf("Line: %d\\n", __LINE__);     // Current line number
printf("Date: %s\\n", __DATE__);     // Compilation date
printf("Time: %s\\n", __TIME__);     // Compilation time</code></pre>`,
        videos: [
            { title: "C Preprocessor - Bro Code", url: "https://www.youtube.com/watch?v=X6HiYbY3Uqc" }
        ]
    },
    "Command Line Arguments": {
        content: `<h3>Command Line Arguments</h3>
<p>Pass data to programs at runtime via terminal.</p>
<h4>argc and argv:</h4>
<pre><code>// main.c
#include <stdio.h>

int main(int argc, char* argv[]) {
    // argc = argument count (including program name)
    // argv = argument vector (array of strings)
    
    printf("Number of arguments: %d\\n", argc);
    
    for (int i = 0; i < argc; i++) {
        printf("argv[%d]: %s\\n", i, argv[i]);
    }
    
    return 0;
}

// Run: ./program arg1 arg2 arg3
// Output:
// Number of arguments: 4
// argv[0]: ./program
// argv[1]: arg1
// argv[2]: arg2
// argv[3]: arg3</code></pre>
<h4>Processing Arguments:</h4>
<pre><code>#include <stdlib.h>

int main(int argc, char* argv[]) {
    if (argc != 3) {
        printf("Usage: %s <num1> <num2>\\n", argv[0]);
        return 1;
    }
    
    int num1 = atoi(argv[1]);  // Convert string to int
    int num2 = atoi(argv[2]);
    
    printf("Sum: %d\\n", num1 + num2);
    return 0;
}

// Run: ./program 10 20
// Output: Sum: 30</code></pre>
<h4>Real-World Example - File Copy:</h4>
<pre><code>int main(int argc, char* argv[]) {
    if (argc != 3) {
        fprintf(stderr, "Usage: %s <source> <dest>\\n", argv[0]);
        return 1;
    }
    
    FILE* src = fopen(argv[1], "r");
    FILE* dst = fopen(argv[2], "w");
    
    if (!src || !dst) {
        perror("File error");
        return 1;
    }
    
    char ch;
    while ((ch = fgetc(src)) != EOF) {
        fputc(ch, dst);
    }
    
    fclose(src);
    fclose(dst);
    printf("File copied successfully!\\n");
    return 0;
}</code></pre>`,
        videos: [
            { title: "Command Line Arguments - Neso Academy", url: "https://www.youtube.com/watch?v=aw7yDnHW8rM" }
        ]
    },
    "Modular Programming": {
        content: `<h3>Modular Programming with Headers</h3>
<p>Organize code into reusable modules.</p>
<h4>Header File (.h):</h4>
<pre><code>// math_utils.h
#ifndef MATH_UTILS_H  // Header guard
#define MATH_UTILS_H

// Function declarations
int add(int a, int b);
int multiply(int a, int b);
double power(double base, int exp);

// Constants
#define PI 3.14159

#endif  // MATH_UTILS_H</code></pre>
<h4>Implementation File (.c):</h4>
<pre><code>// math_utils.c
#include "math_utils.h"

int add(int a, int b) {
    return a + b;
}

int multiply(int a, int b) {
    return a * b;
}

double power(double base, int exp) {
    double result = 1.0;
    for (int i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}</code></pre>
<h4>Main Program:</h4>
<pre><code>// main.c
#include <stdio.h>
#include "math_utils.h"

int main() {
    printf("5 + 3 = %d\\n", add(5, 3));
    printf("4 * 7 = %d\\n", multiply(4, 7));
    printf("2^8 = %.0f\\n", power(2, 8));
    printf("PI = %.5f\\n", PI);
    return 0;
}</code></pre>
<h4>Compilation:</h4>
<pre><code># Compile separately
gcc -c math_utils.c  # Creates math_utils.o
gcc -c main.c        # Creates main.o

# Link together
gcc main.o math_utils.o -o program

# Or compile all at once
gcc main.c math_utils.c -o program</code></pre>`,
        videos: [
            { title: "C Modular Programming - CodeBeauty", url: "https://www.youtube.com/watch?v=u2mxF8PU08Q" }
        ]
    },
    "Debugging": {
        content: `<h3>Debugging C Programs</h3>
<p>Tools and techniques to find and fix bugs.</p>
<h4>GDB (GNU Debugger):</h4>
<pre><code># Compile with debug symbols
gcc -g program.c -o program

# Start debugger
gdb ./program

# Common GDB commands:
(gdb) break main        # Set breakpoint at main
(gdb) break 15          # Breakpoint at line 15
(gdb) run               # Start program
(gdb) next              # Execute next line (step over)
(gdb) step              # Step into function
(gdb) print var         # Print variable value
(gdb) continue          # Continue execution
(gdb) quit              # Exit debugger</code></pre>
<h4>Printf Debugging:</h4>
<pre><code>#include <stdio.h>

void process(int* arr, int size) {
    printf("[DEBUG] Entering process(), size=%d\\n", size);
    
    for (int i = 0; i < size; i++) {
        printf("[DEBUG] arr[%d] = %d\\n", i, arr[i]);
        arr[i] *= 2;
    }
    
    printf("[DEBUG] Exiting process()\\n");
}</code></pre>
<h4>Assert Statements:</h4>
<pre><code>#include <assert.h>

void divide(int a, int b) {
    assert(b != 0);  // Program terminates if false
    printf("%d / %d = %d\\n", a, b, a / b);
}

// Disable assertions in release
#define NDEBUG
#include <assert.h></code></pre>
<h4>Valgrind (Memory Checker):</h4>
<pre><code># Check for memory leaks
valgrind --leak-check=full ./program

# Example output:
# ERROR: 40 bytes in 1 blocks are definitely lost
# Memory leak detected!</code></pre>`,
        videos: [
            { title: "C Debugging with GDB - CodeVault", url: "https://www.youtube.com/watch?v=bWH-nL7v5F4" }
        ]
    },
    "Error Handling": {
        content: `<h3>Error Handling in C</h3>
<p>Detect and handle runtime errors gracefully.</p>
<h4>Return Codes:</h4>
<pre><code>#include <stdio.h>

int divide(int a, int b, int* result) {
    if (b == 0) {
        return -1;  // Error code
    }
    *result = a / b;
    return 0;  // Success
}

int main() {
    int result;
    if (divide(10, 0, &result) == -1) {
        printf("Error: Division by zero!\\n");
        return 1;
    }
    printf("Result: %d\\n", result);
    return 0;
}</code></pre>
<h4>errno - Global Error Variable:</h4>
<pre><code>#include <errno.h>
#include <string.h>

FILE* file = fopen("nonexistent.txt", "r");
if (file == NULL) {
    printf("Error code: %d\\n", errno);
    printf("Error: %s\\n", strerror(errno));
    // Output: Error: No such file or directory
}

// perror - print error with custom message
perror("File opening failed");
// Output: File opening failed: No such file or directory</code></pre>
<h4>Custom Error Handling:</h4>
<pre><code>typedef enum {
    SUCCESS = 0,
    ERROR_NULL_POINTER,
    ERROR_INVALID_INPUT,
    ERROR_OUT_OF_MEMORY,
    ERROR_FILE_NOT_FOUND
} ErrorCode;

const char* get_error_message(ErrorCode code) {
    switch (code) {
        case SUCCESS: return "Success";
        case ERROR_NULL_POINTER: return "Null pointer error";
        case ERROR_INVALID_INPUT: return "Invalid input";
        case ERROR_OUT_OF_MEMORY: return "Out of memory";
        case ERROR_FILE_NOT_FOUND: return "File not found";
        default: return "Unknown error";
    }
}

ErrorCode allocate_array(int** arr, int size) {
    if (size <= 0) return ERROR_INVALID_INPUT;
    
    *arr = (int*)malloc(size * sizeof(int));
    if (*arr == NULL) return ERROR_OUT_OF_MEMORY;
    
    return SUCCESS;
}</code></pre>`,
        videos: [
            { title: "C Error Handling - Neso Academy", url: "https://www.youtube.com/watch?v=3JbrZ4_mHHA" }
        ]
    }
};

const C_ADVANCED_CONTENT = {
    "Memory Management Internals": {
        content: `<h3>Memory Layout & Management Internals</h3>
<p><strong>Expert Level:</strong> Understanding how C programs use memory.</p>
<h4>Memory Segments:</h4>
<pre><code>// Process Memory Layout:
// +------------------+  High Address
// |  Command Line    |
// |  & Environment   |
// +------------------+
// |      Stack       |  (grows downward)
// |        ↓         |
// +------------------+
// |                  |
// |   Unused/Heap    |
// |        ↑         |
// +------------------+
// |      Heap        |  (grows upward)
// +------------------+
// |  Uninitialized   |  BSS segment
// |     Data         |
// +------------------+
// |   Initialized    |  Data segment
// |      Data        |
// +------------------+
// |   Text/Code      |  Read-only
// +------------------+  Low Address

int global_init = 42;        // Data segment
int global_uninit;           // BSS segment
static int static_var = 10;  // Data segment

void func() {
    int local = 5;           // Stack
    static int persist = 0;  // Data segment
    int* heap = malloc(100); // Heap
    free(heap);
}</code></pre>
<h4>Memory Alignment:</h4>
<pre><code>struct Example {
    char a;    // 1 byte
    // 3 bytes padding
    int b;     // 4 bytes
    char c;    // 1 byte
    // 3 bytes padding
};

printf("Size: %lu\\n", sizeof(struct Example));  // 12 (not 6!)

// Use __attribute__((packed)) to remove padding
struct __attribute__((packed)) Packed {
    char a;
    int b;
    char c;
};  // Size: 6</code></pre>`,
        videos: [
            { title: "C Memory Layout - Jacob Sorber", url: "https://www.youtube.com/watch?v=VnnrDe3z8rQ" }
        ]
    },
    "Advanced Pointers": {
        content: `<h3>Advanced Pointer Concepts</h3>
<p>Function pointers, void pointers, and pointer-to-pointer.</p>
<h4>Function Pointers:</h4>
<pre><code>// Function prototype
int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }

// Function pointer
int (*operation)(int, int);

operation = add;
printf("%d\\n", operation(5, 3));  // 8

operation = subtract;
printf("%d\\n", operation(5, 3));  // 2

// Callback function
void apply(int x, int y, int (*func)(int, int)) {
    printf("Result: %d\\n", func(x, y));
}

apply(10, 5, add);       // Result: 15
apply(10, 5, subtract);  // Result: 5</code></pre>
<h4>Void Pointers (Generic):</h4>
<pre><code>void* ptr;  // Can point to any type

int x = 10;
ptr = &x;
printf("%d\\n", *(int*)ptr);  // Cast before dereferencing

float f = 3.14;
ptr = &f;
printf("%.2f\\n", *(float*)ptr);</code></pre>
<h4>Pointer to Pointer:</h4>
<pre><code>int x = 10;
int* p = &x;
int** pp = &p;  // Pointer to pointer

printf("%d\\n", **pp);  // 10

// Modify through double pointer
**pp = 20;
printf("%d\\n", x);  // 20

// 2D arrays
int** matrix = (int**)malloc(3 * sizeof(int*));
for (int i = 0; i < 3; i++) {
    matrix[i] = (int*)malloc(3 * sizeof(int));
}
matrix[0][0] = 1;
// ... free memory ...</code></pre>`,
        videos: [
            { title: "Advanced Pointers - Jacob Sorber", url: "https://www.youtube.com/watch?v=XISnO2YhnsY" }
        ]
    },
    "Data Structures": {
        content: `<h3>Data Structures in C</h3>
<p>Implement fundamental data structures.</p>
<h4>Linked List:</h4>
<pre><code>typedef struct Node {
    int data;
    struct Node* next;
} Node;

Node* create_node(int value) {
    Node* new_node = (Node*)malloc(sizeof(Node));
    new_node->data = value;
    new_node->next = NULL;
    return new_node;
}

void insert_front(Node** head, int value) {
    Node* new_node = create_node(value);
    new_node->next = *head;
    *head = new_node;
}

void print_list(Node* head) {
    while (head != NULL) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\\n");
}</code></pre>
<h4>Stack (Array-based):</h4>
<pre><code>#define MAX 100

typedef struct {
    int arr[MAX];
    int top;
} Stack;

void init(Stack* s) { s->top = -1; }

int is_empty(Stack* s) { return s->top == -1; }

void push(Stack* s, int value) {
    if (s->top < MAX - 1) {
        s->arr[++s->top] = value;
    }
}

int pop(Stack* s) {
    if (!is_empty(s)) {
        return s->arr[s->top--];
    }
    return -1;
}</code></pre>
<h4>Binary Tree:</h4>
<pre><code>typedef struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
} TreeNode;

TreeNode* create_tree_node(int value) {
    TreeNode* node = (TreeNode*)malloc(sizeof(TreeNode));
    node->data = value;
    node->left = node->right = NULL;
    return node;
}

void inorder(TreeNode* root) {
    if (root == NULL) return;
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}</code></pre>`,
        videos: [
            { title: "C Data Structures - mycodeschool", url: "https://www.youtube.com/watch?v=92S4zgXN17o" }
        ]
    },
    "Algorithms in C": {
        content: `<h3>Algorithms Implementation in C</h3>
<p>Classic algorithms for searching and sorting.</p>
<h4>Binary Search:</h4>
<pre><code>int binary_search(int arr[], int size, int target) {
    int left = 0, right = size - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;  // Not found
}</code></pre>
<h4>Quick Sort:</h4>
<pre><code>int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

void quick_sort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
}</code></pre>
<h4>DFS (Graph Traversal):</h4>
<pre><code>#define MAX_NODES 100

void dfs(int graph[MAX_NODES][MAX_NODES], int visited[], int node, int n) {
    visited[node] = 1;
    printf("%d ", node);
    
    for (int i = 0; i < n; i++) {
        if (graph[node][i] && !visited[i]) {
            dfs(graph, visited, i, n);
        }
    }
}</code></pre>`,
        videos: [
            { title: "C Algorithms - Abdul Bari", url: "https://www.youtube.com/watch?v=0IAPZzGSbME" }
        ]
    },
    "Low-level Programming": {
        content: `<h3>Low-Level Programming & Bit Manipulation</h3>
<p>Direct hardware manipulation and bitwise operations.</p>
<h4>Bit Manipulation:</h4>
<pre><code>// Set bit at position n
int set_bit(int num, int n) {
    return num | (1 << n);
}

// Clear bit at position n
int clear_bit(int num, int n) {
    return num & ~(1 << n);
}

// Toggle bit at position n
int toggle_bit(int num, int n) {
    return num ^ (1 << n);
}

// Check if bit is set
int is_bit_set(int num, int n) {
    return (num & (1 << n)) != 0;
}

// Count set bits
int count_bits(int num) {
    int count = 0;
    while (num) {
        count += num & 1;
        num >>= 1;
    }
    return count;
}</code></pre>
<h4>Bit Fields:</h4>
<pre><code>struct Flags {
    unsigned int read : 1;     // 1 bit
    unsigned int write : 1;    // 1 bit
    unsigned int execute : 1;  // 1 bit
    unsigned int reserved : 5; // 5 bits
};

struct Flags f = {1, 0, 1, 0};  // rwx = 101
printf("Size: %lu bytes\\n", sizeof(f));  // 1 byte</code></pre>
<h4>Direct Memory Access:</h4>
<pre><code>// Read/write to specific memory address
unsigned int* addr = (unsigned int*)0x40000000;
*addr = 0xFF;  // Write to memory-mapped register

unsigned int value = *addr;  // Read from address</code></pre>`,
        videos: [
            { title: "C Bit Manipulation - Jacob Sorber", url: "https://www.youtube.com/watch?v=jlQmeyce65Q" }
        ]
    },
    "Embedded Concepts": {
        content: `<h3>Embedded Systems Programming</h3>
<p>C for microcontrollers and embedded devices.</p>
<h4>Volatile Keyword:</h4>
<pre><code>// Hardware register that can change unexpectedly
volatile unsigned int* PORT = (unsigned int*)0x40000000;

// Compiler won't optimize away this read
while (*PORT & 0x01) {
    // Wait for bit to clear
}

// Without volatile, compiler might optimize to infinite loop!</code></pre>
<h4>Interrupt Service Routine (ISR):</h4>
<pre><code>// Flag modified by interrupt
volatile int flag = 0;

void __attribute__((interrupt)) timer_isr() {
    flag = 1;  // Set flag
    // Clear interrupt flag in hardware
}

int main() {
    // Enable interrupts
    while (1) {
        if (flag) {
            printf("Interrupt occurred!\\n");
            flag = 0;
        }
    }
}</code></pre>
<h4>Memory-Mapped I/O:</h4>
<pre><code>#define GPIO_BASE   0x40020000
#define GPIO_ODR    (*(volatile unsigned int*)(GPIO_BASE + 0x14))
#define GPIO_IDR    (*(volatile unsigned int*)(GPIO_BASE + 0x10))

// Set pin high
GPIO_ODR |= (1 << 5);

// Read input
if (GPIO_IDR & (1 << 3)) {
    // Pin 3 is high
}</code></pre>`,
        videos: [
            { title: "Embedded C - Fastbit Embedded", url: "https://www.youtube.com/watch?v=aV5IbNt414E" }
        ]
    },
    "Performance Optimization": {
        content: `<h3>C Performance Optimization</h3>
<p>Write faster, more efficient C code.</p>
<h4>Compiler Optimizations:</h4>
<pre><code>// Compile with optimization flags
// gcc -O0  (no optimization)
// gcc -O1  (basic optimization)
// gcc -O2  (recommended)
// gcc -O3  (aggressive)
// gcc -Os  (optimize for size)

// Example: Loop unrolling
// Before
for (int i = 0; i < 1000; i++) {
    arr[i] = i * 2;
}

// After (compiler does this with -O2)
for (int i = 0; i < 1000; i += 4) {
    arr[i] = i * 2;
    arr[i+1] = (i+1) * 2;
    arr[i+2] = (i+2) * 2;
    arr[i+3] = (i+3) * 2;
}</code></pre>
<h4>Cache-Friendly Code:</h4>
<pre><code>// BAD: Column-major (cache misses)
for (int col = 0; col < 1000; col++) {
    for (int row = 0; row < 1000; row++) {
        matrix[row][col] = 0;
    }
}

// GOOD: Row-major (cache hits)
for (int row = 0; row < 1000; row++) {
    for (int col = 0; col < 1000; col++) {
        matrix[row][col] = 0;
    }
}</code></pre>
<h4>Avoid Expensive Operations:</h4>
<pre><code>// Prefer bit shifts over division
int divide_by_8 = num >> 3;  // Instead of num / 8
int multiply_by_4 = num << 2; // Instead of num * 4

// Strength reduction
// Replace expensive operations with cheaper ones
for (int i = 0; i < n; i++) {
    result = i * 5;  // Expensive
}

// Better:
int temp = 0;
for (int i = 0; i < n; i++) {
    result = temp;
    temp += 5;
}</code></pre>`,
        videos: [
            { title: "C Optimization - Chandler Carruth", url: "https://www.youtube.com/watch?v=w5Z4JlMJ1VQ" }
        ]
    },
    "Multithreading (POSIX)": {
        content: `<h3>POSIX Threads (pthreads)</h3>
<p>Concurrent programming with threads.</p>
<h4>Creating Threads:</h4>
<pre><code>#include <pthread.h>
#include <stdio.h>

void* thread_func(void* arg) {
    int id = *(int*)arg;
    printf("Thread %d running\\n", id);
    return NULL;
}

int main() {
    pthread_t threads[3];
    int ids[3] = {1, 2, 3};
    
    for (int i = 0; i < 3; i++) {
        pthread_create(&threads[i], NULL, thread_func, &ids[i]);
    }
    
    for (int i = 0; i < 3; i++) {
        pthread_join(threads[i], NULL);  // Wait for threads
    }
    
    return 0;
}

// Compile: gcc -pthread program.c</code></pre>
<h4>Mutex for Synchronization:</h4>
<pre><code>pthread_mutex_t lock;
int shared_counter = 0;

void* increment(void* arg) {
    for (int i = 0; i < 100000; i++) {
        pthread_mutex_lock(&lock);
        shared_counter++;
        pthread_mutex_unlock(&lock);
    }
    return NULL;
}

int main() {
    pthread_mutex_init(&lock, NULL);
    
    pthread_t t1, t2;
    pthread_create(&t1, NULL, increment, NULL);
    pthread_create(&t2, NULL, increment, NULL);
    
    pthread_join(t1, NULL);
    pthread_join(t2, NULL);
    
    printf("Counter: %d\\n", shared_counter);
    pthread_mutex_destroy(&lock);
    return 0;
}</code></pre>`,
        videos: [
            { title: "POSIX Threads - CodeVault", url: "https://www.youtube.com/watch?v=d9s_d28yJq0" }
        ]
    },
    "System Programming": {
        content: `<h3>System Programming & System Calls</h3>
<p>Interact with OS at low level.</p>
<h4>Process Creation (fork):</h4>
<pre><code>#include <unistd.h>
#include <sys/types.h>

int main() {
    pid_t pid = fork();
    
    if (pid < 0) {
        perror("Fork failed");
        return 1;
    } else if (pid == 0) {
        // Child process
        printf("Child PID: %d\\n", getpid());
    } else {
        // Parent process
        printf("Parent PID: %d, Child PID: %d\\n", getpid(), pid);
        wait(NULL);  // Wait for child
    }
    return 0;
}</code></pre>
<h4>File Descriptors & System Calls:</h4>
<pre><code>#include <fcntl.h>
#include <unistd.h>

int main() {
    // Low-level file I/O
    int fd = open("file.txt", O_RDWR | O_CREAT, 0644);
    if (fd < 0) {
        perror("open");
        return 1;
    }
    
    char buffer[100];
    ssize_t bytes_read = read(fd, buffer, sizeof(buffer));
    write(fd, "Hello", 5);
    
    close(fd);
    return 0;
}</code></pre>
<h4>Signals:</h4>
<pre><code>#include <signal.h>

void signal_handler(int signum) {
    printf("Caught signal %d\\n", signum);
    exit(0);
}

int main() {
    signal(SIGINT, signal_handler);  // Ctrl+C
    
    while (1) {
        printf("Running...\\n");
        sleep(1);
    }
    return 0;
}</code></pre>`,
        videos: [
            { title: "System Programming - Jacob Sorber", url: "https://www.youtube.com/watch?v=bQKL1xQdduI" }
        ]
    },
    "C Internals": {
        content: `<h3>C Compiler & Runtime Internals</h3>
<p>Understanding how C works under the hood.</p>
<h4>Compilation Stages:</h4>
<pre><code>// 1. Preprocessing
gcc -E program.c -o program.i
// Expands macros, includes headers

// 2. Compilation
gcc -S program.c -o program.s
// Generates assembly code

// 3. Assembly
gcc -c program.c -o program.o
// Creates object file (machine code)

// 4. Linking
gcc program.o -o program
// Links with libraries, creates executable</code></pre>
<h4>Stack Frame Layout:</h4>
<pre><code>void func(int a, int b) {
    int local = 10;
    // Stack frame:
    // +------------------+
    // | Return Address   |
    // +------------------+
    // | Saved Base Ptr   |
    // +------------------+
    // | local (4 bytes)  |
    // +------------------+
    // | b (4 bytes)      |
    // +------------------+
    // | a (4 bytes)      |
    // +------------------+
}</code></pre>
<h4>Calling Conventions:</h4>
<pre><code>// cdecl (default): caller cleans stack
int __attribute__((cdecl)) func(int x);

// stdcall: callee cleans stack
int __attribute__((stdcall)) func(int x);

// fastcall: use registers for arguments
int __attribute__((fastcall)) func(int x);</code></pre>
<h4>Runtime Environment:</h4>
<pre><code>// Entry point before main()
void _start() {
    // C runtime initialization
    // - Setup stack
    // - Initialize global variables
    // - Call constructors
    int result = main(argc, argv);
    exit(result);
}</code></pre>`,
        videos: [
            { title: "C Internals - Low Level Learning", url: "https://www.youtube.com/watch?v=Ps8jOj7diA0" }
        ]
    }
};

export const LANGUAGES = [
    { id: 'python', name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', forbidden: NATIVE_SYNTAX.python.forbidden, description: 'Interpreted, high-level, general-purpose language.' },
    { id: 'javascript', name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E', forbidden: NATIVE_SYNTAX.javascript.forbidden, description: 'High-level, multi-paradigm language.' },
    { id: 'java', name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#007396', forbidden: NATIVE_SYNTAX.java.forbidden, description: 'Class-based, object-oriented language.' },
    { id: 'cpp', name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', color: '#00599C', forbidden: NATIVE_SYNTAX.cpp.forbidden, description: 'Low-level memory manipulation features.' },
    { id: 'c', name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', color: '#A8B9CC', forbidden: NATIVE_SYNTAX.c.forbidden, description: 'Procedural computer programming language.' },
    { id: 'csharp', name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', color: '#239120', forbidden: NATIVE_SYNTAX.csharp.forbidden, description: '.NET framework and object-oriented programming language.' },
    { id: 'sql', name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#336791', forbidden: NATIVE_SYNTAX.sql.forbidden, description: 'Domain-specific language for managing data.' },
    { id: 'go', name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', color: '#00ADD8', forbidden: NATIVE_SYNTAX.go.forbidden, description: 'Statically typed, compiled language from Google.' },
    { id: 'rust', name: 'Rust', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg', color: '#CE422B', forbidden: NATIVE_SYNTAX.rust.forbidden, description: 'Focused on safety and performance.' },
    { id: 'php', name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', color: '#777BB4', forbidden: NATIVE_SYNTAX.php.forbidden, description: 'Server-side scripting language.' },
    { id: 'swift', name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', color: '#FA7343', forbidden: NATIVE_SYNTAX.swift.forbidden, description: 'Powerful iOS development language.' },
    { id: 'kotlin', name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', color: '#7F52FF', forbidden: NATIVE_SYNTAX.kotlin.forbidden, description: 'Modern Android development language.' },
    { id: 'ruby', name: 'Ruby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg', color: '#CC342D', forbidden: NATIVE_SYNTAX.ruby.forbidden, description: 'Dynamic, open-source programming language.' },
    { id: 'dart', name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', color: '#0175C2', forbidden: NATIVE_SYNTAX.dart.forbidden, description: 'Client-optimized for fast apps.' },
];

export const LEVELS = [
    { id: 'beginner', name: 'Beginner', description: 'Fundamentals & Foundations' },
    { id: 'intermediate', name: 'Intermediate', description: 'Applied Concepts' },
    { id: 'advanced', name: 'Advanced', description: 'Expert-level Architecture' },
];

const generateUniqueContent = (langId, level, index, title) => {
    const lang = LANGUAGES.find(l => l.id === langId) || LANGUAGES[0];
    const syntax = NATIVE_SYNTAX[langId] || NATIVE_SYNTAX.python;
    const example = TOPIC_TEMPLATES[title]?.[langId] || syntax.print;
    const enhanced = (langId === 'python' && level === 'beginner' && PYTHON_BEGINNER_CONTENT[title])
        || (langId === 'python' && level === 'intermediate' && PYTHON_INTERMEDIATE_CONTENT[title])
        || (langId === 'python' && level === 'advanced' && PYTHON_ADVANCED_CONTENT[title])
        || (langId === 'javascript' && level === 'beginner' && JS_BEGINNER_CONTENT[title])
        || (langId === 'javascript' && level === 'intermediate' && JS_INTERMEDIATE_CONTENT[title])
        || (langId === 'javascript' && level === 'advanced' && JS_ADVANCED_CONTENT[title])
        || (langId === 'sql' && level === 'beginner' && SQL_BEGINNER_CONTENT[title])
        || (langId === 'sql' && level === 'intermediate' && SQL_INTERMEDIATE_CONTENT[title])
        || (langId === 'sql' && level === 'advanced' && SQL_ADVANCED_CONTENT[title])
        || (langId === 'java' && level === 'beginner' && JAVA_BEGINNER_CONTENT[title])
        || (langId === 'java' && level === 'intermediate' && JAVA_INTERMEDIATE_CONTENT[title])
        || (langId === 'java' && level === 'advanced' && JAVA_ADVANCED_CONTENT[title])
        || (langId === 'cpp' && level === 'beginner' && CPP_BEGINNER_CONTENT[title])
        || (langId === 'cpp' && level === 'intermediate' && CPP_INTERMEDIATE_CONTENT[title])
        || (langId === 'cpp' && level === 'advanced' && CPP_ADVANCED_CONTENT[title])
        || (langId === 'c' && level === 'beginner' && C_BEGINNER_CONTENT[title])
        || (langId === 'c' && level === 'intermediate' && C_INTERMEDIATE_CONTENT[title])
        || (langId === 'c' && level === 'advanced' && C_ADVANCED_CONTENT[title])
        || (langId === 'csharp' && level === 'beginner' && CSHARP_BEGINNER_CONTENT[title])
        || (langId === 'csharp' && level === 'intermediate' && CSHARP_INTERMEDIATE_CONTENT[title])
        || (langId === 'csharp' && level === 'advanced' && CSHARP_ADVANCED_CONTENT[title])
        || (langId === 'go' && level === 'beginner' && GO_BEGINNER_CONTENT[title])
        || (langId === 'go' && level === 'intermediate' && GO_INTERMEDIATE_CONTENT[title])
        || (langId === 'go' && level === 'advanced' && GO_ADVANCED_CONTENT[title]);

    return {
        id: `${langId}-${level}-${index}`,
        title: `${lang.name} ${title}`,
        level: level,
        type: 'coding',
        content: enhanced ? enhanced.content : `
            <h3>${lang.name}: ${title}</h3>
            <p>Master ${title} in ${lang.name} using native patterns.</p>
            <h4>Example:</h4>
            <pre><code>${example}</code></pre>
        `,
        questions: enhanced?.questions || Array.from({ length: 5 }, (_, i) => ({
            id: i + 1,
            prompt: `[${lang.name}] Solve ${title} exercise ${i + 1}`,
            template: "",
            solution: syntax.solution
        })),
        videos: enhanced?.videos || []
    };
};

export const getCurriculum = (langId) => {
    const categories = ['beginner', 'intermediate', 'advanced'];
    const baseTitles = ["Setup", "Variables", "Control", "Loops", "Collections", "Functions", "Errors", "Files", "Concurrency", "Final"];

    let curriculum = [];
    
    const pythonBeginnerTitles = [
        "Python Introduction & Installation",
        "Python Syntax & Indentation",
        "Variables & Data Types",
        "Input / Output Operations",
        "Operators & Expressions",
        "Conditional Statements (if, elif, else)",
        "Loops (for, while)",
        "Functions – Basics",
        "Lists, Tuples & Sets",
        "Dictionaries & Simple Programs"
    ];
    const pythonIntermediateTitles = [
        "Advanced Functions (args, kwargs, lambda)",
        "String Manipulation & Formatting",
        "File Handling (read/write/update)",
        "Error Handling (try, except, finally)",
        "Modules & Packages",
        "List / Dict Comprehensions",
        "Object-Oriented Programming (OOP Basics)",
        "Classes & Objects",
        "Virtual Environments & pip",
        "Mini Project (CLI based)"
    ];
    const pythonAdvancedTitles = [
        "Advanced OOP (Inheritance, Polymorphism)",
        "Decorators & Generators",
        "Iterators & Context Managers",
        "Multithreading & Multiprocessing",
        "Async Programming (async / await)",
        "Memory Management & Performance",
        "Working with APIs (REST, JSON)",
        "Database Connectivity (SQL + ORM)",
        "Testing & Debugging (pytest, logging)",
        "Final Capstone Project"
    ];
    
    const sqlBeginnerTitles = [
        "Introduction to Databases & SQL",
        "SQL Data Types",
        "Creating Tables (DDL Basics)",
        "INSERT, UPDATE, DELETE",
        "SELECT Statements",
        "WHERE Clause & Conditions",
        "Sorting Data (ORDER BY)",
        "Aggregate Functions",
        "Constraints (PRIMARY KEY, FOREIGN KEY, UNIQUE)",
        "Basic Functions (String, Numeric, Date)"
    ];
    const sqlIntermediateTitles = [
        "Joins (INNER, LEFT, RIGHT, FULL)",
        "Subqueries",
        "GROUP BY & HAVING",
        "Views",
        "Indexes",
        "Stored Procedures",
        "User-Defined Functions",
        "Transactions (COMMIT, ROLLBACK, SAVEPOINT)",
        "CASE Statements",
        "Database Normalization"
    ];
    const sqlAdvancedTitles = [
        "Window Functions",
        "Common Table Expressions (CTE)",
        "Query Optimization & Execution Plans",
        "Advanced Indexing Strategies",
        "Triggers",
        "Database Security & Roles",
        "Partitioning",
        "High-Availability & Replication",
        "Performance Tuning",
        "SQL for Large-Scale Data Systems"
    ];
    
    const jsBeginnerTitles = [
        "Introduction to JavaScript",
        "JavaScript Setup & Environment",
        "Variables (var, let, const)",
        "Data Types",
        "Operators",
        "Conditional Statements",
        "Loops",
        "Functions",
        "Arrays",
        "Objects (Basics)"
    ];
    const jsIntermediateTitles = [
        "Scope & Hoisting",
        "Closures",
        "Higher-Order Functions",
        "Array Methods (map, filter, reduce)",
        "DOM Manipulation",
        "Events & Event Handling",
        "Error Handling",
        "Asynchronous JavaScript (Callbacks, Promises)",
        "ES6+ Features",
        "Modules & Imports"
    ];
    const jsAdvancedTitles = [
        "Async / Await",
        "JavaScript Engine & Execution Context",
        "Event Loop & Concurrency Model",
        "Memory Management & Garbage Collection",
        "Prototypes & Inheritance",
        "Design Patterns in JavaScript",
        "Web APIs & Fetch",
        "Performance Optimization",
        "Security Best Practices",
        "JavaScript Testing & Debugging"
    ];
    
    const javaBeginnerTitles = [
        "Introduction to Java",
        "Java Installation & Setup",
        "Java Program Structure",
        "Variables",
        "Primitive Data Types",
        "Operators",
        "Conditional Statements",
        "Loops",
        "Arrays",
        "Methods"
    ];
    const javaIntermediateTitles = [
        "Introduction to OOPS",
        "Class & Object",
        "Constructors",
        "Inheritance",
        "Polymorphism",
        "Encapsulation",
        "Abstraction",
        "Interfaces",
        "Packages",
        "String Handling"
    ];
    const javaAdvancedTitles = [
        "Exception Handling",
        "Custom Exceptions",
        "Collections Framework",
        "List, Set, Map",
        "File Handling",
        "Multithreading",
        "Synchronization",
        "Streams",
        "Lambda Expressions",
        "JDBC"
    ];
    
    const cppBeginnerTitles = [
        "C++ Setup",
        "Syntax & I/O",
        "Variables & Data Types",
        "Operators",
        "Control Flow",
        "Loops",
        "Functions",
        "Arrays & Strings",
        "Pointers & References",
        "Basic OOP"
    ];
    const cppIntermediateTitles = [
        "Classes & Objects",
        "Constructors & Destructors",
        "Inheritance",
        "Polymorphism",
        "STL Containers",
        "STL Algorithms",
        "Exception Handling",
        "File Handling",
        "Templates Basics",
        "Memory Management"
    ];
    const cppAdvancedTitles = [
        "Advanced Templates",
        "Move Semantics",
        "Smart Pointers",
        "Multithreading",
        "Concurrency",
        "Design Patterns",
        "Performance Optimization",
        "Low-level C++",
        "Modern C++ Features",
        "C++ Internals"
    ];
    
    const cBeginnerTitles = [
        "C Basics & Compilation",
        "Data Types",
        "Variables & Constants",
        "Operators",
        "Control Statements",
        "Loops",
        "Functions",
        "Arrays",
        "Strings",
        "Pointers Basics"
    ];
    const cIntermediateTitles = [
        "Pointer Arithmetic",
        "Structures & Unions",
        "File Handling",
        "Dynamic Memory Allocation",
        "Storage Classes",
        "Preprocessors",
        "Command Line Arguments",
        "Modular Programming",
        "Debugging",
        "Error Handling"
    ];
    const cAdvancedTitles = [
        "Memory Management Internals",
        "Advanced Pointers",
        "Data Structures",
        "Algorithms in C",
        "Low-level Programming",
        "Embedded Concepts",
        "Performance Optimization",
        "Multithreading (POSIX)",
        "System Programming",
        "C Internals"
    ];

    const rustBeginnerTitles = [
        "Introduction to Rust",
        "Rust Installation & Setup",
        "Rust Program Structure",
        "Variables & Mutability",
        "Data Types",
        "Ownership",
        "Borrowing",
        "References",
        "Operators",
        "Control Flow",
        "Loops",
        "Functions",
        "Tuples",
        "Arrays",
        "Strings"
    ];

    const rustIntermediateTitles = [
        "Structs",
        "Enums",
        "Pattern Matching",
        "Methods",
        "Traits",
        "Generics",
        "Error Handling",
        "Option & Result",
        "Lifetimes",
        "Modules & Crates",
        "Collections",
        "File Handling",
        "Testing"
    ];

    const rustAdvancedTitles = [
        "Advanced Lifetimes",
        "Smart Pointers",
        "Concurrency",
        "Async / Await",
        "Unsafe Rust",
        "Memory Management Internals",
        "Performance Optimization",
        "Macros",
        "Procedural Macros",
        "FFI (Foreign Function Interface)",
        "System Programming",
        "Embedded Rust",
        "Rust Compiler Internals"
    ];

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

    categories.forEach(level => {
        const titlesForLevel = (langId === 'python' && level === 'beginner') ? pythonBeginnerTitles
            : (langId === 'python' && level === 'intermediate') ? pythonIntermediateTitles
            : (langId === 'python' && level === 'advanced') ? pythonAdvancedTitles
            : (langId === 'javascript' && level === 'beginner') ? jsBeginnerTitles
            : (langId === 'javascript' && level === 'intermediate') ? jsIntermediateTitles
            : (langId === 'javascript' && level === 'advanced') ? jsAdvancedTitles
            : (langId === 'sql' && level === 'beginner') ? sqlBeginnerTitles
            : (langId === 'sql' && level === 'intermediate') ? sqlIntermediateTitles
            : (langId === 'sql' && level === 'advanced') ? sqlAdvancedTitles
            : (langId === 'java' && level === 'beginner') ? javaBeginnerTitles
            : (langId === 'java' && level === 'intermediate') ? javaIntermediateTitles
            : (langId === 'java' && level === 'advanced') ? javaAdvancedTitles
            : (langId === 'cpp' && level === 'beginner') ? cppBeginnerTitles
            : (langId === 'cpp' && level === 'intermediate') ? cppIntermediateTitles
            : (langId === 'cpp' && level === 'advanced') ? cppAdvancedTitles
            : (langId === 'c' && level === 'beginner') ? cBeginnerTitles
            : (langId === 'c' && level === 'intermediate') ? cIntermediateTitles
            : (langId === 'c' && level === 'advanced') ? cAdvancedTitles
            : (langId === 'csharp' && level === 'beginner') ? csharpBeginnerTitles
            : (langId === 'csharp' && level === 'intermediate') ? csharpIntermediateTitles
            : (langId === 'csharp' && level === 'advanced') ? csharpAdvancedTitles
            : (langId === 'go' && level === 'beginner') ? goBeginnerTitles
            : (langId === 'go' && level === 'intermediate') ? goIntermediateTitles
            : (langId === 'go' && level === 'advanced') ? goAdvancedTitles
            : (langId === 'ruby' && level === 'beginner') ? rubyBeginnerTitles
            : (langId === 'ruby' && level === 'intermediate') ? rubyIntermediateTitles
            : (langId === 'ruby' && level === 'advanced') ? rubyAdvancedTitles
            : (langId === 'rust' && level === 'beginner') ? rustBeginnerTitles
            : (langId === 'rust' && level === 'intermediate') ? rustIntermediateTitles
            : (langId === 'rust' && level === 'advanced') ? rustAdvancedTitles
            : baseTitles;
        titlesForLevel.forEach((title, i) => {
            curriculum.push(generateUniqueContent(langId, level, i, title));
        });
    });
    return curriculum;
};

export const MOCK_PRACTICE_PROBLEMS = [
    {
        id: 1,
        title: "Hello World",
        description: "Output 'Hello, World!' to console",
        difficulty: "Beginner",
        timeLimit: "5 mins",
        points: 100,
        hint: "Use the native print function",
        initialCode: {
            python: "print('Hello, World!')",
            javascript: "console.log('Hello, World!');",
            java: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, World!\");\n  }\n}"
        }
    }
];

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


const GO_BEGINNER_CONTENT = {
    "Introduction to Go": {
        content: `<h3>Introduction to Go</h3><p>Go (Golang) is a statically typed, compiled language designed by Google for simplicity, efficiency, and concurrent programming.</p>`,
        videos: [{ title: "Go Tutorial - Derek Banas", url: "https://www.youtube.com/watch?v=CF9S4QZuV30" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Print "Hello Go"', template: 'package main\\nimport "fmt"\\nfunc main() { fmt.Println(_______) }', solution: '"Hello Go"' },
            { id: 2, type: 'output', prompt: 'Who created Go?', template: '', solution: 'Google' },
            { id: 3, type: 'modify', prompt: 'Use Printf instead', template: 'fmt.Println("hello")', solution: 'fmt.Printf("hello\\n")' },
            { id: 4, type: 'fix', prompt: 'Fix syntax error', template: 'func main(', solution: 'func main() { }' },
            { id: 5, type: 'logic', prompt: 'Is Go compiled or interpreted?', template: '', solution: 'Compiled' }
        ]
    },
    "Go Environment Setup": {
        content: `<h3>Environment Setup</h3><p>Setting up Go development environment with GOROOT, GOPATH, and workspace.</p>`,
        videos: [{ title: "Go Setup - Traversy Media", url: "https://www.youtube.com/watch?v=jtJ0kVhHc8k" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Go installed? Check version', template: 'go _______', solution: 'version' },
            { id: 2, type: 'output', prompt: 'What is GOPATH?', template: '', solution: 'Home directory for Go packages' },
            { id: 3, type: 'modify', prompt: 'Create new module', template: '', solution: 'go mod init module_name' },
            { id: 4, type: 'fix', prompt: 'Fix workspace setup', template: '', solution: 'Set GOPATH environment variable' },
            { id: 5, type: 'logic', prompt: 'What is go.mod?', template: '', solution: 'Module dependency file' }
        ]
    },
    "Go Program Structure": {
        content: `<h3>Program Structure</h3><p>Understanding packages, imports, and main function in Go.</p>`,
        videos: [{ title: "Go Basics - Code Monkey", url: "https://www.youtube.com/watch?v=YXy0TyPLr_s" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Package declaration', template: 'package _______', solution: 'main' },
            { id: 2, type: 'output', prompt: 'Entry point function?', template: '', solution: 'func main()' },
            { id: 3, type: 'modify', prompt: 'Import fmt package', template: 'import (', solution: '"fmt"' },
            { id: 4, type: 'fix', prompt: 'Fix import', template: 'import fmt', solution: 'import "fmt"' },
            { id: 5, type: 'logic', prompt: 'Can main exist in non-main package?', template: '', solution: 'No' }
        ]
    },
    "Variables": {
        content: `<h3>Variables</h3><p>Declaring and using variables with type inference in Go.</p>`,
        videos: [{ title: "Go Variables - Bro Code", url: "https://www.youtube.com/watch?v=pY8X9ZqKP5M" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare string variable', template: 'var name _______ = "John"', solution: 'string' },
            { id: 2, type: 'output', prompt: 'Default value of int?', template: '', solution: '0' },
            { id: 3, type: 'modify', prompt: 'Use short declaration', template: 'var x int = 10', solution: 'x := 10' },
            { id: 4, type: 'fix', prompt: 'Fix declaration', template: 'x := "hello" int', solution: 'x := "hello"' },
            { id: 5, type: 'logic', prompt: 'What does := do?', template: '', solution: 'Declares and infers type' }
        ]
    },
    "Constants": {
        content: `<h3>Constants</h3><p>Declaring immutable constant values in Go.</p>`,
        videos: [{ title: "Go Constants - Traversy", url: "https://www.youtube.com/watch?v=1eaL7BuF-5Y" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare constant', template: 'const PI = _______', solution: '3.14' },
            { id: 2, type: 'output', prompt: 'Can constants change?', template: '', solution: 'No' },
            { id: 3, type: 'modify', prompt: 'Constant with type', template: 'const MAX = 100', solution: 'const MAX int = 100' },
            { id: 4, type: 'fix', prompt: 'Fix const error', template: 'const x = y', solution: 'y must be constant' },
            { id: 5, type: 'logic', prompt: 'Type inference in const?', template: '', solution: 'Yes' }
        ]
    },
    "Data Types": {
        content: `<h3>Data Types</h3><p>Basic data types: int, float, bool, string in Go.</p>`,
        videos: [{ title: "Go Data Types - Code Monkey", url: "https://www.youtube.com/watch?v=t3VZjvC5p-0" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Float64 variable', template: 'var pi _______ = 3.14', solution: 'float64' },
            { id: 2, type: 'output', prompt: 'Difference int vs int64?', template: '', solution: 'Size: 32-bit vs 64-bit' },
            { id: 3, type: 'modify', prompt: 'Use uint instead', template: 'var count int = 5', solution: 'var count uint = 5' },
            { id: 4, type: 'fix', prompt: 'Fix type', template: 'var x = "123"; x + 1', solution: 'Type conversion needed' },
            { id: 5, type: 'logic', prompt: 'Zero value of bool?', template: '', solution: 'false' }
        ]
    },
    "Operators": {
        content: `<h3>Operators</h3><p>Arithmetic, comparison, and logical operators in Go.</p>`,
        videos: [{ title: "Go Operators - Bro Code", url: "https://www.youtube.com/watch?v=gNwTu_VqM7g" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Calculate 10 + 5 * 2', template: 'result := _______', solution: '20' },
            { id: 2, type: 'output', prompt: 'What is 15 % 4?', template: '', solution: '3' },
            { id: 3, type: 'modify', prompt: 'Use += operator', template: 'x = x + 5', solution: 'x += 5' },
            { id: 4, type: 'fix', prompt: 'Fix comparison', template: 'if x = 5', solution: 'if x == 5' },
            { id: 5, type: 'logic', prompt: 'What does && do?', template: '', solution: 'Logical AND' }
        ]
    },
    "Control Statements": {
        content: `<h3>Control Statements</h3><p>If, else, and else if statements in Go.</p>`,
        videos: [{ title: "Go Control Flow - Traversy", url: "https://www.youtube.com/watch?v=9VcMfJ6xNeQ" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'If age > 18', template: 'if age _______ 18 {', solution: '>' },
            { id: 2, type: 'output', prompt: 'Output: if 5 > 3?', template: '', solution: 'Block executes' },
            { id: 3, type: 'modify', prompt: 'Add else clause', template: 'if x > 5 { }', solution: 'else { }' },
            { id: 4, type: 'fix', prompt: 'Fix syntax', template: 'if x > 5 { } else if', solution: 'else if y < 10' },
            { id: 5, type: 'logic', prompt: 'No switch in Go?', template: '', solution: 'Go has switch' }
        ]
    },
    "Loops": {
        content: `<h3>Loops</h3><p>For loops (only loop type in Go) with various forms.</p>`,
        videos: [{ title: "Go Loops - Code Monkey", url: "https://www.youtube.com/watch?v=OhxL_aIqWuo" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'For loop 0 to 9', template: 'for i := 0; i _______ 10; i++ {', solution: '<' },
            { id: 2, type: 'output', prompt: 'Times loop runs?', template: 'for i := 0; i < 3; i++', solution: '3' },
            { id: 3, type: 'modify', prompt: 'While loop', template: 'for i < 10 {', solution: 'Correct - for is while' },
            { id: 4, type: 'fix', prompt: 'Infinite loop?', template: 'for {', solution: 'Correct syntax' },
            { id: 5, type: 'logic', prompt: 'Does Go have while?', template: '', solution: 'No, use for instead' }
        ]
    },
    "Functions": {
        content: `<h3>Functions</h3><p>Declaring and calling functions in Go.</p>`,
        videos: [{ title: "Go Functions - Traversy", url: "https://www.youtube.com/watch?v=Hf1d4u6Y6RM" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Function that returns 10', template: 'func GetNum() _______ { return 10 }', solution: 'int' },
            { id: 2, type: 'output', prompt: 'Return 20?', template: 'func Add(a, b int)', solution: 'return a + b' },
            { id: 3, type: 'modify', prompt: 'Add parameter type', template: 'func Greet(name) { }', solution: 'func Greet(name string) { }' },
            { id: 4, type: 'fix', prompt: 'Fix function', template: 'function Add(a, b int)', solution: 'func Add(a, b int)' },
            { id: 5, type: 'logic', prompt: 'Named return values?', template: '', solution: 'Yes, Go supports it' }
        ]
    },
    "Multiple Return Values": {
        content: `<h3>Multiple Return Values</h3><p>Functions returning multiple values in Go.</p>`,
        videos: [{ title: "Go Multiple Returns - Code Monkey", url: "https://www.youtube.com/watch?v=LrJq4LZlPZc" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Return 2 values', template: 'func GetData() (int, _______) {', solution: 'string' },
            { id: 2, type: 'output', prompt: 'Receive 2 returns?', template: '', solution: 'x, y := GetData()' },
            { id: 3, type: 'modify', prompt: 'Named returns', template: 'func Divide(a, b int)', solution: '(result int, err error)' },
            { id: 4, type: 'fix', prompt: 'Fix return', template: 'return a, b, c', solution: 'Only 2 declared' },
            { id: 5, type: 'logic', prompt: 'Common pattern?', template: '', solution: '(result, error)' }
        ]
    },
    "Packages & Imports": {
        content: `<h3>Packages & Imports</h3><p>Organizing code with packages and importing functionality.</p>`,
        videos: [{ title: "Go Packages - Traversy", url: "https://www.youtube.com/watch?v=HRMjOgCi43w" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Import fmt package', template: 'import "_______"', solution: '"fmt"' },
            { id: 2, type: 'output', prompt: 'What defines public?', template: '', solution: 'Uppercase first letter' },
            { id: 3, type: 'modify', prompt: 'Multiple imports', template: 'import "fmt"\\nimport "math"', solution: 'import (\\n"fmt"\\n"math"\\n)' },
            { id: 4, type: 'fix', prompt: 'Fix alias', template: 'import fmt "fmt"', solution: 'fmt.Println() works' },
            { id: 5, type: 'logic', prompt: 'Package main purpose?', template: '', solution: 'Entry point for executable' }
        ]
    },
    "Arrays": {
        content: `<h3>Arrays</h3><p>Fixed-length arrays in Go.</p>`,
        videos: [{ title: "Go Arrays - Code Monkey", url: "https://www.youtube.com/watch?v=bJ4T3yVd_Bc" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare array of 5 ints', template: 'var arr [_______]int', solution: '5' },
            { id: 2, type: 'output', prompt: 'First element index?', template: '', solution: '0' },
            { id: 3, type: 'modify', prompt: 'Initialize with values', template: 'arr := [5]int{}', solution: 'arr := [5]int{1,2,3,4,5}' },
            { id: 4, type: 'fix', prompt: 'Fix array', template: 'arr[10] = 5 (len=5)', solution: 'Index out of bounds' },
            { id: 5, type: 'logic', prompt: 'Array size fixed?', template: '', solution: 'Yes' }
        ]
    },
    "Slices": {
        content: `<h3>Slices</h3><p>Dynamic-length slices in Go (more flexible than arrays).</p>`,
        videos: [{ title: "Go Slices - Traversy", url: "https://www.youtube.com/watch?v=ht8Zd91z0sE" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare slice', template: 'var nums _______int', solution: '[]' },
            { id: 2, type: 'output', prompt: 'Append to slice?', template: '', solution: 'nums = append(nums, value)' },
            { id: 3, type: 'modify', prompt: 'Make slice with capacity', template: 'nums := []int{}', solution: 'nums := make([]int, 0, 10)' },
            { id: 4, type: 'fix', prompt: 'Fix slice creation', template: 'nums := make([]int)', solution: 'Add len or len,cap' },
            { id: 5, type: 'logic', prompt: 'Slice vs array?', template: '', solution: 'Slice is dynamic, flexible' }
        ]
    },
    "Strings": {
        content: `<h3>Strings</h3><p>String manipulation and operations in Go.</p>`,
        videos: [{ title: "Go Strings - Bro Code", url: "https://www.youtube.com/watch?v=zJVoAz0LhiA" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Concatenate "Hello" + "World"', template: 'result := "Hello" _______ "World"', solution: '+' },
            { id: 2, type: 'output', prompt: 'Length of "Go"?', template: '', solution: '2' },
            { id: 3, type: 'modify', prompt: 'Convert to uppercase', template: 'name := "go"', solution: 'strings.ToUpper(name)' },
            { id: 4, type: 'fix', prompt: 'Fix string', template: 'name = "john; age = 25', solution: 'Missing closing quote' },
            { id: 5, type: 'logic', prompt: 'Rune type for?', template: '', solution: 'Single character' }
        ]
    }
};

const goBeginnerTitles = [
    "Introduction to Go",
    "Go Environment Setup",
    "Go Program Structure",
    "Variables",
    "Constants",
    "Data Types",
    "Operators",
    "Control Statements",
    "Loops",
    "Functions",
    "Multiple Return Values",
    "Packages & Imports",
    "Arrays",
    "Slices",
    "Strings"
];

const GO_INTERMEDIATE_CONTENT = {
    "Structs": {
        content: `<h3>Structs</h3><p>Defining composite data types with fields in Go.</p>`,
        videos: [{ title: "Go Structs - Traversy", url: "https://www.youtube.com/watch?v=GHzj5ftnI-8" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Struct Person with Name', template: 'type Person struct { Name _______ }', solution: 'string' },
            { id: 2, type: 'output', prompt: 'Create Person instance?', template: '', solution: 'p := Person{Name: "John"}' },
            { id: 3, type: 'modify', prompt: 'Add Age field', template: 'type Person struct { Name string }', solution: 'Age int' },
            { id: 4, type: 'fix', prompt: 'Fix struct', template: 'struct Person { }', solution: 'type Person struct { }' },
            { id: 5, type: 'logic', prompt: 'Exported fields?', template: '', solution: 'Capitalize first letter' }
        ]
    },
    "Methods": {
        content: `<h3>Methods</h3><p>Methods on types and receivers in Go.</p>`,
        videos: [{ title: "Go Methods - Code Monkey", url: "https://www.youtube.com/watch?v=pOKJRpwQF2Y" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Method on Person', template: 'func (p Person) GetName() _______', solution: 'string' },
            { id: 2, type: 'output', prompt: 'Call method?', template: '', solution: 'p.GetName()' },
            { id: 3, type: 'modify', prompt: 'Pointer receiver', template: 'func (p Person)', solution: 'func (p *Person)' },
            { id: 4, type: 'fix', prompt: 'Fix method', template: 'func Person.GetName()', solution: 'func (p Person) GetName()' },
            { id: 5, type: 'logic', prompt: 'Receiver types?', template: '', solution: 'Value or pointer' }
        ]
    },
    "Interfaces": {
        content: `<h3>Interfaces</h3><p>Defining contracts with interfaces in Go.</p>`,
        videos: [{ title: "Go Interfaces - Traversy", url: "https://www.youtube.com/watch?v=qJXOtEUohqU" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Interface Reader', template: 'type Reader interface { Read() (_______) }', solution: '[]byte' },
            { id: 2, type: 'output', prompt: 'Implement interface?', template: '', solution: 'Provide all methods' },
            { id: 3, type: 'modify', prompt: 'Multiple methods', template: 'type Reader interface { Read() }', solution: 'Write(), Close()' },
            { id: 4, type: 'fix', prompt: 'Fix interface', template: 'interface Reader { }', solution: 'type Reader interface { }' },
            { id: 5, type: 'logic', prompt: 'Implicit implementation?', template: '', solution: 'Yes, no explicit keyword' }
        ]
    },
    "Pointers": {
        content: `<h3>Pointers</h3><p>Working with pointers and memory addresses in Go.</p>`,
        videos: [{ title: "Go Pointers - Code Monkey", url: "https://www.youtube.com/watch?v=sTFJtxpnUik" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare int pointer', template: 'var ptr _______int', solution: '*' },
            { id: 2, type: 'output', prompt: 'Address of variable?', template: '', solution: '&variable' },
            { id: 3, type: 'modify', prompt: 'Dereference pointer', template: 'value := *ptr', solution: 'Correct' },
            { id: 4, type: 'fix', prompt: 'Fix pointer', template: 'ptr = &x; *ptr = 10', solution: 'Correct' },
            { id: 5, type: 'logic', prompt: 'Nil pointer value?', template: '', solution: 'nil' }
        ]
    },
    "Maps": {
        content: `<h3>Maps</h3><p>Key-value pairs with maps in Go.</p>`,
        videos: [{ title: "Go Maps - Traversy", url: "https://www.youtube.com/watch?v=drQnea_lXAc" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare map', template: 'var m map[string]_______', solution: 'int' },
            { id: 2, type: 'output', prompt: 'Make map?', template: '', solution: 'm := make(map[string]int)' },
            { id: 3, type: 'modify', prompt: 'Check if key exists', template: 'value := m["key"]', solution: 'v, ok := m["key"]' },
            { id: 4, type: 'fix', prompt: 'Fix map usage', template: 'm := map[key]value{}', solution: 'm := map[string]int{}' },
            { id: 5, type: 'logic', prompt: 'Delete from map?', template: '', solution: 'delete(m, key)' }
        ]
    },
    "Error Handling": {
        content: `<h3>Error Handling</h3><p>Handling errors using error type in Go.</p>`,
        videos: [{ title: "Go Error Handling - Code Monkey", url: "https://www.youtube.com/watch?v=4KfAS3zrvX8" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Return error', template: 'return 0, _______', solution: 'err' },
            { id: 2, type: 'output', prompt: 'Check error?', template: '', solution: 'if err != nil' },
            { id: 3, type: 'modify', prompt: 'Create custom error', template: 'errors.New("")', solution: 'errors.New("message")' },
            { id: 4, type: 'fix', prompt: 'Fix error handling', template: 'if error != nil { }', solution: 'if err != nil' },
            { id: 5, type: 'logic', prompt: 'Error interface?', template: '', solution: 'Has Error() string' }
        ]
    },
    "Defer, Panic & Recover": {
        content: `<h3>Defer, Panic & Recover</h3><p>Control flow with defer, panic, and recover.</p>`,
        videos: [{ title: "Go Defer & Panic - Traversy", url: "https://www.youtube.com/watch?v=jNr9vv2KKOY" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Defer statement', template: 'defer _______', solution: 'functionCall()' },
            { id: 2, type: 'output', prompt: 'When defer executes?', template: '', solution: 'Before function returns' },
            { id: 3, type: 'modify', prompt: 'Panic error', template: '', solution: 'panic("error message")' },
            { id: 4, type: 'fix', prompt: 'Fix recover', template: 'recover() in main', solution: 'recover() in deferred function' },
            { id: 5, type: 'logic', prompt: 'Order of defers?', template: '', solution: 'LIFO (Last In First Out)' }
        ]
    },
    "File Handling": {
        content: `<h3>File Handling</h3><p>Reading and writing files in Go.</p>`,
        videos: [{ title: "Go File I/O - Code Monkey", url: "https://www.youtube.com/watch?v=aT8P90fKhWI" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Read file', template: 'ioutil.ReadFile("_______")', solution: '"filename.txt"' },
            { id: 2, type: 'output', prompt: 'Write to file?', template: '', solution: 'ioutil.WriteFile()' },
            { id: 3, type: 'modify', prompt: 'Use os.Open', template: 'ReadFile()', solution: 'f, err := os.Open()' },
            { id: 4, type: 'fix', prompt: 'Fix file ops', template: 'ReadFile("file")', solution: 'Check error' },
            { id: 5, type: 'logic', prompt: 'Close file?', template: '', solution: 'defer file.Close()' }
        ]
    },
    "Modules (Go Modules)": {
        content: `<h3>Modules</h3><p>Managing dependencies with Go modules (go.mod).</p>`,
        videos: [{ title: "Go Modules - Traversy", url: "https://www.youtube.com/watch?v=H2aV9iZNW78" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Init module', template: 'go mod _______', solution: 'init' },
            { id: 2, type: 'output', prompt: 'go.mod file?', template: '', solution: 'Module declaration & deps' },
            { id: 3, type: 'modify', prompt: 'Add dependency', template: 'go get package', solution: 'Correct' },
            { id: 4, type: 'fix', prompt: 'Fix module path', template: 'module github/user/repo', solution: 'module github.com/user/repo' },
            { id: 5, type: 'logic', prompt: 'go.sum file?', template: '', solution: 'Integrity hashes' }
        ]
    },
    "Testing": {
        content: `<h3>Testing</h3><p>Writing tests using testing package in Go.</p>`,
        videos: [{ title: "Go Testing - Code Monkey", url: "https://www.youtube.com/watch?v=qqakBaO_8-g" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Test function', template: 'func Test_______', solution: 'FunctionName(t *testing.T)' },
            { id: 2, type: 'output', prompt: 'Run tests?', template: '', solution: 'go test' },
            { id: 3, type: 'modify', prompt: 'Fail test', template: '', solution: 't.Fail() or t.Error()' },
            { id: 4, type: 'fix', prompt: 'Fix test name', template: 'func TestAdd()', solution: 'Correct' },
            { id: 5, type: 'logic', prompt: 'Test file suffix?', template: '', solution: '_test.go' }
        ]
    },
    "JSON Handling": {
        content: `<h3>JSON Handling</h3><p>Marshaling and unmarshaling JSON in Go.</p>`,
        videos: [{ title: "Go JSON - Traversy", url: "https://www.youtube.com/watch?v=WfRj9gzZVz0" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Marshal to JSON', template: 'json.Marshal_______', solution: '(data)' },
            { id: 2, type: 'output', prompt: 'Unmarshal JSON?', template: '', solution: 'json.Unmarshal(data, &v)' },
            { id: 3, type: 'modify', prompt: 'Add struct tags', template: 'type Person struct { Name }', solution: 'Name string `json:"name"`' },
            { id: 4, type: 'fix', prompt: 'Fix JSON tag', template: '`json=name`', solution: '`json:"name"`' },
            { id: 5, type: 'logic', prompt: 'Omit empty?', template: '', solution: '`json:"name,omitempty"`' }
        ]
    },
    "Standard Library Usage": {
        content: `<h3>Standard Library</h3><p>Using Go's extensive standard library packages.</p>`,
        videos: [{ title: "Go Stdlib - Code Monkey", url: "https://www.youtube.com/watch?v=pKbkLs8Qw0s" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'String functions import', template: 'import "_______"', solution: '"strings"' },
            { id: 2, type: 'output', prompt: 'Math package?', template: '', solution: 'import "math"' },
            { id: 3, type: 'modify', prompt: 'Time package', template: '', solution: 'import "time"' },
            { id: 4, type: 'fix', prompt: 'Fix import', template: 'import math', solution: 'import "math"' },
            { id: 5, type: 'logic', prompt: 'Rand package location?', template: '', solution: 'math/rand' }
        ]
    }
};

const goIntermediateTitles = [
    "Structs",
    "Methods",
    "Interfaces",
    "Pointers",
    "Maps",
    "Error Handling",
    "Defer, Panic & Recover",
    "File Handling",
    "Modules (Go Modules)",
    "Testing",
    "JSON Handling",
    "Standard Library Usage"
];

const GO_ADVANCED_CONTENT = {
    "Goroutines": {
        content: `<h3>Goroutines</h3><p>Lightweight threads managed by Go runtime for concurrent execution.</p>`,
        videos: [{ title: "Go Goroutines - Traversy", url: "https://www.youtube.com/watch?v=WKoI6fg4P7I" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Launch goroutine', template: 'go _______', solution: 'FunctionName()' },
            { id: 2, type: 'output', prompt: 'Goroutine lightweight?', template: '', solution: 'Yes, thousands can run' },
            { id: 3, type: 'modify', prompt: 'Wait for goroutines', template: '', solution: 'sync.WaitGroup' },
            { id: 4, type: 'fix', prompt: 'Fix goroutine', template: 'goroutine func() { }', solution: 'go func() { }()' },
            { id: 5, type: 'logic', prompt: 'Goroutine vs thread?', template: '', solution: 'Goroutines lighter, managed by runtime' }
        ]
    },
    "Channels": {
        content: `<h3>Channels</h3><p>Communication between goroutines using channels.</p>`,
        videos: [{ title: "Go Channels - Code Monkey", url: "https://www.youtube.com/watch?v=sLFQpKhetEA" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare channel', template: 'var ch _____ int', solution: 'chan' },
            { id: 2, type: 'output', prompt: 'Make channel?', template: '', solution: 'ch := make(chan int)' },
            { id: 3, type: 'modify', prompt: 'Buffered channel', template: 'make(chan int)', solution: 'make(chan int, 5)' },
            { id: 4, type: 'fix', prompt: 'Fix channel send', template: 'ch <- value', solution: 'Correct' },
            { id: 5, type: 'logic', prompt: 'Receive from channel?', template: '', solution: 'value := <-ch' }
        ]
    },
    "Concurrency Patterns": {
        content: `<h3>Concurrency Patterns</h3><p>Common patterns like worker pools, pipelines.</p>`,
        videos: [{ title: "Go Patterns - Traversy", url: "https://www.youtube.com/watch?v=_DdJVfASdfM" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Worker pool pattern', template: '', solution: 'Multiple workers reading channel' },
            { id: 2, type: 'output', prompt: 'Pipeline pattern?', template: '', solution: 'Channel between stages' },
            { id: 3, type: 'modify', prompt: 'Fan-out/Fan-in', template: '', solution: 'Distribute and collect results' },
            { id: 4, type: 'fix', prompt: 'Fix pattern', template: '', solution: 'Use goroutines + channels' },
            { id: 5, type: 'logic', prompt: 'Select statement?', template: '', solution: 'Multiplex channels' }
        ]
    },
    "Synchronization (Mutex, WaitGroup)": {
        content: `<h3>Synchronization</h3><p>Mutex and WaitGroup for coordinating goroutines.</p>`,
        videos: [{ title: "Go Sync - Code Monkey", url: "https://www.youtube.com/watch?v=K7jPfZ5u2Nk" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Declare Mutex', template: 'var mu _______', solution: 'sync.Mutex' },
            { id: 2, type: 'output', prompt: 'Lock/Unlock?', template: '', solution: 'mu.Lock() / mu.Unlock()' },
            { id: 3, type: 'modify', prompt: 'WaitGroup', template: '', solution: 'wg := sync.WaitGroup{}' },
            { id: 4, type: 'fix', prompt: 'Fix Wait', template: 'wg.Done()', solution: 'wg.Wait()' },
            { id: 5, type: 'logic', prompt: 'RWMutex purpose?', template: '', solution: 'Multiple readers, exclusive writer' }
        ]
    },
    "Context Package": {
        content: `<h3>Context Package</h3><p>Managing timeouts, cancellation across goroutines.</p>`,
        videos: [{ title: "Go Context - Traversy", url: "https://www.youtube.com/watch?v=GSL5IcZEO64" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Create context', template: 'ctx := context._______', solution: 'Background()' },
            { id: 2, type: 'output', prompt: 'Cancel context?', template: '', solution: 'ctx, cancel := context.WithCancel()' },
            { id: 3, type: 'modify', prompt: 'Timeout context', template: 'WithCancel', solution: 'WithTimeout' },
            { id: 4, type: 'fix', prompt: 'Fix context usage', template: 'ctx := context.BG()', solution: 'context.Background()' },
            { id: 5, type: 'logic', prompt: 'Deadline context?', template: '', solution: 'WithDeadline' }
        ]
    },
    "Memory Management": {
        content: `<h3>Memory Management</h3><p>Understanding memory allocation and management in Go.</p>`,
        videos: [{ title: "Go Memory - Code Monkey", url: "https://www.youtube.com/watch?v=1-WPfqgx8nk" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Stack vs heap?', template: '', solution: 'Stack local vars, heap dynamic' },
            { id: 2, type: 'output', prompt: 'New vs make?', template: '', solution: 'new returns pointer, make returns value' },
            { id: 3, type: 'modify', prompt: 'Escape analysis', template: '', solution: 'Compiler determines heap/stack' },
            { id: 4, type: 'fix', prompt: 'Fix allocation', template: 'x := new([]int)', solution: 'x := make([]int)' },
            { id: 5, type: 'logic', prompt: 'Memory leaks?', template: '', solution: 'Circular refs with GC' }
        ]
    },
    "Garbage Collection": {
        content: `<h3>Garbage Collection</h3><p>Automatic memory management and GC tuning in Go.</p>`,
        videos: [{ title: "Go GC - Traversy", url: "https://www.youtube.com/watch?v=N2jKV26GjR8" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'GC in Go?', template: '', solution: 'Automatic, concurrent' },
            { id: 2, type: 'output', prompt: 'Force GC?', template: '', solution: 'runtime.GC()' },
            { id: 3, type: 'modify', prompt: 'GC percentage', template: '', solution: 'GOGC environment variable' },
            { id: 4, type: 'fix', prompt: 'Fix memory', template: 'defer close(ch)', solution: 'Proper cleanup' },
            { id: 5, type: 'logic', prompt: 'Pause time?', template: '', solution: 'Sub-millisecond typically' }
        ]
    },
    "Performance Optimization": {
        content: `<h3>Performance Optimization</h3><p>Writing fast Go code with profiling.</p>`,
        videos: [{ title: "Go Optimization - Code Monkey", url: "https://www.youtube.com/watch?v=aV_VH5-AsL0" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Optimize slices', template: 'make([]int)', solution: 'make([]int, 0, cap)' },
            { id: 2, type: 'output', prompt: 'Preallocate?', template: '', solution: 'Reduce allocations' },
            { id: 3, type: 'modify', prompt: 'Use sync.Pool', template: '', solution: 'Reuse objects' },
            { id: 4, type: 'fix', prompt: 'Fix loop', template: 'append in loop', solution: 'Preallocate' },
            { id: 5, type: 'logic', prompt: 'Inlining?', template: '', solution: 'Compiler optimization' }
        ]
    },
    "Profiling & Benchmarking": {
        content: `<h3>Profiling & Benchmarking</h3><p>Measuring and analyzing Go program performance.</p>`,
        videos: [{ title: "Go Profiling - Traversy", url: "https://www.youtube.com/watch?v=a-xC3qh-5-s" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Benchmark function', template: 'func Benchmark_______', solution: 'Name(b *testing.B)' },
            { id: 2, type: 'output', prompt: 'Run benchmarks?', template: '', solution: 'go test -bench=.' },
            { id: 3, type: 'modify', prompt: 'CPU profile', template: '', solution: 'pprof http server' },
            { id: 4, type: 'fix', prompt: 'Fix benchmark', template: 'Bench()', solution: 'Benchmark()' },
            { id: 5, type: 'logic', prompt: 'Memory profile?', template: '', solution: 'Allocations tracking' }
        ]
    },
    "Networking & HTTP": {
        content: `<h3>Networking & HTTP</h3><p>Building HTTP servers and clients in Go.</p>`,
        videos: [{ title: "Go HTTP - Code Monkey", url: "https://www.youtube.com/watch?v=6eBKJnJaH_w" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'HTTP server', template: 'http.ListenAndServe(", _______)', solution: '":8080"' },
            { id: 2, type: 'output', prompt: 'Handler function?', template: '', solution: 'func(w http.ResponseWriter, r *http.Request)' },
            { id: 3, type: 'modify', prompt: 'HTTP client', template: '', solution: 'http.Get(), http.Post()' },
            { id: 4, type: 'fix', prompt: 'Fix handler', template: 'http.HandleFunc("/"', solution: 'http.HandleFunc("/", handler)' },
            { id: 5, type: 'logic', prompt: 'Router mux?', template: '', solution: 'http.ServeMux' }
        ]
    },
    "Microservices with Go": {
        content: `<h3>Microservices with Go</h3><p>Building microservice architectures in Go.</p>`,
        videos: [{ title: "Go Microservices - Traversy", url: "https://www.youtube.com/watch?v=7ygoEpHVV3k" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'REST API in Go', template: '', solution: 'Use HTTP package + JSON' },
            { id: 2, type: 'output', prompt: 'Framework?', template: '', solution: 'Gin, Echo, Fiber' },
            { id: 3, type: 'modify', prompt: 'gRPC protocol', template: '', solution: 'Protocol buffers' },
            { id: 4, type: 'fix', prompt: 'Fix API response', template: '', solution: 'json.Marshal()' },
            { id: 5, type: 'logic', prompt: 'Service mesh?', template: '', solution: 'Istio, Linkerd' }
        ]
    },
    "System Programming": {
        content: `<h3>System Programming</h3><p>Low-level system interactions and OS calls in Go.</p>`,
        videos: [{ title: "Go System - Code Monkey", url: "https://www.youtube.com/watch?v=MzjuYLlh0SI" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'OS package import', template: 'import "_______"', solution: '"os"' },
            { id: 2, type: 'output', prompt: 'Environment var?', template: '', solution: 'os.Getenv("VAR")' },
            { id: 3, type: 'modify', prompt: 'Signal handling', template: '', solution: 'signal.Notify()' },
            { id: 4, type: 'fix', prompt: 'Fix exec', template: 'os.Exec()', solution: 'exec.Command()' },
            { id: 5, type: 'logic', prompt: 'Exit code?', template: '', solution: 'os.Exit(code)' }
        ]
    },
    "Go Runtime Internals": {
        content: `<h3>Go Runtime Internals</h3><p>Understanding Go runtime scheduling and architecture.</p>`,
        videos: [{ title: "Go Runtime - Traversy", url: "https://www.youtube.com/watch?v=qBCfAewqvFo" }],
        questions: [
            { id: 1, type: 'practice', prompt: 'Scheduler in Go?', template: '', solution: 'M:N (M threads, N goroutines)' },
            { id: 2, type: 'output', prompt: 'GOMAXPROCS?', template: '', solution: 'Number of OS threads' },
            { id: 3, type: 'modify', prompt: 'Runtime version', template: '', solution: 'runtime.Version()' },
            { id: 4, type: 'fix', prompt: 'Fix goroutine count', template: '', solution: 'runtime.NumGoroutine()' },
            { id: 5, type: 'logic', prompt: 'Work stealing?', template: '', solution: 'Scheduler load balancing' }
        ]
    }
};

const goAdvancedTitles = [
    "Goroutines",
    "Channels",
    "Concurrency Patterns",
    "Synchronization (Mutex, WaitGroup)",
    "Context Package",
    "Memory Management",
    "Garbage Collection",
    "Performance Optimization",
    "Profiling & Benchmarking",
    "Networking & HTTP",
    "Microservices with Go",
    "System Programming",
    "Go Runtime Internals"
];

export const MOCK_QUIZ = {
    id: 1,
    title: "Python Basics Quiz",
    description: "Test your knowledge of Python fundamentals",
    questions: [
        {
            id: 1,
            prompt: "What is the output of print(2 ** 3)?",
            options: ["6", "8", "9", "5"],
            correct: 1
        },
        {
            id: 2,
            prompt: "Which of these is a mutable data type in Python?",
            options: ["tuple", "string", "list", "int"],
            correct: 2
        },
        {
            id: 3,
            prompt: "What does len() function return?",
            options: ["length of a string", "number of elements in a sequence", "size of memory", "both a and b"],
            correct: 3
        },
        {
            id: 4,
            prompt: "How do you create a function in Python?",
            options: ["function myFunc() {}", "def myFunc():", "define myFunc():", "func myFunc()"],
            correct: 1
        },
        {
            id: 5,
            prompt: "What is the correct way to create a list in Python?",
            options: ["list = {1, 2, 3}", "list = [1, 2, 3]", "list = (1, 2, 3)", "list = 1, 2, 3"],
            correct: 1
        }
    ]
};
