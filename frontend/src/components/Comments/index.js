import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';

import { formatDate } from 'utils/formatDate';
import { RoundedBox, Button, Vote } from 'components';
import { resetList } from 'themes';

const CommentStyled = styled.div`
  padding-top: 32px;
  margin-top: 32px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderGray};
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  textarea {
    margin: 4px 0 16px;
    min-height: 100px;
    resize: none;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.borderGray};
  }

  button {
    align-self: flex-end;
  }
`;

const CommentList = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.borderGray};
  padding-top: 32px;
  margin-top: 32px;

  ul {
    ${resetList}
  }

  li + li {
    margin-top: 16px;
  }
`;

const WrapButton = styled.div`
  margin-top: 16px;
`;

const CommentDetails = styled.div`
  padding: 16px;
`;

export const Comments = ({ comments }) => {
  return (
    <CommentStyled>
      <h3>Comments</h3>
      <FormStyled>
        <label>
          <span>Add a comment bellow:</span>
          <textarea placeholder="Type your comment here" />
        </label>
        <Button>Send</Button>
      </FormStyled>
      {!!comments.length && (
        <CommentList>
          <h3>Comment List</h3>
          <ul>
            {comments.map(comment => (
              <RoundedBox key={comment.id} as="li">
                <Vote voteScore={0} />
                <CommentDetails>
                  <p>{comment.body}</p>
                  {`u/${comment.author}`} - {formatDate(comment.timestamp)}
                  <WrapButton>
                    <Button aux>
                      <box-icon type="solid" name="edit" size="16px" /> Editar
                    </Button>
                    <Button aux>
                      <box-icon type="solid" name="trash" size="16px" /> Remover
                    </Button>
                  </WrapButton>
                </CommentDetails>
              </RoundedBox>
            ))}
          </ul>
        </CommentList>
      )}
    </CommentStyled>
  );
};

Comments.propTypes = {
  comments: array.isRequired,
};
