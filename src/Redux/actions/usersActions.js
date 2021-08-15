import {
  getAlbums,
  getPhotos,
  getPosts,
  getTodos,
  getUsers,
  getUsersById,
} from "../../Api";
import { SET_USER } from "../types";
import { setError, setLoading } from "./globalActions";
import {
  SET_ALBUMS,
  SET_PHOTOS,
  SET_POSTS,
  SET_TODOS,
  SET_USERS,
} from "../types";
import { dispatch } from "../store";

const setUsers = async () => {
  setLoading(true);
  const res = await getUsers();
  setLoading(false);

  if (res.success) {
    const action = { type: SET_USERS, payload: res.data };
    dispatch(action);
  } else {
    setError(true);
  }
};

const setTodos = async () => {
  setLoading(true);
  const res = await getTodos();
  setLoading(false);

  if (res.success) {
    const action = { type: SET_TODOS, payload: res.data };
    dispatch(action);
  } else {
    setError(true);
  }
};

const setAlbums = async () => {
  setLoading(true);
  const res = await getAlbums();
  setLoading(false);

  if (res.success) {
    const action = { type: SET_ALBUMS, payload: res.data };
    dispatch(action);
  } else {
    setError(true);
  }
};

const setPhotos = async () => {
  setLoading(true);
  const res = await getPhotos();
  setLoading(false);

  if (res.success) {
    const action = { type: SET_PHOTOS, payload: res.data };
    dispatch(action);
  } else {
    setError(true);
  }
};

const setPosts = async () => {
  setLoading(true);
  const res = await getPosts();
  setLoading(false);

  if (res.success) {
    const action = { type: SET_POSTS, payload: res.data };
    dispatch(action);
  } else {
    setError(true);
  }
};

const setUser = async (id) => {
  setLoading();
  const res = await getUsersById(id);

  if (res.success) {
    const action = { type: SET_USER, payload: res.data };
    dispatch(action);
  } else {
    setError(true);
  }
};

export {
  setUsers,
  setUser,
  setLoading,
  setError,
  setTodos,
  setAlbums,
  setPhotos,
  setPosts,
};
