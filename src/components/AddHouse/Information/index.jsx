import React from "react";
import { Box, Container, InputContainer, Title } from "./styles";
import { Input } from "../../Generic";

export const Information = () => {
  return (
    <Container>
      <Title>Add new property</Title>
      <Box>
        <Title.Name>Contact information</Title.Name>
        <InputContainer>
          <Input
            width={"450px"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
            placeholder={"Property Title"}
          />
          <Input
            width={"450px"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
            placeholder={"Type"}
          />
        </InputContainer>
        <Input
          mt={60}
          height={"64px"}
          pb={54}
          width={"1100px"}
          style={{
            border: "none",
            borderBottom: "1px solid #E6E9EC",
            outline: "none",
          }}
          placeholder={"Type"}
        />
      </Box>
    </Container>
  );
};
export default Information;
