import React, { Fragment } from 'react';
import { Modal, ModalOverlay, Header, Body, CloseButton } from './styles';
import { Button } from 'components';
import { bool } from 'prop-types';

export const ModalForm = ({ open }) => {
  return open ? (
    <Fragment>
      <Modal>
        <Header>
          <h3>Create a new Post</h3>
          <CloseButton>
            <box-icon name="x" />
          </CloseButton>
        </Header>
        <Body>
          <form>
            <label>
              <span>Title</span>
              <input type="text" />
            </label>
            <label>
              <span>Category</span>
              <select>
                <option>react</option>
                <option>redux</option>
              </select>
            </label>
            <label>
              <span>Body</span>
              <textarea />
            </label>
            <Button>Submit</Button>
          </form>
        </Body>
      </Modal>
      <ModalOverlay />
    </Fragment>
  ) : null;
};

ModalForm.propTypes = {
  open: bool,
};
