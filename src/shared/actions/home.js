export const REQUEST_HOME_PAGE = "REQUEST_HOME_PAGE";
export const RECEIVE_HOME_PAGE = "RECEIVE_HOME_PAGE";

export const requestHomePage = () => ({ type: REQUEST_HOME_PAGE });
export const receiveHomePage = data => ({ type: RECEIVE_HOME_PAGE, data });