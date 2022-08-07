import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlogDate from './BlogDate';
import BlogArticle from './BlogArticle';
import blogPosts, { activeMonths } from './blogPosts.js';

const Blog = () => {
  return (
    <Container>
      <Row className="gy-5 justify-content-center">
        <Col md={7} className="px-4">
          {activeMonths.map((activeMonth, index) => {
            return (
              <div key={index}>
                <BlogDate month={activeMonth.month} year={activeMonth.year} />
                {blogPosts.map((post, index) => {
                  if (post.month === activeMonth.month && post.year === activeMonth.year) {
                    return <BlogArticle key={index} {...post} />;
                  } else {
                    return null;
                  }
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
