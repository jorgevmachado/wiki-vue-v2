import { API_USER } from "@/constants";

export default () => ({
  api: API_USER,
  superUser: null,
  user: null,
  users: [],
  token: null,
  validatingToken: false,
});
