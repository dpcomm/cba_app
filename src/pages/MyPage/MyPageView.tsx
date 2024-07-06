import React from 'react';
import { Container, ListItemButton } from './styles';

const MyPageView = () => {
  return (
    <Container>
      <ListItemButton>
        내 정보 관리
      </ListItemButton>
      <ListItemButton>
        수련회 신청서 조회 & 수정
      </ListItemButton>
    </Container>
  );
};

export default MyPageView;
