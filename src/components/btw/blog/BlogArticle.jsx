import React from "react";
import "./BlogArticle.css";

function BlogArticle(props) {
  return (
    <article className="blog-post">
      <h2 className="blog-post-title mt-5 mb-3">
        <i className={props.iconClass + " me-3"}></i>
        {props.title}
      </h2>
      <p className="blog-post-meta h6 mb-4">{props.date}</p>

      <div className="article-body">{props.body}</div>
    </article>
  );
}

export default BlogArticle;
