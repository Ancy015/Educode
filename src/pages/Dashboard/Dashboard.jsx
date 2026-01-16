import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import {
    BookOpen, Target, Clock, Zap, PlayCircle,
    ChevronRight, Calendar, TrendingUp, Award,
    CheckCircle2, Lock, ArrowLeft
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useProgress } from '../../context/ProgressContext';

const Dashboard = ({ user, language }) => {
    const { progress } = useProgress();
    const [activeModal, setActiveModal] = useState(null);
    const navigate = useNavigate();

    const cards = [
        { id: 'lessons', label: 'Lessons', value: `${progress.completedLessons.length}/20`, icon: <BookOpen />, color: '#6366f1' },
        { id: 'solved', label: 'Solved', value: `${progress.solvedProblems.length}/50`, icon: <Target />, color: '#10b981' },
        { id: 'hours', label: 'Hours', value: `${progress.hoursLearned}h`, icon: <Clock />, color: '#f59e0b' },
        { id: 'streak', label: 'Streak', value: `${progress.streak} days`, icon: <Zap />, color: '#ec4899' },
    ];

    return (
        <div className="container" style={{ paddingTop: '40px', paddingBottom: '100px' }}>
            <header style={{ marginBottom: '3rem' }}>
                <Motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ fontSize: '2.5rem', fontWeight: 800 }}
                >
                    Welcome back, {user?.name || 'Developer'}! 👋
                </Motion.h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                    You're currently mastering <strong>{language?.name || 'Python'}</strong>.
                </p>
            </header>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                {cards.map((card, i) => (
                    <Motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="card"
                        onClick={() => setActiveModal(card.id)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            cursor: 'pointer',
                            border: activeModal === card.id ? '2px solid var(--primary)' : '1px solid var(--border)'
                        }}
                    >
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '16px',
                            background: `${card.color}15`,
                            color: card.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {React.cloneElement(card.icon, { size: 28 })}
                        </div>
                        <div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.2rem', fontWeight: 600, textTransform: 'uppercase' }}>{card.label}</p>
                            <h4 style={{ fontSize: '1.5rem', margin: 0 }}>{card.value}</h4>
                        </div>
                    </Motion.div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
                {/* Continue Learning Area */}
                <section>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem' }}>Jump Back In</h3>
                        <Link to="/learn" style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Full Syllabus <ChevronRight size={18} />
                        </Link>
                    </div>

                    <Motion.div
                        className="card"
                        whileHover={{ y: -5 }}
                        style={{ padding: '2.5rem', display: 'flex', gap: '2.5rem', alignItems: 'center', background: 'var(--bg-elevated)' }}
                    >
                        <div style={{
                            width: '140px',
                            height: '140px',
                            borderRadius: '24px',
                            background: 'var(--bg-dark)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--primary)',
                            border: '1px solid var(--border)'
                        }}>
                            <PlayCircle size={64} fill="currentColor" strokeWidth={1} style={{ opacity: 0.2 }} />
                            <PlayCircle size={64} style={{ position: 'absolute' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Next up</span>
                            <h4 style={{ fontSize: '1.75rem', margin: '0.5rem 0' }}>Control Flow & Loops</h4>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.6 }}>
                                Master the art of directing your program's logic using advanced conditional patterns and optimized loops.
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ flex: 1, height: '10px', background: 'var(--bg-dark)', borderRadius: '100px', overflow: 'hidden' }}>
                                    <Motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress.curriculumProgress}%` }}
                                        style={{ height: '100%', background: 'linear-gradient(90deg, var(--primary), #818cf8)' }}
                                    />
                                </div>
                                <span style={{ fontSize: '1rem', fontWeight: 800 }}>{progress.curriculumProgress}%</span>
                            </div>
                        </div>
                        <button onClick={() => navigate('/lesson/3')} className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Resume</button>
                    </Motion.div>
                </section>

                {/* Side Info */}
                <aside>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        <TrendingUp size={20} color="var(--primary)" />
                        <h3 style={{ fontSize: '1.25rem' }}>Recent Milestones</h3>
                    </div>
                    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <AchievementItem icon="🎓" title="Syntax Master" sub="Completed 5 lessons" date="2h ago" />
                        <AchievementItem icon="🔥" title="Unstoppable" sub="7 Day Learning Streak" date="Yesterday" />
                        <AchievementItem icon="⚡" title="Quick Solver" sub="Solved 3 problems in 1h" date="Oct 24" />
                    </div>
                </aside>
            </div>

            {/* Modals */}
            <AnimatePresence>
                {activeModal && (
                    <ModalWrapper onClose={() => setActiveModal(null)} title={cards.find(c => c.id === activeModal)?.label}>
                        {activeModal === 'lessons' && <LessonsDetail lessons={progress.completedLessons} />}
                        {activeModal === 'solved' && <SolvedDetail solved={progress.solvedProblems} hours={progress.hoursLearned} />}
                        {activeModal === 'streak' && <StreakDetail streak={progress.streak} longest={progress.longestStreak} />}
                        {activeModal === 'hours' && <HoursDetail hours={progress.hoursLearned} />}
                    </ModalWrapper>
                )}
            </AnimatePresence>
        </div>
    );
};

const ModalWrapper = ({ children, onClose, title }) => (
    <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)',
            zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
        }}
        onClick={onClose}
    >
        <Motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="card"
            style={{ width: '100%', maxWidth: '700px', padding: '2.5rem', background: 'var(--bg-surface)', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
            onClick={e => e.stopPropagation()}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.75rem' }}>{title} Insights</h2>
                <button onClick={onClose} style={{ color: 'var(--text-muted)' }}>
                    <ArrowLeft size={24} />
                </button>
            </div>
            {children}
        </Motion.div>
    </Motion.div>
);

const LessonsDetail = ({ lessons }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="card" style={{ background: 'var(--bg-dark)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <h4 style={{ fontSize: '1.25rem' }}>Sequential Mastery</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Unlock the path to becoming an expert.</p>
            </div>
            <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>{lessons.length}/20</div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Complete</div>
            </div>
        </div>
        <div style={{ display: 'grid', gap: '1rem' }}>
            {[...Array(5)].map((_, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '12px', background: i < lessons.length + 1 ? 'rgba(99, 102, 241, 0.05)' : 'transparent', border: '1px solid var(--border)' }}>
                    {i < lessons.length ? <CheckCircle2 color="var(--secondary)" size={20} /> : i === lessons.length ? <PlayCircle color="var(--primary)" size={20} /> : <Lock color="var(--text-muted)" size={20} />}
                    <span style={{ flex: 1, fontWeight: 600, opacity: i <= lessons.length ? 1 : 0.5 }}>Module {i + 1}: {['Fundamentals', 'Data Structures', 'Algorithms', 'System Design', 'Expert Patterns'][i]}</span>
                    {i === lessons.length && <Link to="/learn" className="btn btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>Start</Link>}
                </div>
            ))}
        </div>
    </div>
);

const SolvedDetail = ({ solved, hours }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="card" style={{ background: 'var(--bg-dark)', textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--secondary)' }}>{solved.length}</span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Problems Solved</p>
            </div>
            <div className="card" style={{ background: 'var(--bg-dark)', textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)' }}>{hours}h</span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Time Invested</p>
            </div>
        </div>
        <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Topic Breakdown</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <TopicProgress label="Strings & Arrays" current={15} total={20} color="#6366f1" />
                <TopicProgress label="Dynamic Programming" current={3} total={15} color="#ef4444" />
                <TopicProgress label="Graph Theory" current={8} total={10} color="#10b981" />
            </div>
        </div>
    </div>
);

const TopicProgress = ({ label, current, total, color }) => (
    <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            <span>{label}</span>
            <span style={{ fontWeight: 600 }}>{current}/{total}</span>
        </div>
        <div style={{ height: '6px', background: 'var(--bg-dark)', borderRadius: '100px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${(current / total) * 100}%`, background: color }} />
        </div>
    </div>
);

