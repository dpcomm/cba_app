import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './styles/GlobalStyle';
import Login from '@pages/Login';
import Home from '@pages/Home';
import Register from '@pages/register';
import Backoffice from '@pages/Backoffice';
// import Navbar from '@components/Navbar';

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/backoffice" element={<Backoffice />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};
export default App;
