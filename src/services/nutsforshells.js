import global from "../config";
const axios = require('axios');




export const eliminar = ids => 
    axios({
        method: 'post',
        url: global.url+'/eliminado',
        data: { "ids_eliminados": ids },
      });
