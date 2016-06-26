import React, { PropTypes } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { retrieveCustomers } from './../actions';


class CustomerList extends React.Component {
  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(retrieveCustomers());
  }
  renderRow(customers) {
    if (customers.size > 0) {
      return customers.map((customer) => (
        <TableRow key={customer.get('id')} >
          <TableRowColumn>{customer.get('id')}</TableRowColumn>
          <TableRowColumn>{customer.get('name')}</TableRowColumn>
          <TableRowColumn>{customer.get('email')}</TableRowColumn>
        </TableRow>
      )).toJS();
    }
    return '';
  }
  render() {
    const { customers, dispatch } = this.props;
    return (
      <Table multiSelectable >
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Email</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.renderRow(customers)}
        </TableBody>
      </Table>
  );
  }
}


export default CustomerList;
