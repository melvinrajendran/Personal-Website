import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlogCalendarMonth from './BlogCalendarMonth';
import BlogPost from './BlogPost';
import { blogPosts, activeMonths } from './blogPosts';
import { filter } from 'lodash';

const Blog = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={7} className="px-4">
          {activeMonths.map((activeMonth, index) => {
            return (
              <div key={index}>
                <BlogCalendarMonth month={activeMonth.month} year={activeMonth.year} />
                {filter(blogPosts, (post) => post.month === activeMonth.month && post.year === activeMonth.year).map((post, index) => {
                  return <BlogPost key={index} {...post} />;
                })}
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
