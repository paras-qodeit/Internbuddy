import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimelineComp = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        //   date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Getting Started</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
        <p>
          Welcome to the Digital Marketing course. First, let’s look at staying
          safe online, and meet the team who will be helping you through the
          course.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: " rgb(233, 30, 99)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
        iconStyle={{ background: " rgb(233, 30, 99)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Introduction to digital marketing
        </h3>
        <p>
          In the first activity we will learn what digital marketing is all
          about, aims of digital marketing, and explore some digital marketing
          strategies.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Banner advertising</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
        <p>
          We will now explore one of the advertising methods used in digital
          marketing called banner advertising.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Pay per click advertising
        </h3>
        {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
        <p>
          Now we will learn about another method of digital marketing called pay
          per click advertising.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        className="vertical-timeline-element--education"
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Content Marketing</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Online Course</h4> */}
        <p>
          We will now dive deeper into content marketing, which is a key element
          of digital marketing.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid rgb(233, 30, 99)" }}
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Weekly round-up</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Certification</h4> */}
        <p>
          Take a moment to reflect on what you've learnt about digital
          marketing, and share with other learners!
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TimelineComp;
