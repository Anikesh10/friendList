import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import 'reset-css';
import './index.css';

import Routes from './router/routes';
import GlobalStyles from './theme/global-styles';
import theme from './theme';
import configureStore from './store';

const store = configureStore();

const App = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
