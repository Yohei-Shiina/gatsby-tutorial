export type RootState = {
  count?: number;
  weather?: string;
};

const initialState: RootState = {
  count: 0,
  weather: "sunny",
};

export default initialState;
