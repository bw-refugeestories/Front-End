import React from "react";
import { Row, Col } from "reactstrap";
import HomepageCarousel from "./Homepage/HomepageCarousel";
const Story = props => {
  const {
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
          <p>
            <strong>Author: </strong>
            {author || "anonymous"}
          </p>
          {storyContent.split("\n").map((p, i) => {
            return (
              <React.Fragment key={i}>
                <p>{p}</p>
                {i === 0 ? ( // Show image after first paragraph
                  <p style={{ textAlign: "center" }}>
                    <img
                      src={storyImg}
                      alt={author || storyName}
                      style={{ width: "500px" }}
                    />
                  </p>
                ) : null}
              </React.Fragment>
            );
          })}
        </Col>
      </Row>
    </>
  );
};

export default Story;
