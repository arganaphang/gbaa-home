import React from "react";
import Head from "next/head";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Index: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Index;
