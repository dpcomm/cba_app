import React, { useState } from 'react';
import logo from '@assets/images/retreat_grace_logo.png';
import {
  CarIdInputView,
  Container,
  FormContainer,
  InputBox,
  LogoImage,
  TextForm,
  TextFormLight,
  TextSub,
  TextTitle
} from './RetreatApplicaionView.styled';
import Dropdown from '@components/Dropdown';
import TextInputB from '@components/TextInputB';
// import IdnInput from '@components/IdnInput';
import RadioButton from '@components/RadioButton';
import MealRadioButton from '@components/MealRadioButton';
import { IconButton } from '@components/IconButton';
import { EColor } from '@styles/color';
import { requestSurvey } from '@apis/index';
import usePageControll from '@hooks/usePageControll';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoadingState, userState } from '@modules/atoms';
import useConfirm from '@hooks/useConfirm';

const RetreatApplicationView = () => {
  const {handlePage} = usePageControll();
  const setIsLoading = useSetRecoilState(isLoadingState);
  const userData = useRecoilValue(userState);

  const [transfer, set_transfer] = useState("");
  const [bus, set_bus] = useState(0);
  const [carId, set_carId] = useState("");
  const [Idn, set_Idn] = useState("000000-0000000");
  const [meal, set_meal] = useState([
    [0, 0, 0], [0, 0, 0], [0, 0, 0]
  ]);

  const ok = () => handleApplication();
  const cancle = () => console.log("Cancled..");
  const confirmApplication = useConfirm("설문 작성을 완료하시겠습니까? ",ok,cancle);

  const handleApplication = async () => {
    setIsLoading({ isLoading: true });
    // if (!transfer || !Idn ) return alert("필수 항목을 모두 작성해주세요.");
    if (!transfer) return alert("필수 항목을 모두 작성해주세요.");
    await requestSurvey(
      userData.userId,
      transfer,
      Idn,
      meal,
      bus,
      carId
    )
    .then(() => {
      setIsLoading({ isLoading: false });
      alert("설문 등록이 완료되었습니다.");
      handlePage('home');
    }).catch((err) => {
      setIsLoading({ isLoading: false });
      alert("설문 등록에 실패하였습니다.");
      console.log(err.response.data.message);
    });
  };

  return (
    <>
      <Container>
        <LogoImage src={logo} />
        <FormContainer>
          <TextTitle>수련회 신청</TextTitle>
          <InputBox>
            <TextForm>식사 여부</TextForm>
						<MealRadioButton
							dates={['8/23', '8/24', '8/25']}
							mealData={meal}
							disabled={[
								[true, true, false],
								[false, false, false],
								[false, false, true]
							]}
							onMealChange={set_meal}
						/>
          </InputBox>
          <InputBox>
            <TextForm>이동 수단</TextForm>
            <Dropdown
              onChange={set_transfer}
              placeholder='이동수단 선택'
              options={['대형버스', '대중교통', '자차', '선발대']}
            />
          </InputBox>
          {transfer === "대형버스" &&
            <InputBox>
              <TextFormLight>대형버스</TextFormLight>
              <RadioButton
                items={[
                  { text: '왕복', value: 0 },
                  { text: '본당→안산', value: 1 },
                  { text: '안산→본당', value: 2 },
                ]}
                initialValue={0}
                onChange={set_bus}
              />
          </InputBox>
          }
          {transfer === "자차" &&
            <CarIdInputView>
              <TextInputB placeHolder={'차량번호'} getter={carId} setter={set_carId} type={'text'} />
              <TextSub>자차일 경우 차량번호를 입력해주세요.</TextSub>
            </CarIdInputView>
          }
          {/* <InputBox>
            <TextForm>주민등록번호</TextForm>
            <IdnInput getter={Idn} setter={set_Idn}/>
          </InputBox> */}
          <TextSub>* 선발대라면, 이동수단 - 선발대 선택해주세요.</TextSub>
          <IconButton
            label={'신청 완료'}
            onClick={confirmApplication}
            width='118px'
            height='48px'
            color={EColor.TEXT_200}
            backgroundColor={EColor.COLOR_PRIMARY}
            borderRadius='8px'
          />
        </FormContainer>
      </Container>
    </>
  );
};

export default RetreatApplicationView;
