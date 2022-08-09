import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlogDate from './BlogDate';
import BlogArticle, { BlogPostProps } from './BlogPost';
import { blogPosts, activeMonths } from './blogPosts';
import { filter } from 'lodash';

const Blog = () => {
  return (
    <Container>
      <Row className="gy-5 justify-content-center">
        <Col md={7} className="px-4">
          {activeMonths.map((activeMonth, index) => {
            return (
              <div key={index}>
                <BlogDate month={activeMonth.month} year={activeMonth.year} />
                {filter(blogPosts, (post: BlogPostProps) => post.month === activeMonth.month && post.year === activeMonth.year).map((post, index) => {
                  return <BlogArticle key={index} {...post} />;
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
