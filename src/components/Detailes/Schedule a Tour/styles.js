import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 48px;
  /* border-bottom: 1px solid #e6e9ec; */
  padding-bottom: 48px;
`;

const Wrapper = styled.div`
  width: 100%;
  grid-template-columns: repeat(8, 1fr);
  display: grid;
`;

const Tour = styled.div`
  grid-column: 1/9;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
`;

Tour.Date = styled.div`
  grid-column: 1/5;
  margin-top: 30px;
`;

Tour.Time = styled.div`
  grid-column: 5/9;
`;

Tour.Time.Name = styled.div`
  margin-bottom: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
  margin-left: 6px;
`;

const Information = styled.div`
  grid-column: 1/9;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
  margin-bottom: 24px;
  margin-top: 48px;
`;

Information.Name = styled.div`
  grid-column: 1/3;
`;
Information.Phone = styled.div`
  grid-column: 3/6;
`;
Information.Email = styled.div`
  grid-column: 6/9;
`;

Information.Message = styled.div`
  grid-column: 1/9;
`;

const BtnWrapper = styled.div`
  margin-top: 24px;
`;

export { Container, Wrapper, Tour, Information, BtnWrapper };
