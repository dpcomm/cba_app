import React, { useState } from 'react';
import { CheckBox, Container, LoginInputView, LogoBold, LogoLight, LogoView, TextButton, TextButtonView } from './LoginVIew.styled';
import TextInput from '@components/TextInput';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';
import { IconButton } from '@components/IconButton';
import usePageControll from '@hooks/usePageControll';

const LoginView = () => {
	const [id, set_id] = useState("");
	const [password, set_password] = useState("");
	const [autoLogin, set_autoLogin] = useState(false);

	const { handlePage } = usePageControll();

	const handleCheckBox = () => {
		set_autoLogin(!autoLogin);
	};

	const handleLogin = () => {
		handlePage('home');
		console.log("Hello world");
	};

	return (
		<Container>
			<LogoView>
				<LogoLight>Welcome to</LogoLight>
				<LogoBold>CBA</LogoBold>
			</LogoView>
			<LoginInputView>
				<TextInput
					svg={<SvgIcon name={'id'} width={32} height={32} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} />}
					placeHolder={"아이디"}
					getter={id}
					setter={set_id}
				/>
				<TextInput
					svg={<SvgIcon name={'password'} width={32} height={32} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} />}
					placeHolder={"비밀번호"}
					getter={password}
					setter={set_password}
				/>
				<IconButton
					svg={<SvgIcon name={'login'} width={24} height={24} fill={EColor.COLOR_PRIMARY} stroke={EColor.COLOR_PRIMARY} />}
					label={'로그인 하기'}
					width={"100%"}
					height={"52px"}
					borderRadius='48px'
					backgroundColor={EColor.TEXT_300}
					tintColor='white'
					color='black'
					onClick={() => handleLogin()}
				/>
			</LoginInputView>
				<CheckBox onClick={handleCheckBox}>
					<SvgIcon
						name={'check'}
						width={24}
						height={24}
						fill={autoLogin ? EColor.COLOR_PRIMARY_SUB1 : EColor.TEXT_500}
					/>
					로그인 유지
				</CheckBox>
			<TextButtonView>
				<TextButton onClick={() => alert("구현중인 기능입니다.:)")}>아이디/비밀번호 찾기</TextButton>
				<TextButton onClick={() => handlePage("register")}>회원가입</TextButton>
			</TextButtonView>
		</Container>
  );
};

export default LoginView;