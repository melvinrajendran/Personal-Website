import React from "react";
import "./BlogArticle.css";

const BlogArticle = (props) => {
  return (
    <article className="blog-post mb-5">
      <h2 className="blog-post-title mt-5 mb-3">
        <i className={props.iconClass + " me-3"}></i>
        {props.title}
      </h2>
      <p className="blog-post-meta h6 mb-4">{`${props.month.toUpperCase()} ${props.day.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })}, ${props.year}`}</p>

      <div className="article-body">
        {props.body.map((paragraph, index) => {
          return <div key={index}>{paragraph}</div>;
        })}
      </div>
    </article>
  );
};

export default BlogArticle;
