import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogDate from "./BlogDate";
import BlogArticle from "./BlogArticle";
import blogPosts from "./blogPosts.js";

function Blog() {
  return (
    <Container>
      <Row className="gy-5 justify-content-center">
        <Col md={7} className="px-4">
          <BlogDate month="July" year="2021" />
          {blogPosts.map((post, index) => {
            return (
              <BlogArticle
                key={index}
                iconClass={post.iconClass}
                title={post.title}
                date={post.date}
                body={post.body.map((paragraph, index) => {
                  return <div key={index}>{paragraph}</div>;
                })}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
