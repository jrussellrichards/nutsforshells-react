import axios from "axios";

export default (form) => {
  console.log(form)
  axios({
    method: 'post',
    url: '/shell',
    data: { ...form },
  }).then((res) => res.data);
};
