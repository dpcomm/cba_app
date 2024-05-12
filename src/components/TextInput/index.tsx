import React, { useState } from 'react';
import { TextInputBox, CharacterCount, TextInputContainer, TInputContainer, TInputBox } from './TextInput.styled';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  placeholder: string;
  width?: string;
  height?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ value, onChange, maxLength, placeholder, width, height }: TextInputProps) => {
  const handleChagne = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (maxLength === undefined || e.target.value.length <= maxLength) {
      onChange(e.target.value);
    }
  };
  return (
    <TextInputContainer>
      <TextInputBox width={width} height={height} value={value} onChange={handleChagne} placeholder={placeholder} maxLength={maxLength} />
      <CharacterCount>
        {/* 오른쪽 하단에 글자 수 카운트(0/50) */}
        {value.length}/{maxLength}
      </CharacterCount>
    </TextInputContainer>
  );
};

/////////////////// 닉네임 입력 ////////////////////
export const NickInput: React.FC<TextInputProps> = ({ value, onChange, maxLength }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TInputContainer>
      <TInputBox
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="닉네임 입력(1~10)"
        maxLength={maxLength}
      />
    </TInputContainer>
  );
};

/////////////////// 패스워드 입력 ////////////////////
export const PassInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  const [error, setError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const validatePassword = (value: string) => {
    // 비밀번호 틀렸을 때 에러처리(빨간 border 처리) 하려고 만든 임시 코드 임니다
    setError(value !== '1234' && value !== ''); // 1234일 때, 아무것도 적지 않고 포커스 풀었을 때는 에러처리 안되게 했슴니다
  };

  return (
    <TInputContainer>
      <TInputBox
        type="password"
        value={value}
        onChange={handleChange}
        onBlur={() => validatePassword(value)} // 포커스 풀었을 때 에러 검증
        error={error} // 에러 상태 전달
        placeholder="Password"
      />
    </TInputContainer>
  );
};
