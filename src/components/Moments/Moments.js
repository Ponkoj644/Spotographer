import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./Moments.css";
import Moment from "../Moment/Moment";
import SectionHeading from "../SectionHeading/SectionHeading";

const Moments = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("galleries.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  return (
    <section className="moments-area">
      <Container>
        <SectionHeading heading="Some Moment" subheading="photo gallery" />
        <Row>
          {images.map((item) => (
            <Moment key={item.id} item={item}></Moment>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Moments;
