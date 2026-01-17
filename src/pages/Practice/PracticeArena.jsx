import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-ruby';
import 'prismjs/themes/prism-tomorrow.css';
import { MOCK_PRACTICE_PROBLEMS, LANGUAGES } from '../../data/mockData';
import { Play, RotateCcw, Lightbulb, ChevronRight, CheckCircle } from 'lucide-react';

const PracticeArena = ({ language }) => {
    const problem = MOCK_PRACTICE_PROBLEMS[0];
    const [code, setCode] = useState(problem.initialCode[language?.id || 'python']);
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [showHint, setShowHint] = useState(false);

    const runCode = () => {
        setIsRunning(true);
        setOutput(''); // Clear previous output

        // Mock execution
        setTimeout(() => {
            const successMsg = `> Executing code in ${language?.name || 'Python'}...\nHello, World!\n\nProcess finished with exit code 0`;
            setOutput(successMsg);
            setIsRunning(false);
        }, 800);
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr 400px', height: 'calc(100vh - 80px)', overflow: 'hidden' }}>
            {/* Left: Problem Selection */}
            <aside style={{ borderRight: '1px solid var(--border)', padding: '1.5rem', overflowY: 'auto' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Practice Categories</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {['Getting Started', 'Basics', 'Control Flow', 'Data Structures', 'Advanced'].map((cat, i) => (
                        <div key={i} style={{
                            padding: '0.75rem',
                            borderRadius: '8px',
                            background: i === 0 ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                            color: i === 0 ? 'var(--primary)' : 'var(--text-muted)',
                            cursor: 'pointer',
                            fontWeight: i === 0 ? 600 : 400,
                            fontSize: '0.9rem'
                        }}>
                            {cat}
                        </div>
                    ))}
                </div>
            </aside>

            {/* Center: Editor */}
            <main style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h2 style={{ fontSize: '1.25rem' }}>{problem.title}</h2>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button
                                className="btn btn-outline"
                                style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                                onClick={() => setCode(problem.initialCode[language?.id || 'python'])}
                            >
                                <RotateCcw size={14} /> Reset
                            </button>
                            <button
                                className="btn btn-primary"
                                style={{ padding: '0.4rem 1.2rem', fontSize: '0.8rem', minWidth: '120px' }}
                                onClick={runCode}
                                disabled={isRunning}
                            >
                                {isRunning ? 'Running...' : <><Play size={14} /> Run Code</>}
                            </button>
                        </div>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{problem.description}</p>
                </div>

                <div style={{ flex: 1, position: 'relative', overflowY: 'auto', background: '#0d0d0e' }}>
                    <Editor
                        value={code}
                        onValueChange={code => setCode(code)}
                        highlight={code => {
                            const langId = language?.id || 'python';
                            const grammars = {
                                python: languages.python,
                                javascript: languages.javascript,
                                java: languages.java,
                                c: languages.c,
                                cpp: languages.cpp,
                                go: languages.go,
                                sql: languages.sql,
                                rust: languages.rust,
                                php: languages.php,
                                ruby: languages.ruby
                            };
                            const grammar = grammars[langId] || languages.clike || languages.plain;
                            try {
                                return highlight(code, grammar, langId);
                            } catch {
                                return code;
                            }
                        }}
                        padding={20}
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 16,
                            minHeight: '100%',
                            color: '#f8fafc'
                        }}
                    />
                </div>
            </main>

            {/* Right: Output & Hints */}
            <aside style={{ borderLeft: '1px solid var(--border)', display: 'flex', flexDirection: 'column', background: 'var(--bg-surface)' }}>
                <div style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '1rem' }}>Console Output</h3>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <button
                                onClick={() => setShowHint(!showHint)}
                                style={{ color: 'var(--accent)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                            >
                                <Lightbulb size={14} /> {showHint ? 'Hide Hint' : 'Show Hint'}
                            </button>
                        </div>
                    </div>

                    <div style={{
                        flex: 1,
                        background: 'var(--bg-dark)',
                        borderRadius: '8px',
                        padding: '1rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        color: isRunning ? 'var(--text-muted)' : '#10b981',
                        whiteSpace: 'pre-wrap',
                        overflowY: 'auto',
                        border: '1px solid var(--border)'
                    }}>
                        {isRunning ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span className="loader-dot"></span>
                                Executing code...
                            </div>
                        ) : (
                            output || <span style={{ color: 'var(--text-muted)' }}>Click "Run Code" to see the output...</span>
                        )}
                    </div>

                    {showHint && (
                        <div className="card" style={{ marginTop: '1.5rem', background: 'rgba(245, 158, 11, 0.05)', borderColor: 'var(--accent)', padding: '1rem' }}>
                            <h4 style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>Pro Tip:</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{problem.hint}</p>
                        </div>
                    )}
                </div>

                <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border)' }}>
                    <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', borderColor: 'var(--secondary)', color: 'var(--secondary)' }}>
                        <CheckCircle size={18} /> Submit Solution
                    </button>
                </div>
            </aside>
            <style>{`
                .loader-dot {
                    width: 8px;
                    height: 8px;
                    background: var(--primary);
                    border-radius: 50%;
                    animation: pulse 1s infinite;
                }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.5); opacity: 0.5; }
                    100% { transform: scale(1); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default PracticeArena;
