import React from 'react';

const Certificate = ({ user, language }) => {
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div style={{
            minHeight: '100vh',
            background: '#050505',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '1000px',
                aspectRatio: '1.414',
                background: 'white',
                padding: '60px',
                position: 'relative',
                color: '#1a1a1a',
                textAlign: 'center',
                border: '20px solid #1a1a1a',
                outline: '2px solid #f59e0b',
                outlineOffset: '-40px'
            }}>
                {/* Certificate Content */}
                <div style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h4 style={{ textTransform: 'uppercase', tracking: '0.2em', color: '#6366f1', marginBottom: '1rem', fontWeight: 700 }}>Certificate of Completion</h4>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem', fontFamily: 'serif' }}>EduCode Academy</h1>

                    <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>This is to certify that</p>

                    <h2 style={{ fontSize: '3rem', borderBottom: '2px solid #1a1a1a', display: 'inline-block', padding: '0 4rem 0.5rem', marginBottom: '2rem', fontFamily: 'serif' }}>
                        {user?.name || 'Academic Developer'}
                    </h2>

                    <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
                        has successfully completed the comprehensive course on
                        <strong style={{ display: 'block', fontSize: '1.75rem', marginTop: '0.5rem' }}>Fundamental {language?.name || 'Python'} Programming</strong>
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto', padding: '0 60px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ borderBottom: '1px solid #1a1a1a', width: '200px', marginBottom: '0.5rem' }}></div>
                            <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>DIRECTOR</p>
                        </div>
                        <div style={{ transform: 'translateY(-20px)' }}>
                            <div style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                border: '4px double #f59e0b',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#f59e0b',
                                fontWeight: 900,
                                fontSize: '1.2rem'
                            }}>
                                PLATINUM
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontWeight: 700, borderBottom: '1px solid #1a1a1a', width: '200px', marginBottom: '0.5rem' }}>{date}</p>
                            <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>DATE</p>
                        </div>
                    </div>
                </div>

                {/* Decorative corner */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '150px', height: '150px', background: 'linear-gradient(135deg, #6366f1 0%, transparent 50%)', opacity: 0.1 }}></div>
            </div>
        </div>
    );
};

export default Certificate;
