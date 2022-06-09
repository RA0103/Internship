import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Features from "./Features";
import ImgPath from "./ImgPath";
import Info from "./Info";
import Map from "./Map";
import PropertyDetailes from "./Property Details";
import Schedule from "./Schedule a Tour";
import SimilarListings from "./Similar Listings";
import { Container, Wrapper } from "./styles";

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
      <Wrapper>
        <ImgPath />
        <Info data={data} />
        <Map data={data} />
        <PropertyDetailes data={data} />
        <Features />
        <Schedule />
        <SimilarListings />
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default Detailes;
