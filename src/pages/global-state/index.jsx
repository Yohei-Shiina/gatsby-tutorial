import React from "react";
import Layout from "../../components/layout";
import ThemeContext from "../../context/ThemeContext";
import GlobalContext from "../../context/GlobalContext";

const Index = () => {
  return (
    <Layout>
      <GlobalContext.Consumer>
        {({ state: globalState, functions: { countUp } }) => {
          console.log(globalState);
          return (
            <ThemeContext.Consumer>
              {(theme) => {
                // console.log(globalContext);
                return (
                  <>
                    <div>This is the page to check if global state is working.</div>
                    <button
                      onClick={() => {
                        theme.toggleDark();
                      }}
                    >
                      change theme
                    </button>{" "}
                    <h1>Global State List</h1>
                    <p>
                      <button onClick={countUp}>count up</button>
                    </p>
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
              }}
            </ThemeContext.Consumer>
          );
        }}
      </GlobalContext.Consumer>
    </Layout>
  );
};

export default Index;
