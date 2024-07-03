import React from 'react';
import { ButtonView, Container, DDayTest, DDayView, ItemText, ItemView, Line, LogoBold, LogoLight, LogoView, MenuView, NameText } from './HomeView.styled';
import { EColor } from '@styles/color';
import SvgIcon from '@components/SvgIcon';
import { IconButton } from '@components/IconButton';
import usePageControll from '@hooks/usePageControll';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoadingState, surveyState, userState } from '@modules/atoms';
import { useState,useEffect } from 'react';
import useConfirm from '@hooks/useConfirm';
import { getExistSurvey, requestLogout } from '@apis/index';

const HomeView = () => {
  const { handlePage } = usePageControll();
  const setIsLoading = useSetRecoilState(isLoadingState);

  const user = useRecoilValue(userState);
  const [dDay, setDDay] = useState(null);
  const [surveyData,setSurveyData] = useRecoilState(surveyState);

  const getSurvey = async () => {
    if (!user.userId) return;
    try {
      const res = await getExistSurvey(user.userId);
      setSurveyData({
        meal: res.data.data.surveyData.meal,
        transfer: res.data.data.surveyData.transfer.transfer,
        bus: res.data.data.surveyData.transfer.bus,
        carId: res.data.data.surveyData.transfer['own-car'],
        idn: res.data.data.idn
      });
    } catch (err) {
      setSurveyData(surveyData);
      }
    };

  const calculateDDay = (targetDate) => {
    const today = new Date();
    const target = new Date(targetDate);
    const difference = Math.ceil((target - today) / (1000 * 60 * 60 * 24));
    return difference;
  };

  useEffect(() => {
    getSurvey();
    const targetDate = '2024-08-23'; // Set your target date here
    setDDay(calculateDDay(targetDate));
  }, [user.userId]);

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
      <LogoView>
				<LogoLight>Welcome to</LogoLight>
				<LogoBold>CBA</LogoBold>
			</LogoView>
      <NameText>{user.name}님 안녕하세요.</NameText>
      <DDayView>
        <SvgIcon name={'calendar'} width={36} height={36} fill={"none"} stroke={EColor.TEXT_800} />
        <DDayTest>D-{dDay}</DDayTest>
      </DDayView>
      <MenuView>
        <ItemView onClick={() => handlePage('retreat-info')}>
          <SvgIcon name={'info'} width={36} height={36} fill={"none"} stroke={EColor.TEXT_800} />
          <ItemText>수련회 안내</ItemText>
        </ItemView>
        <Line />
        <ItemView onClick={() => handlePage(surveyData.idn ? 'retreat-appinfo' : 'retreat-application')}>
          <SvgIcon name={'write'} width={36} height={36} fill={"none"} stroke={EColor.TEXT_800} />
          <ItemText>{surveyData.idn ? '설문지 조회' : '설문지 등록'}</ItemText>
        </ItemView>
        <Line />
        <ItemView onClick={() => handlePage('retreat-payment')}>
          <SvgIcon name={'bill'} width={36} height={36} fill={EColor.TEXT_800} stroke={EColor.TEXT_800} />
          <ItemText>납부 확인</ItemText>
        </ItemView>
      </MenuView>
      <MenuView>
        <ItemView onClick={() => alert("서비스 준비중입니다.")}>
          <SvgIcon name={'clock'} width={36} height={36} fill={EColor.TEXT_800} stroke={'none'} />
          <ItemText>수련회 일정표</ItemText>
        </ItemView>
        <Line />
        <ItemView onClick={() => handlePage('retreat-location')}>
          <SvgIcon name={'location'} width={36} height={36} fill={"none"} stroke={EColor.TEXT_800} />
          <ItemText>수련회 위치</ItemText>
        </ItemView>
        <Line />
        <ItemView onClick={() => handlePage('edit-profile')}>
          <SvgIcon name={'user'} width={40} height={40} fill={"none"} stroke={EColor.TEXT_800} />
          <ItemText>계정 정보</ItemText>
        </ItemView>
      </MenuView>
      <ButtonView>
        <IconButton
          // svg={<SvgIcon name={'login'} width={24} height={24} fill={EColor.COLOR_PRIMARY} stroke={EColor.COLOR_PRIMARY} />}
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