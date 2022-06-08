import React from "react";
import { Container, Information, Tour, Wrapper } from "./styles";
import { Button, Input } from "../../Generic/index";

export const Schedule = () => {
  return (
    <Container>
      <Wrapper>
        <Tour>Schedule A Tour</Tour>
        <Tour.Date>
          <Input />
        </Tour.Date>
        <Tour.Time>3</Tour.Time>
        <Information>4</Information>
        <Information.Name>5</Information.Name>
        <Information.Phone>6</Information.Phone>
        <Information.Email>7</Information.Email>
        <div>8</div>
      </Wrapper>
    </Container>
  );
};
export default Schedule;
