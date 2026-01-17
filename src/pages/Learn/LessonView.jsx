import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCurriculum } from '../../data/mockData';
import {
    ChevronLeft, ChevronRight, Play, BookOpen,
    CheckCircle, Video, Code, Award, CheckCircle2,
    AlertCircle, ArrowRight
} from 'lucide-react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-dart';
import 'prismjs/components/prism-go';
import 'prismjs/themes/prism-tomorrow.css';
import { useProgress } from '../../context/ProgressContext';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const LessonView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { completeLesson, selectedLanguage: language } = useProgress();

    // UI States
    const [activeTab, setActiveTab] = useState('learn'); // learn, practice, video
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [answers, setAnswers] = useState({}); // { qIndex: { status, content } }
    const [isCompleted, setIsCompleted] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [feedback, setFeedback] = useState(null);

    // Data
    const curriculum = useMemo(() => getCurriculum(language?.id || 'python'), [language]);
    const lesson = useMemo(() => curriculum.find(l => l.id === id) || curriculum[0], [curriculum, id]);

    const questions = lesson.questions;
    const currentQuestion = questions[currentQuestionIdx];

    // Initialize code editor content
    const [editorCode, setEditorCode] = useState(currentQuestion?.template || '');
    const [prevIdx, setPrevIdx] = useState(currentQuestionIdx);

    if (currentQuestionIdx !== prevIdx) {
        setPrevIdx(currentQuestionIdx);
        setEditorCode(currentQuestion?.template || '');
        setFeedback(null);
    }

    const handleRunCode = () => {
        setIsRunning(true);
        setFeedback(null);

        const forbidden = language?.forbidden || [];
        const detectedForbidden = forbidden.find(word => editorCode.includes(word));

        setTimeout(() => {
            if (detectedForbidden) {
                setFeedback({
                    success: false,
                    message: `❌ Invalid Syntax! Detected '${detectedForbidden}' which is not native to ${language?.name}. Ensure you use proper ${language?.name} syntax.`
                });
                setIsRunning(false);
                return;
            }

            const isCorrect = editorCode.toLowerCase().includes(currentQuestion.solution.toLowerCase()) || currentQuestion.type === 'mcq';
            setFeedback({
                success: isCorrect,
                message: isCorrect ? `🎉 Correct! Professional ${language?.name} implementation.` : `❌ Validation failed. Check your ${language?.name} logic.`
            });

            if (isCorrect) {
                setAnswers(prev => ({
                    ...prev,
                    [currentQuestionIdx]: { status: 'correct', content: editorCode }
                }));
            }
            setIsRunning(false);
        }, 800);
    };

    const handleMCQSelect = (idx) => {
        const isCorrect = idx === currentQuestion.correct;
        setAnswers(prev => ({
            ...prev,
            [currentQuestionIdx]: { status: isCorrect ? 'correct' : 'wrong', content: idx }
        }));
        setFeedback({
            success: isCorrect,
            message: isCorrect ? "🎉 Spot on! Theory mastered." : "❌ Not quite. Review the content and try again."
        });
    };

    const allSolved = Object.keys(answers).length === 5 &&
        Object.values(answers).every(a => a.status === 'correct');

    const finishTopic = () => {
        completeLesson(lesson.id);
        setIsCompleted(true);
    };

    if (isCompleted) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
                <Motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem' }}>
                    <div style={{ width: '100px', height: '100px', background: 'var(--secondary)', borderRadius: '50%', margin: '0 auto 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                        <Award size={64} />
                    </div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎉 Congratulations!</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                        You have successfully completed the topic: <br />
                        <strong style={{ color: 'var(--text-main)' }}>{lesson.title}</strong>
                    </p>
                    <button
                        onClick={() => navigate('/learn')}
                        className="btn btn-primary"
                        style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}
                    >
                        Continue to Next Topic <ArrowRight size={20} />
                    </button>
                </Motion.div>
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 80px)' }}>
            {/* Header / Tabs */}
            <div style={{
                background: 'var(--bg-surface)',
                borderBottom: '1px solid var(--border)',
                padding: '0 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '60px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <button onClick={() => navigate('/learn')} style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <ChevronLeft size={18} /> Syllabus
                    </button>
                    <div style={{ display: 'flex', gap: '1rem', height: '100%' }}>
                        <TabButton active={activeTab === 'learn'} icon={<BookOpen size={18} />} label="Theory" onClick={() => setActiveTab('learn')} />
                        <TabButton active={activeTab === 'practice'} icon={<Code size={18} />} label={`Practice (${Object.keys(answers).length}/5)`} onClick={() => setActiveTab('practice')} />
                        <TabButton active={activeTab === 'video'} icon={<Video size={18} />} label="Video Learning" onClick={() => setActiveTab('video')} />
                    </div>
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{lesson.title}</h3>
            </div>

            {/* Content Area */}
            <div style={{ flex: 1, overflow: 'hidden', display: 'flex' }}>
                <div style={{ flex: 1, overflowY: 'auto', padding: '3rem 4rem', maxWidth: activeTab === 'practice' ? '600px' : 'none', borderRight: activeTab === 'practice' ? '1px solid var(--border)' : 'none' }}>
                    {activeTab === 'learn' && (
                        <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="lesson-content prose" style={{ color: '#ffffff' }}>
                            <div dangerouslySetInnerHTML={{ __html: lesson.content }} style={{ color: '#ffffff' }} />
                        </Motion.div>
                    )}

                    {activeTab === 'video' && (
                        <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <h2 style={{ marginBottom: '2rem' }}>Recommended Learning Videos</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                                {lesson.videos && lesson.videos.length > 0 ? lesson.videos.map((vid, i) => (
                                    <div key={i} className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--secondary)' }}>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#ffffff' }}>{vid.title}</h4>
                                        <a href={vid.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                                            Watch on YouTube <Video size={18} />
                                        </a>
                                    </div>
                                )) : (
                                    <p style={{ color: 'var(--text-muted)' }}>No videos available for this topic yet.</p>
                                )}
                            </div>
                        </Motion.div>
                    )}

                    {(activeTab === 'practice' || activeTab === 'learn') && (
                        <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--bg-dark)', borderRadius: '16px', display: activeTab === 'learn' ? 'flex' : 'none', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h4 style={{ marginBottom: '0.25rem' }}>Ready to test your knowledge?</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Complete 5 interactive tasks to master this topic.</p>
                            </div>
                            <button onClick={() => setActiveTab('practice')} className="btn btn-primary">Start Practice Labs</button>
                        </div>
                    )}

                    {activeTab === 'practice' && (
                        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
                                {questions.map((_, i) => (
                                    <div key={i} onClick={() => setCurrentQuestionIdx(i)} style={{ flex: 1, height: '6px', borderRadius: '100px', cursor: 'pointer', background: currentQuestionIdx === i ? 'var(--primary)' : answers[i] ? 'var(--secondary)' : 'var(--border)' }} />
                                ))}
                            </div>

                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#ffffff' }}>Question {currentQuestion.id} of 5</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6, color: '#ffffff' }}>{currentQuestion.prompt}</p>

                            {currentQuestion.type === 'mcq' ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {currentQuestion.options.map((opt, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleMCQSelect(i)}
                                            className="card"
                                            style={{
                                                textAlign: 'left',
                                                padding: '1.25rem',
                                                border: answers[currentQuestionIdx]?.content === i ? (i === currentQuestion.correct ? '2px solid var(--secondary)' : '2px solid var(--danger)') : '1px solid var(--border)'
                                            }}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="card" style={{ padding: '0', background: 'var(--bg-dark)', border: '1px solid var(--border)', overflow: 'hidden' }}>
                                    <div style={{ background: 'var(--bg-surface)', padding: '0.5rem 1rem', borderBottom: '1px solid var(--border)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', display: 'flex', justifyContent: 'space-between' }}>
                                        <span>{language?.name.toUpperCase()} EDITOR</span>
                                        <span style={{ opacity: 0.5 }}>Standard Mode</span>
                                    </div>
                                    <Editor
                                        value={editorCode}
                                        onValueChange={setEditorCode}
                                        highlight={code => {
                                            const langId = language?.id || 'python';
                                            const grammar = languages[langId] || languages.clike || languages.plain;
                                            return highlight(code, grammar, langId);
                                        }}
                                        padding={20}
                                        style={{ fontFamily: 'var(--font-mono)', fontSize: 14, minHeight: '200px' }}
                                    />
                                </div>
                            )}

                            {feedback && (
                                <Motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ marginTop: '1.5rem', padding: '1rem', borderRadius: '8px', background: feedback.success ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: feedback.success ? 'var(--secondary)' : 'var(--danger)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    {feedback.success ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                                    <span style={{ fontWeight: 600 }}>{feedback.message}</span>
                                </Motion.div>
                            )}

                            <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <button
                                    className="btn btn-outline"
                                    disabled={currentQuestionIdx === 0}
                                    onClick={() => setCurrentQuestionIdx(prev => prev - 1)}
                                >
                                    Previous
                                </button>

                                {currentQuestion.type !== 'mcq' && (
                                    <button onClick={handleRunCode} className="btn btn-primary" style={{ background: 'var(--accent)', border: 'none' }} disabled={isRunning}>
                                        {isRunning ? 'Validating...' : 'Run & Check Answer'}
                                    </button>
                                )}

                                {currentQuestionIdx < 4 ? (
                                    <button
                                        className="btn btn-outline"
                                        disabled={!answers[currentQuestionIdx] || answers[currentQuestionIdx].status !== 'correct'}
                                        onClick={() => setCurrentQuestionIdx(prev => prev + 1)}
                                    >
                                        Next Task
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-primary"
                                        disabled={!allSolved}
                                        onClick={finishTopic}
                                    >
                                        Finish Topic
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Split Pane - Preview (Desktop Only) */}
                {activeTab === 'practice' && (
                    <div style={{ flex: 1, background: '#050505', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1rem 2rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>INTERACTIVE CONSOLE</span>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <div style={{ width: '10px', height: '100%', background: '#ff5f56', borderRadius: '50%' }} />
                                <div style={{ width: '10px', height: '100%', background: '#ffbd2e', borderRadius: '50%' }} />
                                <div style={{ width: '10px', height: '100%', background: '#27c93f', borderRadius: '50%' }} />
                            </div>
                        </div>
                        <div style={{ flex: 1, padding: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#10b981' }}>
                            {isRunning ? '> Initializing execution environment...\n> Running test cases...' : feedback?.success ? `> Success: Result matches expected output.\n> Question ${currentQuestion.id} passed.` : '> Waiting for input...'}
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                .lesson-content h3 { font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; color: var(--text-main); }
                .lesson-content p { color: var(--text-muted); line-height: 1.8; margin-bottom: 1.5rem; }
                .lesson-content .example-box { background: var(--bg-surface); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--primary); margin: 2rem 0; }
                .lesson-content pre { background: var(--bg-dark); padding: 1.5rem; border-radius: 8px; overflow-x: auto; margin: 1.5rem 0; }
                .lesson-content code { font-family: var(--font-mono); font-size: 0.9rem; }
            `}</style>
        </div>
    );
};

const TabButton = ({ active, icon, label, onClick }) => (
    <button
        onClick={onClick}
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0 1rem',
            height: '100%',
            borderBottom: active ? '2px solid var(--primary)' : '2px solid transparent',
            color: active ? 'var(--primary)' : 'var(--text-muted)',
            fontWeight: 600,
            fontSize: '0.9rem',
            transition: 'all 0.2s ease'
        }}
    >
        {icon} {label}
    </button>
);

export default LessonView;
