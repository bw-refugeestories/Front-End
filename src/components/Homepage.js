import React, { useEffect } from "react";
import { connect } from "react-redux";
import HomepageCarousel from "./Homepage/HomepageCarousel";
import StoryList from "./Homepage/StoryList";
import { fetch_stories } from "../utils/actions";
import { Row, Col, Spinner } from "reactstrap";

const Homepage = props => {
  // const [stories, setStories] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://refugees-lambda.herokuapp.com/acceptedStories")
  //     .then(response => setStories(response.data))
  //     .catch(err => console.log("API Request Error:", err));
  // }, []);

  const { isFetching, stories } = props;

  useEffect(() => {
    props.fetch_stories();
  }, []);

  if (isFetching) {
    return (
      <Row className="mx-0">
        <Col xs={12} className="py-4 pr-5 text-center story-content">
          <Spinner color="dark" />
        </Col>
      </Row>
    );
  }

  return (
    <>
      <HomepageCarousel stories={stories} />
      <StoryList stories={stories} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    stories: state.stories,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { fetch_stories })(Homepage);

// export default Homepage;
