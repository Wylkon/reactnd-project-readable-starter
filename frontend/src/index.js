import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { defaultTheme, GlobalStyle } from './themes';
import { ThemeProvider } from 'styled-components';

import { Aside, Container, Wrapper, TopBarUser } from 'components';

import { Routes } from './utils/routes';
import store from './store/storeSetup';

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <React.Fragment>
            <GlobalStyle />
            <Container>
              <Aside />
              <Wrapper>
                <TopBarUser />
                <Routes />
              </Wrapper>
            </Container>
          </React.Fragment>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
