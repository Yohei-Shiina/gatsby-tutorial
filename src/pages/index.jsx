// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import GlobalContext from "../context/GlobalContext";

const { useState } = React;
// Step 2: Define your component
const IndexPage = () => {
  const [newGlobalContextStateKey, setNewGlobalContextStateKey] = useState("");
  const [newGlobalContextStateValue, setNewGlobalContextStateValue] = useState("");

  const update = (updateFn) => {
    updateFn(newGlobalContextStateKey, newGlobalContextStateValue);
  };

  return (
    <Layout pageTitle="Home Page">
      <GlobalContext.Consumer>
        {({ state: globalState, functions: { countUp, addGlobalState } }) => {
          return (
            <>
              <p>I'm making this by following the Gatsby Tutorial.</p>
              <p>{globalState.clickCount}</p>
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
              <StaticImage
                alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
                src="../images/clifford.jpg"
              />
            </>
          );
        }}
      </GlobalContext.Consumer>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />;

// Step 3: Export your component
export default IndexPage;
