import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const StoryCard = ({ title }) => {
  return (
    <Col xs={12} md={4} className="my-3">
      <Card className="rounded-0 border-0 story-card">
        <CardImg
          top
          width="100%"
          src="https://reactstrap.github.io/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            <Link to="/story/1">{title}</Link>
          </CardTitle>
          <CardText className="font-weight-light">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StoryCard;
