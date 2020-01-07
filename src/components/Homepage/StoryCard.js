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
          // SAMET: src={story.storyImg} API does not return a valid image URL, to be fixed in the backend
          alt={story.author || story.storyName}
        />
        <CardBody>
          <CardTitle>{story.storyName}</CardTitle>
          <CardText className="font-weight-light">
            {story.storyContent.substr(0, 140)}...
          </CardText>
          <Link
            to={{
              pathname: `/story/${story.id}`,
              state: { story }
            }}
            className="btn btn-outline-secondary stretched-link"
            outline
          >
            Read More &rarr;
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StoryCard;
