import React, { useState } from "react";
import Button from '@material-ui/core/Button';

const CustomCell = (props) => {
  // console.log("ROWS:" + props.rowIndex + "Target:" + props.rowTarget);

  if (props.rowIndex === props.rowTarget ) {
    return (
      <Button variant="outlined" onClick={() => props.onChangeInEditingMode('sendForm')}>
      Aceptar
      </Button>
    );
  }


  if(props.rowTarget!==''){
    return(
      <Button variant="outlined" disabled onClick={() => props.onChangeInEditingMode(props.rowIndex)}>
  Editar
  </Button>)
      
      

  }

  return(
        <Button variant="outlined" onClick={() => props.onChangeInEditingMode(props.rowIndex)}>
    Editar
    </Button>)
  
};
export default CustomCell;
