import React from "react";
import Col from "react-bootstrap/Col";

const Moment = (props) => {
  return (
    <Col lg={3}>
      <div className="single-gallary">
        <img src={props.image} alt="" className="w-100" />
      </div>
    </Col>
  );
};

export default Moment;
