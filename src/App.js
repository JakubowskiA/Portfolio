import React, { Fragment } from "react";
import "./styles/style.css";
// import { Link } from "react-router-dom";
// import { Route, withRouter } from 'react-router-dom';
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

// import './App.css';

function App() {
  return (
    <Fragment>
      <nav>
        <div className="nav-name">Ariel Jakubowski</div>
        <div className="nav-item hvr-grow">
          <a href="#about-me">About Me</a>
        </div>
        <div className="nav-item hvr-grow">
          <a href="#experience">Experience</a>
        </div>
        <div className="nav-item hvr-grow">
          <a href="#projects">Projects</a>
        </div>
        <div className="nav-item hvr-grow">
          <a href="#blog">Blog</a>
        </div>
        <div className="nav-item hvr-grow">
          <a href="#skills">Skills</a>
        </div>
        <div className="nav-item hvr-grow">
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <AboutMe />
      <Experience />
      <Projects />
      <Blog />
      <Skills />
      <Contact />
    </Fragment>
  );
}

export default App;
