import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import "./home.css";
import { Container, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  FaHourglassHalf,
  FaRegClock,
  FaGlobe,
  FaWrench,
  FaCalendarAlt,
  FaCheck,
} from "react-icons/fa";
import YoutubeEmbed from "../components/YoutubeEmbed";
import TimelineComp from "../components/TimelineComp";

const Home = () => {
  const [shown, setIsShown] = useState(false);
  const [btnContent, setBtnContent] = useState("Show Weekly Breakdown");
  const [shown2, setIsShown2] = useState(false);
  const [btnContent2, setBtnContent2] = useState("Show Weekly Breakdown");

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
    if (btnContent === "Show Weekly Breakdown") {
      setBtnContent("Hide Weekly Breakdown");
    } else setBtnContent("Show Weekly Breakdown");
  };
  const handleClick2 = (event) => {
    // 👇️ toggle shown state
    setIsShown2((current) => !current);
    if (btnContent2 === "Show Weekly Breakdown") {
      setBtnContent2("Hide Weekly Breakdown");
    } else setBtnContent2("Show Weekly Breakdown");
  };

  return (
    <>
      <div className="cover">
        <Row className="row-1">
          <Col className="cover-1">
            <LinkContainer to="/">
              <img src={Logo} alt="Qodeit-logo" />
            </LinkContainer>
            <h2>
              Digital Skills: Digital <br />
              Marketing
            </h2>
            <p>
              Delve into different digital marketing strategies and learn how to
              choose the right technique to target your customers.
            </p>
            <Button variant="dark">Join Now</Button>
          </Col>
          <Col>
            <img
              src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=396&q=80"
              alt=""
              className="cover-image"
            />
          </Col>
        </Row>
      </div>
      <div className="desc">
        <div className="box1">
          <span>
            <FaHourglassHalf size={23} className="mx-2" />
          </span>
          <div className="content-box1">
            <span>Duration</span>
            <span>
              <b>2 Weeks</b>
            </span>
          </div>
        </div>
        <div className="box1">
          <span>
            <FaRegClock size={23} className="mx-2" />
          </span>
          <div className="content-box1">
            <span>Study</span>
            <span>
              <b>3 hours</b>
            </span>
          </div>
        </div>
        <div className="box1">
          <span>
            <FaGlobe size={23} className="mx-2" />
          </span>
          <div className="content-box1">
            <span>100% Online</span>
            <span>
              <LinkContainer to="/">
                <span>How it works</span>
              </LinkContainer>
            </span>
          </div>
        </div>
        <div className="box1">
          <span>
            <FaWrench size={23} className="mx-2" />
          </span>
          <div className="content-box1">
            <span>Digital Upgrade</span>
            <span>
              <b>Free</b>
            </span>
          </div>
        </div>
        <div className="box1" style={{ borderRight: 0 }}>
          <span>
            <FaCheck size={23} className="mx-2" />
          </span>
          <div className="content-box1">
            <span>Accreditation</span>
            <span>
              <b>Available</b>
            </span>
          </div>
        </div>
      </div>
      <div className="navbar-2">
        <div className="nav-content">
          <div className="content-nav">
            <a href="#content-overview">
              <span>Overview</span>
            </a>
          </div>
          <div className="content-nav">
            <a href="#syllabus">
              <span>Syllabus</span>
            </a>
          </div>
          <div className="content-nav">
            <a href="#accreditated">
              <span>Accreditation</span>
            </a>
          </div>
          <div className="content-nav">
            <a href="#span-join-today">
              <span>Start dates</span>
            </a>
          </div>
          <div className="content-nav">
            <a href="#requirements">
              <span>Requirements</span>
            </a>
          </div>
          <div className="content-nav">
            <a href="/">
              <span>What's included</span>
            </a>
          </div>
          <div className="content-nav">
            <a href="/">
              <span>Learners review</span>
            </a>
          </div>
          <div className="content-nav">
            <a href="/">
              <span> More courses</span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <Container className="content-overview" id="content-overview">
          <h3>
            Learn to use digital marketing strategies to grow your business
          </h3>
          <p>
            Digital marketing is a crucial tool to reach your audience and grow
            marketing is, <br /> why it is so important for an organisation, and
            how to use it effectively. <br /> You’ll uncover different digital
            marketing strategies and understand the importance of balancing and
            integrating these techniques to successfully target your customers.
          </p>
          <h3>Explore different digital marketing techniques</h3>
          <p>
            With so many marketing strategies available, it can be difficult
            knowing which one works for your business. <br />
            This course will help you delve into each marketing strategy such as
            banner advertising, pay per click advertising, content marketing,
            search engine optimisation, social media, and email marketing to
            ensure you can find the right strategy for your business.
          </p>
          <h3>Learn to integrate different marketing strategies</h3>
          <p>
            Though marketing strategies can be powerful separately, you’ll
            explore the importance of balancing and integrating these strategies
            together. <br /> Through this exploration, you’ll understand how
            integration in marketing is vital in helping to target your
            customers more effectively.
          </p>
          <h3>Enhance your digital skills with Accenture</h3>
          <p>
            On the course, you’ll be guided by the specialists at Accenture.
            With their expertise, you’ll finish with a sound understanding of
            digital marketing and will have gained essential digital skills to
            use in your organisation.
          </p>
          <YoutubeEmbed embedId="nE9Rn9tAD_I" />
        </Container>
        <Container id="syllabus">
          <h2>Syllabus</h2>
          <div className="syllabus-1">
            <h3>How to use digital marketing</h3>
            <button className="syllabii-btn" onClick={handleClick}>
              {btnContent}
            </button>
            {shown && <TimelineComp />}
          </div>
          <div className="syllabus-1">
            <h3>Digital marketing techniques</h3>
            <button className="syllabii-btn" onClick={handleClick2}>
              {btnContent2}
            </button>
            {shown2 && <TimelineComp />}
          </div>
        </Container>
        <Container className="accreditated" id="accreditated">
          <h1>Who is this accredited by?</h1>
          <img
            src="https://ugc.futurelearn.com/uploads/images/67/5c/675c873b-0981-4c4a-9184-250027fd1da2.svg"
            alt="accreditated"
            style={{ width: 150, height: 150 }}
          />
          <p>
            The CPD Certification Service: The CPD Certification Service was
            established in 1996 and is the leading independent CPD accreditation
            institution operating across industry sectors to complement the CPD
            policies of professional and academic bodies.
          </p>
          <h1>When would you like to start?</h1>
          <p>
            Start straight away and join a global classroom of learners. If the
            course hasn’t started yet you’ll see the future date listed below.
          </p>
          <div className="span-join-today" id="span-join-today">
            <div className="calender-now">
              <FaCalendarAlt size={36} className="mx-3" />
              <h5>Available now</h5>
            </div>
            <div>
              <button>Join Today</button>
            </div>
          </div>
          <h1 id="requirements">Who is the course for?</h1>
          <p>
            This course is designed for anyone interested in honing their
            digital marketing skills.
          </p>
          <h1 id="more-courses">More courses you might like</h1>
          <p>
            Learners who joined this course have also enjoyed these courses.
          </p>
        </Container>
      </div>
    </>
  );
};

export default Home;
