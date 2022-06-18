import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 30px;
  width: 1050px;
  height: 340px;
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

const CheckboxContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  margin-top: 24px;
`;

const Text = styled.div`
  margin-left: 12px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

const FirstColumn = styled.div``;

const SecondColumn = styled.div`
  margin-left: 70px;
`;

const ThirdColumn = styled.div`
  margin-left: 70px;
`;

const FourthColumn = styled.div`
  margin-left: 70px;
`;

export {
  Container,
  Title,
  CheckboxContainer,
  FirstColumn,
  SecondColumn,
  ThirdColumn,
  FourthColumn,
  Text,
  CheckboxWrapper,
};
