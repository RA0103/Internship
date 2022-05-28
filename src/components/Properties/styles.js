import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0;
`;

const Body = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  width: 100%;
  padding: 0 130px;
  max-width: var(--width);
`;

export { Container, Wrapper, Body };
