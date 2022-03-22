import { mapActions, mapGetters } from "vuex";
import Gravatar from "vue-gravatar";
export default {
  name: "wiki-user-dropdown",
  computed: mapGetters({ user: "user/superUser" }),
  methods: mapActions({ logout: "user/logout" }),
  components: { Gravatar },
};
