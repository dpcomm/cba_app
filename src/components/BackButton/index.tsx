import React, { useState } from "react";
import styled from "styled-components";
import { EColor } from "@styles/color";

interface BackButtonProps {
  label: string;
  onClick: () => void;
}

const Button = styled.button<{ clicked: boolean }>`
    background-color: ${({ clicked }) => (clicked ? EColor.TEXT_500 : EColor.TEXT_300)};
    color: ${EColor.TEXT_700};
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width:100%;
    transition: background-color 0.3s ease; /* 배경색 변경에 애니메이션 효과 추가 */
  `;

const BackeButton: React.FC<BackButtonProps> = ({ label, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true); // 버튼 클릭 시 clicked 상태 변경
    onClick(); // 외부에서 전달된 onClick 함수 호출
  };

  return (
    <Button clicked={clicked} onClick={handleClick}>
      {label}
    </Button>
  );
};

export default BackeButton;