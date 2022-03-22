import { mapActions, mapGetters } from "vuex";
import { CATEGORY } from "@/constants";

export default {
  name: "admin-category",
  computed: mapGetters({
    mode: "mode",
    category: "category/category",
    categories: "category/categories",
    page: "page",
    limit: "limit",
    count: "count",
  }),
  data: function () {
    return {
      type: CATEGORY,
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "path", label: "Caminho", sortable: true },
        { key: "actions", label: "Ações" },
      ],
    };
  },
  methods: {
    ...mapActions({
      index: "index",
      reset: "reset",
      save: "save",
      show: "show",
      remove: "remove",
    }),
    load(category, mode = "save") {
      this.show({
        store: this.type,
        mode: mode,
        data: category,
      });
    },
  },
  mounted() {
    this.index(this.type);
  },
};
