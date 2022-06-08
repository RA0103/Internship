import styled from "styled-components";

const Container = styled.div`
  width: 1200px;
  display: flex;
  margin-top: 48px;
  margin-bottom: 24px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const LocationTitle = styled.div`
  grid-column: 1/7;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
  margin-bottom: 24px;
`;

const Address = styled.div`
  grid-column: 1/3;
  display: flex;
  margin-bottom: 24px;
`;

Address.City = styled.div`
  display: flex;
  grid-column: 3/5;
`;

Address.Area = styled.div`
  display: flex;
  grid-column: 5/7;
`;
Address.State = styled.div`
  display: flex;
  grid-column: 1/3;
`;

Address.Zip = styled.div`
  display: flex;
  grid-column: 3/5;
`;

Address.Country = styled.div`
  display: flex;
  grid-column: 5/7;
`;

Address.Name = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
  margin-right: 8px;
`;

Address.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

export { Container, Wrapper, LocationTitle, Address };
