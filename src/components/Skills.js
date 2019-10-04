import React, { Fragment } from 'react';

function Skills() {
  return (
    <div className="centered brl">
        <h2>Skills</h2>

        <div >
            <div className="skill-container">
            <h3> HTML and CSS</h3>
            <hr/>
                <div className="skill-icon-group">
                    <div className="skill hvr-grow">
                        <img className="skill-icon" src="icons/html5.png"/>
                        <p>HTML5</p>
                    </div>
                    <div className="skill hvr-grow">
                        <img className="skill-icon" src="icons/jsx.png"/>
                        <p>JSX</p>
                    </div>
                    <div className="skill hvr-grow">
                        <img className="skill-icon" src="icons/css3.png"/>
                        <p>CSS3</p>
                    </div>
                    <div className="skill hvr-grow">
                        <img className="skill-icon" src="icons/bootstrap.png"/>
                        <p>Bootstrap</p>
                    </div>
                </div>
            </div>
        
            <div className="skill-container">
            <h3>Frontend</h3>
            <hr/>
            <div className="skill-icon-group">
                    <div className="skill hvr-grow">
                        <img className="skill-icon" src="icons/javascript.png"/>
                        <p>JavaScript</p>
                    </div>
                    <div className="skill hvr-grow">
                        <img className="skill-icon" src="icons/react.png"/>
                        <p>React</p>
                    </div>
                    <div className="skill hvr-grow">
                        <img className="skill-icon" src="icons/semantic.png"/>
                        <p>Semantic UI</p>
                    </div>
                </div>
            </div>
        
            <div className="skill-container">
            <h3>Backend</h3>
            <hr/>
            <div className="skill-icon-group">
                    <div className="skill hvr-grow">
                        <img className="skill-icon" src="icons/ruby.png"/>
                        <p>Ruby</p>
                    </div>
                    <div className="skill hvr-grow">
                        <img className="skill-icon" src="icons/rails.png"/>
                        <p>Rails</p>
                    </div>
                    <div className="skill hvr-grow">
                        <img className="skill-icon" src="icons/postgresql.png"/>
                        <p>PostgreSQL</p>
                    </div>
                    <div className="skill hvr-grow">
                        <img className="skill-icon" src="icons/sqlite.png"/>
                        <p>SQLite</p>
                    </div>
                </div>
            </div>
        
            <div className="skill-container">
            <h3>Other</h3>
            <hr/>
            <div className="skill-icon-group">
                    <div className="skill hvr-grow">
                        <img className="skill-icon" src="icons/github.png"/>
                        <p>Git</p>
                    </div>
                    <div className="skill hvr-grow">
                        <img className="skill-icon" src="icons/heroku.png"/>
                        <p>Heroku</p>
                    </div>
                    {/* <div className="skill hvr-grow">
                        <img className="skill-icon" src="icons/semantic.png"/>
                        <p>Semantic UI</p>
                    </div> */}
                </div>
            </div>
        </div>

    </div>
  );
}

export default Skills;
