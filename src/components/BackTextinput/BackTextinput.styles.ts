import styled from "styled-components";
import { EColor } from "@styles/color";
const InputContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 100px; 
left: 50%;
transform: translateX(-50%);
width: 100%;
padding: 20px 0;
margin-top: 50px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center
`

const StyledInput = styled.input`
  width: 300px;
  padding: 10px;
  background-color: ${EColor.TEXT_700};
  border: 2px solid ${EColor.TEXT_700};
  border-radius: 20px;
  font-size: 16px;
  outline: none;
   
  
  &::placeholder {
    color:${EColor.TEXT_500}; 
  }

`;

export { InputContainer, StyledInput }
// export interface StyledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   customHeingt?: number;
// }