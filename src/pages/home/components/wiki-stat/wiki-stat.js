export default {
  name: "wiki-stat",
  props: {
    title: {
      required: true,
      type: String,
    },
    value: {
      type: Number,
    },
    icon: {
      required: true,
      type: String,
    },
    color: {
      required: true,
      type: String,
    },
  },
  computed: {
    style() {
      return `color: ${this.color || "#000"}`;
    },
  },
};
