import React, { useState } from 'react';
import logo from '@assets/images/retreat_logo.png';
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
import IdnInput from '@components/IdnInput';
import RadioButton from '@components/RadioButton';
import MealRadioButton from '@components/MealRadioButton';
import { IconButton } from '@components/IconButton';
import { EColor } from '@styles/color';
import { requestSurvey } from '@apis/index';
import { allowedNodeEnvironmentFlags } from 'process';
import usePageControll from '@hooks/usePageControll';
import { useRecoilValue } from 'recoil';
import { userState } from '@modules/atoms';
import useConfirm from '@hooks/useConfirm';

const RetreatApplicationView = () => {
  const {handlePage} = usePageControll();
  const userData = useRecoilValue(userState);
  const [transfer, set_transfer] = useState("");
  const [bus, set_bus] = useState(0);
  const [carId, set_carId] = useState("");
  const [Idn, set_Idn] = useState("");
  const [meal, set_meal] = useState([
    [0, 0, 0], [0, 0, 0], [0, 0, 0]
  ]);

  const ok = () => handleApplication();
  const cancle = () => console.log("Cancled..");
  const confirmApplication = useConfirm("설문 작성을 완료하시겠습니까? ",ok,cancle)

  const handleApplication = async () => {
    if (!transfer || !Idn ) return alert("필수 항목을 모두 작성해주세요.");
    await requestSurvey(
      userData.userId,transfer,Idn,meal,bus,carId
    )
    .then((res) => {
      console.log(res);
      alert("설문 등록이 완료되었습니다.");
      handlePage('home');
    }).catch((err) => {
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
              options={['대형버스', '대중교통', '자차']}
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
          <InputBox>
            <TextForm>주민등록번호</TextForm>
            <IdnInput getter={Idn} setter={set_Idn}/>
          </InputBox>
          <IconButton
            label={'가입 완료'}
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
