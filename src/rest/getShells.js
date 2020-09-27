import axios from "axios";

export default () => {
  axios({
    method: 'delete',
    url: '/shells',
  }).then((res) => res.data);
};
