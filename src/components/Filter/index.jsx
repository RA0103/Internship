import React from "react";
import { Advanced, Container, Icon, Section } from "./styles";
import { Popover } from "antd";
import { Button, Input } from "../Generic";
// import Button from '../Generic/Button'
// import Input from '../Generic/Input'

export const Filter = () => {
  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input placeholder="Country" />
        <Input placeholder="Region" />
        <Input placeholder="City" />
        <Input placeholder="Zip Code" />
      </Section>
      <Advanced.Title>Apartment Info</Advanced.Title>
      <Section>
        <Input placeholder="Adress" />
        <Input placeholder="House Name" />
        <Input placeholder="Rooms" />
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input placeholder="Min Price" />
        <Input placeholder="Max Price" />
      </Section>
      <Section>
        <Button width={"131px"} ml={20} type="primary">
          Search
        </Button>
      </Section>
    </Advanced>
  );

  return (
    <Container>
      <Input
        pl={"50px"}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      >
        <Icon.Home />
      </Input>
      <Popover placement="bottomRight" content={advancedSearch} trigger="click">
        <Button width={"131px"} type={"secondary"}>
          <Icon.Setting /> Advanced
        </Button>
      </Popover>
      <Button width={"131px"} type={"primary"}>
        <Icon.Search /> Search
      </Button>
    </Container>
  );
};
export default Filter;
