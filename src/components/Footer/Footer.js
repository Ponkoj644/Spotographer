import React from "react";
import Container from "react-bootstrap/esm/Container";
import LogoImage from "../../images/logo.png";
import Logo from "../Logo/Logo";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-area bg-dark py-5 text-center">
      <Container>
        <Logo image={LogoImage} />
        <p className="text-white text-center  mb-0">
          © 2023 Spotographer, All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
