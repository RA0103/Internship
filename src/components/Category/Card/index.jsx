import React from "react";
import { Container, Image, Title } from "./styles";
import img from "../../../assets/images/uy-1.png";

export const Card = ({ title, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Title>
        {title}
      </Title>
      <Image src={img} />
    </Container>
  );
};
export default Card;
