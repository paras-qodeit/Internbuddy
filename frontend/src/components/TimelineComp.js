import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimelineComp = ({ dataArray }) => {
  return (
    <VerticalTimeline>
      {dataArray.map((heading) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3>{heading}</h3>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default TimelineComp;
