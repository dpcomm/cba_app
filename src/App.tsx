import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './styles/GlobalStyle';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Navbar from '@components/Navbar';
import { Page } from './types';
import RetreatInfo from '@pages/RetreatInfo';
import Home from '@pages/Home';
import Backoffice from '@pages/Backoffice';
import Error404 from '@pages/Error404';
// import Navbar from '@components/Navbar';
import RetreatLocation from '@pages/RetreatLocation';
import RetreatPayment from '@pages/RetreatPayment';
import RetreatApplicaion from '@pages/RetreatApplication';

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/backoffice" element={<Backoffice />} />
          <Route path={`/${Page.home}`} element={<Home />} />
          <Route path={`/${Page.retreatInfo}`} element={<RetreatInfo />} />
          <Route path={`/${Page.register}`} element={<Register />} />
          <Route path={`/${Page.retreatLocation}`} element={<RetreatLocation />} />
          <Route path={`/${Page.retreatPayment}`} element={<RetreatPayment />} />
          <Route path={`/${Page.retreatApplication}`} element={<RetreatApplicaion />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
