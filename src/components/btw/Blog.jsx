import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogDate from "./BlogDate";
import BlogArticle from "./BlogArticle";
import blogPosts from "./blogPosts";

function Blog() {
  return (
    <Container>
      <Row className="gy-5 justify-content-center">
        <Col md={7}>
          <BlogDate month="July" year="2021" />
          {blogPosts.map((post) => {
            return (
              <BlogArticle
                iconClass={post.iconClass}
                title={post.title}
                date={post.date}
                body={post.body.map((paragraph) => {
                  return <p>{paragraph}</p>;
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
