import { Container, NavbarBox, NavbarItem, TicketBox, TicketBoxOn } from './Navbar.styled';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';
import { HeaderBar } from '@components/HeaderBar';
import usePageControll from '@hooks/usePageControll';
import { useSetRecoilState } from 'recoil';
import { naviState } from '@modules/atoms';
import { NavInfo } from '@type/index';
import { useEffect } from 'react';

const Navbar = () => {
  const { navigation, handlePage, handlePrevPage } = usePageControll();
  const set_navInfo = useSetRecoilState<NavInfo>(naviState);
  const bottomTarget = ['', 'home', 'notice', 'mypage'];

  useEffect(() => {
    set_navInfo((prev) => ({
      ...prev,
      page: window.location.pathname.slice(1),
    }));

    const handlePopState = () => {
      const url = window.location.pathname.slice(1);
      if (navigation.history.includes(url)) {
        const history = navigation.history.slice(0, navigation.history.findIndex((value) => value == url) + 1);
        set_navInfo({
          page: url,
          history: history,
        });
      } else {
        set_navInfo((prev) => ({
          page: url,
          history: [...prev.history, url],
        }));
      }
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    if (bottomTarget.includes(navigation.page)) {
      set_navInfo((prev) => ({
        ...prev,
        history: [navigation.page],
      }));
    }
  }, [navigation.page]);

  if (bottomTarget.includes(navigation.page)) {
    return (
      <Container>
        <NavbarBox>
          <NavbarItem onClick={() => handlePage('home')}>
            {navigation.page === 'home' || navigation.page === '' ? (
              <SvgIcon name={'home_on'} width={78} height={70} fill={''} />
            ) : (
              <SvgIcon name={'home'} width={78} height={70} fill={''} />
            )}
          </NavbarItem>
          <NavbarItem onClick={() => handlePage('notice')}>
            {navigation.page === 'notice' ? (
              <TicketBoxOn>
                <SvgIcon
                  name={'announcement'}
                  width={30}
                  height={28}
                  fill={'white'}
                  stroke={EColor.COLOR_INTERACTION}
                />
              </TicketBoxOn>
            ) : (
              <TicketBox>
                <SvgIcon name={'announcement'} width={30} height={28} fill={'white'} stroke={EColor.TEXT_800} />
              </TicketBox>
            )}
          </NavbarItem>
          <NavbarItem onClick={() => handlePage('mypage')}>
            {navigation.page === 'mypage' ? (
              <SvgIcon name={'mypage_on'} width={78} height={70} fill={'white'} />
            ) : (
              <SvgIcon name={'mypage'} width={78} height={70} fill={'white'} />
            )}
          </NavbarItem>
        </NavbarBox>
      </Container>
    );
  } else {
    return (
      <HeaderBar left={<SvgIcon name={'back'} width={24} height={24} fill={'none'} />} onClickLeft={handlePrevPage} />
    );
  }
};

export default Navbar;
