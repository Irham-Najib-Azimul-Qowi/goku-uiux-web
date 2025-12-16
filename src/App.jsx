import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectOverview from './components/ProjectOverview';
import DesignProcess from './components/DesignProcess';
import TestingResults from './components/TestingResults';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProjectOverview />
      <DesignProcess />
      <TestingResults />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
