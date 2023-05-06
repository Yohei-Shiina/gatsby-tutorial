const increment = (state) => {
  return { ...state, count: state.count + 1 };
};
const decrement = (state) => {
  return { ...state, count: state.count - 1 };
};

export const numberHandlers = {
  INCREMENT: increment,
  DECREMENT: decrement,
};
