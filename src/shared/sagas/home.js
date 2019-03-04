import { put, takeLatest } from "redux-saga/effects";

import { REQUEST_HOME_PAGE, receiveHomePage } from "../actions/home";

// load data
import {HomePageData} from '../api/home-page'
import {FooterData} from '../api/footer'
import {HeaderData} from '../api/header'

// worker Saga: will be fired on REQUEST_HOME_PAGE actions
function* homePage(action) {
  try {
    // do api call here
    const data = {HeaderData, HomePageData, FooterData}
    yield put(receiveHomePage(data));
  } catch (e) {
    // handle any error here
    yield put(receiveHomePage("Home page load fail!"));
  }
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "REQUEST_HOME_PAGE" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* homePageSaga() {
  yield takeLatest(REQUEST_HOME_PAGE, homePage);
}