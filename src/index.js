import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Windmill } from '@windmill/react-ui';
import './assets/css/custom.css';
import './assets/css/tailwind.css';
import './assets/css/tailwind.output.css';
import '@pathofdev/react-tag-input/build/index.css';
import App from './App';
import myTheme from './assets/theme/myTheme';
import { AdminProvider } from './context/AdminContext';
import { SidebarProvider } from './context/SidebarContext';
import ThemeSuspense from './components/theme/ThemeSuspense';

import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

ReactDOM.render(
  <AdminProvider>
    <SidebarProvider>
      <Suspense fallback={<ThemeSuspense />}>
        <Windmill usePreferences theme={myTheme}>
          <Web3ReactProvider getLibrary={getLibrary}>
            <App />
          </Web3ReactProvider>
        </Windmill>
      </Suspense>
    </SidebarProvider>
  </AdminProvider>,

  document.getElementById('root')
);

