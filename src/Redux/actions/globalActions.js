import { dispatch } from "../store";
import { SET_ERROR, SET_LOADING, TOGGLE_SIDEBAR } from "../types";

const setLoading = (value = true) => {
  dispatch({ type: SET_LOADING, payload: value });
};

const setError = (value = true) => {
  dispatch({ type: SET_ERROR, payload: value });
};

const toggleSidebar = () => {
  dispatch({ type: TOGGLE_SIDEBAR });
};

export { setLoading, setError, toggleSidebar };
