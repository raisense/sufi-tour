import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import GoldenChain from "../views/GoldenChain.vue";
import ToursItem from "../views/ToursItem.vue";
import store from "../store";
import { i18n } from "../plugins/i18n.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/golden-chain",
    name: "golden-chain",
    component: GoldenChain
  },

  {
    path: "/tours",
    name: "tours",
    component: () =>
      import(/* webpackChunkName: "tours" */ "../views/Tours.vue")
  },
  {
    path: "/tours/:id",
    name: "tour-item",
    component: ToursItem
  },
  {
    path: "/gallery",
    name: "gallery",
    component: () =>
      import(/* webpackChunkName: "gallery" */ "../views/Gallery.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  }

  //   ]
  // }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  let routerLang = to.params.lang;
  if (
    store.state.language.language &&
    store.state.language.language !== i18n.locale
  ) {
    i18n.locale = store.state.language.language;
    // routerLang = store.state.language.language;
    console.log(routerLang);
    next();
  } else if (!store.state.language.language) {
    store.dispatch("language/setLanguage", navigator.languages).then(() => {
      i18n.locale = store.state.language.language;
      console.log(routerLang);
      next();
    });
  }
  // else if (routerLang !== i18n.locale) {
  //   i18n.locale = routerLang;
  //   console.log(routerLang);
  //   next();
  // }
  else {
    console.log(routerLang);
    next();
  }
});

export default router;
