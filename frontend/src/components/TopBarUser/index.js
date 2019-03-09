import React from 'react';
import styled from 'styled-components';
import { resetButton, device } from 'themes';
import { connect } from 'react-redux';
import { toggleMenu } from 'store/modules/ui';
import { func } from 'prop-types';

const TopBarStyled = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
  display: flex;
  height: 68px;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 16px 24px;

  ${device.desktop`
    justify-content: flex-end;
  `}
`;

const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4em;
  line-height: 24px;

  box-icon {
    margin-right: 8px;
    fill: ${({ theme }) => theme.colors.orange};
  }
`;

const Hamburguer = styled.button`
  ${resetButton};
  ${device.desktop`
    display: none;
  `}
`;

const TopBarUser = ({ toggleMenu }) => {
  return (
    <TopBarStyled>
      <Hamburguer onClick={toggleMenu}>
        <box-icon name="list" size="md" />
      </Hamburguer>
      <User>
        <box-icon type="solid" name="user-circle" size="md" /> Talita Kaminski
      </User>
    </TopBarStyled>
  );
};

TopBarUser.propTypes = {
  toggleMenu: func.isRequired,
};

export default connect(
  null,
  { toggleMenu }
)(TopBarUser);
