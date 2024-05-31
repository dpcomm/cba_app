import styled from "styled-components";
import { EColor } from "@styles/color";
import { Title3, body6 } from "@styles/font";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
	padding-top: 86px;
	padding-bottom: 86px;
	padding-right: 48px;
	padding-left: 48px;
	overflow-y: scroll;
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

export const InputView = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 20px;
	padding-top: 56px;
	padding-bottom: 56px;
`;

export const InputBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const SvgBox = styled.div`
	padding: 4px;
	margin-right: 14px;
`;