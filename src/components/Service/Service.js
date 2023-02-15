import React from "react";
// import service1 from "../../images/service1.jpg";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Service = ({ item }) => {
  return (
    <Col lg={4}>
      <div className="single-service">
        <img src={item.img} alt="" className="w-100" />
        <div className="service-text">
          <h3>{item.name}</h3>
          <h5>Price: {item.price}$</h5>
          <p>{item.description}</p>
          <Button variant="secondary">Book now</Button>
        </div>
      </div>
    </Col>
  );
};

export default Service;
