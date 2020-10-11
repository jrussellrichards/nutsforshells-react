import React,{useState} from 'react';
import MUIDataTable from "mui-datatables";  
import AddShellModal from "./AddShellModal";
import utils from '../utils'
import rest from '../rest'

var shells = {}

function SimpleTable(props) {
  //  shells = props.datos.map(dato => Object.values(dato))
   shells = props.datos
   const [form,setForm] = useState({
      id:'',
      family:'',
      specie:'',
      class:'',
      quality:'',
      size:'',
      country:'',
      comment:'',
      price:'',
      rowNumber:''

   })

   
   const onChangeInEditingMode = (rowNumber) => {
     console.log(form)
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
        <div style ={{left:'50%'}}>
        <AddShellModal  />
        </div>
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
    const ids = RowsDeleted.data.map(d => shells[d.dataIndex][0]);
    rest.deleteShell(ids)},

  }

  
return (

  <MUIDataTable
    data={shells}
    columns={utils.columnsTable(form.rowNumber,onChangeInEditingMode,shells)}
    options={options}
  />

);
}


export default (SimpleTable);
