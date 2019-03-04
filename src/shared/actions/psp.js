export const REQUEST_PSP_PAGE = "REQUEST_PSP_PAGE";
export const RECEIVE_PSP_PAGE = "RECEIVE_PSP_PAGE";

export const requestPSPPage = () => ({ type: REQUEST_PSP_PAGE });
export const receivePSPPage = data => ({ type: RECEIVE_PSP_PAGE, data });