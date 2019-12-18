import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import SmoothScrollbar from "vue-smooth-scrollbar";
import PrismicVue from "prismic-vue";
import linkResolver from "./link-resolver";
import { i18n } from "./plugins/i18n.js";

var VueScrollTo = require("vue-scrollto");

import "./global.scss";

const accessToken =
  "MC5YZmYwNUJFQUFDRUFCbmtm.ICt5KHBI77-9CO-_ve-_vVpeN--_ve-_vWDvv71K77-9De-_vTogCe-_ve-_ve-_vXLvv73vv71paw";

Vue.use(SmoothScrollbar);

Vue.use(VueScrollTo);

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

// Add this before the new Vue instance
Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  apiOptions: { accessToken }
});

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
