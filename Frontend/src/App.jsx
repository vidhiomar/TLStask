// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import TechPrep from './components/TechPrep';
import DesignLab from './components/DesignLab';
import SummerIntern from './components/SummerIntern';
import MiniProjects from './components/MiniProjects';
import Footer from './components/Footer';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage'; 

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-black">
        <NavBar />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <TechPrep />
                  <DesignLab />
                  <SummerIntern />
                  <MiniProjects />
                </>
              }
            />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="*" element={<Hero />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
