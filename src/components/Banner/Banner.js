import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import Button from "react-bootstrap/Button";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel fade>
      {/* slider 1 */}
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>SPOTOGRAPHER</h3>
          <h2>Sports Photographer</h2>
          <p>I Capture Sports Moments and Actions.</p>
          <Button variant="secondary">More about me</Button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* slider 2 */}
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>SPOTOGRAPHER</h3>
          <h2>Sports Photographer</h2>
          <p>I Capture Sports Moments and Actions.</p>
          <Button variant="secondary">More about me</Button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* slider 3 */}
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>SPOTOGRAPHER</h3>
          <h2>Sports Photographer</h2>
          <p>I Capture Sports Moments and Actions.</p>
          <Button variant="secondary">More about me</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Banner;
