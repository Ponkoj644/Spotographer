import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// import Button from "react-bootstrap/Button";
import "./Services.css";
import Service from "../Service/Service";
import SectionHeading from "../SectionHeading/SectionHeading";

const Services = () => {
  // Fetch the json file using "useState" & "useEffect"//

  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <section className="services-area ">
      <Container>
        <SectionHeading heading="My Services" subheading="Service i provide" />

        <Row>
          {services.map((item) => (
            <Service key={item.id} item={item}></Service>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
