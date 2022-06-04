import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Container } from "./styles";

export const Detailes = () => {
  const { REACT_APP_BASE_URL: url } = process.env;

  const { id } = useParams();

  const { data } = useQuery(
    "gethouse by id",
    () =>
      fetch(`${url}/v1/houses/${id?.replace(":", "")}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json()),
    {
      onSuccess: (res) => {},
    }
  );

  return <Container>{data?.data?.address}</Container>;
};
export default Detailes;
