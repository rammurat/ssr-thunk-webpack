import { RECEIVE_PSP_PAGE } from "../actions/psp";

export default (state = {}, { type, data = {} }) => {
  switch (type) {
    case RECEIVE_PSP_PAGE:
      return data;
    default:
      return state;
  }
};