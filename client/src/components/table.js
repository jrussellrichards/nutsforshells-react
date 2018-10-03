import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MUIDataTable from "mui-datatables";


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

const columns = ["Familia", "Genero", "Especie", "Calidad","Tamaño","País","Comentario","Precio","habitad"];



function SimpleTable(props) {
  var arr = props.datos.map(dato=>Object.values(dato))
  console.log(arr)
  return (
 
    
    <MUIDataTable
      title={"Employee List"}
      data={arr}
      columns={columns}
    />
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);


