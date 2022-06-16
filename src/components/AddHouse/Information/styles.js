import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0d263b;
  display: flex;
  justify-content: start;
  margin-bottom: 32px;
`;

const Box = styled.div`
  padding: 24px 30px;
  width: 1050px;
  height: 301px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
`;

Title.Name = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;

export { Container, Title, Box, InputContainer };
