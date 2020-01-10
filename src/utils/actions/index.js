import axios from "axios";
import { axiosWithAuth } from "../../axiosWithAuth";

export const FETCH_STORIES_START = "FETCH_STORIES_START";
export const FETCH_STORIES_SUCCESS = "FETCH_STORIES_SUCCESS";
export const FETCH_STORIES_FAILURE = "FETCH_STORIES_FAILURE";
export const ADD_STORY_START = "ADD_STORY_START";
export const ADD_STORY_SUCCESS = "ADD_STORY_SUCCESS";
export const ADD_STORY_FAILURE = "ADD_STORY_FAILURE";
export const FETCH_PENDING_STORIES_START = "FETCH_PENDING_STORIES_START";
export const FETCH_PENDING_STORIES_SUCCESS = "FETCH_PENDING_STORIES_SUCCESS";
export const FETCH_PENDING_STORIES_FAILURE = "FETCH_PENDING_STORIES_FAILURE";
export const ADD_ADMIN_USER_START = "ADD_ADMIN_USER_START";
export const ADD_ADMIN_USER_SUCCESS = "ADD_ADMIN_USER_SUCCESS";
export const ADD_ADMIN_USER_FAILURE = "ADD_ADMIN_USER_FAILURE";
export const FETCH_SINGLE_STORY_START = "FETCH_SINGLE_STORY_START";
export const FETCH_SINGLE_STORY_SUCCESS = "FETCH_SINGLE_STORY_SUCCESS";
export const FETCH_SINGLE_STORY_FAILURE = "FETCH_SINGLE_STORY_FAILURE";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const fetch_stories = () => dispatch => {
  dispatch({ type: FETCH_STORIES_START });
  axios
    .get("https://refugees-lambda.herokuapp.com/acceptedStories/")
    .then(res => {
      dispatch({ type: FETCH_STORIES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCH_STORIES_FAILURE,
        payload: `${err.response.status} ${err.response.statusText}`
      });
    });
};

export const fetch_pending_stories = () => dispatch => {
  dispatch({ type: FETCH_PENDING_STORIES_START });
  axiosWithAuth()
    .get("/pendingStories")
    .then(res => {
      dispatch({ type: FETCH_PENDING_STORIES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCH_PENDING_STORIES_FAILURE,
        payload: `${err.response.status} ${err.response.statusText}`
      });
    });
};

export const fetch_single_story = id => (dispatch, getState) => {
  if (getState().singleStory.id === id) {
    dispatch({
      type: FETCH_SINGLE_STORY_SUCCESS,
      payload: getState().singleStory
    });
  } else {
    dispatch({ type: FETCH_SINGLE_STORY_START });
    axiosWithAuth()
      .get(`/acceptedStories/${id}`)
      .then(res => {
        dispatch({ type: FETCH_SINGLE_STORY_SUCCESS, payload: res.data[0] });
      })
      .catch(err => {
        dispatch({
          type: FETCH_SINGLE_STORY_FAILURE,
          payload: `${err.response.status} ${err.response.statusText}`
        });
      });
  }
};

export const add_admin_user = newUser => dispatch => {
  dispatch({ type: ADD_ADMIN_USER_START });
  axios
    .post("https://refugees-lambda.herokuapp.com/auth/register", newUser)
    .then(res => {
      dispatch({ type: ADD_ADMIN_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: ADD_ADMIN_USER_FAILURE,
        payload: `${err.response.status} ${err.response.statusText}`
      });
    });
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};

export const login = () => dispatch => {
  dispatch({ type: LOGIN });
};
