import axios from "axios";

export default (ids) => {
  axios({
    method: 'post',
    url: 'http://localhost:5000/eliminado',
    data: { "ids_eliminados": ids },
  }).then((res) => res.data);
};
