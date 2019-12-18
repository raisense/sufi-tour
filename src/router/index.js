import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ToursItem from "../views/ToursItem.vue";

Vue.use(VueRouter);

const routes = [
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
