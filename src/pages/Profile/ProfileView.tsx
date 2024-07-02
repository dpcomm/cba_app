import React, { useState } from 'react';
import { GroupInputView,Container, EmptyBox, InputBox, InputView, LogoBold, LogoLight, LogoView, SvgBox,TextSub } from './ProfileView.styled';
import TextInputB from '@components/TextInputB';
import PhoneInput from '@components/PhoneInput';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';
import RadioButton from '@components/RadioButton';
import Dropdown from '@components/Dropdown';
import { IconButton } from '@components/IconButton';
import useConfirm from '@hooks/useConfirm';
import { updateUserInfo } from '@apis/index';
import usePageControll from '@hooks/usePageControll';
import { useRecoilState } from 'recoil';
import { userState } from '@modules/atoms';

const ProfileView = () => {
  const { handlePage } = usePageControll();
  const [userData, setUserData] = useRecoilState(userState);
  // const [userData, setUserData] = useState(user);
  const [password2,set_password2] = useState("");

  function mapGenderToNumber(gender) {
    return gender === "male" ? 0 : 1;
  }

  function formatDate(date) {
    const userbirth = new Date(date);
    const formbirth = userbirth.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    return formbirth.replace(/\s/g, '').replace(/\./g, '-').slice(0, -1);
  }

  const handleChange = (field, value) => {
    setUserData(prev => ({ ...prev, [field]: value}));
  };

  const handleUpdateProfile = async() => {
    if (userData.password !== password2) {
      alert("패스워드가 일치하지 않습니다.");
      return; }
    // console.log(userData)
    try {
      const response = await updateUserInfo(userData);
      alert("회원정보 수정 성공");
      handlePage('home');
    } catch (error) {
        console.error('Error updating user data:',error);
        alert("회원정보 수정 실패");
    }
  };
  const confirmUpdate = useConfirm("회원정보를 수정 하시겠습니까?", handleUpdateProfile);

	return (
    <Container>
      <LogoView>
				<LogoLight>Welcome to</LogoLight>
				<LogoBold>CBA</LogoBold>
			</LogoView>
      <InputView>
        <InputBox>
          <SvgBox><SvgIcon name={'user'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={'이름을 입력해주세요.'} getter={userData.name} setter={(getter) => handleChange('name',getter)} maxLength={4} />
        </InputBox>
        <InputBox>
          <SvgBox><SvgIcon name={'password'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={'비밀번호를 입력해주세요.'} getter={userData.password} setter={(getter) => handleChange('password',getter)} maxLength={24} type='password' />
        </InputBox>
        <TextSub>* 영문, 숫자포함 10자 이상</TextSub>
        <InputBox>
          <SvgBox><EmptyBox /></SvgBox>
          <TextInputB placeHolder={'비밀번호를 다시 입력해주세요.'} getter={password2} setter={set_password2} maxLength={24} type='password' />
        </InputBox>
        <InputBox>
          <SvgBox><SvgIcon name={'gender'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <RadioButton
            items={[
              { text: '남자', value: 0 },
              { text: '여자', value: 1 },
            ]}
            initialValue={mapGenderToNumber(userData.gender)}
            onChange={(getter) => handleChange('gender',getter)}
          />
        </InputBox>
        <InputBox>
          <SvgBox><SvgIcon name={'user'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <PhoneInput getter={userData.phone} setter={(getter) => handleChange('phone',getter)} />
        </InputBox>
        <InputBox>
          <SvgBox><SvgIcon name={'users'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <Dropdown options={["권수영M", "노시은M", "반일섭M", "대청2부", "대청3부","기타"]} placeholder='소그룹을 선택해주세요.' initialValue={userData.group} onChange={(getter) => handleChange('group',getter)}/>
        </InputBox>
        {userData.group === "기타" &&
            <GroupInputView>
							<TextInputB placeHolder={'지예배당 및 교단교회 입력'} getter={userData.etcGroup} setter={(getter) => handleChange('etcGroup',getter)} type={'text'} />
            </GroupInputView>
        }
        <TextSub>* 지예배당/교단교회 - [기타]를 선택해 작성해주세요.</TextSub>
        <InputBox>
          <SvgBox><SvgIcon name={'cake'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
          <TextInputB placeHolder={'생년월일을 입력해주세요.'} getter={formatDate(userData.birth)} setter={(getter) => handleChange('birth',getter)} type='date' />
        </InputBox>
      </InputView>
      <IconButton
        label={'수정 완료'}
        onClick={confirmUpdate}
        width='118px'
        height='48px'
        color={EColor.TEXT_200}
        backgroundColor={EColor.COLOR_PRIMARY}
        borderRadius='8px'
      />
    </Container>
  );
};

export default ProfileView;