import React from "react";
import "./Footer.css";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../assets/Logo.png";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="icons">
        <FaFacebookF />
        <FaLinkedin />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>
      <LinkContainer to="/">
        <img src={Logo} alt="Qodeit-logo" />
      </LinkContainer>
    </div>
  );
};

export default Footer;
