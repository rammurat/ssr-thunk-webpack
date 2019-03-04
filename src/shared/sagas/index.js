import {all, fork} from 'redux-saga/effects'

// import all custom methods available with home, psp and other sagas
import * as homePageSagas from './home'
import * as pspPageSagas from './psp'

// This is the easiest way combine all sagas together like home page, psp page ans so on
export default function* rootSaga() {
    yield all([...Object.values(homePageSagas), ...Object.values(pspPageSagas)].map(fork))
}