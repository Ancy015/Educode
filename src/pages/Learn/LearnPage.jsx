import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import {
    Play, CheckCircle2, Lock, ChevronRight,
    Award, BookOpen, Layers, Zap
} from 'lucide-react';
import { LEVELS, getCurriculum } from '../../data/mockData';
import { useProgress } from '../../context/ProgressContext';

const LearnPage = () => {
    const { progress, selectedLanguage: language } = useProgress();
    const navigate = useNavigate();

    // Get subject-specific curriculum
    const curriculum = useMemo(() => getCurriculum(language?.id || 'python'), [language]);

    const getStageStats = (levelId) => {
        const stageTopics = curriculum.filter(t => t.level === levelId);
        const completedCount = stageTopics.filter(t => progress.completedLessons.includes(t.id)).length;
        return {
            completed: completedCount,
            total: stageTopics.length,
            percentage: Math.round((completedCount / stageTopics.length) * 100),
            lessons: stageTopics
        };
    };

    const beginnerStats = getStageStats('beginner');
    const intermediateStats = getStageStats('intermediate');
    const advancedStats = getStageStats('advanced');

    const stages = [
        { ...LEVELS[0], stats: beginnerStats, isLocked: false },
        { ...LEVELS[1], stats: intermediateStats, isLocked: beginnerStats.percentage < 100 },
        { ...LEVELS[2], stats: advancedStats, isLocked: intermediateStats.percentage < 100 },
    ];

    return (
        <div className="container" style={{ padding: '60px 0 120px' }}>
            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <Motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', padding: '0.5rem 1.25rem', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.5rem', border: '1px solid rgba(99, 102, 241, 0.2)' }}
                >
                    <img src={language?.icon} alt="" style={{ width: '20px', height: '20px' }} />
                    <span>{language?.name || 'Programming'} Master Path</span>
                </Motion.div>
                <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Subject Mastery</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                    Strict 3-stage curriculum. complete all 10 topics in a stage to unlock the next level of expertise.
                </p>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                {stages.map((stage, stageIdx) => (
                    <section key={stage.id} style={{ position: 'relative' }}>
                        {/* Stage Header */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '2rem',
                            padding: '1.5rem 2rem',
                            background: stage.isLocked ? 'var(--bg-dark)' : 'var(--bg-surface)',
                            borderRadius: '20px',
                            border: stage.isLocked ? '1px solid var(--border)' : `1px solid var(--primary)`,
                            opacity: stage.isLocked ? 0.7 : 1
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '16px',
                                    background: stage.isLocked ? 'var(--bg-elevated)' : 'var(--primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    boxShadow: stage.isLocked ? 'none' : '0 10px 20px var(--primary-glow)'
                                }}>
                                    {stageIdx === 0 ? <BookOpen size={28} /> : stageIdx === 1 ? <Layers size={28} /> : <Award size={28} />}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        {stage.name}
                                        {stage.isLocked && <Lock size={20} color="var(--text-muted)" />}
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', margin: 0 }}>{stage.description}</p>
                                </div>
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                    <div style={{ width: '200px', height: '10px', background: 'var(--bg-dark)', borderRadius: '100px', overflow: 'hidden' }}>
                                        <Motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${stage.stats.percentage}%` }}
                                            style={{ height: '100%', background: stage.isLocked ? 'var(--text-muted)' : 'var(--primary)', transition: 'width 1s ease' }}
                                        />
                                    </div>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 800 }}>{stage.stats.percentage}%</span>
                                </div>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>{stage.stats.completed} / 10 TOPICS COMPLETED</span>
                            </div>
                        </div>

                        {/* Topics Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem', padding: '0 1rem' }}>
                            {stage.stats.lessons.map((topic, topicIdx) => {
                                const isCompleted = progress.completedLessons.includes(topic.id);
                                const isTopicLocked = stage.isLocked;

                                return (
                                    <Motion.div
                                        key={topic.id}
                                        whileHover={!isTopicLocked ? { y: -5, borderColor: 'var(--primary)' } : {}}
                                        className="card"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1.25rem',
                                            padding: '1.25rem 1.5rem',
                                            cursor: isTopicLocked ? 'not-allowed' : 'pointer',
                                            opacity: isTopicLocked ? 0.6 : 1,
                                            background: isCompleted ? 'rgba(16, 185, 129, 0.05)' : isTopicLocked ? 'var(--bg-dark)' : 'var(--bg-surface)',
                                            borderColor: isCompleted ? 'var(--secondary)' : 'var(--border)',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                        onClick={() => !isTopicLocked && navigate(`/lesson/${topic.id}`)}
                                    >
                                        {/* Index Badge */}
                                        <div style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 800,
                                            color: 'var(--text-muted)',
                                            opacity: 0.3,
                                            position: 'absolute',
                                            top: '0.5rem',
                                            right: '0.75rem'
                                        }}>
                                            #{String(topicIdx + 1).padStart(2, '0')}
                                        </div>

                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '10px',
                                            background: isCompleted ? 'rgba(16, 185, 129, 0.1)' : 'var(--bg-dark)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: isCompleted ? 'var(--secondary)' : isTopicLocked ? 'var(--text-muted)' : 'var(--primary)'
                                        }}>
                                            {isCompleted ? <CheckCircle2 size={24} /> : isTopicLocked ? <Lock size={20} /> : <Zap size={20} />}
                                        </div>

                                        <div style={{ flex: 1 }}>
                                            <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: isTopicLocked ? 'var(--text-muted)' : 'var(--text-main)' }}>{topic.title}</h4>
                                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.25rem 0 0' }}>
                                                {isTopicLocked ? 'LOCKED' : isCompleted ? 'MASTERED' : 'READY TO START'}
                                            </p>
                                        </div>

                                        {!isTopicLocked && <ChevronRight size={18} color="var(--text-muted)" />}
                                    </Motion.div>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default LearnPage;
