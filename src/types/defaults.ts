import { NavInfo, Paging } from '.';

export const DefaultPaging = <Paging>{
  currentPage: 0,
  pageSize: 5,
  hasNext: true,
};

export const DefaultNavInfo = <NavInfo>{
  page: '',
  history: [],
};
