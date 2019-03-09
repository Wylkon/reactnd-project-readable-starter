import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from 'react-testing-library';

import { defaultTheme } from 'lib/themes';

export function renderWithProviders(node, options) {
  const rendered = render(<ThemeProvider theme={defaultTheme}>{node}</ThemeProvider>, options);
  return {
    ...rendered,
    rerender: (ui, options) => renderWithProviders(ui, { container: rendered.container, ...options }),
  };
}
