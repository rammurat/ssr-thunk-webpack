import { RECEIVE_HOME_PAGE } from "../actions/home";

export default (state = {}, { type, data = {} }) => {
  switch (type) {
    case RECEIVE_HOME_PAGE:
      return data;
    default:
      return state;
  }
};