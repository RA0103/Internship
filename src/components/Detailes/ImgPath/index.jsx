import React from "react";
import { Container, Image, Wrapper } from "./styles";
import h1 from "../../../assets/images/house1.png";
import h2 from "../../../assets/images/house2.png";
import h3 from "../../../assets/images/house3.png";
import h4 from "../../../assets/images/house4.png";
import h5 from "../../../assets/images/house6.png";

export const ImgPath = () => {
  return (
    <Container>
      <Wrapper.H1>
        <Image src={h1} />
      </Wrapper.H1>
      <Wrapper.H2>
        <Image src={h2} />
      </Wrapper.H2>
      <Wrapper.H3>
        <Image src={h3} />
      </Wrapper.H3>
      <Wrapper.H4>
        <Image src={h4} />
      </Wrapper.H4>
      <Wrapper.H5>
        <Image src={h5} />
        <Wrapper.Number>+15</Wrapper.Number>
      </Wrapper.H5>
    </Container>
  );
};
export default ImgPath;
