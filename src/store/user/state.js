import { API_USER } from "@/constants";

export default () => ({
  api: API_USER,
  superUser: null,
  user: {},
  users: [],
  token: null,
  validatingToken: false,
});
