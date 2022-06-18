import React from "react";
import { Box, Button, Container, Icon, Text, Title } from "./styles";
import { Input } from "../../Generic";

export const Media = () => {
  return (
    <Container>
      <Title>Media</Title>
      <Text>Featured image</Text>
      <Box.Container>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Box.Container>
      <Button>Upload</Button>
      <Title.Text>Gallery</Title.Text>
      <Button>Upload</Button>
      <Title.Text>Attachment</Title.Text>
      <Icon.Wrapper>
        <Icon.Download />
        <Icon.Text>test_property.pdf</Icon.Text>
      </Icon.Wrapper>
      <Button>Upload</Button>
      <Input
        placeholder={"Video link"}
        style={{ border: "none", borderBottom: "1px solid #E6E9EC" }}
      />
      <Input
        mt={44}
        height={"64px"}
        pb={50}
        placeholder={"Virtual tour"}
        style={{ border: "none", borderBottom: "1px solid #E6E9EC" }}
      />
    </Container>
  );
};
export default Media;
