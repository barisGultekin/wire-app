import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';

import MobileNavbar from './components/MobileNavbar/MobileNavbar';
import SideNavbar from './components/SideNavbar/SideNavbar';

import AuthPage from './pages/AuthPage/AuthPage';

import Discover from './pages/Discover/Discover';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Calendar from './pages/Calendar/Calendar';

import Settings from './pages/Settings/Settings';

export function App() {
    return (
        <Router>
            <MobileNavbar />
            <SideNavbar />
            <Routes className="app-content">
                <Route path="/" element={ <Home /> } />
                <Route path="/discover" element={ <Discover /> } />
                <Route path="/profile" element={ <Profile /> } />
                <Route path="/calendar" element={ <Calendar /> } />

                <Route path="/settings" element={ <Settings /> } />

                <Route path="/auth" element={ <AuthPage /> } />
            </Routes>
        </Router>
    )
}
