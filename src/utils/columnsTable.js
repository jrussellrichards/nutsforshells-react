import React,{useState} from "react";
import CustomCell from "../components/customCell";
import EditButton from "../components/editButton";
import rest from "../rest"

const form ={
  id:'',
  family:'',
  specie:'',
  class:'',
  quality:'',
  size:'',
  country:'',
  comment:'',
  price:''

}

const onChangeForm = (column,value) => {

  form[column] = value
 }


const customColumns = (rowNumber,onChangeSelectedRow, data,onLoadData) => {

  const getRow = (column,value) => {
    return rowNumber
   }
  
  const onChangeInEditingMode = async (row) => {
    if(rowNumber===''){
      onChangeSelectedRow(row)

  
    }
    else{
  
     rest.updateShell(form,onLoadData)
     onChangeSelectedRow('')

  
  
    }
  }

  const isInEditingMode = () =>{
    console.log('rowNumber',rowNumber)

    if(rowNumber!==''){
      return false
    }
    return true
  }

  return [
    {
      name: "id",
      label: "Id",
      options: {
        display: isInEditingMode(),
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
        display:isInEditingMode(),
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
        display: isInEditingMode(),
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
        display: isInEditingMode(),
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
              getRow = {getRow}
            />
          );
        },
      },
    },
  ];
};

export default customColumns;
