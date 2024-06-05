import React from 'react';
import { ButtonView, Container, DDayTest, DDayView, ItemText, ItemView, Line, LogoBold, LogoLight, LogoView, MenuView, NameText } from './HomeView.styled';
import { EColor } from '@styles/color';
import SvgIcon from '@components/SvgIcon';
import { IconButton } from '@components/IconButton';
import usePageControll from '@hooks/usePageControll';

const HomeView = () => {
  const { handlePage } = usePageControll();
  const handleLogout = () => {
    handlePage('');
    console.log("로그아웃");
  };

	return (
    <Container>
      <LogoView>
				<LogoLight>Welcome to</LogoLight>
				<LogoBold>CBA</LogoBold>
			</LogoView>
      <NameText>김호준님 안녕하세요.</NameText>
      <DDayView>
        <SvgIcon name={'calendar'} width={36} height={36} fill={"none"} stroke={EColor.TEXT_800} />
        <DDayTest>D-64</DDayTest>
      </DDayView>
      <MenuView>
        <ItemView onClick={() => handlePage('retreat-info')}>
          <SvgIcon name={'info'} width={36} height={36} fill={"none"} stroke={EColor.TEXT_800} />
          <ItemText>수련회 안내</ItemText>
        </ItemView>
        <Line />
        <ItemView onClick={() => handlePage('retreat-location')}>
          <SvgIcon name={'location'} width={36} height={36} fill={"none"} stroke={EColor.TEXT_800} />
          <ItemText>수련회 위치</ItemText>
        </ItemView>
        <Line />
        <ItemView onClick={() => handlePage('retreat-application')}>
          <SvgIcon name={'write'} width={36} height={36} fill={"none"} stroke={EColor.TEXT_800} />
          <ItemText>수련회 등록</ItemText>
        </ItemView>
      </MenuView>
      <MenuView>
        <ItemView onClick={() => alert("구현중인 기능입니다.:)")}>
          <SvgIcon name={'clock'} width={36} height={36} fill={EColor.TEXT_800} stroke={'none'} />
          <ItemText>수련회 일정표</ItemText>
        </ItemView>
        <Line />
        <ItemView onClick={() => handlePage('retreat-payment')}>
          <SvgIcon name={'bill'} width={36} height={36} fill={EColor.TEXT_800} stroke={EColor.TEXT_800} />
          <ItemText>납부 확인</ItemText>
        </ItemView>
        <Line />
        <ItemView onClick={() => alert("구현중인 기능입니다.:)")}>
          <SvgIcon name={'user'} width={40} height={40} fill={"none"} stroke={EColor.TEXT_800} />
          <ItemText>계정 정보</ItemText>
        </ItemView>
      </MenuView>
      <ButtonView>
        <IconButton
          svg={<SvgIcon name={'login'} width={24} height={24} fill={EColor.COLOR_PRIMARY} stroke={EColor.COLOR_PRIMARY} />}
          label={'로그아웃'}
          width={"100%"}
          height={"52px"}
          borderRadius='48px'
          backgroundColor={EColor.TEXT_300}
          tintColor='white'
          color='black'
          onClick={handleLogout}
        />
      </ButtonView>
    </Container>
  );
};

export default HomeView;