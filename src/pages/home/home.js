import { mapActions, mapGetters } from "vuex";
import wikiTitle from "@/components/wiki-title/wiki-title.vue";
import wikiStat from "@/pages/home/components/wiki-stat/wiki-stat.vue";

export default {
  name: "home",
  data: function () {
    return {
      title: "Dashboard",
      subTitle: "Base de conhecimento",
      icon: "fa fa-home",
    };
  },
  computed: mapGetters({ stats: "stat/stats" }),
  methods: mapActions({ loadStats: "stat/stats" }),
  mounted() {
    this.loadStats();
  },
  components: { wikiTitle, wikiStat },
};
