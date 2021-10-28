import type { AppProps as NextAppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { DefaultLayout } from "../components/layouts/DefaultLayout";

import "../styles/globals.css";

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

type CustomPageProps = {
  title: string;
};

const CustomApp = ({ Component, pageProps }: AppProps<CustomPageProps>) => {
  const title = pageProps.title || "CaldAR Website";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
};
export default CustomApp;
