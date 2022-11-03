import { ActionType } from "../actionTypes";

type Ticker = {
  lastPrice: string;
  volume: string;
};

interface Action {
  type: "GET_TICKER";
  ticker: Ticker[];
}

const initialState: any = {
  ticker: [],
};

const tickerReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_TICKER:
      return { ...state, ticker: action.ticker };
    default:
      return state;
  }
};

export default tickerReducer;
