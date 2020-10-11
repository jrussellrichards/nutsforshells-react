import axios from "axios";

const updateShell = ( form,dispatch) =>
  axios({
    method: "put",
    url: `https://nutsforshells-api.herokuapp.com/shell`,
    data: form,
  }).then((res) => dispatch());

export default updateShell;
