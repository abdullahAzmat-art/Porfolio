import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" mt-5 text-white py-4">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-left">
            <h5>Portfolio</h5>
            <p>Designed with React, Node.js, Express, MongoDB (MERN Stack)</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/project" className="text-white">Projects</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-right list-unstyled">
            <h5>Connect</h5>
            <a href="https://www.linkedin.com/in/abdullah-azmat-5b903b310/?trk=opento_sprofile_d" className="text-white me-3">LinkedIn</a>
            <a href="https://github.com/abdullahAzmat-art" className="text-white me-3">GitHub</a>
            <a href="mailto:hassanazmat079@gmail.com" className="text-white">Email</a>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        &copy; {new Date().getFullYear()} Your Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
