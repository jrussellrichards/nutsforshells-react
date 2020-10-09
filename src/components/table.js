import React,{useState} from 'react';
import MUIDataTable from "mui-datatables";  
import AddShellModal from "./AddShellModal";
import utils from '../utils'
import rest from '../rest'
import CustomRow from '../components/customRow'

var shells = {}

function SimpleTable(props) {
   shells = props.datos.map(dato => Object.values(dato))
   const [form,setForm] = useState({
      id:'',
      family:'',
      species:'',
      quality:'',
      size:'',
      country:'',
      comment:'',
      price:'',
      rowNumber:''

   })

   
   const onChangeInEditingMode = (rowNumber) => {
     if(form.rowNumber===''){
      setForm({...form,rowNumber})
  
     }
     else{

      rest.updateShell(form)
      setForm({...form,rowNumber:''})

     }
   }

   const onChangeForm = (column,value) => {

    setForm({ ...form, [column]: value })
   }



  const options = {
    filterType: 'dropdown',
    responsive: 'stacked',
    filter: true,
    // resizableColumns: true,
    draggableColumns : {enabled:true},
    sort :true,
    responsive:'vertical',
    // customRowRender:(data, dataIndex, rowIndex ) => {
    //   return <CustomRow rowIndex = {rowIndex} data={shells}/>
    // },
    customToolbar: () => {
      return (
        <AddShellModal />
      );
    },
    columnOrder: [0,1,2,3,4,5,6,7,8,9],
    downloadOptions: {filename:'shells.csv',
    separator: ',',
  filterOptions:{
    useDisplayedRowsOnly:true,
    useDisplayedColumnsOnly:true
  }},

  onRowsDelete: (RowsDeleted) => {
    const ids = RowsDeleted.data.map(d => shells[d.dataIndex][0]);
    rest.deleteShell(ids)},

  }

  
return (

  <MUIDataTable
    title={"NutsForShells"}
    data={shells}
    columns={utils.columnsTable(form.rowNumber,onChangeInEditingMode,onChangeForm,shells)}
    options={options}
  />

);
}


export default (SimpleTable);
