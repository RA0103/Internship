import React, { useState } from "react";
import { Body, Container, Wrapper } from "./styles";
import Filter from "../Filter";
import { useQuery } from "react-query";
import Card from "../Card";
import { useLocation } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

export const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();

  useQuery(
    ["getHomeList", search],
    () => {
      return fetch(`${url}/v1/houses/list${search || "?"}`).then((res) =>
        res.json()
      );
    },
    {
      onSuccess: (res) => {
        console.log(res, "res");
        setData(res?.dataList[0] || []);
      },
    }
  );

  return (
    <Container>
      <Filter />
      <Wrapper>
        <div className="title center">Properties</div>
        <div className="description center">
          You have been dreaming of and looking for the cosy and affordable
          homes.
        </div>
      </Wrapper>
      <Body>
        {data.map((value) => {
          return <Card key={value.id} info={value} />;
        })}
      </Body>
    </Container>
  );
};
export default Properties;
