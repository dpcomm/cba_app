import React from 'react';
import logo from '@assets/images/retreat_holyday_main.png';
import poster from '@assets/images/retreat_holyday_poster.png';
import guidebook_1 from '@assets/images/retreat_holyday_guidebook_1.png';
import guidebook_2 from '@assets/images/retreat_holyday_guidebook_2.png';
import guidebook_3 from '@assets/images/retreat_holyday_guidebook_3.png';
import guidebook_4 from '@assets/images/retreat_holyday_guidebook_4.png';
import guidebook_5 from '@assets/images/retreat_holyday_guidebook_5.png';
import guidebook_6 from '@assets/images/retreat_holyday_guidebook_6.png';
import guidebook_7 from '@assets/images/retreat_holyday_guidebook_7.png';
import guidebook_8 from '@assets/images/retreat_holyday_guidebook_8.png';
import guidebook_9 from '@assets/images/retreat_holyday_guidebook_9.png';
import guidebook_10 from '@assets/images/retreat_holyday_guidebook_10.png';
import guidebook_11 from '@assets/images/retreat_holyday_guidebook_11.png';
import guidebook_12 from '@assets/images/retreat_holyday_guidebook_12.png';
import guidebook_13 from '@assets/images/retreat_holyday_guidebook_13.png';
import guidebook_14 from '@assets/images/retreat_holyday_guidebook_14.png';
import guidebook_15 from '@assets/images/retreat_holyday_guidebook_15.png';
import guidebook_16 from '@assets/images/retreat_holyday_guidebook_16.png';
import guidebook_17 from '@assets/images/retreat_holyday_guidebook_17.png';
import guidebook_18 from '@assets/images/retreat_holyday_guidebook_18.png';
import guidebook_19 from '@assets/images/retreat_holyday_guidebook_19.png';
import guidebook_20 from '@assets/images/retreat_holyday_guidebook_20.png';
import guidebook_21 from '@assets/images/retreat_holyday_guidebook_21.png';
import guidebook_22 from '@assets/images/retreat_holyday_guidebook_22.png';
import guidebook_23 from '@assets/images/retreat_holyday_guidebook_23.png';
import { Container, Left, LogoImage, RetreatGuideBookTitle, TextContainer } from './RetreatInfo.styled';
import usePageControll from '@hooks/usePageControll';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { applicationState, isLoadingState, userState } from '@modules/atoms';
import useConfirm from '@hooks/useConfirm';
import { requestApplicationByUserAndRetreatId } from '@apis/index';

const RetreatInfoView = () => {
	const { handlePage } = usePageControll();
	const user = useRecoilValue(userState);
	const set_application = useSetRecoilState(applicationState);
	const setIsLoading = useSetRecoilState(isLoadingState);

	const confirmRegister = useConfirm(
		"수련회 신청서가 이미 작성되었습니다. 신청서를 수정하겠습니까?",
		() => handlePage("retreat-application-info"),
		() => console.log("Cancled..")
	);

  const handleApplicationPage = () => {
    setIsLoading({ isLoading: true });
    requestApplicationByUserAndRetreatId(user.userId, 2).then((res) => {
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

  return (
		<Container>
			<LogoImage src={logo} />
			<Left></Left>
			{/* <Left onClick={handleApplicationPage}>
				<SvgIcon name={'next'} width={24} height={24} fill="#1F9EDD" />
				수련회 등록하기
			</Left> */}
			<TextContainer>
				<RetreatGuideBookTitle>POSTER</RetreatGuideBookTitle>
				<LogoImage src={poster} />
				<br></br>
				<RetreatGuideBookTitle>GUIDE BOOK</RetreatGuideBookTitle>
				<LogoImage src={guidebook_1} />
				<LogoImage src={guidebook_2} />
				<LogoImage src={guidebook_3} />
				<LogoImage src={guidebook_4} />
				<LogoImage src={guidebook_5} />
				<LogoImage src={guidebook_6} />
				<LogoImage src={guidebook_7} />
				<LogoImage src={guidebook_8} />
				<LogoImage src={guidebook_9} />
				<LogoImage src={guidebook_10} />
				<LogoImage src={guidebook_11} />
				<LogoImage src={guidebook_12} />
				<LogoImage src={guidebook_13} />
				<LogoImage src={guidebook_14} />
				<LogoImage src={guidebook_15} />
				<LogoImage src={guidebook_16} />
				<LogoImage src={guidebook_17} />
				<LogoImage src={guidebook_18} />
				<LogoImage src={guidebook_19} />
				<LogoImage src={guidebook_20} />
				<LogoImage src={guidebook_21} />
				<LogoImage src={guidebook_22} />
				<LogoImage src={guidebook_23} />
			</TextContainer>
		</Container>
  );
};

export default RetreatInfoView;
