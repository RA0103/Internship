import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 30px;
  width: 1050px;
  height: 815px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  margin-bottom: 32px;
`;

const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 35px 0;
`;

Box.Bottom = styled.div`
  margin-top: 44px;
  display: flex;
  justify-content: space-between;
`

export { Container, Title, Box };
