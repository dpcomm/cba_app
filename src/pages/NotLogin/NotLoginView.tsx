import SvgIcon from "@components/SvgIcon";
import { Body, Container, TitleSubText, TitleText } from "./styles";

const MaintenanceView = () => {
  return (
    <Container>
      <SvgIcon name={"cba_logo"} width={188} height={188} fill={""} />
      <TitleText>
        RE:CBA
      </TitleText>
      <TitleSubText>
        수련회 등록관리 서비스
      </TitleSubText>
      <Body>
        Unauthorized user
        <br />
        로그인이 필요한 페이지입니다.
      </Body>
    </Container>
  );
};

export default MaintenanceView;