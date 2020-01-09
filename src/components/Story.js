import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetch_single_story } from "../utils/actions";
import { Row, Col, Spinner } from "reactstrap";

const Story = props => {
  // const [story, setStory] = useState({});
  // useEffect(() => {
  //   axios
  //     .get("https://refugees-lambda.herokuapp.com/acceptedStories")
  //     .then(response => {
  //       setStory(response.data.filter(story => story.id === storyID)[0]);
  //     })
  //     .catch(err => console.log("API Request Error:", err));
  // }, []);

  const { fetch_single_story, isFetching, singleStory } = props;
  const { storyName, storyImg, storyContent, author } = singleStory;
  const storyID = Number(props.match.params.id);

  useEffect(() => {
    fetch_single_story(storyID);
    window.scrollTo(0, 0);
  }, [storyID]);

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
    <React.Fragment>
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
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    singleStory: state.singleStory,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { fetch_single_story })(Story);

// export default Story;
