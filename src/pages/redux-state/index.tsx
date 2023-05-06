import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/layout";
import { RootState } from "../../state/initialState";

// Component
const Counter = () => {
  const dispatch = useDispatch();

  const increment = useCallback(() => {
    dispatch({ type: "INCREMENT" });
  }, [dispatch]);

  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const AddNewState = () => {
  const [newKey, setNewKey] = useState("");
  const [newValue, setNewValue] = useState("");

  const dispatch = useDispatch();

  const addNewState = useCallback(() => {
    dispatch({ type: "ADD_NEW_STATE", payload: { newKey, newValue } });
  }, [newKey, newValue, dispatch]);

  return (
    <div>
      <h1>Add New State</h1>
      <label htmlFor="textInput">Key:</label>
      <input
        type="text"
        id="textInput"
        value={newKey}
        onChange={(e) => {
          console.log(e.target.value);

          setNewKey(e.target.value);
        }}
      />

      <label htmlFor="textInputValue">Value:</label>
      <input
        type="text"
        id="textInputValue"
        value={newValue}
        onChange={(e) => {
          setNewValue(e.target.value);
        }}
      />

      <button onClick={addNewState}>保存</button>
    </div>
  );
};

const Index = () => {
  const globalState = useSelector((state: RootState) => state);

  return (
    <Layout pageTitle={"Redux State"}>
      <Counter />
      <AddNewState />
      <h1>Redux State List</h1>
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(globalState).map(([key, value]) => {
            return (
              <tr>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
};

export default Index;
