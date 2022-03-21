import { mapActions, mapGetters } from "vuex";
import wikiUserDropdown from "@/components/templates/wiki-header/components/wiki-user-dropdown";

export default {
  name: "wiki-header",
  props: {
    title: {
      require: true,
      type: String,
    },
    hideToggle: {
      require: true,
      type: Boolean,
    },
    hideUserDropdown: {
      require: true,
      type: Boolean,
    },
  },
  computed: mapGetters({ icon: "icon" }),
  methods: mapActions({ toggleMenu: "toggleMenu" }),
  components: { wikiUserDropdown },
};
