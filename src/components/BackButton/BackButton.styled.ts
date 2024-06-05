import styled from "styled-components"
const StyledButton = styled.button`
    width: 120px;
    height: 40px;
    color: gray;
    border:none;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content: center;
    font-size:16px;
    opacity: 0;
    background-color: lightgray;
    border-radius: 20px; 
    transition: background-color o.3s !important;

    &:hover{
        background-color:darkgray!important;
    }
`;