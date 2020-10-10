import React, { useState, useEffect } from "react";
import "./style.scss";


export default ({ reqRegister, messages = {} }) => {
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

  const _handleRegister = async (e) => {
      e.preventDefault();
      await reqRegister(form);
  };


  return (
    <section className="register-form-wrapper">
      <label id="register-label">Add Specie</label>
      <form id="register-form" >
        {/* <FormLabel style={label}>Email</FormLabel> */}

        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>family</label>
        <input
          name="family"
          type="text"
          className="register-input"
          onChange={(e) => setForm({ ...form, family: e.target.value })}
          family={form.family}
        />
        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>genus</label>
        <input
          name="genus"
          type="text"
          className="register-input"
          onChange={(e) => setForm({ ...form, genus: e.target.value })}
          genus={form.genus}
        />
    

        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>specie</label>
        <input
          name="specie"
          type="text"
          className="register-input"
        //   placeholder={user.specie}
          onChange={(e) => setForm({ ...form, specie: e.target.value })}
        />

        {/* <FormLabel style={label}>Rut</FormLabel> */}

        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>quality</label>
        <input
          name="quality"
          type="text"
          className="register-input"
        //   placeholder={user.quality}
          onChange={(e) => setForm({ ...form, quality: e.target.value })}
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

        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>country</label>
        <input
          name="country"
          type="text"
          className="register-input"
        //   placeholder={user.country}
          onChange={(e) => setForm({ ...form, country: e.target.value })}
        />
        {/* <FormLabel style={label}>Avatar</FormLabel> */}

        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>comment</label>
        <input
          name="comment"
          type="text"
          className="register-input"
        //   placeholder={user.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
        />

        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>class</label>
        <input
          name="class"
          type="text"
          className="register-input"
        //   placeholder={user.class}
          onChange={(e) => setForm({ ...form, class: e.target.value })}
        //   disabled
        />
        <label style={{textAlign: "left", width: "100%", marginBottom: "10px"}}>price</label>
        <input
          name="price"
          type="text"
          className="register-input"
        //   placeholder={user.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
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
          Add
        </button>
      </form>
    </section>
  );
};
