import React, { Fragment } from 'react';

function Blog() {
    
  return (
    <Fragment>
    <div className="blog-container" id="blog">
    {/* <div className="main-container"> */}
            <h2>Blog</h2>
            
        {/* <div className="main-container-content"> */}
            <div className="blog-content-container">
                <div className="blog">
                    <img className="blog-pic" src="https://miro.medium.com/max/800/1*9mhBwpoDiQSrmskvTtdsrg.jpeg"/>
                    <hr/>
                    <p>Breaking Down Object-Oriented Ruby</p>
                    <p className="publisher">Published by Better Programming</p>
                    <a href="https://medium.com/better-programming/breaking-down-object-oriented-ruby-cb0a79e55a70"><button>See blog post</button></a>
                </div>
                <div className="blog">
                    <img className="blog-pic" src ="https://miro.medium.com/max/700/1*32oIf2aGTs9U_oA21P5NdQ.png"/>
                    <hr/>
                    <p>The universality of empathetic design</p>
                    <p className="publisher">Published by UX Collective</p>
                    <a href="https://uxdesign.cc/the-universality-of-empathetic-design-bb6b562001c5"><button>See blog post</button></a>
                </div>
                <div className="blog">
                    <img className="blog-pic" src ="https://miro.medium.com/max/569/1*rGHEUeykJASszC9HgxsPxA.jpeg"/>
                    <hr/>
                    <p>Visual storytelling and UX design</p>
                    <p className="publisher">Published by UX Collective</p>
                    <a href="https://uxdesign.cc/visual-storytelling-and-ux-design-eebd394524d3"><button>See blog post</button></a>
                </div>
            </div>
            <div className="blog-content-container">
                <div className="blog">
                    <img className="blog-pic" src ="https://miro.medium.com/max/1000/1*Fuy7_WQaJKBsGb-MSRu17Q.png"/>
                    <hr/>
                    <p>An Introduction to Machine Learning</p>
                    <p className="publisher">Published by Better Programming</p>
                    <a href="https://medium.com/better-programming/an-introduction-to-machine-learning-a4a6506c4bc7"><button>See blog post</button></a>
                </div>
                <div className="blog">
                    <img className="blog-pic" src ="https://miro.medium.com/max/591/1*HoDhjtqIPFPCZUwrEl_WUA.png"/>
                    <hr/>
                    <p>Clearing Up the Cloud</p>
                    <p className="publisher">Published independently </p>
                    <a href="https://medium.com/@arieljakubowski/clearing-up-the-cloud-9f8aacc609b5"><button>See blog post</button></a>
                </div>
                <div className="blog">
                    <img className="blog-pic" src ="https://cdn.lynda.com/course/504266/504266-636924000532723800-16x9.jpg"/>
                    <hr/>
                    <p>A Quick Guide to CSS</p>
                    <p className="publisher">Published independently </p>
                    <a href="https://medium.com/@arieljakubowski/a-quick-guide-to-css-df5de9f9a178"><button>See blog post</button></a>
                </div>
            <div className="blog-content-container">
                <div className="blog">
                    <img className="blog-pic" src ="https://miro.medium.com/max/980/1*dgEOd9EmJ-wvmjhZ7fTFNw.png"/>
                    <hr/>
                    <p>Popular JavaScript Array Methods</p>
                    <p className="publisher">Published by Better Programming</p>
                    <a href="https://medium.com/better-programming/popular-javascript-array-methods-ca4d24c9243f"><button>See blog post</button></a>
                </div>
                {/* <div className="blog">
                    <img className="blog-pic" src ="https://miro.medium.com/max/591/1*HoDhjtqIPFPCZUwrEl_WUA.png"/>
                    <hr/>
                    <p>Clearing Up the Cloud</p>
                    <p className="publisher">Published independently </p>
                    <a href="https://medium.com/@arieljakubowski/clearing-up-the-cloud-9f8aacc609b5"><button>See blog post</button></a>
                </div>
                <div className="blog">
                    <img className="blog-pic" src ="https://cdn.lynda.com/course/504266/504266-636924000532723800-16x9.jpg"/>
                    <hr/>
                    <p>A Quick Guide to CSS</p>
                    <p className="publisher">Published independently </p>
                    <a href="https://medium.com/@arieljakubowski/a-quick-guide-to-css-df5de9f9a178"><button>See blog post</button></a>
                </div> */}
            </div>
            <br/><br/>
        </div>

        
    {/* </div> */}
    {/* </div> */}
    </Fragment>
  );
}

export default Blog;
