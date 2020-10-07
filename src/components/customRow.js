import React, { useState } from "react";
import customColumns from "../utils/columnsTable";
import { TableCell,TableRow,Typography } from '@material-ui/core';
function CustomRow(props) {
  const { family, price, id } = props;
  console.log(props.data[props.rowIndex][0])
  let style = {};
      if (false) {
        style.backgroundColor = "green";
      }
  return (
    <TableRow style={style}>
    <TableCell />
    <TableCell>
      <Typography>{props.data[[props.rowIndex]][1]}</Typography>
    </TableCell>
    <TableCell>
      <Typography>{props.data[[props.rowIndex]][1]}</Typography>
    </TableCell>
    <TableCell>
      <Typography>{props.data[[props.rowIndex]][1]}</Typography>
    </TableCell>
    <TableCell>
      <Typography>{props.data[[props.rowIndex]][1]}</Typography>
    </TableCell>
  </TableRow>
  );
}

export default CustomRow;
