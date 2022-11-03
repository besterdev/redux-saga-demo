import { ActionType } from "../actionTypes";

interface Action {
  type: "INCREMENT" | "DECREMENT" | "ADD";
  payload: number;
}
const initialState: number = 0;

const reducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case ActionType.INCREMENT:
      return state + 1;
    case ActionType.DECREMENT:
      return state - 1;
    case ActionType.ADD:
      return state + payload;
    default:
      return state;
  }
};

export default reducer;
