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
