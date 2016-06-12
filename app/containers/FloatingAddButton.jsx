import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { connect } from 'react-redux';
import { addCustomerDialogToggle } from '../actions';

const style = {
  position: 'fixed',
  bottom: '2em',
  right: '6em',
};

let FloatingAddButton = ({ dispatch }) => (
  <FloatingActionButton
    style={style}
    onClick={() => dispatch(addCustomerDialogToggle())}
  >
    <ContentAdd />
  </FloatingActionButton>
);

FloatingAddButton = connect()(FloatingAddButton);

export default FloatingAddButton;
