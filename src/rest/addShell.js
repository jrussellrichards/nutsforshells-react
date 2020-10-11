import axios from "axios";

export default (form,dispatch) => {
  axios({
    method: 'post',
    url: 'https://nutsforshells-api.herokuapp.com/shell',
    data: { ...form },
  }).then((res) =>{ dispatch(); return res} )
};
