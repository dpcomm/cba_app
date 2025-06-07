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
import { requestApplication, requestApplicationByUserAndRetreatId, requestCreatePray, requestUserGroup } from '@apis/index';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoadingState, userState } from '@modules/atoms';
import SvgIcon from '@components/SvgIcon';

import { InputBox, SvgBox,GroupInputView } from './HolydayPass.styled';
import Dropdown  from '@components/Dropdown';
import { EColor } from '@styles/color';
import TextInputB from '@components/TextInputB';

const HolidayPassView = () => {
  const { handlePage } = usePageControll();
  const [questionNum, setQuestionNum] = useState(6);
  const [inputValue, setInputValue] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);
  console.log(answers);

  const setIsLoading = useSetRecoilState(isLoadingState);
  const user = useRecoilValue(userState);


  const [CarNumber, setCarNumber] = useState("");


  useEffect(() => {
    requestApplicationByUserAndRetreatId(user.userId, 3).then((res) => {
      const confirmEditApplication = window.confirm('기존에 작성된 설문지가 있습니다. 수정하시겠습니까?');
      if (confirmEditApplication) {}
      else {handlePage('home');}
    })
    .catch((err) => {
      const data = err.response?.data;
      if (data?.message === 'Application not exist') {} 
      else{ alert('서버 오류가 발생했습니다.');
        console.error(err);
      }
    });
  }, []);

  if (!HolidayPassQuestion || HolidayPassQuestion.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = HolidayPassQuestion[questionNum];

  const handleAnswerChange = (questionId: number, answer: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionId - 1] = answer;
  
    // 특수 케이스 처리
    switch (questionId) {
      case 1:
        if (answer === '불참') {
          alert('다음에는 꼭 함께 해요!');
          handlePage('home');
          return;
        }
        break;

      default:
        break;
    }
  
    setAnswers(updatedAnswers);
  
    if (questionNum < HolidayPassQuestion.length - 1) {
      setQuestionNum(questionNum + 1);
    }
  
    setInputValue('');
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // list 타입일 경우 group 값 체크
    if (currentQuestion.type === 'list') {

      const selected = answers[currentQuestion.id - 1];
      if (!selected || selected.trim() === '') {
        alert('옵션을 선택해주세요.');
        return;
      }

      if (selected === '자차') {
        if (!CarNumber || CarNumber.trim() === '') {
          alert('차 번호를 입력해주세요.');
          return;
        }
      }
      handleAnswerChange(currentQuestion.id, selected);
      return;
    }
  
    // answer 타입일 경우 inputValue 값 체크
    if (currentQuestion.type === 'answer') {
      if (inputValue.trim() === '') {
        alert('내용을 입력해주세요~~');
        return;
      }
      handleAnswerChange(currentQuestion.id, inputValue);
      return;
    }
  
    // done 타입일 경우 제출 처리
    if (currentQuestion.type === 'done') {
      try {
        setIsLoading({ isLoading: true });
        console.log(answers)
        await requestCreatePray(user.id, answers[4]);
        await requestApplication(user.userId,3 ,answers[3],CarNumber,[],[]);
        await requestUserGroup(user.userId,answers[2])
        setIsLoading({ isLoading: false });
        alert('Pass 등록이 완료되었습니다. 2025 여름수련회 "하나님 나라"에서 만나요~');
        handlePage('home');
      } catch (err) {
        setIsLoading({ isLoading: false });
        console.log(err);
        // console.log(err.response?.data?.message);
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
        {currentQuestion.type === 'list' && (
          <form onSubmit={handleSubmit}>
            <InputBox>
              <SvgBox><SvgIcon name={'users'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
              <Dropdown 
              key={currentQuestion.id}
              options={currentQuestion.options || []} 
              placeholder={"선택해주세요."} 
              initialValue={answers[currentQuestion.id - 1] || ''} 
              onChange={(selected) => {
                const updated = [...answers];
                updated[currentQuestion.id - 1] = selected;
                setAnswers(updated);
              }}/>
              {answers[currentQuestion.id - 1] === "자차" &&
              <GroupInputView>
                <TextInputB placeHolder={'차량 번호 입력'} getter={CarNumber} setter={setCarNumber} type={'text'}/>
              </GroupInputView>}
              <Button onClick={handleSubmit} type="submit">
              {currentQuestion.nextBtn}
              </Button>
            </InputBox>
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
