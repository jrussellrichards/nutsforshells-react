import React, { useState } from "react";
import customColumns from "../utils/columnsTable";

const CustomCell = (props) => {
  // console.log("ROWS:" + props.rowIndex + "Target:" + props.rowTarget);

  if (props.rowIndex === props.rowTarget ) {
    // console.log("ROWS adentro:" + props.rowIndex+ "Target:" + props.rowTarget);
    // {props.onChangeForm('id',props.id)}
    return (
      <input
        defaultValue={props.value}
        onChange={(input) => props.onChangeForm(props.columnName, input)}
      />
    );
  }

  return <div>{props.value}</div>;
};
export default CustomCell;
