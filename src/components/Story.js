import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";

const Story = ({ match }) => {
  const [story, setStory] = useState({});
  const storyID = Number(match.params.id);

  useEffect(() => {
    axios
      .get("https://refugees-lambda.herokuapp.com/acceptedStories")
      .then(response => {
        setStory(response.data.filter(story => story.id === storyID)[0]);
      })
      .catch(err => console.log("API Request Error:", err));
  }, []);

  const { storyName, storyImg, storyContent, author } = story;

  return (
    <>
      <Row className="mx-0">
        <Col xs={12} className="py-4 pr-5 story-content">
          <h2 className="pb-3 story-title">{storyName}</h2>
          <p className="story-meta">
            <strong>Author: </strong>
            {author || "anonymous"}
          </p>
          {storyContent &&
            storyContent.split("\n").map((p, i) => {
              return (
                <React.Fragment key={i}>
                  <p>{p}</p>
                  {i === 0 ? ( // Show image after first paragraph
                    <div className="feature-img">
                      <img src={storyImg} alt={author || storyName} />
                    </div>
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
