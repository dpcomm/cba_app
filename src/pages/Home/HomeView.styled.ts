import styled from "styled-components";
import { EColor } from "@styles/color";
import { Title5, Title6, body1, body2, body3, body4, body5 } from "@styles/font";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100dvh;
	align-items: center;
	padding: 34px 24px;
`;

export const HeaderView = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	background-color: ${EColor.COLOR_PRIMARY_SUB1_2};
	border-radius: 16px;
	padding: 16px 12px;
	gap: 6px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	margin-bottom: 12px;
`;

export const HeaderCenter = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	user-select: none;
	margin-right: auto;
`;

export const HeaderRight = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	&:active {
    background-color: ${EColor.TEXT_500};
    border-radius: 12px;
  }
`;

export const HeaderGroupText = styled.div`
	${body3};
	font-size: 14px;
	color: ${EColor.TEXT_200};
`;
export const HeaderNameText = styled.div`
	${Title5}
	font-size: 20px;
	color: ${EColor.TEXT_200};
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

export const NameText = styled.div`
	${body1};
	font-size: 20px;
	color: ${EColor.TEXT_800};
	letter-spacing: 1px;
	padding-top: 6%;
	padding-bottom: 6%;
`;

export const DDayView = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 16px 24px;
	background-color: ${EColor.TEXT_300};
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const DDayText = styled.div`
	${body4};
	font-size: 22px;
	letter-spacing: 1px;
	color: ${EColor.COLOR_PRIMARY_SUB1};
	user-select: none;
`;

export const BarTextView = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 12px;
`;

export const BarTextMain = styled.div`
	${Title5};
	color: ${EColor.COLOR_PRIMARY_SUB1};
	width: 96px;
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const BarTextSubRight = styled.div`
	${Title6};
	color: ${EColor.COLOR_PRIMARY_SUB2};
	width: 96px;
	text-align: right;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const BarTextSubLeft = styled.div`
	${Title6};
	color: ${EColor.COLOR_PRIMARY_SUB2};
	width: 96px;
	text-align: left;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const Bar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 3px;
	background-image: linear-gradient(to right, ${EColor.COLOR_PRIMARY_SUB1} 50%, ${EColor.TEXT_500} 50%);
`;

export const Dot = styled.div<{ color: string }>`
	display: flex;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;

export const Left = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	${body2}
	color: ${EColor.TEXT_700};
	margin-bottom: 48px;
	padding: 4px;
	user-select: none;
	margin-left: auto;
	&:active {
    background-color: ${EColor.TEXT_400};
    color: ${EColor.TEXT_600};
    border-radius: 8px;
  }
`;

export const MenuView = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 12px;
`;

export const ItemView = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-left: 36px;
	padding-right: 36px;
`;

export const ItemText = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	${body3};
	word-break: break-all;
	color: ${EColor.TEXT_600};
	margin-top: 10px;
	text-align: center;
	user-select: none;
`;

export const Line = styled.div`
	display: flex;
	background-color: ${EColor.TEXT_500};
	width: 1px;
	height: 64px;
	border-radius: 12px;
`;

export const ButtonView = styled.div`
	display: flex;
	width: 100%;
	margin-top: 24px;
`;

export const TextLight = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	${body5};
	color: ${EColor.TEXT_600};
	margin-top: auto;
	text-decoration: underline;
	user-select: none;
`;