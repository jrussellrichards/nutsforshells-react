import React,{useState} from 'react';
import MUIDataTable from "mui-datatables";  
import AddShellModal from "./AddShellModal";
import utils from '../utils'
import rest from '../rest'

var shells = {}

function SimpleTable(props) {
  //  shells = props.datos.map(dato => Object.values(dato))
   shells = props.datos
   const [selectedRow,setSelectedRow] = useState('')

   
   const onChangeSelectedRow = (rowNumber) => {
    setSelectedRow(rowNumber)
   }

   


  const options = {
    filterType: 'dropdown',
    responsive: 'stacked',
    filter: true,
    title:'nutsForShells',
    // resizableColumns: true,
    draggableColumns : {enabled:true},
    sort :true,
    responsive:'vertical',
    // customRowRender:(data, dataIndex, rowIndex ) => {
    //   return <CustomRow rowIndex = {rowIndex} data={shells}/>
    // },
    customToolbar: () => {
      return (
        <AddShellModal data = {props.datos} onLoadData = {props.onLoadData} />
      );
    },
    // columnOrder: [0,1,2,3,4,5,6,7,8,9],
    downloadOptions: {filename:'shells.csv',
    separator: ';',
  filterOptions:{
    useDisplayedRowsOnly:true,
    useDisplayedColumnsOnly:true
  }},

  onRowsDelete: (RowsDeleted) => {
    const ids = RowsDeleted.data.map(d => shells[d.dataIndex].id);
    rest.deleteShell(ids)},

  }

  
return (

  <MUIDataTable
    data={shells}
    columns={utils.columnsTable(selectedRow,onChangeSelectedRow,shells,props.onLoadData)}
    options={options}
  />

);
}


export default (SimpleTable);
