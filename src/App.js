import React, { useState } from 'react';

import about from '../src/img/about.png'
import contact from '../src/img/contact.png'
import music from '../src/img/music.png'
import projects from '../src/img/projects.png'
import resume from '../src/img/resume.png'

import './index.css';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (section) => {
    document.getElementById(section).scrollIntoView({behavior: "smooth"});
  }

  return (
    <div className="app">
      <div className="menu-container">
        <div className="heading-container">
          <h1>Hi, I'm Dominik, also known as ONIROZ</h1>
          <div
            className="menu-trigger"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="who-am-i">Who am I?</button>
          </div>
        </div>

        <div
          className={`dropdown-menu ${open ? "active" : "inactive"}`}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <h3>
            Zehong Li (Dominik / ONIROZ) <br />
            <span>UCSD Undergrad / Software Engineer / Web Designer/ Music Producer</span>
          </h3>
          <ul>
            <DropdownItem img={about} text={"My Info"} onClick={() => handleLinkClick("about-section")} />
            <DropdownItem img={projects} text={"My Projects"} onClick={() => handleLinkClick("projects-section")} />
            <DropdownItem img={music} text={"My Music"} onClick={() => handleLinkClick("music-section")} />
            <DropdownItem img={resume} text={"My Resume"} onClick={() => handleLinkClick("resume-section")} />
            <DropdownItem img={contact} text={"My Contact"} onClick={() => handleLinkClick("contact-section")} />
          </ul>
        </div>
      </div>

      <section id="about-section" className="section">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
      </section>
      <section id="projects-section" className="section">
        <h2>Projects</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
      </section>
      <section id="music-section" className="section">
        <h2>Music</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
      </section>
      <section id="resume-section" className="section">
        <h2>Resume</h2>
        <p>Lorem ipsum dolor sitamet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
      </section>
      <section id="contact-section" className="section">
        <h2>Contact</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
      </section>

      <div className="footer">
        <p>&copy; 2023 Zehong Li</p>
      </div>
    </div>
  );
};

function DropdownItem(props){
  return(
    <li className='dropdownItem' onClick={props.onClick}>
      <img src={props.img} alt={props.text} />
      <a>{props.text}</a>
    </li>
    );
}

export default App;