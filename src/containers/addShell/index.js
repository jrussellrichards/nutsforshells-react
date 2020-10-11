import React, { useContext } from "react";
// Component
import RegisterForm from "../../components/forms/addShell"
import addShell from "../../rest/addShell";


export default (props) => {

  const _reqRegister = async (form) => {
    const res = await addShell(form,props.onLoadData);
    console.log('resss:'+res)
    alert("Se agrego la especie!")
    props.handleClose()
    // if ( res ) alert("Se agrego la especie!")
    // else alert("Ups! Hubo un problema, vuelve a intentarlo o comunicate con Javier.")
  };

  return(
      <section style={{outline:'none', ':hover': {outline: 'none!important'}}} className='register-component-wrapper'>
        <RegisterForm reqRegister={ _reqRegister } messages={{}} data = {props.data} onLoadData   />
      </section>
  )
};
