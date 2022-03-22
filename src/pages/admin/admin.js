import wikiTitle from "@/components/wiki-title/wiki-title.vue";
import adminArticle from "@/pages/admin/components/admin-article/admin-article.vue";
import adminCategory from "@/pages/admin/components/admin-category/admin-category.vue";
import adminUser from "@/pages/admin/components/admin-user/admin-user.vue";

export default {
  name: "admin",
  data: function () {
    return {
      title: "Administração do Sistema",
      subTitle: "Cadastros",
      icon: "fa fa-cogs",
    };
  },
  components: { wikiTitle, adminArticle, adminCategory, adminUser },
};
