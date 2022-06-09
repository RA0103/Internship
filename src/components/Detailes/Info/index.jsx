import React from "react";
import { Container, Icon, InfoPage } from "./styles";
import CardDetail from "../CardDetail";

export const Info = ({ data }) => {
  return (
    <Container>
      <InfoPage>
        <InfoPage.Left>
          <InfoPage.TitleContainer>
            <InfoPage.Title>{data?.data?.name}</InfoPage.Title>
            <InfoPage.TitleRight>
              <Icon.Wrapper>
                <Icon.Share />
                <Icon.Title>Share</Icon.Title>
              </Icon.Wrapper>
              <Icon.Wrapper>
                <Icon.Heart />
                <Icon.Title>Save</Icon.Title>
              </Icon.Wrapper>
            </InfoPage.TitleRight>
          </InfoPage.TitleContainer>
          <InfoPage.Ad>Quincy St, Brooklyn, NY, USA</InfoPage.Ad>
          <InfoPage.EquipmentContainer>
            <InfoPage.PriceWrapper>
              <InfoPage.Sale>{data?.data?.salePrice}</InfoPage.Sale>
              <InfoPage.Origin>{data?.data?.price}</InfoPage.Origin>
            </InfoPage.PriceWrapper>
            <InfoPage.Equipment>
              <InfoPage.EquipmentWrapper>
                <Icon.Wrapper>
                  <Icon.Bed />
                  <Icon.Title>
                    {data?.data?.houseDetails?.beds || 0} Beds
                  </Icon.Title>
                </Icon.Wrapper>
                <Icon.Wrapper>
                  <Icon.Bath />
                  <Icon.Title>
                    {data?.data?.houseDetails?.bath || 0} Baths
                  </Icon.Title>
                </Icon.Wrapper>
                <Icon.Wrapper>
                  <Icon.Car />
                  <Icon.Title>
                    {data?.data?.houseDetails?.garage || 0} Garage
                  </Icon.Title>
                </Icon.Wrapper>
                <Icon.Wrapper>
                  <Icon.Ruler />
                  <Icon.Title>
                    {data?.data?.houseDetails?.area || 0} Sq FT
                  </Icon.Title>
                </Icon.Wrapper>
                <Icon.Wrapper>
                  <Icon.Calendar />
                  <Icon.Title>
                    Year Built: {data?.data?.houseDetails?.yearBuilt || 0}
                  </Icon.Title>
                </Icon.Wrapper>
              </InfoPage.EquipmentWrapper>
              <InfoPage.PriceTitle>Est. Mortgage</InfoPage.PriceTitle>
            </InfoPage.Equipment>
          </InfoPage.EquipmentContainer>
          <InfoPage.Description>
            <InfoPage.DescriptionTitle>Description</InfoPage.DescriptionTitle>
            <InfoPage.DescriptionName>
              {data?.data?.description}
            </InfoPage.DescriptionName>
            <InfoPage.ShowMore>Show more</InfoPage.ShowMore>
          </InfoPage.Description>
          <InfoPage.Document>
            <InfoPage.DocumentName>Documents</InfoPage.DocumentName>
            <InfoPage.DocumentContainer>
              <InfoPage.DocumentFile>
                <Icon.Download />
                <InfoPage.DocumentTitle>
                  test_property.pdf
                </InfoPage.DocumentTitle>
                <InfoPage.DocumentDownload>download</InfoPage.DocumentDownload>
              </InfoPage.DocumentFile>
              <InfoPage.DocumentFile>
                <Icon.Download />
                <InfoPage.DocumentTitle>
                  test_property.pdf
                </InfoPage.DocumentTitle>
                <InfoPage.DocumentDownload>download</InfoPage.DocumentDownload>
              </InfoPage.DocumentFile>
              <InfoPage.DocumentFile>
                <Icon.Download />
                <InfoPage.DocumentTitle>
                  test_property.pdf
                </InfoPage.DocumentTitle>
                <InfoPage.DocumentDownload>download</InfoPage.DocumentDownload>
              </InfoPage.DocumentFile>
            </InfoPage.DocumentContainer>
          </InfoPage.Document>
        </InfoPage.Left>
        <InfoPage.Right>
          <CardDetail />
        </InfoPage.Right>
      </InfoPage>
    </Container>
  );
};
export default Info;
