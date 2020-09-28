import axios from "axios";

export default (ids) => {
  console.log(ids)
  axios({
    method: 'delete',
    url: 'https://nutsforshells-api.herokuapp.com/shells',
    data: { "ids_eliminados": ids },
  }).then((res) => res.data);
};
