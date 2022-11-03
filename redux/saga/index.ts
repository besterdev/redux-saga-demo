import { takeEvery, all } from "redux-saga/effects";
import { ActionType } from "../actionTypes";
import {
  setIncrementAction,
  setDecrementAction,
  setAddAction,
  setIncrementAsyncAction,
  getTicker,
} from "./counterAction";

function* watchIncrementAction() {
  yield takeEvery(ActionType.INCREMENT_REQ, setIncrementAction);
}

function* watchIncrementAsyncAction() {
  yield takeEvery(ActionType.INCREMENT_ASYNC_REQ, setIncrementAsyncAction);
}

function* watchDecrementAction() {
  yield takeEvery(ActionType.DECREMENT_REQ, setDecrementAction);
}

function* watchAddAction() {
  yield takeEvery(ActionType.ADD_REQ, setAddAction);
}

function* watchTickerAction() {
  yield takeEvery(ActionType.GET_TICKER, getTicker);
}

export default function* rootSaga() {
  yield all([
    watchIncrementAction(),
    watchIncrementAsyncAction(),
    watchDecrementAction(),
    watchAddAction(),
    watchTickerAction(),
  ]);
}
