import React from "react";
import { Box, Container, Title } from "./styles";
import { Input } from "../../Generic";
import Map from "./Map";

export const Location = () => {
  return (
    <Container>
      <Title>Location</Title>
      <Box>
        <Input
          width={"485px"}
          placeholder={"Regions"}
          style={{
            border: "none",
            borderBottom: "1px solid #E6E9EC",
            outline: "none",
          }}
        />
        <Input
          width={"490px"}
          placeholder={"Friendly address"}
          style={{
            border: "none",
            borderBottom: "1px solid #E6E9EC",
            outline: "none",
          }}
        />
      </Box>
      <Input
        placeholder={"Map location"}
        mb={24}
        style={{
          border: "none",
          borderBottom: "1px solid #E6E9EC",
          outline: "none",
        }}
      />
      <Map />
      <Box.Bottom>
        <Input
          width={"485px"}
          placeholder={"Latidude"}
          style={{
            border: "none",
            borderBottom: "1px solid #E6E9EC",
            outline: "none",
          }}
        />
        <Input
          width={"490px"}
          placeholder={"Logtitude"}
          style={{
            border: "none",
            borderBottom: "1px solid #E6E9EC",
            outline: "none",
          }}
        />
      </Box.Bottom>
    </Container>
  );
};
export default Location;
