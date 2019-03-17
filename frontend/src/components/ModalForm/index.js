import React, { Fragment } from 'react';
import { Button } from 'components';
import { bool, func, array, object } from 'prop-types';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { withRouter } from 'react-router-dom';

import { toggleModalPost } from 'store/modules/ui';
import { submitPost } from 'store/modules/posts';
import { Modal, ModalOverlay, Header, Body, CloseButton } from './styles';

const ModalForm = ({ open, toggleModalPost, categories, submitPost, match: { params } }) => {
  return open ? (
    <Fragment>
      <Modal>
        <Header>
          <h3>Create a new Post</h3>
          <CloseButton onClick={toggleModalPost}>
            <box-icon name="x" />
          </CloseButton>
        </Header>
        <Body>
          <Form
            onSubmit={values => submitPost(values, params.category)}
            initialValues={{}}
            render={({ handleSubmit, submitting, pristine, form }) => (
              <form
                onSubmit={event =>
                  handleSubmit(event).then(() => {
                    form.reset();
                    toggleModalPost();
                  })
                }
              >
                <label>
                  <span>Title</span>
                  <Field name="title" component="input" type="text" placeholder="title" required />
                </label>
                <label>
                  <span>Category</span>
                  <Field name="category" component="select" required>
                    <option />
                    {categories.map(category => (
                      <option key={`category-${category.name}`}>{category.name}</option>
                    ))}
                  </Field>
                </label>
                <label>
                  <span>Body</span>
                  <Field name="body" component="textarea" required />
                </label>
                <label>
                  <span>Author</span>
                  <Field name="author" component="input" type="text" placeholder="your name" required />
                </label>
                <Button type="submit" disabled={submitting || pristine}>
                  Submit
                </Button>
              </form>
            )}
          />
        </Body>
      </Modal>
      <ModalOverlay open={open} onClick={toggleModalPost} />
    </Fragment>
  ) : null;
};

ModalForm.propTypes = {
  open: bool.isRequired,
  toggleModalPost: func.isRequired,
  submitPost: func.isRequired,
  categories: array.isRequired,
  match: object.isRequired,
};

const mapStateToProps = ({ ui, categories }) => ({
  open: ui.modalPost,
  categories: categories.categoriesList,
});

export default withRouter(
  connect(
    mapStateToProps,
    { toggleModalPost, submitPost }
  )(ModalForm)
);
