import axios from "axios";
import { BASEAPIURL, showError } from "@/constants";

const treeData = async () =>
  await axios
    .get(`${BASEAPIURL}/categories/tree`)
    .then((res) => res.data)
    .catch(showError);

const index = async ({ commit }) => {
  const url = `${BASEAPIURL}/categories`;
  axios.get(url).then((res) => {
    let categories = res.data.data.map((category) => {
      return {
        ...category,
        value: category.id,
        text: category.path,
        parentId: category.parent_id,
      };
    });
    commit("setcategories", categories);
    commit("setCount", res.data.total, { root: true });
    commit("setLimit", res.data.per_page, { root: true });
  });
  console.log(`x`);
};
export default {
  treeData,
  index,
};
