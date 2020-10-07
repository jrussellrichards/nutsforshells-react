import React, { useState } from "react";

const CustomCell = (props) => {
  // console.log("ROWS:" + props.rowIndex + "Target:" + props.rowTarget);

  if (props.rowIndex === props.rowTarget ) {
    return (
      <button onClick={() => props.onChangeInEditingMode('sendForm')}>
      Aceptar
      </button>
    );
  }


  if(props.rowTarget!==''){
    return(
      <button disabled onClick={() => props.onChangeInEditingMode(props.rowIndex)}>
  Editar
  </button>)
      
      

  }

  return(
        <button onClick={() => props.onChangeInEditingMode(props.rowIndex)}>
    Editar
    </button>)
  
};
export default CustomCell;
