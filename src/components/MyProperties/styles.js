import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 32px 0;
`;

Title.Container = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0d263b;
`;

const PropertiesDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Container, Title, PropertiesDetails };
