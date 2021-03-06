import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { sampleSize } from "lodash";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const randomSelector = (allStories, howMany) => sampleSize(allStories, howMany);

const HomepageCarousel = ({ stories }) => {
  const [items, setItems] = useState([]);
  useEffect(() => setItems(randomSelector(stories, 3)), [stories]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <img
          src={item.storyImg}
          alt={item.storyName}
          className="carousel-img"
        />
        <Link to={`/story/${item.id}`}>
          <CarouselCaption
            captionText={item.storyContent.split(".")[0]}
            captionHeader={item.storyName}
          />
        </Link>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default HomepageCarousel;
