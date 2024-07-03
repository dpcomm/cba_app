import { NavInfo, Paging } from '../types';
import { IsLoading, User, surveyForm } from '../types/states';

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
  id: null,
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
};

export const DefaultIsLoading = <IsLoading>{
  isLoading: false,
};