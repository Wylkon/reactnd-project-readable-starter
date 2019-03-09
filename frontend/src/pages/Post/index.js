import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { object, func } from 'prop-types';
import { Section } from 'components';
import { connect } from 'react-redux';
import { getPost } from 'store/modules/post';

class Post extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      getPost,
    } = this.props;

    getPost(id);
  }

  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    return <Section>{id}</Section>;
  }
}

export default withRouter(
  connect(
    null,
    { getPost }
  )(Post)
);

Post.propTypes = {
  match: object.isRequired,
  getPost: func.isRequired,
};
