import React, { Fragment } from 'react';
// import { Route, withRouter } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <Fragment>
    <div className="header"></div>
    <div className="navbar">
      <div className="nav-item">
        About Me
      </div>
      <div className="nav-item">
        Projects
      </div>
      {/* <div className="nav-item">
        Experience
      </div> */}
      <div className="nav-item">
        Skills
      </div>
      <div className="nav-item">
        Contact
      </div>

    </div>
    <AboutMe/>
    <Projects/>
    {/* <Resume/> */}
    <Skills/>
    <Contact/>
    
    </Fragment>
  );
}

export default App;
