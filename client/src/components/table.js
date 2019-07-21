import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MUIDataTable from "mui-datatables";
const axios = require('axios');


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

// const columns = ["Familia", "Genero", "Especie", "Calidad","Tamaño","País","Comentario","Precio","habitad"];
const columns = [
  {
   name: "Familia",
   options: {
    filter: true,
    sort: false
   }
  },
   
  {
   name: "Genero",
   options: {
    filter: true,
    sort: false
   }
  },

  {
   name: "Especie",
   options: {
    filter: true,
    sort: false
   }
  },

  {
   name: "Calidad",
   options: {
    filter: true,
    sort: false
   }
  },

  {
   name: "Tamaño",
   options: {
    filter: false,
    sort: false
   }
  },

  {
   name: "País",
   options: {
    filter: true,
    sort: false
   }
  },

  {
   name: "Comentario",
   options: {
    filter: false,
    sort: false
   }
  },

  {
   name: "Precio",
   options: {
    filter: true,
    sort: false
   }
  },

  {
   name: "Habitat",
   options: {
    filter: true,
    sort: false
   }
  },
  {
    name: "ID",
    options: {
        // display: "excluded",
        filter: false,
        sort: false,
        download: false,
    },
},

 ];


<<<<<<< HEAD
const options = {
  filterType: 'dropdawn',
  responsive: 'stacked',
  onRowsDelete: (RowsDeleted) => {

    console.log(RowsDeleted)
=======

 


class  SimpleTable extends Component {
  
  onRowsDelete= (RowsDeleted) => {
    let id_eliminado=this.props.datos[RowsDeleted.data[0].dataIndex].id
>>>>>>> f64d597005c5a51a046f2965a0fcd11d4e480643
    axios({
      method: 'get',
      url: 'localhost:5000/eliminado/'+id_eliminado,
      data: RowsDeleted
    });
  }
  options = {
    filterType: 'dropdawn',
    responsive: 'stacked',
    onRowsDelete:this.onRowsDelete
        
    }
  
  render(){
    let arr = this.props.datos.map(dato=>Object.values(dato))
    return ( 
      
    
      <MUIDataTable
        title={"NutsForShells"}
        data={arr}
        columns={columns}
        options={this.options}
      />
    );
     
  }  


  
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (SimpleTable);


