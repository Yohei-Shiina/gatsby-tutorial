import React, { useState, useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export const GlobalContextInput = () => {
  const [newGlobalContextStateKey, setNewGlobalContextStateKey] = useState("");
  const [newGlobalContextStateValue, setNewGlobalContextStateValue] = useState("");

  const globalContext = useContext(GlobalContext);
  const {
    functions: { countUp, addGlobalState },
  } = globalContext;

  const update = (updateFn) => {
    updateFn(newGlobalContextStateKey, newGlobalContextStateValue);
  };

  return (
    <>
      <p>
        <button onClick={countUp}>count up</button>
      </p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", width: "49%" }}>
          <label htmlFor="key">Key: </label>
          <input
            type="text"
            id="key"
            style={{ width: "100%" }}
            value={newGlobalContextStateKey}
            onChange={(e) => setNewGlobalContextStateKey(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", width: "49%" }}>
          <label htmlFor="value">value: </label>
          <input
            type="text"
            id="value"
            style={{ width: "100%" }}
            value={newGlobalContextStateValue}
            onChange={(e) => setNewGlobalContextStateValue(e.target.value)}
          />
        </div>
      </div>
      <p>
        <button
          onClick={() => {
            update(addGlobalState);
          }}
        >
          保存
        </button>
      </p>
    </>
  );
};
