import React from "react";
import "./Dashboard.css";
import YoutubeEmbed from "../components/YoutubeEmbed";
import Header from "../components/Header";
import { Container, Dropdown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Container>
        <DropdownButton
          as={ButtonGroup}
          variant="warning"
          title="Project"
          className="my-4"
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <YoutubeEmbed />
      </Container>
    </div>
  );
};

export default Dashboard;
