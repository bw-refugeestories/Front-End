import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const StoryCard = ({ story }) => {
  return (
    <Col xs={12} md={4} className="my-3">
      <Card className="rounded-0 border-0 story-card">
        <CardImg
          top
          width="100%"
          src="https://reactstrap.github.io/assets/318x180.svg"
          // src={story.storyImg} API DOES NOT RETURN A VALID URL, TO BE FIXED IN THE BACKEND
          alt={story.author || story.storyName}
        />
        <CardBody>
          <CardTitle>
            <Link to="/story/1">{story.storyName}</Link>
          </CardTitle>
          <CardText className="font-weight-light">
            {story.storyContent.substr(0, 140)}... Read More
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StoryCard;
