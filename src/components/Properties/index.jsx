import React, { useState } from "react";
import { Body, Container, Wrapper } from "./styles";
import Filter from "../Filter";
import { useQuery } from "react-query";
import Card from "../Card";
import { useLocation } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

const { REACT_APP_BASE_URL: url } = process.env;

export const Properties = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("Properties");
  const { search } = useLocation();
  const query = useSearch();

  console.log(query.get("category_id"));

  useQuery(
    ["getHomeList", search],
    () => {
      return fetch(`${url}/v1/houses/list${search || "?"}`).then((res) =>
        res.json()
      );
    },
    {
      onSuccess: (res) => {
        setData(res?.data || []);
      },
    }
  );

  useQuery(
    "getHomeList",
    () => {
      return (
        query.get("category_id") &&
        fetch(`${url}/v1/categories/${query.get("category_id")}`, {
          method: "get",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }).then((res) => res.json())
      );
    },
    {
      onSuccess: (res) => {
        console.log(res, "ressss");
        query.get("category_id") && setTitle(res?.data?.name || 'Properties');
      },
    }
  );

  return (
    <Container>
      <Filter />
      <Wrapper>
        <div className="title center">{title}</div>
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
