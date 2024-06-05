import React, { useState } from 'react';
import AllUser from './views/AllUser';
import RegistrationStatus from './views/RegistrationStatus';
import MealList from './views/MealList';
import MediaLink from './views/MediaLink';
import SvgIcon from '@components/SvgIcon';
import BackTextInput from '@components/BackTextinput';
import BackButton from '@components/BackButton';
import BackItemButton from '@components/BackItemButton';
import { BackButtonContainer, BackItemButtonContainer, Container, LogoContainer, SideBar } from './BackofficeView.styled';


const BackofficeView = () => {
  const [page, set_page] = useState(0);
  const [clickedButton, setClickedButton] = useState<number | null>(null);
  const [search, set_search] = useState("");

  const handleClick = (index: number) => {
    setClickedButton(index);
  };

  const handleLogout = () => {
    console.log("로그아웃 되었습니다.");
  };

  return (
    <Container>
      {/* <TopBar>Welcome to CBA</TopBar> */}
      <BackTextInput placeHolder={'Search...'} getter={search} setter={set_search} />
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
