import { EColor } from '@styles/color';
import { body2, body3, body5, Title3 } from '@styles/font';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;

  align-items: center;
`;
export const MainTitle = styled.section`
  width: 100%;
  font-size: 24px;
  text-align: start;
  padding: 10px 30px;
`;
export const ProgressBarBox = styled.section`
  width: 100%;
  margin-top: 50px;
  padding: 0 30px;
  .progressNum {
    width: 70px;
    margin: 16px auto;
    border-radius: 20px;
    text-align: center;
    color: ${EColor.TEXT_200};
    background: ${EColor.COLOR_PRIMARY_SUB1};
  }
`;
export const QuestioBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 30px;
`;

export const Title = styled.article`
  width: 100%;
  font-size: 22px;
  text-align: start;
  white-space: pre-line;
`;
export const ButtonGroup = styled.article`
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;

export const Bible = styled.article`
  ${body3}
  width: 100%;
  margin-top: -10px;
  color: ${EColor.TEXT_600};
  white-space: pre-line;
`;
export const AnswerBox = styled.article`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  ${body2}
  width: 280px;
  height: 50px;
  margin: 20px auto;
  padding: 0 14px;
  border-radius: 8px;
  border: 1px solid ${EColor.COLOR_PRIMARY_SUB2};
  &::placeholder {
    opacity: 1;
    color: ${EColor.TEXT_600};
  }
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    opacity: 0;
    transition: all 0.3s;
  }
`;

export const Button = styled.button`
  ${Title3}
  width: 160px;
  height: 60px;
  margin: 0 auto;
  border: none;
  border-radius: 16px;
  background: ${(props) =>
    props.type === 'submit' ? 'linear-gradient(to right, #AA68FC, #F16622 )' : `${EColor.TEXT_400}`};
  color: ${(props) => (props.type === 'submit' ? `${EColor.TEXT_200}` : '#000')};
`;
