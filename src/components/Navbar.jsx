import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, User, LogOut, Menu } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

const Navbar = ({ user }) => {
    const { userProfile } = useProgress();

    return (
        <nav className="glass" style={{
            position: 'sticky',
            top: '1rem',
            margin: '1rem auto',
            width: 'calc(100% - 2rem)',
            zIndex: 1000,
            padding: '0.75rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1.25rem', color: 'var(--primary)' }}>
                <div style={{ background: 'var(--primary)', padding: '0.4rem', borderRadius: '8px', color: 'white' }}>
                    <Code2 size={24} />
                </div>
                <span>EduCode</span>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                {user ? (
                    <>
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        <Link to="/learn" className="nav-link">Learn</Link>
                        <Link to="/practice" className="nav-link">Practice</Link>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem' }}>
                            <Link to="/profile" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                                <span style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '0.9rem' }} className="nav-username">{userProfile?.name}</span>
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-elevated)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    border: '2px solid var(--border)'
                                }}>
                                    {userProfile?.profilePic ? (
                                        <img src={userProfile.profilePic} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <User size={18} />
                                    )}
                                </div>
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Login</Link>
                        <Link to="/register" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Get Started</Link>
                    </>
                )}
            </div>

            <style>{`
        .nav-link {
          font-weight: 500;
          color: var(--text-muted);
          transition: var(--transition);
        }
        .nav-link:hover {
          color: var(--primary);
        }
        @media (max-width: 768px) {
           .nav-link, .nav-username { display: none; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
