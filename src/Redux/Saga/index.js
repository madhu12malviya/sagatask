import userSaga from "./sagaAction"
import { all } from "redux-saga/effects"
export default function* rootSaga() {
    yield all([
        userSaga()
    ])
    // code after all-effect
  }