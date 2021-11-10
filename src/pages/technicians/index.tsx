import { GetStaticProps } from "next";
import React from "react";

interface Props {}

const TechniciansPage = (props: Props) => {
  return (
    <>
      <h1>Technicians</h1>
    </>
  );
};

export default TechniciansPage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Technicians page",
    },
  };
};
