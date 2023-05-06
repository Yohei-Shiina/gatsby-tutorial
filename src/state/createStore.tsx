import { createStore as reduxCreateStore } from "redux";
import { numberHandlers } from "../reducer/number";
import { stateHandler } from "../reducer/state";
import initialState from "./initialState";

const reducer = (state, action) => {
  const actionTypeHandlers = {
    ...numberHandlers,
    ...stateHandler,
  };

  if (actionTypeHandlers.hasOwnProperty(action.type)) {
    const handler = actionTypeHandlers[action.type];
    return handler(state, action);
  }
  return state;
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
