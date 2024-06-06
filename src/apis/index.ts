import request from './request';

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
) => {
  return request.post('/api/user/register', {
    userId,
    password,
    name,
    group,
    phone,
    birth,
    gender
  });
};