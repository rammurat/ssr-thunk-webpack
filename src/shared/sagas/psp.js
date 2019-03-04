import { put, takeLatest } from "redux-saga/effects";

import { REQUEST_PSP_PAGE, receivePSPPage } from "../actions/psp";

// load data
import {PSPPageData} from '../api/psp'
import {FooterData} from '../api/footer'
import {HeaderData} from '../api/header'

// worker Saga: will be fired on REQUEST_PSP_PAGE actions
function* pspPage(action) {
  try {
    // do api call here
    const data = {HeaderData, PSPPageData, FooterData}
    yield put(receivePSPPage(data));
  } catch (e) {
    // handle any exception here
    yield put(receivePSPPage("PSP page load fail!"));
  }
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "REQUEST_PSP_PAGE" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* sagaPSPPage() {
  yield takeLatest(REQUEST_PSP_PAGE, pspPage);
}