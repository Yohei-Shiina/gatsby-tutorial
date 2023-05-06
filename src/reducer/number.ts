const increment = (state, isDecrement) => {
  return { ...state, count: state.count + (isDecrement ? -1 : 1) };
};
const decrement = (state) => {
  return increment(state, true);
};

export const numberHandlers = {
  INCREMENT: increment,
  DECREMENT: decrement,
};
