import React from "react";
import { Row, Col } from "reactstrap";
import HomepageCarousel from "./Homepage/HomepageCarousel";
const Story = props => {
  const {
    id,
    storyName,
    storyImg,
    storyContent,
    author
  } = props.location.state.story;

  return (
    <>
      <HomepageCarousel />
      <Row className="mx-0">
        <Col xs={12} className="py-4 pr-5 story-content">
          <h3 className="pb-3">{storyName}</h3>
          {storyContent.split("\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Story;
