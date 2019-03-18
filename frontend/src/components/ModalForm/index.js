import React, { Fragment } from 'react';
import { bool, func, array, object } from 'prop-types';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { withRouter } from 'react-router-dom';

import { Button, Label } from 'components';
import { toggleModalPost } from 'store/modules/ui';
import { submitPost } from 'store/modules/posts';
import { updatePost } from 'store/modules/post';
import { Modal, ModalOverlay, Header, Body, CloseButton } from './styles';

const ModalForm = ({
  open,
  toggleModalPost,
  categories,
  submitPost,
  match: { params },
  initialValues = {},
  updatePost,
}) => {
  const isEditing = Object.keys(initialValues).length;

  return open ? (
    <Fragment>
      <Modal>
        <Header>
          <h3>{isEditing ? 'Edit your post' : 'Create a new post'}</h3>
          <CloseButton onClick={toggleModalPost}>
            <box-icon name="x" />
          </CloseButton>
        </Header>
        <Body>
          <Form
            onSubmit={isEditing ? values => updatePost(values) : values => submitPost(values, params.category)}
            initialValues={initialValues}
            render={({ handleSubmit, submitting, pristine, form }) => (
              <form
                onSubmit={event =>
                  handleSubmit(event).then(() => {
                    form.reset();
                    toggleModalPost();
                  })
                }
              >
                <Label>
                  <span>Title</span>
                  <Field name="title" component="input" type="text" placeholder="title" required />
                </Label>
                {isEditing ? null : (
                  <Label>
                    <span>Category</span>
                    <Field name="category" component="select" required>
                      <option />
                      {categories.map(category => (
                        <option key={`category-${category.name}`}>{category.name}</option>
                      ))}
                    </Field>
                  </Label>
                )}
                <Label>
                  <span>Body</span>
                  <Field name="body" component="textarea" required />
                </Label>
                {isEditing ? null : (
                  <Label>
                    <span>Author</span>
                    <Field name="author" component="input" type="text" placeholder="your name" required />
                  </Label>
                )}
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
  updatePost: func.isRequired,
  categories: array.isRequired,
  match: object.isRequired,
  initialValues: object,
};

const mapStateToProps = ({ ui, categories }) => ({
  open: ui.modalPost,
  categories: categories.categoriesList,
});

export default withRouter(
  connect(
    mapStateToProps,
    { toggleModalPost, submitPost, updatePost }
  )(ModalForm)
);
