import axios from "axios";
import deleteShell from "./deleteShell";

axios.interceptors.response.use(undefined, (error) => {
  let res = error.response;
  //FIX REDIRECCION
  if (
    (res.status === 401 || res.status === 403) &&
    (window.location.pathname !== "/login" &&
      window.location.pathname !== "/register" &&
      window.location.pathname !== "/recovery")
  ) {
    window.location = "/login";
  }
  return error;
});

export default {
  deleteShell,
};
