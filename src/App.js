import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Music } from './components/Music';
import { Projects } from './components/Projects';
import { PdfViewer } from './components/PdfViewer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* TL;DR section of a card made with VISME */}
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Music />
              <hr class="solid"></hr>
              <Projects />
              <hr class="solid"></hr>
              <PdfViewer />
              <hr class="solid"></hr>
              <Contact />
              <hr class="solid"></hr>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}


export default App;