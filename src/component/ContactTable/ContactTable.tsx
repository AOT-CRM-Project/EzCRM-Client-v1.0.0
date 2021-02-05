import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import styles from './ContactTable.module.scss';

import contacts from './sampleData';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 1440,
  },
});

const tableHeads = [
  { key: "name", value: "Name" },
  { key: "title", value: "Title" },
  { key: "company", value: "Company" },
  { key: "email", value: "Email" },
  { key: "phone", value: "Phone" },
  { key: "postcode", value: "Postcode" },
  { key: "country", value: "Country" },
  { key: "type", value: "Type" },
  { key: "priority", value: "Priority" },
  { key: "notes", value: "Notes" },
];


export default function ContactTable() {
  const classes = useStyles();

  const tableKeys = tableHeads.map(tableHead => tableHead.key);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />
            {tableHeads.map(tableHead => (
              <TableCell key={tableHead.key}>
                {tableHead.value}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell component="th" scope="row">
                <div className={styles.add_icon_wrapper}>
                  +
                </div>
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
        </TableBody>
      </Table>
    </TableContainer>
  );
}