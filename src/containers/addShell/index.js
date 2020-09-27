import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
// Component
import forms from "../../components/forms/";
import rest from "../../rest";

import "./style.scss";

export default (props) => {
  const history = useHistory();

  const _reqRegister = async (form) => {
    console.log(form)
    const res = await rest.addShell(form);
    console.log(res)
    if ( res ) alert("Registro exitoso!")
    else alert("Ups! Hubo un problema, vuelve a intentarlo comunicate con soporte.")
    history.push("/");
  };

  return(

        <forms.AddShell reqRegister={ _reqRegister } messages={{}} />

  )
};
