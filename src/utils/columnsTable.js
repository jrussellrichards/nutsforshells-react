import React,{useState} from "react";
import CustomCell from "../components/customCell";
import EditButton from "../components/editButton";

const form ={
  id:'',
  family:'',
  specie:'',
  class:'',
  quality:'',
  size:'',
  country:'',
  comment:'',
  price:'',
  rowNumber:''

}

const onChangeForm = (column,value) => {
  console.log(form)

  form[column] = value
 }


const customColumns = (rowNumber, onChangeInEditingMode,data) => {



  return [
    {
      name: "id",
      label: "Id",
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
      name: "class",
      label: "Class",
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
              data = {data}
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
              data = {data}
            />
          );
        },
      },
    },

    {
      name: "genus",
      label: "Genus",
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
              data = {data}

            />
          );
        },
      },
    },

    {
      name: "specie",
      label: "Specie",
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
              data = {data}

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
              data = {data}

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
              data = {data}

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
              data = {data}

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
              data = {data}

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
              data = {data}

            />
          );
        },
      },
    },


    {
      name: "Editar",
      options: {
        download: false,
        filter: false,
        sort:false,
        draggable:false,

        customBodyRender: (rowData, tableMeta) => {
          return (
            <EditButton
              rowIndex={tableMeta.rowIndex}
              onChangeInEditingMode={onChangeInEditingMode}
              rowTarget={rowNumber}
            />
          );
        },
      },
    },
  ];
};

export default customColumns;
