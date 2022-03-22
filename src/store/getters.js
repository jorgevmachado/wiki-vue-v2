const title = () => "Wiki - Base de Conhecimento";
const isMenuVisible = (state) => state.isMenuVisible;
const icon = (state) =>
  state.isMenuVisible ? "fa-angle-left" : "fa-angle-down";
const page = (state) => state.page;
const limit = (state) => state.limit;
const count = (state) => state.count;
const mode = (state) => state.mode;
const loadMore = (state) => state.loadMore;
const url = (state) => state.url;
export default {
  title,
  icon,
  isMenuVisible,
  page,
  limit,
  count,
  mode,
  loadMore,
  url,
};
