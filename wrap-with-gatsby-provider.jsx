import React from "react";
import { Provider } from "react-redux";

import createStore from "./src/state/createStore";

// eslint-disable-next-line react/display-name,react/prop-types
const WrapWithGatsbyProvider = ({ children }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore();
  return <Provider store={store}>{children}</Provider>;
};
console.info("WrapWithGatsbyProvider is loaded");
export default WrapWithGatsbyProvider;
