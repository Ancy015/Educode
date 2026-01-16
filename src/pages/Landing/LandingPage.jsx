import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Code, Users, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, desc }) => (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {icon}
        </div>
        <h3>{title}</h3>
        <p style={{ color: 'var(--text-muted)' }}>{desc}</p>
    </div>
);

const LandingPage = () => {
    return (
        <div className="container" style={{ paddingBottom: '100px' }}>
            {/* Hero Section */}
            <section style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                gap: '2rem'
            }}>
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span style={{
                        background: 'rgba(99, 102, 241, 0.1)',
                        color: 'var(--primary)',
                        padding: '0.5rem 1rem',
                        borderRadius: '100px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        border: '1px solid rgba(99, 102, 241, 0.2)'
                    }}>
                        The Future of Coding Education
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginTop: '1.5rem', lineHeight: 1.1 }}>
                        Master Programming <br />
                        <span style={{ color: 'var(--primary)' }}>Through Practice.</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '1.5rem auto' }}>
                        Interactive lessons, real-world problems, and a community of learners.
                        Start your journey from beginner to professional developer today.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                        <Link to="/register" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Start Learning <ChevronRight size={20} />
                        </Link>
                        <Link to="/practice" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Solve Problems
                        </Link>
                    </div>
                </Motion.div>

                {/* Stats Section */}
                <Motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="glass"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        padding: '2rem',
                        width: '100%',
                        maxWidth: '800px',
                        marginTop: '4rem'
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>100+</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Lessons</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>50+</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Problems</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>2k+</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Active Learners</span>
                    </div>
                </Motion.div>
            </section>

            {/* Features Grid */}
            <section style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <FeatureCard
                    icon={<Code color="var(--primary)" />}
                    title="Interactive Editor"
                    desc="Write, run, and debug code directly in your browser with our advanced terminal."
                />
                <FeatureCard
                    icon={<Award color="var(--primary)" />}
                    title="Get Certified"
                    desc="Complete courses and earn industry-recognized certifications to boost your career."
                />
                <FeatureCard
                    icon={<Users color="var(--primary)" />}
                    title="Community"
                    desc="Join a global network of students and mentors. Never learn alone."
                />
            </section>
        </div>
    );
};

export default LandingPage;

