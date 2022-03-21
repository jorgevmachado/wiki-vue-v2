import axios from "axios";
import { BASEAPIURL, showError } from "@/constants";

const treeData = async () =>
  await axios
    .get(`${BASEAPIURL}/categories/tree`)
    .then((res) => res.data)
    .catch(showError);
export default {
  treeData,
};
