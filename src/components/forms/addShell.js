import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./style.scss";
import Button from "@material-ui/core/Button";

export default ({ reqRegister, messages = {}, data }) => {
  const columnValues = {};

  const styleMargin = {
    margin:'0.25em',
    width: '30em'
  };

  const distinctValues = (column) => {
    let flags = [],
      output = [],
      l = data.length,
      i;

    for (i = 0; i < l; i++) {
      if (flags[data[i][column]]) continue;
      flags[data[i][column]] = true;
      output.push(data[i][column]);
    }

    return flags;
  };

  columnValues.class = Object.keys(distinctValues("class"));
  columnValues.family = Object.keys(distinctValues("family"));
  columnValues.genus = Object.keys(distinctValues("genus"));
  columnValues.specie = Object.keys(distinctValues("specie"));
  columnValues.quality = Object.keys(distinctValues("quality"));
  columnValues.size = Object.keys(distinctValues("size"));
  columnValues.country = Object.keys(distinctValues("country"));
  columnValues.comment = Object.keys(distinctValues("comment"));
  columnValues.price = Object.keys(distinctValues("price"));

  const [form, setForm] = useState({
    family: "",
    genus: "",
    specie: "",
    quality: "",
    size: "",
    country: "",
    comment: "",
    price: "",
    class: "",
  });

  console.log(form);

  const _handleRegister = async (e) => {
    e.preventDefault();
    await reqRegister(form);
  };
  let quality = ["F", "F+", "F++", "F+++"];

  return (
    <section className="register-form-wrapper">
      <form id="register-form">
        <Autocomplete
          style={styleMargin}
          id="combo-box-demo"
          options={columnValues.class}
          getOptionLabel={(option) => option}
          
          renderInput={(params) => (
            <TextField {...params} label={`Class`} variant="outlined" />
          )}
          onInputChange={
            (event, value) => {
              setForm({ ...form, class: value });
            }
            // setForm(props.columnName.toLowerCase(), value)
          }
        />
        <Autocomplete
          style={styleMargin}
          id="combo-box-demo"
          options={columnValues.family}
          getOptionLabel={(option) => option}
          
          renderInput={(params) => (
            <TextField {...params} label={`Family`} variant="outlined" />
          )}
          onInputChange={
            (event, value) => setForm({ ...form, family: value })

            // setForm(props.columnName.toLowerCase(), value)
          }
        />
        <Autocomplete
          style={styleMargin}
          id="combo-box-demo"
          options={columnValues.genus}
          getOptionLabel={(option) => option}
          
          renderInput={(params) => (
            <TextField {...params} label={`Genus`} variant="outlined" />
          )}
          onInputChange={(event, value) => setForm({ ...form, genus: value })}
        />
        <Autocomplete
          style={styleMargin}
          id="combo-box-demo"
          options={columnValues.specie}
          getOptionLabel={(option) => option}
          
          renderInput={(params) => (
            <TextField {...params} label={`Specie`} variant="outlined" />
          )}
          onInputChange={(event, value) => setForm({ ...form, specie: value })}
        />
        <Autocomplete
          style={styleMargin}
          id="combo-box-demo"
          options={quality}
          getOptionLabel={(option) => option}
          
          renderInput={(params) => (
            <TextField {...params} label={`Quality`} variant="outlined" />
          )}
          onInputChange={(event, value) => setForm({ ...form, quality: value })}
        />
        <Autocomplete
          style={styleMargin}
          id="combo-box-demo"
          options={columnValues.size}
          getOptionLabel={(option) => option}
          
          renderInput={(params) => (
            <TextField {...params} label={`Size`} variant="outlined" />
          )}
          onInputChange={(event, value) => setForm({ ...form, size: value })}
        />
        <Autocomplete
          style={styleMargin}
          id="combo-box-demo"
          options={columnValues.country}
          getOptionLabel={(option) => option}
          
          renderInput={(params) => (
            <TextField {...params} label={`Country`} variant="outlined" />
          )}
          onInputChange={(event, value) => setForm({ ...form, country: value })}
        />
        <Autocomplete
          style={styleMargin}
          id="combo-box-demo"
          options={columnValues.comment}
          getOptionLabel={(option) => option}
          
          renderInput={(params) => (
            <TextField {...params} label={`Comment`} variant="outlined" />
          )}
          onInputChange={(event, value) => setForm({ ...form, comment: value })}
        />
        <Autocomplete
          style={styleMargin}
          id="combo-box-demo"
          options={columnValues.price}
          getOptionLabel={(option) => option}
          
          renderInput={(params) => (
            <TextField {...params} label={`Price`} variant="outlined" />
          )}
          onInputChange={(event, value) => setForm({ ...form, price: value })}
        />
        <Button
          type="submit"
          onClick={_handleRegister}
          variant="contained"
          color="primary"
        >
          Aceptar
        </Button>
      </form>
    </section>
  );
};
