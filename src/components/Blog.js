import React, { Fragment } from 'react';

function Blog() {
    
  return (
    <Fragment>
    <div className="about-me-container">
    {/* <div className="main-container"> */}
            <h2>Blog</h2>
            
            


        {/* <div className="main-container-content"> */}
            <div className="blog-content-container">
                <div className="blog">
                    <img className="blog-pic" src="https://miro.medium.com/max/800/1*9mhBwpoDiQSrmskvTtdsrg.jpeg"/>
                    <hr/>
                    <p>Breaking Down Object-Oriented Ruby</p>
                    <p>Published by </p>
                    <a><button>See blog post</button></a>
                </div>
                <div className="blog">
                    <img className="blog-pic" src ="https://miro.medium.com/max/700/1*32oIf2aGTs9U_oA21P5NdQ.png"/>
                    <hr/>
                    <p>The universality of empathetic design</p>
                    <p>Published by </p>
                    <a><button>See blog post</button></a>
                </div>
                <div className="blog">
                    <img className="blog-pic" src ="https://miro.medium.com/max/569/1*rGHEUeykJASszC9HgxsPxA.jpeg"/>
                    <hr/>
                    <p>Visual storytelling and UX design</p>
                    <p>Published by </p>
                    <a><button>See blog post</button></a>
                </div>
            </div>
            <div className="blog-content-container">
                <div className="blog">
                    <img className="blog-pic" src ="https://miro.medium.com/max/1000/1*Fuy7_WQaJKBsGb-MSRu17Q.png"/>
                    <hr/>
                    <p>An Introduction to Machine Learning</p>
                    <p>Published by </p>
                    <a><button>See blog post</button></a>
                </div>
                <div className="blog">
                    <img className="blog-pic" src ="https://miro.medium.com/max/591/1*HoDhjtqIPFPCZUwrEl_WUA.png"/>
                    <hr/>
                    <p>Clearing Up the Cloud</p>
                    <p>Published by </p>
                    <a><button>See blog post</button></a>
                </div>
            </div>
        </div>

        
    {/* </div> */}
    {/* </div> */}
    </Fragment>
  );
}

export default Blog;
