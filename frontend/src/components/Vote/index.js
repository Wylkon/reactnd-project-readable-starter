import React from 'react';
import styled, { css } from 'styled-components';
import { number, func, string, object } from 'prop-types';
import { withRouter } from 'react-router-dom';

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

const Vote = ({ voteScore, vote, id, match: { params } }) => {
  return (
    <Counter>
      <CounterButton onClick={() => vote(id, 'upVote', params.category)}>
        <box-icon name="caret-up" />
      </CounterButton>
      <StyledTotal voteScore={voteScore}>{voteScore}</StyledTotal>
      <CounterButton onClick={() => vote(id, 'downVote', params.category)}>
        <box-icon name="caret-down" />
      </CounterButton>
    </Counter>
  );
};

Vote.propTypes = {
  category: string,
  id: string.isRequired,
  match: object.isRequired,
  vote: func.isRequired,
  voteScore: number.isRequired,
};

export default withRouter(Vote);
