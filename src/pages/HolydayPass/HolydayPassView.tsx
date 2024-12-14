import { useEffect, useState } from 'react';
import {
  Container,
  ProgressBarBox,
  MainTitle,
  QuestioBox,
  Title,
  ButtonGroup,
  Button,
  Textarea,
  AnswerBox,
  Bible,
  Ticket,
  TicketIssued,
} from './HolydayPass.styled';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HolidayPassQuestion } from './HolydayPassQuestion';
import usePageControll from '@hooks/usePageControll';
import { requestApplication, requestApplicationByUserAndRetreatId, requestCreatePray } from '@apis/index';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoadingState, userState } from '@modules/atoms';
import SvgIcon from '@components/SvgIcon';

const HolidayPassView = () => {
  const { handlePage } = usePageControll();
  const [questionNum, setQuestionNum] = useState(6);
  const [inputValue, setInputValue] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);
  console.log(answers);

  const setIsLoading = useSetRecoilState(isLoadingState);
  const user = useRecoilValue(userState);

  useEffect(() => {
    requestApplicationByUserAndRetreatId(user.userId, 2).then(() => {
      alert('Holiday Pass가 이미 발급되었습니다.');
      handlePage('home');
    });
  }, []);

  if (!HolidayPassQuestion || HolidayPassQuestion.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = HolidayPassQuestion[questionNum];

  const handleAnswerChange = (questionId: number, answer: string) => {
    if (questionId === 1 && answer === '불참') {
      alert('다음에는 꼭 함께 해요!');
      handlePage('home');
      return;
    }

    if (questionId === 5 && answer === '리딩자 도전!') {
      setAnswers((prev) => {
        const updatedAnswers = [...prev];
        updatedAnswers[1] = '리딩자';
        return updatedAnswers;
      });
    }

    if (questionId === 5 && answer === '멤버 할게요!') {
      setAnswers((prev) => {
        const updatedAnswers = [...prev];
        updatedAnswers[1] = '멤버';
        return updatedAnswers;
      });
    }

    setAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[questionId - 1] = answer;
      return updatedAnswers;
    });

    if (questionNum < HolidayPassQuestion.length - 1) {
      setQuestionNum(questionNum + 1);
    }
    setInputValue('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      try {
        setIsLoading({ isLoading: true });
        await requestCreatePray(user.id, answers[5]);
        await requestApplication(user.userId, 2, [], '', [], '', answers[1] === '리딩자');
        setIsLoading({ isLoading: false });
        alert('Pass 등록이 완료되었습니다. 2025 홀리데이 때 만나요~');
        handlePage('home');
      } catch (err) {
        setIsLoading({ isLoading: false });
        console.log(err.response?.data?.message || 'Unexpected error');
        alert('Pass 등록 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <Container>
      <ProgressBarBox>
        <ProgressBar style={{ height: '10px', marginBottom: '20px', borderRadius: 0 }}>
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
        <Title isDone={currentQuestion.type === 'done'}>{currentQuestion.title}</Title>
        {currentQuestion.type === 'choice' && (
          <>
            {currentQuestion.bible && <Bible>{currentQuestion.bible}</Bible>}
            <ButtonGroup>
              <Button onClick={() => handleAnswerChange(currentQuestion.id, currentQuestion.answera || '')}>
                {currentQuestion.answera}
              </Button>
              <Button onClick={() => handleAnswerChange(currentQuestion.id, currentQuestion.answerb || '')}>
                {currentQuestion.answerb}
              </Button>
            </ButtonGroup>
          </>
        )}
        {currentQuestion.type === 'answer' && (
          <form onSubmit={handleSubmit}>
            <AnswerBox>
              <Textarea
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
            <Ticket>
              <SvgIcon name={'holydaypassTicket'} width={'100%'} height={'100%'} fill={'none'} stroke={'none'} />
              {/* <Ticket src="/holydaypass.png" alt="holydaypass" /> */}
            </Ticket>
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
