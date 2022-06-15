import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 64px 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 580px;
  height: fit-content;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 24px 36px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 17px;
`;

const Error = styled.div`
  color: red;
`

export { Container, Wrapper, Info, Error };
