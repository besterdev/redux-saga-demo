export interface IncrementAction {
  type: "INCREMENT";
}

export interface IncrementReqAction {
  type: "INCREMENT_REQ";
}

export interface IncrementAsyncAction {
  type: "INCREMENT_ASYNC";
}

export interface IncrementAsyncReqAction {
  type: "INCREMENT_ASYNC_REQ";
}

export interface DecrementAction {
  type: "DECREMENT";
}

export interface DecrementReqAction {
  type: "DECREMENT_REQ";
}

export interface AddAction {
  type: "ADD";
  payload: number;
}

export interface AddReqAction {
  type: "ADD_REQ";
  payload: number;
}

interface Ticker {
  lastPrice: string;
  volume: string;
}

export interface GetTickerAction {
  type: "GET_TICKER";
  ticker: Ticker[];
}

export enum ActionType {
  INCREMENT = "INCREMENT",
  INCREMENT_REQ = "INCREMENT_REQ",
  DECREMENT = "DECREMENT",
  DECREMENT_REQ = "DECREMENT_REQ",
  ADD = "ADD",
  ADD_REQ = "ADD_REQ",
  INCREMENT_ASYNC_REQ = "INCREMENT_ASYNC_REQ",
  GET_TICKER = "GET_TICKER",
}
