import { mapActions, mapGetters } from "vuex";
import { USER } from "@/constants";

export default {
  name: "admin-user",
  computed: mapGetters({
    mode: "mode",
    page: "page",
    limit: "limit",
    count: "count",
    user: "user/user",
    users: "user/users",
  }),
  data: function () {
    return {
      type: USER,
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        {
          key: "admin",
          label: "Administrador",
          sortable: true,
          formatter: (value) => (value ? "Sim" : "Não"),
        },
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
    load(data, mode = "save") {
      this.show({
        store: this.type,
        mode: mode,
        data: data,
      });
    },
  },
  mounted() {
    this.index(this.type);
  },
};
