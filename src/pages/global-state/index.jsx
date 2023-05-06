import React, { useContext } from "react";
import Layout from "../../components/layout";
import ThemeContext from "../../context/ThemeContext";
import GlobalStateList from "../../components/GlobalStateList";
import Seo from "../../components/seo";

const Index = () => {
  const theme = useContext(ThemeContext);
  return (
    <Layout pageTitle={"Global State"}>
      <div>This is the page to check if global state is working.</div>
      <button
        onClick={() => {
          theme.toggleDark();
        }}
      >
        change theme
      </button>{" "}
      <GlobalStateList />
    </Layout>
  );
};

export const Head = () => <Seo title={"Global State"} />;

export default Index;
