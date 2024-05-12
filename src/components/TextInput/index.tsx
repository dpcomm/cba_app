import React from 'react';
import { Container, StyledInput } from './styles';

type TextInputComponentProps = {
    placeHolder: string;
    svg?: React.ReactElement<SVGAElement>;
    getter: string
    setter: () => void;
  }

const TextInput = ({ svg, placeHolder, getter, setter }: TextInputComponentProps) => {
  return (
    <Container>
        {svg}
        <StyledInput type='text' placeholder={placeHolder} value={getter} onChange={(e) => setter(e.target.value)} />
    </Container>
  );
};

export default TextInput;