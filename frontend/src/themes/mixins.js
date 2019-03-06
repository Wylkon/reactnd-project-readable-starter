import { breakpoints } from './default';
import { css } from 'styled-components';

export const device = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
