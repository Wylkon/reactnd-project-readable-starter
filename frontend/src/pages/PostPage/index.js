import React, { Component } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { object, func, bool, array } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { formatDate } from 'utils/formatDate';
import { Post, Comments, Section, Button, ModalForm } from 'components';
import { getPost, getComments } from 'store/modules/post';
import { removePost } from 'store/modules/posts';
import { toggleModalPost } from 'store/modules/ui';

const PostStyled = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);

  header {
    display: flex;

    h1 {
      font-weight: ${({ theme }) => theme.font.semibold};
      margin: 0 0 8px;
    }

    small {
      display: block;
      margin-bottom: 16px;
      font-size: 1.1em;
      color: ${({ theme }) => theme.colors.primary};

      strong {
        color: ${({ theme }) => theme.colors.dark};
      }
    }
  }
`;

const PostContent = styled.div`
  width: 100%;
  padding: 16px;

  hr {
    margin: 32px 0;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
  }
`;

const LinkStyled = styled(Link)`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  font-size: 1.4em;
  color: ${({ theme }) => theme.colors.primary};
  fill: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

const WrapButton = styled.div`
  margin-top: 16px;
`;

class PostPage extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      getPost,
      getComments,
    } = this.props;

    getPost(id);
    getComments(id);
  }

  handleClick = e => {
    const { history } = this.props;
    e.preventDefault();
    history.goBack();
  };

  removeHandler = () => {
    const { data, removePost, history } = this.props;

    removePost(data.id).then(() => {
      history.push('/');
    });
  };

  render() {
    const { loaded, data, comments, toggleModalPost } = this.props;

    return loaded && Object.keys(data).length ? (
      <Section>
        <LinkStyled to="#" onClick={this.handleClick}>
          <box-icon name="chevron-left" /> Back to posts
        </LinkStyled>
        <PostStyled>
          <Post {...data} type="inside">
            <PostContent>
              <header>
                <div>
                  <h1>{data.title}</h1>
                  <small>
                    <strong>Posted by:</strong> {`u/${data.author}`} - <strong>Category:</strong> {`r/${data.category}`}{' '}
                    - <strong>Date:</strong> {formatDate(data.timestamp)} - <strong>Comments:</strong>{' '}
                    {data.commentCount}
                  </small>
                </div>
              </header>
              <p>{data.body}</p>
              <WrapButton>
                <Button aux onClick={toggleModalPost}>
                  <box-icon type="solid" name="edit" size="16px" /> Editar
                </Button>
                <Button aux onClick={this.removeHandler}>
                  <box-icon type="solid" name="trash" size="16px" /> Remover
                </Button>
              </WrapButton>
              <Comments comments={comments} parentId={data.id} />
            </PostContent>
          </Post>
        </PostStyled>
        <ModalForm initialValues={{ ...data }} />
      </Section>
    ) : loaded && !Object.keys(data).length ? (
      <Redirect to="/404/" />
    ) : (
      <Section>
        <p>
          <box-icon name="loader-circle" animation="spin" /> Loading...
        </p>
      </Section>
    );
  }
}

const mapStateToProps = ({ post }) => {
  return {
    loaded: post.loaded,
    data: post.data,
    comments: post.comments,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getPost, getComments, removePost, toggleModalPost }
  )(PostPage)
);

PostPage.propTypes = {
  match: object.isRequired,
  getPost: func.isRequired,
  getComments: func.isRequired,
  toggleModalPost: func.isRequired,
  removePost: func.isRequired,
  loaded: bool.isRequired,
  data: object.isRequired,
  comments: array.isRequired,
  history: object.isRequired,
};
