import React, { useState } from "react";
import styled from "styled-components";
import { EColor } from "@styles/color";
import SvgIcon from "@components/SvgIcon";
interface BackItemButtonProps {
    label: string;
    onClick: () => void;
    isClicked: boolean;
    children?: React.ReactNode;
}

const Button = styled.button<{ clicked: boolean }>`
    background-color: ${({ clicked }) => (clicked ? EColor.TEXT_300 : EColor.TEXT_400)};
    color: ${EColor.TEXT_700};
    padding: 10px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    margin-bottom: 0px;
    font-size: 10px;

    svg{
        margin-left:5px;
    }
    &:hover {
        background-color: ${({ clicked }) => (clicked ? EColor.TEXT_500 : EColor.TEXT_300)};
    }
    &:active{
        background-color: ${({ clicked }) => (clicked ? EColor.TEXT_300 : EColor.TEXT_400)};
    }
`;

const BackItemButton: React.FC<BackItemButtonProps> = ({ label, onClick, isClicked, children }) => {

    return (
        <Button clicked={isClicked} onClick={onClick}>
            {children}
            {label}
        </Button>
    );
};

export default BackItemButton;