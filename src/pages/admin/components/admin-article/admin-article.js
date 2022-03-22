import { mapActions, mapGetters } from "vuex";
import { VueEditor } from "vue2-editor";
import { ARTICLE } from "@/constants";

export default {
  name: "admin-article",
  computed: mapGetters({
    article: "article/article",
    articles: "article/articles",
    categories: "category/categories",
    users: "user/users",
    mode: "mode",
    page: "page",
    limit: "limit",
    count: "count",
  }),
  data: function () {
    return {
      type: ARTICLE,
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "description", label: "Descrição", sortable: true },
        { key: "actions", label: "Ações" },
      ],
    };
  },
  methods: {
    ...mapActions({
      index: "index",
      reset: "reset",
      remove: "remove",
      save: "save",
      loadCategories: "category/index",
    }),
  },
  watch: {
    page() {
      this.index(this.type);
    },
  },
  mounted() {
    this.loadCategories();
    this.index(this.type);
  },
  components: { VueEditor },
};
