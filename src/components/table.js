import React from 'react';
// import PropTypes from 'prop-types';  //verrificacion de tipos
import MUIDataTable from "mui-datatables";
import AddIcon from "@material-ui/icons/Add";
import CustomToolbar from "./CustomToolbar";
import utils from '../utils'
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
        <CustomToolbar />
      );
    },

  onRowsDelete: (RowsDeleted) => {
    const ids = RowsDeleted.data.map(d => shells[d.dataIndex][9]);
    axios({
      method: 'post',
      url: 'http://localhost:5000/eliminado',
      data: { "ids_eliminados": ids },
    });
  },
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


