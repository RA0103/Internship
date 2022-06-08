import styled from "styled-components";
import { ReactComponent as share } from "../../../assets/icons/share.svg";
import { ReactComponent as heart } from "../../../assets/icons/love 1.svg";
import { ReactComponent as bed } from "../../../assets/icons/beds.svg";
import { ReactComponent as bath } from "../../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../../assets/icons/ruler.svg";
import { ReactComponent as calendar } from "../../../assets/icons/calendar.svg";
import { ReactComponent as download } from "../../../assets/icons/download.svg";

const Container = styled.div`
  width: 1200px;
  height: 430px;
  border-bottom: 1px solid #e6e9ec;
`;

const InfoPage = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 24px;
`;

InfoPage.Left = styled.div`
  grid-column: 1/2;
  width: 900px;
`;

InfoPage.Right = styled.div``;

InfoPage.RightContainer = styled.div`
  width: 100%;
  border: 1px solid red;
`;

InfoPage.RightWrapper = styled.div``;

const Image = styled.img``;

InfoPage.TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

InfoPage.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;
`;

InfoPage.TitleRight = styled.div`
  display: flex;
`;

InfoPage.Ad = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;

InfoPage.EquipmentContainer = styled.div``;

InfoPage.PriceWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

InfoPage.Sale = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #696969;
`;

InfoPage.Origin = styled.div`
  margin-left: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;
`;

InfoPage.Equipment = styled.div`
  display: flex;
  justify-content: space-between;
`;

InfoPage.EquipmentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

InfoPage.PriceTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

InfoPage.Description = styled.div`
  margin-top: 30px;
  margin-bottom: 25px;
`;

InfoPage.DescriptionTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
`;

InfoPage.DescriptionName = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
`;

InfoPage.ShowMore = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: underline;
  color: #0061df;
  cursor: pointer;
  margin-top: 5px;
`;

InfoPage.Document = styled.div`
  margin-top: 48px;
`;

InfoPage.DocumentName = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
`;

InfoPage.DocumentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

InfoPage.DocumentFile = styled.div`
  display: flex;
`;

InfoPage.DocumentTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin: 0 15px;
`;

InfoPage.DocumentDownload = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.01em;
  text-decoration-line: underline;
  text-transform: uppercase;
  color: #0061df;
  cursor: pointer;
`;

const Icon = styled.div``;

Icon.Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 45px;
`;

Icon.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-right: 10px;
`;

Icon.Share = styled(share)`
  margin-left: 20px;
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
  margin-right: 10px;
`;

Icon.Heart = styled(heart)`
  margin-left: 20px;
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 50px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
  margin-right: 10px;
`;

Icon.Bed = styled(bed)`
  margin-right: 8px;
`;
Icon.Bath = styled(bath)`
  margin-right: 8px;
`;
Icon.Car = styled(car)`
  margin-right: 8px;
`;
Icon.Ruler = styled(ruler)`
  margin-right: 8px;
`;
Icon.Calendar = styled(calendar)`
  margin-right: 8px;
`;
Icon.Download = styled(download)``;

export { Container, InfoPage, Icon, Image };
