import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/Landing/LandingPage';
import LoginPage from './pages/Auth/LoginPage';
import LanguageSelect from './pages/Auth/LanguageSelect';
import Dashboard from './pages/Dashboard/Dashboard';
import LearnPage from './pages/Learn/LearnPage';
import LessonView from './pages/Learn/LessonView';
import QuizRunner from './pages/Learn/QuizRunner';
import PracticeArena from './pages/Practice/PracticeArena';
import ProfilePage from './pages/Profile/ProfilePage';
import Certificate from './pages/Profile/Certificate';

import { ProgressProvider, useProgress } from './context/ProgressContext';

function AppContent() {
  const [user, setUser] = useState(null);
  const { selectedLanguage, setLanguage } = useProgress();

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Hide Navbar on certificate view */}
        <Routes>
          <Route path="/certificate-view" element={null} />
          <Route path="*" element={<Navbar user={user} />} />
        </Routes>

        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/register" element={<LoginPage onLogin={handleLogin} />} />

            <Route
              path="/select-language"
              element={user ? <LanguageSelect onSelect={handleLanguageSelect} /> : <Navigate to="/login" />}
            />

            <Route
              path="/dashboard"
              element={user ? <Dashboard user={user} language={selectedLanguage} /> : <Navigate to="/login" />}
            />

            <Route
              path="/learn"
              element={user ? <LearnPage /> : <Navigate to="/login" />}
            />

            <Route
              path="/lesson/:id"
              element={user ? <LessonView /> : <Navigate to="/login" />}
            />

            <Route
              path="/quiz/:id"
              element={user ? <QuizRunner /> : <Navigate to="/login" />}
            />

            <Route
              path="/practice"
              element={user ? <PracticeArena language={selectedLanguage} /> : <Navigate to="/login" />}
            />
            <Route
              path="/practice/:id"
              element={user ? <PracticeArena language={selectedLanguage} /> : <Navigate to="/login" />}
            />

            <Route
              path="/profile"
              element={user ? <ProfilePage /> : <Navigate to="/login" />}
            />

            <Route
              path="/certificate-view"
              element={<Certificate user={user} language={selectedLanguage} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function App() {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  );
}

export default App;
