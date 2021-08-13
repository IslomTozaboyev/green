import { getAlbums, getPhotos, getPosts, getTodos, getUsers } from "../Api";
import {
  SET_ALBUMS,
  SET_ERROR,
  SET_ISOPEN,
  SET_LOADING,
  SET_PHOTOS,
  SET_POSTS,
  SET_TODOS,
  SET_USERS,
} from "./types";

const setUsers = async (dispatch) => {
  setLoading(dispatch);
  const res = await getUsers();

  if (res.success) {
    const action = { type: SET_USERS, payload: res.data };
    dispatch(action);
  } else {
    setError(dispatch);
  }
};

const setTodos = async (dispatch) => {
  setLoading(dispatch);
  const res = await getTodos();

  if (res.success) {
    const action = { type: SET_TODOS, payload: res.data };
    dispatch(action);
  } else {
    setError();
  }
};

const setAlbums = async (dispatch) => {
  setLoading(dispatch);
  const res = await getAlbums();

  if (res.success) {
    const action = { type: SET_ALBUMS, payload: res.data };
    dispatch(action);
  } else {
    setError();
  }
};

const setPhotos = async (dispatch) => {
  setLoading(dispatch);
  const res = await getPhotos();

  if (res.success) {
    const action = { type: SET_PHOTOS, payload: res.data };
    dispatch(action);
  } else {
    setError();
  }
};

const setPosts = async (dispatch) => {
  setLoading(dispatch);
  const res = await getPosts();

  if (res.success) {
    const action = { type: SET_POSTS, payload: res.data };
    dispatch(action);
  } else {
    setError();
  }
};

const setLoading = (dispatch) => {
  dispatch({ type: SET_LOADING });
};

const setError = (dispatch) => {
  dispatch({ type: SET_ERROR });
};

let isSidebar = false;

export const openSidebar = (dispatch) => {
  const action = { type: SET_ISOPEN, payload: (isSidebar = !isSidebar) };
  dispatch(action);
};

export {
  setUsers,
  setLoading,
  setError,
  setTodos,
  setAlbums,
  setPhotos,
  setPosts,
};
