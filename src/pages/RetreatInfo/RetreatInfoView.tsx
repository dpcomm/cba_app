import React from 'react';
import logo from '@assets/images/retreat_grace_logo.png';
import guidebook from '@assets/images/retreat_grace_poster.png';
import { Container, Left, LogoImage, LogoText, TextBody, TextContainer, TextTitle } from './RetreatInfo.styled';
import StickyNavigation from '@components/StickyTabBar';

const RetreatInfoView = () => {
  return (
		<>
			<Container>
				<LogoImage src={logo} />
				{/* <Left>
					<SvgIcon name={'next'} width={24} height={24} fill={EColor.COLOR_PRIMARY} />
					수련회 등록하기
				</Left> */}
				<TextContainer>
					<TextTitle>2024 대학청년부 여름 수련회</TextTitle>
					<TextTitle>복음에서 오는 은혜</TextTitle>
					<TextBody>우리는 그리스도 안에서 그의 은혜의 풍성함을 따라
					그의 피로 말미암아 속량 곧 죄 사함을 받았느니라</TextBody>
					<TextBody>(에베소서 1장 7절)</TextBody>
					<TextBody>24년 8월 23-25일, 안산청소년수련원</TextBody>
				</TextContainer>
			</Container>
			{/* <StickyNavigation /> */}
			<LogoText>수련회 가이드북</LogoText>
			<LogoImage src={guidebook} />
		</>
  );
};

export default RetreatInfoView;
