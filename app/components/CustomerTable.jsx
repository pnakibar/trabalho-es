import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const CustomerList = ({ customers }) => (
  <Table multiSelectable={true} >
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Email</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {
        customers.map((customer) => (
          <TableRow key={customer.get('id')} >
            <TableRowColumn>{customer.get('id')}</TableRowColumn>
            <TableRowColumn>{customer.get('name')}</TableRowColumn>
            <TableRowColumn>{customer.get('email')}</TableRowColumn>
          </TableRow>
        )).toJS()
      }
    </TableBody>
  </Table>
);


export default CustomerList;
