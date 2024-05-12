import { Menus } from '@type/index';

export const WeekMenuStringFormator = (weekMenu: Menus) => {
  const formattedData = Object.values(weekMenu).map((menu) => menu.menu.join(', '))[0];
  return formattedData;
};
