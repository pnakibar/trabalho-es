import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  position: 'fixed',
  bottom: '2em',
  right: '6em',
};

const FloatingAddButton = () => (
  <FloatingActionButton style={style}>
    <ContentAdd />
  </FloatingActionButton>
);

export default FloatingAddButton;
