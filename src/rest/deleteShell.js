import axios from "axios";

export default (ids) => {
  console.log(ids)
  axios({
    method: 'delete',
    url: '/shells',
    data: { "ids_eliminados": ids },
  }).then((res) => res.data);
};
