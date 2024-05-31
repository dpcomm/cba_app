import React, { useState } from 'react';
import { Container, LogoLight, LogoView, LogoBold, InputView, InputBox, SvgBox } from './RegisterView.styled';
import TextInputB from '@components/TextInputB';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';

const RegisterView = () => {
  const [id, set_id] = useState("");
  const [password, set_password] = useState("");
  const [password2, set_password2] = useState("");
  const [name, set_name] = useState("");

	return (
    <Container>
      <LogoView>
				<LogoLight>Welcome to</LogoLight>
				<LogoBold>CBA</LogoBold>
			</LogoView>
      <InputView>
        <InputBox>
          <SvgBox><SvgIcon name={'id'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={'아이디를 입력해주세요.'} getter={id} setter={set_id} />
        </InputBox>
        <InputBox>
          <SvgBox><SvgIcon name={'password'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={'비밀번호를 입력해주세요.'} getter={password} setter={set_password} />
        </InputBox>
        <InputBox>
          <SvgBox><SvgIcon name={'password'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={'비밀번호를 다시 입력해주세요.'} getter={password2} setter={set_password2} />
        </InputBox>
        <InputBox>
          <SvgBox><SvgIcon name={'person'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={'이름을 입력해주세요.'} getter={name} setter={set_name} />
        </InputBox>
        <InputBox>
          <SvgBox><SvgIcon name={'person'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={'이름을 입력해주세요.'} getter={name} setter={set_name} />
        </InputBox>
        <InputBox>
          <SvgBox><SvgIcon name={'person'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={'남자 여자'} getter={name} setter={set_name} />
        </InputBox>
        <InputBox>
          <SvgBox><SvgIcon name={'cake'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={'소그룹을 선택해주세요.'} getter={name} setter={set_name} />
        </InputBox>
        <InputBox>
          <SvgBox><SvgIcon name={'cake'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={'생년월일을 입력해주세요.'} getter={name} setter={set_name} />
        </InputBox>
      </InputView>
      버튼
    </Container>
  );
};

export default RegisterView;