const addNewState = (state, action) => {
  const { newKey, newValue } = action.payload;
  return { ...state, [newKey]: newValue };
};

export const stateHandler = {
  ADD_NEW_STATE: addNewState,
};
