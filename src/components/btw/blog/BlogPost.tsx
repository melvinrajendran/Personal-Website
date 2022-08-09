import React, { ReactElement } from 'react';
import './BlogPost.css';

export type BlogPostProps = {
  iconClass: string,
  title: string,
  month: string,
  day: number,
  year: number,
  body: Array<ReactElement>
};

const BlogPost = ({
  iconClass,
  title,
  month,
  day,
  year,
  body
}: BlogPostProps) => {
  return (
    <article className="blog-post mb-5">
      <h2 className="blog-post-title mt-5 mb-3">
        <i className={`${iconClass} me-3`} />
        {title}
      </h2>
      <p className="blog-post-meta h6 mb-4">
        {`${month.toUpperCase()} ${day.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}, ${year}`}
      </p>
      <div className="blog-post-body">
        {body.map((paragraph) => {
          return <>
            {paragraph}
          </>;
        })}
      </div>
    </article>
  );
};

export default BlogPost;
