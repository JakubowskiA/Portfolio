import React, { Fragment } from "react";

function Skills() {
  return (
    <div className="centered brl" id="skills">
      <h2>Skills</h2>
      <div className="skill-container">
        <h3>Frontend</h3>
        <hr />
        <div className="skill-icon-group">
          <div className="skill hvr-grow">
            <img className="skill-icon" src="icons/javascript.png" />
            <p className="p-skill">JavaScript</p>
          </div>
          <div className="skill hvr-grow">
            <img className="skill-icon" src="icons/react.png" />
            <p className="p-skill">React</p>
          </div>
          <div className="skill hvr-grow">
            <img className="skill-icon" src="icons/redux.png" />
            <p className="p-skill">Redux</p>
          </div>
          <div className="skill hvr-grow">
            <img className="skill-icon" src="icons/react-router.png" />
            <p className="p-skill">React Router</p>
          </div>
          <div className="skill hvr-grow">
            <img className="skill-icon" src="icons/semantic.png" />
            <p className="p-skill">Semantic UI</p>
          </div>
        </div>
      </div>

      <div className="skill-container">
        <h3>Backend</h3>
        <hr />
        <div className="skill-icon-group">
          <div className="skill hvr-grow">
            <img className="skill-icon" src="icons/ruby.png" />
            <p className="p-skill">Ruby</p>
          </div>
          <div className="skill hvr-grow">
            <img className="skill-icon" src="icons/rails.png" />
            <p className="p-skill">Rails</p>
          </div>
          <div className="skill hvr-grow">
            <img className="skill-icon" src="icons/php.png" />
            <p className="p-skill">PHP</p>
          </div>
          <div className="skill hvr-grow">
              <img className="skill-icon" src="icons/graphql.png" />
              <p className="p-skill">GraphQL</p>
            </div>
          <div className="skill hvr-grow">
            <img className="skill-icon" src="icons/java.png" />
            <p className="p-skill">Java</p>
          </div>
        </div>
      </div>

      <div>
        <div className="skill-container">
          <h3> HTML and CSS</h3>
          <hr />
          <div className="skill-icon-group">
          <div className="skill hvr-grow">
              <img className="skill-icon" src="icons/sass.png" />
              <p className="p-skill">Sass</p>
            </div>
            <div className="skill hvr-grow">
              <img className="skill-icon" src="icons/html5.png" />
              <p className="p-skill">HTML5</p>
            </div>
            <div className="skill hvr-grow">
              <img className="skill-icon" src="icons/jsx.png" />
              <p className="p-skill">JSX</p>
            </div>
            <div className="skill hvr-grow">
              <img className="skill-icon" src="icons/css3.png" />
              <p className="p-skill">CSS3</p>
            </div>
            <div className="skill hvr-grow">
              <img className="skill-icon" src="icons/bootstrap.png" />
              <p className="p-skill">Bootstrap</p>
            </div>
          </div>
        </div>

        <div className="skill-container">
          <h3>Other</h3>
          <hr />
          <div className="skill-icon-group">
            <div className="skill hvr-grow">
              <img className="skill-icon" src="icons/github.png" />
              <p className="p-skill">Git</p>
            </div>
            <div className="skill hvr-grow">
              <img className="skill-icon" src="icons/postgresql.png" />
              <p className="p-skill">PostgreSQL</p>
            </div>
            <div className="skill hvr-grow">
              <img className="skill-icon" src="icons/sqlite.png" />
              <p className="p-skill">SQLite</p>
            </div>
            <div className="skill hvr-grow">
              <img className="skill-icon" src="icons/azure.png" />
              <p className="p-skill">Azure</p>
            </div>
            <div className="skill hvr-grow">
              <img className="skill-icon" src="icons/heroku.png" />
              <p className="p-skill">Heroku</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
