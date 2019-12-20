import React from "react";
import { Row, Col } from "reactstrap";
import StoryCard from "./StoryCard";

const StoryList = () => {
  return (
    <div className="stories">
      <Row className="mx-0 px-xs-2 px-md-5 desc">
        <Col className="px-lg-5  py-4">
          Here are some of our other success stories from refugees around the
          world!
        </Col>
      </Row>
      <Row className="mx-0 px-3 py-3 story-list">
        {Array(9)
          .fill("Story title")
          .map((title, index) => (
            <StoryCard title={`${index + 1}. ` + title} />
          ))}
      </Row>
    </div>
  );
};

export default StoryList;
