import React from "react";
import { Container } from "./styles";

export const Button = ({
  children,
  onClick,
  height,
  width,
  type,
  mr,
  ml,
  mb,
  mt,
  style
}) => {
  return (
    <Container
    className="nocopy"
      mr={mr}
      ml={ml}
      mb={mb}
      mt={mt}
      type={type}
      width={width}
      height={height}
      onClick={onClick}
      children={children}
      style={style}
    >
      {children}
    </Container>
  );
};
export default Button;
