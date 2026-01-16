import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LANGUAGES } from '../../data/mockData';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Check, Info, Search } from 'lucide-react';

const LanguageSelect = ({ onSelect }) => {
    const [selectedId, setSelectedId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleContinue = () => {
        if (selectedId) {
            const selectedLang = LANGUAGES.find(l => l.id === selectedId);
            onSelect(selectedLang);
            navigate('/dashboard');
        }
    };

    const filteredLanguages = LANGUAGES.filter(lang =>
        lang.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container" style={{ padding: '60px 0 100px', maxWidth: '1200px' }}>
            <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <Motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}
                >
                    Choose Your Path
                </Motion.h1>
                <Motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}
                >
                    Select your preferred programming language to customize your learning experience. You can always change this later.
                </Motion.p>
            </header>

            {/* Search Bar */}
            <div style={{ position: 'relative', maxWidth: '500px', margin: '0 auto 3rem' }}>
                <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
                <input
                    type="text"
                    placeholder="Search languages..."
                    style={{
                        width: '100%',
                        padding: '1rem 1rem 1rem 3rem',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border)',
                        borderRadius: '12px',
                        color: 'white',
                        fontSize: '1rem'
                    }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '1.5rem',
                marginBottom: '4rem'
            }}>
                <AnimatePresence>
                    {filteredLanguages.map((lang) => (
                        <Motion.div
                            layout
                            key={lang.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)' }}
                            onClick={() => setSelectedId(lang.id)}
                            className="card"
                            style={{
                                cursor: 'pointer',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '2.5rem 1.5rem',
                                border: selectedId === lang.id ? `2px solid var(--primary)` : '1px solid var(--border)',
                                background: selectedId === lang.id ? 'rgba(99, 102, 241, 0.05)' : 'var(--bg-surface)',
                                transition: 'all 0.2s ease',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Tags */}
                            {lang.tag && (
                                <span style={{
                                    position: 'absolute',
                                    top: '0.75rem',
                                    right: '0.75rem',
                                    fontSize: '0.7rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    padding: '2px 8px',
                                    borderRadius: '100px',
                                    background: lang.tag === 'Beginner' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                    color: lang.tag === 'Beginner' ? 'var(--secondary)' : 'var(--danger)',
                                    border: `1px solid ${lang.tag === 'Beginner' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`
                                }}>
                                    {lang.tag}
                                </span>
                            )}

                            {/* Selection Indicator */}
                            {selectedId === lang.id && (
                                <div style={{
                                    position: 'absolute',
                                    top: '0.75rem',
                                    left: '0.75rem',
                                    background: 'var(--primary)',
                                    borderRadius: '50%',
                                    width: '24px',
                                    height: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Check size={16} color="white" strokeWidth={3} />
                                </div>
                            )}

                            {/* Logo */}
                            <div style={{ width: '64px', height: '64px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img
                                    src={lang.icon}
                                    alt={lang.name}
                                    style={{
                                        maxWidth: '120%',
                                        maxHeight: '120%',
                                        filter: selectedId === lang.id ? 'none' : 'grayscale(0.3) opacity(0.8)'
                                    }}
                                />
                            </div>

                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{lang.name}</h3>

                            <div className="tooltip-container" style={{ position: 'relative' }}>
                                <Info size={14} style={{ color: 'var(--text-muted)' }} />
                                <span className="tooltip-text">{lang.description}</span>
                            </div>
                        </Motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Floating Action Header */}
            <Motion.div
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 'calc(100% - 4rem)',
                    maxWidth: '800px',
                    zIndex: 100,
                    display: selectedId ? 'flex' : 'none',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 2rem',
                    borderRadius: '16px',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--primary)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    backdropFilter: 'blur(10px)'
                }}
                initial={{ y: 100 }}
                animate={{ y: selectedId ? 0 : 100 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img
                        src={LANGUAGES.find(l => l.id === selectedId)?.icon}
                        alt="selected"
                        style={{ width: '32px', height: '32px' }}
                    />
                    <span style={{ fontWeight: 600 }}>Selected: {LANGUAGES.find(l => l.id === selectedId)?.name}</span>
                </div>
                <button
                    onClick={handleContinue}
                    className="btn btn-primary"
                    style={{ padding: '0.75rem 2.5rem' }}
                >
                    Confirm selection
                </button>
            </Motion.div>

            <style>{`
        .tooltip-container .tooltip-text {
          visibility: hidden;
          width: 200px;
          background-color: var(--bg-elevated);
          color: #fff;
          text-align: center;
          border-radius: 6px;
          padding: 8px;
          position: absolute;
          z-index: 1;
          bottom: 125%;
          left: 50%;
          margin-left: -100px;
          opacity: 0;
          transition: opacity 0.3s;
          font-size: 0.75rem;
          border: 1px solid var(--border);
          pointer-events: none;
        }

        .tooltip-container:hover .tooltip-text {
          visibility: visible;
          opacity: 1;
        }

        @media (max-width: 600px) {
           .container { padding: 40px 1.5rem; }
           h1 { fontSize: 2rem !important; }
        }
      `}</style>
        </div>
    );
};

export default LanguageSelect;
