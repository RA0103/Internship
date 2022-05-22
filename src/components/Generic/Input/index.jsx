import React from "react";
import { Container, Icon, Wrapper } from "./styles";

export const Input = ({
  childeren,
  onClick,
  height,
  width,
  type,
  mr,
  ml,
  mb,
  mt,
  pl,
  onChange,
  placeholder,
  defaultValue,
}) => {
  return (
    <Wrapper mr={mr} ml={ml} mb={mb} mt={mt}>
      <Icon>{childeren}</Icon>
      <Container
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        pl={pl}
        type={type}
        width={width}
        height={height}
        onClick={onClick}
      ></Container>
    </Wrapper>
  );
};
export default Input;
