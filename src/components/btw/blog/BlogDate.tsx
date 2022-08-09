import React from 'react';

type BlogDateProps = {
  month: string,
  year: number
}

const BlogDate = ({
  month,
  year
}: BlogDateProps) => {
  return (
    <p className="py-4 mb-4 h6 border-top border-bottom">
      <i className="far fa-calendar me-3" />
      {month.toUpperCase()} / {year}
    </p>
  );
};

export default BlogDate;
