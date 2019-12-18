import Vue from "vue";
import VueLocalStorage from "vue-localstorage";

Vue.use(VueLocalStorage);

export default {
  namespaced: true,
  state: {
    language: Vue.localStorage.get("language")
  },
  mutations: {
    SET_LANGUAGE(state, lang) {
      Vue.localStorage.set("language", lang);
      state.language = lang;
    }
  },
  actions: {
    setLanguage({ commit }, languages) {
      if (typeof languages === "string") {
        commit("SET_LANGUAGE", languages);
      }
    }
  }
};
