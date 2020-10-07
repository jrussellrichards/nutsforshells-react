import React from "react";
import CustomCell from "../components/customCell";
import EditButton from "../components/editButton";
const customColumns = (rowNumber, onChangeInEditingMode, onChangeForm) => {
  return [
    {
      name: "ID",
      options: {
        // display: "excluded",
        filter: false,
        sort: true,
        download: true,
        customBodyRender: (value, tableMeta, rowData) => {
          return (
            <CustomCell
              rowIndex={tableMeta.rowIndex}
              rowTarget={rowNumber}
              value={value}
              onChangeForm={onChangeForm}
              columnName={tableMeta.columnData["name"]}
            />
          );
        },
      },
    },
    {
      name: "family",
      label: "Family",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <CustomCell
              rowIndex={tableMeta.rowIndex}
              rowTarget={rowNumber}
              value={value}
              onChangeForm={onChangeForm}
              columnName={tableMeta.columnData["name"]}
            />
          );
        },
      },
    },

    {
      name: "gender",
      label: "Gender",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <CustomCell
              rowIndex={tableMeta.rowIndex}
              rowTarget={rowNumber}
              value={value}
              onChangeForm={onChangeForm}
              columnName={tableMeta.columnData["name"]}
            />
          );
        },
      },
    },

    {
      name: "species",
      label: "Species",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <CustomCell
              rowIndex={tableMeta.rowIndex}
              rowTarget={rowNumber}
              value={value}
              onChangeForm={onChangeForm}
              columnName={tableMeta.columnData["name"]}
            />
          );
        },
      },
    },

    {
      name: "quality",
      label: "Quality",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <CustomCell
              rowIndex={tableMeta.rowIndex}
              rowTarget={rowNumber}
              value={value}
              onChangeForm={onChangeForm}
              columnName={tableMeta.columnData["name"]}
            />
          );
        },
      },
    },

    {
      name: "size",
      label: "Size",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <CustomCell
              rowIndex={tableMeta.rowIndex}
              rowTarget={rowNumber}
              value={value}
              onChangeForm={onChangeForm}
              columnName={tableMeta.columnData["name"]}
            />
          );
        },
      },
    },

    {
      name: "country",
      label: "Country",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <CustomCell
              rowIndex={tableMeta.rowIndex}
              rowTarget={rowNumber}
              value={value}
              onChangeForm={onChangeForm}
              columnName={tableMeta.columnData["name"]}
            />
          );
        },
      },
    },

    {
      name: "comment",
      label: "Comment",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <CustomCell
              rowIndex={tableMeta.rowIndex}
              rowTarget={rowNumber}
              value={value}
              onChangeForm={onChangeForm}
              columnName={tableMeta.columnData["name"]}
            />
          );
        },
      },
    },

    {
      name: "price",
      label: "Price",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <CustomCell
              rowIndex={tableMeta.rowIndex}
              rowTarget={rowNumber}
              value={value}
              onChangeForm={onChangeForm}
              columnName={tableMeta.columnData["name"]}
            />
          );
        },
      },
    },

    {
      name: "habitat",
      label: "Habitat",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, rowData) => {
          return (
            <CustomCell
              rowIndex={tableMeta.rowIndex}
              rowTarget={rowNumber}
              value={value}
              onChangeForm={onChangeForm}
              columnName={tableMeta.columnData["name"]}
            />
          );
        },
      },
    },
    {
      name: "Editar",
      options: {
        download: false,

        customBodyRender: (rowData, tableMeta) => {
          return (
            <EditButton
              rowIndex={tableMeta.rowIndex}
              onChangeInEditingMode={onChangeInEditingMode}
              rowTarget={rowNumber}
            />
          );
          // return <b>{!rowTarget ?  <button onClick={() =>{onChangeInEditingMode(tableMeta.rowIndex)}}>Editar</button> : <button onClick={onChangeInEditingMode}>Aceptar</button>}</b>
        },
      },
    },
  ];
};

export default customColumns;
