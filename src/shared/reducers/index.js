import { combineReducers } from "redux";

// load all reducers
import homePage from "./home";
import pspPage from "./psp";

// combine all reducers
export default combineReducers({
  homePage,
  pspPage
});