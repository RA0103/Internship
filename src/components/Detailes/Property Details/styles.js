import styled from "styled-components";

const Container = styled.div`
  margin-top: 48px;
  display: flex;
  border-bottom: 1px solid #E6E9EC;
  padding-bottom: 40px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  width: 100%;
`;

const Title = styled.div`
  margin-bottom: 24px;
  grid-column: 1/12;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
`;

Title.Id = styled.div`
  display: flex;
  margin-bottom: 24px;
  grid-column: 1/5;
`;
Title.Bed = styled.div`
  display: flex;
  margin-bottom: 24px;
  grid-column: 5/9;
`;

Title.Property = styled.div`
  display: flex;
  margin-bottom: 24px;
  grid-column: 9/12;
`;

Title.Details = styled.div`
  margin-right: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
`;

Title.Name = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

export { Container, Wrapper, Title };
