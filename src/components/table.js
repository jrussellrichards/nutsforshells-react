import React from 'react';
import MUIDataTable from "mui-datatables";  
import AddShellModal from "./AddShellModal";
import utils from '../utils'
import rest from '../rest'

var shells = {}

function SimpleTable(props) {
   shells = props.datos.map(dato => Object.values(dato))

  const options = {
    filterType: 'dropdown',
    responsive: 'stacked',
    filter: true,
    draggableColumns : {enabled:true},
    sort :true,
    customToolbar: () => {
      return (
        <AddShellModal />
      );
    },
    columnOrder: [0,1,2,3,4,5,6,7,9,8],
    downloadOptions: {filename:'shells.csv',
    separator: ',',
  filterOptions:{
    useDisplayedRowsOnly:true,
    useDisplayedColumnsOnly:true
  }},

  onRowsDelete: (RowsDeleted) => {
    const ids = RowsDeleted.data.map(d => shells[d.dataIndex][0]);
    rest.deleteShell(ids)}

  }

return (

  <MUIDataTable
    title={"NutsForShells"}
    data={shells}
    columns={utils.columnsTable}
    options={options}
  />
);
}

export default (SimpleTable);
