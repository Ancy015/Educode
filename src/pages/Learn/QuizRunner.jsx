import React, { useState } from 'react';
import { MOCK_QUIZ } from '../../data/mockData';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Award } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProgress } from '../../context/ProgressContext';

const QuizRunner = () => {
    const { id } = useParams();
    const { completeLesson } = useProgress();
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const navigate = useNavigate();

    const handleFinish = () => {
        if (score === totalQuestions) {
            completeLesson(parseInt(id));
        }
        navigate('/learn');
    };
    const quiz = MOCK_QUIZ;
    const totalQuestions = quiz.questions.length;
    const currentQuestion = quiz.questions[currentStep];

    const handleOptionSelect = (idx) => {
        if (isAnswered) return;
        setSelectedOption(idx);
        setIsAnswered(true);
        if (idx === currentQuestion.correct) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        if (currentStep + 1 < totalQuestions) {
            setCurrentStep(currentStep + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
                <Motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="glass" style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem' }}>
                    <Award size={80} color="var(--accent)" style={{ marginBottom: '2rem' }} />
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Quiz Completed!</h2>
                    <div style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>
                        {score}/{totalQuestions}
                    </div>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
                        {score === totalQuestions ? "Perfect score! You've mastered this lesson." : "Good effort! Keep practicing to improve your score."}
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button onClick={() => window.location.reload()} className="btn btn-outline"><RotateCcw size={18} /> Retry</button>
                        <button onClick={handleFinish} className="btn btn-primary">Back to Lessons <ArrowRight size={18} /></button>
                    </div>
                </Motion.div>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '80px 0', maxWidth: '800px' }}>
            <div style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>QUESTION {currentStep + 1} OF {totalQuestions}</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 700 }}>{Math.round(((currentStep + 1) / totalQuestions) * 100)}%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'var(--bg-surface)', borderRadius: '100px', overflow: 'hidden' }}>
                    <Motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
                        style={{ height: '100%', background: 'var(--primary)' }}
                    />
                </div>
            </div>

            <AnimatePresence mode="wait">
                <Motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                >
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '2.5rem', color: '#ffffff' }}>{currentQuestion.prompt}</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {currentQuestion.options.map((option, idx) => {
                            const isCorrect = idx === currentQuestion.correct;
                            const isSelected = selectedOption === idx;

                            let borderColor = 'var(--border)';
                            let bgColor = 'var(--bg-surface)';

                            if (isAnswered) {
                                if (isCorrect) {
                                    borderColor = 'var(--secondary)';
                                    bgColor = 'rgba(16, 185, 129, 0.1)';
                                } else if (isSelected && !isCorrect) {
                                    borderColor = 'var(--danger)';
                                    bgColor = 'rgba(239, 68, 68, 0.1)';
                                }
                            } else if (isSelected) {
                                borderColor = 'var(--primary)';
                            }

                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionSelect(idx)}
                                    className="card"
                                    style={{
                                        textAlign: 'left',
                                        padding: '1.25rem 1.5rem',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        borderColor,
                                        background: bgColor,
                                        cursor: isAnswered ? 'default' : 'pointer'
                                    }}
                                >
                                    <span style={{ fontWeight: 500, color: '#ffffff' }}>{option}</span>
                                    {isAnswered && isCorrect && <CheckCircle2 color="var(--secondary)" size={20} />}
                                    {isAnswered && isSelected && !isCorrect && <XCircle color="var(--danger)" size={20} />}
                                </button>
                            );
                        })}
                    </div>
                </Motion.div>
            </AnimatePresence>

            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                    className="btn btn-primary"
                    disabled={!isAnswered}
                    onClick={nextQuestion}
                    style={{ opacity: isAnswered ? 1 : 0.5, padding: '1rem 2rem' }}
                >
                    {currentStep + 1 === totalQuestions ? 'Finish Quiz' : 'Next Question'} <ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default QuizRunner;
