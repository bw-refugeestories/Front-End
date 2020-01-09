import {
    ADD_STORY_START,
    ADD_STORY_SUCCESS,
    ADD_STORY_FAILURE,
    FETCH_PENDING_STORIES_START,
    FETCH_PENDING_STORIES_SUCCESS,
    FETCH_PENDING_STORIES_FAILURE,
    ADD_ADMIN_USER_START,
    ADD_ADMIN_USER_SUCCESS,
    ADD_ADMIN_USER_FAILURE,
    FETCH_STORIES_START,
    FETCH_STORIES_SUCCESS,
    FETCH_STORIES_FAILURE,
    APPROVE_STORY,
    DENY_STORY
} from '../actions';

const initialState = {
    stories: [],
    pendingStories: [],
    error: '',
    isFetching: false,
    isLoggedIn: Boolean(localStorage.getItem('token'))
}

export const storyReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_STORIES_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_STORIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                stories: action.payload
            }
        case FETCH_STORIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_STORY_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case ADD_STORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: ''
            }
        case ADD_STORY_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case FETCH_PENDING_STORIES_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_PENDING_STORIES_SUCCESS:
            return {
                ...state,
                pendingStories: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_PENDING_STORIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case APPROVE_STORY:
            return {
                ...state,
                pendingStories: state.pendingStories.map( story => {
                    return story.id === action.payload.id ? action.payload : story;
                }),
            }
        case DENY_STORY:
            return {
                ...state,
                pendingStories: state.pendingStories.filter( story => {
                    return story.id !== action.payload
                }),
            }
        case ADD_ADMIN_USER_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case ADD_ADMIN_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: ''
            }
        case ADD_ADMIN_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        default:
            return{
                ...state
            }
    }
}