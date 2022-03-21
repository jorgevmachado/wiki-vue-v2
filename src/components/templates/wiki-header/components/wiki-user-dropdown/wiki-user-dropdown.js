import { mapActions, mapGetters } from "vuex";
import Gravatar from "vue-gravatar";
export default {
  name: "wiki-user-dropdown",
  computed: mapGetters({ user: "user/user" }),
  methods: mapActions({ logout: "user/logout" }),
  components: { Gravatar },
};
