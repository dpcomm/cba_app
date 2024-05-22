import React from 'react';
import { Container, StyledInput } from './styles';

type TextInputBComponentProps = {
  placeHolder: string;
  getter: string
  setter: () => void;
}


const TextInputB = ({ placeHolder, getter, setter }: TextInputBComponentProps) => {
  return (
    <Container>
      <StyledInput type='text' placeholder={placeHolder} value={getter} onChange={(e) => setter(e.target.value)} />
    </Container>
  );
};

export default TextInputB;
