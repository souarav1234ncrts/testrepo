const isAuthenticatd = () => {
  if (localStorage.getItem("JWT")) {
    return true;
  } else {
    return false;
  }
};
export default isAuthenticatd;
