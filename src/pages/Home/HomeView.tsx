import React from 'react';
import { ButtonView, Container, DDayTest, DDayView, HeaderCenter, HeaderGroupText, HeaderNameText, HeaderRight, HeaderView, ItemText, ItemView, Left, Line, LogoBold, LogoLight, LogoView, MenuView, NameText, TextLight } from './HomeView.styled';
import { EColor } from '@styles/color';
import SvgIcon from '@components/SvgIcon';
import { IconButton } from '@components/IconButton';
import usePageControll from '@hooks/usePageControll';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { applicationState, isLoadingState, userState } from '@modules/atoms';
import { useState,useEffect } from 'react';
import useConfirm from '@hooks/useConfirm';
import { requestApplicationByUser, requestLogout } from '@apis/index';

const HomeView = () => {
  const { handlePage } = usePageControll();
  const setIsLoading = useSetRecoilState(isLoadingState);
  const set_application = useSetRecoilState(applicationState);

  const user = useRecoilValue(userState);
  const [dDay, setDDay] = useState(null);

  const calculateDDay = (targetDate) => {
    const today = new Date();
    const target = new Date(targetDate);
    const difference = Math.ceil((target - today) / (1000 * 60 * 60 * 24));
    return difference;
  };

  useEffect(() => {
    const targetDate = '2024-08-23'; // Set your target date here
    setDDay(calculateDDay(targetDate));
  }, [user.userId]);

  const confirmRegister = useConfirm(
		"수련회 신청서가 이미 작성되었습니다. 신청서를 수정하겠습니까?",
		() => handlePage("retreat-application-info"),
		() => console.log("Cancled..")
	);

  const handleApplicationPage = () => {
    setIsLoading({ isLoading: true });
    requestApplicationByUser(user.userId).then((res) => {
			set_application({
        ...res.data.application
      });
			setIsLoading({ isLoading: false });
			confirmRegister();
    }).catch((err) => {
      if (err.response.data.message === "Application not exist") handlePage('retreat-application');
      setIsLoading({ isLoading: false });
    });
  };

  const handleLogout = useConfirm("로그아웃 하시겠습니까? ", async () => {
    setIsLoading({ isLoading: true });
    await localStorage.removeItem('access_token');
    await localStorage.removeItem('refresh_token');
    requestLogout(user.id).then(() => {
      window.location.href = '';
      alert("로그아웃이 완료되었습니다.");
      setIsLoading({ isLoading: false });
    }).catch((err) => {
      console.log(err);
      alert("로그아웃에 실패하였습니다.");
      setIsLoading({ isLoading: false });
    });
  }, () => null);

	return (
    <Container>
      <HeaderView>
        <SvgIcon name={'cba_logo'} width={48} height={48} fill={'none'} />
        <HeaderCenter>
          <HeaderGroupText>{user.group}</HeaderGroupText>
          <HeaderNameText>{user.name} 님</HeaderNameText>
        </HeaderCenter>
        <HeaderRight onClick={() => handlePage('my-page')}>
          <SvgIcon name={'chevron_right'} width={28} height={28} fill={EColor.TEXT_200} />
        </HeaderRight>
      </HeaderView>
      <DDayView>
        <DDayTest>수련회까지 {dDay}일 남았어요.</DDayTest>
      </DDayView>
      <Left onClick={() => handlePage('youtube')}>수련회 라이브 바로가기 ▶</Left>
      <MenuView>
      <ItemView onClick={() => handlePage('time-table')}>
          <SvgIcon name={'clock'} width={36} height={36} fill={EColor.TEXT_800} stroke={'none'} />
          <ItemText>수련회 일정표</ItemText>
        </ItemView>
        <Line />
        <ItemView onClick={() => alert("서비스 준비중입니다.")}>
          <SvgIcon name={'message'} width={36} height={36} fill={"none"} stroke={EColor.TEXT_800} />
          <ItemText>기도 <br></br>TALK</ItemText>
        </ItemView>
      </MenuView>
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
        <ItemView onClick={() => handlePage('retreat-payment')}>
          <SvgIcon name={'bill'} width={36} height={36} fill={EColor.TEXT_800} stroke={EColor.TEXT_800} />
          <ItemText>납부 확인</ItemText>
        </ItemView>
      </MenuView>
      <ButtonView>
        <IconButton
          label={'수련회 신청하기'}
          width={"100%"}
          height={"34px"}
          borderRadius='8px'
          padding='18px'
          backgroundColor={EColor.TEXT_600}
          tintColor='white'
          color='white'
          onClick={handleApplicationPage}
        />
      </ButtonView>
      <TextLight onClick={handleLogout}>로그아웃</TextLight>
    </Container>
  );
};

export default HomeView;