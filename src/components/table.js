import React from 'react';
// import PropTypes from 'prop-types';  //verrificacion de tipos
import MUIDataTable from "mui-datatables";
import AddIcon from "@material-ui/icons/Add";
import AddShellModal from "./AddShellModal";
import utils from '../utils'
import rest from '../rest'
const axios = require('axios');

var shells = {}

function SimpleTable(props) {
   shells = props.datos.map(dato => Object.values(dato))

  const options = {
    filterType: 'dropdown',
    responsive: 'stacked',
    filter: true,
    customToolbar: () => {
      return (
        <AddShellModal />
      );
    },

  onRowsDelete: (RowsDeleted) => {
    const ids = RowsDeleted.data.map(d => shells[d.dataIndex][9]);
    rest.deleteShell(ids)}
    // onRowsSelect: deleteRows

  }

// console.log(shells)
return (

  <MUIDataTable
    title={"NutsForShells"}
    data={shells}
    columns={utils.columnsTable}
    options={options}
  />
);
}

// SimpleTable.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default (SimpleTable);


