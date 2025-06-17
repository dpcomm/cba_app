import React from 'react';
import { isAndroid, isIOS } from 'react-device-detect';
import CarpoolIcon from '@assets/images/carpool_icon.png';

import {
  Body,
  ButtonView,
  Container,
  Description,
  Developer,
  Footer,
  FooterText,
  Header,
  Icon,
  Info,
  Section,
  SectionTitle,
  Title,
  UpdateList,
  CarouselItem,
  Carousel,
  Button,
  Version
} from './styles';

const screenshots = [
  CarpoolIcon,
  CarpoolIcon,
  CarpoolIcon,
];

const appData = {
  iconUrl: CarpoolIcon,
  name: '카풀 서비스',
  developer: 'CBA 개기자 (개발 & 기획자 팀)',
  version: '1.0.0',
  description:
    'CBA Connect의 카풀 서비스는 교회 행사나 모임에 참여하는 성도들을 위한 편리한 카풀 기능을 제공합니다. 이 앱을 통해 성도들은 서로의 차량을 공유하고, 효율적으로 이동할 수 있습니다. 카풀 서비스를 통해 환경 보호와 비용 절감에도 기여할 수 있습니다.',
  updateNotes: ['1.0.0: 어플리케이션 출시'],
};

const CarpoolDownload = () => {
  const handleDownload = () => {
    // if (isAndroid) window.location.href = appData.androidUrl;
    // else if (isIOS) window.location.href = appData.iosUrl;
    // else alert('모바일에서 접속해 주세요.');
  };
  return (
    <Container>
      <Header>
        <Icon src={appData.iconUrl} alt={`${appData.name} icon`} />
        <Info>
          <Title>{appData.name}</Title>
          <Developer>{appData.developer}</Developer>
          <Version>버전 {appData.version}</Version>
          <ButtonView>
            <Button onClick={handleDownload}>앱 다운로드</Button>
          </ButtonView>
        </Info>
      </Header>
      <Carousel>
        {screenshots.map((src, idx) => (
          <CarouselItem key={idx} src={src} alt={`Screenshot ${idx + 1}`} />
        ))}
      </Carousel>

      <Body>
        <Section>
          <SectionTitle>앱 설명</SectionTitle>
          <Description>{appData.description}</Description>
        </Section>
        <Section>
          <SectionTitle>업데이트 내용</SectionTitle>
          <UpdateList>
            {appData.updateNotes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </UpdateList>
        </Section>
      </Body>

      <Footer>
        <FooterText>이 앱은 CBA Connect의 일부로, 카풀 서비스를 제공합니다.</FooterText>
      </Footer>
    </Container>
  );
};

export default CarpoolDownload;
