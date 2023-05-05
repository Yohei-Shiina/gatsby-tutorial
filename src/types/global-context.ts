export type GlobalState = {
  [key: string]: string | number | undefined;
};

export type GlobalContextFunctions = {
  countUp?: () => void;
  addGlobalState?: (key: string, value: any) => void;
};

export type GlobalContextValue = {
  state: GlobalState;
  functions: GlobalContextFunctions;
};
