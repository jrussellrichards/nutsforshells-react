import React, { useState, useEffect } from "react";
import "./style.scss";


export default ({ reqRegister, messages = {} }) => {
  const [form, setForm] = useState({
    genero: "",
    especie: "",
    calidad: "",
    tamano: "",
    ciudad: "",
    comentario: "",
    precio: "",
    habitat: "",
  });

  const _handleRegister = async (e) => {
      e.preventDefault();
      await reqRegister(form);
  };


  return (
    <section className="register-form-wrapper">
      <label id="register-label">Agregar especie</label>
      <form id="register-form" >
        {/* <FormLabel style={label}>Email</FormLabel> */}

        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>Familia</label>
        <input
          name="familia"
          type="text"
          className="register-input"
          onChange={(e) => setForm({ ...form, familia: e.target.value })}
          familia={form.familia}
        />
        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>genero</label>
        <input
          name="genero"
          type="text"
          className="register-input"
          onChange={(e) => setForm({ ...form, genero: e.target.value })}
          genero={form.genero}
        />
    

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
        
        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>Tamaño</label>
        <input
          name="tamano"
          type="text"
          className="register-input"
        //   placeholder={user.tamano}
          onChange={(e) => setForm({ ...form, tamano: e.target.value })}
        />
        {/* <FormLabel style={label}>Comuna</FormLabel> */}

        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>País</label>
        <input
          name="ciudad"
          type="text"
          className="register-input"
        //   placeholder={user.ciudad}
          onChange={(e) => setForm({ ...form, ciudad: e.target.value })}
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

        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>Habitat</label>
        <input
          name="habitat"
          type="text"
          className="register-input"
        //   placeholder={user.habitat}
          onChange={(e) => setForm({ ...form, habitat: e.target.value })}
        //   disabled
        />
        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>Precio</label>
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
          Agregar
        </button>
      </form>
    </section>
  );
};
