import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/global-styles';

const req = require.context('../src/components', true, /\.stories\.js$/);

const withThemeProvider = storyFn => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyles />
      {storyFn()}
    </div>
  </ThemeProvider>
);

function loadStories() {
  addDecorator(withThemeProvider);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
