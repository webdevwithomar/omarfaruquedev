import React from 'react';
import './App.scss';

// imports
import Navbar from './components/header/Navbar';
import Hero from './components/main/Hero';
import About from './components/main/About';
import Skills from './components/main/Skills';
import Projects from './components/main/Projects';
import Contact from './components/main/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
