import React from "react";
import { Container } from "./styles";
import Filter from "../Filter";
import Carousel from "./Carousel";
import Recommended from "./Recommended";
import Category from "../Category";

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recommended />
      <Category />
    </Container>
  );
};
export default Home;