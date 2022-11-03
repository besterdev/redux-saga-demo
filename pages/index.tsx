import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../redux/actions/counterAction";
import styles from "../styles/Home.module.css";
import _ from "lodash";
import { RootState } from "../redux/reducers";

import { ActionType } from "../redux/actionTypes";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

// import { bindActionCreators } from "redux";

interface Ticker {
  lastPrice: string;
  volume: string;
}

const Home: NextPage = () => {
  const state = useSelector((state: RootState) => state.counter);
  const ticker: Ticker[] = useSelector(
    (state: RootState) => state.ticker.ticker
  );
  const dispatch = useDispatch();
  const action = (type: any, payload?: any) => dispatch({ type, payload });

  // const counterReducer = useSelector(({ counterReducer }) => counterReducer);
  // const { onIncrementAsync, onIncrement, onDecrement, onAdd } =
  //   bindActionCreators(action, dispatch);

  return (
    <div className={styles.container}>
      <button
        className=" p-4 text-white bg-red-500 border border-gray-100 rounded-md"
        onClick={() => action(ActionType.INCREMENT_ASYNC_REQ)}
      >
        Increment 1 second
      </button>
      <button
        className=" p-4 text-white bg-red-500 border border-gray-100 rounded-md"
        onClick={() => action(ActionType.INCREMENT_REQ)}
      >
        Increment
      </button>
      <button
        className=" p-4 text-white bg-red-500 border border-gray-100 rounded-md"
        onClick={() => action(ActionType.DECREMENT_REQ)}
      >
        Decrement
      </button>
      <button
        className=" p-4 text-white bg-red-500 border border-gray-100 rounded-md"
        onClick={() => action(ActionType.ADD_REQ, 10)}
      >
        Add
      </button>
      <hr />
      <p>{state}</p>
      <button
        className=" p-4 text-white bg-red-500 border border-gray-100 rounded-md"
        onClick={() => action(ActionType.GET_TICKER)}
      >
        Get Ticker
      </button>
      {_.map(ticker, (item, i) => (
        <div className="flex space-x-4 space-y-4 bg-white rounded-md p-4 border-black border my-2">
          <p className="text-gray-500 font-medium ">
            lastPrice: {item.lastPrice} volume: {item.volume}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
