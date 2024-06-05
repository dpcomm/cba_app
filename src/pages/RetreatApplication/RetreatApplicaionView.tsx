import React, { useState } from 'react';
import logo from '@assets/images/retreat_logo.png';
import { CarIdInputView, Container, FormContainer, InputBox, LogoImage, TextForm, TextSub, TextTitle } from './RetreatApplicaionView.styled';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';
import Dropdown from '@components/Dropdown';
import TextInputB from '@components/TextInputB';
import RadioButton from '@components/RadioButton';

const RetreatApplicaionView = () => {
	const [role, set_role] = useState();
	const [transfer, set_transfer] = useState(0);
	const [carId, set_carId] = useState("");
	console.log(transfer);
  return (
		<>
			<Container>
				<LogoImage src={logo} />
				<FormContainer>
					<TextTitle>수련회 신청</TextTitle>
					<InputBox>
						<TextForm>역할</TextForm>
						<Dropdown onChange={set_role} placeholder='조장/조원/새친구 선택' options={['조장', '조원', '새친구']} />
					</InputBox>
					<InputBox>
						<TextForm>식사 여부</TextForm>
						<TextInputB placeHolder={'비밀번호를 다시 입력해주세요.'} maxLength={24} />
					</InputBox>
					<InputBox>
						<TextForm>이동 수단</TextForm>
						<RadioButton
							items={[
								{ text: '버스', value: 0 },
								{ text: '버스', value: 1 },
								{ text: '대중교통', value: 2 },
								{ text: '자차', value: 3 },
							]}
							initialValue={transfer}
							onChange={set_transfer}
						/>
					</InputBox>
					{transfer === 3 &&
						<CarIdInputView>
							<TextSub>자차일 경우 차량번호를 입력해주세요.</TextSub>
							<TextInputB placeHolder={'차량번호'} getter={carId} setter={set_carId} type={'text'} />
						</CarIdInputView>
					}
				</FormContainer>
			</Container>
		</>
  );
};

export default RetreatApplicaionView;