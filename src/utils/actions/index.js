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
export const APPROVE_STORY_START = 'APPROVE_STORY_START';
export const APPROVE_STORY_SUCCESS = 'APPROVE_STORY_SUCCESS';
export const APPROVE_STORY_FAILURE = 'APPROVE_STORY_FAILURE';
export const DENY_STORY_START = 'DENY_STORY_START';
export const DENY_STORY_SUCCESS = 'DENY_STORY_SUCCESS';
export const DENY_STORY_FAILURE = 'DENY_STORY_FAILURE';
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const STORE_USER_ID = 'STORE_USER_ID';
export const MODIFY_USER_START = 'MODIFY_USER_START';
export const MODIFY_USER_SUCCESS = 'MODIFY_USER_SUCCESS';
export const MODIFY_USER_FAILURE = 'MODIFY_USER_FAILURE';
export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

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

export const modify_admin_user = user => dispatch => {
  dispatch({ type: MODIFY_USER_START });
  let updatedUser = {
    firstNameUpdate: user.firstName,
    lastNameUpdate: user.lastName,
    usernameUpdate: user.username,
    passwordUpdate: user.password
  }
  let id = user.id;
  delete user.id;
  axiosWithAuth()
    .put(`auth/modify/${id}`, updatedUser)
    .then(res => dispatch({ type: MODIFY_USER_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: MODIFY_USER_FAILURE, payload: `${err.response.status} ${err.response.statusText}`}))
}

export const deleteUser = id => dispatch => {
  dispatch({ type: DELETE_USER_START });
  axiosWithAuth()
    .delete(`/auth/delete/${id}`)
    .then(res => {console.log(res.data.id[0]); dispatch({ type: DELETE_USER_SUCCESS, payload: res.data.id[0] })})
    .catch(err => dispatch({type: DELETE_USER_FAILURE, payload: `${err.response.status} ${err.response.statusText}`}))
}

export const approveStory = story => dispatch => {
    dispatch({ type: APPROVE_STORY_START});
    axiosWithAuth()
    .post(`pendingStories/approve/${story.id}`)
    .then (res => {
      console.log(res);
      story.newId = res.data.newId;
      dispatch( {type: APPROVE_STORY_SUCCESS, payload: story} )
    })
    .catch( err => {
      dispatch({type: APPROVE_STORY_FAILURE, payload: `${err.response.status} ${err.response.statusText}`})
    })
}

export const denyStory = id => dispatch => {
    dispatch({type: DENY_STORY_START});
    axiosWithAuth()
    .delete(`/pendingStories/delete/${id}`)
    .then ( res =>{
        dispatch( {type: DENY_STORY_SUCCESS, payload: id} )
    })
    .catch(err => {
      dispatch({type: DENY_STORY_FAILURE, payload: `${err.response.status} ${err.response.statusText}`})
    })
}

export const fetch_users = () => dispatch => {
  dispatch({ type: FETCH_USERS_START });
  axios.get('https://refugees-lambda.herokuapp.com/auth/')
    .then(res => dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({type: FETCH_USERS_FAILURE, payload: `${err.response.status} ${err.response.statusText}`}));
}

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};

export const login = () => dispatch => {
  dispatch({ type: LOGIN });
};

export const store_user_id = id => dispatch => {
  dispatch({ type: STORE_USER_ID, payload: id });
}