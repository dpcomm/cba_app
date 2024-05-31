import React from 'react';
import logo from '@assets/images/retreat_logo.png';
import timetable from '@assets/images/retreat_timetable.png';
import guidebook from '@assets/images/retreat_guidebook.png';
import { Container, Left, LogoImage, LogoText, TextBody, TextContainer, TextTitle } from './RetreatInfo.styled';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';
import StickyNavigation from '@components/StickyTabBar';

const RetreatInfoView = () => {
  return (
		<>
			<Container>
				<LogoImage src={logo} />
				<Left>
					<SvgIcon name={'next'} width={24} height={24} fill={EColor.COLOR_PRIMARY} />
					수련회 등록하기
				</Left>
				<TextContainer>
					<TextTitle>2024년 대학청년부 겨울 수련회</TextTitle>
					<TextTitle>The Light - 빛 되신 말씀</TextTitle>
					<TextBody>주님의 말씀은 내 발에 등이요. 내 길에 빛이니이다</TextBody>
					<TextBody>(시119:105)</TextBody>
					<TextBody>24년 2월 4-5일, 안산청소년수련원</TextBody>
					<TextBody>수련회비 납부 및 후원계좌</TextBody>
					<TextBody>카카오뱅크 79795194749 배윤희</TextBody>
				</TextContainer>
			</Container>
			<StickyNavigation />
			<LogoText>수련회 일정표</LogoText>
			<LogoImage src={timetable} />
			<LogoText>수련회 가이드북</LogoText>
			<LogoImage src={guidebook} />
		</>
  );
};

export default RetreatInfoView;