import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import AboutImage from "../../images/about-img.jpg";
import "./AboutPageText.css";

const AboutPageText = () => {
  return (
    <section className="about-text-area">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="about-image">
              <img src={AboutImage} alt="" />
            </div>
          </Col>

          <Col lg={7}>
            <div className="about-text">
              <h3>I'm Ponkoj Mondol</h3>
              <h2>About My Goal</h2>
              <p>
                Hi, I'm Ponkoj Mondol. I have completed my BSc Degree. My Goal
                is become an expert Web Developer. For achieve my goal I'm doing
                very hard work. Everyday I spend minimum 10 hours for learning
                new technologies and practising it. I believe that I can do the
                best in this area. Hard work is the key and I'm doing the hard
                work now.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPageText;
