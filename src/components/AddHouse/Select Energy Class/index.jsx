import React from "react";
import { Container, InputContainer, Title } from "./styles";
import { Input } from "../../Generic";

export const SelectEnergyClass = () => {
  return (
    <Container>
      <Title>Select Energy Class</Title>
      <InputContainer>
        <Input
          width={"480px"}
          placeholder={"Energy class"}
          style={{ border: "none", borderBottom: "1px solid #E6E9EC" }}
        />
        <Input
          width={"480px"}
          placeholder={"Energy Index in kWh/m2a"}
          style={{ border: "none", borderBottom: "1px solid #E6E9EC" }}
        />
      </InputContainer>
    </Container>
  );
};
export default SelectEnergyClass;
