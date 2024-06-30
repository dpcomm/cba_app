import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
import Maintenance from '@pages/Maintenance';
import Profile from '@pages/Profile';
import RetreatAppInfo from '@pages/RetreatAppInfo';
import NotLogin from '@pages/NotLogin';

const isLogin = localStorage.getItem('access_token');

const PrivateRoute = () => {
  return isLogin ? <NotLogin /> : <Navigate to="/" />;
};

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path={`/${Page.register}`} element={<Register />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route element={<PrivateRoute />}>
            <Route path={`/${Page.home}`} element={<Home />} />
            <Route path={`/${Page.retreatInfo}`} element={<RetreatInfo />} />
            <Route path={`/${Page.retreatLocation}`} element={<RetreatLocation />} />
            <Route path={`/${Page.retreatPayment}`} element={<RetreatPayment />} />
            <Route path={`/${Page.retreatApplication}`} element={<RetreatApplicaion />} />
            <Route path={`/${Page.backoffice}`} element={<Backoffice />} />
            <Route path={`/${Page.editProfile}`} element={<Profile />} />
            <Route path={`/${Page.retreatAppInfo}`} element={<RetreatAppInfo />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
