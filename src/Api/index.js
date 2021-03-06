import axios from "axios";

export const getUsers = async () => {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/users?_limit=12"
    );
    return { success: true, data: res.data };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};

export const getUsersById = async (id) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return { success: true, data: res.data };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};

// export const postUser = async () => {};

export const getTodos = async () => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=15`
    );
    return { success: true, data: res.data };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};

export const getAlbums = async () => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?_limit=16`
    );
    return { success: true, data: res.data };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};

export const getPhotos = async () => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?_limit=15`
    );
    return { success: true, data: res.data };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};

export const getPosts = async () => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=15`
    );
    return { success: true, data: res.data };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};
