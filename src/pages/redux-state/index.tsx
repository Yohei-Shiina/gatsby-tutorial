import React from "react";
import { connect } from "react-redux";
import Layout from "../../components/layout";

// Component
const Counter = ({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
);

const mapStateToProps = ({ count }) => {
  return { count };
};

const mapDispatchToProps = (dispatch) => {
  return { increment: () => dispatch({ type: "INCREMENT" }) };
};

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

const Index = () => {
  return (
    <Layout pageTitle={"Redux State"}>
      <ConnectedCounter />
    </Layout>
  );
};

export default Index;
