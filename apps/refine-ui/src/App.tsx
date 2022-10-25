import React from 'react';

import { Refine } from '@pankod/refine-core';
import { AuthPage } from '@pankod/refine-antd';
import {
  notificationProvider,
  RefineSnackbarProvider,
  CssBaseline,
  GlobalStyles,
  ReadyPage,
  ErrorComponent,
} from '@pankod/refine-mui';

import routerProvider from '@pankod/refine-react-location';
import { ColorModeContextProvider } from 'contexts';
import { PostList, PostCreate, PostEdit } from './pages/posts';
import { Title, Sider, Layout, Header } from 'components/layout';
import { authProvider } from './authProvider';
import NestsxCrud from 'utils';

function App() {
  const API_URL = 'http://localhost:4444';
  const dataProvider = NestsxCrud(API_URL);

  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: 'auto' } }} />
      <RefineSnackbarProvider>
        <Refine
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          routerProvider={routerProvider}
          dataProvider={dataProvider}
          authProvider={authProvider}
          LoginPage={AuthPage}
          resources={[
            {
              name: 'auth',
              options: { label: 'Usuários' },
              list: PostList,
              create: PostCreate,
              edit: PostEdit,
              canDelete: true,
            },
          ]}
          Title={Title}
          Sider={Sider}
          Layout={Layout}
          Header={Header}
        />
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
