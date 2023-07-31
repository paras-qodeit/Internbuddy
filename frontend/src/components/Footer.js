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
      <div className="left-section">
        <LinkContainer to="/">
          <img src={Logo} alt="Qodeit-logo" />
        </LinkContainer>
      </div>
      <div className="right-section">
        <div className="icons">
          <LinkContainer to="/">
            <FaFacebookF />
          </LinkContainer>
          <LinkContainer to="/">
            <FaLinkedin />
          </LinkContainer>
          <LinkContainer to="/">
            <FaInstagram />
          </LinkContainer>
          <LinkContainer to="/">
            <FaTwitter />
          </LinkContainer>
          <LinkContainer to="/">
            <FaYoutube />
          </LinkContainer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
