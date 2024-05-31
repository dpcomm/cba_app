import { EColor } from "@styles/color";
import { body1 } from "@styles/font";
import styled from "styled-components";

export const RadioWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 2px;
  column-gap: 44px;
  width: 100%;

  input {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    padding: 0;
    width: 1px;
  }
`;

export const CustomLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
`;

export const RadioView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; /* 중앙 정렬 */
  justify-content: center;
  margin-right: 8px;
  color: ${props => props.isSelected ? EColor.COLOR_PRIMARY : EColor.TEXT_500}; /* 조건에 따라 색상 변경 */
  ${body1}
  gap: 8px;
  letter-spacing: 2px;
`;