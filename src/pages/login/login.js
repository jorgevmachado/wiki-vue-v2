import { mapActions } from "vuex";

export default {
  name: "login",
  data: function () {
    return {
      user: {},
    };
  },
  methods: mapActions({ login: "user/login" }),
};
