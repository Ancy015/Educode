const NATIVE_SYNTAX = {
    python: { print: 'print("Hello Python")', solution: 'print', forbidden: [';', 'console.log', 'System.out', 'printf'], context: 'Indentation and Scripting' },
    javascript: { print: 'console.log("Hello JS");', solution: 'console.log', forbidden: ['System.out', 'printf', 'echo'], context: 'Event Loop and DOM' },
    java: { print: 'System.out.println("Hello Java");', solution: 'System.out.println', forbidden: ['console.log', 'print(', 'printf'], context: 'JVM and Objects' },
    cpp: { print: 'std::cout << "Hello C++" << std::endl;', solution: 'cout', forbidden: ['console.log', 'System.out', 'print('], context: 'Pointers and STL' },
    c: { print: 'printf("Hello C\\n");', solution: 'printf', forbidden: ['console.log', 'System.out', 'std::cout'], context: 'Direct Memory and Headers' },
    sql: { print: 'SELECT * FROM users;', solution: 'SELECT', forbidden: ['print', 'console.log', 'var '], context: 'Relational Sets' },
    go: { print: 'fmt.Println("Hello Go")', solution: 'fmt', forbidden: ['console.log', 'System.out', 'static '], context: 'Goroutines and Slices' },
    rust: { print: 'println!("Hello Rust");', solution: 'println!', forbidden: ['console.log', 'System.out', 'NULL'], context: 'Ownership and Borrowing' },
    php: { print: 'echo "Hello PHP";', solution: 'echo', forbidden: ['console.log', 'System.out', 'System.err'], context: 'Server-side Scripting' },
    ruby: { print: 'puts "Hello Ruby"', solution: 'puts', forbidden: ['console.log', 'System.out', 'printf'], context: 'Elegant Objects' },
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

export const LANGUAGES = [
    { id: 'python', name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', tag: 'Beginner', color: '#3776AB', forbidden: NATIVE_SYNTAX.python.forbidden },
    { id: 'javascript', name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', tag: 'Beginner', color: '#F7DF1E', forbidden: NATIVE_SYNTAX.javascript.forbidden },
    { id: 'java', name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#007396', forbidden: NATIVE_SYNTAX.java.forbidden },
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
    const enhanced = langId === 'python' && PYTHON_ENHANCED_CONTENT[title];

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
        questions: Array.from({ length: 5 }, (_, i) => ({
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
    categories.forEach(level => {
        baseTitles.forEach((title, i) => {
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
