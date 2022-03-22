import axios from "axios";

const setSuperUser = (state, user) => {
  state.superUser = user;
  if (user) {
    axios.defaults.headers.common["Authorization"] = `bearer ${user.token}`;
    state.isMenuVisible = true;
    return;
  }
  delete axios.defaults.headers.common["Authorization"];
  state.isMenuVisible = false;
};
const setUser = (state, value) => (state.user = value);
const setUsers = (state, value) => (state.users = value);
const setValidatingToken = (state, value) => (state.validatingToken = value);
export default {
  setSuperUser,
  setUser,
  setUsers,
  setValidatingToken,
};
