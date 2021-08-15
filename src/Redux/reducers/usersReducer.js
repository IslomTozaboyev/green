import {
  SET_ALBUMS,
  SET_PHOTOS,
  SET_POSTS,
  SET_TODOS,
  SET_USERS,
} from "../types";

const initialState = {
  data: [],
};

const reduces = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        data: action.payload,
      };

    case SET_TODOS:
      return {
        ...state,
        data: action.payload,
      };

    case SET_ALBUMS:
      return {
        ...state,
        data: action.payload,
      };

    case SET_PHOTOS:
      return {
        ...state,
        data: action.payload,
      };

    case SET_POSTS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default reduces;
