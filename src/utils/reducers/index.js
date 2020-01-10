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
  FETCH_SINGLE_STORY_START,
  FETCH_SINGLE_STORY_SUCCESS,
  FETCH_SINGLE_STORY_FAILURE,
  APPROVE_STORY_START,
  APPROVE_STORY_SUCCESS,
  APPROVE_STORY_FAILURE,
  DENY_STORY_START,
  DENY_STORY_SUCCESS,
  DENY_STORY_FAILURE,
  LOGIN,
  LOGOUT
} from "../actions";

const initialState = {
  singleStory: {},
  stories: [],
  pendingStories: [],
  error: "",
  isFetching: false,
  isLoggedIn: Boolean(localStorage.getItem("token"))
};

export const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORIES_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_STORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        stories: action.payload
      };
    case FETCH_STORIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case ADD_STORY_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case ADD_STORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: ""
      };
    case ADD_STORY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case FETCH_PENDING_STORIES_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_PENDING_STORIES_SUCCESS:
      return {
        ...state,
        pendingStories: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_PENDING_STORIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    case APPROVE_STORY_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case APPROVE_STORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        stories: [...state.stories, action.payload],
        pendingStories: state.pendingStories.filter(story => {
          return story.id !== action.payload.id;
        })
      };
    case APPROVE_STORY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case DENY_STORY_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case DENY_STORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pendingStories: state.pendingStories.filter(story => {
          return story.id !== action.payload;
        })
      };
    case DENY_STORY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case ADD_ADMIN_USER_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case ADD_ADMIN_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: ""
      };
    case ADD_ADMIN_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case FETCH_SINGLE_STORY_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_SINGLE_STORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        singleStory: action.payload
      };
    case FETCH_SINGLE_STORY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return state;
  }
};
