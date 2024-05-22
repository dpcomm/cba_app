import React, { useState } from 'react';
import { Container, LogoLight, LogoView, LogoBold, InputView, InputBox, SvgBox } from './RegisterView.styled';
import TextInputB from '@components/TextInputB';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';

const RegisterView = () => {
  const [id, set_id] = useState("");
	return (
    <Container>
      <LogoView>
				<LogoLight>Welcome to</LogoLight>
				<LogoBold>CBA</LogoBold>
			</LogoView>
      <InputView>
        <InputBox>
          <SvgBox><SvgIcon name={'id'} width={36} height={36} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={'아이디를 입력해주세요'} getter={id} setter={set_id} />
        </InputBox>
        {/* <InputBox>
          <SvgBox><SvgIcon name={'id'} width={36} height={36} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={''} getter={''} setter={} />
        </InputBox>
        <InputBox>
          <SvgBox><SvgIcon name={'id'} width={36} height={36} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={''} getter={''} setter={} />
        </InputBox>
        <InputBox>
          <SvgBox><SvgIcon name={'id'} width={36} height={36} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={''} getter={''} setter={} />
        </InputBox> */}
      </InputView>
    </Container>
  );
};

export default RegisterView;