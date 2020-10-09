import React, { useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import utils from '../utils';
const CustomCell = (props) => {
  // console.log("ROWS:" + props.rowIndex + "Target:" + props.rowTarget);
  const shells = props.data;
  
  useEffect(() => {
    console.log("entra a useEffect");
    if (
      props.rowIndex === props.rowTarget &&
      props.columnName.toLowerCase() === "id"
    ) {
      props.onChangeForm(props.columnName.toLowerCase(), props.value);
    }
  }, [props.columnName, props.rowTarget]);

  if (props.columnName.toLowerCase() === "id") {
    return <div>{props.value}</div>;
  }


  if (props.rowIndex === props.rowTarget && props.columnName === "family") {
    const families = [...new Set(shells.map(item => item[1]))]
    families.sort()

    return (
<Autocomplete
      id="combo-box-demo"
      freeSolo
      options={families}
      getOptionLabel={(families) => families}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={`select ${props.columnName}`} variant="outlined" />}
      onInputChange={(event,value) =>
        props.onChangeForm(props.columnName.toLowerCase(), value)
      }
    />
    );
  }
  if (props.rowIndex === props.rowTarget && props.columnName === "genus") {
    // console.log
    const genus = [...new Set(shells.map(item => item[2]))]
    genus.sort()

    return (
<Autocomplete
      id="combo-box-demo"
      options={genus}
      freeSolo
      getOptionLabel={(genus) => genus}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={`select ${props.columnName}`} variant="outlined" />}
      onInputChange={(event,value) =>
        props.onChangeForm(props.columnName.toLowerCase(), value)
      }
    />
    );
  }
  if (props.rowIndex === props.rowTarget && props.columnName === "species") {
    // console.log
    const species = [...new Set(shells.map(item => item[3]))]
    species.sort()

    return (
<Autocomplete
      id="combo-box-demo"
      options={species}
      freeSolo
      getOptionLabel={(species) => species}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={`select ${props.columnName}`} variant="outlined" />}
      onInputChange={(event,value) =>
        props.onChangeForm(props.columnName.toLowerCase(), value)
      }
    />
    );
  }

  if (props.rowIndex === props.rowTarget && props.columnName === "quality") {
    let quality = ['F','F+','F++','F+++']
    return (
<Autocomplete
      id="combo-box-demo"
      options={quality}
      getOptionLabel={(quality) => quality}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={`select ${props.columnName}`} variant="outlined" />}
      onInputChange={(event,value) =>
        props.onChangeForm(props.columnName.toLowerCase(), value)
      }
    />
    );
  }


  if (props.rowIndex === props.rowTarget && props.columnName === "size") {
    let size = [...new Set(shells.map(item => item[5]))]
    size.sort()
    return (
<Autocomplete
      id="combo-box-demo"
      options={size}
      getOptionLabel={(size) => size}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={`select ${props.columnName}`} variant="outlined" />}
      onInputChange={(event,value) =>
        props.onChangeForm(props.columnName.toLowerCase(), value)
      }
    />
    );
  }
  if (props.rowIndex === props.rowTarget && props.columnName === "country") {
    // console.log
    

    return (
<Autocomplete
      id="combo-box-demo"
      options={utils.countries}
      freeSolo
      getOptionLabel={(countries) => countries.label}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={`select ${props.columnName}`} variant="outlined" />}
      onInputChange={(event,value) =>
        props.onChangeForm(props.columnName.toLowerCase(), value)
      }
    />
    );
  }
  
  if (props.rowIndex === props.rowTarget && props.columnName === "comment") {
    // console.log
    const comment = [...new Set(shells.map(item => item[7]))]
    comment.sort()

    return (
<Autocomplete
      id="combo-box-demo"
      options={comment}
      freeSolo
      getOptionLabel={(comment) => comment}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={`select ${props.columnName}`} variant="outlined" />}
      onInputChange={(event,value) =>
        props.onChangeForm(props.columnName.toLowerCase(), value)
      }
    />
    );
  }
  if (props.rowIndex === props.rowTarget && props.columnName === "price") {
    // console.log
    const price = [...new Set(shells.map(item => item[8]))]
    price.sort()

    return (
<Autocomplete
      id="combo-box-demo"
      options={price}
      freeSolo
      getOptionLabel={(price) => price}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={`select ${props.columnName}`} variant="outlined" />}
      onInputChange={(event,value) =>
        props.onChangeForm(props.columnName.toLowerCase(), value)
      }
    />
    );
  }
  
  if (props.rowIndex === props.rowTarget) {
    return (
      <input
        onChange={(input) =>
          props.onChangeForm(props.columnName.toLowerCase(), input.target.value)
        }
        defaultValue={props.value}
      />
    );
  }

  return <div>{props.value}</div>;
};
export default CustomCell;



// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
