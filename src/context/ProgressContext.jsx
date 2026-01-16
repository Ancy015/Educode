import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
    const [progress, setProgress] = useState(() => {
        try {
            const saved = localStorage.getItem('educode_progress');
            return saved ? JSON.parse(saved) : {
                completedLessons: [],
                solvedProblems: [],
                hoursLearned: 14.5,
                lastActivityDate: new Date().toISOString().split('T')[0],
                streak: 7,
                longestStreak: 12,
                curriculumProgress: 12,
            };
        } catch (e) {
            console.error('Error loading progress from localStorage', e);
            return {
                completedLessons: [],
                solvedProblems: [],
                hoursLearned: 14.5,
                lastActivityDate: new Date().toISOString().split('T')[0],
                streak: 7,
                longestStreak: 12,
                curriculumProgress: 12,
            };
        }
    });

    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        try {
            const saved = localStorage.getItem('educode_selected_language');
            return saved ? JSON.parse(saved) : null;
        } catch (e) {
            console.error('Error loading language from localStorage', e);
            return null;
        }
    });

    const [userProfile, setUserProfile] = useState(() => {
        try {
            const saved = localStorage.getItem('educode_user_profile');
            return saved ? JSON.parse(saved) : {
                name: 'EduCode Student',
                bio: 'Passionate learner exploring the world of code. | Seeking mastery in multiple languages.',
                profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop',
                links: {
                    linkedin: '',
                    github: '',
                    portfolio: '',
                    twitter: ''
                }
            };
        } catch {
            return {
                name: 'EduCode Student',
                bio: 'Passionate learner exploring the world of code.',
                profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop',
                links: { linkedin: '', github: '', portfolio: '', twitter: '' }
            };
        }
    });

    useEffect(() => {
        localStorage.setItem('educode_progress', JSON.stringify(progress));
    }, [progress]);

    useEffect(() => {
        if (selectedLanguage) {
            localStorage.setItem('educode_selected_language', JSON.stringify(selectedLanguage));
        }
    }, [selectedLanguage]);

    useEffect(() => {
        localStorage.setItem('educode_user_profile', JSON.stringify(userProfile));
    }, [userProfile]);

    const setLanguage = (lang) => {
        setSelectedLanguage(lang);
    };

    const updateProfile = (newData) => {
        setUserProfile(prev => ({ ...prev, ...newData }));
    };

    const updateStreak = () => {
        const today = new Date().toISOString().split('T')[0];
        if (progress.lastActivityDate !== today) {
            setProgress(prev => {
                const lastDate = new Date(prev.lastActivityDate);
                const diff = Math.floor((new Date(today) - lastDate) / (1000 * 60 * 60 * 24));

                let newStreak = prev.streak;
                if (diff === 1) {
                    newStreak += 1;
                } else if (diff > 1) {
                    newStreak = 1;
                }

                return {
                    ...prev,
                    streak: newStreak,
                    longestStreak: Math.max(newStreak, prev.longestStreak),
                    lastActivityDate: today
                };
            });
        }
    };

    const completeLesson = (lessonId) => {
        if (!progress.completedLessons.includes(lessonId)) {
            setProgress(prev => {
                const newCompleted = [...prev.completedLessons, lessonId];
                return {
                    ...prev,
                    completedLessons: newCompleted,
                    curriculumProgress: Math.min(100, Math.round((newCompleted.length / 20) * 100))
                };
            });
            updateStreak();
        }
    };

    const solveProblem = (problemId) => {
        if (!progress.solvedProblems.includes(problemId)) {
            setProgress(prev => ({
                ...prev,
                solvedProblems: [...prev.solvedProblems, problemId],
                hoursLearned: prev.hoursLearned + 0.5
            }));
            updateStreak();
        }
    };

    return (
        <ProgressContext.Provider value={{
            progress,
            completeLesson,
            solveProblem,
            selectedLanguage,
            setLanguage,
            userProfile,
            updateProfile
        }}>
            {children}
        </ProgressContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProgress = () => useContext(ProgressContext);
