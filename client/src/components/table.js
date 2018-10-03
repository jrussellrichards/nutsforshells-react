import React from 'react';
import PropTypes from 'prop-types';
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

 ];

const options = {
  filterType: 'dropdawn',
  responsive: 'stacked'
};

function SimpleTable(props) {
  var arr = props.datos.map(dato=>Object.values(dato))
  console.log(arr)
  return (
 
    
    <MUIDataTable
      title={"NutsForShells"}
      data={arr}
      columns={columns}
      options={options}
    />
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (SimpleTable);


