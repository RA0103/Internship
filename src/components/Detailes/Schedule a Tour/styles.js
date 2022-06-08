import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  grid-template-columns: repeat(8, 1fr);
  display: grid;
  border: 1px solid red;
`;

const Tour = styled.div`
  grid-column: 1/9;
  border: 1px solid red;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
`;

Tour.Date = styled.div`
  grid-column: 1/5;
  border: 1px solid green;
`;



Tour.Time = styled.div`
  grid-column: 5/9;
  border: 1px solid red;
`;

const Information = styled.div`
  grid-column: 1/9;
  border: 1px solid red;
`;

Information.Name = styled.div`
  grid-column: 1/4;
  border: 1px solid red;
`;
Information.Phone = styled.div`
  grid-column: 4/6;
  border: 1px solid red;
`;
Information.Email = styled.div`
  grid-column: 6/9;
  border: 1px solid red;
`;

export { Container, Wrapper, Tour, Information };
