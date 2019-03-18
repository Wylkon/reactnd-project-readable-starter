import React from 'react';
import styled, { css } from 'styled-components';
import { number, func, object } from 'prop-types';

import { resetButton } from 'themes';

const StyledTotal = styled.span`
  font-size: 1.4em;
  line-height: 24px;
  margin-bottom: 4px;
  color: ${({ voteScore, theme }) => (voteScore > 0 ? theme.colors.orange : theme.colors.blue)};
  font-weight: ${({ theme }) => theme.font.bold};
`;

const Counter = styled.div`
  align-items: center;
  box-shadow: 5px 0px 10px 0 rgba(0, 0, 0, 0.04);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 0 12px;
  width: 90px;
`;

const CounterButton = styled.button`
  ${resetButton};
  fill: ${({ theme }) => theme.colors.darkGray};

  ${({ active, theme }) =>
    active &&
    css`
      fill: ${theme.colors.orange};
      opacity: 0.2;
    `}

  &:hover, &:focus {
    fill: ${({ theme }) => theme.colors.orange};
  }
`;

const Vote = props => {
  const { voteScore, submit } = props;

  return (
    <Counter>
      <CounterButton onClick={() => submit({ ...props, vote: 'upVote' })}>
        <box-icon name="caret-up" />
      </CounterButton>
      <StyledTotal voteScore={voteScore}>{voteScore}</StyledTotal>
      <CounterButton onClick={() => submit({ ...props, vote: 'downVote' })}>
        <box-icon name="caret-down" />
      </CounterButton>
    </Counter>
  );
};

Vote.propTypes = {
  props: object,
  submit: func.isRequired,
  voteScore: number.isRequired,
};

export default Vote;
