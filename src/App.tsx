import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './styles/GlobalStyle';
import Login from '@pages/Login';
import Register from '@pages/register';
import Navbar from '@components/Navbar';
import { Page } from './types';
import RetreatInfo from '@pages/RetreatInfo';
import Home from '@pages/Home';
import RetreatLocation from '@pages/RetreatLocation';
import RetreatPayment from '@pages/RetreatPayment';

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path={`/${Page.home}`} element={<Home />} />
          <Route path={`/${Page.retreatInfo}`} element={<RetreatInfo />} />
          <Route path={`/${Page.register}`} element={<Register />} />
          <Route path={`/${Page.retreatLocation}`} element={<RetreatLocation />} />
          <Route path={`/${Page.retreatPayment}`} element={<RetreatPayment />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
