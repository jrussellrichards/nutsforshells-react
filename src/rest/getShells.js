import axios from "axios";




const getShells = async () => {
    return await axios.get('https://nutsforshells-api.herokuapp.com/shells' );
  }

export default getShells
