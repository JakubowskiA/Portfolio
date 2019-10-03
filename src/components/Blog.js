import React, { Fragment } from 'react';

function Blog() {
  return (
    <Fragment>
    <div className="about-me-container">
    <div className="main-container">
            <h2>Blog</h2>
        <div className="main-container-content">
            <div className="blog-content-container">
                <div className="blog">
                    <img className="blog-pic" src="https://miro.medium.com/max/800/1*9mhBwpoDiQSrmskvTtdsrg.jpeg"/>
                    <hr/>
                    <p>Breaking Down Object-Oriented Ruby</p>
                </div>
                <div className="blog">
                    <img src =""/>
                    <hr/>
                    <p></p>
                </div>
                <div className="blog">
                    <img src =""/>
                    <hr/>
                    <p></p>
                </div>
                <div className="blog">
                    <img src =""/>
                    <hr/>
                    <p></p>
                </div>
                <div className="blog">
                    <img src =""/>
                    <hr/>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </Fragment>
  );
}

export default Blog;
