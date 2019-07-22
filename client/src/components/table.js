import React from 'react';
// import PropTypes from 'prop-types';  //verrificacion de tipos
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

 
function SimpleTable(props) {
  var shells = props.datos.map(dato=>Object.values(dato))


  const options = {
    filterType: 'dropdawn',
    responsive: 'stacked',
    onRowsDelete: (RowsDeleted) => {
      
      const ids = RowsDeleted.data.map(d => d.dataIndex); 
      const idsToDeleted=ids.map(d=>shells[d][9])
      axios({
        method: 'post',
        url: 'http://localhost:5000/eliminado',
        data: RowsDeleted
      });
    }        
        
    }

  // console.log(shells)
  return ( 
    
    <MUIDataTable
      title={"NutsForShells"}
      data={shells}
      columns={columns}
      options={options}
    />
  );
}

// SimpleTable.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default (SimpleTable);


