import { Dispatch } from "redux";
import { ActionType } from "../actionTypes";

const setIncrementAction = () => ({
  type: ActionType.INCREMENT,
});

const setDecrementAction = () => ({
  type: ActionType.DECREMENT,
});

const setAddAction = (value: number) => ({
  type: ActionType.ADD,
  payload: value,
});

export const onIncrement = () => {
  return (dispatch: Dispatch) => {
    dispatch(setIncrementAction());
  };
};

export const onDecrement = () => {
  return (dispatch: Dispatch) => {
    dispatch(setDecrementAction());
  };
};

export const onAdd = (value: number) => {
  return (dispatch: Dispatch) => {
    dispatch(setAddAction(value));
  };
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const onIncrementAsync = () => {
  return async (dispatch: Dispatch) => {
    await delay(1000);
    dispatch(setIncrementAction());
  };
};
