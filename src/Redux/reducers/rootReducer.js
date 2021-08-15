import { combineReducers } from "redux";
import global from "./globalReducer";
import users from "./usersReducer";
import todos from "./usersReducer";
import albums from "./usersReducer";
import photos from "./usersReducer";
import posts from "./usersReducer";

const reducers = combineReducers({
  global,
  users,
  todos,
  albums,
  photos,
  posts,
});

export default reducers;
