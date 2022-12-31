import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./Reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./Saga";
const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;