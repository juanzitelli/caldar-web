import { GetStaticProps } from "next";
import React from "react";
import { useBoilers } from "../../hooks/useBoilers";
import { Boiler } from "../../types/entities";

interface Props {}

const BoilersPage = (props: Props) => {
  const { boilers, error } = useBoilers();

  if (error) {
    return <>{error}</>;
  }

  if (!boilers) {
    return <>Loading</>;
  }

  return (
    <>
      <h1>Boilers</h1>
      {boilers.map((item: Boiler) => {
        return item.model;
      })}
    </>
  );
};

export default BoilersPage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Boilers page",
    },
  };
};
