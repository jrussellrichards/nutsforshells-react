import axios from "axios";

const updateUser = ( form) =>
  axios({
    method: "put",
    url: `https://nutsforshells-api.herokuapp.com/shell`,
    data: form,
  }).then((res) => res.data);

export default updateUser;
