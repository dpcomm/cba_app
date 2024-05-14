import request from './request';

export const requestDayFood = () => {
  return request.get('/menus/day');
};
