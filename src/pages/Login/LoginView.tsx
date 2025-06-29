import React, { useEffect, useState } from 'react';
import { CheckBox, Container, LoginInputView, LogoBold, LogoLight, LogoView, TextButton, TextButtonView } from './LoginView.styled';
import TextInput from '@components/TextInput';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';
import { IconButton } from '@components/IconButton';
import usePageControll from '@hooks/usePageControll';
import { requestLogin } from '@apis/index';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isLoadingState, userState } from '@modules/atoms';


const LoginView = () => {
	const { handlePage } = usePageControll();

	const [id, set_id] = useState("");
	const [password, set_password] = useState("");
	const [autoLogin, set_autoLogin] = useState(false);
	const [user, setUser] = useRecoilState(userState);
	const setIsLoading = useSetRecoilState(isLoadingState);

	useEffect(() => {
		user.userId && handlePage("home");
	}, []);

	const handleCheckBox = () => {
		set_autoLogin(!autoLogin);
	};

	const handleLogin = async () => {
		if ( !id || !password) return alert("아이디와 비밀번호을 입력해주세요.");
		setIsLoading({ isLoading: true });
		requestLogin(id, password, autoLogin)
		.then(async (res) => {
			setUser({
				id: res.data.user.id,
				userId: res.data.user.userId,
				rank: res.data.user.rank,
				password: res.data.user.password,
				name: res.data.user.name,
				group: res.data.user.group,
				phone: res.data.user.phone,
				birth: res.data.user.birth,
				gender: res.data.user.gender,
			});
			await localStorage.setItem('access_token', res.data.accessToken);
			if (autoLogin) {
				await localStorage.setItem('refresh_token', res.data.refreshToken);
			}
			handlePage('home');
			alert("로그인에 성공하였습니다.");
			setIsLoading({ isLoading: false });
		}).catch((err) => {
			setIsLoading({ isLoading: false });
			if (err.response.data.message === "Unregisterd user") return alert("존재하지 않는 유저입니다.");
			if (err.response.data.message === "Incorrect password") return alert("비밀번호가 일치하지 않습니다.");
			if (err.response.data.message === "Deleted user") return alert("삭제된 계정입니다.");
			return alert("잘못된 접근입니다.");
		});
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
					type='password'
				/>
				<IconButton
					// svg={<SvgIcon name={'login'} width={24} height={24} fill={EColor.COLOR_PRIMARY} stroke={EColor.COLOR_PRIMARY} />}
					label={'로그인'}
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
				<TextButton onClick={() => handlePage("reset-password")}>비밀번호 재설정</TextButton>
				<TextButton onClick={() => handlePage("register")}>회원가입</TextButton>
			</TextButtonView>
		</Container>
  );
};

export default LoginView;