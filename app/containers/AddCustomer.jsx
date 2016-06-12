import React from 'react';
import { connect } from 'react-redux';
import { addCustomer, addCustomerDialogToggle} from '../actions';
import NewCustomerPopup from '../components/NewCustomerPopup';

const mapStateToProps = (state) => {
  return {
    generalUI: state.get('generalUI'),
    addCustomer,
    addCustomerDialogToggle,
  };
};

const AddCustomer = connect(
  mapStateToProps
)(NewCustomerPopup);

export default AddCustomer;
