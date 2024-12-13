import request from './request';

export const requestLogin = (userId: string, password: string, autoLogin: boolean) => {
  return request.post('/api/user/login', {
    userId,
    password,
    autoLogin,
  });
};

export const requestLogout = (id: number | null) => {
  return request.post('/api/user/logout', {
    id
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


export const updateUserInfo = (
  userId: string,
  name: string,
  // password: string,
  gender: string,
  phone: string,
  group: string,
  birth: string
) => {
  return request.post('/api/user/update', {
    userId,
    name,
    // password,
    gender,
    phone,
    group,
    birth,
  });
};


export const requestRefresh = (accessToken: string | null, refreshToken: string | null) => {
  return request.post('/api/user/refresh', {
    accessToken,
    refreshToken
  });
};

export const requestAuthCheck = (accessToken: string | null, refreshToken: string | null) => {
  return request.post('/api/user', {
    accessToken,
    refreshToken
  });
};

export const requestApplicationByUserAndRetreatId = (userId: string | null, retreatId: number) => {
  return request.get(`/api/application/${userId}/${retreatId}`);
};

export const requestApplication = (
  userId: string | null,
  retreatId: number,
  meal?: number[][],
  transfer?: string,
  bus?: number[],
  carId?: string,
  isLeader: boolean = false,
) => {
  return request.post('/api/application', {
    userId,
    retreatId,
    meal,
    transfer,
    bus,
    carId,
    isLeader
  });
};

export const requestYoutube = () => {
  return request.get('/api/youtube');
};

export const requestPray = () => {
  return request.get('/api/pray');
};

export const requestCreatePray = (userId: number | null, content: string) => {
  return request.post('/api/pray', {
    userId: userId,
    content: content
  });
};

export const requestDeletePray = (id: number) => {
  return request.delete(`/api/pray/${id}`);
};