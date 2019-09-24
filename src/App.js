import React, { Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';

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
        Resume
      </div>
      <div className="nav-item">
        Projects
      </div>

    </div>

    
    </Fragment>
  );
}

export default App;
