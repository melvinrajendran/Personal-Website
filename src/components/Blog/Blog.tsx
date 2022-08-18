import React from 'react';
import { Col, Row } from 'react-bootstrap';
import blogPosts, { activeMonths } from '../BlogPost/blogPosts';
import BlogCalendarMonth from '../BlogCalendarMonth/BlogCalendarMonth';
import BlogPost from '../BlogPost/BlogPost';
import { filter } from 'lodash';

const Blog = () => {
  return (
    <Row className="justify-content-center">
      <Col md={11} lg={8} xl={6} className="px-4">
        {activeMonths.map((activeMonth, index) => {
          return (
            <div key={index}>
              <BlogCalendarMonth month={activeMonth.month} year={activeMonth.year} />
              {filter(
                blogPosts,
                (post) => post.month === activeMonth.month && post.year === activeMonth.year,
              ).map((post, index) => {
                return <BlogPost key={index} {...post} />;
              })}
            </div>
          );
        })}
      </Col>
    </Row>
  );
};

export default Blog;
