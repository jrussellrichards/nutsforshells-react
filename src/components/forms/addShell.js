import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./style.scss";
import Tooltip from "@material-ui/core/Tooltip";
import FormLabel from "@material-ui/core/FormLabel";


export default ({ user, reqRegister, messages = {} }) => {
  const [form, setForm] = useState({
    genero: "",
    especie: "",
    calidad: "",
    size: "",
    pais: "",
    comentario: "",
    precio: "",
    habitat: "",
  });

  const _handleRegister = async (e) => {
    if (form.confirm_password != form.password) {
      alert("Las contraseñas no coinciden");
      e.preventDefault();
    } else {
      e.preventDefault();
      await reqRegister(form);
    }
  };

  const handleImage = (e) => {
    const selectedImage = e.target.files[0];
    createBase64Image(selectedImage);
  };

  const createBase64Image = (fileObject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setForm({ ...form, habitat: e.target.result });
    };
    reader.readAsDataURL(fileObject);
  };

  {
    console.log("acaaaaaaaaaaaaaaaaaaaaaaa", user);
  }

  return (
    <section className="register-form-wrapper">
      <label id="register-label">Actualizar</label>
      <form id="register-form">
        {/* <FormLabel style={label}>Email</FormLabel> */}

        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>genero</label>
        <input
          name="genero"
          type="text"
          className="register-input"
        //   placeholder={user.genero}
          onChange={(e) => setForm({ ...form, genero: e.target.value })}
          genero={form.genero}
        //   disabled
        />
        {/* <FormLabel style={label}>especie</FormLabel> */}



        {/* <FormLabel style={label}>Nombre</FormLabel> */}

        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>especie</label>
        <input
          name="especie"
          type="text"
          className="register-input"
        //   placeholder={user.especie}
          onChange={(e) => setForm({ ...form, especie: e.target.value })}
        />

        {/* <FormLabel style={label}>Rut</FormLabel> */}

        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>calidad</label>
        <input
          name="calidad"
          type="text"
          className="register-input"
        //   placeholder={user.calidad}
          onChange={(e) => setForm({ ...form, calidad: e.target.value })}
        />
        {/* <FormLabel style={label}>Liceo</FormLabel> */}
        
        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>size</label>
        <input
          name="size"
          type="text"
          className="register-input"
        //   placeholder={user.size}
          onChange={(e) => setForm({ ...form, size: e.target.value })}
        />
        {/* <FormLabel style={label}>Comuna</FormLabel> */}

        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>pais</label>
        <input
          name="pais"
          type="text"
          className="register-input"
        //   placeholder={user.pais}
          onChange={(e) => setForm({ ...form, pais: e.target.value })}
        />
        {/* <FormLabel style={label}>Avatar</FormLabel> */}

        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>comentario</label>
        <input
          name="comentario"
          type="text"
          className="register-input"
        //   placeholder={user.comentario}
          onChange={(e) => setForm({ ...form, comentario: e.target.value })}
        />

        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>precio</label>
        <input
          name="precio"
          type="text"
          className="register-input"
        //   placeholder={user.precio}
          onChange={(e) => setForm({ ...form, precio: e.target.value })}
        //   disabled
        />

   
        {messages.error ? (
          <section class="login-error">{messages.error}</section>
        ) : (
          <div className="v-spacer" />
        )}
        <button
          id="register-submit-button"
          type="submit"
          onClick={_handleRegister}
        >
          Actualizar
        </button>
      </form>
    </section>
  );
};
