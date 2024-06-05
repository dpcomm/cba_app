import { EColor } from "@styles/color";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopBar = styled.div`
  background-color: ${EColor.TEXT_400};
  color: ${EColor.TEXT_700};
  padding: 2px;
  text-align: center;
  font-size: 14px;
  line-height: 17px;
  width: calc(100% - 50px);
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 40px; 
  left: 50%; 
  transform: translateX(-50%);
`;
export const SideBar = styled.div`
  background-color: ${EColor.TEXT_400};
  color: ${EColor.TEXT_700};
  padding: 2px;
  text-align: center;
  font-size: 14px;
  line-height: 17px;
  width: 200px; 
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;;
  align-items:center;
`;

export const BackItemButtonContainer = styled.div`
  margin-top: auto;
  position: fixed;
  width: 200px;
  top: 180px; 
  left: 6%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  border-top: 2px solid ${EColor.TEXT_700};
  border-bottom: 2px solid ${EColor.TEXT_700};
`;

export const BackButtonContainer = styled.div`
  position: fixed;
  bottom: 10px; /* 하단에 고정 */
  left:5%;
  transform: translateX(-50%);
`;
