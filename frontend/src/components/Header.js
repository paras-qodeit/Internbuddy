import React from "react";
import { ProgressBar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  FaRegFlag,
  FaRegQuestionCircle,
  FaRegSun,
  FaPowerOff,
} from "react-icons/fa";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="tier-1">
        <ProgressBar
          now={70}
          label={`Progress : 70% completed`}
          animated
          variant="success"
          style={{ height: 25 }}
        />
      </div>
      <div className="links">
        <LinkContainer to="/" className="tier-2">
          <span>
            <FaRegFlag size={30} />
            <b className="mx-2">Report</b>
          </span>
        </LinkContainer>
        <LinkContainer to="/" className="tier-2">
          <span>
            <FaRegQuestionCircle size={30} />
            <b className="mx-2">Help</b>
          </span>
        </LinkContainer>
        <LinkContainer to="/" className="tier-2">
          <span>
            <FaRegSun size={30} />
            <b className="mx-2">Settings</b>
          </span>
        </LinkContainer>
        <LinkContainer to="/" className="tier-2">
          <span>
            <FaPowerOff size={30} />
            <b className="mx-2">Leave Session</b>
          </span>
        </LinkContainer>
      </div>
    </div>
  );
};

export default Header;
