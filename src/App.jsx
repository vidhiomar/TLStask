import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import TechPrep from './components/TechPrep';
import DesignLab from './components/DesignLab';
import SummerIntern from './components/SummerIntern';
import MiniProjects from './components/MiniProjects';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <NavBar />
      <Hero />
      <TechPrep/>
      <DesignLab/>
      <SummerIntern/>
      <MiniProjects/>
      <Footer/>
    </div>
  );
}
