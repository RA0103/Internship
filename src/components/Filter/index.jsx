import React from "react";
import { Advanced, Container, Icon, Section } from "./styles";
import { Popover } from "antd";
import { Button, Input } from "../Generic";
import UseReplace from "../../hooks/useReplace";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
// import Button from '../Generic/Button'
// import Input from '../Generic/Input'

const { REACT_APP_BASE_URL: url } = process.env;

export const Filter = () => {
  const navigate = useNavigate();
  const onChange = ({ target }) => {
    const { value, name } = target;
    navigate(`${UseReplace(name, value)}`);
  };

  const { data } = useQuery(
    "getHomeList",
    () => {
      return fetch(`${url}/v1/categories/list`, {
        method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        console.log(res, "ressss");
      },
    }
  );

  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input onChange={onChange} name="country" placeholder="Country" />
        <Input onChange={onChange} name="region" placeholder="Region" />
        <Input onChange={onChange} name="city" placeholder="City" />
        <Input onChange={onChange} name="zip_code" placeholder="Zip Code" />
      </Section>
      <Advanced.Title>Apartment Info</Advanced.Title>
      <Section>
        <Input onChange={onChange} name="adress" placeholder="Adress" />
        <Input onChange={onChange} name="house_name" placeholder="House Name" />
        <Input onChange={onChange} name="rooms" placeholder="Rooms" />
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input onChange={onChange} name="min_price" placeholder="Min Price" />
        <Input onChange={onChange} name="max_price" placeholder="Max Price" />
        <select name="" id="">
          {data?.data?.map((value) => {
            return <option value={value}>{value?.name}</option>;
          })}
        </select>
      </Section>
      <Section>
        <Button width={"131px"} ml={20} type="primary">
          Search
        </Button>
      </Section>
    </Advanced>
  );

  return (
    <div className="center">
      <Container>
        <Input
          pl={"50px"}
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        >
          <Icon.Home />
        </Input>
        <Popover
          placement="bottomRight"
          content={advancedSearch}
          trigger="click"
        >
          <Button width={"131px"} type={"secondary"}>
            <Icon.Setting /> Advanced
          </Button>
        </Popover>
        <Button width={"131px"} type={"primary"}>
          <Icon.Search /> Search
        </Button>
      </Container>
    </div>
  );
};
export default Filter;
