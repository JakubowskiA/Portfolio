import React, { Fragment } from "react";

export const BlogPostCard = (props) => {
  return (
    <div className="blog">
      <img className="blog-pic" src={props.image} />
      <hr />
      <p>{props.title}</p>
      <p className="publisher">{props.publisher}</p>
      <a href={props.link}>
        <button>See blog post</button>
      </a>
    </div>
  );
};
