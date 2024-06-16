// import React, { useEffect, useState } from 'react';
// import { GroupInputView,Container, EmptyBox, InputBox, InputView, LogoBold, LogoLight, LogoView, SvgBox,TextSub } from './EditProfileView.styled';
// import TextInputB from '@components/TextInputB';
// import PhoneInput from '@components/PhoneInput';
// import SvgIcon from '@components/SvgIcon';
// import { EColor } from '@styles/color';
// import RadioButton from '@components/RadioButton';
// import Dropdown from '@components/Dropdown';
// import { IconButton } from '@components/IconButton';
// import useConfirm from '@hooks/useConfirm';
// import { requestGetUserInfo,updateUserInfo } from '@apis/index';
// import usePageControll from '@hooks/usePageControll';
// import parseDateString from '@utils/ParseDateString';
// import { gender, password } from 'assets/svgs';
// import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { userState } from '@modules/atoms';

// const CheckUserView = () => {
//   const { handlePage } = usePageControll();
//   const setUser = useSetRecoilState(userState);
//   const [userData, setUserData] = useState({
//     name: '',
//     password: '',
//     password2: '',
//     gender: '',
//     phone: '',
//     group: '',
//     birth: '',
//     etcGroup: ''
//   });
//   useEffect(() => {
//     const getUserData = () => {requestGetUserInfo(userId,password)
//     .then(async (res) => {
//       console.log(res.data)
//       setUserData({
//         name: res.data.name,
//         password: res.data.password,
//         password2: res.data.password,
//         gender: res.data.gender,
//         phone: res.data.phone,
//         group: res.data.group,
//         birth: parseDateString(res.data.birth),
//         etcGroup: res.data.etcGroup || ''
//       });
//       alert("회원정보 불러오기 성공");
//     }).catch((err) => {
//       console.error('Failed to get user data:',err)
//     });
//   }; getUserData();
//   },[]); 

// 	return (
//     <Container>
//       <LogoView>
// 				<LogoLight>Welcome to</LogoLight>
// 				<LogoBold>CBA</LogoBold>
// 			</LogoView>
//       <InputView>
//         <InputBox>
//           <SvgBox><SvgIcon name={'user'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
//           <TextInputB placeHolder={'이름을 입력해주세요.'} getter={userData.name} setter={(getter) => handleChange('name',getter)} maxLength={4} />
//         </InputBox>
//         <InputBox>
//           <SvgBox><SvgIcon name={'password'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
//           <TextInputB placeHolder={'비밀번호를 입력해주세요.'} getter={userData.password} setter={(getter) => handleChange('password',getter)} maxLength={24} type='password' />
//         </InputBox>
//         <TextSub>* 영문, 숫자포함 10자 이상</TextSub>
//         <InputBox>
//           <SvgBox><EmptyBox /></SvgBox>
//           <TextInputB placeHolder={'비밀번호를 다시 입력해주세요.'} getter={userData.password2} setter={(getter) => handleChange('password2',getter)} maxLength={24} type='password' />
//         </InputBox>
//         <InputBox>
//           <SvgBox><SvgIcon name={'gender'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
//           <RadioButton
//             items={[
//               { text: '남자', value: 0 },
//               { text: '여자', value: 1 },
//             ]}
//             initialValue={mapGenderToNumber(userData.gender)}
//             onChange={(getter) => handleChange('gender',getter)}
//           />
//         </InputBox>
//         <InputBox>
//           <SvgBox><SvgIcon name={'user'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
//           <PhoneInput getter={userData.phone} setter={(getter) => handleChange('phone',getter)} />
//         </InputBox>
//         <InputBox>
//           <SvgBox><SvgIcon name={'users'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
//           <Dropdown options={["권수영M", "노시은M", "반일섭M", "대청2부", "대청3부","기타"]} placeholder='소그룹을 선택해주세요.' initialValue={userData.group} onChange={(getter) => handleChange('group',getter)}/>
//         </InputBox>
//         {userData.group === "기타" &&
//             <GroupInputView>
// 							<TextInputB placeHolder={'지예배당 및 교단교회 입력'} getter={userData.etcGroup} setter={(getter) => handleChange('etcGroup',getter)} type={'text'} />
//             </GroupInputView>
//         }
//         <TextSub>* 지예배당/교단교회 - [기타]를 선택해 작성해주세요.</TextSub>
//         <InputBox>
//           <SvgBox><SvgIcon name={'cake'} width={30} height={30} fill={EColor.TEXT_200} stroke={EColor.COLOR_PRIMARY} /></SvgBox>
//           <TextInputB placeHolder={'생년월일을 입력해주세요.'} getter={formatDate(userData.birth)} setter={(getter) => handleChange('birth',getter)} type='date' />
//         </InputBox>
//       </InputView>
//       <IconButton
//         label={'수정 완료'}
//         onClick={confirmUpdate}
//         width='118px'
//         height='48px'
//         color={EColor.TEXT_200}
//         backgroundColor={EColor.COLOR_PRIMARY}
//         borderRadius='8px'
//       />
//     </Container>
//   );
// };

// export default CheckUserView;