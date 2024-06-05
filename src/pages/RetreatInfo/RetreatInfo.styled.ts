import { EColor } from "@styles/color";
import { Title1, Title4_2, Title6, body1, body5, } from "@styles/font";
import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 96vh;
	text-align: center;
`;

export const LogoImage = styled.img`
	width: 100%;
`;

export const LogoText = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	${Title6};
	font-size: 36px;
	color: ${EColor.TEXT_900};
	letter-spacing: 2px;
	padding-top: 88px;
	padding-bottom: 48px;
`;

export const Left = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	width: 100%;
	${Title4_2}
	letter-spacing: 4px;
	color: ${EColor.COLOR_PRIMARY_SUB1};
	margin-bottom: 60px;
	padding: 4px;
	gap: 4px;
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	padding-right: 32px;
	padding-left: 32px;
`;

export const TextTitle = styled.div`
	${body1};
	font-size: 20px;
	color: ${EColor.TEXT_800};
	letter-spacing: 2px;
`;

export const TextBody = styled.div`
	${body5};
	font-size: 12px;
	color: ${EColor.TEXT_800};
	letter-spacing: 2px;
`;
