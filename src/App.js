import React, { Fragment } from 'react';
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
      <div className="nav-item hvr-grow">
        About Me
      </div>
      <div className="nav-item hvr-grow">
        Projects
      </div>
      {/* <div className="nav-item hvr-grow">
        Experience
      </div> */}
      <div className="nav-item hvr-grow">
        Blog
      </div>
      <div className="nav-item hvr-grow">
        Skills
      </div>
      <div className="nav-item hvr-grow">
        Contact
      </div>

    </div>
    <AboutMe/>
    <Projects/>
    {/* <Resume/> */}
    <Blog />
    <Skills/>
    <Contact/>
    
    </Fragment>
  );
}

export default App;
