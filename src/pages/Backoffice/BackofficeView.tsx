import React, { useState } from 'react';
import AllUser from './views/AllUser';
import RegistrationStatus from './views/RegistrationStatus';
import MealList from './views/mealList';
import MediaLink from './views/MediaLink';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';

const BackofficeView = () => {
  const [page, set_page] = useState(0);
  return (
    <>
      {page === 0 && <AllUser />}
      {page === 1 && <RegistrationStatus />}
      {page === 2 && <MealList />}
      {page === 3 && <MediaLink />}
      <SvgIcon name={'next'} width={24} height={24} fill={EColor.COLOR_PRIMARY} />
      <SvgIcon name={'cba_logo'} width={200} height={200} fill={'none'} />
      <SvgIcon name={'document'} width={200} height={200} fill={'none'} />
      <SvgIcon name={'search'} width={200} height={200} fill={"#757D8A"} />
      <SvgIcon name={'graph'} width={200} height={200} fill={'none'} />
      <SvgIcon name={'meal'} width={200} height={200} fill={'none'} />
      <SvgIcon name={'youtube'} width={200} height={200} fill={'none'} />
    </>
  );
};

export default BackofficeView;