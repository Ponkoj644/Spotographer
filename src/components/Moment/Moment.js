import React from "react";
import Col from "react-bootstrap/Col";

const Moment = ({ item }) => {
  return (
    <Col lg={3}>
      <div className="single-gallary">
        <img src={item.img} alt="" className="w-100" />
      </div>
    </Col>
  );
};

export default Moment;
