import React from "react";
import {
  Container,
  DetailsName,
  DetailsWrapper,
  FeaturesDetail,
  Icon,
  Wrapper,
} from "./styles";

export const Features = () => {
  return (
    <Container>
      <Wrapper>
        <FeaturesDetail>Features</FeaturesDetail>
        <FeaturesDetail.Equip1>
          <DetailsWrapper>
            <Icon.AirCondition />
            <DetailsName>Air Conditioning</DetailsName>
          </DetailsWrapper>
        </FeaturesDetail.Equip1>
        <FeaturesDetail.Equip2>
          <DetailsWrapper>
            <Icon.Lawn />
            <DetailsName>Lawn</DetailsName>
          </DetailsWrapper>
        </FeaturesDetail.Equip2>
        <FeaturesDetail.Equip3>
          <DetailsWrapper>
            <Icon.Refrigerator />
            <DetailsName>Refrigerator</DetailsName>
          </DetailsWrapper>
        </FeaturesDetail.Equip3>
        <FeaturesDetail.Equip4>
          <DetailsWrapper>
            <Icon.Washer />
            <DetailsName>Washer</DetailsName>
          </DetailsWrapper>
        </FeaturesDetail.Equip4>
        <FeaturesDetail.Equip1>
          <DetailsWrapper>
            <Icon.Barbeque />
            <DetailsName>Barbeque</DetailsName>
          </DetailsWrapper>
        </FeaturesDetail.Equip1>
        <FeaturesDetail.Equip2>
          <DetailsWrapper>
            <Icon.Laundry />
            <DetailsName>Laundry</DetailsName>
          </DetailsWrapper>
        </FeaturesDetail.Equip2>
        <FeaturesDetail.Equip3>
          <DetailsWrapper>
            <Icon.Sauna />
            <DetailsName>Sauna</DetailsName>
          </DetailsWrapper>
        </FeaturesDetail.Equip3>
        <FeaturesDetail.Equip4>
          <DetailsWrapper>
            <Icon.Wifi />
            <DetailsName>Wifi</DetailsName>
          </DetailsWrapper>
        </FeaturesDetail.Equip4>
        <FeaturesDetail.Equip1>
          <DetailsWrapper>
            <Icon.Dryer />
            <DetailsName>Dryer</DetailsName>
          </DetailsWrapper>
        </FeaturesDetail.Equip1>
        <FeaturesDetail.Equip2>
          <DetailsWrapper>
            <Icon.Microwave />
            <DetailsName>Microwave</DetailsName>
          </DetailsWrapper>
        </FeaturesDetail.Equip2>
        <FeaturesDetail.Equip3>
          <DetailsWrapper>
            <Icon.Swimming />
            <DetailsName>Swimming Pool</DetailsName>
          </DetailsWrapper>
        </FeaturesDetail.Equip3>
        <FeaturesDetail.Equip4>
          <DetailsWrapper>
            <Icon.WindowCovering />
            <DetailsName>Window Coverings</DetailsName>
          </DetailsWrapper>
        </FeaturesDetail.Equip4>
        <FeaturesDetail.Equip1>
          <DetailsWrapper>
            <Icon.Dumbbell />
            <DetailsName>Gym</DetailsName>
          </DetailsWrapper>
        </FeaturesDetail.Equip1>
        <FeaturesDetail.Equip2>
          <DetailsWrapper>
            <Icon.OutdoorShower />
            <DetailsName>Outdoor Shower</DetailsName>
          </DetailsWrapper>
        </FeaturesDetail.Equip2>
        <FeaturesDetail.Equip3>
          <DetailsWrapper>
            <Icon.TvCable />
            <DetailsName>TV Cable</DetailsName>
          </DetailsWrapper>
        </FeaturesDetail.Equip3>
        <FeaturesDetail.Equip4>
          <DetailsWrapper>
            <Icon.DinningRoom />
            <DetailsName>Dining room</DetailsName>
          </DetailsWrapper>
        </FeaturesDetail.Equip4>
      </Wrapper>
    </Container>
  );
};
export default Features;
