import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { defaultTheme, GlobalStyle } from 'themes';
import { ThemeProvider } from 'styled-components';

import { Aside, Container, Wrapper, TopBarUser } from 'components';

import { Routes } from 'utils/routes';
import store from 'store/storeSetup';
import { getCategories } from 'enhancers';

const ContainerWithCategories = getCategories()(Container);

export const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <ThemeProvider theme={defaultTheme}>
        <React.Fragment>
          <GlobalStyle />
          <BrowserRouter>
            <ContainerWithCategories>
              <Aside />
              <Wrapper>
                <TopBarUser />
                <Routes />
              </Wrapper>
            </ContainerWithCategories>
          </BrowserRouter>
        </React.Fragment>
      </ThemeProvider>
    </React.Fragment>
  </Provider>
);
