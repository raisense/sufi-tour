import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ToursItem from "../views/ToursItem.vue";
import store from "../store";
import { i18n } from "../plugins/i18n.js";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   redirect: `/${i18n.locale}`
  // },
  // {
  //   path: "/:lang",
  //   component: {
  //     render(c) {
  //       return c("router-view");
  //     }
  //   },
  //   children: [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
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
  }
  //   ]
  // }
];

const router = new VueRouter({
  mode: "history",
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
