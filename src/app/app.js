import wikiHeader from "@/components/templates/wiki-header/wiki-header.vue";
import wikiMenu from "@/components/templates/wiki-menu/wiki-menu.vue";
import wikiContent from "@/components/templates/wiki-content/wiki-content.vue";
import wikiLoading from "@/components/templates/wiki-loading/wiki-loading.vue";
import wikiFooter from "@/components/templates/wiki-footer/wiki-footer.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "app",
  computed: mapGetters({
    title: "title",
    user: "user/superUser",
    token: "user/token",
    validatingToken: "user/validatingToken",
    isMenuVisible: "isMenuVisible",
  }),
  methods: mapActions({ validateToken: "user/validateToken" }),
  created() {
    this.validateToken();
  },
  components: { wikiHeader, wikiMenu, wikiContent, wikiLoading, wikiFooter },
};
