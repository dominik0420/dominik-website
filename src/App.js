import React, { Component } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;