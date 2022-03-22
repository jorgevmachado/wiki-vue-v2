import { BASEAPIURL } from "@/constants";
import axios from "axios";

const index = ({ commit, state }) => {
  const url = `${BASEAPIURL}/articles?page=${state.page}`;
  axios.get(url).then((res) => {
    commit("setArticles", res.data.data);
    commit("setCount", res.data.total, { root: true });
    commit("setLimit", res.data.per_page, { root: true });
  });
};
export default {
  index,
};
