import {
    ADD_STORY_START,
    ADD_STORY_SUCCESS,
    ADD_STORY_FAILURE
} from '../actions';

const initialState = {
    stories: [],
    error: '',
    isFetching: false
}

export const storyReducer = (state = initialState, action) => {
    
}