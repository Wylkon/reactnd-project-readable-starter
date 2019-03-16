import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoStyled = styled(Link)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 45px;
  padding: 0 24px;
  text-decoration: none;
  height: 68px;
  display: flex;
  align-content: center;

  h1 {
    display: flex;
    align-items: center;
    margin: 0;
    line-height: 24px;
    font-size: 2.4em;
  }

  span {
    margin-left: 8px;
    font-weight: ${({ theme }) => theme.font.regular};
  }

  box-icon {
    fill: ${({ theme }) => theme.colors.orange};
    margin-left: -4px;
  }
`;

export const Logo = () => {
  return (
    <LogoStyled to="home">
      <h1>
        <box-icon type="solid" name="bookmark-star" />
        <span>Read-it</span>
      </h1>
    </LogoStyled>
  );
};
