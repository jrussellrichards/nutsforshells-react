import axios from "axios";

export default () => {
  axios({
    method: 'delete',
    url: 'https://nutsforshells-api.herokuapp.com/shells',
  }).then((res) => res.data);
};
