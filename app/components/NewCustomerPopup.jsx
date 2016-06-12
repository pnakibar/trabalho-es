import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */

const AddCustomerPopup = ({ generalUI, addCustomer, addCustomerDialogToggle, dispatch }) => {
  const actions = [
    <FlatButton
      label="Cancel"
      primary
      onTouchTap={() => dispatch(addCustomerDialogToggle())}
      onClick={() => dispatch(addCustomerDialogToggle())}
    />,
    <FlatButton
      label="Submit"
      primary
      onTouchTap={() => dispatch(addCustomerDialogToggle())}
      onClick={() => dispatch(addCustomerDialogToggle())}
    />,
  ];
  return (
    <Dialog
      title="Dialog With Actions"
      actions={actions}
      modal={false}
      open={generalUI.get('addCustomerDialog')}
      onRequestClose={() => dispatch(addCustomerDialogToggle())}
    >
      The actions in this window were passed in as an array of React objects.
    </Dialog>
  );
};

export default AddCustomerPopup;
