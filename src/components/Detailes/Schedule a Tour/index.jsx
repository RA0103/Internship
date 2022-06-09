import React from "react";
import { BtnWrapper, Container, Information, Tour, Wrapper } from "./styles";
import { Button, Input } from "../../Generic/index";

export const Schedule = () => {
  return (
    <Container>
      <Wrapper>
        <Tour>Schedule A Tour</Tour>
        <Tour.Date>
          <Input
            type={"number"}
            width={"530px"}
            placeholder={"Date"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Tour.Date>
        <Tour.Time>
          <Tour.Time.Name>Time</Tour.Time.Name>
          <Input
            type={"number"}
            placeholder={"10:00 am"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Tour.Time>
        <Information>Your Information</Information>
        <Information.Name>
          <Input
            placeholder={"Name"}
            type={"text"}
            width={"360px"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Information.Name>
        <Information.Phone>
          <Input
            placeholder={"Phone"}
            type={"tel"}
            width={"365px"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Information.Phone>
        <Information.Email>
          <Input
            placeholder={"Email"}
            type={"email"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Information.Email>
        <Information.Message>
          <Input
            height={"80px"}
            pb={"60"}
            placeholder={"Enter Your Message"}
            style={{
              border: "none",
              borderBottom: "1px solid #E6E9EC",
              outline: "none",
            }}
          />
        </Information.Message>
        <BtnWrapper>
          <Button type={"primary"} width={"250px"} height={"44px"}>
            Submit a tour request
          </Button>
        </BtnWrapper>
      </Wrapper>
    </Container>
  );
};
export default Schedule;
