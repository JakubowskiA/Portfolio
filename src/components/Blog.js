import React, { Fragment } from "react";
import { BlogPostCard } from "./BlogPostCard.js";
import { blogPostsData } from "./BlogPostsData.js";

function Blog() {
  return (
    <Fragment>
      <div className="blog-container" id="blog">
        {/* <div className="main-container"> */}
        <h2>Blog</h2>
        {/* <div className="main-container-content"> */}
        <div className="blog-content-container">
          {blogPostsData.map((post) => (
            <BlogPostCard
              key={blogPostsData.indexOf(post)}
              image={post.image}
              link={post.link}
              title={post.title}
              publisher={post.publisher}
            />
          ))}
        </div>
        <br />
        <br />
      </div>
      {/* </div> */}
      {/* </div> */}
    </Fragment>
  );
}

export default Blog;
