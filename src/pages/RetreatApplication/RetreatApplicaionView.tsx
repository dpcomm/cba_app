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
import RadioButton from '@components/RadioButton';
import MealRadioButton from '@components/MealRadioButton';
import { IconButton } from '@components/IconButton';
import { EColor } from '@styles/color';

const RetreatApplicationView = () => {
  const [transfer, set_transfer] = useState("");
  const [bus, set_bus] = useState(0);
  const [carId, set_carId] = useState("");
  const [meal, set_meal] = useState([
    [0, 0, 0], [0, 0, 0], [0, 0, 0]
  ]);

  const confirmApplication = () => {

  };

	console.log(meal);
  console.log(transfer);
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
                initialValue={bus}
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
            <TextInputB placeHolder={'13자리'} getter={carId} setter={set_carId} type={'text'} />
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
