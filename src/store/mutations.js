export const setMenu = (state, isVisible) => {
  if (!state.user.user) {
    state.isMenuVisible = false;
    return;
  }
  if (isVisible === undefined) {
    state.isMenuVisible = !state.isMenuVisible;
  } else if (typeof isVisible === "object") {
    state.isMenuVisible = !state.isMenuVisible;
  } else {
    state.isMenuVisible = isVisible;
  }
};
export const setpage = (state, value) => (state.page = value);
export const setMode = (state, value) => (state.mode = value);
export const setLimit = (state, value) => (state.limit = value);
export const setCount = (state, value) => (state.count = value);
export const setLoadMore = (state, value) => (state.loadMore = value);
export const setUrl = (state, value) => (state.url = value);
