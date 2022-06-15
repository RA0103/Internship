import React from "react";
import { useQuery } from "react-query";
import { Container, PropertiesDetails, Title } from "./styles";
import Card from "../Card";
import Footer from "../Footer";
import { Button } from "../Generic";
import { useNavigate } from "react-router-dom";

export const MyProperties = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  const navigate = useNavigate();

  const { data } = useQuery(
    "",
    () =>
      fetch(`${url}/v1/houses/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json()),
    {
      onSuccess: (res) => console.log(res, "ressss"),
    }
  );

  return (
    <>
      <Container>
        <Title>
          <Title.Container>My Properties</Title.Container>
          <Button
            onClick={() => navigate("/profile/addHouse")}
            type={"primary"}
            width={"131px"}
          >
            Add House
          </Button>
        </Title>
        <PropertiesDetails>
          {data?.data?.map((value) => (
            <Card key={value.id} info={value} />
          ))}
        </PropertiesDetails>
      </Container>
      <Footer />
    </>
  );
};
export default MyProperties;
