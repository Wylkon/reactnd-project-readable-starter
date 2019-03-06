import styled from 'styled-components';

export const RoundedBox = styled.div`
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray};
  margin: 0 24px;
`;
