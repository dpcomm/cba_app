import styled from "styled-components";
import { EColor } from "@styles/color";
import { Title3, body3, body6 } from "@styles/font";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 96vh;
	justify-content: center;
	align-items: center;
	padding-right: 42px;
	padding-left: 42px;
`;

export const LogoView = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
`;

export const LogoLight = styled.div`
	${body6};
	font-size: 42px;
	color: ${EColor.COLOR_PRIMARY_SUB2};
	letter-spacing: 2px;
`;

export const LogoBold = styled.div`
	${Title3}
	font-size: 64px;
	color: ${EColor.COLOR_PRIMARY};
	letter-spacing: 7px;
`;

export const LoginInputView = styled.div`
	width: 100%;
	margin-top: 24px;
`;

export const TextButtonView = styled.div`
	width: 100%;
	margin-top: 36px;
`;

export const TextButton = styled.div`
	display: flex;
	width: 100%;
	margin: 8px;
	${body3};
	color: ${EColor.TEXT_600};
	justify-content: center;
	align-items: center;
`;