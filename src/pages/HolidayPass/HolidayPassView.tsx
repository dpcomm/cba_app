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
  Ticket,
  TicketIssued,
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

    // if (questionId === 2 && answer === currentQuestion.answera) {
    //   setQuestionNum(6);
    // } else if (questionId === 2 && answer === currentQuestion.answerb) {
    //   setQuestionNum(5);
    // }

    if (questionId < HolidayPassQuestion.length - 1) {
      setQuestionNum(questionNum + 1);
    }
    setInputValue('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentQuestion?.id && inputValue.trim() !== '') {
      handleAnswerChange(currentQuestion.id, inputValue);
      if (questionNum < HolidayPassQuestion.length - 1) {
        setQuestionNum(questionNum + 1);
      }
      setInputValue('');
    } else if (currentQuestion.type !== 'done') {
      alert('내용을 입력해주세요~~');
    } else {
      alert('2025 홀리데이 때 만나요~');
      handlePage('home');
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
              background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
            }}
          />
        </ProgressBar>
        <div className="progressNum">
          {currentQuestion.type !== 'done' ? `${currentQuestion.id} / ${HolidayPassQuestion.length}` : '완료!'}
        </div>
      </ProgressBarBox>
      <QuestioBox>
        <Title isDone={currentQuestion.type === 'done'}>{currentQuestion.title} </Title>
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
        {currentQuestion.type === 'done' && (
          <TicketIssued>
            <div className="polaroid">
              <Ticket src="/holydaypass.png" alt="holydaypass" />
            </div>
            <Button onClick={handleSubmit} type="submit">
              {currentQuestion.nextBtn}
            </Button>
          </TicketIssued>
        )}
      </QuestioBox>
    </Container>
  );
};

export default HolidayPassView;
