import React, { useEffect } from "react";
import customColumns from "../utils/columnsTable";

const CustomCell = (props) => {
  // console.log("ROWS:" + props.rowIndex + "Target:" + props.rowTarget);
 
  useEffect(
    () =>{
      console.log('entra a useEffect')
      if (props.rowIndex === props.rowTarget && props.columnName.toLowerCase() === 'id' ) {
      props.onChangeForm(props.columnName.toLowerCase(), props.value)
      console.log('entra a if useEffect'+ props.value)
      console.log("ROWS adentro:" + props.rowIndex+ "Target:" + props.rowTarget+props.value);
    
    }

    },[props.columnName,props.rowTarget]
  )

  if(props.columnName.toLowerCase() === 'id'){

  return <div>{props.value}</div>;

  }
  
  if (props.rowIndex === props.rowTarget ) {
    console.log("ROWS adentro:" + props.rowIndex+ "Target:" + props.rowTarget+props.value);
    return (
      <input
      onChange={(input) => props.onChangeForm(props.columnName.toLowerCase(), input.target.value)}
      defaultValue={props.value}
      />
    );
  }

  return <div>{props.value}</div>;
};
export default CustomCell;
