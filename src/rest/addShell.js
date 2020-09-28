import axios from "axios";

export default (form) => {
  console.log(form)
  axios({
    method: 'post',
    url: 'https://nutsforshells-api.herokuapp.com/shell',
    data: { ...form },
  }).then((res) => res.data);
};


