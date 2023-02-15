import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./Banner.css";
const Banner = () => {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    fetch("hero.json")
      .then((res) => res.json())
      .then((data) => setSlider(data));
  }, []);
  return (
    <Carousel fade>
      {slider.map((item) => (
        <Carousel.Item key={item.id}>
          <img className="d-block w-100" src={item.image} alt="First slide" />
          <Carousel.Caption>
            <h3>{item.subheading}</h3>
            <h2>{item.heading}</h2>
            <p>{item.text}</p>
            <Button variant="secondary">{item.button}</Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default Banner;
