import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import gallery1 from "../../images/gallery-one.jpg";
import gallery2 from "../../images/gallery-two.jpg";
import gallery3 from "../../images/gallery-three.jpg";
import gallery4 from "../../images/gallery-four.jpg";
import gallery5 from "../../images/gallery-five.jpg";
import gallery6 from "../../images/gallery-six.jpg";
import gallery7 from "../../images/gallery-seven.jpg";
import gallery8 from "../../images/gallery-eight.jpg";
import "./Moments.css";
import Moment from "../Moment/Moment";

const Moments = () => {
  return (
    <section className="moments-area">
      <Container>
        <div className="section-heading">
          <h2 className="text-center">My Services</h2>
        </div>
        <Row>
          <Moment image={gallery1} />
          <Moment image={gallery2} />
          <Moment image={gallery3} />
          <Moment image={gallery4} />
          <Moment image={gallery5} />
          <Moment image={gallery6} />
          <Moment image={gallery7} />
          <Moment image={gallery8} />
        </Row>
      </Container>
    </section>
  );
};

export default Moments;
