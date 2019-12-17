import React from "react";
import Meta from "../components/seo/Meta";
import Layout from "../components/layout/Layout";

const NotFoundPage = () => (
  <Layout bottomNav={true}>
    <Meta />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
