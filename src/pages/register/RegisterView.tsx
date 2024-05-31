import React, { useState } from 'react';
import { Container, LogoLight, LogoView, LogoBold, InputView, InputBox, SvgBox, EmptyBox } from './RegisterView.styled';
import TextInputB from '@components/TextInputB';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';
import RadioButton from '@components/RadioButton';
import Dropdown from '@components/Dropdown';
import { IconButton } from '@components/IconButton';
import useConfirm from '@hooks/useConfirm';

const RegisterView = () => {
  const [id, set_id] = useState("");
  const [password, set_password] = useState("");
  const [password2, set_password2] = useState("");
  const [name, set_name] = useState("");
  const [gender, set_gender] = useState(0);
  const [group, set_group] = useState();
  const [birth, set_birth] = useState();

  const ok = () => handleRegister();
  const cancle = () => console.log("Cancled..");
  const confirmRegister = useConfirm("회원 가입을 완료하시겠습니까? ", ok, cancle);

  const handleRegister = () => {
    console.log(id);
    console.log(password);
    console.log(password2);
    console.log(name);
    console.log(gender);
    console.log(group);
    console.log(birth);
  };

	return (
    <Container>
      <LogoView>
				<LogoLight>Welcome to</LogoLight>
				<LogoBold>CBA</LogoBold>
			</LogoView>
      <InputView>
        <InputBox>
          <SvgBox><SvgIcon name={'id'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={'아이디를 입력해주세요.'} getter={id} setter={set_id} maxLength={24}/>
        </InputBox>
        <InputBox>
          <SvgBox><SvgIcon name={'password'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={'비밀번호를 입력해주세요.'} getter={password} setter={set_password} maxLength={24} />
        </InputBox>
        <InputBox>
          <SvgBox><EmptyBox /></SvgBox>
          <TextInputB placeHolder={'비밀번호를 다시 입력해주세요.'} getter={password2} setter={set_password2} maxLength={24} />
        </InputBox>
        <InputBox>
          <SvgBox><SvgIcon name={'user'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={'이름을 입력해주세요.'} getter={name} setter={set_name} maxLength={4} />
        </InputBox>
        <InputBox>
          <SvgBox><SvgIcon name={'gender'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <RadioButton
            items={[
              { text: '남자', value: 0 },
              { text: '여자', value: 1 },
            ]}
            initialValue={0}
            onChange={set_gender}
          />
        </InputBox>
        <InputBox>
          <SvgBox><SvgIcon name={'users'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <Dropdown options={["권수영M", "노시은M", "반일섭M"]} placeholder='소그룹을 선택해주세요.' onChange={set_group}/>
        </InputBox>
        <InputBox>
          <SvgBox><SvgIcon name={'cake'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={'생년월일을 입력해주세요.'} getter={birth} setter={set_birth} type='number' maxLength={6} />
        </InputBox>
      </InputView>
      <IconButton
        label={'가입 완료'}
        onClick={confirmRegister}
        width='118px'
        height='48px'
        color={EColor.TEXT_200}
        backgroundColor={EColor.COLOR_PRIMARY}
        borderRadius='8px'
      />
    </Container>
  );
};

export default RegisterView;