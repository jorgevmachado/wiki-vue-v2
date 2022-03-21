import axios from "axios";

const setUser = (state, user) => {
  state.user = user;
  if (user) {
    axios.defaults.headers.common["Authorization"] = `bearer ${user.token}`;
    state.isMenuVisible = true;
    return;
  }
  delete axios.defaults.headers.common["Authorization"];
  state.isMenuVisible = false;
};
const setUsers = (state, value) => (state.users = value);
const setValidatingToken = (state, value) => (state.validatingToken = value);
export default {
  setUser,
  setUsers,
  setValidatingToken,
};
