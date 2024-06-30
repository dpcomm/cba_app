import { UpdateForm } from '@type/states';
import request from './request';
import { user } from 'assets/svgs';

export const requestLogin = (userId: string, password: string, autoLogin: boolean) => {
  return request.post('/api/user/login', {
    userId,
    password,
    autoLogin,
  });
};

export const requestRegister =
(
  userId: string,
  password: string,
  name: string,
  group: string,
  phone: string,
  birth: string,
  gender: string,
  etcGroup?: string
) => {
  return request.post('/api/user/register', {
    userId,
    password,
    name,
    group,
    phone,
    birth,
    gender,
    etcGroup
  });
};

export const requestSurvey = 
(
  userId: string,
  transfer:string,
  idn:string,
  meal:number[][], 
  bus?:number,
  carId?:string
) => {
  return request.post('/api/user/survey', {
    userId,
    transfer,
    bus,
    carId,
    idn,
    meal
  });
};

export const getExistSurvey = 
(
  userId: string
) => {
  return request.post('/api/user/getExistSurvey', {userId});
};


export const requestGetUserInfo = (
  userId: string,
  password: string
) => {
  const token = localStorage.getItem('access_token');
  if (!token) {
    // 토큰이 없을 경우의 처리 로직 추가 
    console.log("No token found. Redirecting to login.");
    return Promise.reject("Authentication required.");
  }
  return request.post('/api/user/checkuser',{userId,password});
};

export const updateUserInfo =
(
  userData: UpdateForm
) => {
  return request.post('/api/user/updateUser', userData);
};
