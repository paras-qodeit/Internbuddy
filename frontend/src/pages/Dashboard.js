import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { SlArrowDown } from "react-icons/sl";
import { HiOutlinePlay } from "react-icons/hi";
import { MdOutlineAssessment } from "react-icons/md";
import "./Dashboard.css";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../assets/Logo.png";

const Dashboard = () => {
  const [showBreakdown, setshowBreakdown] = useState(false);
  const [showCourse, setshowCourse] = useState(false);
  const [showCourseOverview, setshowCourseOverview] = useState(false);

  const videoContent = [
    {
      title:
        "Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin",
      length: "11 min",
      url: "/",
    },
    {
      title: "Topic-2",
      length: "11 min",
      url: "/",
    },
    {
      title: "Topic-3",
      length: "11 min",
      url: "/",
    },
    {
      title: "Topic-4",
      length: "11 min",
      url: "/",
    },
  ];

  const toggleList = (e) => {
    e.preventDefault();
    setshowBreakdown(!showBreakdown);
  };
  const toggleCourseIntro = (e) => {
    e.preventDefault();
    setshowCourse(!showCourse);
  };
  const toggleCourseOverview = (e) => {
    e.preventDefault();
    setshowCourseOverview(!showCourseOverview);
  };
  return (
    <div>
      <Row>
        <Col className="d-flex flex-column align-items-center">
          <div>
            <img src={Logo} alt="InternBuddy" width={150} height={150} />
          </div>
          <div onClick={toggleList} className="m-2 fw-bolder box">
            <SlArrowDown className="m-2 fw-bolder" />
            <span>Course Breakdown</span>
          </div>
          {showBreakdown && (
            <ul className="list-items">
              <LinkContainer to="/dashboard-preview">
                <li>Week 1</li>
              </LinkContainer>
              <LinkContainer to="/dashboard-preview">
                <li>Week 2</li>
              </LinkContainer>
              <LinkContainer to="/dashboard-preview">
                <li>Week 3</li>
              </LinkContainer>
              <LinkContainer to="/dashboard-preview">
                <li>Week 4</li>
              </LinkContainer>
              <LinkContainer to="/dashboard-preview">
                <li>Week 5</li>
              </LinkContainer>
              <LinkContainer to="/dashboard-preview">
                <li>Week 6</li>
              </LinkContainer>
            </ul>
          )}
        </Col>
        <Col className="square border border-1.5" md={7}>
          <div onClick={toggleCourseIntro} className="m-5 box">
            <SlArrowDown className="m-2 fw-bolder" />
            <span className="m-2 fw-bolder">Course Introduction</span>
            {showCourse && (
              <div className="course-intro">
                <div className="mx-5 course-over">
                  <HiOutlinePlay className="mx-2" />
                  49 min min of Video left
                </div>
                <div className="mx-5 course-over">
                  <MdOutlineAssessment className="mx-2" />1 graded assessment
                  left
                </div>
              </div>
            )}
          </div>
          <div onClick={toggleCourseOverview} className="m-5 box">
            <SlArrowDown className="m-2 fw-bolder" />
            <span className="m-2 fw-bolder">Course Overview</span>
            {showCourseOverview && (
              <Row>
                <Col>
                  {videoContent.map((task) => (
                    <>
                      <LinkContainer to={task.url} className="video-item ">
                        <div>
                          <HiOutlinePlay size={28} className="m-2 fw-bolder" />
                          <div>
                            <h5 className="fw-500 fs-6">{task.title}</h5>
                            <p>Video: {task.length}</p>
                          </div>
                        </div>
                      </LinkContainer>
                    </>
                  ))}
                </Col>
                {/* <Col>
                  <Button className="px-4 my-4">Get Started</Button>
                </Col> */}
              </Row>
            )}
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Dashboard;
