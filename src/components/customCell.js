import React, { useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import utils from '../utils';
const CustomCell = (props) => {
  // console.log("ROWS:" + props.rowIndex + "Target:" + props.rowTarget);
  const shells = props.data;
  
  useEffect(() => {
    // console.log("entra a useEffect");
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


  if (props.rowIndex === props.rowTarget && props.columnName === "class") {
    const classes = [...new Set(shells.map(item => item.class))]
    classes.sort()

    return (
<Autocomplete
      id="combo-box-demo"
      freeSolo
      options={classes}
      getOptionLabel={(classes) => classes}
      style={{ width: '120%' }}
      renderInput={(params) => <TextField {...params} label={` ${props.value}`} variant="outlined" />}
      onInputChange={(event,value) =>
        props.onChangeForm(props.columnName.toLowerCase(), value)
      }
    />
    );
  }
  if (props.rowIndex === props.rowTarget && props.columnName === "family") {
    const families = [...new Set(shells.map(item => item.family))]
    families.sort()

    return (
<Autocomplete
      id="combo-box-demo"
      freeSolo
      options={families}
      getOptionLabel={(families) => families}
      style={{ width: '120%' }}
      renderInput={(params) => <TextField {...params} label={` ${props.value}`} variant="outlined" />}
      onInputChange={(event,value) =>
        props.onChangeForm(props.columnName.toLowerCase(), value)
      }
    />
    );
  }
  if (props.rowIndex === props.rowTarget && props.columnName === "genus") {
    // console.log
    const genus = [...new Set(shells.map(item => item.genus))]
    genus.sort()

    return (
<Autocomplete
      id="combo-box-demo"
      options={genus}
      freeSolo
      getOptionLabel={(genus) => genus}
      style={{ width: '10em' }}
      renderInput={(params) => <TextField {...params} label={` ${props.value}`} variant="outlined" />}
      onInputChange={(event,value) =>
        props.onChangeForm(props.columnName.toLowerCase(), value)
      }
    />
    );
  }
  if (props.rowIndex === props.rowTarget && props.columnName === "specie") {
    // console.log
    const species = [...new Set(shells.map(item => item.specie))]
    species.sort()

    return (
<Autocomplete
      id="combo-box-demo"
      options={species}
      freeSolo
      getOptionLabel={(species) => species}
      style={{ width: '120%' }}
      renderInput={(params) => <TextField {...params} label={` ${props.value}`} variant="outlined" />}
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
      style={{ width: '100%' }}
      renderInput={(params) => <TextField {...params} label={` ${props.value}`} variant="outlined" />}
      onInputChange={(event,value) =>
        props.onChangeForm(props.columnName.toLowerCase(), value)
      }
    />
    );
  }


  if (props.rowIndex === props.rowTarget && props.columnName === "size") {
    let size = [...new Set(shells.map(item => item.size))]
    size.sort()
    return (
<Autocomplete
      id="combo-box-demo"
      options={size}
      getOptionLabel={(size) => size}
      style={{ width: '120%' }}
      renderInput={(params) => <TextField {...params} label={` ${props.value}`} variant="outlined" />}
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
      style={{ width: '120%' }}
      renderInput={(params) => <TextField {...params} label={` ${props.value}`} variant="outlined" />}
      onInputChange={(event,value) =>
        props.onChangeForm(props.columnName.toLowerCase(), value)
      }
    />
    );
  }
  
  if (props.rowIndex === props.rowTarget && props.columnName === "comment") {
    // console.log
    const comment = [...new Set(shells.map(item => item.comment))]
    comment.sort()

    return (
<Autocomplete
      id="combo-box-demo"
      options={comment}
      freeSolo
      getOptionLabel={(comment) => comment}
      style={{ width: '15em' }}
      renderInput={(params) => <TextField {...params} label={` ${props.value}`} variant="outlined" />}
      onInputChange={(event,value) =>
        props.onChangeForm(props.columnName.toLowerCase(), value)
      }
    />
    );
  }
  if (props.rowIndex === props.rowTarget && props.columnName === "price") {
    const price = [...new Set(shells.map(item => item.price))].filter(word => word);
    price.sort()
    console.log(price)

    return (
<Autocomplete
      id="combo-box-demo"
      options={price}
      freeSolo
      getOptionLabel={(price) => price.toString()}
      style={{ width: '100%' }}
      renderInput={(params) => <TextField {...params} label={` ${props.value}`} variant="outlined" />}
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
