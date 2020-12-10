import React from "react";

export const BlogPostCard = (props) => {
  return (
    <div className="blog">
      <img className="blog-pic" src={props.image} />
      <p>{props.title}</p>
      <p className="publisher">{props.publisher}</p>
      <a target="_blank" href={props.link}>
        <button>See blog post</button>
      </a>
    </div>
  );
};
