import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const StoryCard = ({ story }) => {
  return (
    <Col xs={12} md={4} className="my-3">
      <Card className="rounded-0 border-0 h-100 story-card">
        <CardImg
          top
          width="100%"
          src={story.storyImg}
          alt={story.author || story.storyName}
        />
        <CardBody>
          <CardTitle>{story.storyName}</CardTitle>
          <CardText className="font-weight-light">
            {story.storyContent.substr(0, 140)}...
          </CardText>
          <Link
            to={`/story/${story.id}`}
            className="btn btn-outline-secondary stretched-link"
          >
            Read More &rarr;
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StoryCard;
