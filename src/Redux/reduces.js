import initialState from "./initialState";
import {
  SET_ALBUMS,
  SET_ERROR,
  SET_LOADING,
  SET_PHOTOS,
  SET_POSTS,
  SET_TODOS,
  SET_USERS,
} from "./types";

const reduces = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: false,
      };

    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: false,
      };

    case SET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
        loading: false,
        error: false,
      };

    case SET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
        loading: false,
        error: false,
      };

    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: false,
      };

    case SET_LOADING:
      return { ...state, loading: true };

    case SET_ERROR:
      return { ...state, error: true, loading: false };

    default:
      return state;
  }
};

export default reduces;
