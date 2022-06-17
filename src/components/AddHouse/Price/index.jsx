import React from "react";
import { Box, Container, Title } from "./styles";
import { Input } from "../../Generic";

export const Price = () => {
  return (
    <Container>
      <Title>Price</Title>
      <Box>
        <Box.Top>
          <Input
            width={"490px"}
            placeholder={"Price ($)"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
          <Input
            mt={15}
            width={"490px"}
            placeholder={"Price Suffix"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Box.Top>
        <Box.Bottom>
          <Input
            width={"490px"}
            placeholder={"Price Prefix"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
          <Input
            mt={15}
            width={"490px"}
            placeholder={"Price Custom"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Box.Bottom>
      </Box>
    </Container>
  );
};
export default Price;
