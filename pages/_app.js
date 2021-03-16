import "@shopify/polaris/dist/styles.css";

import { Context, Provider } from "@shopify/app-bridge-react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "next/app";
import { AppProvider } from "@shopify/polaris";
import ClientRouter from "../components/ClientRouter";
import Head from "next/head";
import React from "react";
import { authenticatedFetch } from "@shopify/app-bridge-utils";
import translations from "@shopify/polaris/locales/en.json";

class MyProvider extends React.Component {
  static contextType = Context;

  render() {
    const app = this.context;

    const client = new ApolloClient({
      fetch: authenticatedFetch(app),
      fetchOptions: {
        credentials: "include",
      },
    });

    return (
      <ApolloProvider client={client}>{this.props.children}</ApolloProvider>
    );
  }
}

class MyApp extends App {
  render() {
    const { Component, pageProps, shopOrigin } = this.props;

    const config = { apiKey: API_KEY, shopOrigin, forceRedirect: true };

    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
          <ClientRouter />
          <AppProvider i18n={translations}>
            <MyProvider>
              <Component {...pageProps} />
            </MyProvider>
          </AppProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

MyApp.getInitialProps = async ({ ctx }) => {
  return {
    shopOrigin: ctx.query.shop,
  };
};

export default MyApp;
