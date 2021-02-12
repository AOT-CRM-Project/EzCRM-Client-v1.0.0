import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIconRound from '@material-ui/icons/AddCircleOutlineRounded';
import AddIconBox from '@material-ui/icons/AddBoxOutlined';

import styles from './ContactTable.module.scss';

import contacts from './sampleData';

const tableHeads = [
  { key: 'name', value: 'Name' },
  { key: 'title', value: 'Title' },
  { key: 'company', value: 'Company' },
  { key: 'email', value: 'Email' },
  { key: 'phone', value: 'Phone' },
  { key: 'postcode', value: 'Postcode' },
  { key: 'country', value: 'Country' },
  { key: 'type', value: 'Type' },
  { key: 'priority', value: 'Priority' },
  { key: 'notes', value: 'Notes' },
];

const StyledTableBody = withStyles({
  root: {
    background: 'rgba(0, 0, 0, 0)',
  },
})(TableBody);

export default function ContactTable() {
  const tableKeys = tableHeads.map((tableHead) => tableHead.key);

  return (
    <>
      <h1 className={styles.title}>Contact</h1>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell />
              {tableHeads.map((tableHead) => (
                <TableCell key={tableHead.key}>
                  {tableHead.value}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <StyledTableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell component="th" scope="row">
                  <button type="button" className={styles.add_button_box}>
                    <AddIconBox color="disabled" fontSize="small" />
                  </button>
                </TableCell>
                {Object
                  .values(contact)
                  .filter((_, index) => Object.keys(contact)[index] !== 'id')
                  .map((value, index) => (
                    <TableCell key={tableKeys[index]}>
                      {value}
                    </TableCell>
                  ))}
              </TableRow>
            ))}
            <TableRow>
              <TableCell align="center">
                <button type="button" className={styles.add_button_round}>
                  <AddIconRound htmlColor="#23036a" />
                </button>
              </TableCell>
            </TableRow>
          </StyledTableBody>
        </Table>
      </TableContainer>
    </>
  );
}
