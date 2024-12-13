import React from 'react';
import { Container, ListItemButton, Name, Version, VersionView } from './styles';
import usePageControll from '@hooks/usePageControll';
import { requestApplicationByUserAndRetreatId } from '@apis/index';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { applicationState, isLoadingState, userState } from '@modules/atoms';
import useConfirm from '@hooks/useConfirm';
import packageJson from '../../../package.json';

const MyPageView = () => {
  const { handlePage } = usePageControll();
  const user = useRecoilValue(userState);
  const set_application = useSetRecoilState(applicationState);
  const setIsLoading = useSetRecoilState(isLoadingState);

  const confirmRegister = useConfirm("등록된 신청서가 없습니다. 새로 신청하시겠습니까?", () => handlePage('retreat-application'), () => console.log("Cancled.."));

  const handleApplicationPage = () => {
    setIsLoading({ isLoading: true });
    requestApplicationByUserAndRetreatId(user.userId, 1).then((res) => {
      set_application({
        ...res.data.application
      });
      setIsLoading({ isLoading: false });
      handlePage("retreat-application-info");
    }).catch((err) => {
      if (err.response.data.message === "Application not exist") {
        confirmRegister();
      }
      setIsLoading({ isLoading: false });
      console.log(err);
    });
  };

  return (
    <Container>
      <ListItemButton onClick={() => handlePage("edit-profile")}>
        내 정보 관리
      </ListItemButton>
      <ListItemButton onClick={() => handleApplicationPage()}>
        수련회 신청서 조회 & 수정
      </ListItemButton>
      <VersionView>
        <Name>{packageJson.name}</Name>
        <Version>{packageJson.version}</Version>
      </VersionView>
    </Container>
  );
};

export default MyPageView;
