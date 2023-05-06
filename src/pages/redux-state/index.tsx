import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/layout";

// Component
const Counter = () => {
  const count = useSelector((state: { count: number }) => state.count);

  const dispatch = useDispatch();

  const increment = useCallback(() => {
    dispatch({ type: "INCREMENT" });
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const Index = () => {
  return (
    <Layout pageTitle={"Redux State"}>
      <Counter />
    </Layout>
  );
};

export default Index;
