import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

// imports
import Navbar from './components/header/Navbar';
import Hero from './components/main/Hero';
import About from './components/main/About';
import Skills from './components/main/Skills';
import Projects from './components/main/Projects';
import IndividualProj from './components/main/IndividualProj';
import Contact from './components/main/Contact';
import Footer from './components/footer/Footer';

export default class App extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    axios.get(`./data.json`)
      .then(res => {
        const projects = res.data;
        this.setState({ projects });
      })
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
            <Switch>
              <Route exact path="/" render={() => <Projects projects={this.state.projects} />} />
              <Route path="/projects/:id" render={(props) => <IndividualProj projects={this.state.projects} />} />
            </Switch>
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
