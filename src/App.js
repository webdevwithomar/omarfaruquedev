import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

// imports
import Navbar from './components/header/Navbar';
import Hero from './components/main/Hero';
import About from './components/main/About';
import Skills from './components/main/Skills';
import Projects from './components/main/Projects';
import Contact from './components/main/Contact';
import Footer from './components/footer/Footer';

// google analytics
import ReactGA from 'react-ga';

export default class App extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-153660643-1')
    // to report page view
    ReactGA.pageview(window.location.pathname)
  }

  render() {
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    )
  }
}
