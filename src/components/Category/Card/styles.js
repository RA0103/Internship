import styled from "styled-components";

const Container = styled.div`
  width: 280px;
  height: 350px;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  position: relative;
`;

const Image = styled.img``;

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-10%, -50%);

  text-align: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
`;

export { Container, Image, Title };
