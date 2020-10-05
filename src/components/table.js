import React,{useState} from 'react';
import MUIDataTable from "mui-datatables";  
import AddShellModal from "./AddShellModal";
import utils from '../utils'
import rest from '../rest'
import CustomRow from '../components/customRow'

var shells = {}

function SimpleTable(props) {
   shells = props.datos.map(dato => Object.values(dato))
   const [isInEditinMode,setIsInEditinMode] = useState(false)
   const [form,setForm] = useState({
      id:'',
      family:'',
      gender:'',
      species:'',
      quality:'',
      size:'',
      country:'',
      comment:'',
      price:'',
      habitat:'',
      rowNumber:''

   })

   
   const onChangeInEditingMode = (rowNumber) => {
     console.log('entro con el row'+rowNumber)
     if(form.rowNumber===''){
      setForm({...form,rowNumber})
  
     }
     else{
      console.log('entro al primer if con el row:'+rowNumber)

      rest.updateShell(form)
      setForm({...form,rowNumber:''})

     }
   }

   const onChangeForm = (column,input) => {

    setForm({ ...form, [column]: input.target.value })
   }



  const options = {
    filterType: 'dropdown',
    responsive: 'stacked',
    filter: true,
    // resizableColumns: true,
    draggableColumns : {enabled:true},
    sort :true,
    responsive:'vertical',
    // customRowRender:(data, dataIndex, rowIndex = 1) => {
    //   return <CustomRow data={shells}/>
    // },
    customToolbar: () => {
      return (
        <AddShellModal />
      );
    },
    columnOrder: [0,1,2,3,4,5,6,7,9,8,10],
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
    columns={utils.columnsTable(form.rowNumber,onChangeInEditingMode,onChangeForm)}
    options={options}
  />

);
}


export default (SimpleTable);
