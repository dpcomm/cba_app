import { DefaultNavInfo, DefaultSurvey, DefaultUser  } from '@type/defaults';
import { NavInfo } from '@type/index';
import { User, surveyForm } from '@type/states';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const naviState = atom<NavInfo>({
  key: 'naviState',
  default: DefaultNavInfo,
  effects_UNSTABLE: [persistAtom],
});

export const userState = atom<User>({
  key: 'userState',
  default: DefaultUser,
  effects_UNSTABLE: [persistAtom],
});

export const surveyState = atom<surveyForm>({
  key: 'surveyState',
  default: DefaultSurvey,
  effects_UNSTABLE: [persistAtom],
});