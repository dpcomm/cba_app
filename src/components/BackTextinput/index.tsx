import React from "react";
import styled from "styled-components";
import { EColor } from "@styles/color";
import SvgIcon from "@components/SvgIcon";
const InputContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 20px; 
left: 50%;
transform: translateX(-50%);
width: 100%;
padding: 20px 0;
`;


const InputWrapper = styled.div`
    position: relative;
`;
const StyledInput = styled.input`
  width:500px;
  padding: 10px 10px 10px 35px;
  background-color:#f0f0f0;
  border: 2px solid #f0f0f0;
  border-radius: 20px;
  font-size: 16px;
  outline: none;
  margin-top: 15px;
  color: ${EColor.TEXT_600};

  &::placeholder {
    color: ${EColor.TEXT_600};; 
  }

`;
const IconContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 60%;
  transform: translateY(-50%);
`;

const BackTextInput: React.FC = () => {
    return (
        <InputContainer>
            <InputWrapper>
                <IconContainer>
                    <SvgIcon name={'search'} width={20} height={20} fill={"#757D8A"} /> {/* 검색 아이콘 */}
                </IconContainer>
                <StyledInput type="text" placeholder="검색어를 입력하세요..." />
            </InputWrapper>
        </InputContainer>
    );
};
export default BackTextInput;