import { EColor } from "@styles/color";
import styled from "styled-components";


export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
  padding: 0px 24px 0px 24px;
	overflow-y: scroll;
  gap: 12px;
`;

export const ListItemButton = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid ${EColor.TEXT_400};
  border-width: 1.2px 0px 1.2px 0px;
  &:active {
    background-color: ${EColor.TEXT_400};
    color: ${EColor.TEXT_600};
    border-radius: 12px;
  }
  gap: 8px
`;