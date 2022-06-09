import React, { useRef, useState } from "react";
import Card from "../../Card";
import { ArrowLeft, ArrowRight, Cards, Container, Wrapper } from "./styles";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

export const SimilarListings = () => {
  const [state, setState] = useState([]);
  const navigate = useNavigate();

  const onSelect = (value) => {
    console.log(value, "on select");
    navigate(`/properties?category_id=${value}`);
  };

  useQuery(
    "",
    () => {
      return fetch(`${url}/v1/categories/list`).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        let list = res?.data?.map((value) => {
          return (
            <Card onClick={() => onSelect(value?.id)} title={value?.name} />
          );
        });
        setState(list);
      },
    }
  );

  const slider = useRef();

  return (
    <Container className='nocopy'>
      <div className='title center'>Similar listings</div>
      <div className='description center'>
        You have been dreaming of and looking for the cosy and affordable homes.
      </div>
      <Wrapper>
        <Cards>
          <AliceCarousel
            arrows={false}
            ref={slider}
            autoWidth
            mouseTracking
            items={state}
          />
          <ArrowRight onClick={() => slider.current?.slidePrev()}>
            &lang;
          </ArrowRight>
          <ArrowLeft onClick={() => slider.current?.slideNext()}>
            &rang;
          </ArrowLeft>
        </Cards>
      </Wrapper>
    </Container>
  );
};
export default SimilarListings;
