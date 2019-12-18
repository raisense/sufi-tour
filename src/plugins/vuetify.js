import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

import ru from "vuetify/es5/locale/ru";
import tr from "vuetify/es5/locale/tr";
import en from "vuetify/es5/locale/en";

export default new Vuetify({
  lang: {
    locales: { en, ru, tr },
    current: "en"
  }
});
