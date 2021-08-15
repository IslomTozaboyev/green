import {
  SET_ALBUMS,
  SET_ERROR,
  SET_ISOPEN,
  SET_LOADING,
  SET_PHOTOS,
  SET_POSTS,
  SET_TODOS,
  TOGGLE_SIDEBAR,
} from "../types";

const initialState = {
  sidebarIsShow: true,
  loading: false,
  error: true,
};

const reduces = (state = initialState, action) => {
  switch (action.type) {
    // case SET_TODOS:
    //   return {
    //     ...state,
    //     todos: action.payload,
    //     loading: false,
    //     error: false,
    //   };

    // case SET_ALBUMS:
    //   return {
    //     ...state,
    //     albums: action.payload,
    //     loading: false,
    //     error: false,
    //   };

    // case SET_PHOTOS:
    //   return {
    //     ...state,
    //     photos: action.payload,
    //     loading: false,
    //     error: false,
    //   };

    // case SET_POSTS:
    //   return {
    //     ...state,
    //     posts: action.payload,
    //     loading: false,
    //     error: false,
    //   };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    case SET_ERROR:
      return { ...state, error: action.payload };

    case TOGGLE_SIDEBAR:
      return { ...state, sidebarIsShow: !state.sidebarIsShow };

    // case SET_ISOPEN:
    //   return { ...state, sidebarIsShow: action.payload };

    default:
      return state;
  }
};

export default reduces;
