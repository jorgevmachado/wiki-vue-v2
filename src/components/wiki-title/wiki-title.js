export default {
  name: "wiki-title",
  props: {
    icon: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    subTitle: {
      type: String,
    },
  },
};
