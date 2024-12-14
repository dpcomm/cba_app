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
} from './HolidayPass.styled';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HolidayPassQuestion } from './HolidayPassQuestion';
import usePageControll from '@hooks/usePageControll';
import { requestApplication, requestApplicationByUserAndRetreatId, requestCreatePray } from '@apis/index';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoadingState, userState } from '@modules/atoms';

const HolidayPassView = () => {
  const { handlePage } = usePageControll();
  const [questionNum, setQuestionNum] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const setIsLoading = useSetRecoilState(isLoadingState);
  const user = useRecoilValue(userState);

  const answerArr = Object.values(answers);

  useEffect(() => {
    requestApplicationByUserAndRetreatId(user.userId, 2).then(() => {
      alert('작성된 수련회 신청서가 있습니다. 홈 화면으로 이동합니다.');
      handlePage('home');
    });
  }, []);

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

    // 리딩자 처리
    if (answerArr[1] === '리딩자') {
      setQuestionNum(3); // 3번 질문으로 이동
      setAnswers((prev) => ({
        ...prev,
        [4]: '', // 4번 질문에 빈 문자열 저장
      }));
      setQuestionNum(5); // 5번 질문으로 이동
    } else if (questionId < HolidayPassQuestion.length - 1) {
      setQuestionNum(questionNum + 1);
    } else if (answerArr[1] === '멤버') {
      setQuestionNum(4);
    } else if (questionId < HolidayPassQuestion.length - 1) {
      // 기본적인 흐름으로 다음 질문으로 이동
      setQuestionNum(questionNum + 1);
    }

    setInputValue(''); // 입력값 초기화
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

        await requestCreatePray(user.id, answerArr[3]); // 해당 부분 수정 필요 -> 리딩자 멤버 선택에 따라 질문이 건너뛰어짐

        await requestApplication(user.userId, 2, [], '', [], '', answerArr[1] === '리딩자');

        setIsLoading({ isLoading: false });
        alert('Pass 등록이 완료되었습니다. 2025 홀리데이 때 만나요~');
        handlePage('home');
      } catch (err: any) {
        setIsLoading({ isLoading: false });
        console.log(err.response?.data?.message || 'Unexpected error');
        alert('Pass 등록 중 오류가 발생했습니다.');
      }
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
          <>
            <Bible>{currentQuestion.bible}</Bible>
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
