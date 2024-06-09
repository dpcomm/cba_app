import { NavInfo, Paging } from '.';
import { User } from './states';

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