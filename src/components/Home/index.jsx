import React from "react";
import { Container } from "./styles";
import Filter from "../Filter";
import Carousel from "./Carousel";
import Recommended from "./Recommended";
import Category from "../Category";
import Footer from "../Footer";

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recommended />
      <Category />
      <Footer />
    </Container>
  );
};
export default Home;