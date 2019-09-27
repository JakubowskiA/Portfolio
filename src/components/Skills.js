import React, { Fragment } from 'react';

function Skills() {
  return (
    <div>
        <h2>Skills</h2>

        <div className="">
            <div className="skill-container">
            <h3>HTML</h3>
            <hr/>
                <div className="skill-icon-group">
                    <img className="skill-icon" src="icons/html5.png"/>
                </div>
            </div>
        </div>

        <div className="">
            <div className="skill-container">
            <h3>CSS</h3>
            <hr/>
                <div className="skill-icon-group">
                    <img className="skill-icon"/>
                </div>
            </div>
        </div>

        <div className="">
            <div className="skill-container">
            <h3>Frontend</h3>
            <hr/>
                <div className="skill-icon-group">
                    <img className="skill-icon"/>
                </div>
            </div>
        </div>

        <div className="">
            <div className="skill-container">
            <h3>Backend</h3>
            <hr/>
                <div className="skill-icon-group">
                    <img className="skill-icon"/>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Skills;
