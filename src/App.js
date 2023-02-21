import React, { Component } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        {/* external pdf? or a cv page */}
        <Contact />
        <hr class="solid"></hr>
        <Footer />
      </div>
    );
  }
}

export default App;