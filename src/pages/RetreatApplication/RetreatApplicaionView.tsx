import React, { useState } from 'react';
import logo from '@assets/images/retreat_logo.png';
import { InputView,CarIdInputView, Container, FormContainer, InputBox, LogoImage, TextForm, TextSub, TextTitle } from './RetreatApplicaionView.styled';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';
import Dropdown from '@components/Dropdown';
import TextInputB from '@components/TextInputB';
import RadioButton from '@components/RadioButton';
import RectangleButton from '@components/RectangleButton';
import { IconButton } from '@components/IconButton';

const RetreatApplicaionView = () => {
	const [role, set_role] = useState();
	const [transfer, set_transfer] = useState("");
	const [carId, set_carId] = useState("");
	const [busType, set_busType] = useState("");
	console.log(transfer);
  return (
		<>
			<Container>
				<LogoImage src={logo} />
				{/* <FormContainer> */}
				<InputView>
					<TextTitle>수련회 신청</TextTitle>
					<InputBox>
					<TextForm>식사 여부</TextForm>
					<RectangleButton>

					</RectangleButton>
					</InputBox>
					<InputBox>
						<TextForm>이동 수단</TextForm>
						<Dropdown onChange={set_transfer} placeholder='이동수단 선택' options={['대형버스','대중교통','자차','선발대']} />
					</InputBox>
					{transfer === '자차' &&
						<CarIdInputView>
						<TextSub>자차일 경우 차량번호를 입력해주세요.</TextSub>
						<TextInputB placeHolder={'차량번호'} getter={carId} setter={set_carId} type={'text'} />
					</CarIdInputView>
					}
					{transfer === '대형버스' &&
						<InputBox>
						<TextForm>대형버스</TextForm>
						<RadioButton
							items={[
								{ text: '왕복', value: 0 },
								{ text: '본당->안산', value: 1 },
								{ text: '안산->본당', value: 2 },
							]}
							initialValue={busType}
							onChange={set_busType}
						/>
					</InputBox>
					}
					<InputBox>
						<TextForm>주민등록번호</TextForm>
						<TextInputB placeHolder={'13자리'} maxLength={24} />
					</InputBox>
					<TextSub>* 개인정보는 보험가입을 위해 사용됩니다.</TextSub>
				{/* </FormContainer> */}
					<IconButton
			label={'가입 완료'}
			// onClick={confirmRegister}
			width='118px'
			height='48px'
			color={EColor.TEXT_200}
			backgroundColor={EColor.COLOR_PRIMARY}
			borderRadius='8px'
					/>
				</InputView>
			</Container>
		</>
  );
};

export default RetreatApplicaionView;