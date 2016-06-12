import { connect } from 'react-redux';
import CustomerTable from '../components/CustomerTable';

const mapStateToProps = (state) => {
  return {
    customers: state.get('customers'),
  };
};

const Customers = connect(
  mapStateToProps
)(CustomerTable);

export default Customers;
