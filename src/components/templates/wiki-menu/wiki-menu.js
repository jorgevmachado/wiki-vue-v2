import { mapActions, mapGetters } from "vuex";
import Tree from "liquor-tree";

export default {
  name: "wiki-menu",
  computed: mapGetters({ isMenuVisible: "isMenuVisible" }),
  data: function () {
    return {
      treeFilter: "",
      treeData: this.getTreeData(),
      treeOptions: {
        propertyNames: { text: "name" },
        filter: { emptyText: "Categoria não encontrada" },
      },
    };
  },
  methods: {
    ...mapActions({ getTreeData: "category/treeData" }),
    onNodeSelect(node) {
      this.$router.push({
        name: "category",
        params: { id: node.id },
      });
      if (this.$mq === "xs" || this.$mq === "sm") {
        this.$store.dispatch("toggleMenu", false);
      }
    },
  },
  mounted() {
    this.$refs.tree.$on("node:selected", this.onNodeSelect);
  },
  components: { Tree },
};
