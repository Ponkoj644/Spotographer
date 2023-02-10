import React from "react";
// import service1 from "../../images/service1.jpg";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Service = (props) => {
  return (
    <Col lg={4}>
      <div className="single-service">
        <img src={props.image} alt="" className="w-100" />
        <div className="service-text">
          <h3>{props.heading}</h3>
          <h5>Price: {props.price}</h5>
          <p>{props.text}</p>
          <Button variant="secondary">Book now</Button>
        </div>
      </div>
    </Col>
  );
};

export default Service;
