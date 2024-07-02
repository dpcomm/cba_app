import { NavInfo, Paging } from '.';
import { User, surveyForm } from './states';

export const DefaultPaging = <Paging>{
  currentPage: 0,
  pageSize: 5,
  hasNext: true,
};

export const DefaultNavInfo = <NavInfo>{
  page: '',
  history: [],
};


export const DefaultUser = <User>{
  userId: "",
  rank: "M",
  password: "",
  name: "",
  group: "",
  phone: "",
  birth: "",
  gender: "",
};

export const DefaultSurvey = <surveyForm>{
  meal: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
  transfer: "",
  bus: 0,
  carId: "",
  idn:""
}