const StreakDetail = ({ streak, longest }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', textAlign: 'center' }}>
            <div className="card" style={{ background: 'rgba(236, 72, 153, 0.05)', borderColor: '#ec4899' }}>
                <Zap size={32} color="#ec4899" style={{ marginBottom: '1rem' }} />
                <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>{streak}</div>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Current Streak</p>
            </div>
            <div className="card" style={{ background: 'var(--bg-dark)' }}>
                <TrendingUp size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>{longest}</div>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Best Streak</p>
            </div>
        </div>
        <div className="card" style={{ background: 'var(--bg-dark)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Calendar size={20} color="var(--primary)" />
                <h4 style={{ margin: 0 }}>Activity Calendar</h4>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem' }}>
                {[...Array(28)].map((_, i) => (
                    <div key={i} style={{
                        aspectRatio: '1',
                        borderRadius: '4px',
                        background: i > 20 ? 'rgba(99, 102, 241, 0.4)' : 'var(--bg-elevated)',
                        border: i === 27 ? '2px solid var(--primary)' : 'none'
                    }} />
                ))}
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>Showing activity for last 4 weeks</p>
        </div>
    </div>
);

const HoursDetail = ({ hours }) => (
    <div style={{ textAlign: 'center' }}>
        <div style={{ width: '200px', height: '200px', margin: '0 auto 2rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg style={{ transform: 'rotate(-90deg)', width: '200px', height: '200px' }}>
                <circle cx="100" cy="100" r="80" fill="none" stroke="var(--bg-dark)" strokeWidth="15" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="var(--primary)" strokeWidth="15"
                    strokeDasharray="502" strokeDashoffset={502 * (1 - 0.7)} strokeLinecap="round" />
            </svg>
            <div style={{ position: 'absolute', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{hours}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Hours</div>
            </div>
        </div>
        <h3 style={{ marginBottom: '1rem' }}>Peak Productivity</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>You learn most efficiently between **8:00 PM and 10:00 PM**. Keep it up!</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="card" style={{ flex: 1, background: 'var(--bg-dark)' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>2.4h</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Daily Avg</div>
            </div>
            <div className="card" style={{ flex: 1, background: 'var(--bg-dark)' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>Active</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>M T W T F S S</div>
            </div>
        </div>
    </div>
);

const AchievementItem = ({ icon, title, sub, date }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ fontSize: '1.5rem', width: '40px', textAlign: 'center' }}>{icon}</div>
        <div style={{ flex: 1 }}>
            <h5 style={{ fontSize: '0.95rem', margin: 0 }}>{title}</h5>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{sub}</p>
        </div>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{date}</span>
    </div>
);

export default Dashboard;
