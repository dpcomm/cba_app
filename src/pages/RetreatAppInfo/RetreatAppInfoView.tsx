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
} from './RetreatAppInfoView.styled';
import Dropdown from '@components/Dropdown';
import TextInputB from '@components/TextInputB';
import IdnInput from '@components/IdnInput';
import RadioButton from '@components/RadioButton';
import MealRadioButton from '@components/MealRadioButton';
import { IconButton } from '@components/IconButton';
import { EColor } from '@styles/color';
import { requestSurvey } from '@apis/index';
import usePageControll from '@hooks/usePageControll';
import { useRecoilState, useRecoilValue } from 'recoil';
import { surveyState, userState } from '@modules/atoms';
import useConfirm from '@hooks/useConfirm';

const RetreatAppInfoView = () => {
  const {handlePage} = usePageControll();
  const userData = useRecoilValue(userState);
  const [surveyData,setSurveyData] = useRecoilState(surveyState);
  const [transfer, set_transfer] = useState(surveyData.transfer);
  const [bus, set_bus] = useState(surveyData.bus);
  const [carId, set_carId] = useState("");
  const [idn, set_Idn] = useState("");


  const ok = () => handleApplication();
  const cancle = () => console.log("Cancled..");
  const confirmApplication = useConfirm("설문을 수정하시겠습니까? ",ok,cancle);

  const handleChange = (field, value) => {
    setSurveyData(prev => ({ ...prev, [field]: value}));
  };
  const updateMealData = (newMealData) => {
    const updateData = {
      ...surveyData,
      meal: newMealData
    };
    setSurveyData(updateData);  // Recoil 상태 업데이트
  };
  const handleApplication = async () => {
    const updatedSurveyData = {
      ...surveyData,
      transfer: transfer || surveyData.transfer,
      bus: bus || surveyData.bus,
      carId: carId || surveyData.carId,
      idn: idn || surveyData.idn
    };
    if (!updatedSurveyData.transfer) return alert("필수 항목을 모두 작성해주세요.");

    await requestSurvey(
      userData.userId,
      updatedSurveyData.transfer,
      updatedSurveyData.idn,
      surveyData.meal,
      updatedSurveyData.bus,
      updatedSurveyData.carId
    )
    .then((res) => {
      console.log(res);
      alert("설문 수정이 완료되었습니다.");
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
          <TextTitle>수련회 신청서 조회 & 수정</TextTitle>
          <InputBox>
            <TextForm>식사 여부</TextForm>
						<MealRadioButton
							dates={['8/23', '8/24', '8/25']}
							mealData={surveyData.meal}
							disabled={[
								[true, true, false],
								[false, false, false],
								[false, false, true]
							]}
							onMealChange={updateMealData}
						/>
          </InputBox>
          <InputBox>
            <TextForm>이동 수단</TextForm>
            <Dropdown
              initialValue={surveyData.transfer}
              onChange={(set_transfer)}
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
                initialValue={surveyData.bus}
                onChange={set_bus}
              />
          </InputBox>
          }
          {transfer === "자차" &&
            <CarIdInputView>
              <TextInputB placeHolder={'차량번호'} getter={surveyData.carId} setter={(value) => handleChange('carId',value)} type={'text'} />
              <TextSub>자차일 경우 차량번호를 입력해주세요.</TextSub>
            </CarIdInputView>
          }
          {/* <InputBox>
            <TextForm>주민등록번호</TextForm>
            <IdnInput getter={surveyData.idn} setter={(value) => handleChange('idn',value)}/>
          </InputBox> */}
          <IconButton
            label={'수정 완료'}
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

export default RetreatAppInfoView;
