import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import tickerReducer from "./tickerReducer";

const reducers = combineReducers({
  ticker: tickerReducer,
  counter: counterReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
