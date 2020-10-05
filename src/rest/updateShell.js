import axios from "axios";

const updateUser = ( form) =>
  axios({
    method: "put",
    url: `shell`,
    data: form,
  }).then((res) => res.data);

export default updateUser;
