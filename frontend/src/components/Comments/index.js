import React, { Fragment } from 'react';
import { array, func, string } from 'prop-types';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import { formatDate } from 'utils/formatDate';
import { RoundedBox, Button, Vote, Label, ModalComment } from 'components';
import { resetList } from 'themes';
import { submitComment, removeComment, vote } from 'store/modules/post';
import { toggleModalComment } from 'store/modules/ui';

const CommentStyled = styled.div`
  padding-top: 32px;
  margin-top: 32px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderGray};

  form {
    display: flex;
    flex-direction: column;

    textarea {
      min-height: 100px;
    }

    button {
      align-self: flex-end;
    }
  }
`;

const CommentList = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
  padding-bottom: 32px;
  margin-bottom: 32px;

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

const Comments = ({ comments, submitComment, parentId, removeComment, vote, toggleModalComment }) => {
  return (
    <Fragment>
      <CommentStyled>
        {!!comments.length && (
          <CommentList>
            <ul>
              {comments.map(comment => (
                <RoundedBox key={comment.id} as="li">
                  <Vote voteScore={comment.voteScore} submit={vote} parentId={parentId} id={comment.id} />
                  <CommentDetails>
                    <p>{comment.body}</p>
                    {`u/${comment.author}`} - {formatDate(comment.timestamp)}
                    <WrapButton>
                      <Button aux onClick={() => toggleModalComment(comment)}>
                        <box-icon type="solid" name="edit" size="16px" /> Editar
                      </Button>
                      <Button aux onClick={() => removeComment(comment.id)}>
                        <box-icon type="solid" name="trash" size="16px" /> Remover
                      </Button>
                    </WrapButton>
                  </CommentDetails>
                </RoundedBox>
              ))}
            </ul>
          </CommentList>
        )}
        <h3>Submit a comment</h3>
        <Form
          onSubmit={values => submitComment(values, parentId)}
          initialValues={{}}
          render={({ handleSubmit, submitting, pristine, form }) => (
            <form
              onSubmit={event =>
                handleSubmit(event).then(() => {
                  form.reset();
                })
              }
            >
              <Label>
                <span>Author</span>
                <Field name="author" component="input" type="text" placeholder="your name" required />
              </Label>

              <Label>
                <span>Add a comment bellow:</span>
                <Field name="body" component="textarea" placeholder="Type your comment here" required />
              </Label>
              <Button type="submit" disabled={submitting || pristine}>
                Send
              </Button>
            </form>
          )}
        />
      </CommentStyled>
      <ModalComment />
    </Fragment>
  );
};

export default connect(
  null,
  { submitComment, removeComment, vote, toggleModalComment }
)(Comments);

Comments.propTypes = {
  comments: array.isRequired,
  submitComment: func.isRequired,
  toggleModalComment: func.isRequired,
  removeComment: func.isRequired,
  vote: func.isRequired,
  parentId: string.isRequired,
};
