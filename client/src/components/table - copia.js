import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

var callBackendAPI = async () => {
    const response = await fetch('/express');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

var misDatos=callBackendAPI()[0].familia
console.loeg(misDatos)

// let id = 0;
// function createData(familia, genero, especie, calidad, tamaño, pais, comentario, precio) {
//   id += 1;
//   return { id, familia, genero, especie, calidad, tamaño, pais, comentario, precio };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 12, 12, 12, 12),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 12, 12, 12, 12),
//   createData('Eclair', 262, 16.0, 24, 6.0, 12, 12, 12, 12),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 12, 12, 12, 12),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 12, 12, 12, 12),
// ];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Familia</TableCell>
            <TableCell numeric>Genero</TableCell>
            <TableCell numeric>Especie </TableCell>
            <TableCell numeric>Calidad </TableCell>
            <TableCell numeric>Tamaño </TableCell>
            <TableCell numeric>Pais </TableCell>
            <TableCell numeric>Comentario </TableCell>
            <TableCell numeric>Precio </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.familia}
                </TableCell>
                <TableCell numeric>{row.genero}</TableCell>
                <TableCell numeric>{row.especie}</TableCell>
                <TableCell numeric>{row.calidad}</TableCell>
                <TableCell numeric>{row.tamaño}</TableCell>
                <TableCell numeric>{row.pais}</TableCell>
                <TableCell numeric>{row.comentario}</TableCell>
                <TableCell numeric>{row.precio}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);


