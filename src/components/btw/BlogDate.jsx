import React from "react";

function BlogDate(props) {
  return (
    <p className="py-4 mb-4 h6 border-top border-bottom">
      <i className="far fa-calendar me-3"></i>
      {props.month.toUpperCase()} / {props.year}
    </p>
  );
}

export default BlogDate;
