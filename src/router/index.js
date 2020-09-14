import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/item",
    name: "Item",
    component: () => import(/* webpackChunkName: "about" */ "../views/Item.vue")
  },
  {
    path: "/style",
    name: "Style",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Style.vue")
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/About",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
