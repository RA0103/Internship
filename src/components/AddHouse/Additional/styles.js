import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 30px;
  width: 1050px;
  height: 450px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  margin: 32px 0;
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
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  /* border: 1px solid red; */
  margin: 25px 0;
`;

Box.Id = styled.div`
  grid-column: 1/5;
  /* border: 1px solid red; */
`;

Box.ParentProperty = styled.div`
  grid-column: 5/10;
  /* border: 1px solid red; */
`;

Box.Status = styled.div`
  grid-column: 10/14;
  /* border: 1px solid red; */
`;

export { Container, Title, Box };
