import React, { useEffect, useState } from "react";
import axios from "axios";

import { Row, Col } from "reactstrap";
import StoryCard from "./StoryCard";

const StoryList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/") // SAMET: I set up the Back-End repo on my computer, replace it with the actual API link later
      .then(response => setStories(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="stories">
      <Row className="mx-0 px-xs-2 px-md-5 desc">
        <Col className="px-lg-5  py-4">
          Here are some of our other success stories from refugees around the
          world!
        </Col>
      </Row>
      <Row className="mx-0 px-3 py-3 story-list">
        {stories.map(story => (
          <StoryCard key={story.id} story={story} />
        ))}
      </Row>
    </div>
  );
};

export default StoryList;
