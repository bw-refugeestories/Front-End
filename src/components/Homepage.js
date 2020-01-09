import React, { useEffect } from "react";
import { connect } from "react-redux";
import HomepageCarousel from "./Homepage/HomepageCarousel";
import StoryList from "./Homepage/StoryList";
import { fetch_stories } from "../utils/actions";

const Homepage = props => {
  // const [stories, setStories] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://refugees-lambda.herokuapp.com/acceptedStories")
  //     .then(response => setStories(response.data))
  //     .catch(err => console.log("API Request Error:", err));
  // }, []);

  useEffect(() => {
    props.fetch_stories();
  }, []);

  return (
    <>
      <HomepageCarousel stories={props.stories} />
      <StoryList stories={props.stories} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    stories: state.stories
  };
};

export default connect(mapStateToProps, { fetch_stories })(Homepage);

// export default Homepage;
