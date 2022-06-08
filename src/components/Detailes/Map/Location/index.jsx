import React from "react";
import { Address, Container, LocationTitle, Wrapper } from "./styles";

export const Location = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        <LocationTitle>Location</LocationTitle>
        <Address>
          <Address.Name>Address:</Address.Name>
          <Address.Title>{data?.data?.address}</Address.Title>
        </Address>
        <Address.City>
          <Address.Name>City:</Address.Name>
          <Address.Title>{data?.data?.city}</Address.Title>
        </Address.City>
        <Address.Area>
          <Address.Name>Area:</Address.Name>
          <Address.Title>{data?.data?.address}</Address.Title>
        </Address.Area>
        <Address.State>
          <Address.Name>State/County: </Address.Name>
          <Address.Title>{data?.data?.region}</Address.Title>
        </Address.State>
        <Address.Zip>
          <Address.Name>Zip:</Address.Name>
          <Address.Title>{data?.data?.zipCode}</Address.Title>
        </Address.Zip>
        <Address.Country>
          <Address.Name>Country:</Address.Name>
          <Address.Title>{data?.data?.country}</Address.Title>
        </Address.Country>
      </Wrapper>
    </Container>
  );
};
export default Location;
