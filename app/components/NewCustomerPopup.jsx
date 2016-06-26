import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class AddCustomerPopup extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'asd',
      email: 'asd',
    };
  }
  render() {
    const { generalUI, addCustomer, addCustomerDialogToggle, dispatch } = this.props;
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
        onTouchTap={() => {
          console.log(this.state);
          dispatch(addCustomerDialogToggle());
          return dispatch(addCustomer({
            name: this.state.name.toString(),
            email: this.state.email.toString(),
          }));
        }}
        onClick={() => {
          /*
          dispatch(addCustomerDialogToggle());
          return dispatch(addCustomer({
            name: this.state.name,
            email: this.state.email,
          }));
          */
        }}
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
        <div>
          <TextField hintText="Nome" onChange={(e) => this.setState({ name: e.target.value })} />
          <TextField hintText="Email" onChange={(e) => this.setState({ email: e.target.value })} />
        </div>
      </Dialog>
    );
  }
}

export default AddCustomerPopup;
