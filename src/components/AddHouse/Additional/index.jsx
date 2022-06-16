import React from "react";
import { Box, Container, Title } from "./styles";
import { Input } from "../../Generic";

export const Additional = () => {
  return (
    <Container>
      <Title>Additional</Title>
      <Box>
        <Box.Id>
          <Input
            width={"290px"}
            placeholder={"Property ID"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Box.Id>
        <Box.ParentProperty>
          <Input
            width={"370px"}
            placeholder={"Parent property"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Box.ParentProperty>
        <Box.Status>
          <Input
            width={"290px"}
            placeholder={"Status"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Box.Status>
        <Box.Id>
          <Input
            width={"290px"}
            placeholder={"Label"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Box.Id>
        <Box.ParentProperty>
          <Input
            width={"370px"}
            placeholder={"Material"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Box.ParentProperty>
        <Box.Status>
          <Input
            width={"370px"}
            placeholder={"Rooms"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Box.Status>
        <Box.Id>
          <Input
            width={"290px"}
            placeholder={"Beds"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Box.Id>
        <Box.ParentProperty>
          <Input
            width={"370px"}
            placeholder={"Baths"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Box.ParentProperty>
        <Box.Status>
          <Input
            width={"290px"}
            placeholder={"Garages"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Box.Status>
        <Box.Id>
          <Input
            width={"290px"}
            placeholder={"Year build"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Box.Id>
        <Box.ParentProperty>
          <Input
            width={"370px"}
            placeholder={"Home area (sqft)"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Box.ParentProperty>
        <Box.Status>
          <Input
            width={"290px"}
            placeholder={"Lot dimensions"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Box.Status>
        <Box.Id>
          <Input
            width={"290px"}
            placeholder={"Lot area (sqft)"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Box.Id>
      </Box>
    </Container>
  );
};
export default Additional;
