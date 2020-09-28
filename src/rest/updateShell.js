import axios from "axios";

const updateUser = (id, form) =>
  axios({
    method: "put",
    url: `https://nutsforshells-api.herokuapp.com/users/${id}`,
    data: form,
  }).then((res) => res.data);

export default updateUser;
