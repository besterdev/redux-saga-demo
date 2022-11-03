import { AxiosResponse } from "axios";
import { put, delay, call } from "redux-saga/effects";
import { getTicket } from "../../service/getTicker";
import { ActionType } from "../actionTypes";

interface AddAction {
  type: "";
  payload: number;
}

export function* setIncrementAction() {
  yield put({ type: ActionType.INCREMENT });
}

export function* setIncrementAsyncAction() {
  yield delay(1000);
  yield put({ type: ActionType.INCREMENT });
}

export function* setDecrementAction() {
  yield put({ type: ActionType.DECREMENT });
}

export function* setAddAction({ payload }: AddAction) {
  yield put({ type: ActionType.ADD, payload: payload });
}

export function* getTicker() {
  try {
    const resp: AxiosResponse = yield call(getTicket.get, "/ticker/24hr");
    const ticker = resp.data;

    yield delay(5000);
    yield put({
      type: ActionType.GET_TICKER,
      ticker: ticker,
    });
  } catch (error) {
    console.log(error);
  }
}
