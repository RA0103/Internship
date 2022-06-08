import styled from "styled-components";
import { ReactComponent as airconditon } from "../../../assets/icons/air-condition.svg";
import { ReactComponent as lawn } from "../../../assets/icons/lawn.svg";
import { ReactComponent as refrigerator } from "../../../assets/icons/refrigerator.svg";
import { ReactComponent as washer } from "../../../assets/icons/washer.svg";
import { ReactComponent as barbeque } from "../../../assets/icons/barbeque.svg";
import { ReactComponent as laundry } from "../../../assets/icons/laundry.svg";
import { ReactComponent as sauna } from "../../../assets/icons/sauna.svg";
import { ReactComponent as wifi } from "../../../assets/icons/wifi.svg";
import { ReactComponent as dryer } from "../../../assets/icons/dryer.svg";
import { ReactComponent as microwave } from "../../../assets/icons/microwave.svg";
import { ReactComponent as swimming } from "../../../assets/icons/swimming.svg";
import { ReactComponent as windowCovering } from "../../../assets/icons/window-covering.svg";
import { ReactComponent as dumbbell } from "../../../assets/icons/dumbbell.svg";
import { ReactComponent as outdoorShower } from "../../../assets/icons/outdoor-shower.svg";
import { ReactComponent as tvCable } from "../../../assets/icons/tv-cable.svg";
import { ReactComponent as chair } from "../../../assets/icons/chair.svg";

const Container = styled.div`
  margin-top: 45px;
  display: flex;
  padding-bottom: 40px;
  border-bottom: 1px solid #e6e9ec;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(17, 1fr);
  width: 100%;
`;

const FeaturesDetail = styled.div`
  grid-column: 1/18;
  margin-bottom: 30px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #0d263b;
`;

FeaturesDetail.Equip1 = styled.div`
  grid-column: 1/5;
  margin-bottom: 24px;
`;
FeaturesDetail.Equip2 = styled.div`
  grid-column: 5/9;
  margin-bottom: 24px;
`;
FeaturesDetail.Equip3 = styled.div`
  grid-column: 9/14;
  margin-bottom: 24px;
`;
FeaturesDetail.Equip4 = styled.div`
  grid-column: 14/18;
  margin-bottom: 24px;
`;

const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DetailsName = styled.div`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-left: 10px;
  text-align: center;
  justify-content: center;
`;

const Icon = styled.div``;

Icon.AirCondition = styled(airconditon)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
Icon.Lawn = styled(lawn)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
Icon.Refrigerator = styled(refrigerator)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
Icon.Washer = styled(washer)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
Icon.Barbeque = styled(barbeque)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
Icon.Laundry = styled(laundry)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
Icon.Sauna = styled(sauna)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
Icon.Wifi = styled(wifi)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
Icon.Dryer = styled(dryer)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
Icon.Microwave = styled(microwave)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
Icon.Swimming = styled(swimming)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
Icon.WindowCovering = styled(windowCovering)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
Icon.Dumbbell = styled(dumbbell)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
Icon.OutdoorShower = styled(outdoorShower)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
Icon.TvCable = styled(tvCable)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;
Icon.DinningRoom = styled(chair)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;

export {
  Container,
  Wrapper,
  FeaturesDetail,
  DetailsWrapper,
  DetailsName,
  Icon,
};
