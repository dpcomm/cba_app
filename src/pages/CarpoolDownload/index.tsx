import React, { useEffect, useState } from 'react';
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
  Version,
} from './styles';
import { requestApplicationVersion } from '@apis/index';

interface AppVersion {
  name: string;
  versionName: string;
  versionCode: number;
  description: string;
  releaseDate: string;
  author: string;
  updateNotes: string[];
  updateUrl: string;
}

const screenshots = [
  CarpoolIcon,
  CarpoolIcon,
  CarpoolIcon,
];

const CarpoolDownload = () => {
  const [versionData, setVersionData] = useState<AppVersion | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    requestApplicationVersion()
      .then(res => {
        setVersionData(res.data.version);
      })
      .catch(err => {
        console.error(err);
        setError('버전 정보를 불러오는 데 실패했습니다.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDownload = () => {
    if (!versionData) return;
    // 플랫폼 구분이 필요 없으면 그냥 URL 열기
    window.location.href = versionData.updateUrl;
  };

  if (loading) {
    return <Container>로딩 중…</Container>;
  }
  if (error) {
    return <Container>{error}</Container>;
  }
  if (!versionData) {
    return null;
  }

  return (
    <Container>
      <Header>
        <Icon src={CarpoolIcon} alt={`${versionData.name} icon`} />
        <Info>
          <Title>{versionData.name}</Title>
          <Developer>{versionData.author}</Developer>
          <Version>버전 {versionData.versionName}</Version>
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
          <Description>{versionData.description}</Description>
        </Section>

        <Section>
          <SectionTitle>최신 업데이트 ({versionData.releaseDate})</SectionTitle>
          <UpdateList>
            {versionData.updateNotes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </UpdateList>
        </Section>
      </Body>

      <Footer>
        <FooterText>
          이 앱은 CBA Connect의 일부로, 카풀 서비스를 제공합니다.
        </FooterText>
      </Footer>
    </Container>
  );
};

export default CarpoolDownload;
