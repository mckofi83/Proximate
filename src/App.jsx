import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Splash from './pages/Splash';
import Onboarding from './pages/Onboarding';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

export default function App() {
  return (
    <div className="app-root">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* quick dev nav (visible on wide screens) */}
      <nav className="dev-nav" aria-hidden>
        <Link to="/">Splash</Link> | <Link to="/onboarding">Onboarding</Link> | <Link to="/signup">Signup</Link> | <Link to="/dashboard">Dashboard</Link>
      </nav>
    </div>
  );
}