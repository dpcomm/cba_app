import { UserKakaoInfo } from '@type/index';
import request from './request';

export const requestDayFood = () => {
  return request.get('/menus/day');
};

export const requestWeekFood = () => {
  return request.get('/menus/week');
};

export const requestDayTargetFood = (dateTime: string) => {
  return request.get(`/menus/target?date=${dateTime.replace(/-/g, '')}`);
};

export const requestUploadMenu = (datetime: string, student: string, employee: string, additional: string) => {
  return request.post('/back/menus', {
    datetime,
    student,
    employee,
    additional,
  });
};

export const requestExcelWeekFood = (dateTime: string) => {
  return request.get(`/back/menus/excel?date=${dateTime.replace(/-/g, '')}`, {
    responseType: 'blob',
  });
};

export const requestConfirmLogin = (kakaoCode: string | null) => {
  return request.post('/users/login', {
    code: kakaoCode,
  });
};

export const requestRegisterUser = (kakaoInfo: UserKakaoInfo | null, nickname: string) => {
  return request.post('/users', {
    ...kakaoInfo,
    nickname,
  });
};

export const requestTokenVerify = (accessToken: string) => {
  return request.post('/token/verify', {
    token: accessToken,
  });
};

export const requestMenusByLike = (pageNo: number, pageSize: number) => {
  return request.get(`/likes/menus/users?pageNo=${pageNo}&pageSize=${pageSize}`);
};

export const requestToggleLike = (menuId: string) => {
  return request.post('/likes/menus', {
    menuId: menuId,
  });
};

export const requestCheckMenuLiked = (menuId: string) => {
  return request.get(`/likes/menus?menuId=${menuId}`);
};

export const requestMenuHistory = (dateTime: string, menuType: string) => {
  return request.get(`/back/menus/history?date=${dateTime}&menuType=${menuType}`);
};

export const requestDeleteMenu = (menuId: string) => {
  return request.delete(`/back/menus?menuId=${menuId}`);
};

export const requestCommentByUser = (pageNo: number, pageSize: number) => {
  return request.get(`/comments/menus/users?pageNo=${pageNo}&pageSize=${pageSize}`);
};

export const requestDeleteComment = (commentId: string) => {
  return request.delete(`/comments/menus?commentId=${commentId}`);
};

export const reqeustMenuByMenuId = (menuId: string) => {
  return request.get(`/menus/${menuId}`);
};

export const requestCommentsByMenuId = (pageNo: number, pageSize: number, menuId: string) => {
  return request.get(`/comments/menus?menuId=${menuId}&pageNo=${pageNo}&pageSize=${pageSize}`);
};

export const requestAddComment = (menuId: string, comment: string) => {
  return request.post(`/comments/menus`, {
    menuId: menuId,
    comment: comment,
  });
};

export const requestGetUser = (pageNo: number, pageSize: number) => {
  return request.get(`/users?pageNo=${pageNo}&pageSize=${pageSize}`);
};

export const requestModifyUserRole = (userId: string, role: string) => {
  return request.post('/back/users/role', {
    userId: userId,
    role: role,
  });
};

export const requestCommentReport = (commentId: string, reportType: number, reportMsg: string) => {
  return request.post(`/comments/report`, {
    commentId,
    reportType,
    reportMsg,
  });
};
