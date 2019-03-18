import styled from 'styled-components';

export const RoundedBox = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
