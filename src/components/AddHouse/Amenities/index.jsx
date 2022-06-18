import React from "react";
import {
  CheckboxContainer,
  CheckboxWrapper,
  Container,
  FirstColumn,
  FourthColumn,
  SecondColumn,
  Text,
  ThirdColumn,
  Title,
} from "./styles";
import { Checkbox } from "../../Generic";

export const Amenities = () => {
  return (
    <Container>
      <Title>Amenities</Title>
      <CheckboxContainer>
        <FirstColumn>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Air conditioning</Text>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Barbeque</Text>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Dryer</Text>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Gym</Text>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Laundry</Text>
          </CheckboxWrapper>
        </FirstColumn>
        <SecondColumn>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Lawn</Text>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Microwave</Text>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Outdoor Shower</Text>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Refrigerator</Text>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Stunning views</Text>
          </CheckboxWrapper>
        </SecondColumn>
        <ThirdColumn>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Dining Room</Text>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Fireplace</Text>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Pets Allowed</Text>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Unit Washer/Dryer</Text>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Onsite Parking</Text>
          </CheckboxWrapper>
        </ThirdColumn>
        <FourthColumn>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Waterfront</Text>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Parking</Text>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Doorman</Text>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Central Heating</Text>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <Checkbox />
            <Text>Cleaning Service</Text>
          </CheckboxWrapper>
        </FourthColumn>
      </CheckboxContainer>
    </Container>
  );
};
export default Amenities;
