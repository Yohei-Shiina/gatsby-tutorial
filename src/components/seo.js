import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const Seo = ({ title, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: defaultDescription,
    image: `${siteUrl}${image}`,
    url: siteUrl,
    twitterUsername,
  };
  console.log(seo.url);
  console.log(seo.title);
  console.log(defaultDescription);
  console.log(image);
  console.log(twitterUsername);

  return (
    <>
      <title>
        {seo.title} | {defaultTitle}
      </title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content="https://gatsbytutorialbyyohei.gatsbyjs.io/sql.jpg" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🧙</text></svg>"
      />
      {children}
    </>
  );
};

export default Seo;
