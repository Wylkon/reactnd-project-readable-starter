import styled from 'styled-components';

export const Label = styled.label`
  width: 100%;

  + label,
  + button {
    margin-top: 16px;
  }

  input,
  textarea,
  select {
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.borderGray};
    font-size: 1.4em;
    padding: 8px 8px;
    resize: none;
    width: 100%;
  }

  span {
    display: block;
    font-size: 1.4em;
    margin-bottom: 8px;
  }
`;
