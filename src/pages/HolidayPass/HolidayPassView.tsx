import { useState } from 'react';
import {
  Container,
  ProgressBarBox,
  MainTitle,
  QuestioBox,
  Title,
  ButtonGroup,
  Button,
  Input,
  AnswerBox,
  Bible,
} from './HolidayPass.styled';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HolidayPassQuestion } from './HolidayPassQuestion';
import usePageControll from '@hooks/usePageControll';

const HolidayPassView = () => {
  const { handlePage } = usePageControll();

  const [questionNum, setQuestionNum] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [inputValue, setInputValue] = useState('');

  if (!HolidayPassQuestion || !Array.isArray(HolidayPassQuestion) || HolidayPassQuestion.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = HolidayPassQuestion[questionNum];
  if (!currentQuestion) {
    return <div>Question not found</div>;
  }

  const handleAnswerChange = (questionId: number, answer: string) => {
    if (questionId === 1 && answer === '불참') {
      alert('다음에는 꼭 함께 해요!');
      handlePage('home');
      return;
    }
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));

    if (questionId === 5 && answer !== '조원') {
      setQuestionNum(6);
    } else {
      if (questionId < HolidayPassQuestion.length - 1) {
        setQuestionNum(questionNum + 1);
      }
    }
    setInputValue('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentQuestion?.id) {
      handleAnswerChange(currentQuestion.id, inputValue);
    }
  };

  return (
    <Container>
      <MainTitle>Pass 발급 신청</MainTitle>
      <ProgressBarBox>
        <ProgressBar
          style={{
            height: '10px',
            marginBottom: '20px',
            borderRadius: 0,
          }}
        >
          <ProgressBar
            striped
            now={(questionNum / (HolidayPassQuestion.length - 1)) * 100}
            style={{
              height: '100%',
              background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // 그라데이션 색상 (진행 상태 색)
            }}
          />
        </ProgressBar>
        <div className="progressNum">
          {currentQuestion.id}/ {HolidayPassQuestion.length}
        </div>
      </ProgressBarBox>
      <QuestioBox>
        <Title>{currentQuestion.title} </Title>
        {currentQuestion.type === 'choice' && (
          <ButtonGroup>
            <Button onClick={() => handleAnswerChange(currentQuestion.id, currentQuestion.answera || '')}>
              {currentQuestion.answera}
            </Button>
            <Button onClick={() => handleAnswerChange(currentQuestion.id, currentQuestion.answerb || '')}>
              {currentQuestion.answerb}
            </Button>
          </ButtonGroup>
        )}
        {currentQuestion.type === 'answer' && (
          <form onSubmit={handleSubmit}>
            <Bible>{currentQuestion.bible}</Bible>
            <AnswerBox>
              <Input
                type="text"
                placeholder={currentQuestion.desc}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button onClick={handleSubmit} type="submit">
                {currentQuestion.nextBtn}
              </Button>
            </AnswerBox>
          </form>
        )}
      </QuestioBox>
    </Container>
  );
};

export default HolidayPassView;
