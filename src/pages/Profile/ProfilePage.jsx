import React, { useState, useRef } from 'react';
import {
    User, Award, Settings, Book, Code, Clock,
    Linkedin, Github, Globe, Twitter, Edit2,
    Camera, Save, X, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProgress } from '../../context/ProgressContext';
import { AnimatePresence } from 'framer-motion';

const ProfilePage = () => {
    const { progress, userProfile, updateProfile, selectedLanguage: language } = useProgress();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(() => userProfile || {
        name: 'EduCode Student',
        bio: 'Passionate learner exploring the world of code.',
        profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop',
        links: { linkedin: '', github: '', portfolio: '', twitter: '' }
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const fileInputRef = useRef(null);

    const handleSave = () => {
        updateProfile(formData);
        setIsEditing(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    const handleCancel = () => {
        setFormData(userProfile);
        setIsEditing(false);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                alert("File size should be under 2MB");
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, profilePic: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    // Show loading state if data isn't ready
    if (!userProfile || !progress) {
        return (
            <div className="container" style={{ padding: '60px 0', textAlign: 'center' }}>
                <p>Loading profile...</p>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '60px 0', maxWidth: '1000px' }}>
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: '2rem',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 1000,
                            padding: '1rem 2rem',
                            background: 'var(--secondary)',
                            color: 'white',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)'
                        }}
                    >
                        <CheckCircle size={20} />
                        <span>Profile updated successfully, <strong>{userProfile.name}</strong>.</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: '3rem' }}>
                {/* Profile Header (LinkedIn Style) */}
                <div style={{ height: '160px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', position: 'relative' }}>
                    <div style={{
                        position: 'absolute',
                        bottom: '-60px',
                        left: '4rem',
                        width: '140px',
                        height: '140px',
                        borderRadius: '50%',
                        border: '5px solid var(--bg-surface)',
                        background: 'var(--bg-dark)',
                        overflow: 'hidden',
                        cursor: isEditing ? 'pointer' : 'default',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                    }} onClick={isEditing ? triggerFileInput : undefined}>
                        <img
                            src={formData.profilePic}
                            alt="Profile"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        {isEditing && (
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'rgba(0,0,0,0.4)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'opacity 0.2s'
                            }}>
                                <Camera size={32} color="white" />
                            </div>
                        )}
                        <input
                            type="file"
                            hidden
                            ref={fileInputRef}
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                </div>

                <div style={{ padding: '80px 4rem 3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ flex: 1 }}>
                            {isEditing ? (
                                <input
                                    className="form-control"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', width: '100%', maxWidth: '400px' }}
                                    placeholder="Your Name"
                                />
                            ) : (
                                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>{userProfile.name}</h1>
                            )}

                            {isEditing ? (
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={formData.bio}
                                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                    style={{ width: '100%', marginBottom: '1.5rem', color: 'var(--text-muted)' }}
                                    placeholder="Short professional bio..."
                                />
                            ) : (
                                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '700px' }}>
                                    {userProfile.bio}
                                </p>
                            )}

                            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <SocialLink icon={<Linkedin size={20} />} url={userProfile.links.linkedin} editMode={isEditing} value={formData.links.linkedin} onChange={(val) => setFormData({ ...formData, links: { ...formData.links, linkedin: val } })} label="LinkedIn" />
                                <SocialLink icon={<Github size={20} />} url={userProfile.links.github} editMode={isEditing} value={formData.links.github} onChange={(val) => setFormData({ ...formData, links: { ...formData.links, github: val } })} label="GitHub" />
                                <SocialLink icon={<Globe size={20} />} url={userProfile.links.portfolio} editMode={isEditing} value={formData.links.portfolio} onChange={(val) => setFormData({ ...formData, links: { ...formData.links, portfolio: val } })} label="Portfolio" />
                                <SocialLink icon={<Twitter size={20} />} url={userProfile.links.twitter} editMode={isEditing} value={formData.links.twitter} onChange={(val) => setFormData({ ...formData, links: { ...formData.links, twitter: val } })} label="X / Twitter" />
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {isEditing ? (
                                <>
                                    <button className="btn btn-outline" onClick={handleCancel}>
                                        <X size={18} /> Cancel
                                    </button>
                                    <button className="btn btn-primary" onClick={handleSave}>
                                        <Save size={18} /> Save Changes
                                    </button>
                                </>
                            ) : (
                                <button className="btn btn-outline" onClick={() => setIsEditing(true)}>
                                    <Edit2 size={18} /> Edit Profile
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                <StatsCard title="Learning Velocity" stats={[
                    { label: "Lessons Finished", value: progress.completedLessons.length, icon: <Book size={20} /> },
                    { label: "Current Streak", value: `${progress.streak} days`, icon: <Award size={20} /> },
                    { label: "Hours Learned", value: `${progress.hoursLearned} hrs`, icon: <Clock size={20} /> },
                    { label: "Problems Solved", value: progress.solvedProblems.length, icon: <Code size={20} /> }
                ]} />

                <div className="card">
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Enrolled Path</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--bg-dark)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                        <img src={language?.icon} alt="" style={{ width: '40px', height: '40px' }} />
                        <div>
                            <p style={{ fontWeight: 700, margin: 0 }}>{language?.name || 'Python'}</p>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Progress: {progress.curriculumProgress}% Mastery</p>
                        </div>
                        <Link to="/learn" style={{ marginLeft: 'auto', background: 'var(--primary)', padding: '5px 12px', borderRadius: '50px', fontSize: '0.75rem', color: 'white', fontWeight: 700 }}>Resume</Link>
                    </div>
                </div>

                <div className="card">
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Certifications</h3>
                    <div style={{ padding: '1rem', background: 'rgba(245, 158, 11, 0.05)', borderRadius: '12px', border: '1px solid var(--accent)' }}>
                        <p style={{ fontWeight: 700, margin: 0 }}>Fundamental {language?.name || 'Java'}</p>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0.25rem 0' }}>Issued: Active Path</p>
                        <button
                            className="btn btn-primary"
                            style={{
                                width: '100%',
                                padding: '0.5rem',
                                marginTop: '0.75rem',
                                background: 'var(--accent)',
                                border: 'none',
                                fontSize: '0.8rem'
                            }}
                            onClick={() => window.open('/certificate-view', '_blank')}
                        >
                            View Digital Award
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SocialLink = ({ icon, url, editMode, value, onChange, label }) => {
    if (editMode) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'var(--bg-dark)', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', flex: '1 1 200px' }}>
                <span style={{ color: 'var(--primary)' }}>{icon}</span>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={`${label} URL`}
                    style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '0.9rem', width: '100%', outline: 'none' }}
                />
            </div>
        );
    }

    if (!url) return null;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--primary)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                padding: '0.5rem 1rem',
                background: 'rgba(99, 102, 241, 0.1)',
                borderRadius: '8px',
                transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(99, 102, 241, 0.2)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)'}
        >
            {icon} {label}
        </a>
    );
};

const StatsCard = ({ title, stats }) => (
    <div className="card">
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>{title}</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {stats.map((stat, i) => (
                <div key={i}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '0.25rem', fontSize: '0.85rem' }}>
                        {stat.icon} <span>{stat.label}</span>
                    </div>
                    <p style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>{stat.value}</p>
                </div>
            ))}
        </div>
    </div>
);

export default ProfilePage;
