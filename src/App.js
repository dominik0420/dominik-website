import React, { useState } from 'react';

import about from '../src/img/about.png'
import contact from '../src/img/contact.png'
import music from '../src/img/music.png'
import projects from '../src/img/projects.png'
import resume from '../src/img/resume.png'


import './index.css';

//need a CV link page
//need spotify link page
//github display

const App = () => {
  const [open, setOpen] = useState(false)


  return (
    <div className="app">
      <h1>Hi, I'm Dominik, also known as ONIROZ</h1>
      <div className = 'menu-container'>
        <div className = 'menu-trigger' onClick = {() => {setOpen(!open)}}>
          <button className='who-am-i'> Who am I? </button>
        </div>

        <div className = {`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3> Zehong Li (Dominik / ONIROZ) <br/> <span> UCSD Undergrad / Software Engineer / Web Designer/ Music Producer </span> </h3>
          <ul>
            <DropdownItem img = {about} text = {"My Info"}/>
            <DropdownItem img = {projects} text = {"My Projects"}/>
            <DropdownItem img = {music} text = {"My Music"}/>
            <DropdownItem img = {resume} text = {"My Resume"}/>
            <DropdownItem img = {contact} text = {"My Contact"}/>
          </ul>
        </div>
      </div>
    </div>
  );
};

function DropdownItem(props){
  return(
    <li className='dropdownItem'>
      <img src = {props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default App;