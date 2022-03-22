import wikiTitle from "@/components/wiki-title/wiki-title.vue";

export default {
  name: "about",
  data: function () {
    return {
      title: "Sobre",
      subTitle: "Quem Somos",
      icon: "fa fa-building",
    };
  },
  components: { wikiTitle },
};
