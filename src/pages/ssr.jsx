import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const SSRPage = ({ serverData }) => {
  return (
    <Layout pageTitle="SSR Page with Dogs">
      <img alt="dog" src={serverData.message} />
    </Layout>
  );
};

export default SSRPage;

export const Head = () => <Seo title="SSR Page with Dogs" />;

export async function getServerData() {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!res.ok) {
      throw new Error("Response failed");
    }

    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: error.status,
      headers: {},
      props: {},
    };
  }
}
