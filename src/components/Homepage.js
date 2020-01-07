import React, { useState, useEffect } from "react";
import axios from "axios";
import HomepageCarousel from "./Homepage/HomepageCarousel";
import StoryList from "./Homepage/StoryList";

const Homepage = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios
      .get("https://refugees-lambda.herokuapp.com/acceptedStories")
      .then(response => setStories(response.data))
      .catch(err => console.log("API Request Error:", err));
  }, []);

  return (
    <>
      <HomepageCarousel stories={stories} />
      <StoryList stories={stories} />
    </>
  );
};

export default Homepage;
