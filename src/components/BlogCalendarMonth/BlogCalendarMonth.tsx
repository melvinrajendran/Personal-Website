import React from 'react';

type BlogCalendarMonthProps = {
  month: string;
  year: number;
};

const BlogCalendarMonth = ({ month, year }: BlogCalendarMonthProps) => {
  return (
    <p className="py-4 mb-4 h6 border-top border-bottom">
      <i className="far fa-calendar me-3" />
      {month.toUpperCase()} / {year}
    </p>
  );
};

export default BlogCalendarMonth;
