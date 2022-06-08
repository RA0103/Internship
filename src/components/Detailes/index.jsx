import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Features from "./Features";
import ImgPath from "./ImgPath";
import Info from "./Info";
import Map from "./Map";
import PropertyDetailes from "./Property Details";
import Schedule from "./Schedule a Tour";
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

  return (
    <Container>
      <ImgPath />
      <Info data={data} />
      <Map data={data}/>
      <PropertyDetailes data={data}/>
      <Features />
      <Schedule />
    </Container>
  );
};
export default Detailes;
