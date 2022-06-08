import React from "react";
import { Container, Icon, Wrapper } from "./styles";

export const Input = ({
  children,
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
  name,
  value,
  style,
  pd,
  pt,
  pb,
}) => {
  return (
    <Wrapper mr={mr} ml={ml} mb={mb} mt={mt}>
      <Icon>{children}</Icon>
      <Container
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        pl={pl}
        type={type}
        width={width}
        height={height}
        onClick={onClick}
        name={name}
        value={value}
        style={style}
        pd={pd}
        pt={pt}
        pb={pb}
      ></Container>
    </Wrapper>
  );
};
export default Input;
