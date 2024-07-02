import { EColor } from "@styles/color";
import { Title3 } from "@styles/font";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
  position: absolute;
	flex-direction: column;
	width: 100%;
  height: 100%;
	justify-content: center;
	align-items: center;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Logo = styled.div`
	${Title3}
	color: ${EColor.COLOR_PRIMARY_SUB1};
	user-select: none;
`;