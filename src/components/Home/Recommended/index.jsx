import React, { useRef } from "react";
import Card from "../../Card";
import { ArrowLeft, ArrowRight, Cards, Container, Wrapper } from "./styles";
import AliceCarousel from "react-alice-carousel";


export const Recommended = () => {
  const slider = useRef();

  const items = [
    <Card margin />,
    <Card margin />,
    <Card margin />,
    <Card margin />,
    <Card margin />,
    <Card margin />,
    <Card margin />,
  ];

  return (
    <Container className="nocopy">
      <div className="title center">Recommended</div>
      <div className="description center">
        You have been dreaming of and looking for the cosy and affordable homes.
      </div>
      <Wrapper>
        <Cards>
          <AliceCarousel
            arrows={false}
            ref={slider}
            autoWidth
            mouseTracking
            items={items}
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
export default Recommended;
