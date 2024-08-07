import {createRoot} from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from '@styles/GlobalStyle';

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  <RecoilRoot>
    <GlobalStyle />
    <App />
  </RecoilRoot>
);

serviceWorkerRegistration.register();
