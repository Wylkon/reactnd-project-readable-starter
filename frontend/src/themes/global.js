import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

// create a global styles
export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  
  @-ms-viewport {
    width: device-width;
  }

  html {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-kerning: auto;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    min-height: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bodyBackground};
    color: ${({ theme }) => theme.colors.textColor};
    font-family: ${({ theme }) => theme.font.primary};
    font-size: ${({ theme }) => theme.font.defaultSize};

    &.vg-no-scroll {
      overflow-y: hidden;
    }
  }
`;
