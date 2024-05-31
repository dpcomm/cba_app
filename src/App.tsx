import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './styles/GlobalStyle';
import Login from '@pages/Login';
import Home from '@pages/Home';
import Register from '@pages/register';
import Navbar from '@components/Navbar';
import { Page } from './types';

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path={`/${Page.home}`} element={<Home />} />
          <Route path={`/${Page.register}`} element={<Register />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};
export default App;
