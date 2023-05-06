import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { GlobalContextInput } from "./GlobalContextInput";

const GlobalStateList = () => {
  const globalContext = useContext(GlobalContext);

  const { state: globalState } = globalContext;
  return (
    <>
      <h1>Global State Section</h1>
      <GlobalContextInput />
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(globalState).map(([key, value]) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default GlobalStateList;
