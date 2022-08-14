import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import socials from './socials';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container className="py-4">
      <footer className="pt-3 mt-4 border-top">
        <Row className="my-4 justify-content-center">
          {socials.map((social, index) => {
            return (
              <Col key={index} xs={2} lg={1} className="d-flex justify-content-center">
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <i className={`social-icon btn fa-lg ${social.iconClass}`} />
                </a>
              </Col>
            );
          })}
        </Row>
        <p className="text-muted text-center">
          &copy; {currentYear} Melvin Rajendran
        </p>
      </footer>
    </Container>
  );
};

export default Footer;
