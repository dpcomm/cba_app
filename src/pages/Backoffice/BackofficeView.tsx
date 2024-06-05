import React, { useState } from 'react';
import AllUser from './views/AllUser';
import RegistrationStatus from './views/RegistrationStatus';
import MealList from './views/MealList';
import MediaLink from './views/MediaLink';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';
import styled from 'styled-components';
import BackTextInput from '@components/BackTextinput';
import BackButton from '@components/BackButton';
import BackItemButton from '@components/BackItemButton';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopBar = styled.div`
  background-color: ${EColor.TEXT_400};
  color: ${EColor.TEXT_700};
  padding: 2px;
  text-align: center;
  font-size: 14px;
  line-height: 17px;
  width: calc(100% - 50px);
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 40px; 
  left: 50%; 
  transform: translateX(-50%);
`;
const SideBar = styled.div`
  background-color: ${EColor.TEXT_400};
  color: ${EColor.TEXT_700};
  padding: 2px;
  text-align: center;
  font-size: 14px;
  line-height: 17px;
  width: 200px; 
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;;
  align-items:center;
`;

const BackItemButtonContainer = styled.div`
  margin-top: auto;
  position: fixed;
  width: 200px;
  top: 180px; 
  left: 6%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  border-top: 2px solid ${EColor.TEXT_700};
  border-bottom: 2px solid ${EColor.TEXT_700};
`;

const BackButtonContainer = styled.div`
  position: fixed;
  bottom: 10px; /* 하단에 고정 */
  left:5%;
  transform: translateX(-50%);
`;


const BackofficeView = () => {
  const [page, set_page] = useState(0);
  const [clickedButton, setClickedButton] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedButton(index);
  };

  const handleLogout = () => {
    console.log("로그아웃 되었습니다.");
  };

  return (
    <Container>
      {/* <TopBar>Welcome to CBA</TopBar> */}
      <BackTextInput />
      <SideBar>
        <LogoContainer>
          <SvgIcon name={'cba_logo'} width={120} height={120} fill={'none'} />
        </LogoContainer>
        <BackItemButtonContainer>
          <BackItemButton
            label="전체 계정 정보"
            onClick={() => handleClick(0)}
            isClicked={clickedButton === 0}
          >
            <SvgIcon name={'graph'} width={20} height={20} fill={'none'} />
          </BackItemButton>
          <BackItemButton
            label="수련회 등록 현황"
            onClick={() => handleClick(1)}
            isClicked={clickedButton === 1}
          >
            <SvgIcon name={'document'} width={20} height={20} fill={'none'} />
          </BackItemButton>
          <BackItemButton
            label="식수 파악"
            onClick={() => handleClick(2)}
            isClicked={clickedButton === 2}
          >
            <SvgIcon name={'meal'} width={20} height={20} fill={'none'} />
          </BackItemButton>
          <BackItemButton
            label="유튜브 실황 링크 "
            onClick={() => handleClick(3)}
            isClicked={clickedButton === 3}
          >
            <SvgIcon name={'youtube'} width={20} height={20} fill={'none'} />
          </BackItemButton>
        </BackItemButtonContainer>
        <BackButtonContainer>
          <BackButton label="로그아웃" onClick={handleLogout} />
        </BackButtonContainer>
      </SideBar>

    </Container>
  );
};

export default BackofficeView;

{/* {page === 0 && <AllUser />}
      {page === 1 && <RegistrationStatus />}
      {page === 2 && <MealList />}
      {page === 3 && <MediaLink />} */}
{/* <SvgIcon name={'next'} width={24} height={24} fill={EColor.COLOR_PRIMARY} />
      <SvgIcon name={'cba_logo'} width={200} height={200} fill={'none'} />
      <SvgIcon name={'document'} width={200} height={200} fill={'none'} />
      <SvgIcon name={'search'} width={200} height={200} fill={"#757D8A"} />
      <SvgIcon name={'graph'} width={200} height={200} fill={'none'} />
      <SvgIcon name={'meal'} width={200} height={200} fill={'none'} />
      <SvgIcon name={'youtube'} width={200} height={200} fill={'none'} /> */}
