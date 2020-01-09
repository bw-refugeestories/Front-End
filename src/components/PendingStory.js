import React from 'react';

const PendingStory = props => {
    return(
        <div className='pending-story'>
            <h3>{props.story.storyName}</h3>
            <p>{props.story.storyContent}</p>
        </div>
    );
}

export default PendingStory;