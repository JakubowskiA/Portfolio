import React, { Fragment } from 'react';
// import { Link } from "react-router-dom";
// import { Route, withRouter } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Skills from './components/Skills';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <Fragment>
    <div className="header"></div>
    <div className="navbar">
    <div className="nav-name hvr-grow">
        Ariel Jakubowski
      </div>
      <div className="nav-item hvr-grow">
        <a href="#about-me">About Me</a>
      </div>
      <div className="nav-item hvr-grow">
        <a href="#projects">Projects</a>
      </div>
      {/* <div className="nav-item hvr-grow">
        Experience
      </div> */}
      <div className="nav-item hvr-grow">
        <a href="#blog">Blog</a>
      </div>
      <div className="nav-item hvr-grow">
      <a href="#skills">Skills</a>
      </div>
      <div className="nav-item hvr-grow">
      <a href="#contact">Contact</a>
      </div>

    </div>
    <AboutMe />
    <Projects />
    {/* <Resume/> */}
    <Blog />
    <Skills/>
    <Contact/>
    
    </Fragment>
  );
}

export default App;
