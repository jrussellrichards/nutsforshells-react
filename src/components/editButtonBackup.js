import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

const CustomCell = (props) => {
  console.log("ROWS:" + props.rowIndex + "Target:" + props.getRow());

  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedRow, setSelectedRow] = useState(-1);

  const onChangeButtonClick = (row) => {
    if (isEditMode === false) {
      setIsEditMode(true);
      props.onChangeInEditingMode(row);
    }
    if (isEditMode === true) {
      setIsEditMode(false);
      props.onChangeInEditingMode(row);
    }
    

  };


  if (props.rowIndex === props.getRow()) {
    return (
      <Button
        variant="outlined"
        onClick={() => props.onChangeInEditingMode("sendForm")}
      >
        Aceptar
      </Button>
    );
  }

  if (props.getRow() !== "") {
    return (
      <Button
        variant="outlined"
        disabled
        onClick={() => props.onChangeInEditingMode(props.rowIndex)}
      >
        Editar
      </Button>
    );
  }

  return (
    <Button
      variant="outlined"
      onClick={() => onChangeButtonClick(props.rowIndex)}
    >
      Editar
    </Button>
  );
};
export default CustomCell;
