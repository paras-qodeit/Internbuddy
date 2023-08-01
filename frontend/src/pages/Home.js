import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import "./home.css";
import { Container, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Footer from "../components/Footer";
import {
  FaHourglassHalf,
  FaRegClock,
  FaGlobe,
  FaWrench,
  FaEnvelopeOpenText,
  FaCheck,
} from "react-icons/fa";
import TimelineComp from "../components/TimelineComp";

const Home = () => {
  const [shown, setIsShown] = useState(false);
  const [btnContent, setBtnContent] = useState("Show Breakdown");
  const [shown2, setIsShown2] = useState(false);
  const [btnContent2, setBtnContent2] = useState("Show Breakdown");

  const CorporateBusiness = [
    "Introduction to Business Development",
    "Strategic Partnerships ",
    "Sales and Negotiation Techniques ",
    "Market Research and Analysis",
    "Start your business development journey with us at just ",
  ];
  const MetaBusiness = [
    "Introduction to Facebook Marketing",
    "Handling Facebook page ",
    "Poster making ",
    "Meta Business Suite and Insights ",
    "Scheduling social media content",
    "Start your meta-marketing journey with us at just",
  ];

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
    if (btnContent === "Show Breakdown") {
      setBtnContent("Hide Breakdown");
    } else setBtnContent("Show Breakdown");
  };
  const handleClick2 = (event) => {
    // 👇️ toggle shown state
    setIsShown2((current) => !current);
    if (btnContent2 === "Show Breakdown") {
      setBtnContent2("Hide Breakdown");
    } else setBtnContent2("Show Breakdown");
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
              Get future ready with <br />
              <b className="fst-italic">Internbuddy</b>
            </h2>
            <p>
              Welcome to Internbuddy, your gateway to knowledge and career
              growth! Whether you're looking to learn something new, advance
              your career, or simply indulge your curiosity, we have the perfect
              courses for you
            </p>
            <Button variant="dark">Join Now</Button>
          </Col>
          <Col>
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
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
            Ready to take the first step? <br /> <br /> Enroll today and unlock
            the world of digital marketing!
          </h3>
          <p className="fst-italic">
            We are excited to offer you a diverse range of courses designed to
            enhance your skills, expand your horizons, and empower you in
            various areas of digital marketing
          </p>
          <h3>Why Choose Our Courses?</h3>
          <p className="fst-italic">
            <b>Expert Guidance:</b> Our courses are developed and led by
            industry professionals and subject matter experts, ensuring you
            receive the highest quality instruction and insights from those with
            real-world experience.
            <br />
            <br />
            <b>Practical Learning: </b> We believe in a hands-on approach to
            education. Our courses provide practical knowledge and actionable
            skills that you can immediately apply in your professional life,
            making your learning experience both relevant and rewarding.
            <br />
            <br />
            <b>Recognized Certificates:</b> Upon successful completion of our
            courses, you'll receive a certificate that validates your
            achievement. These certificates can enhance your professional
            profile and boost your career prospects.
            <br />
            <br />
            <b>Accessible Online Platform:</b> Our courses are delivered through
            an intuitive online platform, allowing you to learn from the comfort
            of your own home or anywhere with an internet connection. Access
            course materials and track your progress effortlessly.
          </p>
          <h3>Our courses </h3>
          <p className="fst-italic">
            Corporate business associate training program <br />
            Meta marketing training program
            <br />
            <br />
            Our Corporate business associate training program is designed to
            equip you with the knowledge, skills, and strategies needed to
            navigate the complexities of modern business and unlock new
            opportunities for your organization. What sets our training program
            apart is its practical approach. We believe that learning should be
            experiential, and our curriculum is designed to bridge the gap
            between theory and real-world application.
          </p>

          {/* <YoutubeEmbed embedId="nE9Rn9tAD_I" /> */}
        </Container>
        <Container id="syllabus">
          <div className="syllabus-1">
            <h3>
              Key topics covered in our corporate business associate training
              program include:{" "}
            </h3>
            <button className="syllabii-btn" onClick={handleClick}>
              {btnContent}
            </button>
            {shown && <TimelineComp dataArray={CorporateBusiness} />}
          </div>
          <div className="content-overview">
            <p className="fst-italic">
              In today's rapidly evolving digital landscape, traditional
              marketing techniques are no longer enough to stay ahead of the
              competition. That's where meta-marketing comes in. Our Meta
              Marketing Course is designed to equip you with the knowledge and
              skills needed to excel in this dynamic and ever-changing marketing
              environment.
            </p>
          </div>
          <div className="syllabus-1">
            <h3>
              Here's what you can expect from our comprehensive Meta Marketing
              Course:{" "}
            </h3>
            <button className="syllabii-btn" onClick={handleClick2}>
              {btnContent2}
            </button>
            {shown2 && <TimelineComp dataArray={MetaBusiness} />}
          </div>
        </Container>
        <div className="terms-conditions">
          <LinkContainer to="/term-conditions">
            <p className="fs-5 ">
              Terms and Conditions <FaEnvelopeOpenText />
            </p>
          </LinkContainer>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
