import React from 'react';
// import PropTypes from 'prop-types';  //verrificacion de tipos
import MUIDataTable from "mui-datatables";
import AddIcon from "@material-ui/icons/Add";
import CustomToolbar from "./CustomToolbar";
import {eliminar} from "../services/nutsforshells";

var data = {}
var shells = {}
// const deleteRows = (RowsDeleted) => {
//   const ids = RowsDeleted.data.map(d => data[d.dataIndex].id);
  // const idsToDeleted = ids.map(d => data[d][9]);   //This is possibly this, ids.map(d => data[d][9]) 
  // console.log(idsToDeleted)  //Now you will get data
  // console.log(ids)  //Now you will get data
  // console.log(data)  //Now you will get data


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
   shells = props.datos.map(dato => Object.values(dato))



  const options = {
    filterType: 'dropdawn',
    responsive: 'stacked',
    customToolbar: () => {
      return (
        <CustomToolbar />
      );
    },

  onRowsDelete: (RowsDeleted) => {
    const ids = RowsDeleted.data.map(d => shells[d.dataIndex][9]);
    eliminar(ids)

  },
    // onRowsSelect: deleteRows

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


