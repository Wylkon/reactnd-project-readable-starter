import React from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';

const StyledTotal = styled.span`
  font-size: 1.4em;
  margin: 8px 0;
  color: ${({ value, theme }) => (value > 0 ? theme.colors.orange : theme.colors.blue)};
`;

export const Total = ({ value }) => {
  return <StyledTotal value={value}>{value}</StyledTotal>;
};

Total.propTypes = {
  value: number.isRequired,
};
