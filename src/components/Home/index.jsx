import React from "react";
import { Container } from "./styles";
import Filter from "../Filter";
import Carousel from "./Carousel";
import Recommended from "./Recommended";

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recommended />
    </Container>
  );
};
export default Home;