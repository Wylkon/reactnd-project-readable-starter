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

export const resetButton = () => css`
  appearance: none;
  background: 0;
  border: 0;
  cursor: pointer;
  font-size: 1.6em;
  line-height: 24px;
  margin: 0;
  padding: 0;
`;

export const resetList = () => css`
  list-style: none;
  margin: 0;
  padding: 0;
`;
