import axios from "axios";
import { BASEAPIURL, showError } from "@/constants";

const stats = ({ commit }) =>
  axios
    .get(`${BASEAPIURL}/stats`)
    .then((res) => commit("setStats", res.data))
    .catch(showError);
export default {
  stats,
};
