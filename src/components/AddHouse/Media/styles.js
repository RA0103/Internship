import styled from "styled-components";
import { ReactComponent as download } from "../../../assets/icons/download.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 30px;
  width: 1050px;
  height: 900px;
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

const Text = styled.div`
  margin-top: 44px;
  margin-bottom: 16px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

const Box = styled.div`
  width: 150px;
  height: 150px;

  background: #c4c4c4;
  border-radius: 3px;
`;

Box.Container = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-evenly;
`;

const Button = styled.button`
  margin-top: 24px;
  margin-bottom: 44px;
  width: 150px;
  height: 44px;
  border: 1px solid #0061df;
  border-radius: 2px;
  background: white;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0061df;

  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }
  cursor: pointer;
`;

Title.Text = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

const Icon = styled.div``;

Icon.Download = styled(download)`
  margin-top: 16px;
`;

Icon.Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

Icon.Text = styled(Title.Text)`
  margin-top: 12px;
  margin-left: 8px;
`;

export { Container, Title, Text, Box, Button, Icon };
