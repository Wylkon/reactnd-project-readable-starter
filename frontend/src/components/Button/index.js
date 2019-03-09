import styled from 'styled-components';
import { resetButton } from 'themes';

export const Button = styled.button`
  ${resetButton};
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2em;
  padding: 4px 16px;
  transition: background 0.2s ${({ theme }) => theme.easing.ease}, color 0.2s ${({ theme }) => theme.easing.ease},
    box-shadow 0.4s ${({ theme }) => theme.easing.ease};

  &:hover {
    background-color: transparent;
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.orange};
  }
`;
