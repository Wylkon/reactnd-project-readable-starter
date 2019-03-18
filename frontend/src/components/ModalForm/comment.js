import React, { Fragment } from 'react';
import { bool, func, array, object } from 'prop-types';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { withRouter } from 'react-router-dom';

import { Button, Label } from 'components';
import { toggleModalComment } from 'store/modules/ui';
import { updateComment } from 'store/modules/post';
import { Modal, ModalOverlay, Header, Body, CloseButton } from './styles';

const ModalComment = ({ open, toggleModalComment, initialValues = {}, updateComment }) => {
  return open ? (
    <Fragment>
      <Modal>
        <Header>
          <h3>Edit your comment</h3>
          <CloseButton onClick={toggleModalComment}>
            <box-icon name="x" />
          </CloseButton>
        </Header>
        <Body>
          <Form
            onSubmit={values => updateComment(values)}
            initialValues={initialValues}
            render={({ handleSubmit, submitting, pristine, form }) => (
              <form
                onSubmit={event =>
                  handleSubmit(event).then(() => {
                    form.reset();
                    toggleModalComment();
                  })
                }
              >
                <Label>
                  <span>Body</span>
                  <Field name="body" component="textarea" required />
                </Label>
                <Button type="submit" disabled={submitting || pristine}>
                  Submit
                </Button>
              </form>
            )}
          />
        </Body>
      </Modal>
      <ModalOverlay open={open} onClick={toggleModalComment} />
    </Fragment>
  ) : null;
};

ModalComment.propTypes = {
  open: bool.isRequired,
  toggleModalComment: func.isRequired,
  updateComment: func.isRequired,
  categories: array.isRequired,
  match: object.isRequired,
  initialValues: object,
};

const mapStateToProps = ({ ui, categories }) => ({
  open: ui.modalComment,
  initialValues: ui.currentComent,
  categories: categories.categoriesList,
});

export default withRouter(
  connect(
    mapStateToProps,
    { toggleModalComment, updateComment }
  )(ModalComment)
);
